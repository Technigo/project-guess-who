// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLoseWrapper = document.getElementById('WinOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Bertram',
    img: 'images/kid.png',
    hair: 'orange',
    eyes: 'black',
    wears: ['orange', 'purple'],
    accessories: [],
    other: ['']
  },
  {
    name: 'Adam West',
    img: 'images/adamwest.png',
    hair: 'grey',
    eyes: 'hidden',
    wears: ['grey'],
    accessories: ['weapon'],
    other: []
  },
  {
    name: 'Brian',
    img: 'images/brian.png',
    hair: 'white',
    eyes: 'black',
    wears: ['nothing'],
    accessories: ['collar'],
    other: []
  },
  {
    name: 'Chris',
    img: 'images/chris.png',
    hair: 'blonde',
    eyes: 'hidden',
    wears: ['blue', 'black'],
    accessories: ['hat'],
    other: ['fat']
  },
  {
    name: 'Cleveland',
    img: 'images/cleveland.png',
    hair: 'black',
    eyes: 'black',
    wears: ['red', 'blue'],
    accessories: [],
    other: []
  },
  {
    name: 'Vinnie',
    img: 'images/dogvinnie.png',
    hair: 'blonde',
    eyes: 'black',
    wears: ['nothing'],
    accessories: ['collar'],
    other: []
  },
  {
    name: 'Cleveland Jr',
    img: 'images/clevelendjr.png',
    hair: 'black',
    eyes: 'hidden',
    wears: ['red', 'blue'],
    accessories: ['glasses'],
    other: ['fat']
  },
  {
    name: 'Jerome',
    img: 'images/heyguy.png',
    hair: 'black',
    eyes: 'hidden',
    wears: ['red', 'black'],
    accessories: [],
    other: ['beard']
  },
  {
    name: 'Quagmire',
    img: 'images/jiggedy.png',
    hair: 'black',
    eyes: 'green',
    wears: ['red', 'blue'],
    accessories: [''],
    other: []
  },

  {
    name: 'Joe',
    img: 'images/joe.png',
    hair: 'brown',
    eyes: 'hidden',
    accessories: [''],
    other: ['disabled']
  },
  {
    name: 'Rallo',
    img: 'images/kidafro.png',
    hair: 'black',
    eyes: 'blue',
    wears: ['blue'],
    accessories: [],
    other: []
  },
  {
    name: 'Lois',
    img: 'images/lois.png',
    hair: 'orange',
    eyes: 'green',
    wears: ['blue'],
    accessories: [],
    other: ['singer']
  },
  {
    name: 'Big Lois',
    img: 'images/loisbig.png',
    hair: 'orange',
    eyes: 'green',
    wears: ['blue', 'grey'],
    accessories: [],
    other: ['fat']
  },
  {
    name: 'Meg',
    img: 'images/meggriffin.png',
    hair: 'brown',
    eyes: 'hidden',
    wears: ['pink', 'blue'],
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Herbert',
    img: 'images/oldguy.png',
    hair: 'grey',
    eyes: 'green',
    wears: ['blue'],
    accessories: [],
    other: ['disabled']
  },
  {
    name: 'News Anchor',
    img: 'images/newsanchor.png',
    hair: 'hidden',
    eyes: 'blue',
    wears: ['pink'],
    accessories: [],
    other: []
  },
  {
    name: 'Peter',
    img: 'images/peter.png',
    hair: 'brown',
    eyes: 'blue',
    wears: ['white', 'green'],
    accessories: ['glasses'],
    other: ['fat']
  },
  {
    name: 'Pirate',
    img: 'images/pirate.png',
    hair: 'black',
    eyes: 'brown',
    wears: ['red', 'white'],
    accessories: ['hat'],
    other: ['disabled']
  },
  {
    name: 'Blonde Lois',
    img: 'images/loisblonde.png',
    hair: 'yellow',
    eyes: 'green',
    wears: [],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Rock Peter',
    img: 'images/peterrock.png',
    hair: 'brown',
    eyes: 'hidden',
    wears: ['black', 'purple'],
    accessories: [],
    other: ['singer', 'fat']
  },
  {
    name: 'Angry Peter',
    img: 'images/peterangry.png',
    hair: 'brown',
    eyes: 'brown',
    wears: ['green', 'white'],
    accessories: ['glasses'],
    other: ['fat']
  },
  {
    name: 'Chewie Brian',
    img: 'images/starwarsbrian.png',
    hair: 'brown',
    eyes: 'green',
    wears: ['nothing'],
    accessories: [],
    other: []
  },
  {
    name: 'Stewie',
    img: 'images/stevie.png',
    hair: 'black',
    eyes: 'green',
    wears: ['red', 'yellow'],
    accessories: [],
    other: []
  },
  {
    name: 'Consuela',
    img: 'images/consuela.png',
    hair: 'black',
    eyes: 'brown',
    wears: ['pink'],
    accessories: ['glasses'],
    other: ['fat']
  },
]

// Global variables
let secretCharacter
let currentQuestion
let charactersInPlay
let numberOfGuesses = 0

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
  numberOfGuesses = 5
  document.getElementById('guess-counter').innerHTML = `${numberOfGuesses}`
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
  numberOfGuesses -= 1
  document.getElementById('guess-counter').innerHTML = `${numberOfGuesses}`
  const { category,value } = currentQuestion
  console.log('current question', currentQuestion)
  
  if (numberOfGuesses === -1) {
    findOutButton.style.display = 'none'
    document.getElementById('guess-counter').innerHTML = `No guesses left. Time to make a guess!`

  } else if (category === 'accessories') {
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