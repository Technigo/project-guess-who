// All the DOM selectors stored as short variables in order like the HTML
const restartButton = document.getElementById('restart') 
const questions = document.getElementById('questions') 
const findOut = document.getElementById('filter')
const board = document.getElementById('board')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const boardWrapper = document.getElementById('boardWrapper')
 




//Aduio sound effect
//const audio = new audio("evilLaugh.mp3");
// Audio
// audio.currentTime = 0;
// audio.play();


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
    accessories: ['glasses'],
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
    accessories: ['glasses', 'hat'],
    other: ['gun'],
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
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
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
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

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
// The game starts here
// This function to start (and restart) the game
const start = () => {
  console.log('start function is called')
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret ()

}
// where u selectingen the questions in the dropdown
// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
   const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value,
  }
}


// when we ask the qusetion the checkqusetion 
// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

    let keep = false
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
      keep = secret[category] === value
  } else if (category === 'accessories' || category === 'other') {
      keep = secret[category].includes(value)
  }
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const {category, value } = currentQuestion;
  console.log('This works again')

  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that has ${value} hair.`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that don´t have ${value} hair.`
      )
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `You are right, the person has ${value} eyes! Keep all that has ${value} eyes.`
      )
    } else {
      alert(
        `Nope, the person doesn't have ${value} eyes. Remove all that have ${value} eyes.`
      )
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(`Good choice, the person wears ${value}! Keep all that wears ${value}.`
      )
    } else {
      alert(`Sorry, the person doesn't wears ${value}. Remove all that wears ${value}.`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`You are right, the person is a ${value}! Keep all that are ${value}.`
      )
    } else {
      alert(`Sorry, the person is not a ${value}. Remove all that are ${value}.`
      )
    }
  } else {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all that still can be the secret person.`
      )
    } else {
      alert(`No, the person doesnt have ${value}! Remove all people that in fact are not the secret person.`
      )
    }
  }
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
  if (category === `hair` || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category] !== value)
    }
  }
  else if (category === 'accessories' || category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category] !== value)
    }
  }  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.'
 // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
const guess = (personToConfirm) => {
  const guessed = confirm(`Do you want to guess who the person is?`)
  if (guess) {
    checkMyGuess(personToConfirm)
  }
}
// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Holycrap you are a mind reader! It was ${secret.name}!`
  } else {
    winOrLoseText.innerHTML = `Im sorry you guessed at the wrong person. The secret person was ${secret.name}. I hope you do better next time you play!`
  }
  winOrLose.style.display = 'flex'
  boardWrapper.style.display = 'none'
}
    
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
const  oneMoreTime = () => {
  winOrLose.style.display = 'none'
  start();
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOut.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', oneMoreTime)