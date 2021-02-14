// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const guessCounter = document.getElementById('guess-counter')

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
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay, guesses

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
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
  guesses = 0
  guessCounter.innerHTML = `<p>Number of guesses: ${guesses}</p>`
  board.classList.remove('game-board-inactive')
  winOrLose.classList.remove('win-or-lose-wrapper-active')
  console.log(secret)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  const questionValue = questions.value

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: questionValue,
      category: category
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: questionValue,
      category: category
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: questionValue,
      value: true,
      category: category
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: questionValue,
      value: true,
      category: category
    }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  selectQuestion()
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  guesses++
  guessCounter.innerHTML = `<p>Number of guesses: ${guesses}</p>`
  if (currentQuestion.value === secret[currentQuestion.attribute]) {
    keep = true
  } else {
    keep = false
  }
  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Show the correct alert message for different categories

  const group = currentQuestion.category
  const attribute = currentQuestion.attribute
  const value = currentQuestion.value

  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all persons that wears ${attribute}.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all persons that wears ${attribute}.`
      )
    }
  } else if (group === 'other') {
    if (keep) {
      alert(
        `Yes, the person smokes. Keep all smokers.`
      )
    } else {
      alert(
        `No, the person doesn't smoke. Remove all smokers`
      )
    }
  } else {
    if (keep) {
      if (currentQuestion.attribute === "hairColor") {
        alert(
          `Yes, the person has ${value} hair! Keep all persons with ${value} hair!`
        )
      } else {
        alert(
          `Yes, the person has ${value} eyes! Keep all persons with ${value} eyes!`
        )
      }
    } else {
      if (currentQuestion.attribute === "hairColor") {
        alert(
          `No, the person doesn't have ${value} hair! Remove all persons with ${value} hair!`
        )
      } else {
        alert(
          `No, the person doesn't have ${value} eyes! Remove all persons with ${value} eyes!`
        )
      }
    }
  }

  // filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  if (confirm("Are you sure? If your guess is wrong the game will be lost!")) {
    checkMyGuess(suspect)
  }

  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {

  let message = `Sorry, you lost! The secret person was ${secret.name}.`
  if (suspect === secret.name) {
    message = "Yay, you won!"
    confetti.start()
  } else {

  }
  board.classList.add('game-board-inactive')
  winOrLose.classList.add('win-or-lose-wrapper-active')

  winOrLose.innerHTML = `
  <h1>${message}</h1>
  <img
  class="secret-person-card"
  src="${secret.img}"
  alt="${secret.name}"
  />
  <button id="playAgain" class="filled-button" onclick="start(), confetti.remove()">PLAY AGAIN</button>
 `
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion)