// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Zoey',
    img: 'images/zoey.jpg',
    furcolor: 'black',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Milo',
    img: 'images/milo.jpg',
    furcolor: 'golden',
    coat: 'medium long',
    ears: 'upright',
    nose: ['dark', 'long'],
    clothing: ['clothes', 'a hat'],
    accessories: ['a collar', 'glasses']
  },
  {
    name: 'Ivy',
    img: 'images/ivy.jpg',
    furcolor: 'white',
    coat: 'curly',
    ears: 'floppy',
    nose: ['light', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Sadie',
    img: 'images/sadie.jpg',
    furcolor: 'brown',
    coat: 'wiry',
    ears: 'upright',
    nose: ['dark', 'short'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Winnie',
    img: 'images/winnie.jpg',
    furcolor: 'mixed',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: ['a collar']
  },
  {
    name: 'Bella',
    img: 'images/bella.jpg',
    furcolor: 'black',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Baxter',
    img: 'images/baxter.jpg',
    furcolor: 'mixed',
    coat: 'wiry',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: ['a bow']
  },
  {
    name: 'Ruby',
    img: 'images/ruby.jpg',
    furcolor: 'mixed',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['dark', 'short'],
    clothing: [],
    accessories: ['a collar']
  },
  {
    name: 'Poppy',
    img: 'images/poppy.jpg',
    furcolor: 'mixed',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Ace',
    img: 'images/ace.jpg',
    furcolor: 'brown',
    coat: 'short',
    ears: 'floppy',
    nose: ['light', 'long'],
    clothing: [],
    accessories: ['a collar']
  },
  {
    name: 'Penny',
    img: 'images/penny.jpg',
    furcolor: 'mixed',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['dark', 'short'],
    clothing: [],
    accessories: ['a bow']
  },
  {
    name: 'Toby',
    img: 'images/toby.jpg',
    furcolor: 'mixed',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Harley',
    img: 'images/harley.jpg',
    furcolor: 'mixed',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Max',
    img: 'images/max.jpg',
    furcolor: 'golden',
    coat: 'short',
    ears: 'upright',
    nose: ['light', 'short'],
    clothing: [],
    accessories: ['a collar']
  },
  {
    name: 'Hazel',
    img: 'images/hazel.jpg',
    furcolor: 'mixed',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'short'],
    clothing: [],
    accessories: ['a collar']
  },
  {
    name: 'Luna',
    img: 'images/luna.jpg',
    furcolor: 'mixed',
    coat: 'medium long',
    ears: 'upright',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: ['glasses']
  },
  {
    name: 'Duke',
    img: 'images/duke.jpg',
    furcolor: 'brown',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: ['a collar']
  },
  {
    name: 'Cody',
    img: 'images/cody.jpg',
    furcolor: 'mixed',
    coat: 'medium long',
    ears: 'upright',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: ['glasses']
  },
  {
    name: 'Biscuit',
    img: 'images/biscuit.jpg',
    furcolor: 'white',
    coat: 'curly',
    ears: 'floppy',
    nose: ['dark', 'short'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Teddy',
    img: 'images/teddy.jpg',
    furcolor: 'mixed',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Mocha',
    img: 'images/mocha.jpg',
    furcolor: 'brown',
    coat: 'curly',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Inez',
    img: 'images/inez.jpg',
    furcolor: 'mixed',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['dark', 'short'],
    clothing: ['clothes'],
    accessories: []
  },
  {
    name: 'Rocco',
    img: 'images/rocco.jpg',
    furcolor: 'brown',
    coat: 'short',
    ears: 'upright',
    nose: ['light', 'long'],
    clothing: [],
    accessories: ['a collar', 'glasses']
  },
  {
    name: 'Roxy',
    img: 'images/roxy.jpg',
    furcolor: 'mixed',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: ['a collar']
  },
  {
    name: 'Murphy',
    img: 'images/murphy.jpg',
    furcolor: 'golden',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['light', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Dobbie',
    img: 'images/dobbie.jpg',
    furcolor: 'mixed',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Bailey',
    img: 'images/bailey.jpg',
    furcolor: 'golden',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Jasper',
    img: 'images/jasper.jpg',
    furcolor: 'white',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['light', 'long'],
    clothing: ['a hat'],
    accessories: []
  },
  {
    name: 'Spot',
    img: 'images/spot.jpg',
    furcolor: 'mixed',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Cooper',
    img: 'images/cooper.jpg',
    furcolor: 'mixed',
    coat: 'medium long',
    ears: 'upright',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Millie',
    img: 'images/millie.jpg',
    furcolor: 'brown',
    coat: 'wiry',
    ears: 'upright',
    nose: ['dark', 'short'],
    clothing: ['clothes', 'a hat'],
    accessories: []
  },
  {
    name: 'Finn',
    img: 'images/finn.jpg',
    furcolor: 'brown',
    coat: 'short',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: ['a collar']
  },
  {
    name: 'Sam',
    img: 'images/sam.jpg',
    furcolor: 'mixed',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: ['a bow']
  },
  {
    name: 'Loki',
    img: 'images/loki.jpg',
    furcolor: 'mixed',
    coat: 'wiry',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
  {
    name: 'Ollie',
    img: 'images/ollie.jpg',
    furcolor: 'golden',
    coat: 'medium long',
    ears: 'floppy',
    nose: ['dark', 'long'],
    clothing: [],
    accessories: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let count = 0
const soundCheer = new Audio('assets/cheer.mp3')

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

// Randomly select a dog from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function is to start (and restart) the game
const start = () => {
  // Setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // Resets the counter to zero when the game is restarted
  count = 0
  // When the game starts the game board is shown, a secret dog is selected and the counter starts
  generateBoard()
  setSecret()
  counter()
}

// Setting the currentQuestion object when the player selects something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // These variables stores what option group (category) the question belongs to and stores the actual value of the question we've selected
  const selectedOption = questions.options[questions.selectedIndex]
  const value = selectedOption.value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function is invoked when you click on 'Find Out' button
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep

  // Compares the currentQuestion details with the secret dogs details in a different manner based on category. See if we should keep or remove dogs based on that and then invoke filterCharacters
  if (category === 'furcolor' || category === 'coat' || category === 'ears') {
    attribute = category
    keep = secret[category] === value
  } else if (category === 'nose' || category === 'clothing' || category === 'accessories') {
    keep = secret[category].includes(value)
  }
  filterCharacters(keep)
}

// Filter the characters array and redraw the game board by determining what is the category, and if it's to keep or remove based on the keep variable
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'furcolor') {
    if (keep) {
      alert(
        `Yes, the doggie has ${value} fur color! Keep all doggies that have ${value} fur color!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the doggie doesn't have ${value} fur color! Remove all doggies that have ${value} fur color!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  } else if (category === 'coat') {
    if (keep) {
      alert(
        `Yes, the doggie has a ${value} coat! Keep all doggies that have a ${value} coat!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the doggie doesn't have a ${value} coat! Remove all doggies that have a ${value} coat!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  } else if (category === 'ears') {
    if (keep) {
      alert(
        `Yes, the doggie has ${value} ears! Keep all doggies that have ${value} ears!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the doggie doesn't have ${value} ears! Remove all doggies that have ${value} ears!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  }

  if (category === 'nose') {
    if (keep) {
      alert(
        `Yes, the doggie has a ${value} nose! Keep all doggies that have a ${value} nose!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the doggie doesn't have a ${value} nose! Remove all doggies that have a ${value} nose!`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'clothing') {
    if (keep) {
      alert(
        `Yes, the doggie wears ${value}! Keep all doggies that wears ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the doggie doesn't wear ${value}! Remove all doggies that wears ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the doggie has ${value}! Keep all doggies that have ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the doggie doesn't have ${value}! Remove all doggies that have ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  
  // Invokes a function to redraw the board with the remaining dogs
  generateBoard(charactersInPlay)
}

// When clicking guess, the player first have to confirm that they want to make a guess
const guess = (personToConfirm) => {
  // If the player wants to guess, the checkMyGuess function is invoked
  const confirmed = confirm(
    `Moment of truth! Do you really want to guess on ${personToConfirm}?`
  )
  if (confirmed) {
    checkMyGuess(personToConfirm)
  } else {
    alert(
      `Guess cancelled.`
    )
  }
}

// If the player confirms, this function is invoked. Checks if the personToCheck is the same as the secret dog's name. Shows the win or lose section depending on the outcome while hiding the game board
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLose.style.display = "flex"
    board.style.display = "none"
    winOrLoseText.textContent = `Congratulations! 🥳 You guessed right, it was ${secret.name}! 👏`
    soundCheer.play()
  } else if (personToCheck !== secret.name) {
    winOrLose.style.display = "flex"
    board.style.display = "none"
    winOrLoseText.textContent = `Oh no! 😣 You guessed wrong, it was ${secret.name}! Better luck next time! 🥴`
  }
}

// Function for counter
const counter = () => {
  let counterSection = document.querySelector('.counter')

  counterSection.innerHTML =
    `<p>Number of guesses made: 
    <span style="font-weight: bolder; color: #fff;">${count}</span>
    </p>`

  count++
}

// If the player wants to play again, the win or lose section needs to be hidden. The board should also be visible again and the start function should be invoked
const playAgain = () => {
  winOrLose.style.display = "none"
  board.style.display = "flex"
  start()
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
filterButton.addEventListener('click', counter)
playAgainButton.addEventListener('click', playAgain)