// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const guessButton = document.querySelector('.filled-button small')
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
let personToConfirm

// Draws the game board
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

// This function randomly selects a person from the characters array and set as the value of the variable called secret = the who you guess on
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function is to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  //Sets the secret person and invokes setSecret function
  setSecret ()

  // shows the board on the screen and invokes the genererateBoard function
  generateBoard ()

}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group / category the question belongs to
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores the actual value of the question you selected within the category
  const value = questions.options[questions.selectedIndex].value
  

  currentQuestion = {
    category: category,
    value: value
  }
}


// This function is invoked when you click on 'Find Out' button
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compares the currentQuestion details with the secret person details based on category hair/eyes (string) or accessories/others (array)  
  // Create keep booleanvariable, is true for keeping and false for not keeping

  if (category === 'hair' || category === 'eyes') {
   if (secret[category] === value){
     let keep = true;   
  
  filterCharacters(keep)
   }
   else {
   keep = false;
   filterCharacters()  
   }

  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)){
      keep = true;
  filterCharacters(keep)
    } else {
      keep = false;
      filterCharacters()
    }
  }
}

// This function filters the characters array and redraws the game board with only the qualified cards left
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
    alert(
      `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) 
    } else {
      alert(
      `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
    } else if (category === 'other') {
    if (keep) {
     alert(
     `Yes the person is a ${value}! Keep all people that are a ${value}.`
     ) 
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) 
    } else {
     alert(
    `No, the person is not a ${value}! Remove all people that are a ${value}.`
    )
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
    
    } else if (category === 'hair') {  
    if (keep) {
     alert(
    `Yes, the person has ${value} hair! Keep all people with ${value} hair.`
    )
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value) 
    } else {
     alert(
    `No, the person doesn't have ${value} hair! Remove all people with ${value} hair.`
    )
    charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
    } else if (category === 'eyes') {
    if (keep) {
     alert(
     `Yes, the person has ${value} eyes! Keep all people with ${value} eyes.`
    )
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else { 
     alert(
     `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes.`
    )
    charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

// This function finally redraws the board with the remaining people
generateBoard()   
}

// when clicking guess, the eventlistener makes the confirm-popup appear to confirm that you want to make a guess, 
//and stores the guess from the player in the personToConfirm variable. Then CheckMyGuess is invoked.

const guess = (personToConfirm) => {
  const confirmOk = confirm(
    `Are you sure about this guess of ${personToConfirm}?`
  )

if (confirmOk) {  
checkMyGuess(personToConfirm)
}
}

// when you confirm, this function is invoked and depending on if your guess is right or wrong you are directed to win or lose page
const checkMyGuess = (personToConfirm) => {

if (personToConfirm === secret.name) {
  winOrLoseText.innerHTML+= "You won the game! 🕵️✨"
} else {
  winOrLoseText.innerHTML+= "You lost the game! ❌🙅"
}

//here we show the WinOrLose section and hide the game board
winOrLose.style.display = "block"
board.style.display = "none"
}

// this section is for clicking the restart button, not working unfortunately
playAgainButton.addEventListener = ('click', (start) => {
  board.style.display = "block"
  winOrLose.style.display = "none"
  console.log('yes i work')
  start()
  generateBoard()
  })
 

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
guessButton.addEventListener('click', confirm)