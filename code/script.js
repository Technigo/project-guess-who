// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filter = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')

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
  generateBoard();
  setSecret();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value

  if (category === 'hair color') {
      currentQuestion = {
          attribute: 'hairColor',
          value: value,
          category,
      }
  } else if (category === 'eye color') {
      currentQuestion = {
          attribute: 'eyeColor',
          value: value,
          category,
      }
  } else if (category === 'accessories') {
      currentQuestion = {
          attribute: value,
          value: true,
          category,
      }
  } else if (category === 'other') {
      currentQuestion = {
          attribute: value,
          value: true,
          category,
      }
  }
}

// This is invoked when you click on 'Find Out'.
const checkQuestion = () => {
  selectQuestion()
  let keep
  if (currentQuestion.category === 'hair color') {
      keep = secret.hairColor === currentQuestion.value
  } else if (currentQuestion.category === 'eye color') {
      keep = secret.eyeColor === currentQuestion.value
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
  const attribute = currentQuestion.attribute
  const value = currentQuestion.value
  const group = currentQuestion.category

  if (group === 'accessories') {
    if (keep) {
        alert(`Yes, the person wears ${attribute}! Keep all that wear ${attribute}`)
    } else {
        alert(`No, the person doesn't wear ${attribute}! Remove all that wear ${attribute}`)
    }
  } else if (group === 'other') {
    if (keep) {
        alert(`Yes, the person has a ${attribute}! Keep all that have a ${attribute}`)
    } else {
        alert(`No, the person doesn't have a ${attribute}! Remove all that have a ${attribute}`)
    }
  } else if (group === 'hair color') {
    if (keep) {
        alert(`Yes, the person has ${value} hair! Keep all persons with ${value} hair`)
    } else {
        alert(`No, the person doesnt have ${value} hair. Remove all persons with ${value} hair`)
    }
  } else {
    if (keep) {
        alert(`Yes, the person has ${value} eyes! Keep all persons with ${value} eyes`)
    } else {
        alert(`No, the person doesnt have ${value} eyes. Remove all persons with ${value} eyes`)
    }
  }

  // filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  generateBoard(charactersInPlay)
}

const guess = (suspect) => {
  let finalGuess = confirm(`Are you sure you would like guess ${suspect}?`)
  if (finalGuess) {
      checkMyGuess(suspect)
  }
}

const checkMyGuess = (suspect) => {
  console.log(suspect)
  if (suspect === secret.name) {
      winOrLoseText.innerHTML = `Congratulations ${suspect} is correct! You win`
  } else {
      winOrLoseText.innerHTML = 'Sorry, try again'
  }
  board.style.display = "none"
  winOrLose.style.display = "flex"
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
filter.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)
