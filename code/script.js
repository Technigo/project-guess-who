// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartBtn = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgainBtn = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')
const guessCounter = document.getElementById('guessCounter')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Adam',
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
    name: 'Michelle',
    img: 'images/jolee.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Gregory',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Paul',
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
    name: 'Sarah',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Louis',
    img: 'images/jia.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Matt',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Tori',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaz',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'John',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Robert',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Zoe',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jen',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Joe',
    img: 'images/joe.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Patricia',
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
    name: 'Michael',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Thomas',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Elizabeth',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Charles',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Joseph',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Lisa',
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
  //The first thing that happens when you load the website is that the game board should be rendered on the screen
  generateBoard()
  //Make sure to set a secret person when the game starts.
  setSecret()
  // What else should happen when we start the game?
  selectQuestion()
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  // This changes the value of currentQuestion object
  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
let count = 0
const checkQuestion = () => {
  count++

  guessCounter.innerHTML=''
  guessCounter.innerHTML += `GUESS COUNTER: ${count}`
  
  const { category, value } = currentQuestion
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }

  } else if (category  === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true);
      } else {
        filterCharacters(false);
      }
  }
}

// Function to filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
    alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`)
    } else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`)
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
    }
  } else {
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all that are ${value}s`)
    } else {
      alert(`No, the person isn't a ${value}! Remove all that aren't ${value}s`)
    }
  }

  // filter to keep or remove based on the keep variable, goes for all categories.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  } else {
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (theGuess) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  const playersGuess = confirm(`So you're guessing on ${theGuess} - are you sure?`);
  // If the player wants to guess, invoke the checkMyGuess function.
  if (playersGuess) {
    checkMyGuess(theGuess)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (theGuess) => {
 // Show the win or lose section
 winOrLose.style.display = 'flex';
 // Hide the game board
 board.style.display = 'none';
 // Check if the personToCheck is the same as the secret person's name
 if (theGuess === secret.name) {
  console.log('you win')
  // Set a Message to show in the win or lose section accordingly
  winOrLoseText.innerHTML = `
  We got a winner!🥳<br>
  One more round?
  `
 } else {
  console.log('you loose')
  winOrLoseText.innerHTML = `
  Oh no, that isn't correct 😔<br>
  The secret person was ${secret.name}..<br>
  Do you wanna try again? 😃
  `
 }

}
// Makes the guess counter reset
const playAgain = () => {
  start();
  count = 0;
  guessCounter.innerHTML=''
  guessCounter.innerHTML += `GUESS COUNTER: ${count}`
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartBtn.addEventListener('click', start);
// When selecting a question, invoke the selectQuestion
questions.addEventListener('change', selectQuestion);
// When clicking on the 'Find out' button, invoke the checkQuestion 
findOutBtn.addEventListener('click', checkQuestion);
// When clicking on the 'Play Again' button, restart the game
playAgainBtn.addEventListener('click', playAgain)
