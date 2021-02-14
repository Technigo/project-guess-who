// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const counter = document.getElementById('counter')
const findOut = document.getElementById('filter')
const restartButton = document.getElementById('restart')
const revange = document.getElementById('playAgain')
const resulText = document.getElementById('winOrLoseText')
const popup = document.getElementById('custom-popup')
const popupText = document.getElementById('custom-popup-text')
const popupButtons = document.getElementById('custom-popup-buttons')
const questions = document.getElementById('questions')
const winLose = document.getElementById('winOrLose')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Ant-Man',
    img: 'images/Ant-Man.jfif',
    hairColor: 'hidden',
    heroType: 'warrior',
    power: 'technology',
    Cap: false,
    canFly: false,
    weapon: false,

  },
  {
    name: 'Aquaman',
    img: 'images/Aquaman.jfif',
    hairColor: 'yellow',
    heroType: 'mutant',
    power: 'superpower',
    Cap: false,
    canFly: false,
    weapon: false,
  },
  {
    name: 'Batman',
    img: 'images/Batman.jfif',
    hairColor: 'hidden',
    heroType: 'warrior',
    power: 'technology',
    Cap: true,
    canFly: false,
    weapon: false,
  },
  {
    name: 'Black-Panther',
    img: 'images/Black-Panther.png',
    hairColor: 'hidden',
    heroType: 'soldier',
    power: 'technology',
    Cap: false,
    canFly: false,
    weapon: false,
  },
  {
    name: 'Black-Widow',
    img: 'images/Black-Widow.png',
    hairColor: 'red',
    heroType: 'soldier',
    power: 'withoutpower',
    Cap: false,
    canFly: false,
    weapon: true,
  },
  {
    name: 'Captain-America',
    img: 'images/Captain-America.png',
    hairColor: 'yellow',
    heroType: 'soldier',
    power: 'superpower',
    Cap: false,
    canFly: false,
    weapon: true,
  },
  {
    name: 'Captain-Marvel',
    img: 'images/Captain-Marvel.jfif',
    hairColor: 'yellow',
    heroType: 'soldier',
    power: 'superpower',
    Cap: false,
    canFly: true,
    weapon: false,
  },
  {
    name: 'Cat-Woman',
    img: 'images/Cat-woman.jfif',
    hairColor: 'yellow',
    heroType: 'warrior',
    power: 'withoutpower',
    Cap: false,
    canFly: false,
    weapon: false,
  },
  {
    name: 'Deadpool',
    img: 'images/Deadpool.png',
    hairColor: 'hidden',
    heroType: 'mutant',
    power: 'superpower',
    weapon: true,
    Cap: false,
    canFly: false,
  },

  {
    name: 'Dr-Strange',
    img: 'images/Dr-Strange.jfif',
    hairColor: 'brown',
    heroType: 'mage',
    power: 'superpower',
    Cap: true,
    canFly: true,
    weapon: false,
  },
  {
    name: 'Falcon',
    img: 'images/Falcon.jfif',
    hairColor: 'black',
    heroType: 'soldier',
    power: 'technology',
    Cap: false,
    canFly: true,
    weapon: true,
  },
  {
    name: 'Gamora',
    img: 'images/Gamora.png',
    hairColor: 'purple',
    heroType: 'warrior',
    power: 'withoutpower',
    Cap: false,
    canFly: false,
    weapon: true,
  },
  {
    name: 'Green-Lantern',
    img: 'images/Green-Lantern.jfif',
    hairColor: 'brown',
    heroType: 'mage',
    power: 'superpower',
    Cap: false,
    canFly: true,
    weapon: false,
  },
  {
    name: 'Hulk',
    img: 'images/Hulk.jfif',
    hairColor: 'black',
    heroType: 'mutant',
    power: 'superpower',
    Cap: false,
    canFly: false,
    weapon: false,
  },
  {
    name: 'Iron-Man',
    img: 'images/Iron-Man.jfif',
    hairColor: 'hidden',
    heroType: 'warrior',
    power: 'technology',
    Cap: false,
    canFly: true,
    weapon: true,
  },
  {
    name: 'Mantis',
    img: 'images/Mantis.png',
    hairColor: 'brown',
    heroType: 'mage',
    power: 'superpower',
    Cap: false,
    canFly: false,
    weapon: false,
  },
  {
    name: 'Scarlet-Witch',
    img: 'images/Scarlet-Witch.png',
    hairColor: 'red',
    heroType: 'mage',
    power: 'superpower',
    Cap: false,
    canFly: true,
    weapon: false,
  },
  {
    name: 'Superman',
    img: 'images/Superman.jfif',
    hairColor: 'black',
    heroType: 'warrior',
    power: 'superpower',
    Cap: true,
    canFly: true,
    weapon: false,
  },
  {
    name: 'Thor',
    img: 'images/Thor.jfif',
    hairColor: 'brown',
    heroType: 'warrior',
    power: 'superpower',
    Cap: true,
    canFly: true,
    weapon: true,
  },
  {
    name: 'Vision',
    img: 'images/Vision.png',
    hairColor: 'hidden',
    heroType: 'mage',
    power: 'superpower',
    Cap: true,
    canFly: true,
    weapon: false,
  },
  {
    name: 'Wonder-Woman',
    img: 'images/Wonder-Woman.jfif',
    hairColor: 'black',
    heroType: 'warrior',
    power: 'superpower',
    Cap: false,
    canFly: false,
    weapon: true,
  },
  {
    name: 'Star-Lord',
    img: 'images/Dark-Lord.jfif',
    hairColor: 'brown',
    heroType: 'warrior',
    power: 'technology',
    Cap: true,
    canFly: false,
    weapon: true,
  },
  {
    name: 'Spiderman',
    img: 'images/Spiderman.jfif',
    hairColor: 'hidden',
    heroType: 'mutant',
    power:'superpower',
    Cap: false,
    canFly: false,
    weapon: false,
  },
  {
    name: 'Punisher',
    img: 'images/Punisher.jfif',
    hairColor: 'black',
    heroType: 'soldier',
    power:'withoutpower',
    Cap: false,
    canFly: false,
    weapon: true,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay
let guessCounter = 0


// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img class="person-images"src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}
// Aditional popup functionality  
const customPopup = (message, multipleButtons, suspect) => {

  popup.classList.add('custom-popup-on')
 
  popupText.innerHTML = `
  <h2>${message}</h2>`

  if (multipleButtons) {
    popupButtons.innerHTML = `
    <button id="Ok" class="custom-button" onclick="onSelectConfirm('${suspect}')">Accept</button>
    <button id="Cancel" class="custom-button" onclick="onSelectConfirm(false)">Cancel</button>
    `
  } else {
    popupButtons.innerHTML = `
    <button id="Ok" class="custom-button" onclick="closePopud()">Accept</button>
     `
  }

}
const closePopud = () => {
  popup.classList.remove('custom-popup-on')
}
const onSelectConfirm = (suspect) => {

  if (suspect) {
    checkMyGuess(suspect)
  }

  closePopud()

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
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
  //to restart the counter
  counter.innerHTML = ""
  guessCounter = 0
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
  } else if (category === 'hero type') {
    currentQuestion = {
      attribute: 'heroType',
      value: selectedValue,
      category: category,
    }

  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: selectedValue,
      value: true,
      category: category,
    }
  } else if (category === 'power') {
    currentQuestion = {
      attribute: 'power',
      value: selectedValue,
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
  //Counter function
  guessCounter++

  counter.innerHTML = `
  <h2>Number of guesses: ${guessCounter}</h2>>
  `
  // See if we should keep or remove people based on that
  if (secretAttribute === currentQuestion.value) {
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
  const group = currentQuestion.category
  const attribute = currentQuestion.attribute
  const physicalAttribute = currentQuestion.value

  // Show the correct alert message for different categories
  if (group === 'accessories') {
    if (keep) {
      customPopup(`Yes, the person wears ${attribute}! Keep all that wears ${attribute}`, false)
    } else {
      customPopup(`No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`, false)
    }
  } 
   else {
    if (keep) {
      // customPopup popup that says something like: "Yes, the person has yellow hair! Keep all persons with yellow hair"
      customPopup(
        `Yes, the person has ${group} ${physicalAttribute}! Keep all persons with ${group} ${physicalAttribute}`, false
      )
    } else {
      // customPopup popup that says something like: "NO, the person doesnt have yellow hair! Remove all persons with yellow hair"
      customPopup(
        `No, the person has not ${group} ${physicalAttribute}! Remove all persons with ${group} ${physicalAttribute}`, false
      )
    }

  }

  // filter to keep or remove based on the keep variable.
  charactersInPlay = charactersInPlay.filter((person) => {
    if (keep) {
      return person[attribute] === physicalAttribute
    }
    else {
      return person[attribute] != physicalAttribute

    }
  })
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
// store the interaction from the player in a variable.
const guess = (suspect) => {
  // remember the confirm() ?
  customPopup(`Are you sure you want to guess on ${suspect}?`, true, suspect)
}

// If you confirm, this function is invoked
// 1. Check if the suspect is the same as the secret person's name
const checkMyGuess = (suspect) => {

  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  winLose.classList.add('win-or-lose-wrapper-on')
  if (suspect === secret.name) {
    resulText.textContent = 'Congrats! You win'
  } else {
    resulText.textContent = 'GAME OVER! You Lose 😖'
  }
  // 4. Hide the game board
}
//Bonus Step
const playAgain = () => {
  start()
  winLose.classList.remove('win-or-lose-wrapper-on')

}
// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOut.addEventListener('click', checkQuestion)
revange.addEventListener('click', playAgain)


