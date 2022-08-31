// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const guessCounter = document.getElementById('guess-counter')
const findOutButton = document.getElementById('filter')
const guessButton = document.getElementById('guess-btn')
const winOrLoseWrapper = document.getElementById('WinOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
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
    accessories: 'none',
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
    accessories: 'none',
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
    accessories: ['none'],
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
let secretCharacter
let currentQuestion
let charactersInPlay
let numberOfGuesses = 5

// Draws the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id="guess-btn" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly selects a person from the characters array and sets as the value of the variable called secretCharacter
const setSecretCharacter = () => {
  secretCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log('Secret character chosen:', secretCharacter);
}

//Gametime button & startpage before enter the game page
//startBtn.onclick = () => {
 // startPage.style.display = "none"
  //setTimeout(start, 500)
//}

// This function is to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecretCharacter();
  selectQuestion();
  alert('lets play!')
}

// Sets the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function will be invoked when you click on 'Find Out' button.
// This compares the currentQuestion details with the SecretCharacter person details in a different manner based on category.
// Sees if we should keep or remove people based on that
// Then invokes filterCharacters true or false
const checkQuestion = () => {
  const { category,value } = currentQuestion
  console.log('current question', currentQuestion)
  
  if (category === 'accessories') {
    if (secretCharacter[category].includes(value)) {
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }

  } else if (category === 'other') {
    if (secretCharacter[category].includes(value) ) {
          filterCharacters(true)
      }
    else {
          filterCharacters(false)
      }

  } else if (category === 'hair') {
    if (secretCharacter[category] === value) {
        filterCharacters(true)
    } else {
        filterCharacters(false)
     }

   } else if (category === 'eyes') {
      if (secretCharacter[category] === value) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }

  }

// This will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log('keep it?', keep)

  const { category, value } = currentQuestion
  // Shows the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is ${value}. Keep all peoople that is ${value}`)   
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    }
    else {
      alert(`No, the person's not ${value}. Remove all people that's not ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  
  } else if (category === 'hair') {
      if (keep) {
        alert(`Yes, the person has ${value} hair! Keep all people with ${value} hair.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
        alert(`No, the person doesn't have ${value} hair. Remove all people with ${value} hair.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }

  } else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people with ${value} eyes.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
  } else {
      alert(`No, the person doesn't have ${value} eyes. Remove all people with ${value} eyes.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
  }
}

 // Determine what is the category
// Filters by category to keep or remove based on if the keep variable is true or false.

  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'other') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      }
      else {
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }

  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'eyes') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      }
      else {
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }

  };

  //Generates new board with filtered characters
  generateBoard();

}
  

// When clicking guess, the player first have to confirm/press ok that they want to make a guess. If cancel, nothing happens.
const guess = (personToConfirm) => {
  const userGuess = confirm(`Are you sure you want to guess ${personToConfirm}?`)

  if (userGuess) {
    checkMyGuess(personToConfirm);
  } 
  
}

// If player confirms that they want to guess, this function is invoked
const checkMyGuess = (personToCheck) => {

  board.style.display = 'none'

  if (personToCheck === secretCharacter.name) {
     winOrLose.style.display = "flex"
     winOrLoseText.innerHTML += `
    Yey! ${personToCheck} was correct. You Win. Want to play again?
     `
    } else {
    winOrLose.style.display = "flex"
    winOrLoseText.innerHTML += `
   Sorry, ${personToCheck} was not correct. Want to play again?
    `
  }
 
}

// Invokes the start function when website is loaded
start()

// This reloads after pressing "play again"-button
reload = () => {
  window.location.reload()
}

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', reload)