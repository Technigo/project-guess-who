// TO DO: 1)when click "play again" --> show reset layout. 3)show players name during game. 4)pop-up info box. 5) work on filter --> return  


// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById('playAgain')
const findOutButton = document.getElementById('filter')
const winOrLoseText = document.getElementById ('winOrLoseText')
const wrapperOverlay = document.getElementById("startWrapperOverlay")
const guessCounter = document.getElementById("guessCounter")
const playButton = document.getElementById("play");


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'earrings'],
    other: []
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: ['earrings']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]
// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let personToConfirm;
let guessCount = 0;

// sound 
const soundWon = () => {
  let audio = new Audio("won.mp3")
  audio.play();
}

const soundLost = () => {
  let audio = new Audio("fail.mp3")
  audio.play();
}

// Draw the game board
function generateBoard() {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly selected character from characters array. Set as the value of the global variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
console.log(secret)
};

// close overlay --> "play again button"
const closeOverlay = () => {
  wrapperOverlay.style.display = "none";
};

// board when start & restart game
const start = () => {
  charactersInPlay = CHARACTERS 
  generateBoard();  
  setSecret();  
  selectQuestion();
  guessCount = 0;
  guessCounter.innerHTML = guessCount;
}

// setting the currentQuestion object when selecting something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label 
  const value = questions.options[questions.selectedIndex].value 
  currentQuestion = {
    category: category, 
    value: value, 
  }
  console.log(category, value)
}

//Function invoked when click on button Find out
const updateGuesses = () => {
  guessCount ++; // for each question guesses + 1
    guessCounter.innerHTML = guessCount; 
    checkQuestion(); // when select and guess on attribute 
 };

// Function invoked when click on button Find out
// Compare currentQuestion/selected attribute details with the secret person
const checkQuestion = () =>  {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
      if (value === secret[category]) {
        keep = true
      } else {
        keep = false
      }

  } else if (category === 'accessories' || category === 'other') 
    { if (secret[category].includes(value)) {
    keep = true
  } else {
    keep = false
  }
  } 
  filterCharacters ()
} 
  
// FILTER  REDRAW the game board and alert messege
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'hair') {
    if (keep) {
      alert( `True! The person have ${value} hair!` )
    } else  {
      alert(`Oups... the person doesn't have ${value} hair.`)
    }

  } else if (category === 'eyes') {
    if (keep) {
      alert(`True! The person have ${value} eyes.`)
    } else {
      alert(`Oups.. the person doesn't have ${value} eyes.`)
    }

  } else if (category === 'accessories') {
    if (keep) {
      alert( `True! The person wear ${value}`)
    } else {
      alert(`Oups.. the person doesn't wear ${value}.`)
    }

  } else if (category === 'other') {
    if (keep) {
      alert(`Correct! Keep characters with ${value}`)
    } else {
      alert(`Wrong!! Remove characters with ${value}`)
    }  
}

// compare with secret person
if (category === 'hair' || category === 'eyes') {
  if (keep) {
  charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
} else {
  charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
}
}

if (category === 'accessories' || category === 'other') {
  if (keep) {
  charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
} else {
  charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
}
}
generateBoard() // set new board with the remaining characters. 
}

// when clicking guess, the player first have to confirm that they want to make a guess.
// If the player wants to guess, invoke the checkMyGuess function.
const guess = (personToConfirm) => {
  let playerGuess = confirm("Do you want to make a guess on this person?")

  if (playerGuess === true) {
    checkMyGuess(personToConfirm)
  } else {
    alert ("Make a new guess...")
  }
  }

// invoked when user confirm final guess // Show the final win or lose section
const checkMyGuess = (personToCheck) => {

  if (personToCheck === secret.name) {
    soundWon();
    winOrLoseText.innerText = `Yay! ${secret.name} is the correct! Want to play again?` 
    winOrLose.style.display = 'flex' // hiding the board

  } else {
    soundLost();
    winOrLoseText.innerText = `Oh... It is not ${personToCheck}. Right answer is ${secret.name}. Play again?`
    winOrLose.style.display = 'flex' // hiding the board
  }
}
start()  //HTML

// Event listeners
restartButton.addEventListener('click', start)  // restart current game
questions.addEventListener('change', selectQuestion)  // dropdown with selections 
findOutButton.addEventListener('click', checkQuestion && updateGuesses) 
playAgainButton.addEventListener('click', start) // back to homepage)
playButton.addEventListener('click',closeOverlay);


