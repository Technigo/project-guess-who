// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')

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
  // What else should happen when we start the game?
  board.onload = generateBoard();
  board.onload = setSecret();
  console.log(secret)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (selectedValue) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = selectedValue // cant we do it like this instead? does it have to be like ^ 

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value,
  }
  console.log(currentQuestion)
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion //unpacker

  let keep = false

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
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
  // Show the correct alert message for different categorie
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

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspectCharacter) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const confirmGuess = confirm(`Are you sure you want to guess?`)
  if (confirmGuess)
    checkMyGuess(suspectCharacter)
}

// If you confirm, this function is invoked
const checkMyGuess = (suspectCharacter) => {
  if (suspectCharacter === secret.name) {
    winOrLoseText.innerHTML = `Hurray, you win! Congratulations!`
  } else {
    winOrLoseText.innerHTML = `Baw, you lose...it was ${secret.name}!`
  }
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  winOrLose.style.display = 'flex';
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', (event) => {
  selectQuestion(event.target.value)
})
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => {
  start()
  winOrLose.style.display = 'none'
})



