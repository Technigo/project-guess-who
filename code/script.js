// All the DOM selectors stored as short variables
const startWindow = document.getElementById('startWindow')
const startButton = document.getElementById('startButton')
const gameWindow = document.getElementById('gameWindow')
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const gameTimer = document.getElementById('timer')
const totalGuesses = document.getElementById('totalGuesses')
const winOrLoseSection = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

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
    accessories: ['hat', 'parrot'],
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
let numberOfGuesses
let startTime
let elapsedTime
const soundEffect = new Audio('./assets/zapsplat_multimedia_button_click_fast_wooden_organic_003_78837.mp3')

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

// Randomly select a person from the characters array 
// and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Timer  
const timer = () => {
  startTime = Date.now()
  elapsedTime = 0
  setInterval(() => {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000)
    gameTimer.innerHTML = ` ${elapsedTime} s`
  }, 1000)
}

// This function starts and restarts the game
const start = () => {
  startWindow.style.display = 'none' // Hide the start window
  gameWindow.style.display = 'flex' // Show the game window
  
  // The charactersInPlay array includes all the characters to start with
  charactersInPlay = CHARACTERS

  // Render the board on the screen
  generateBoard()

  // Randomly select a secret person
  setSecret()

  // Resets the currentQuestion object at every start or restart
  currentQuestion = {
    category: 'hair',
    value: 'brown'
  }

  // Not sure about this one
  questions.selectedIndex = 0

  //Resets the timer and number of guesses when the game starts or restarts
  elapsedTime = 0 
  timer()
  numberOfGuesses = 0
  totalGuesses.innerHTML = ``
  
  // Console.log the secret person to see that it works correctly
  console.log(`The secret person is ${secret.name}`)
}

// Sets the currentQuestion object when user selects a question in the dropdown list
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

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {

  console.log(currentQuestion.category)

  const { category, value } = currentQuestion

  // Keeps track of how many questions the user has asked
  numberOfGuesses++
  totalGuesses.innerHTML = `${numberOfGuesses}`

  // Compare the currentQuestion details with the secret person details in a
  // different manner based on category type (string or array)
  
  let keep

  if (typeof secret[category] === 'string') { //instead of (category === 'hair' || category === 'eyes')
    secret[category] === value ? keep = true: keep = false 
    /* Ternary operator, same as:
    if (secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }*/
  } else if (Array.isArray(secret[category])) { //instead of (category === 'accessories' || category === 'other')
    secret[category].includes(value) ? keep = true : keep = false
  }

  // Alert user and filter characters depending on if keep is true or false
  alertKeepOrNot(keep)
  filterCharacters(keep)
}

// Different alert messages to user
const alertKeepOrNot = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {

    if (keep) {
      alert(
        `Yes, the person wears ${value}!\r\nKeep all people that wear ${value}`
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}!\r\nRemove all people that wear ${value}`
      )
    }

  } else if (category === 'other') {
    
    if (keep) {
      alert(
        `Yes, the person is a ${value}!\r\nKeep all people that are ${value}s`
      )
    } else {
      alert(
        `No, the person is not a ${value}!\r\nRemove all people that are ${value}s`
      )
    }

  } else { // When category is hair or eyes

    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}!\r\nKeep all people that have ${value} ${category}.`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}!\r\nRemove all people that have ${value} ${category}.`
      )
    }
  }

}

// This function filters the characters array and redraws the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  if (Array.isArray(secret[category])) { // For category values of array type
    
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (typeof secret[category] === 'string') { // For category values of string type
    
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  
  } else { 
    // I don't know if this is necessary?
    alert('Something went wrong here. Try again.')

  }

  // Generate the updated board with the remaining characters
  generateBoard();

}

// This function filters the characters array and redraws the game board.
// const filterCharacters = (keep) => {
//   const { category, value } = currentQuestion

//   if (category === 'accessories') { // Category is of array type
    
//     if (keep) {
//       charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
//     } else {
//       charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//     }

//   } else if (category === 'other') { // Category is of array type
    
//     if (keep) {
//       charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
//     } else {
//       charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//     }
  
//   } else { // Category is of string type

//     if (keep) {
//       charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
//     } else {
//       charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
//     }
//   }

//   // Generate the updated board with the remaining characters
//   generateBoard();

// }

// when clicking guess, the player first has to confirm that he/she wants to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // If the player wants to guess, invoke the checkMyGuess function.
  let guess = `So your guess is ${personToConfirm}?`

  if (confirm(guess) === true) {
    checkMyGuess(personToConfirm)
  } else {
    console.log("Cancel") //Change this?
  }

}

// If user confirms, this function is invoked
// Checks if personToCheck is the same as the secret person
const checkMyGuess = (personToCheck) => {
  let message;
  if (personToCheck === secret.name) {
    message = `You won! The secret person was ${secret.name}.`
  } else {
    message = `You lost! The secret person was ${secret.name}.`
  }
  // Hide the game window
  // Show the win-or-lose-section with the message above
  gameWindow.style.display = 'none'
  winOrLoseSection.style.display = 'flex';
  winOrLoseText.innerHTML = message;
  
}

// Shows the start window and hides the game window when page is loaded
window.onload = () => {
  startWindow.style.display = 'flex'
  gameWindow.style.display = 'none'
}

// All the event listeners
startButton.addEventListener('click', start)
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', () => {
  soundEffect.currentTime = 0
  soundEffect.play()
  checkQuestion()
})
playAgainButton.addEventListener('click', () => {
  winOrLoseSection.style.display = 'none'
  start()
})
