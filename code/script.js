// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')

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
  console.log('secret: ', secret)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  const value = questions.value
  // We also need a variable that stores the actual value of the question we've selected.

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      // 👆 add the value from the input here
      category: category,
      alertText: `has ${value} hair`
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor', 
      value: value,
      category: category,
      alertText: `has ${value} eyes`
      // Set this up your self
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
      alertText: `wears ${value}`
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
      alertText: `${value}`
      // Set this up your self (should be same structure as above)
    }
  }
  console.log('value: ', value)
  
}


// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  console.log('currentQuestion: ', currentQuestion)
  const secretValue = secret[currentQuestion.attribute]
  if (secretValue === currentQuestion.value) {
    filterCharacters(true)
  } else {
    filterCharacters(false)
  }
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  //console.log(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  //const group = currentQuestion.category
  //const attribute = currentQuestion.value
  // Show the correct alert message for different categories

  if (keep) {
    alert(`Yes, the character ${currentQuestion.alertText}! Keep all characters that ${currentQuestion.alertText}.`)
    charactersInPlay = charactersInPlay.filter((character) => character[currentQuestion.attribute] === currentQuestion.value)
  } else {
    alert(`No, the character doesn't ${currentQuestion.alertText}! Remove all characters that ${currentQuestion.alertText}.`)
    charactersInPlay = charactersInPlay.filter((character) => character[currentQuestion.attribute] !== currentQuestion.value)
  }

  generateBoard()
  /* if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the character wears ${attribute}! Keep all characters that wears ${attribute}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === attribute)
    } else {
      alert(
        `No, the character doesn't wear ${attribute}! Remove all characters that wears ${attribute}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== attribute) 
    }
  } else if (group === 'other') {
      if (keep) {
        alert(
          `Yes, the character ${attribute}! Keep all characters that ${attribute}.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === attribute)
      } else {
        alert(
          `No, the character doesn't ${attribute}! Remove all characters that ${attribute}.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== attribute) 
      }
  } else if (group === 'hair color') {
      if (keep) {
        alert(
          `Yes, the character has ${attribute} hair! Keep all characters that has ${attribute} hair.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === attribute)
      } else {
        alert(
          `No, the character doesn't have ${attribute} hair! Remove all characters that has ${attribute} hair.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== attribute) 
      } 
  } else if (group === 'eye color') {
      if (keep) {
        alert(
          `Yes, the character has ${attribute} eyes! Keep all characters that has ${attribute} eyes.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === attribute)
      } else {
        alert(
          `No, the character doesn't have ${attribute} eyes! Remove all characters that has ${attribute} eyes.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== attribute) 
      }
  } */

  // filter to keep or remove based on the keep variable.
  //if (keep) {
  //  charactersInPlay = charactersInPlay.filter((person) => person[attribute] === attribute)
  //} else {
  //  charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== attribute) 
  //}
  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
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
findOutBtn.addEventListener('click', checkQuestion)

// filter to keep or remove based on the keep variable.
  /* charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    or 
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value) */

  // Invoke a function to redraw the board with the remaining people.
// charactersInPlay = charactersInPlay.filter((person) => person['hairColor'] === attribute)