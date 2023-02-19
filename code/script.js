// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton= document.getElementById('filter')
const winnerLooser= document.getElementById('winOrLose')
const winnerLooserText = document.getElementById ('winOrLoseText')
const whoCharacterIs = document.getElementById('revealCharacterText')
const playAgain = document.getElementById('playAgain')
const guessCounter=document.getElementById('guesses')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Amabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['scarf']
  },
  {
    name: 'Bob',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['pet' , 'facial'],
  },
  {
    name: 'Charles',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'facial']
  },
  {
    name: 'Dave',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Eric',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Frank',
    img: 'images/james.svg',
    hair: ['brown'],
    eyes: 'green',
    accessories: ['glasses'],
    other: ['facial']
  },
  {
    name: 'Gertrude',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'jewelry'],
    other: []
  },
  {
    name: 'Hannah',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: 'glasses',
    other: []
  },
  {
    name: 'Iris',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewelry'],
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
    name: 'Konrad',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['smoker', 'facial'],
  },
  {
    name: 'Lauren',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Matt',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'facial']
  },
  {
    name: 'Nina',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Olivia',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Peter',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Quinn',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Roselyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'jewelry'],
    other: []
  },
  {
    name: 'Scott',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Terrence',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewelry'],
    other: []
  },
  {
    name: 'Uma',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: []
  },
  {
    name: 'Vince',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'William',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['facial']
  },
  {
    name: 'Xelda',
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
let guesses

//Audio
let winnerSound = new Audio('sounds/winnerSound.mp3')
let losingSound = new Audio('sounds/losingSound.mp3')


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

//Start and restart game
const play = () => {
  board.style.display ='flex'
  winnerLooser.style.display = 'none'
  guesses = 0
  guessCounter.innerHTML = guesses
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
}

//Random selection of a character
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

const selectQuestion = () => {  
 
  const category = questions.options[questions.selectedIndex].parentNode.label // Storing what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const {category, value} = currentQuestion
  // Compares the currentQuestion details with the secret person details + invoking filterCharacters-function
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters()
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters()
    }
  }
}

// Filter out characters via keep/ or not.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message depending on what we´re filtering out
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the character is looking fabulous in ${value}! Confirm to keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, this character can't pull of ${value}! Remove everyone wearing ${value}!`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes some ${value}s coming up! No need to see the other ones!`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`Nope, no ${value}s here! Get rid of them!`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else {
    if (keep) {
      alert(`Yay, this character has beautiful ${value} ${category}. Sort out the other ones that don't!`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`Nope this character doesn't have ${value} ${category}! Sort out all the characters that do!`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  //Adding a guess for each time player makes a guess 
  guesses++
  //Showing player the counter
  guessCounter.innerHTML = guesses
  //New board with the characters still left on the board
  questions.selectedIndex = null
  generateBoard()
}


//Player have to confirm guess
const guess = (confirmGuess) => {
  let sendGuess = confirm (`Are you really really REALLY sure you want to set you guess to ${confirmGuess}?`)

  if (sendGuess) {
    checkTheGuess(confirmGuess)
  }
}
//Confirming the guess will trigger the winning or losing message
const checkTheGuess = (personToConfirm) => {
  if (personToConfirm === secret.name) {
    winnerLooserText.innerHTML = `
    <div>CONGRATULATIONS <br> - you did <span role="img"></span> </div>`

    whoCharacterIs.innerHTML = `Who? was indeed <br> 
         <div class="winLooseCard">
         <p>${secret.name}</p>
         <img src=${secret.img} alt=${secret.name}>
       </div>` 
    winnerSound.play()
  } else {
    winnerLooserText.innerHTML = `
    <div> Oh sorry! You didn't <br> <span role="img"></span>`

    whoCharacterIs.innerHTML = `Who? was actually <br> 
         <div class="winLooseCard">
         <p>${secret.name}</p>
         <img src=${secret.img} alt=${secret.name}>
       </div>` 
    losingSound.play()
  }
  winnerLooser.style.display = 'flex'
  board.style.display = 'none'
}

//Starts game when whole script is loaded
play ()

// // // All the event listeners
questions.addEventListener('change', selectQuestion)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
restartButton.addEventListener('click', play)
playAgain.addEventListener ('click', play)
