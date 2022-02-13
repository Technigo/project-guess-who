// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const counterText = document.getElementById('counterText');
const counter = document.getElementById('counter')
const secretPersonName = document.getElementById('secretPersonName')
const secretPersonImg = document.getElementById('secretPersonImg')
const popUp = document.getElementById('popUp')
const overlay = document.getElementById('overlay')
const popUpButton = document.getElementById('popUpButton')
const popUpMessage = document.getElementById('popUpMessage')
const confirmMessage = document.getElementById('confirmMessage')
const popUpConfirm = document.getElementById('popUpConfirm')
const confirmYesButton = document.getElementById('confirmYesButton')
const confirmNoButton = document.getElementById('confirmNoButton')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['shades'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: [],
    other: ['a smoking habit', 'beard']
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
    accessories: ['shades'],
    other: ['freckles']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['shades', 'necklace'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['shades'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'necklace', 'earrings'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['shades'],
    other: ['a smoking habit']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['a smoking habit', 'freckles']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['freckles']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['a smoking habit', 'beard']
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
    accessories: ['glasses', 'earrings'],
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
    accessories: ['shades', 'hat', 'necklace'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
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
    other: ['beard']
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
let counterNumber = 0

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
  generateBoard()
  setSecret()
  winOrLose.style.display = 'none'
  counterText.style.display = 'none'
  counterNumber = 0
  questions.selectedIndex = 0 
  closePopUp()
  personToConfirm = '';
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {

  selectQuestion()

  //Only show the counter if the user has actually chosed an option and not only pressed the find out button without chosing anything
  if (currentQuestion.category) {
    counterText.style.display = 'block'
    counterNumber++ 
    counter.innerHTML = counterNumber
    counter.style.display = 'inline'
  }

  const { category, value } = currentQuestion

    // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
    // See if we should keep or remove people based on that
    // Then invoke filterCharacters
    if (category === 'hair' || category === 'eyes') {
      if (secret[category] === value) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }

    } else if (category === 'accessories' || category === 'other') {
      let isMatch
      if (category === 'accessories') {
        isMatch = false
        secret.accessories.forEach((accessorie) => { 
          if (accessorie === value) { 
            isMatch = true
          }
        });
        filterCharacters(isMatch)

      } else if (category === 'other') { 
        isMatch = false
        secret.other.forEach((other) => { 
          if (other === value) { 
            isMatch = true
          }
        });
        filterCharacters(isMatch)
      }
    }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {

  const { category, value } = currentQuestion
  let message = ''

  // Show the correct pop up message for different categories
  if (category === 'accessories') {
    if (keep) {
      message = `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      message = `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      message = `Yes, the person has ${value}! Keep all people that has ${value}.`
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      message = `No, the person doesn't has ${value}! Remove all people that has ${value}.`
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else {
    if (keep) { //Hair or eyes
      message = `Yes the person has ${value} ${category}! Keep all people that has ${value} ${category}.`
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      message = `No, the person doesn't have ${value} ${category}! Remove all people that has ${value} ${category}.`
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  showPopUp(message)
}

const showPopUp = (message) => {
  popUp.style.display = 'block'
  overlay.style.display = 'block'
  popUpMessage.innerHTML = message
}

const showPopUpConfirm = (message) => {
  popUpConfirm.style.display = 'block'
  overlay.style.display = 'block'
  confirmMessage.innerHTML = message
  confirmYesButton.addEventListener('click', checkMyGuess)
}

const closePopUp = () => {
  popUp.style.display = 'none'
  overlay.style.display = 'none'
  popUpConfirm.style.display = 'none'
  generateBoard()
}

let personToConfirm

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (person) => {
  personToConfirm = person
  const messageConfirm = `Are you sure it's ${person}?`
  showPopUpConfirm(messageConfirm, person)
}

// If you confirm, this function is invoked
const checkMyGuess = () => {

  personToCheck = personToConfirm
  if (personToCheck === secret.name) {
    board.display = 'none'
    winOrLose.style.display = 'flex'
    winText.style.display = 'block'
    loseText.style.display = 'none'
    secretPersonName.innerHTML = secret.name
    secretPersonImg.src = secret.img
  } else {
    board.display = 'none'
    winOrLose.style.display = 'flex'
    loseText.style.display = 'block'
    winText.style.display = 'none'
    secretPersonName.innerHTML = secret.name
    secretPersonImg.src = secret.img
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', start)
popUpButton.addEventListener('click', closePopUp)
confirmNoButton.addEventListener('click', closePopUp)
