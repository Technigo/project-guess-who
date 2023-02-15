// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton= document.getElementById('filter')

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
    hair: ('hidden', 'facial'),
    eyes: 'blue',
    accessories: ['hat'],
    other: ['pet']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: ('grey', 'facial'),
    eyes: 'blue',
    accessories: ['hat'],
    other: 'smoker'
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
    hair: ('brown', 'facial'),
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'jewlery'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: 'glasses',
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewlery'],
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
    hair: ('brown', 'facial'),
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
    hair: ('orange', 'facial'),
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'jewlery'],
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
    accessories: ['glasses', 'jewlery'],
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
    accessories: ['glasses', 'hat', 'jewlery'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewlery'],
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
    hair: ('black', 'facial'),
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

//Kanske en startruta här? ---------------
// const beginGame = () => { 
//   board.innerHTML = `
//   <input id='playersNameInput'> Your name</input>
// `
// document.getElementById('playersNameInput')
//   const playersNameInput (event) => {
//     event.preventDefault()
//     showMessage(`Welcome ${playersNameInput.value} Let´s start a new game of Guess who?`)
//   }
//   //User types in Name and a massage is shown with the users name
//   const handleNameInput = (event) => {
//     event.preventDefault()
//     showMessage(nameInput.value, 'user')
  
//     // Save the username for later
//     username = nameInput.value 
//   //Empty input
//     nameInput.value = ''
// }
//----------------------------

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

//Random selection of a charatcer
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

//Player choosing a question
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value
  
  if (category === 'hair') {
    currentQuestion = {
      attribute: 'hair',
      value: value,
      category: category,
    }
  } else if (category === 'eyes') {
    currentQuestion = {
      attribute: 'eyes',
      value: value,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: 'accessories',
      value: value,
      category: category,
    }
  } else {
    currentQuestion = {
      attribute: value,
      value: value,
      category: category,
    }
  }
}

const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]
  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const {attribute, category, value} = currentQuestion
  
  if (category === 'accessories') {
    if(keep) {
        alert(`Yes, the character is looking fabolouse in ${value}! Confirm to keep all people that wears ${value}`)
    } else {
        alert(`No, this character can't pull of ${value}! Remove everyone wearing ${value}.`)
    }

} else if (category === 'other') { 
    if (keep) {
        alert(`Yes this character have a ${value}! Filter out the characters without a ${value}!`)
    } else {
        alert(`No this character doesn't have ${value}! Filter out the characters with ${value}!`)
    }
}
else { 
    if (keep) {
        alert(`Yay, this character has beautiful ${value} ${category}. Sort out the other ones that don't!`)
    } else {
        alert(`No this character doesn't have ${value} ${category}! Sort out all the characters that do!`)
    }
} 

if (keep) {
  charactersInPlay = charactersInPlay.filter(
      (person) => person[attribute] === value
  )
} else {
  charactersInPlay = charactersInPlay.filter(
      (person) => person[attribute] !== value
  )
}
generateBoard()
}




//Game comparing question with charactures values?



// //Player have to confirm guess
// const guess = (choise) => {
//   const sendGuess = confirm (`Do you choose to guess on ${choise}?`)

//   if (sendGuess) {
//     checkGuess(choise)
//   }
// }
// //Confirming the guess will trigger
// const checkGuess = (choise) => {
//   if (choise === secret.name) {
//     winnerLooserText.innerHTML = `CONGRATULATIONS <br> - you did <span role="img"></span>` //Modifierad LOGO2
//   } else {
//     winnerLooserText.innerHTML = `Oh sorry! You didn´t <br> <span role="img"></span>` //LOGO2
//   }
//   winnerLooser.style.display = 'flex'
//   board.style.display = 'none'
// }




//   // This variable stores what option group (category) the question belongs to.
//   // We also need a variable that stores the actual value of the question we've selected.
//   // 
// }

// // This function should be invoked when you click on 'Find Out' button.
// const checkQuestion = () => {
//   const { category, value } = currentQuestion

//   // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
//   // See if we should keep or remove people based on that
//   // Then invoke filterCharacters
//   if (category === 'hair' || category === 'eyes') {

//   } else if (category === 'accessories' || category === 'other') {

//   }
// }


//   // Determine what is the category
//   // filter by category to keep or remove based on the keep variable.
//   /* 
//     for hair and eyes :
//       charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
//       or
//       charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

//     for accessories and other
//       charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
//       or
//       charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
//   */

//   // Invoke a function to redraw the board with the remaining people.
// }

// // when clicking guess, the player first have to confirm that they want to make a guess.
// const guess = (personToConfirm) => {
//   // store the interaction from the player in a variable.
//   // remember the confirm() ?
//   // If the player wants to guess, invoke the checkMyGuess function.
// }

// // If you confirm, this function is invoked
// const checkMyGuess = (personToCheck) => {
//   // 1. Check if the personToCheck is the same as the secret person's name
//   // 2. Set a Message to show in the win or lose section accordingly
//   // 3. Show the win or lose section
//   // 4. Hide the game board
// }


// // Invokes the start function when website is loaded

//Start and restart game
const play = () => {
  charactersInPlay = CHARACTERS
//   board.style.display ='flex'
  setSecret()
  generateBoard()
}
play ()
// // // All the event listeners

// playersNameInput.addEventListener('submit', start)
questions.addEventListener('change', selectQuestion)
restartButton.addEventListener('click', play)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
