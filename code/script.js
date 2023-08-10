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
    img: 'assets/images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    clothing: [],
    accessories: ['glasses', 'hat'],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Jack',
    img: 'assets/images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    clothing: ['stripes'],
    accessories: ['hat'],
    expressions: ['frown'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'assets/images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    clothing: [],
    accessories: ['hat'],
    expressions: ['frown'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'assets/images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    clothing: ['collar'],
    accessories: [],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Jake',
    img: 'assets/images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    clothing: ['collar'],
    accessories: ['glasses'],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'James',
    img: 'assets/images/james.svg',
    hair: 'brown',
    eyes: 'green',
    clothing: [],
    accessories: ['glasses'],
    expressions: [],
    other: []
  },
  {
    name: 'Jana',
    img: 'assets/images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    clothing: ['collar'],
    accessories: ['glasses', 'necklace'],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Jane',
    img: 'assets/images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    clothing: ['stripes'],
    accessories: ['glasses'],
    expressions: ['frown'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'assets/images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    clothing: [],
    accessories: ['glasses', 'necklace'],
    expressions: ['smile'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'assets/images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    clothing: ['crewneck'],
    accessories: ['glasses'],
    expressions: ['frown'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'assets/images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    clothing: ['collar'],
    accessories: ['glasses', 'hat'],
    expressions: ['frown'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'assets/images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    clothing: ['crewneck'],
    accessories: ['glasses'],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Jed',
    img: 'assets/images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    clothing: [],
    accessories: ['glasses', 'hat'],
    expressions: ['frown'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'assets/images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    clothing: [],
    accessories: ['hat'],
    expressions: [],
    other: []
  },
  {
    name: 'Jeri',
    img: 'assets/images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    clothing: ['stripes'],
    accessories: ['glasses'],
    expressions: ['frown'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'assets/images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    clothing: [],
    accessories: ['hat'],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Jess',
    img: 'assets/images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    clothing: ['crewneck'],
    accessories: ['glasses'],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'assets/images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    clothing: ['crewneck'],
    accessories: ['glasses'],
    expressions: ['frown'],
    other: []
  },
  {
    name: 'Jon',
    img: 'assets/images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    clothing: ['collar'],
    accessories: ['glasses'],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'assets/images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    clothing: ['collar'],
    accessories: ['glasses', 'hat'],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'assets/images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    clothing: [],
    accessories: [],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Josh',
    img: 'assets/images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    clothing: ['collar'],
    accessories: [],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Jude',
    img: 'assets/images/jude.svg',
    hair: 'black',
    eyes: 'green',
    clothing: ['collar'],
    accessories: [],
    expressions: ['smile'],
    other: []
  },
  {
    name: 'Julie',
    img: 'assets/images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    clothing: [],
    accessories: ['glasses', 'hat'],
    expressions: ['frown'],
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
// Setting what happens when we start the game
const start = () => {
  questions.value=''
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

// Setting the currentQuestion object when you select something in the dropdown
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
/*Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false*/
const checkQuestion = () => {
  const { category, value } = currentQuestion 
// Invoking filterCharacters
  if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true) // Keep everyone with that accessories/other value
    } else {
      filterCharacters() // Remove everyone with that accessories/other value
    }
  } else if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true) //Keep everyone with hair/eyes that match secret
    } else {
      filterCharacters() //Remove all with hair/eyes that does not match secret
    }
  } 
}

// This function will filter the characters array and regenerate the board.
const filterCharacters = (keep) => {
  const {category, value} = currentQuestion
  // Show the correct alert message for different categories
  // Accessories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep everyone with ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value))
    } else {
      alert(
        `No, the person does not have ${value}! Remove everyone with ${value}.`)
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value))
    }
  // Other
  } else if (category === 'other') {
      if (keep) {
        alert(
          `Yes! The person has ${value}! Keep everyone with ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category])
      }
      else {
        alert(
        `No! The person does not have ${value}! Remove everyone with ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category])
      }
  // Hair and eyes
  } else if (category === "hair" || category === "eyes") {
      if (keep) {
        alert(
          `Yes the person has ${value} ${category}! Keep everyone with ${value} ${category}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        alert(
          `No, the person does not have ${value} ${category}. Remove everyone with ${value} ${category}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
  // Invoke a function to redraw the board with the remaining people.
    } generateBoard()
  }

  
 


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
    winOrLoseText.innerHTML = `Congratulations! It was ${secret.name}.`
  } else {
    winOrLoseText.innerHTML = `Oh no, wrong guess...The person we were looking for was ${secret.name}!`
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
  start()
  window.location.reload()
})
