// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters
// Change array values for accessories and other to booleans?
const CHARACTERS = [
  {
    name: 'Karl',
    img: 'images/karl.png',
    hairColor: 'grey',
    eyeColor: 'hidden',
    glasses: false,
    sunglasses: true,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Suzy',
    img: 'images/suzy.png',
    hairColor: 'dk brown',
    eyeColor: 'green',
    glasses: true,
    sunglasses: false, 
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Anna',
    img: 'images/anna.png',
    hairColor: 'lt brown',
    eyeColor: 'hidden',
    glasses: false,
    sunglasses: true,
    jewelry: true,
    accessory: false,
  },
  {
    name: 'Jean Paul',
    img: 'images/JeanPaul.png',
    hairColor: 'no',
    eyeColor: 'blue',
    glasses: true,
    sunglasses: false,
    jewelry: false,  
    accessory: false,
  },
  {
    name: 'Alexa',
    img: 'images/alexa.png',
    hairColor: 'dk brown',
    eyeColor: 'green',
    glasses: true,
    sunglasses: false, 
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Vivienne',
    img: 'images/vivienne.png',
    hairColor: 'red',
    eyeColor: 'green',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false,      
  },
  {
    name: 'Marc',
    img: 'images/marc.png',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Cara',
    img: 'images/cara.png',
    hairColor: 'dk blonde',
    eyeColor: 'blue',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: true,
  },
  {
    name: 'Donatella',
    img: 'images/donatella.png',
    hairColor: 'lt blonde',
    eyeColor: 'brown',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Anna B',
    img: 'images/annaB.png',
    hairColor: 'dk brown',
    eyeColor: 'green',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: true, 
  },
  {
    name: 'Victoria',
    img: 'images/victoria.png',
    hairColor: 'lt brown',
    eyeColor: 'hidden',
    glasses: false,
    sunglasses: true,
    jewelry: false,
    accessory: false, 
  },
  {
    name: 'Valentino',
    img: 'images/valentino.png',
    hairColor: 'lt brown',
    eyeColor: 'green',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Iris',
    img: 'images/iris.png',
    hairColor: 'white',
    eyeColor: 'blue',
    glasses: true,
    sunglasses: false,
    jewelry: true,
    accessory: false,    
  },
  {
    name: 'Derek',
    img: 'images/derek.png',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: true,
  },
  {
    name: 'Franca',
    img: 'images/franca.png',
    hairColor: 'lt blonde',
    eyeColor: 'blue',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Grace',
    img: 'images/grace.png',
    hairColor: 'red',
    eyeColor: 'brown',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Isabel',
    img: 'images/isabel.png',
    hairColor: 'grey',
    eyeColor: 'green',
    glasses: true,
    sunglasses: false,
    jewelry: true,
    accessory: false,
  },
  {
    name: 'Susie',
    img: 'images/susie.png',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: true,
  },
  {
    name: 'Man Repeller',
    img: 'images/ManRepeller1.png',
    hairColor: 'dk brown',
    eyeColor: 'blue',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Jules',
    img: 'images/jules.png',
    hairColor: 'dk brown',
    eyeColor: 'hidden',
    glasses: false,
    sunglasses: true,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Garance',
    img: 'images/garance.png',
    hairColor: 'dk brown',
    eyeColor: 'blue',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false,
  },
  {
    name: 'Bryan',
    img: 'images/bryan.png',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: false,
    sunglasses: true,
    jewelry: true,
    accessory: false,
  },
  {
    name: 'Sartorialist',
    img: 'images/sartorialist.png',
    hairColor: 'dk brown',
    eyeColor: 'blue',
    glasses: true,
    sunglasses: false,
    jewelry: false,
    accessory: false, 
  },
  {
    name: 'Betty',
    img: 'images/betty.png',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    sunglasses: false,
    jewelry: false, 
    accessory: true,
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

// Randomly select a person from the characters array and set as the value of the variable called secret. Using Math.
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you really sure you want to guess on ${suspect}?`)

  if (makeAGuess) {
    checkMyGuess(suspect)
  }
}

// If user confirm choice, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `Banana 🍌! <br>
    Congrats - you are a winner! <br>
    The secret minion is ${suspect}!
    <span role=img" aria-label="trophy">🏆</span>` 
  }
  else {
    winOrLoseText.innerHTML = `<span role="img" aria-label = "warningLight">🚨</span> <br>
    Oh no, no banana for you this time. <br>
    ${suspect} is the wrong answer. <br>
    The secret minion is ${secret.name}.`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => { 
  const value = questions.value
  const category = questions.options[questions.selectedIndex].parentNode.label

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value, 
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category, 
    }
  } else {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
}  

// Function invoked when user click "Find out" button.
  const checkQuestion = () => {
    const keep = currentQuestion.value === secret[currentQuestion.attribute]
  
    filterCharacters(keep)
  }

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { attribute, category, value } = currentQuestion

// Show the correct alert message for different categories
if (category === 'accessories') {
  if (keep) {
    alert(
      `Yes, the minion wears ${attribute}! Keep all minions that wear ${attribute}.`
    )
  } else {
    alert(
      `No, the minion does not wear ${attribute}. Remove all minions that wear ${attribute}.`
    )
  }
} else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the minion has a ${attribute}! Keep all minions that have a ${attribute}.`
      )
    } else {
      alert(
        `No the minion does not have a ${attribute}. Remove all minions that does not have a ${attribute}.`
      )
    }
} else {
  if (keep) {
    alert(
      `Correct, the minion has ${value} ${category}! Keep all minions that have ${value} ${category}.`
    )
  } else {
    alert(
      `No, the minion does not have ${value} ${category}. Remove all minions that do not have ${value} ${category}.`
    )
  }
}

// Filter by category to keep or remove characters 
if (keep) {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[attribute] === value
  )
} else {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[attribute] !== value
  )
}

  generateBoard()
}

// Function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS //reset character to original array
  winOrLose.style.display = 'none' //dont show win or lose display 
  board.style.display = 'flex' //show the board again
  setSecret() //sets a new secret person
  generateBoard() //draw board w all characters
  // What else should happen when we start the game?
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion)