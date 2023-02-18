// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const guessCounterWrapper = document.getElementById('guessCounterWrapper')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hats'],
    other: [],
    pets: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hats', 'facial-hair'],
    other: [],
    pets: ['parrot']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hats', 'facial-hair'],
    other: ['smoker'],
    pets: []
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: [],
    pets: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    pets: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', 'facial-hair'],
    other: [],
    pets: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
    pets: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
    pets: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    pets: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker'],
    pets: []
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hats', 'facial-hair'],
    other: ['smoker'],
    pets: []
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    pets: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hats', 'facial-hair'],
    other: ['smoker'],
    pets: []
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hats'],
    other: [],
    pets: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    pets: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hats'],
    other: [],
    pets: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: [],
    pets: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: [],
    pets: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    pets: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hats'],
    other: [],
    pets: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: [],
    pets: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: [],
    pets: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['facial-hair'],
    other: [],
    pets: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hats'],
    other: [],
    pets: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let numberOfGuesses = 0


//Sounds
let correctSound = new Audio('sounds/correct.wav')
let wrongSound = new Audio('sounds/wrong.wav')
let selectClick = new Audio('sounds/selectClick.wav')

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
  selectClick.play()
}

//A function that counts the number of selections made
const updateGuessCounter = (guesses) => {;
  guessCounterWrapper.innerHTML = `<p>Selections made: ${numberOfGuesses}</p>`
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
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  numberOfGuesses = 0;
  updateGuessCounter()
}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  // We also need a variable that stores the actual value of the question we've selected.
const value = questions.value
console.log("selectquestion activated")
  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  console.log(`checkQuestion will filter based on ${category}: ${value}`)
  updateGuessCounter(numberOfGuesses++)
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true); // Keeps those with selected hair- or eyecolor
    }
    else {
      filterCharacters(false) // Removes those with selected hair- or eyecolor.
    }

  } else if (category === 'accessories' || category === 'other' || category === 'pets') {
    if (secret[category].includes(value)) {
      filterCharacters(true) //Keeps those with selected attribute
    }
    else {
      filterCharacters(false) //removes those with selected attribute
    }
  }

}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories + filters the board based on selection
  if (category === 'accessories') { //alert and filter for category "accesories"
    if (keep) {
      alert(
        `Yes, the person wears that! Keep all people with ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') { //alert and filter for category "other"
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people who are ${value}s.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      alert(
        `No, the person is not a ${value}! Remove all people who are ${value}s.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'pets') { //alert and filter for category "pets"
    if (keep) {
      alert(`Yes! The secret person does indeed have a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
          }
    else {
      alert (`No. Sadly, the secret person is not lucky enough to have a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else { //Alert and filter for hair- and eyecolor.
    if (keep) {
      alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`)
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(`No, the person does not have ${value} ${category}! Remove all people with ${value} ${category}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const finalGuess = confirm(`Do you really think it's ${personToConfirm}?`)
  // If the player wants to guess, invoke the checkMyGuess function.
  if (finalGuess) {
    checkMyGuess(personToConfirm)
  }
}


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
  // 2. Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerHTML = `
    You guessed correctly! ${personToCheck} is indeed the secret person.`
    correctSound.play()
  } else {
    winOrLoseText.innerHTML = `
    You're wrong! ${personToCheck} is NOT the secret person.`
    wrongSound.play()
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)
