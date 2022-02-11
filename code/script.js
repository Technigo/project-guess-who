// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findoutButton = document.getElementById('filter')
const playAgainbutton = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLoseWrapper = document.getElementById('winOrLose') 
const guessCounterDiv = document.getElementById('guessCounter')
// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'a hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat'],
    other: ['bearded']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['a hat'],
    other: ['smoking', 'bearded']
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
    accessories: ['glasses', 'jewellery'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoking']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'a hat'],
    other: ['smoking']
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
    accessories: ['glasses', 'a hat'],
    other: ['smoking', 'bearded']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a hat', 'jewellery'],
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
    accessories: ['a hat'],
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
    accessories: ['glasses', 'jewellery'],
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
    accessories: ['glasses', 'a hat', 'jewellery'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewellery'],
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
    other: ['bearded']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'a hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let guessCounter = 0

//GuessCounter that updates the number of guesses
const updateGuesses = () => {
  guessCounter++;
  guessCounterDiv.innerHTML = `Guesses made: ${guessCounter}`
}

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
  console.log('testet')
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
}

const resetForStart = () => {
guessCounter = 0;
  guessCounterDiv.innerHTML = `Guesses made: ${guessCounter}`
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  console.log('test1')
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value
  } 
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  updateGuesses() //updates the number of guesses
  const { category, value } = currentQuestion
  console.log('test2')
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  //check if secretperson.hair(?) is same as currentquestion value-ish (remember keep or not to filter later)/T
  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      filterCharacters(true)
  } else { 
    filterCharacters()
  }

  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    } else if (filterCharacters()) {
    } 
  } console.log('checkar question')
}
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  console.log('filter function')
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
        alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person doesn't wear ${value}! All people wearing ${value} are removed.`
      )
    }
  } else if (category === 'other') {
    // added by me
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes, the person is ${value}! Keep all people that are ${value}.`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person isn´t ${value}! Remove all people that are ${value}.`
      )
    }
    //stop added by me
    
  } else if (category === 'eyes') {
    // added by me
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Yes, the person has ${value} eyes! All people that has ${value} eyes stays in the game!`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, the person doesn't have ${value} eyes! People with ${value} eyes is leaving the game.`
      )
    }
    //stop added by me
  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Yes, the persons hair is ${value}! All people that has ${value} hair are still in the game!`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert( 
      `No, the persons hair isn´t ${value}! All people with ${value} hair are removed.`
      )
    } 
    
  }  
  generateBoard()
 
  console.log('filtered characters')
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
  const confirmed = confirm(`So you think it´s ${personToConfirm}? Is this your final answer?`) // remember the confirm() ?
// store the interaction from the player in a variable.
if (confirmed) {
  checkMyGuess(personToConfirm)
} 
}

// If you confirm, this function is invoked //make the 
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {// 1. Check if the personToCheck is the same as the secret person's name
    winOrLoseText.innerHTML = 'Yes!! You won!'
  } else {
    winOrLoseText.innerHTML = 'Oh no! You lost the game!' // 2. Set a Message to show in the win or lose section accordingly
  }
  winOrLoseWrapper.style.display = 'flex' // 3. Show the win or lose section
  board.style.display = 'none'  // 4. Hide the game board

  playAgainbutton.addEventListener('click', ()=>{
    location.reload()})
  console.log('end of checkmygyess')
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findoutButton.addEventListener('click', checkQuestion)
playAgainbutton.addEventListener('click', start)