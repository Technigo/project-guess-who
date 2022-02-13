// All the DOM selectors stored as short variables
const board = document.getElementById('board'), 
  questions = document.getElementById('questions'),
  restartButton = document.getElementById('restart'),
  findOutButton = document.getElementById('filter'),
  winOrLoseSection = document.getElementById('winOrLose'),
  winOrLoseText = document.getElementById('winOrLoseText'),
  playAgainButton = document.getElementById('playAgain');

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
let currentQuestion = {category: 'hair', value: 'brown'}
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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  const value = questions.value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => 
      !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value))
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => 
      !person[category].includes(value))
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Remove all people that have ${value} ${category}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => 
      person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people that have ${value} ${category}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => 
      person[category] !== value)
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirming = confirm(`Are you sure you want to guess ${personToConfirm}?`)
  if (confirming) {
    checkMyGuess(personToConfirm)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Way to go! ${personToCheck} was the correct person!`
  } else {
    winOrLoseText.innerHTML = `Unfortunately you are wrong.. It was ${secret.name}!`
  } 
  winOrLoseSection.style.display = 'flex'
    board.style.display= 'none'
}

// Invokes the start function when website is loaded
start()


// Play again - doesn't work
const playAgain = () => {
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
  winOrLoseSection.style.display = 'none'
  board.style.display = 'flex'
  start()
}


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)
