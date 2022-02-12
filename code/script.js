// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const guessCounter = document.getElementById('guesses')
const gameTimer = document.getElementById('timer')
const gameTime = document.getElementById('game-time')
const gameGuess = document.getElementById('game-guess')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    Hair: 'hidden',
    Eyes: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    Hair: 'hidden',
    Eyes: 'blue',
    Accessories: ['hat'],
    Other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    Hair: 'grey',
    Eyes: 'blue',
    Accessories: ['hat'],
    Other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    Hair: 'black',
    Eyes: 'brown',
    Accessories: [],
    Other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    Hair: 'yellow',
    Eyes: 'green',
    Accessories: ['glasses'],
    Other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    Hair: 'brown',
    Eyes: 'green',
    Accessories: ['glasses'],
    Other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    Hair: 'black',
    Eyes: 'hidden',
    Accessories: ['glasses', 'jewelry'],
    Other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    Hair: 'yellow',
    Eyes: 'hidden',
    Accessories: ['glasses'],
    Other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    Hair: 'orange',
    Eyes: 'green',
    Accessories: ['glasses', 'jewelry'],
    Other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    Hair: 'purple',
    Eyes: 'hidden',
    Accessories: ['glasses'],
    Other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    Hair: 'brown',
    Eyes: 'blue',
    Accessories: ['glasses', 'hat'],
    Other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    Hair: 'brown',
    Eyes: 'green',
    Accessories: ['glasses'],
    Other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    Hair: 'orange',
    Eyes: 'green',
    Accessories: ['glasses', 'hat'],
    Other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    Hair: 'white',
    Eyes: 'hidden',
    Accessories: ['hat', 'jewelry'],
    Other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    Hair: 'orange',
    Eyes: 'green',
    Accessories: ['glasses'],
    Other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    Hair: 'hidden',
    Eyes: 'blue',
    Accessories: ['hat'],
    Other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    Hair: 'black',
    Eyes: 'blue',
    Accessories: ['glasses'],
    Other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    Hair: 'black',
    Eyes: 'brown',
    Accessories: ['glasses', 'jewelry'],
    Other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    Hair: 'brown',
    Eyes: 'green',
    Accessories: ['glasses'],
    Other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    Hair: 'yellow',
    Eyes: 'hidden',
    Accessories: ['glasses', 'hat', 'jewelry'],
    Other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    Hair: 'grey',
    Eyes: 'brown',
    Accessories: ['jewelry'],
    Other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    Hair: 'yellow',
    Eyes: 'green',
    Accessories: [],
    Other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    Hair: 'black',
    Eyes: 'green',
    Accessories: [],
    Other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    Hair: 'black',
    Eyes: 'brown',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let guesses = 0

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
  console.log(`kukkuu`)
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  startTimer()
  console.log(`hello`)
  winOrLose.style.display='none'
  guessCounter.innerHTML = `0`
}

//timer
const startTimer = () => {
  time = Date.now()
  setInterval(() => {
    elapsedTime = Math.floor((Date.now() - time) / 1000)
    gameTimer.innerHTML = `${elapsedTime}`
  }, 1000)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const guessCategory = questions.options[questions.selectedIndex].parentNode.label
console.log(`hei`)
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
  const guessValue = questions.value
  
  currentQuestion = {
    category: guessCategory,
    value: guessValue
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
console.log(`moi`)
  // Compare the currentQuestion details with the secret person details in a different manner based on category (Hair/Eyes or Accessories/Others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'Hair' || category === 'Eyes') {
    if (secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } else if (category === 'Accessories' || category === 'Other') {
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
  if (category === 'Accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'Other') {
    if (keep) {
      alert(
        `Yes, the person is ${value}! Keep all smokers`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
    alert(
      `No, person is not a ${value}! Remove all smokers`
     )
     charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'Hair') {
      if (keep) {
      alert( 
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert( 
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else  {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  guesses++
  guessCounter.innerHTML = guesses
  generateBoard()
  } 
  
  

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for Hair and Eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for Accessories and Other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const player = confirm(`Are you sure you want to guess?`)
   if (player) {
     checkMyGuess(personToConfirm)
   }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    console.log(`toimii`)
    winOrLoseText.innerHTML = `<h1>Your guess is correct!</h1>`

  } else {
    console.log(`toimii2`)
    winOrLoseText.innerHTML = `<h1>Sorry, wrong answer!</h1>`
  }
  board.innerHTML = ''
  winOrLose.style.display='block'
  gameTimer.style.display= 'none'
  gameTime.style.display = 'none'
  guessCounter.style.display = 'none'
  gameGuess.style.display = 'none'
}


  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', () => {
  start()
})

questions.addEventListener('change', () => {
   selectQuestion()
})

findOutButton.addEventListener('click', () => {
  checkQuestion()
})

playAgainButton.addEventListener('click', () => {
  start()
  
})
