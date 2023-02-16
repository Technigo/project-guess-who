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
    name: 'Toad',
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

// Randomly select a person from the CHARACTERS array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

//Gametime button & startpage before enter the game page
startBtn.onclick = () => {
  startPage.style.display = "none"
  setTimeout(start, 500)
}

//Find out & Restart button that start and restart the game on 
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()                   
  setSecret()
    if (winOrLose.style.display === 'block') {
      winOrLose.style.display = 'none'  
      winOrLoseAudio.innerHTML = ''
    } else {
      winOrLose.style.display = 'none'     
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
  if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person have ${value} hair! Keep all people that have ${value} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`
      )
    }
  } if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person have ${value} eyes! Keep all people that have ${value} eyes`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`
      )
    }
  } 
  if (category === 'accessories' || category === 'headgear' || category === 'clothes') {
    if (keep) {
      alert(
        `Yes, the person wear ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      )
    }
  } if (category === 'shoes') {
    if (keep) {
      alert(
        `Yes, the person wear ${value} shoes! Keep all people that wears ${value} shoes`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value} shoes! Remove all people that wears ${value} shoes`
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


// This function happens when user want to make a guess
// If the player wants to guess, invoke the checkMyGuess function
const guess = (personToConfirm) => {
  const madeGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`) 
 if (madeGuess) {
  checkMyGuess(personToConfirm)   
}
}

// If you confirm, this function is invoked

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {                                              // 1. Check if the personToCheck is the same as the secret person's name
    winOrLoseText.innerHTML = `You are the winner! ${secret.name} is correct!`      // 2. Set a Message to show in the win or lose section accordingly
    winOrLose.style.display = 'block',                                              // 3. Show the win or lose section
    winOrLoseAudio.innerHTML = `<audio src="./02" autoplay></audio>`     // Playing winning sound. 
    board.style.display = 'none'                                                    // 4. Hide the game board
  } else {
    winOrLose.style.display = 'block',
    winOrLoseText.innerHTML = `GAME OVER! The secret person was ${secret.name}. Try again`
    winOrLoseAudio.innerHTML = `<audio src="fanfare.mp3" type="audio/mp3" autoplay></audio>`
    board.style.display = 'none'
  }
}

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOut.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)
