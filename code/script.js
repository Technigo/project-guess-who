//CTRL + F (search) CTRL + H (replace)
//All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById("filter")
const playAgainButton = document.getElementById("playAgain")
const winOrLoseSection = document.getElementById("winOrLose")
const winOrLoseText = document.getElementById("winOrLoseText")

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
let charactersInPlay = CHARACTERS

// Drawing the game board
const generateBoard = () => {
  board.innerHTML = '' //sets inner HTML to an empty string
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

// Randomly select a person from the characters array and set as the value of the variable called 'secret'
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

const start = () => {
  questions.value=''
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
// The 'category' variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  // 'questions' is the global variable for the drop-down menu
// 'Options[questions.selectedIndex]' is the selected option
// 'parentNode.label' is the optgroup labels e.g "hair"

// We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value
  
  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion 
// Invoking filterCharacters
  if (category === 'accessories' || category === 'other') {
    if (secret[category] === value) {
      filterCharacters(true); // Keep everyone with that accessories/other value
    } else {
      filterCharacters(); // Remove everyone with that accessories/other value
    }
  } else if (category === 'hair' || category === 'eyes') {
    if (secret[category].includes(value)) {
      filterCharacters(true); //Keep everyone with hair/eyes that match secret
    } else {
      filterCharacters(); //Remove all with hair/eyes that does not match secret
    }
}}

// This function will filter the characters array and regenerate the board.
const filterCharacters = (keep) => {
  const {category, value} = currentQuestion
  // Show the correct alert message for different categories
  // Accessories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep everyone with a ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value))
    } else {
      alert(
        `No, the person does not have a ${value}! Remove everyone with a ${value}.`)
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value))
    }
  // Other
  } else if (category === 'other') {
      if (keep) {
        alert(
          `Yes! The person has a ${value}! Keep everyone with a ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category])
      }
      else {
        alert(
        `No! The person does not have a ${value}! Remove everyone with a ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category])
      }
  // Hair
  } else if (category === "hair") {
      if (keep) {
        alert(
        `Yes! The person has ${value} hair! Keep everyone with ${value} hair.`)
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value)
    } else {
        alert(
        `No! The person does not have ${value} hair! Remove everyone with ${value} hair.`)
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value)}
    // Eyes
    } else if (category === "eyes") {
      if (keep) {
        alert(
          `Yes! The person has ${value} eyes! Keep everyone with ${value} eyes.`)
          charactersInPlay = charactersInPlay.filter(
            (person) => person[category] === value)
      }
      else {
        alert(
          `No! The person does not have ${value} eyes! Remove everyone with ${value} eyes.`)
          charactersInPlay = charactersInPlay.filter(
            (person) => person[category] !== value)
      }
    }
    generateBoard()
  }

  // Invoke a function to redraw the board with the remaining people.
 


// Prompt user to confirm they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(`Are you sure you want to guess?`)
  // remember the confirm() ?
  if (confirmGuess) checkMyGuess(personToConfirm)
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  if (personToConfirm === secret.name) {
    winOrLoseText.innerHTML = `It was indeed ${secret.name}! Well done!`
  } else {
    winOrLoseText.innerHTML = `Oh no, that was not the person we were looking for...The correct guess is ${secret.name}!`
  }
  winOrLose.style.display = "flex"
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', () => {
  start();
  window.location.reload();
})
