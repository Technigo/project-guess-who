// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById ('filter')
const winOrLose = document.getElementById ('winOrLose')
const winOrLoseText = document.getElementById ('winOrLoseText')
const playAgain = document.getElementById ('playAgain')

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
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

// Function to draw the game board
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
  // Invokes needed to start the game
  generateBoard ()
  setSecret ()
}

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value
  currentQuestion = {
    category: category,
    value: value
  }
}

// This function is invoked when click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  // Compares the currentQuestion details with the secret person details based on category hair and eyes.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes ) {
      // Will pass on to filterCharacters based on true or false
      filterCharacters(true)
    } else {
        filterCharacters(false)
      }
      // Compares the currentQuestion details with the secret person details based on accessories and other
      // Since value could be an array, we need to add the 'includes'
  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Alert messages for accessories and other and filtering out characters to keep or remove
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert (
        `Yes, the person is a ${value}! Keep all people that is ${value}s`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert (
        `No, the person is not a ${value}! Remove all people that is ${value}s`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
    // Alert messages for hair and eyes and filtering out characters to keep or remove
  } else if (category === 'hair') {
    if (keep) {
      alert (
        `Yes, the person has ${value} hair! Keep all people that has ${value} hair`
      )
      //Filtering out the persons with same value as in question
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert (
        `No, the person has not ${value} hair! Remove all people with ${value} hair`
      )
      //Filtering out the persons that hasn't the same value as in question
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert (
        `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert (
        `No, the person has not ${value} eyes! Remove all people with ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
 // Function to redraw the board with the remaining people.
 generateBoard ()
}

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  if (confirm(`Hey, do you really want to make a guess at ${personToConfirm}?`) == true) {
    // Store the confirm in a variable and invoke checkMyGuess function
    let personToCheck = personToConfirm
    checkMyGuess (personToCheck)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // Show the winOrLose section
  winOrLose.style.display='flex'
  // Hide the gameboard section
  board.style.display='none'
  // Check if personToCheck matches the secret name
  if (secret.name === personToCheck) {
    // Activate the alert messages in the winOrLose section
    winOrLoseText.innerHTML =
    `Yay, good job - ${personToCheck} is the secret person`
  } else {
    winOrLoseText.innerHTML =
    `Sorry, ${personToCheck} isn't correct, ${secret.name} was the secret person`
  }
}

// Function for starting a new round once clicking playAgain button
const oneMoreRound = () => {
 winOrLose.style.display='none'
 board.style.display='flex'
 start ()
}

// Invokes the start function when website is loaded
start()

// All the event listeners
// Eventlistener for Guess button not needed as already declared in generateBoard function
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgain.addEventListener ('click', oneMoreRound)

