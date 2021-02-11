// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const showSecretCard = document.getElementById('showSecret')

// const guessButton = document.getElementById('guess')

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
let secret, currentQuestion, charactersInPlay, secretValue

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

  generateBoard();
  setSecret();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value 
  /// of the question we've selected.

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: questions.value, // add the value from the input here
      category: category,
    }

  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: questions.value, // add the value from the input here
      category: category,
    }

  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: questions.value,
      value: true, // we're asking if this person wears a hat for example, so always true in the question.
      category: category,
    }

  } else if (category === 'other') {
      currentQuestion = {
        attribute: questions.value,
        value: true,
        category: category,
      }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  // Compare the currentQuestion with the secret person.
  // Then invoke filterCharacters
  const secretValue = secret[currentQuestion.attribute];

  if (currentQuestion.value === secretValue) {
    keep = true
    filterCharacters(true)
  } else {
    keep = false
    filterCharacters(false)
  }
}

// filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const category = currentQuestion.category;
  const attribute = currentQuestion.attribute;
  
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
          `Yes, the person is a smoker! Keep all smokers!`
        )
      }  else {
          alert(
            `No, the person is not a smoker, remove all smokers.`
          )
        }
  } else if (category === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} hair! Keep all persons with ${currentQuestion.value} hair`
      )                     
    } else {
      alert(
        `No, the person doesnt have ${currentQuestion.value} hair! Remove all persons with ${currentQuestion.value} hair`
      )                     
    }
  } else if (category === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} eyes! Keep all persons with ${currentQuestion.value} eyes`
      )                    
    } else {
      alert(
        `No, the person doesnt have ${currentQuestion.value} eyes! Remove all persons with ${currentQuestion.value} eyes`
      )                    
    }
  }

  // filter to keep or remove based on the keep variable.
  // Invoke a function to redraw the board with the remaining people.
if (keep) {
  charactersInPlay = charactersInPlay.filter((person) => person[attribute] === currentQuestion.value)
  generateBoard(charactersInPlay)
  console.log('equal', charactersInPlay )
} else {
  charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== currentQuestion.value)
  generateBoard(charactersInPlay)
  console.log('not equal', charactersInPlay )
  }
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  
  const makeAGuess = confirm(`Please confirm if you want to guess on ${suspect}`)
  
  if (makeAGuess === true) {
    checkMyGuess(suspect)
  } else {

  }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {

  if (suspect === secret.name) {
    console.log('correct guess!')
    board.innerHTML = ''
    document.getElementById('winOrLose').style.display = 'flex'
    showSecretCard.innerHTML = `
      <img src=${secret.img}>
      <h2>${secret.name}</h2>
      `
  } else {
    console.log('wrong guess')
    alert(`No, this is not the secret person, keep guessing!`)
  }
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)

questions.addEventListener('change', selectQuestion)

// findOutButton.addEventListener('click', checkQuestion)
findOutButton.addEventListener('click', () => {
  checkQuestion(currentQuestion)
})

playAgainButton.addEventListener('click', () => {
  document.getElementById('winOrLose').style.display = 'none'
  start()
})

