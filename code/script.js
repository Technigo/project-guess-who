// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter') 
const playAgainBtn = document.getElementById('playAgain')

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
          <button class="filled-button-small" onclick="guess('${person.name}')">Guess</button>
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
  generateBoard()
  setSecret()
  console.log(secret)
}

// setting the currentQuestion object when you select something in the dropdown

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value = question.value
  const value = questions.options[questions.selectedIndex].value
  console.log('test value', value)

  currentQuestion = {
    category: category,
    value: value 
  }
  checkQuestion()
}



// This function should be invoked when you click on 'Find Out' button.

const checkQuestion = () => {
  console.log('CheckQuestion testing')
  const { category, value } = currentQuestion
  let keep = true

  if (category === "hair" || category === "eyes") {
    if (secret[category] === value) {
      keep = true 
    } else {
      keep = false
    }
  } else if (category === "accessories" || category === "other") {
    if (secret[category].includes(value)) {
      keep = true
    } else {
      keep = false
    }
  }
  filterCharacters(keep)
}


// It'll filter the characters array and redraw the game board.

const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  if (category === 'accessories') {
    if (keep) {
      alert(`Yay! GOOD GUESS 💥 The person wear ${value}! Keep all people with ${value}!`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`Sorry! 🤷🏽‍♀️ Good guess, but the secret person doesn't wear ${value}! Remove all people that wear ${value} and go for a new guess!`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yay! GOOD GUESS 💥 The person is a ${value}! Keep everyone that is a ${value}!`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`Sorry! 🤷🏽‍♀️ Good guess, but the secret person doesn't have a ${value}! Remove all people that has a ${value}. `)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
  } else {
    if (keep) {
    alert(`Yay! GOOD GUESS 💥 The person has ${value} ${category}! Keep all people with ${value} ${category}!`)
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    
  } else {
    alert(`Sorry! 🤷🏽‍♀️ Good guess, but the secret person doesn't have ${value} ${category}! Remove all people that has ${value} ${category} and go for a new guess!`)
    charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
  }
  } 
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
 const confirmGuess = confirm(`Wanna guess on ${personToConfirm} hu?`) 
 if (confirmGuess) {
 checkMyGuess(personToConfirm)
}
  // If the player wants to guess, invoke the checkMyGuess function.
}


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
if (personToCheck === secret.name) {
  winOrLoseText.innerHTML = `Wohoo!, ${personToCheck} was the one we were looking for! YOU ARE A WINNER!`
} else {
  winOrLoseText.innerHTML = `Nice try, but ${personToCheck} is not the one we were looking for! The secret person was ${secret.name}. YOU LOOSE!`
}
winOrLose.style.display = 'flex';
board.style.display = 'none';
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutBtn.addEventListener('click', selectQuestion)
playAgainBtn.addEventListener('click', () => {
  start()
  winOrLose.style.display = 'none';
  board.style.display = 'flex';
})

// LÄGG TILL LJUD?
// const audioLost = new Audio('./assets/boo3.mp3')
// audioLost.play()
