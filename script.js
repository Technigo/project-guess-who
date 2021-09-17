// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const clickFilter = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['teeth']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['teeth', 'facialHair']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'teeth']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['teeth']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['teeth']
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['facialHair']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'jewelry'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['teeth']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewelry'],
    other: ['teeth']
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
    other: ['smoker', 'facialHair']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['teeth']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'facialHair']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'jewelry'],
    other: ['teeth']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['teeth']
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
    other: ['teeth']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'jewelry'],
    other: ['teeth']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['teeth']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewelry'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: ['teeth']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['teeth']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['facialHair']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: ['teeth']
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
    board.innerHTML += /*html*/`
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
  console.log(secret) //ta bort sedan
}

const logTime = () => {
  setInterval(() => console.log(new Date()), 1000)
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  //logTime()
  winOrLose.style.display = "none"
  winOrLoseText.innerText = ''
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
    // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value
  const label = questions.options[questions.selectedIndex].label
  console.log(category, value, label)

  currentQuestion = {
    category: category,
    value: value,
    label: label
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {

  const { category, value, label } = currentQuestion
  charactersInPlay = CHARACTERS  

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that and then invokes filterCharacters
  if (category === 'hair' || category === 'eyes')  {
    if (secret[currentQuestion.category] === currentQuestion.value) { //true
      filterCharacters(true)
    } else { //false
      filterCharacters(false)
    }

  } else if (category === 'accessories' || category === 'other') {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) { // true
      console.log(`This is included in the array`)
      filterCharacters(true)
    } else { //false
      filterCharacters(false)
      console.log(`This is not included in the array`)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value, label } = currentQuestion

  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep = true) {
      alert(
        `Yes, the person wears ${label}! Keep all people that wears ${label}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${label}! Remove all people that wears ${label}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person does ${label}! Keep all people that ${label}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't ${label}! Remove all people that ${label}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }  
  } else {
    if (keep) {
      alert(
        `Yes, the person have ${label}! Keep all people that has ${label}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't have ${label}! Remove all people that has ${label}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  // Invokes the function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  confirmGuess = confirm (`Do you want to guess on ${personToConfirm}?`)
  if (confirmGuess) {
    checkMyGuess(personToConfirm)
  } 
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert (`Awesome, ${personToCheck} is correct!`)
    winOrLose.style.display = "flex"
    winOrLoseText.innerText = `
    AWESOME! You've beaten the computer.🤖 Don't hesitate to try again!👾`
    board.innerHTML = ''
  } else {
    alert (`GAME OVER, ${personToCheck} was wrong.😈`)
    winOrLose.style.display = "flex"
    winOrLoseText.innerText = `
    Well that probably didn't turn out as you'd hoped. Feel free to play again!👇
    `
    board.innerHTML = ''
  }
}

// Invokes the start function when website is loaded
start()

// All event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
clickFilter.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)