// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findoutButton = document.getElementById('filter')
const playAgainbutton = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLoseWrapper = document.getElementById('winOrLose') 
const updateCounter = document.getElementById("counter-label")

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'a hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat'],
    other: ['bearded']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['a hat'],
    other: ['smoking', 'bearded']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['a collared shirt'],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses', 'a collared shirt' ],
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
    accessories: ['glasses', 'a collared shirt'],
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
    accessories: ['glasses', 'jewellery'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses', 'a turtleneck'],
    other: ['smoking']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'a hat', 'a collared shirt'],
    other: ['smoking']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', 'a turtleneck'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'a hat'],
    other: ['smoking', 'bearded']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a hat', 'jewellery'],
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
    accessories: ['a hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses','a turtleneck'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'jewellery', 'a turtleneck'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', 'a collared shirt'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'a hat', 'jewellery', 'a collared shirt'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewellery'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['a collared shirt'],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['a collared shirt'],
    other: ['bearded']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'a hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let counterVal = 0


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

// Randomly selects secret person
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

// Counting guesses
function incrementClick() {
  updateDisplay(++counterVal)
}

function resetCounter() {
  counterVal = 0;
  updateDisplay(counterVal)
}

function updateDisplay(val) {
  updateCounter.innerHTML = val
}


// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value
  } 
}

// Compares the secret person to the currentQuestion value, invokes filterCharacters
const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      filterCharacters(true)
    } else { 
      filterCharacters()
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    } else if (filterCharacters()) { 
    } 
  } 
}

// Filter the characters array, show correct alert message for and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
 
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert( 
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person doesn't wear ${value}! All people wearing ${value} are removed.`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes, the person is ${value}! Keep all people that are ${value}.`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person isn´t ${value}! Remove all people that are ${value}.`
      )
    }
    
  } else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Yes, the person has ${value} eyes! All people that has ${value} eyes stays in the game!`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, the person doesn't have ${value} eyes! People with ${value} eyes is leaving the game.`
      )
    }
 
  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Yes, the persons hair is ${value}! All people that has ${value} hair are still in the game!`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert( 
      `No, the persons hair isn´t ${value}! All people with ${value} hair are removed.`
      )
    } 
  }  
  generateBoard()
} 

const guess = (personToConfirm) => {
  const confirmed = confirm(`So you think it´s ${personToConfirm}? Is this your final answer?`) 
  if (confirmed) {
    checkMyGuess(personToConfirm)
  } 
}

// Check if the personToCheck is the same as the secret person's name, send winorlose-message
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = 'Yes!! You won!'
  } else {
    winOrLoseText.innerHTML = 'Oh no! You lost the game!' 
  }
  
  winOrLoseWrapper.style.display = 'flex' 
  board.style.display = 'none'  

  playAgainbutton.addEventListener('click', ()=>{
    location.reload()})
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findoutButton.addEventListener('click', checkQuestion)
playAgainbutton.addEventListener('click', start)