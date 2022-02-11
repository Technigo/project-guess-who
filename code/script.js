// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById("filter")
const playAgainButton = document.getElementById("playAgain");
const winOrLoseText = document.getElementById("winOrLoseText");
const winOrLose = document.getElementById("winOrLose");
const guessCounter = document.getElementById("guesses")

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
    accessories: ['tie'],
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
    accessories: ['glasses', 'necklace'],
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
    accessories: ['glasses', 'earrings','necklace'],
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
    accessories: ['glasses', 'earrings'],
    other: []
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
    accessories: ['glasses', 'hat','necklace'],
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
    accessories: ['tie'],
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
let secret
let currentQuestion
let charactersInPlay
let guesses = 0


// Draw the game board
const generateBoard = () => {
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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  winOrLose.style.display='none'
  board.style.display='flex'
  guessCounter.innerHTML = `0`
  console.log(secret)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
const category = questions.options[questions.selectedIndex].parentNode.label;
  // Variable that stores the actual value of the question we've selected.
const value = questions.value
  

  currentQuestion = {
    category: category,
    value: value,
  }
}

// Function that compares the secret person details with the chosen one from the dropdown
// The characters that doesn't fit secret person value will be removed
const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true) 
    }else 
      filterCharacters(false)
  } else if (category === 'accessories' || category === 'other') {
      if(secret[category].includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false) 
    } 
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Alert messages depending on if user is correct or not
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )

      // Makes guesses grow with +1 after every question
      guesses++
      guessCounter.innerHTML = guesses
    }

  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes this person is a ${value}! We will keep all ${value}s.`
      )
      
    } else {
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
        alert(
          `Sorry! This person is not a ${value}. Let's remove every ${value}.`
      )
      guesses++
      guessCounter.innerHTML = guesses
    } 
  } else if (category==="eyes") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Indeed! The person does have ${value} eyes. Let's keep all with ${value} eyes.`
      )
      guesses++
      guessCounter.innerHTML = guesses
      
    } else {
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
        alert(
        `I'm afraid the person does not have ${value} eyes. Let's remove all with ${value} eyes.`
      )
      guesses++
      guessCounter.innerHTML = guesses
      
    }
  } else if (category==="hair") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Sure thing! The person does have ${value} hair. Let's keep all with ${value} hair.`
      )
    }  else {
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
        alert(
        `I'm sorry but the person does not have ${value} hair. Let's remove all with ${value} hair.`
      )
    }
    guesses++
    guessCounter.innerHTML = guesses
  }

  // Invoking function to redraw the board with the remaining people.
  generateBoard()
}

//Function that lets user confirm or cancel their guess
const guess = (personToCheck) => {
  
  let playerGuess = confirm(`Are you sure you want to guess on ${personToCheck}?`);
  
  if (playerGuess) {
    checkMyGuess(personToCheck); //Function gets invoked if user confirms
  } else {
    alert("Please continue!");
  }
};

// If the player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
   
    winOrLoseText.innerHTML = `You won! What a mastermind! ${personToCheck} is correct!`;
    document.getElementById('winAudio').innerHTML = `
    <audio src="./audio/applause.wav" type="audio/wav" autoplay></audio>
    `

  } else {
    winOrLoseText.innerHTML = ` So sorry, wrong guess. It was ${secret.name}.`;
    document.getElementById('looseAudio').innerHTML = `
    <audio src="./audio/loose.wav" type="audio/wav" autoplay></audio>
    `

   
  }
  // Shows the section of winner or looser 
  winOrLose.style.display = "flex";
  // Hides the game board
  board.style.display = "none";

};

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
playAgainButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
