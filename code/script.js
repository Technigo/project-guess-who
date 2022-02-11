// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')

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

// SECRET PERSON
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// START THE GAME
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  selectQuestion()
  setSecret()

}

// PLAYERS QUESTION
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value,
  }
}

// CHECK QUESTION
const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if(value === secret.hair || value === secret.eyes){
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }


  if (category === 'accessories' || category === 'other') {
      if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(true)
  } else {
    filterCharacters(false)
  }
  }

}

// REMOVE CHARACTERS
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
  // ALERT MESSAGES
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person isn't a ${value}! Keep all people is a ${value}`)
    } else {
      alert(`No, the person is a ${value}! Remove all people that isn't a ${value}`)
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keep all people that has ${value} hair.`)
    } else {
      alert(`No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`)
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people that has ${value} eyes.`)
    } else {
      alert(`No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`)
    }
  }


// FILTER
if (category === 'hair' || category === 'eyes') {
  if (keep) {
  charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
  } else {
  charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
  }
} else if (category === 'accessories' || category === 'other') {
  if (keep) {
  charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  } else {
  charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  }
}
generateBoard()
}



// TIME TO GUESS
const guess = (personToConfirm) => {
  const confirmed = confirm(`Do you want to guess on ${personToConfirm}?`)

  if (confirmed) {
    checkMyGuess(personToConfirm)
  }
}

// WAS IT RIGHT?
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Woho! That is correct! It was ${personToCheck}!`
  } else {
    winOrLoseText.innerHTML = `Nope! It was not ${personToCheck}. It was ${secret.name}. Sorry!`
  }

  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

playAgainButton.addEventListener('click', () => {
  location.reload()
})

// START FUNCTION
start()

// EVENT LISTENER
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)


