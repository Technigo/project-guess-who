// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Amy',
    img: 'images/amy.jpg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Doug',
    img: 'images/doug.jpg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Ella',
    img: 'images/ella.jpg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Green',
    img: 'images/green.jpg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Hank',
    img: 'images/hank.jpg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jay',
    img: 'images/jay.jpg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Justin',
    img: 'images/justin.jpg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Kandy',
    img: 'images/kandy.jpg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Luke',
    img: 'images/luke.jpg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Maple',
    img: 'images/maple.jpg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Mustard',
    img: 'images/mustard.jpg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Paige',
    img: 'images/paige.jpg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Peacock',
    img: 'images/peacock.jpg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Philipa',
    img: 'images/philipa.jpg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Plum',
    img: 'images/plum.jpg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Redd',
    img: 'images/redd.jpg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Robyn',
    img: 'images/robyn.jpg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Scarlett',
    img: 'images/scarlett.jpg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Sue',
    img: 'images/sue.jpg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Tim',
    img: 'images/tim.jpg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },

  {
    name: 'Ty',
    img: 'images/ty.jpg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Violet',
    img: 'images/violet.jpg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'White',
    img: 'images/white.jpg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Zoltan',
    img: 'images/zoltan.jpg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
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
  generateBoard();
  setSecret();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label //variable for the category of the dropdown option group

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value; //variable for the option value

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
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  } else if (category === 'accessories' || category === 'other') {
    if (value === secret.accessories.includes(value) || (value === secret.other.includes(value))) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  }
}

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the suspect has ${value} hair! Keep all suspects that have ${value} hair.`
      )
    } else {
      alert(
        `No, the suspect doesn't have ${value} hair! Remove all suspects that have ${value} hair.`
      )
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes the suspect has ${value} eyes! Keep all suspects with ${value} eyes.`
      )
    } else [
      alert(
        `No, the suspect doesn't have ${value} eyes! Remove all suspects with ${value} eyes.`
      )
    ]
  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the suspect wears a ${value}! Keep all suspects that wear a ${value}.`
      )
    } else {
      alert(
        `No, the suspect doesn't wear a ${value}! Remove all suspects that wear a ${value}.`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the suspect is a ${value}! Keep all suspects that are ${value}s.`
      )
  } else {
    alert(
      `No, the suspect isn't a ${value}! Remove all suspects that are ${value}s.`
    )
  }
}

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'accessories' || category === 'other'){
    if (value === secret.accessories.includes(value) || value === secret.other.includes(value)) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  generateBoard();
}

// when clicking guess, the player first has to confirm that they want to make a guess.
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you sure you want to accuse ${suspect}?`)

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if (makeAGuess){
    checkMyGuess(suspect)
  }
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
restartButton.addEventListener('click', start)
