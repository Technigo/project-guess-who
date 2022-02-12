// All the DOM selectors stored as short variables
const startGame = document.querySelector('.start-game-wrapper')
const form = document.getElementById('form')
const nameInput = document.getElementById('name-input')
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const findOutBtn = document.getElementById('filter')
const counter = document.getElementById('counter') 
const restart = document.getElementById('restart')
const winOrLose = document.querySelector('.win-or-lose-wrapper')
const winOrLoseText = document.getElementById('winOrLoseText') 
const playAgain = document.getElementById('playAgain')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Alice',
    img: 'images/ALICE.jpg',
    hair: 'brown',
    pants: 'black',
    profession: 'unknown',
    headgear: '',
    sweater: ['blue'],
    face: ['glasses', 'lipstick'],
    accessories: ['dog', 'dogbone'],
  },
  {
    name: 'Bella',
    img: 'images/BELLA.jpg',
    hair: 'blonde',
    pants: 'striped',
    profession: 'villain',
    headgear: '',
    sweater: ['striped'],
    face: ['mask', 'scarf'],
    accessories: ['dog', 'dogbone'],
  },
  {
    name: 'Charlie',
    img: 'images/CHARLIE.jpg',
    hair: 'black',
    pants: 'striped',
    profession: 'villain',
    headgear: '',
    sweater: ['striped'],
    face: ['beard'],
    accessories: [],
  },
  {
    name: 'Daniel',
    img: 'images/DANIEL.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'unknown',
    headgear: '',
    sweater: ['white', 'yellow'],
    face: ['beard'],
    accessories: ['baby', 'babycarrier'],
  },
  {
    name: 'Emilio',
    img: 'images/EMILIO.jpg',
    hair: 'black',
    pants: 'black',
    profession: 'unknown',
    headgear: '',
    sweater: ['beige'],
    face: ['beard'],
    accessories: [],
  },
  {
    name: 'Frank',
    img: 'images/FRANK.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'villain',
    headgear: 'hat',
    sweater: ['striped', 'red'],
    face: ['beard', 'piratepatch'],
    accessories: ['binocular'],
  },
  {
    name: 'Hjalmar',
    img: 'images/HJALMAR.jpg',
    hair: 'unknown',
    pants: 'blue',
    profession: 'police',
    headgear: 'hat',
    sweater: ['blue'],
    face: ['glasses'],
    accessories: [],
  },
  {
    name: 'Holly',
    img: 'images/HOLLY.jpg',
    hair: 'red',
    pants: 'blue',
    profession: 'unknown',
    headgear: '',
    sweater: ['green'],
    face: ['lipstick'],
    accessories: ['skateboard'],
  },
  {
    name: 'Isak',
    img: 'images/ISAK.jpg',
    hair: 'blonde',
    pants: 'black',
    profession: 'musician',
    headgear: 'bandana',
    sweater: ['green', 'white'],
    face: ['beard'],
    accessories: ['guitar'],
  },
  {
    name: 'Jimmy',
    img: 'images/JIMMY.jpg',
    hair: 'unknown',
    pants: 'blue',
    profession: 'builder',
    headgear: 'helmet',
    sweater: ['orange', 'blue'],
    face: ['beard', 'dirt'],
    accessories: [],
  },
  {
    name: 'Liam',
    img: 'images/LIAM.jpg',
    hair: 'unknown',
    pants: 'blue',
    profession: 'farmer',
    headgear: 'hat',
    sweater: ['red', 'green'],
    face: ['glasses'],
    accessories: [],
  },
  {
    name: 'Lova',
    img: 'images/LOVA.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'driver',
    headgear: 'helmet',
    sweater: ['red', 'white'],
    face: ['lipstick'],
    accessories: [],
  },
  {
    name: 'Melker',
    img: 'images/MELKER.jpg',
    hair: 'blonde',
    pants: 'white',
    profession: 'unknown',
    headgear: '',
    sweater: ['red'],
    face: [],
    accessories: ['dog', 'hotdog'],
  },
  {
    name: 'Neville',
    img: 'images/NEVILLE.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'scientist',
    headgear: 'hat',
    sweater: ['white'],
    face: ['beard'],
    accessories: [],
  },
  {
    name: 'Nils',
    img: 'images/NILS.jpg',
    hair: 'brown',
    pants: 'gray',
    profession: 'villain',
    headgear: '',
    sweater: ['striped', 'red'],
    face: ['mask'],
    accessories: [],
  },
  {
    name: 'Olivia',
    img: 'images/OLIVIA.jpg',
    hair: 'brown',
    pants: 'blue',
    profession: 'police',
    headgear: 'hat',
    sweater: ['blue'],
    face: ['glasses'],
    accessories: ['handcuffs'],
  },
  {
    name: 'Patrik',
    img: 'images/PATRIK.jpg',
    hair: 'black',
    pants: 'black',
    profession: 'chef',
    headgear: '',
    sweater: ['white'],
    face: ['beard'],
    accessories: [],
  },
  {
    name: 'Sam',
    img: 'images/SAM.jpg',
    hair: 'brown',
    pants: 'red',
    profession: 'carpenter',
    headgear: '',
    sweater: ['red'],
    face: ['freckles'],
    accessories: ['wrench'],
  },
  {
    name: 'Theo',
    img: 'images/THEO.jpg',
    hair: 'black',
    pants: 'blue',
    profession: 'unknown',
    headgear: '',
    sweater: ['gray', 'red'],
    face: ['glasses'],
    accessories: ['dog', 'dogbone'],
  },
  {
    name: 'Tobias',
    img: 'images/TOBIAS.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'unknown',
    headgear: 'hat',
    sweater: ['green', 'white'],
    face: ['whiskers'],
    accessories: ['hotdog'],
  },
  {
    name: 'Tomten',
    img: 'images/TOMTEN.jpg',
    hair: 'unknown',
    pants: 'red',
    profession: 'santa',
    headgear: 'hat',
    sweater: ['red'],
    face: ['beard'],
    accessories: ['teddybear'],
  },
  {
    name: 'Valter',
    img: 'images/VALTER.jpg',
    hair: 'gray',
    pants: 'white',
    profession: 'unknown',
    headgear: '',
    sweater: ['blue', 'white'],
    face: ['beard'],
    accessories: ['surfboard'],
  },
  {
    name: 'Viking',
    img: 'images/VIKING.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'unknown',
    headgear: 'helmet',
    sweater: ['gray'],
    face: ['beard'],
    accessories: ['bike'],
  },
  {
    name: 'Wilhelm',
    img: 'images/WILHELM.jpg',
    hair: 'black',
    pants: 'black',
    profession: 'unknown',
    headgear: '',
    sweater: ['gray', 'black'],
    face: ['glasses'],
    accessories: [],
  },
]

// Global variables
let playerName 
let secret
let currentQuestion
let charactersInPlay
let charactersToFlip
let incrementOne = 0 //this variable is used to increment counter with one.


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

// Function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  //Reset the counter
  incrementOne = 0
  counter.innerText = incrementOne
}

// setting the currentQuestion object when something is selected in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
  const text = questions.options[questions.selectedIndex].text
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  
  currentQuestion = {
    category: category, 
    value: value,
    text: text,
  }
}

// When another selection is selected in the list, a new key value pair will be saved to currentQuestion.
questions.addEventListener('change', () => {
  selectQuestion()
})

// CheckQuestion compare currentQuestion (our guess) with the details of the secret person.
// If secret has what was guessed/selected, we keep people that have that detail by passing keep to filterfuntion.
// If secret has not what was guessed/selected, we remove people that does not have the detail in filterfunction. 
const checkQuestion = () => {
  const { category, value } = currentQuestion

  //Use an else-if statement for categorys where the value is a string.
  if (category === 'hair' || category === 'headgear') {
    //check if secret array of values includes selected value (returns true/false) and invoke filterCharacters
    if (value === secret.hair || value === secret.headgear) {
      filterCharacters(value)
    } else {
      filterCharacters()
    }
  } else if (category === 'pants' || category === 'profession') {
      if (value === secret.pants || value === secret.profession) {
        filterCharacters(value)
      } else {
        filterCharacters()
      }

  //Use an else-if statement for categorys where the value is an array.
  } else if (category === 'sweater' || category === 'face' || category === 'accessories') {
    //check if secret array of values includes selected value (returns true/false) and invoke filterCharacters
      if ((secret.sweater).includes(value)) {
        filterCharacters(value)
      } else if ((secret.face).includes(value)) {
        filterCharacters(value)
      } else if ((secret.accessories).includes(value)) {
        filterCharacters(value)
      } else {
        filterCharacters()
      }
  }
}

// The function filterCharacters filter the characters array with objects and redraw the game board.
const filterCharacters = (keep) => {
  //Save current guess to compare what should be kept for different categories.
  const { category, value, text } = currentQuestion
  
  // Show the correct alert message for different categories.
  if (category === 'sweater') {
    if (keep) {
      alert(
        `Yes, the person wears ${text}! Keep all people that wears ${text}.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${text}! Remove all people that wears ${text}.`
      )
    }

  } else if (category === 'face') {
    if (keep) {
      alert(
        `Yes, the person has ${text}! Keep all people who have ${text}.`
      )
    } else {
       alert(
         `No, the person doesn't have ${text}! Remove all people who have ${text}.`
      )
    } 

  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person has ${text}! Keep all people who have ${text}.`
      )
    } else {
      alert(
        `No, the person doesn't have ${text}! Remove all people who have ${text}.`
      )
    }
    
  } else {
    if (keep) {
      alert(`Yes, the person has ${text}! Keep all people with ${text}.`)
    } else {
      alert(`No, the person doesn't have ${text}! Remove all people with ${text}.`)
    }
  }

  // Filter by category to keep or remove based on the argument passed from previous function.
  // If statement for when the selected value is a string
  if (category === 'hair' || category === 'pants' || category === 'profession' || category === 'headgear') {
    if (keep) {  
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  
  // else statement for accessories, sweater and face we need to check if the value is included in an array.
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(`So, you want to make a guess?`)
  // If the player wants to guess, invoke the checkMyGuess function.
  if (confirmGuess) {
    checkMyGuess(personToConfirm)
  } 
}

// If you confirm, this function is invoked
// 3. Show the win or lose section
// 4. Hide the game board
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    // 2. Set a Message to show in the win or lose section accordingly
    winOrLose.style.display = 'flex';
    winOrLoseText.innerText = 'Yay, you won! Play again?'
    new Audio('./audio/Winning-game-sound-effect.mp3').play()
  } else {
    winOrLose.style.display = 'flex';
    winOrLoseText.innerText = `Oh, I´m sorry but it is not ${personToCheck}. It was ${secret.name} all the time.. Better luck next time!Play again?`
    new Audio('./audio/Aww-sound-effect.mp3').play()
  }
}

// Invokes the start function when website is loaded
start()

//*** All the event listeners **//
form.addEventListener('submit', e => {
  e.preventDefault()

  //Save name input
  playerName = nameInput.value

  startGame.innerHTML = `
  <div class="win-or-lose-start">
    <img
      class="guess-who-icon"
      src="images/guess-who-bubble.svg"
      alt="Guess Who"
    />
      <h1>Okay ${playerName}, let´s start the game!</h1>
      <button id="start-button" class="outlined-button">Start game</button>
  </div>
  `
  document.getElementById('start-button').addEventListener('click', () => {
    startGame.style.display = 'none'
    new Audio('./audio/intro.wav').play()
  })
})

//click find out btn to start guessing and call the checkQuestion and add attempt to counter 
findOutBtn.addEventListener('click', () => {
  checkQuestion()
  incrementOne++
  counter.innerText = incrementOne
})

//click start game btn to restart the game during playing
restart.addEventListener('click', () => {
  start()
  new Audio('./audio/intro.wav').play()
})

//click play again btn to play again when game is over
playAgain.addEventListener('click', () => {
  start()
  winOrLose.style.display = 'none'
  incrementOne = 0
  counter.innerText = 0
})