// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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
  charactersInPlay = CHARACTERS
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  questions.selectedIndex = defaultStatus
  generateBoard()
  setSecret()
}

// Setting the currentQuestion object when you select something in the dropdown
// ! It doesn't work with shorthands for some reason. I know I could use it here though !
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

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

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = (selectQuestion) => {
  let keep

  if (currentQuestion.category === 'hair color') {
      keep = currentQuestion.value === secret.hairColor 
  } else if (currentQuestion.category === 'eye color') {
      keep = currentQuestion.value === secret.eyeColor
  } else if (currentQuestion.category === 'accessories') {
    if (currentQuestion.attribute === 'glasses') {
      keep = secret.glasses === true
    } else {
      keep = secret.hat === true
    }
  } else {
      keep = secret.smoker === true
  }

  filterCharacters(keep)
} 

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  let group = currentQuestion.category
  const attribute = currentQuestion.attribute

  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      )
    }
  } else if (group === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${attribute}! Keep all persons that are a ${attribute}`
      )
    } else {
      alert(
        `No, the person is not a ${attribute}! Remove all that are a ${attribute}`
      )
    }
  } else if (group === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} eyes! Keep all persons with ${currentQuestion.value} eyes!`
      )
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} eyes. Remove all persons that have ${currentQuestion.value} eyes!`
      )
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} hair! Keep all persons with ${currentQuestion.value} hair!`
      )
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} hair. Remove all persons with ${currentQuestion.value} hair!`
      )
    }
  }

  // Filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === currentQuestion.value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== currentQuestion.value)
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard(charactersInPlay)
} 

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  let myGuess = confirm(`Are you sure you want to guess on ${suspect}?`)

  if (myGuess) {
    checkMyGuess(suspect)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `${suspect} is correct! You won!`
  } else {
    winOrLoseText.innerHTML = 'Sorry, that is not correct. Try again!'
  }

  board.style.display = 'none'
  winOrLose.style.display = 'flex'
} 

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)
