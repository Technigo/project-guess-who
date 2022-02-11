// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const boardWrapper = document.getElementById('boardWrapper')
const playAgain = document.getElementById('playAgain')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sun-glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat', 'eyepatch'],
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'beard']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['tie'],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['reading-glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['sun-glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sun-glasses', 'necklace'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sun-glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['reading-glasses', 'necklace', 'earrings'],
    other: []
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sun-glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['reading-glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['reading-glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['reading-glasses', 'hat'],
    other: ['smoker', 'beard', 'mustache']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'ring', 'phone'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['reading-glasses'],
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
    accessories: ['reading-glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['reading-glasses', 'earrings'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['reading-glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sun-glasses', 'hat', 'necklace'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
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
    accessories: ['tie'],
    other: ['beard', 'mustache']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['reading-glasses', 'hat'],
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

// Randomly select a person from the characters array and set as the value of the variable called secret.
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to START (and RESTART) the game.
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
  selectQuestion()
}

// Setting the currentQuestion object when you select something in the dropdown.
const selectQuestion = () => { 
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable above stores what option group (category) the question belongs to.
  
  // We also need a variable that stores the actual value of the question we've selected, see line below.
  const value = questions.options[questions.selectedIndex].value 

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  
  if (category === 'Hair' || category === 'Eyes') {
    keep = value === secret[category];
  } else if (category === 'Accessories' || category === 'Other') {
    keep = secret[category].includes(value);
  }
  //Then invoke filterCharacters:
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'Accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[Accessories].includes(value))
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}.`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[Accessories].includes(value))
      alert(`No, the person does not wear ${value}... Remove all people that wears ${value}.`)
    }

  } else if (category === 'Other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[Other].includes(value))
      alert(`Yes, the person has a ${value}! Keep all people that have ${value}.`)
    } else { 
      charactersInPlay = charactersInPlay.filter((person) => !person[Other].includes(value))
      alert(`No, the person does not have a ${value}... Remove all people that have a ${value}.`)
    }

  } else if (category === 'Hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Yes, the person has ${value} hair, YAY! Keep all people with ${value} hair.`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`Unfortunately, the person does not have ${value} hair. Remove all people with ${value} hair.`)
    }

  } else if (category === 'Eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Yes, the person has ${value} eyes, WIHO! Keep all people with ${value} eyes.`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`Sorry, the person does not have ${value} eyes. Remove all people with ${value} eyes.`)
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  let thePlayerGuess = confirm(`Would you like to guess on ${personToConfirm}?`)
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if (thePlayerGuess) {
    checkMyGuess(personToConfirm)
  } else {
    alert("Please make another guess!")
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
   // 2. Set a Message to show in the win or lose section accordingly
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `CONGRATS! ${secret.name} is the correct guess! Great job, well done!`
  } else {
    winOrLoseText.innerHTML = `I'm sorry, that was incorrect. The right answer is ${secret.name}`
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  boardWrapper.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)
