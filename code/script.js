// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
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
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
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
  generateBoard ()
  setSecret ()
  console.log(secret)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value
  // const value = questions.options[questions.selectedIndex].parentNode.value
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
  let keep

  if (category === 'hair') {
    if (value === secret.hair) {
        keep = true
        filterCharacters(keep)
    } else {
        keep = false
        filterCharacters()
    }
    } else if (category === 'eyes') {
        if (value === secret.eyes) {
        keep = true
        filterCharacters(keep)
    } else {
        keep = false
        filterCharacters()
    }
    } else if (category === 'accessories') {
        if (secret.accessories.includes(value)) {
        keep = true
        filterCharacters(keep)
      } else {
        keep = false
        filterCharacters()
      }
    } else if (category === 'other') {
        if (secret.other.includes(value)) {
        keep = true
        filterCharacters(keep)
    } else {
        keep = false
        filterCharacters()
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
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
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair`
      )
    } else {
      alert (
        `No, the person doesn't have ${value} hair. Remove all people with ${value} hair`
      )
    }
} else if (category === 'eyes') {
  if (keep) {
    alert(
      `Yes, the person has ${value}! Keep all people with ${value}`
    )
  } else {
    alert (
      `No, the person doesn't have ${value}. Remove all people with ${value}`
    )
  }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes the person has ${value}! Keep all people that smokes!`
      )
    } else {
      alert(
        `No the person doesn't have ${value}. Remove all people that smokes.`
      )
    }
  }
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
  if (keep === true) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    // or
    // charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    generateBoard()
   } else {
    // charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    // or
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    generateBoard()
  
    // Invoke a function to redraw the board with the remaining people.
  }
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  let confirmGuess = confirm(
    `Are you sure you want to guess ${personToConfirm}?`
  )
  if (confirmGuess === true) {
    checkMyGuess(personToConfirm)
    console.log('yes working')
} else if (confirmGuess === false) {
    alert(
      `OK,  go along and keep playing`
    )
   
    console.log('no working')
}
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  if (personToConfirm === secret.name) {
    winOrLoseText.innerHTML = 'Woho! You guess the right person!'
  } else  {
    winOrLoseText.innerHTML = 'Oh-oh... You guessed the wrong person :('
  }
    winOrLose.style.display = 'flex'
    board.style.display = 'none'
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

}
const playAgain = () => {
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  start ()
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', playAgain)
