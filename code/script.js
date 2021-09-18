// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')
const instruction = document.getElementById('instruction')
const startGame = document.getElementById('startGame')
const boardWrapper = document.getElementById('boardWrapper')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['female'],
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['male'],
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'male'],
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['male'],
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['male'],
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['male'],
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['female'],
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['female'],
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['female'],
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker', 'female'],
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'male'],
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['female'],
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'male'],
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: ['female'],
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['female'],
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['male'],
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['male'],
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: ['female'],
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['male'],
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['male'],
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: ['female'],
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['male'],
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['male'],
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: ['female'],
  },
]

// Global variables˜
let secret
let currentQuestion
let charactersInPlay

// Game instructions text that should appear and then dissapear when click on button.
const instructionText = () => {
  gameInstructions.style.display = 'flex'
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
  console.log(secret)

  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  console.log('clicks the dropdown')
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value
  console.log('choose the value')

  currentQuestion = {
    category: category,
    value: value,
  }
  console.log('category and value registered', currentQuestion)
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log('clicks find out button')
  const { category, value } = currentQuestion

  let keep = false

  // Compare the currentQuestion details with the secret person details in a different manner based on category
  // (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    keep = secret[category] === value
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value)
  }

  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      )
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `You are right, the person has ${value} hair! Keep all that has ${value} hair.`
      )
    } else {
      alert(
        `Nope, the person doesn't have ${value} hair. Remove all that have ${value} hair.`
      )
    }
  } else if (category === 'eye') {
    if (keep) {
      alert(
        `Good choice, the person has ${value} eyes! Keep all that has ${value} eyes.`
      )
    } else {
      alert(
        `Sorry, the person doesn't have ${value} eyes. Remove all that has ${value} eyes.`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `You are right, the person has ${value}! Keep all that has ${value}.`
      )
    } else {
      alert(
        `Sorry, the person doesn't have ${value}. Remove all that has ${value}.`
      )
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all that still can be the secret person.`
      )
    } else {
      alert(
        `No, the person doesnt have ${value}! Remove all people that in fact are not the secret person.`
      )
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  // // for hair and eyes :
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      )
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      )
    }
    // for accessories and other
  } else if (category === 'accessories' || category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      )
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      )
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const guessed = confirm(`Do you want to guess on this person?`)
  if (guess) {
    checkMyGuess(personToConfirm)
  }

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Are you a mind reader?! It was ${secret.name}.`
  } else {
    winOrLoseText.innerHTML = `Unfortunately you guessed wrong. The secret person was ${secret.name}. Better luck next time.`
  }
  winOrLose.style.display = 'flex'
  boardWrapper.style.display = 'none'
}

// 1. Check if the personToCheck is the same as the secret person's name
// 2. Set a Message to show in the win or lose section accordingly
// 3. Show the win or lose section
// 4. Hide the game board

// Invokes the start function when website is loaded
// start()
instructionText()

// All the event listeners
restartButton.addEventListener('click', () => {
  board.style.display = 'none'
  instructionText()
})
questions.addEventListener('change', selectQuestion)
findOut.addEventListener('click', checkQuestion)
startGame.addEventListener('click', () => {
  gameInstructions.style.display = 'none'
  board.style.display = 'flex'
  start()
})
instruction.addEventListener('click', () => {
  gameInstructions.style.display = 'flex'
  board.style.display = 'none'
})

playAgain.addEventListener('click', () => {
  winOrLose.style.display = 'none'
  boardWrapper.style.display = 'flex'
  gameInstructions.style.display = 'none'
  start()
})
