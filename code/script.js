// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')
winOrLoseText = document.getElementById('winOrLoseText')

// All the characters are in this array, as objects
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

let secret, currentQuestion, charactersInPlay

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

// Decides on the secret person...
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Starts the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  winOrLose.style.display = 'none'

}

// This is triggered by a change in the drop-down, and saves the selection as an object "currentQuestion"
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
    
  } else if (category === 'accessories' || category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category: category,
    }
  }
}

// Check if the guess is correct or not
const checkQuestion = () => {
  if (secret[currentQuestion.attribute] === currentQuestion.value) {
    filterCharacters(true)
  } else {
    filterCharacters(false)
  }
}


const filterCharacters = (keep) => {
  // Alerts...
  if (currentQuestion.category === 'accessories') {
    keep ?
      alert(`Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`)
    :
      alert(`No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`)
    
  } else if (currentQuestion.category === 'hair color') {
    keep ?
      alert(`Yes, the person has ${currentQuestion.value} hair! Keep all that have ${currentQuestion.value}`)
    :
      alert(`No, the person doesn't have ${currentQuestion.value} hair! Remove all that have ${currentQuestion.value} hair`)
    
  } else if (currentQuestion.category === 'eye color') {
    keep ?
      alert(`Yes, the person has ${currentQuestion.value} eyes! Keep all that have ${currentQuestion.value} eyes`)
    :
      alert(`No, the person doesn't have ${currentQuestion.value} eyes! Remove all that have ${currentQuestion.value}eyes`)
    
  } else if (currentQuestion.category === 'other') {
    keep ?
      alert(`Yes, the person smokes! Keep all the smokers`)
    :
      alert(`No, the person doesn't smoke! Remove all smokers`)
  }
  // And here the actual filtering is done
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
  }
  generateBoard()
}
// User confirms the guess
const guess = (suspect) => {
  const confirmation = confirm(`Are you sure you want to guess ${suspect}?`)
  if (confirmation) {
    checkMyGuess(suspect)
  }
}

const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    board.innerHTML = ''
    winOrLose.style.display = 'block'
    winOrLoseText.innerHTML = 'You won - yay!'
    
  } else {
    board.innerHTML = ''
    winOrLose.style.display = 'block'
    winOrLoseText.innerHTML = 'You lose, sorry!'
  }
}

start()

// All the event listeners
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOut.addEventListener('click', checkQuestion)