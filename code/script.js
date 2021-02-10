// All the DOM selectors stored as short variables
const board = document.querySelector('#board')
const questions = document.querySelector('#questions')
const restartButton = document.querySelector('#restart')
const filter = document.querySelector('#filter')
const winOrLose = document.querySelector("#winOrLose")
const playAgain = document.querySelector("#playAgain")
const winOrLoseText = document.querySelector("#winOrLoseText")

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

// Draws the game board
const generateBoard = () => {
  board.innerHTML = ''
  for (let person of charactersInPlay) {
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
  }
}

// Randomly selects a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Starts the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

// Sets currentQuestion object when the user chooses a value
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value;
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
      text: `${value} hair`,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
      text: `${value} eyes`,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
      text: `a ${value}`,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
      text: "a smoking habit",
    }
  }
}

// When clicking the find out button, this function compares the selected value to the secret person
const checkQuestion = () => {
  let keep
  if (currentQuestion.attribute === "hairColor" && currentQuestion.value === secret.hairColor) {
    keep = true
  }
  else if (currentQuestion.attribute === "eyeColor" && currentQuestion.value === secret.eyeColor) {
    keep = true
  }
  else if (currentQuestion.attribute === "glasses" && currentQuestion.value === secret.glasses) {
    keep = true
  }
  else if (currentQuestion.attribute === "hat" && currentQuestion.value === secret.hat) {
    keep = true
  }
  else if (currentQuestion.attribute === "smoker" && currentQuestion.value === secret.smoker) {
    keep = true
  }
  else {
    keep = false
  }
  filterCharacters(keep)
}


// Filters the characters' array and redraws the game board
const filterCharacters = (keep) => {
  if (keep) {
    alert(
      `Yes, the person has ${currentQuestion.text}! Keep all that have ${currentQuestion.text}.`)
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
  } else {
    alert(
      `No, the person doesn't have ${currentQuestion.text}! Remove all that have ${currentQuestion.text}.`
    )
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
  }
  generateBoard()
}

// When clicking guess, the user has to confirm their guess
const guess = (suspect) => {
  let confirmGuess = confirm(`Are you sure you want to guess on ${suspect}?`)
  if (confirmGuess) {
    checkMyGuess(suspect)
  } else {
  }
}

// After confirmation, this function checks the guess
const checkMyGuess = (suspect) => {
  winOrLose.style.display = "flex"
  board.style.display = "none"
  if (suspect === secret.name) {
    winOrLoseText.innerText = "You won! Congratulations!"
  } else {
    winOrLoseText.innerText = "You lost. Wanna try again?"
  }
}

// When clicking the play again button, the board resets
const restart = () => {
  winOrLose.style.display = "none"
  board.style.display = "flex"
  start()
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener("change", selectQuestion)
filter.addEventListener("click", checkQuestion)
playAgain.addEventListener("click", restart)