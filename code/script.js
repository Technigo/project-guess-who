// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById('playAgain')
const findOutButton = document.getElementById('filter')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Geralt',
    img: 'images/geralt.png',
    hair: 'white',
    eyes: 'yellow',
    accessories: ['sword'],
    other: ['Witcher']
  },
  {
    name: 'Yennefer',
    img: 'images/yennefer.png',
    hair: 'black',
    eyes: 'purple',
    accessories: [],
    other: ['Mage']
  },
  {
    name: 'Cirilla',
    img: 'images/ciri.png',
    hair: 'white',
    eyes: 'green',
    accessories: ['sword'],
    other: []
  },
  {
    name: 'Eredin',
    img: 'images/eredin.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sword'],
    other: ['Elven']
  },
  {
    name: 'Triss',
    img: 'images/triss.png',
    hair: 'red',
    eyes: 'blue',
    accessories: [],
    other: ['Mage']
  },
  {
    name: 'Dandelion',
    img: 'images/dandelion.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['instrument'],
    other: []
  },
  {
    name: 'Emhyr',
    img: 'images/emhyr.png',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Keira Metz',
    img: 'images/keira-metz.png',
    hair: 'yellow',
    eyes: 'brown',
    accessories: [],
    other: ['Mage']
  },
  {
    name: "Avallac'h",
    img: "images/avallac'h.png",
    hair: 'grey',
    eyes: 'blue',
    accessories: [],
    other: ['Elven']
  },

  {
    name: 'Zoltan',
    img: 'images/zoltan.png',
    hair: 'red',
    eyes: 'brown',
    accessories: ['crossbow'],
    other: ['Dwarf']
  },
  {
    name: 'Vesemir',
    img: 'images/vesemir.png',
    hair: 'white',
    eyes: 'yellow',
    accessories: ['sword'],
    other: ['Witcher']
  },
  {
    name: 'Olgierd von Everec',
    img: 'images/olgierd.png',
    hair: 'red',
    eyes: 'blue',
    accessories: ['sword'],
    other: []
  },
  {
    name: 'Letho',
    img: 'images/letho.png',
    hair: 'none',
    eyes: 'yellow',
    accessories: ['sword'],
    other: ['Witcher']
  },
  {
    name: 'Leshy',
    img: 'images/leshy.png',
    hair: 'none',
    eyes: 'hidden',
    accessories: [],
    other: ['Monster']
  },
  {
    name: 'Rock Troll',
    img: 'images/rock-troll.png',
    hair: 'none',
    eyes: 'brown',
    accessories: [],
    other: ['Monster']
  },
  {
    name: 'Wyvern',
    img: 'images/wyvern.png',
    hair: 'none',
    eyes: 'green',
    accessories: [],
    other: ['Monster']
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
  setSecret() // Sets up random person to guess
  generateBoard() // Create the board!
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const value = questions.value
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  

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

  keep = false;

  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      keep = true
   }
  } else if (category === 'accessories' || category === 'other') {
    if (value === secret[category].includes(value)) {
      keep = true
    }
  }
  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, this person is a ${value}!`)
    } else {
      alert(`No, this person is not a ${value}`)
    }
    // Similar to the one above
  } else {
    if (keep) {
      alert(`Yes! This person has ${value} ${category}! Keep everyone with ${value} ${category}`)
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      alert(`No this person doesn't have ${value} ${category}! Remove everyone with ${value} ${category}`)
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
   

     if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value),
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
     } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value),
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
    
   
      
      
     
  

  // Invoke a function to redraw the board with the remaining people.
  generateBoard(keep)
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToGuess) => {
  const makeAGuess = confirm(`Are you sure you want to pick ${personToGuess}`)
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if (makeAGuess) {
    checkMyGuess(personToGuess)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToGuess) => {
  if (personToGuess === secret.name) {
    winOrLose.innerHTML = "Awesome, you win!"
  } else {
    winOrLose.innerHTML = "Boo, you suck!"
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
playAgainButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
