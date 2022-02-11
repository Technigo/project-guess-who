// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const guessCounter = document.getElementById('guessCounter')

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
  console.log('secret person selected')
  console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
  console.log('start funktion is called!')
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  // set the secret person -> invoke set Secret funktion
  setSecret()
  //show the board on the screen -> invoking generateboard funktion. 
  generateBoard()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label  
  const value = questions.options[questions.selectedIndex].value
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  
  currentQuestion = {
    category: category,
    value: value,
  }
  console.log('question asked', currentQuestion)
}

// This function should be invoked when you click on 'Find Out' button.
let count = 0
const checkQuestion = () => {
  count+= 1
  guessCounter.innerHTML = " "
  guessCounter.innerHTML += `<p> Guesses made: ${count}</p>`

  const { category, value } = currentQuestion
  console.log('Let´s findout!')
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  // check if secret person.hair===va (step2-3)

  if (category === 'hair' || category === 'eyes') {
    if(value === secret.hair || value === secret.eyes){
      keep = true
      filterCharacters(keep)
    }
    else{
      keep = false
      filterCharacters()
    }
  } else if (category === 'accessories' || category === 'other') {
      if (secret.accessories.includes(value) || secret.other.includes(value)){
      keep = true
      filterCharacters(keep)
    }
    else{
      keep = false
      filterCharacters()
    }
  }
  console.log('Hang in there, checking your questions')
}

// It'll filter the characters array and redraw the game board.
// Show the correct alert message for different categories
// Determine what is the category
// filter by category to keep or remove based on the keep variable.

const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person['accessories'].includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person['accessories'].includes(value))
    }
  } 
  else if (category === 'other') {
    if (keep){
      alert(`Yes, the person have ${value}! Keep all people that has ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person['other'].includes(value))
    } else {
      alert (` No, the person is not a ${value}! Remove all people who is a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person['other'].includes(value))
    }
  } 
  else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people with ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] === value)
    } else {
      alert(`No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] !== value)
    }
  }
  //if (category === 'hair')
  else {
    if (keep){
      alert(`Yes, the person has ${value} hair! Keep all people with ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] === value)
    } else {
      alert (`No, the person doesnt have ${value} hair! Remove all people with ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] !== value)
    }
   }

   // sätta tillbaka gissningsinex till 0
   // Invoke a function to redraw the board with the remaining people.
   generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let playerGuess = confirm (`Do you want to make a guess on ${personToConfirm}?`)
  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuess === true){
    checkMyGuess(personToConfirm)
    console.log('a guess is made')
  }else {
    alert('Okey, lets keep guessing')
    console.log('No guess made, keep playing')
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToConfirm === secret.name) {
    // 2. Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerHTML = `Great job! You guessed on ${personToConfirm} an it was the right answer.`
  } else {
    winOrLoseText.innerHTML = `Better luck next time! You guessed on ${personToConfirm} but the correct answer is ${secret.name}.`
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'
  
}

// Invokes the start function when website is loaded
start()

//restart game
const newGame = () =>{
winOrLose.style.display = 'none'
board.style.display = 'flex'
start()
}

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', newGame)

