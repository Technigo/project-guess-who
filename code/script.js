// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartBtn = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')
const filterBtn = document.getElementById('filter')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': true,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    'a hat': true,
    'smoking habit': false,
    beard: true
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    'a hat': true,
    'smoking habit': true,
    beard: true
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'blond',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'blond',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'red',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': false,
    'smoking habit': true,
    beard: false
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    'a hat': true,
    'smoking habit': true,
    beard: false
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'red',
    eyeColor: 'green',
    glasses: true,
    'a hat': true,
    'smoking habit': true,
    beard: true
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    'a hat': true,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'red',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    'a hat': true,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'blond',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': true,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'blond',
    eyeColor: 'green',
    glasses: false,
    'a hat': false,
    'smoking habit': false,
    beard: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    'a hat': false,
    'smoking habit': false,
    beard: true
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    'a hat': true,
    'smoking habit': false,
    beard: false
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

// Game board
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

// Chooses the secret person, randomly
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Lets the player confirm if they are sure before proceeding
const guess = (secretPerson) => {
  const makeAGuess = confirm(`Are you sure you want to guess on ${secretPerson}?`)
  if (makeAGuess) {
    checkMyGuess(secretPerson)
  }
}

// If the player confirms, this function is invoked
const checkMyGuess = (secretPerson) => {
  if (secretPerson === secret.name) {
    winOrLoseText.innerHTML = `Congratulations! You guessed correctly!`
  } else {
    winOrLoseText.innerHTML = `Shoot, you guessed wrong! Game over!`
  }
  winOrLose.style.display = 'flex'
  board.style.display =  'none'
}

// Dropdown -> selectQuestion -> currentQuestion
const selectQuestion = () => {
  const value = questions.value
  const category = questions.options[questions.selectedIndex].parentNode.label
  
  if (category === 'hair') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
    }
  } else if (category === 'eyes') {
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

// When the player clicks the 'Find Out' button, this function is invoked.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]

  filterCharacters(keep)
}

// Filter for characters' defining features and adapting the gameboard accordingly
const filterCharacters = (keep) => {
  const { attribute, category, value } = currentQuestion
// Trigger the correct alert depending on the player's choices  
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person has ${attribute}! Keep all people with ${attribute}.`
      )
    } else {
      alert(
        `No, the person doesn't have ${attribute}! Remove all people with ${attribute}.`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person has a ${attribute}! Keep all people that has a ${attribute}.`
      )
    } else {
      alert(
        `No, the person doesn't have a ${attribute}! Remove all people that has a ${attribute}.`
      )
    }  
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`
      )
    }
  }

// Conditional to filter whether to keep or remove
  if (keep) {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[attribute] === value
    ) 
  } else  {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[attribute] !== value
    )
  }
// Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS // Activates all characters
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  setSecret() // Invokes a secret person
  generateBoard()
}

// Invokes start on page load
start()

// All the event listeners
filterBtn.addEventListener('click', checkQuestion)
restartBtn.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
playAgain.addEventListener('click', start)