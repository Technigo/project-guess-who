// All the DOM selectors stored as short variables
const startWindow = document.getElementById('startWindow')
const startButton = document.getElementById('startButton')
const gameWindow = document.getElementById('gameWindow')
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const gameTimer = document.getElementById('timer')
const totalQuestions = document.getElementById('totalQuestions')
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
    accessories: ['hat'],
    other: ['parrot']
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
    accessories: ['glasses', 'jewelry'],
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
    accessories: ['glasses', 'jewelry'],
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
    accessories: ['glasses', 'hat', 'jewelry'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
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
let secretCharacter
let currentQuestion
let charactersInPlay
let numberOfQuestions
let startTime
let elapsedTime
const soundEffect = new Audio('./assets/zapsplat_multimedia_button_click_fast_wooden_organic_003_78837.mp3')

// This function starts and restarts the game
const start = () => {

  startWindow.style.display = 'none' // Hides the start window
  gameWindow.style.display = 'flex' // Shows the game window
  
  charactersInPlay = CHARACTERS
  generateBoard()
  setsecretCharacter()

  // Resets the currentQuestion object at every start or restart
  // Makes sure that it is not empty if the user clicks on the 
  // find out button before selecting a question in the list
  currentQuestion = {
    category: 'hair',
    value: 'brown'
  }

  // Resets the selectedIndex value
  questions.selectedIndex = 0

  //Resets number of guesses and the timer when the game restarts
  numberOfQuestions = 0
  totalQuestions.innerHTML = `0`
  elapsedTime = 0 
  timer()
  
}

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

// Randomly selects a person from the characters array 
// and sets as the value of the variable called secretCharacter
const setsecretCharacter = () => {
  secretCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
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

// Sets the currentQuestion object when user selects a question in the dropdown list
// Default question is brown hair
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

// This function is invoked when the 'Find Out' button is clicked
const checkQuestion = () => {

  const { category, value } = currentQuestion

  // Keeps track of how many questions the user has asked
  numberOfQuestions++
  totalQuestions.innerHTML = `${numberOfQuestions}`

  // Compares the currentQuestion details with the secretCharacter details in a
  // different manner based on category type (string or array)
  let keep

  if (typeof secretCharacter[category] === 'string') { //instead of (category === 'hair' || category === 'eyes')
    secretCharacter[category] === value ? keep = true: keep = false 
    /* Ternary operator - same as:
    if (secretCharacter[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }*/
  } else if (Array.isArray(secretCharacter[category])) { //instead of (category === 'accessories' || category === 'other')
    secretCharacter[category].includes(value) ? keep = true : keep = false
  }

  alertKeepOrNot(keep)
  filterCharacters(keep)
}

// Different alert messages to user depending on category and if the value of keep is true or false
const alertKeepOrNot = (keep) => {

  const { category, value } = currentQuestion
  const newLine = `\r\n`

  if (category === 'accessories') {

    if (keep) {
      alert(
        `Yes, the person wears ${value}!${newLine}Keep all people that wear ${value}.`
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}!${newLine}Remove all people that wear ${value}.`
      )
    }

  } else if (category === 'other') {
    
    if (keep) {
      if (value === 'parrot')
        alert(`Yes, the person has a ${value}!${newLine}Keep all people that have a ${value}.`)
      else if (value === 'smoker') 
        alert (`Yes, the person has a smoking habit.${newLine}Keep all people with a smoking habit.`)
    } else {
      if (value === 'parrot')
        alert(`No, the person doesn't have a ${value}!${newLine}Remove all people that have a ${value}.`)
      else if (value === 'smoker')
        alert (`No, the person doesn't have a smoking habit.${newLine}Remove all people that have a smoking habit.`)
    }

  } else { //When category is hair or eyes

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

// This function filters the characters array and redraws the game board with the remaining characters
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  if (Array.isArray(secretCharacter[category])) { // For category values of array type
    
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (typeof secretCharacter[category] === 'string') { // For category values of string type
    
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  
  } else { 
    alert('Something went wrong here. Try again.')
  }
  
  generateBoard();
}

// when clicking guess, the player first has to confirm that he/she wants to make a guess.
// If the player confirms, the checkMyGuess function is invoked
const guess = (personToConfirm) => {
  
  let guess = `So your guess is ${personToConfirm}?`

  if (confirm(guess) === true) {
    checkMyGuess(personToConfirm)
  } else {
    alert('Press ok to continue') 
  }

}

// If user confirms, this function is invoked
// Checks if personToCheck is the same as the secretCharacter
const checkMyGuess = (personToCheck) => {
  let message;
  if (personToCheck === secretCharacter.name) {
    message = `You won! The secret person was ${secretCharacter.name}.`
  } else {
    message = `You lost! The secret person was ${secretCharacter.name}.`
  }
  // Hide the game window
  // Show the win-or-lose-section with the message above
  gameWindow.style.display = 'none'
  winOrLoseSection.style.display = 'flex';
  winOrLoseText.innerHTML = message;
  
}

const confirmRestart = () => {
  let text = `Are you sure you want to restart the game?`

  if (confirm(text) === true) {
    start()
  } 
}

// Shows the start window and hides the game window when page is loaded
window.onload = () => {
  startWindow.style.display = 'flex'
  gameWindow.style.display = 'none'
}

// All the event listeners
startButton.addEventListener('click', start)
restartButton.addEventListener('click', confirmRestart)
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
