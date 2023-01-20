// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['smile']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['angry']
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
    other: ['smile']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['smile']
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
    other: ['']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['angry']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewellery'],
    other: ['smile']
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
    other: ['smoker', 'angry']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['smile']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'angry']
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
    other: ['angry']
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
    other: ['smile']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'jewellery'],
    other: ['angry']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['smile']
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
    accessories: ['jewellery'],
    other: ['smile']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['smile']
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
    other: ['smile']
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let numberOfGuesses = 0; //It shows the amount of guesses you do.


// Draw the game board
function generateBoard() {
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
  console.log('secret')
};

// This function to start (and restart) the game
const start = () => {
  numberOfGuesses = 0
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  guessCounter.innerHTML = `<p>Number of guesses: ${numberOfGuesses}/4</p>`
  console.log('start')
};

// setting the currentQuestion object when you select something in the dropdown
// bot is playing with user.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const attribute = questions.options[questions.selectedIndex].parentNode.label 
  // This variable stores what option group (category) the question belongs to.
  const value = questions.value
  // This variable stores the actual value of the question we've selected.
  currentQuestion = {
    category: category,
    attribute: attribute,
    value: value
  }

  console.log('select-question')
};

// This function should be invoked when you click on 'Find Out' button.
// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
// See if we should keep or remove people based on that
const checkQuestion = () => {
  let keep
  const { category, value, attribute } = currentQuestion
  if (attribute === 'hair' || attribute === 'eyes') {
    value === secret[category]
  }
  else if (category === 'accessories' || category === 'other') {
    value === secret[category].includes(value)
  }

  // Then invoke filterCharacters
  filterCharacters(keep)
  numberOfGuesses += 1
  if (numberOfGuesses === 4) {
    alert('Your are out of guesses. Please make your final choice.')
    filter.disabled = true
  }
  guessCounter.innerHTML = `
    <p>Number of guesses: ${numberOfGuesses}/4</p>
    `

  console.log('check-question')
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value, attribute } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people with ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesnt have ${value}! Remove all people with ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (attribute === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the person doesnt have ${value}! Remove all people with ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }

  } else if (attribute === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
   } else {
    alert(
      `No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes`
    )
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
   }
  }

  generateBoard();

  console.log('filter-characters')
};


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmedAnswer = confirm('Do you want to make a guess?')
  if (confirmedAnswer === true)
  checkMyGuess(personToConfirm)
  
  console.log('person to confirm')
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if(personToCheck === secret.name) {
    winOrLoseText.innerHTML = `
    <p>Cool! You won the game!</p>`
  } else {
    winOrLoseText.innerHTML = `
    <p>Game over!</p>`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'

  console.log('winner or loser')

};

const playingAgain = () => {
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  start()

  console.log('play again')
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
filterButton.addEventListener('click', checkQuestion);
playAgain.addEventListener('click', playingAgain);
