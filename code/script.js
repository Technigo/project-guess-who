// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const optgroup = document.getElementById('optgroup')
const guessButton = document.getElementsByClassName('filled-button small')
const winOrLose = document.getElementById('winOrLose')
const conclusion = document.getElementsByClassName('conclusion')
const playAgain = document.getElementById('playAgain')
const winLoseWrapper = document.getElementsByClassName('win-or-lose')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Frodo',
    img: 'images/frodo.png',
    hair: 'dark-brown',
    type: 'hobbit',
    accessories: 'ring'
  },
  {
    name: 'Aragorn',
    img: 'images/aragorn.png',
    hair: 'dark-brown',
    type: 'human',
    accessories: 'sword'
  },
  {
    name: 'Merry',
    img: 'images/merry.png',
    hair: 'light-brown',
    type: 'hobbit',
    accessories: 'pipe'
  },
  {
    name: 'Saruman',
    img: 'images/saruman.png',
    hair: 'white',
    type: 'wizard',
    accessories: 'staff'
  },
  {
    name: 'Galadriel',
    img: 'images/galadriel.png',
    hair: 'blond',
    type: 'elf',
    accessories: 'headband'
  },
  {
    name: 'Legolas',
    img: 'images/legolas.png',
    hair: 'blond',
    type: 'elf',
    accessories: 'bow'
  },
  {
    name: 'Sam',
    img: 'images/sam.png',
    hair: 'light-brown',
    type: 'hobbit',
    accessories: 'pipe'
  },
  {
    name: 'Arwen',
    img: 'images/arwen.png',
    hair: 'dark-brown',
    type: 'elf',
    accessories: 'hood'
  },
  {
    name: 'Bilbo',
    img: 'images/bilbo.png',
    hair: 'grey',
    type: 'hobbit',
    accessories: 'ring'
  },
  {
    name: 'Gollum',
    img: 'images/gollum.png',
    hair: 'missing',
    type: 'unknown',
    accessories: 'ring'
  },
  {
    name: 'Elrond',
    img: 'images/elrond.png',
    hair: 'dark-brown',
    type: 'elf',
    accessories: 'headband'
  },
  {
    name: 'Éowyn',
    img: 'images/eowyn.png',
    hair: 'blond',
    type: 'human',
    accessories: 'sword'
  },
  {
    name: 'Gandalf',
    img: 'images/gandalf.png',
    hair: 'grey',
    type: 'wizard',
    accessories: 'staff'
  },
  {
    name: 'Pippin',
    img: 'images/pippin.png',
    hair: 'light-brown',
    type: 'hobbit',
    accessories: 'sword'
  },
  {
    name: 'Faramir',
    img: 'images/faramir.png',
    hair: 'light-brown',
    type: 'human',
    accessories: 'bow'
  },
  {
    name: 'Gimli',
    img: 'images/gimli.png',
    hair: 'red',
    type: 'dwarf',
    accessories: 'helmet'
  },
  {
    name: 'Boromir',
    img: 'images/boromir.png',
    hair: 'light-brown',
    type: 'human',
    accessories: 'ring'
  },
  {
    name: 'Rosie',
    img: 'images/rosie.png',
    hair: 'light-brown',
    type: 'hobbit'
  },
  {
    name: 'Sauron',
    img: 'images/sauron.png',
    hair: 'missing',
    type: 'unknown',
    accessories: 'helmet'
  },
  {
    name: 'Treebeard',
    img: 'images/treebeard.png',
    hair: 'missing',
    type: 'ent'
  }
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
  winOrLose.style.display = 'none';
  board.style.display = 'flex';
  setSecret()
  generateBoard()
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
        `Yes, the character's type is ${value}! Keep all characters that are ${value}s.`
      )
    } else {
      alert(
        `No, the character's type is not ${value}. Remove all characters that are ${value}s.`
      )
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the character's hair is ${value}! Keep all characters whose hair is ${value}.`
      )
    } else {
      alert(
        `No, the character's hair is not ${value}. Remove all characters with ${value} hair.`
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
    board.style.display = 'none';
    winOrLose.style.display = 'flex';
    winOrLose.innerHTML = `
    <div class="win-or-lose">
        <img
          class="guess-who-icon"
          src="images/guesslogo.png"
          alt="Guess Who"
        />
      <img src=${secret.img} alt=${secret.name}>
      <h1>It truly was ${secret.name}! Your guess was right and your quest successful.</h1>
      <button type="button" id="playAgain" class="filled-button">play again</button>
    </div>`
  } else {
    board.style.display = 'none';
    winOrLose.style.display = 'flex';
    winOrLose.innerHTML = `
    <div class="win-or-lose">
        <img
          class="guess-who-icon"
          src="images/guesslogo.png"
          alt="Guess Who"
        />
      <img src="images/sauroneye.png">
      <h1>Oh no, your guess was wrong... the eye seems to be still looking around Mordor.</h1>
      <button type="button" id="playAgain" class="filled-button">play again</button>
    </div>`
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
playAgain.addEventListener('click', start)
