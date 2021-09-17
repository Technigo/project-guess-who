// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById('playAgain')
const findOutButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLoseSection = document.getElementById('winOrLose')
const modal = document.getElementById('myModal')
const modalText = document.getElementById('modal-text')
const span = document.getElementsByClassName('close')


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
  console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  charactersInPlay = CHARACTERS // Here we're setting charactersInPlay array to be all the characters to start with
  generateBoard()
  setSecret() 
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = { // currentQuestion object created, before it was just a variable that we declared
    category: category,
    value: value,
  }

console.log(currentQuestion);
}

// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
const checkQuestion = () => {
  const { category, value } = currentQuestion
  console.log(category)
  console.log(value)
  // let keep = false
  
  // See if we should keep or remove people based on that
//   if (category === 'hair' || category === 'eyes') {
//     keep = (value === secret[category])
//     console.log(keep)

//   } else if (category === 'accessories' || category === 'other') {
//     keep = secret[category].includes(value)
//   }

//   filterCharacters(keep)
// }

    if (category === 'hair' || category === 'eyes') {
      if (category === 'hair') {
        if (secret[category] === value) {
          filterCharacters(true)
        } 
        else {
          filterCharacters(false)
        }
      }  
      else {
        if (category === 'eyes') {
          if (secret[category] === value)
          filterCharacters(true)
        } 
        else {
          filterCharacters(false)
        }
      }
    } else if (category === 'accessories' || category === 'other') {
    
      if (category === 'accessories') {
        if (secret[category] === value) {
          filterCharacters(true)
        }
        else {
          filterCharacters(false)
        }
      }  
        else {
          if (category === 'other') {
            if (secret[category] === value) {
              filterCharacters(true)
            }
            else {
              filterCharacters(false)
            }
          }   
        }
      }
}        


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
// const modalWindow = (category, value, keep) => {
  if (category === 'hair') {
    if(keep) {
      console.log('hej')
      modal.style.display = 'block' //modal window shown
      modalText.innerHTML = `
      Yes, the person has ${value} ${category}!`
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)

    } else {
      modal.style.display = 'block'
      modalText.innerHTML = `
      No, the person doesn't have ${value} ${category}!`
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }

  } else if (category === 'eyes') {
    if (keep) {
      modal.style.display = 'block'
      modalText.innerHTML = `
      Yes, the person has ${value} ${category}!`
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    
    } else {
      modal.style.display = 'block'
      modalText.innerHTML = `
      No, the person doesn't have ${value} ${category}!`
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value) 
    }

  } if (category === 'accessories') {
    if (keep) {
      modal.style.display = 'block'
      modalText.innerHTML = `
      Yes, the person wears ${value}!`
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    
    } else {
      modal.style.display = 'block'
      modalText.innerHTML = `
      No, the person doesn't wear ${value}!`
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      modal.style.display = 'block'
      modalText.innerHTML = `
      Yes, the person has ${value}!`
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    
    } else {
      modal.style.display = 'block'
      modalText.innerHTML = `
      No, the person doesn't have ${value}!`
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }  

  // When the user clicks on close (x), the modal will close
  span.onclick = function() {
   modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  setTimeout(() => generateBoard(), 500);      
} 
// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let guessedPerson = personToConfirm   // store the interaction from the player in a variable.
  console.log(guessedPerson)
  // remember the confirm() ?
  let letsGuess = confirm(`You want to guess on ${personToConfirm}?`)
  if(letsGuess) { //invoke the checkMyGuess function.
    checkMyGuess(guessedPerson)
  } 
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {   // 1. Check if the personToCheck is the same as the secret person's name
  if ( personToCheck === secret.name ) {
    console.log('correct')
    winOrLoseText.innerHTML = `
    Yay, you guessed on the right person!`
    board.style.display = 'none'
    winOrLose.style.display = 'flex'
  } else {
    console.log('correct')
    winOrLoseText.innerHTML = `
    Game Over, you guessed on the wrong person! `
    board.style.display = 'none'
    winOrLose.style.display = 'flex'
  }
} 

  // 4. Hide the game board


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
playAgainButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
