// All the DOM selectors stored as short variables
const startWindow = document.getElementById('startWindow')
const startButton = document.getElementById('startButton')
const gameWindow = document.getElementById('gameWindow')
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const gameTimer = document.getElementById('timer')
const totalGuesses = document.getElementById('totalGuesses')
const winOrLoseSection = document.getElementById('winOrLose')
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
    accessories: [],
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
    accessories: [],
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
    accessories: [],
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
let secret
let currentQuestion
let charactersInPlay
let numberOfGuesses
let elapsedTime

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

// Randomly select a person from the characters array 
// and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// const startTimer = () => {
//   let startTime = Date.now()
//   elapsedTime = 0
//   setInterval(() => {
//     elapsedTime = Math.floor((Date.now() - startTime) / 1000)
//     gameTimer.innerHTML = ` ${elapsedTime} s`
//   }, 1000)
// }

// This function starts and restarts the game
const start = () => {
  startWindow.style.display = 'none'
  gameWindow.style.display = 'flex'
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  // Render the board on the screen
  generateBoard()
  // Randomly select a secret person
  setSecret()
  // startTimer() - FIX THIS
  numberOfGuesses = 0
  // Console.log the secret person to see that it works correctly
  console.log(`The secret person is ${secret.name}`)
}

// setting the currentQuestion object when you select something in the dropdown

// The options collection returns a collection of all <option> elements in a drop-
// down list.
// The property selectedIndex return the index of the selected <option> element in
// the collection

// parentNode.label points to the label of the <optgroup> that the 
// <option> belongs to 

const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category, //hair, eyes, ARRAYS: accessories, other
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Keeps track of how many questions the user has asked
  numberOfGuesses++

  totalGuesses.innerHTML = `${numberOfGuesses}`
  // Compare the currentQuestion details with the secret person details in a
  // different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}

// This function filters the characters array and redraws the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      console.log(charactersInPlay);
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'other') {
    
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}s`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  
  // For the hair and eyes categorys that are not arrays
  } else {

    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people that have ${value} ${category}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people that have ${value} ${category}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  // CHECKS THE LENGTH OF THE CHARACTERSINPLAY - TO BE REMOVED
  console.log(`Characters in play: ${charactersInPlay.length}`)

  // Generate the updated board with the remaining characters
  generateBoard();

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  let text = `So your guess is ${personToConfirm}?`

  if (confirm(text) == true) {
    checkMyGuess(personToConfirm)
  } else {
    console.log("Cancel") //Change this one to an alert()?
  }

}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  let message;
  if (personToCheck === secret.name) {
    //alert('Correct!')
    message = `You won! The secret person was ${secret.name}.`
  } else {
    //alert('Nooooo!')
    message = `You lost! The secret person was ${secret.name}.`
  }
  // Show the win-or-lose-section with the message above
  winOrLoseSection.style.display = 'flex';
  winOrLoseText.innerHTML = message;
  
}


window.onload = () => {
  startWindow.style.display = 'flex'
  gameWindow.style.display = 'none'
}

// Invokes the start function when website is loaded
// start()

// All the event listeners
startButton.addEventListener('click', start)
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => {
  winOrLoseSection.style.display = 'none'
  start()
})
