// All DOM selectors
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLose = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')


// CHARACTER object Array
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

// Draw Game board
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


// Randomly select a person from the characters array, set secret variable
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

//Start and Restart game
const start = () => {
  //All the characters to start with
  charactersInPlay = CHARACTERS
  //Show the board again,Hide the winOrLose section
  board.style.display = "flex"
  winOrLose.style.display = "none"
  setSecret()
  generateBoard()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  const value = questions.value
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value,
      category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category,
    }
  }
}

// Check secret character object on click of 'Find Out'.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]
  filterCharacters(keep)
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
}

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {

  // Show alert messages for different categories
  const { attribute, category, value } = currentQuestion

  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keeping all the people that wears ${attribute}.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Removing all the people that wears ${attribute}.`
      )
    }
  } else if (category === 'hair color') {
    if (keep) {
    alert(`Yes, the person has ${value} hair! Keeping all the people with ${value} hair.`
    )
  } else {
    alert(
      `No, the person doesn't have ${value} hair. Removing people with ${value} hair.`
      )
    }
  } else if (category === 'eye color') {
    if (keep) {
    alert(`Yes, the person has ${value} eyes! Keeping all the people with ${value} eyes.`
    )
  } else {
    alert(`No, the person doesn't have ${value} eyes. Removing people with ${value} eyes.`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is a ${attribute}. Keeping all the people that are ${attribute}s.`
      )
  } else {
      alert(`No, the person is not a ${attribute}. Removing all the people that are ${attribute}s.`)
    } 
  }


  // filter to keep or remove based on the keep variable.
  if (keep) {
    //user guessed right
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    //user guessed wrong
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  generateBoard()
  // Invoke a function to redraw the board with the remaining people.
}

// When clicking guess, the player confirms that they want to make a guess.
const guess = (suspect) => {
  confirm(`Are you sure you want to guess on ${suspect}?`) ? checkMyGuess(suspect) : {}
}

//Scoreboard  counter
let currentScore = 0 
const checkScore = (suspect) => {
  suspect === secret.name ? currentScore++ : currentScore--
}
const scoreBoard = () => {
  let playerScore = currentScore
  return scoreBoardText.innerHTML = `Your score is: ${playerScore}`
}


// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
    // Check if the suspect is the same as the secret person's name
    suspect === secret.name ? winOrLoseText.innerHTML = `You guessed on ${suspect} and it was correct!` : winOrLoseText.innerHTML = `No it's not ${suspect}. It was ${secret.name}!`

    //  Show the win or lose section, Hide the game board
    winOrLose.style.display = 'flex'
    board.style.display = 'none'
    
    checkScore()
    scoreBoard()
}

// Invokes the start function when website is loaded
start()



// All the event listeners
playAgainButton.addEventListener('click', start)
restartButton.addEventListener('click', start)
questions.addEventListener('change', () => selectQuestion())
filterButton.addEventListener('click', checkQuestion)

