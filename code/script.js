// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const optgroup = document.getElementById('optgroup')
const guessButton = document.getElementsByClassName('filled-button small')
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Frodo',
    img: 'images/frodo.png',
    hair: 'dark brown hair',
    type: 'hobbit',
    accessories: ['the ring of power']
  },
  {
    name: 'Aragorn',
    img: 'images/aragorn.png',
    hair: 'dark brown hair',
    type: 'human',
    accessories: ['sword']
  },
  {
    name: 'Galadriel',
    img: 'images/galadriel.png',
    hair: 'blond hair',
    type: 'elf',
    accessories: ['headband']
  },
  {
    name: 'Legolas',
    img: 'images/legolas.png',
    hair: 'blond hair',
    type: 'elf',
    accessories: ['bow']
  },
  {
    name: 'Merry',
    img: 'images/merry.png',
    hair: 'light brown hair',
    type: 'hobbit',
    accessories: ['pipe']
  },
  {
    name: 'Saruman',
    img: 'images/saruman.png',
    hair: 'white hair',
    type: 'wizard',
    accessories: ['wand']
  },
  {
    name: 'Sam',
    img: 'images/sam.png',
    hair: 'light brown hair',
    type: 'hobbit',
    accessories: ['pipe']
  },
  {
    name: 'Arwen',
    img: 'images/arwen.png',
    hair: 'dark brown hair',
    type: 'elf',
    accessories: ['hood']
  },
  {
    name: 'Bilbo',
    img: 'images/bilbo.png',
    hair: 'grey hair',
    type: 'hobbit',
    accessories: ['the ring of power']
  },
  {
    name: 'Gollum',
    img: 'images/gollum.png',
    hair: 'no hair',
    type: 'other',
    accessories: ['the ring of power']
  },
  {
    name: 'Elrond',
    img: 'images/elrond.png',
    hair: 'dark brown hair',
    type: 'elf',
    accessories: ['headband']
  },
  {
    name: 'Éowyn',
    img: 'images/eowyn.png',
    hair: 'blond hair',
    type: 'human',
    accessories: ['sword']
  },
  {
    name: 'Gandalf',
    img: 'images/gandalf.png',
    hair: 'grey hair',
    type: 'wizard',
    accessories: ['wand']
  },
  {
    name: 'Pippin',
    img: 'images/pippin.png',
    hair: 'light brown hair',
    type: 'hobbit',
    accessories: ['sword']
  },
  {
    name: 'Faramir',
    img: 'images/faramir.png',
    hair: 'light brown hair',
    type: 'human',
    accessories: ['bow']
  },
  {
    name: 'Gimli',
    img: 'images/gimli.png',
    hair: 'red hair',
    type: 'dwarf',
    accessories: ['helmet']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black hair',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black hair',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown hair',
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
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  winOrLose.style.display = 'none';
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
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'accessories') {
    if (secret[category] === value) {
      filterCharacters(true)
      } else {
        filterCharacters(false);
      }
  } else if (category === 'type') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
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
        `No, the character doesn't have a ${value}! Remove all characters that have a ${value}.`
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
        `Yes, the character has ${value}! Keep all characters who have ${value}.`
      )
    } else {
      alert(
        `No, the character doesn't have ${value}. Remove all characters with ${value}.`
      )
    }
  }
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  if (category === 'hair' || category === 'accessories') { 
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => 
      person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => 
      person[category] !== value)
    }
  }
  else if (category === 'type') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => 
      person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => 
      !person[category].includes(value))
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard(keep)
}
// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let confirmation = confirm(`${personToConfirm}, you say? Are you ready to cast your guess to the fiery pits of Mordor?`)
    if (confirmation) {
      checkMyGuess(personToConfirm)
    }
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    //board.style.display = 'none';
    winOrLose.style.display = 'flex';
    winOrLose.innerHTML `
    <p>Congratulations! Your guess was right and your quest successful.</p>`
  } else {
    //board.style.display = 'none';
    winOrLose.style.display = 'flex';
    winOrLose.innerHTML`
    <p>Oh no, your guess was wrong... the eye seems to be still looking around Mordor.</p> `
  }
}
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOut.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
guessButton.addEventListener('click', guess)
restartButton.addEventListener('click', start)
playAgain.addEventListener("click", () => {
  location.reload
  return false
})
