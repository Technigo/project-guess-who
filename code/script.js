// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')



// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Boo',
    img: 'images/boo.png',
    hair: '',
    eyes: 'black',
    accessories:[],
    headgear: [],
    clothes: [],
    shoes: ['barefoot'],
  },
  {
    name: 'Luigi',
    img: 'images/luigi.png',
    hair: 'brown hair',
    eyes: 'blue',
    accessories:['gloves', 'mustache'],
    headgear: ['hat'],
    clothes: ['green'],
    shoes: ['brown'],
  },
  {
    name: 'Mario',
    img: 'images/mario.png',
    hair: 'brown',
    eyes: 'blue',
    accessories:['gloves', 'mustache'],
    headgear: ['hat'],
    clothes: ['red'],
    shoes: ['brown'],
  },
  {
    name: 'Princess Peach',
    img: 'images/princesspeach.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories:['gloves', 'earrings'],
    headgear: ['crown'],
    clothes: ['pink'],
    shoes: [],
  },
  {
    name: 'toad',
    img: 'images/toad.png',
    hair: '',
    eyes: 'black',
    accessories:[],
    headgear: ['mushroom'],
    clothes: ['blue'],
    shoes: ['barefoot'],
  },
  {
    name: 'Yoshi',
    img: 'images/yoshi.png',
    hair: '',
    eyes: 'black',
    accessories: [],
    headgear: [],
    clothes: [],
    shoes: ['yellow'],
  },
  {
    name: 'Daisy',
    img: 'images/daisy.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['gloves', 'earrings'],
    headgear: ['crown'],
    clothes: ['yellow'],
    shoes: [],
  },
  {
    name: 'Bowser Jr',
    img: 'images/bowser-jr.png',
    hair: 'orange',
    eyes: 'black',
    accessories: ['bracelet', 'bib'],
    headgear: [],
    clothes: [],
    shoes: ['barefoot'],
  },
  {
    name: 'Chief Chilly',
    img: 'images/ChiefChilly.png',
    hair: '',
    eyes: 'blue',
    accessories: [],
    headgear: ['crown'],
    clothes: [],
    shoes: ['green'],
  },

  {
    name: 'Waluigi',
    img: 'images/waluigi.png',
    hair: 'brown',
    eyes: 'black',
    accessories: ['gloves', 'mustache'],
    headgear: ['hat'],
    clothes: ['purple'],
    shoes: ['yellow'],
  },
  {
    name: 'Toadette',
    img: 'images/toadette.png',
    hair: '',
    eyes: 'black',
    accessories: [],
    headgear: ['mushroom'],
    clothes: ['pink'],
    shoes: ['brown'],
  },
  {
    name: 'Diddy Kong',
    img: 'images/diddy-kong.png',
    hair: 'brown',
    eyes: 'black',
    accessories: [],
    headgear: ['hat'],
    clothes: ['red'],
    shoes: ['barefoot'],
  },
  {
    name: 'Star Luma',
    img: 'images/starluma.png',
    hair: '',
    eyes: 'black',
    accessories: [],
    headgear: [],
    clothes: [],
    shoes: ['barefoot'],
  },
  {
    name: 'Wario',
    img: 'images/wario.png',
    hair: 'brown',
    eyes: 'black',
    accessories: ['gloves', 'mustache'],
    headgear: ['hat'],
    clothes: ['yellow'],
    shoes: ['green'],
  },
  {
    name: 'Bowser',
    img: 'images/bowser.png',
    hair: 'orange',
    eyes: 'red',
    accessories: ['bracelet'],
    headgear: [],
    clothes: [],
    shoes: ['barefoot'],
  },
  {
    name: 'Kamek',
    img: 'images/kamek.png',
    hair: '',
    eyes: 'hidden',
    accessories: ['glasses'],
    headgear: ['hat'],
    clothes: ['blue'],
    shoes: ['brown'],
  },
  {
    name: 'Birdo',
    img: 'images/birdo.png',
    hair: '',
    eyes: 'black',
    accessories: [],
    headgear: ['bow'],
    clothes: [],
    shoes: ['barefoot'],
  },
  {
    name: 'Rosalina',
    img: 'images/rosalina.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: [],
    headgear: ['crown'],
    clothes: ['blue'],
    shoes: [],
  },
  {
    name: 'Donkey Kong',
    img: 'images/donkey-kong.png',
    hair: 'brown',
    eyes: 'black',
    accessories: ['tie'],
    headgear: [],
    clothes: [],
    shoes: ['barefoot'],
  },
  {
    name: 'Antasma',
    img: 'images/antasma.png',
    hair: '',
    eyes: 'hidden',
    accessories: ['glasses', 'gloves'],
    headgear: [],
    clothes: ['purple'],
    shoes: ['barefoot'],
  },
  {
    name: 'Tiny Kong',
    img: 'images/tinykong.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: [],
    headgear: [],
    clothes: ['blue'],
    shoes: ['white'],
  },
  {
    name: 'King Bob Omb',
    img: 'images/kingbobomb.png',
    hair: '',
    eyes: 'white',
    accessories: ['gloves', 'mustache'],
    headgear: ['crown'],
    clothes: [],
    shoes: ['yellow'],
  },
  {
    name: 'Shy Guy',
    img: 'images/shyguy.png',
    hair: '',
    eyes: 'hidden',
    accessories: ['facemask'],
    headgear: [],
    clothes: ['red'],
    shoes: ['blue'],
  },
  {
    name: 'Dark Bowser',
    img: 'images/darkbowser.png',
    hair: 'black',
    eyes: 'red',
    accessories: ['bracelet'],
    headgear: [],
    clothes: [],
    shoes: ['barefoot'],
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

// Game board
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

//Startpage & startbutton
startBtn.onclick = () => {
  startPage.style.display = "none"
  setTimeout(start, 500)
}

//Start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS     // Here we're setting charactersInPlay array to be all the characters to start with
  generateBoard()                   // Continue to const setSecret
  setSecret()                       // Continue to const generateBoard
    if (winOrLose.style.display === 'block') {
      winOrLose.style.display = 'none'  // Makes play again work
      winOrLoseAudio.innerHTML = ''
                                      // board.style.display = 'flex'
    } else {
      winOrLose.style.display = 'none'     
                                      // board.style.display = 'flex'
    }  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value // Variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value
  }
  console.log ('Question selected', currentQuestion)
}


// This function should be invoked when you click on 'Find Out' button.
//Check if secret array of values includes selected value (returns true/false) and invoke filterCharacters
const checkQuestion = () => {
  const { category, value } = currentQuestion;
    if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      filterCharacters(true)  //invoke filterCharacters
    } else {
      filterCharacters(false)
    }
  
  } else if (category === 'accessories' || category === 'headgear' || category === 'clothes' || category === 'shoes') {
    if ( secret.accessories.includes(value) || secret.headgear.includes(value) || secret.clothes.includes(value) || secret.shoes.includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person have ${value}! Keep all people that have ${value}`
      )
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value} hair`
      )
    }
  } 
  if (category === 'accessories' || category === 'headgear' || category === 'clothes' || category === 'shoes') {
    if (keep) {
      alert(
        `Yes, the person have ${value}! Keep all people that have ${value}`
      )
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value}`
      )
    }
  }

  if (category === 'hair' || category === 'eyes') {
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
  generateBoard()
}

start()

const guess = (personToConfirm) => {
  const madeGuess = confirm(`Are you brave enough to guess on ${personToConfirm}?`) // store the interaction from the player in a variable.
  console.log('Guess button is clicked')
 if (madeGuess) {
  checkMyGuess(personToConfirm)   // If the player wants to guess, invoke the checkMyGuess function
} else {
  alert('Chicken are we? Okay, guess again later')
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {                    // 1. Check if the personToCheck is the same as the secret person's name
    console.log('Win!')
    winOrLose.style.display = 'block',                    // 3. Show the win or lose section
    winOrLoseText.innerHTML = `You are the winner! ${secret.name} is correct!`      // 2. Set a Message to show in the win or lose section accordingly
    winOrLoseAudio.innerHTML = `<audio src="./sounds/short-choir-6116.mp3" type="audio/mp3" autoplay></audio>`     // Playing winning sound. 
    board.style.display = 'none'                          // 4. Hide the game board
  } else {
    console.log('You lost the game')
    winOrLose.style.display = 'block',
    winOrLoseText.innerHTML = `What a loser! The secret person was ${secret.name}.`
    winOrLoseAudio.innerHTML = `<audio src="./sounds/crash-glass-sound-effect-24-11503.mp3" type="audio/mp3" autoplay></audio>`
    board.style.display = 'none'
  }
}

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOut.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)
