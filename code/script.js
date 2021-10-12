// All the DOM selectors stored as short variables

const startGameButton = document.getElementById('play')
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const countGuess = document.getElementById('countGuess')
count = 0

//Timer function
const minutesLabel = document.getElementById('minutes')
const secondsLabel = document.getElementById('seconds')
let totalSeconds = 0


const setTime = () => {
  ++totalSeconds
  secondsLabel.innerHTML = pad(totalSeconds % 60)
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60))
}
const pad = (val) => {
  let valString = val + ""
  if (valString.length < 2) {
    return "0" + valString
  } else {
    return valString
  }
}

setInterval(setTime, 1000)

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Aladdin',
    img: 'images/aladdin.png',
    hairstyle: 'medium hair',
    hair: 'black hair',
    accessories: ['a hat'],
    other: []
  },
  {
    name: 'Alice',
    img: 'images/alice.jpg',
    hairstyle: 'long hair',
    hair: 'blonde hair',
    accessories: ['a ribbon'],
    other: []
  },
  {
    name: 'Anna',
    img: 'images/anna.jpg',
    hairstyle: 'updo',
    hair: 'auburn hair',
    accessories: ['a necklace'],
    other: []
  },
  {
    name: 'Ariel',
    img: 'images/ariel.jpg',
    hairstyle: 'long hair',
    hair: 'red hair',
    accessories: [],
    other: ['a swimming habit']
  },
  {
    name: 'Aurora',
    img: 'images/aurora.jpg',
    hairstyle: 'long hair',
    hair: 'blonde hair',
    accessories: ['a crown', 'a necklace'],
    other: []
  },
  {
    name: 'Belle',
    img: 'images/belle.jpg',
    hairstyle: 'long hair',
    hair: 'brown hair',
    accessories: ['earrings'],
    other: []
  },
  {
    name: 'Cinderella',
    img: 'images/cinderella.jpg',
    hairstyle: 'updo',
    hair: 'blonde hair',
    accessories: ['earrings', 'a necklace', 'a ribbon'],
    other: []
  },
  {
    name: 'Elsa',
    img: 'images/elsa.jpg',
    hairstyle: 'long hair',
    hair: 'white hair',
    accessories: [],
    other: []
  },
  {
    name: 'Esmeralda',
    img: 'images/esmeralda.jpg',
    hairstyle: 'long hair',
    hair: 'black hair',
    accessories: ['earrings', 'a ribbon'],
    other: []
  },

  {
    name: 'Genie',
    img: 'images/genie.png',
    hairstyle: 'updo',
    hair: 'black hair',
    accessories: ['earrings'],
    other: ['facial hair']
  },
  {
    name: 'Hercules',
    img: 'images/hercules.png',
    hairstyle: 'short hair',
    hair: 'auburn hair',
    accessories: ['a ribbon'],
    other: []
  },
  {
    name: 'Megara',
    img: 'images/megara.jpg',
    hairstyle: 'updo',
    hair: 'brown hair',
    accessories: ['a ribbon'],
    other: []
  },
  {
    name: 'Merida',
    img: 'images/merida.jpg',
    hairstyle: 'long hair',
    hair: 'orange hair',
    accessories: [],
    other: []
  },
  {
    name: 'Moana',
    img: 'images/moana.jpg',
    hairstyle: 'long hair',
    hair: 'brown hair',
    accessories: ['a flower', 'a necklace'],
    other: []
  },
  {
    name: 'Mulan',
    img: 'images/mulan.jpg',
    hairstyle: 'medium hair',
    hair: 'black hair',
    accessories: [],
    other: []
  },
  {
    name: 'Peter-Pan',
    img: 'images/peterpan.png',
    hairstyle: 'short hair',
    hair: 'orange hair',
    accessories: ['a hat'],
    other: ['a flying habit']
  },
  {
    name: 'Pinocchio',
    img: 'images/pinocchio.png',
    hairstyle: 'short hair',
    hair: 'black hair',
    accessories: ['a hat', 'a ribbon'],
    other: ['a wish to become a real boy']
  },
  {
    name: 'Pocahontas',
    img: 'images/pocahontas.jpg',
    hairstyle: 'long hair',
    hair: 'black hair',
    accessories: ['a necklace'],
    other: []
  },
  {
    name: 'Snow-White',
    img: 'images/snowwhite.jpg',
    hairstyle: 'medium hair',
    hair: 'black hair',
    accessories: ['a ribbon'],
    other: []
  },
  {
    name: 'Tarzan',
    img: 'images/tarzan.png',
    hairstyle: 'long hair',
    hair: 'auburn hair',
    accessories: [],
    other: ['a bare chest']
  },
  {
    name: 'Beast',
    img: 'images/thebeast.jpg',
    hairstyle: 'short hair',
    hair: 'brown hair',
    accessories: [],
    other: ['horns']
  },
  {
    name: 'Tiana',
    img: 'images/tiana.jpg',
    hairstyle: 'updo',
    hair: 'black hair',
    accessories: ['a crown', 'a necklace'],
    other: []
  },
  {
    name: 'Tinkerbell',
    img: 'images/tinkerbell.jpg',
    hairstyle: 'updo',
    hair: 'blonde hair',
    accessories: ['a ribbon'],
    other: ['a flying habit']
  },
  {
    name: 'Woody',
    img: 'images/woody.jpg',
    hairstyle: 'short hair',
    hair: 'brown hair',
    accessories: ['a hat'],
    other: ['a best friend']
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

let gameStartSound = new Audio('sounds/game_opening.mp3')
gameStartSound.volume = 0.5

let gameWinSound = new Audio('sounds/win_sound.mp3')
gameWinSound.volume = 0.5

let gameLoseSound = new Audio('sounds/lose_sound.mp3')
gameLoseSound.volume = 0.5

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
  totalSeconds = 0
  valString = ""
  secondsLabel.innerHTML = ""
  minutesLabel.innerHTML = ""
  countGuess.innerHTML = "Guesses: "
  startGame.style.display = 'flex'
  boardWrapper.style.display = 'none'
  charactersInPlay = CHARACTERS
  board.onload = generateBoard()
  board.onload = setSecret()

}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (selectedValue) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = selectedValue

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion //unpacker

  let keep = false

  // Compare the currentQuestion details with the secret person details. 
  if (category === 'hair' || category === 'hairstyle') {
    keep = (secret[category] === value)

  } else if (category === 'accessories' || category === 'other') {
    keep = (secret[category].includes(value))

  }
  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people that have ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people with ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people with ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspectCharacter) => {
  // store the interaction from the player in a variable.
  // If the player wants to guess, invoke the checkMyGuess function.
  const confirmGuess = confirm(`Are you sure you want to guess?`)
  if (confirmGuess)
    checkMyGuess(suspectCharacter)
}

// If you confirm, this function is invoked
const checkMyGuess = (suspectCharacter) => {
  if (suspectCharacter === secret.name) {
    winOrLoseText.innerHTML = `Hurray, you win! Congratulations!`
    gameWinSound.play()
  } else {
    winOrLoseText.innerHTML = `Baw, you lose...it was ${secret.name}!`
    gameLoseSound.play()
  }
  winOrLose.style.display = 'flex'
  boardWrapper.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
startGameButton.addEventListener('click', () => {
  start()
  startGame.style.display = 'none'
  boardWrapper.style.display = 'flex'
  gameStartSound.play()
})
restartButton.addEventListener('click', () => {
  start()
  startGame.style.display = 'none'
  boardWrapper.style.display = 'flex'
})
questions.addEventListener('change', (event) => {
  selectQuestion(event.target.value)
})
filterButton.addEventListener('click', () => {
  checkQuestion()
  count += 1
  countGuess.innerHTML = "Guesses:" + count
})

playAgainButton.addEventListener('click', () => {
  start()
  startGame.style.display = 'none'
  winOrLose.style.display = 'none'
  boardWrapper.style.display = 'flex'
  gameStartSound.play()
})



