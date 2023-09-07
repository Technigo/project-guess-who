// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const optgroup = document.getElementById('optgroup')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Frodo',
    img: 'images/frodo.png',
    hair: 'dark brown',
    type: 'hobbit',
    accessories: ['ring of power']
  },
  {
    name: 'Aragorn',
    img: 'images/aragorn.png',
    hair: 'dark brown',
    type: 'human',
    accessories: ['sword']
  },
  {
    name: 'Galadriel',
    img: 'images/galadriel.png',
    hair: 'blond',
    type: 'elf',
    accessories: ['headband']
  },
  {
    name: 'Legolas',
    img: 'images/legolas.png',
    hair: 'blond',
    type: 'elf',
    accessories: ['bow']
  },
  {
    name: 'Merry',
    img: 'images/merry.png',
    hair: 'light brown',
    type: 'hobbit',
    accessories: ['pipe']
  },
  {
    name: 'Saruman',
    img: 'images/saruman.png',
    hair: 'white',
    type: 'wizard',
    accessories: ['wand']
  },
  {
    name: 'Sam',
    img: 'images/sam.png',
    hair: 'light brown',
    type: 'hobbit',
    accessories: ['pipe']
  },
  {
    name: 'Arwen',
    img: 'images/arwen.png',
    hair: 'dark brown',
    type: 'elf',
    accessories: ['hood']
  },
  {
    name: 'Bilbo',
    img: 'images/bilbo.png',
    hair: 'grey',
    type: 'hobbit',
    accessories: ['ring of power']
  },

  {
    name: 'Gollum',
    img: 'images/gollum.png',
    hair: 'no hair',
    type: 'other',
    accessories: ['ring of power']
  },
  {
    name: 'Elrond',
    img: 'images/elrond.png',
    hair: 'dark brown',
    type: 'elf',
    accessories: ['headband']
  },
  {
    name: 'Éowyn',
    img: 'images/eowyn.png',
    hair: 'blond',
    type: 'human',
    accessories: ['sword']
  },
  {
    name: 'Gandalf',
    img: 'images/gandalf.png',
    hair: 'grey',
    type: 'wizard',
    accessories: ['wand']
  },
  {
    name: 'Pippin',
    img: 'images/pippin.png',
    hair: 'light brown',
    type: 'hobbit',
    accessories: ['sword']
  },
  {
    name: 'Faramir',
    img: 'images/faramir.png',
    hair: 'light brown',
    type: 'human',
    accessories: ['bow']
  },
  {
    name: 'Gimli',
    img: 'images/gimli.png',
    hair: 'red',
    type: 'dwarf',
    accessories: ['helmet']
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
        <img src=${person.img} alt=${person.name}>
        <p>${person.name}</p>
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
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
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

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  let keep;

  if (category === 'Hair' || category === 'Accessories') {
    if (secret[category] === value) {
      filterCharacters(true)
      } else {
        filterCharacters();
      }
  } else if (category === 'Character type' || category === 'other') {
    if (secret[category].includes(value))

  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the character has a ${value}! Keep all characters that have a ${value}.`
      )
    } else {
      alert(
        `No, the character doesn't have a ${value}! Remove all characters that have a ${value}`
      )
    }
  } else if (category === 'type') {
    if (keep) {
      alert(
        `Yes, the character is a ${value}! Keep all characters that are ${value}s.`
      )
    } else {
      alert(
        `No, the character isn't a ${value}. Remove all characters that are ${value}s.`
      )
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the character has ${value} hair! Keep all characters whose hair is ${value}.`
      )
    } else {
      alert(
        `No, the characters doesn't have ${value} hair. Remove all characters whose hair is ${value}.`
      )
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
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
findOut.addEventListener('click', checkQuestion);
questions.addEventListener('change')
