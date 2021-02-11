// All the DOM selectors stored as short variables
const board = document.querySelector('#board')
const questions = document.querySelector('#questions')
const restartButton = document.querySelector('#restart')
const filter = document.querySelector('#filter')
const winOrLose = document.querySelector("#winOrLose")
const playAgain = document.querySelector("#playAgain")
const winOrLoseText = document.querySelector("#winOrLoseText")
const totalGuesses = document.querySelector("#totalGuesses")
const time = document.querySelector("#time")
const guessesMade = document.querySelector("#guessesMade")

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
    jewellery: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
    jewellery: false,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: true,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: true,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
    jewellery: false,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
    jewellery: false,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
    jewellery: false,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: true,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    jewellery: true,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    jewellery: true,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    jewellery: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
    jewellery: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay, numberOfGuesses, timePassed

// Draws the game board
const generateBoard = () => {
  board.innerHTML = ''
  for (let person of charactersInPlay) {
    board.innerHTML += `
    <div class="card">
      <div class="card-inner">
        <p>${person.name.toUpperCase()}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    </div>
    `
  }
}

// Randomly selects a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Starts the game, resets guess counter + timer
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  numberOfGuesses = 0
  totalGuesses.innerText = 0
  timePassed = 0
  timePassed.innerText = 0
  guessesMade.innerHTML = ""
}

// Sets currentQuestion object when the user chooses a value
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value;
  const text = questions.options[questions.selectedIndex].innerText;
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
      text: text,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
      text: text,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
      text: text,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
      text: text,
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
  else if (currentQuestion.attribute === "jewellery" && currentQuestion.value === secret.jewellery) {
    keep = true
  }
  else if (currentQuestion.attribute === "smoker" && currentQuestion.value === secret.smoker) {
    keep = true
  }
  else {
    keep = false
  }
  filterCharacters(keep)
  numberOfGuesses++
  totalGuesses.innerText = numberOfGuesses
}


// Filters the characters' array and redraws the game board
const filterCharacters = (keep) => {
  if (keep) {
    alert(
      `Yes, the secret person has ${currentQuestion.text}! Keeping all characters with ${currentQuestion.text}.`)
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
  } else {
    alert(
      `No, the secret person does not have ${currentQuestion.text}! Removing all characters with ${currentQuestion.text}.`
    )
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
  }
  generateBoard()
  addGuessesMade()
}

// Adds the current guess to the list of guesses made
const addGuessesMade = () => {
  guessesMade.innerHTML += `
  <li>${currentQuestion.text}</li>
  `
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
  guessesMade.innerHTML = ""
  if (suspect === secret.name) {
    winOrLoseText.innerText = `You won! It took you ${numberOfGuesses} guesses and ${timePassed} seconds to find out that the secret person was ${secret.name}. Congratulations!`
  } else {
    winOrLoseText.innerText = `You lost. The secret person was ${secret.name}. Total number of guesses: ${numberOfGuesses}. Wanna try again?`
  }
}

// When clicking the play again button, the board resets
const restart = () => {
  winOrLose.style.display = "none"
  board.style.display = "flex"
  start()
}

// Sets the timer
setInterval(() => {
  timePassed++
  time.innerText = timePassed
}, 1000)

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener("change", selectQuestion)
filter.addEventListener("click", checkQuestion)
playAgain.addEventListener("click", restart)