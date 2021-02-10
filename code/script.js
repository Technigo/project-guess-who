// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const winLose = document.getElementById('winOrLose') 
const revange = document.getElementById('playAgain')

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

}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  // What else should happen when we start the game?
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // variable created to assign the selected value
  const selectedValue = questions.value

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: selectedValue,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: selectedValue,
      category: category,
    }

  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: selectedValue,
      value: true,
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: selectedValue,
      value: true,
      category: category,
    }

  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  selectQuestion()

  // Compare the currentQuestion with the secret person.
  const secretAttribute = secret[currentQuestion.attribute]
  let shouldKeep

  if (secretAttribute === currentQuestion.value) {
    // See if we should keep or remove people based on that
    shouldKeep = true
  }
  else {
    shouldKeep = false
  }

  // Then invoke filterCharacters
  filterCharacters(shouldKeep)

}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log(keep)

  const group = currentQuestion.category
  const attribute = currentQuestion.attribute
  const physicalAttribute = currentQuestion.value

  // Show the correct alert message for different categories
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      )
    }
  } else if (group === 'other') {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person is a ${attribute}! Keep all that ${attribute} persons`
      )
    } else {
      alert(
        `No, the person is not a ${attribute}! Remove all that ${attribute} persons`
      )
    }
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all persons with yellow hair"
      alert(
        `Yes, the person has ${group} ${physicalAttribute}! Keep all persons with ${group} ${physicalAttribute}`
      )
    } else {
      // alert popup that says something like: "NO, the person doesnt have yellow hair! Remove all persons with yellow hair"
      alert(
        `No, the person has not ${group} ${physicalAttribute}! Remove all persons with ${group} ${physicalAttribute}`
      )
    }

  }

  // filter to keep or remove based on the keep variable.

  charactersInPlay = charactersInPlay.filter((person) => {
    if (keep) {
       return person[attribute] === physicalAttribute
    }
    else{
      return person[attribute] != physicalAttribute

    }
  })
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()

  
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  if (confirm(`Are you sure you want to guess on ${suspect}?`)) {
    
    // If the player wants to guess, invoke the checkMyGuess function.
    checkMyGuess(suspect)
  }

}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the suspect is the same as the secret person's name

  if (suspect === secret.name) {     
    // 2. Set a Message to show in the win or lose section accordingly
    // 3. Show the win or lose section

    winLose.classList.add('win-or-lose-wrapper-on')
   } else {
    winLose.classList.add('win-or-lose-wrapper-on')
   }
  // 4. Hide the game board
}

const playAgain= () =>{
  start()
  winLose.classList.remove('win-or-lose-wrapper-on')

}
// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOut.addEventListener('click', checkQuestion)
revange.addEventListener('click',playAgain)


