// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: [],
    gender: ['male']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker'],
    gender: ['male']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: [],
    gender: ['male']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['male']
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['male']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewelry'],
    other: [],
    gender: ['female']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker'],
    gender: ['female']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
    gender: ['male']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
    gender: ['male']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'jewelry'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: [],
    gender: ['male']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'jewelry'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['male']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: [],
    gender: ['male']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: [],
    gender: ['female']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: [],
    gender: ['male']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: [],
    gender: ['male']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: [],
    gender: ['female']
  },
]

// Global variables
let secret //will be the secret person object
let currentQuestion //Will be the current question object
let charactersInPlay //Will be an array of all people left in the game

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
// console.log('charactersInPlay:', charactersInPlay)
// console.log('secret', secret.name) //Random Character is working

}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  setSecret()
  generateBoard()
  selectQuestion()
  winOrLose.style.display = 'none'
board.style.display = 'flex'
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
const value = questions.options[questions.selectedIndex].value
  //const value =
//parentNode.label = hair, eyes etc
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  

  currentQuestion = {
    category: category,
    value: value
    // value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  if (category === "hair" || category === "eyes" || category === "gender") {
    keep = value === secret[category];
  } else if (category === "accessories" || category === "other") {
    keep = secret[category].includes(value);
  }
  filterCharacters(keep);
};
//   if (category === 'hair' || category === 'eyes') {
//     if (value === secret.hair || value === secret.eyes) {
// filterCharacters(true)
// } else {
//   filterCharacters(false)
// }
//   } else if (category === 'accessories' || category === 'other' || category === 'gender') {
//     if (secret.accessories.includes(value) || secret.other.includes(value) || secret.gender.includes(value)) {
//       filterCharacters(true)
//     } else {
//       filterCharacters(false)
//     }
//   }
// }

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
// alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
  if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all the people with ${value} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair`
      )
    }
  } 
  if (category === 'eyes') {
if (keep) {
  alert(
    `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
  )
} else {
  alert(
    `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`
  )
}
  }
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
     alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } 
  else if (category === 'other' || category === 'gender') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all the ${value}s`
      )
    } else {
      alert(
        `No, the person is not a ${value}! Remove all the ${value}s`
      )     
    }
  }

 
    // for hair and eyes :
    if (category === 'hair' || category === 'eyes') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
// for accessories and other
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
start()

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const playerGuess = confirm(`Do you really want to guess on ${personToConfirm}?`)
  // remember the confirm() ?
  if (playerGuess) {
    checkMyGuess(personToConfirm)
  }
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
// 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Yes, you did it! 💫 ${secret.name} is correct!`
  } else {
winOrLoseText.innerHTML = `Game Over! The secret person was ${secret.name}. You want to play again?`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}



// Invokes the start function when website is loaded
start()



// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)


