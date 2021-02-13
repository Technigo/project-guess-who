// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLose = document.getElementById('winOrLose')
const secretPerson = document.getElementById('secretPerson')

// Array with all the characters, as objects
const CHARACTERS = [{
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
  }
]

// Global variables
let secret, currentQuestion, charactersInPlay, secretValue, keep

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
  setSecret()
  generateBoard()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (value) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.????

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

  } else if (category === 'other') {
    currentQuestion = {
      attribute: 'smoker',
      value: true,
      category: category,
    }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const secretValue = secret[currentQuestion.attribute]

  if (secretValue === currentQuestion.value) {
    keep = true;
    filterCharacters(true, currentQuestion.attribute)
  } else {
    keep = false
    filterCharacters(false, currentQuestion.attribute)
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const category = currentQuestion.category
  const attribute = currentQuestion.attribute
  const value = currentQuestion.value

  // Show the correct alert message for different categories
  if (category === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keeping all the people with ${value} hair.`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Removing people with ${value} hair.`
      )
    }
  } else if (category === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keeping all the people with ${value} eyes.`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Removing people with ${value} eyes.`
      )
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keeping all the people that wears ${attribute}.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Removing people that wears ${attribute}.`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${attribute}! Keeping all the people that are ${attribute}s.`
      )
    } else {
      alert(
        `No, the person is not a ${attribute}! Removing people that are ${attribute}s.`
      )
    }
  }

  // filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  let confirmQuestion = (`Are you sure you want to guess on ${suspect}?`)
  let confirmGuess = confirm(confirmQuestion)
  if (confirmGuess === true) {
    checkMyGuess(suspect)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `Congratulations! ${suspect} is the right person!`

  } else {
    winOrLoseText.innerHTML = `Sorry, it's not ${suspect}. The right person was ${secret.name}!`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}
const playAgain = document.getElementById('playAgain')
playAgain.addEventListener('click', () => {
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  start()
})

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener("change", () => {
  selectQuestion(questions.value)
})
filterButton.addEventListener('click', () => {
  checkQuestion()
})