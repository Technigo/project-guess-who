// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const filterButton = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose');
const winnOrLose = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')

// Array with all the characters, as objects
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
  console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // The board will be visible by adding GenerateBoard below
  generateBoard() 
  // Also the code will select one randomly person by adding setSecret function below
  setSecret() 
  board.style.display="flex" // 
  winOrLose.style.display="none"

}

// stores one value when clicking to the dropdown and selects/clicking one option
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,}
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category: category,
    }
  }
}

// This function is invoked when you click on 'Find Out'.
const checkQuestion = () => {
  if (secret[currentQuestion.attribute] === currentQuestion.value) { 
    filterCharacters(true)
  } else {
    filterCharacters(false)
  }
}

// This function will filter the characters array and redraw the game board after we selected one value from dropdown and pressed 'find-out'.
const filterCharacters = (keep) => {
  const attribute = currentQuestion.attribute;
  const value = currentQuestion.value;
  const category = currentQuestion.category;
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person ${attribute}! Keep all that ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't ${attribute}! Remove all that ${attribute}`
      )
    }
  } else if (category === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all that have ${value} eyes`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all that have ${value} eyes`
      )
    }
  } else if (category === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all that have ${value} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all that have ${value} hair`
      )
    }
  } 

  // filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value) 
  }

  // Board will be redrawn after we filtered out person we want to keep
  generateBoard()
}

// when clicking guess, the player have to confirm that they want to make a guess.
const guess = (suspect) => {
  const myGuess = confirm(`Are you sure ${suspect}`)
  if (myGuess) {
    checkMyGuess(suspect)
  }
}

// If you confirm that you want to guess, this function is invoked
const checkMyGuess = (suspect) => {
  // This well pop up if you guessed right
  if(suspect === secret.name) {
    winnOrLose.innerHTML = `Congrats it was ${secret.name}`
  } else {
    winnOrLose.innerHTML = `No you was wrong, it was ${secret.name}`
  }
  // The board will disappear and a new screen will display with text message. 
  board.style.display="none"
  winOrLose.style.display="flex"

}



// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion) 
filterButton.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)