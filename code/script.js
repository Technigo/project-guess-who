// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const filterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLose = document.getElementById('winOrLose')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById('playAgain')
const totalGuesses = document.querySelector("#totalGuesses")
const time = document.querySelector("#time")

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: false,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: true,
    button: true,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: true,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    headgear: false,
    necklace: true,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: true,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: true,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    headgear: true,
    necklace: true,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'hazel',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: true,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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

// This function to start (and restart) the game, resets guess counter + timer
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  numberOfGuesses = 0
  totalGuesses.innerText = 0
  timePassed = 0
  timePassed.innerText = 0
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
      // 👆 add the value from the input here
      category
    }
  } else if (category === 'eye color') {
    // Set this up your self
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category
    }
  } else if (category === 'other') {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
      attribute: value,
      value: true,
      category
   }
  }
  numberOfGuesses++
  totalGuesses.innerText = numberOfGuesses
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]
  filterCharacters(keep)
 // Compare the currentQuestion with the secret person.
// See if we should keep or remove people based on that
// Then invoke filterCharacters
}
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
// Show the correct alert message for different categories
const { attribute, category, value } = currentQuestion

if (category === 'accessories') {
  if (keep) {
    alert(
      `You are correct, the person wears ${attribute}! Keep all that wears ${attribute}.`
    )
  } else {
    alert(
      `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}.`
    )
  }
} else if (category === 'hair color') {
  if (keep) {
    alert(`Sure thing, the person has ${value} hair! Keep all that has ${value} hair.`
    )
  } else {
    alert(
    `Nope, the person doesn't have ${value} hair. Remove all that has ${value} hair.`
    )
  }
} else if (category === 'eye color') {
  if (keep) {
    alert(
      `Correctamundo, the person has ${value} eyes! Keep all that has ${value} eyes.`
    )
  } else {
    alert(
      `Sorry, the person doesn't have ${value} eyes. Remove all that has ${value} eyes.`
      )
  }
} else if (category === 'other') {
  if (keep) {
    alert(
      `Affirmative, the person has a ${attribute}. Keep all that has a ${attribute}.`
    )
} else {
    alert(
      `Negative, the person doesn't have a ${attribute}. Remove all that has a ${attribute}.`
    )
  } 
}
  // filter to keep or remove based on the keep variable.
  
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  generateBoard()
  addGuessesMade(keep)
  // Invoke a function to redraw the board with the remaining people.
}

// Adds the current guess to the list of guesses made
const addGuessesMade = (keep) => {
  if (keep) {
    guessesMade.innerHTML += `
  <span class="right-guess"><img class="yes-or-no" src="./images/yes.svg">${currentQuestion.text}</span>
  `
  }
  else {
    guessesMade.innerHTML += `
    <span class="wrong-guess"><img class="yes-or-no" src="./images/no.svg">${currentQuestion.text}</span>
    `
  }
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const confirmed = confirm(`Do you think the secret person is ${suspect}?`)

  if (confirmed) {
    checkMyGuess(suspect)
  }
// store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
};

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {

  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `You are a genius!! It was ${suspect}.`
  } else {
    winOrLoseText.innerHTML = `It is not ${suspect}. It was ${secret.name}.`
  }
  
  // 1.Check if the suspect is the same as the secret person's name
  // 2.Set a Message to show in the win or lose section accordingly
  // 3.Show the win or lose section
  // 4.Hide the game board
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

playAgain.addEventListener('click', () => {
  location.reload()
})

// Sets the timer
setInterval(() => {
  timePassed++
  time.innerText = timePassed
}, 1000)

// Invokes the start function when website is loaded

start()


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', () => selectQuestion())
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)