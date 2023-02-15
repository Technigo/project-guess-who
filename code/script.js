// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLoseSection = document.getElementById('winOrLose')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const questionsAskedDisplay = document.getElementById('questionsAsked')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Amy',
    img: 'images/amy.jpg',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['neckwear'],
    other: []
  },
  {
    name: 'Doug',
    img: 'images/doug.jpg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['hat', 'neckwear'],
    other: []
  },
  {
    name: 'Ella',
    img: 'images/ella.jpg',
    hair: 'orange',
    eyes: 'blue',
    accessories: ['neckwear'],
    other: ['smoker']
  },
  {
    name: 'Green',
    img: 'images/green.jpg',
    hair: 'brown',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Hank',
    img: 'images/hank.jpg',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['hat', 'neckwear'],
    other: []
  },
  {
    name: 'Jay',
    img: 'images/jay.jpg',
    hair: 'orange',
    eyes: 'brown',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Justin',
    img: 'images/justin.jpg',
    hair: 'black',
    eyes: 'grey',
    accessories: ['hat', 'neckwear'],
    other: []
  },
  {
    name: 'Kandy',
    img: 'images/kandy.jpg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses','neckwear'],
    other: []
  },
  {
    name: 'Luke',
    img: 'images/luke.jpg',
    hair: 'hidden',
    eyes: 'grey',
    accessories: ['glasses', 'neckwear'],
    other: []
  },

  {
    name: 'Maple',
    img: 'images/maple.jpg',
    hair: 'orange',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Mustard',
    img: 'images/mustard.jpg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['hat', 'neckwear'],
    other: ['smoker']
  },
  {
    name: 'Paige',
    img: 'images/paige.jpg',
    hair: 'white',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Peacock',
    img: 'images/peacock.jpg',
    hair: 'yellow',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Philipa',
    img: 'images/philipa.jpg',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['neckwear'],
    other: []
  },
  {
    name: 'Plum',
    img: 'images/plum.jpg',
    hair: 'yellow',
    eyes: 'brown',
    accessories: ['glasses', 'neckwear'],
    other: []
  },
  {
    name: 'Redd',
    img: 'images/redd.jpg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Robyn',
    img: 'images/robyn.jpg',
    hair: 'hidden',
    eyes: 'brown',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Scarlett',
    img: 'images/scarlett.jpg',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['neckwear'],
    other: []
  },
  {
    name: 'Sue',
    img: 'images/sue.jpg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'notepad'],
    other: []
  },
  {
    name: 'Tim',
    img: 'images/tim.jpg',
    hair: 'brown',
    eyes: 'grey',
    accessories: ['hat', 'neckwear'],
    other: []
  },

  {
    name: 'Ty',
    img: 'images/ty.jpg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['hat', 'notepad'],
    other: []
  },
  {
    name: 'Violet',
    img: 'images/violet.jpg',
    hair: 'purple',
    eyes: 'blue',
    accessories: ['neckwear'],
    other: []
  },
  {
    name: 'White',
    img: 'images/white.jpg',
    hair: 'white',
    eyes: 'grey',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Zoltan',
    img: 'images/zoltan.jpg',
    hair: 'hidden',
    eyes: 'brown',
    accessories: ['hat', 'neckwear'],
    other: []
  }
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let countQuestionsAsked = 0
const questionsAllowed = 4

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  CHARACTERS.forEach((person) => {
    if (charactersInPlay.includes(person)) {
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
    } else {
      board.innerHTML += `
      <div class = "card back">
        <img class = "card-back" src="images/card-back.png" alt = "Suspect is innocent".
      </div>
      `
    }
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
  generateBoard();
  setSecret();
  countQuestionsAsked = 0 //reset counter for new game
  questionsAskedDisplay.innerText = 0
  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label //variable for the category of the dropdown option group

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value //variable for the option value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  selectQuestion() //To avoid the error of this function not being called if user selects the default from questions dropdown

 // const {category, value} = currentQuestion
 const category = currentQuestion.category
 const value = currentQuestion.value

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || (secret.other.includes(value))) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  }
}

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  countQuestionsAsked++
  // const { category, value } = currentQuestion
  const category = currentQuestion.category
  const value = currentQuestion.value

  // Show the correct alert message for different categories
  if (countQuestionsAsked > questionsAllowed) {
    alert(
      `You have run out of questions to ask. It's time to make an accusation.`
    )
  } else {
    questionsAskedDisplay.innerText = countQuestionsAsked

    if (category === 'hair') {
      if (keep) {
        alert(
          `Yes, the suspect has ${value} hair! Keep all suspects that have ${value} hair.`
        )
      } else {
        alert(
          `No, the suspect doesn't have ${value} hair! Remove all suspects that have ${value} hair.`
        )
      }
    } else if (category === 'eyes') {
      if (keep) {
        alert(
          `Yes the suspect has ${value} eyes! Keep all suspects with ${value} eyes.`
        )
      } else[
        alert(
          `No, the suspect doesn't have ${value} eyes! Remove all suspects with ${value} eyes.`
        )
      ]
    } else if (category === 'accessories') {
      if (keep) {
        alert(
          `Yes, the suspect has ${value}! Keep all suspects that have ${value}.`
        )
      } else {
        alert(
          `No, the suspect doesn't have ${value}! Remove all suspects that have ${value}.`
        )
      }
    } else if (category === 'other') {
      if (keep) {
        alert(
          `Yes, the suspect is a ${value}! Keep all suspects that are ${value}s.`
        )
      } else {
        alert(
          `No, the suspect isn't a ${value}! Remove all suspects that are ${value}s.`
        )
      }
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  generateBoard();
}

// when clicking guess, the player first has to confirm that they want to make a guess.
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you sure you want to accuse ${suspect}?`)

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if (makeAGuess){
    checkMyGuess(suspect)
  }
}


// If you confirm, this function is invoked
const checkMyGuess = (suspectToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if(suspectToCheck === secret.name) {
    winOrLoseText.innerHTML = `YOU WON! ${secret.name} was the murderer!`
  } else {
    winOrLoseText.innerHTML = `YOU LOST! ${suspectToCheck} is innocent.  ${secret.name} was the murderer!`
  }
  winOrLoseSection.style.display = 'flex';
  board.style.display = 'none';
}

const playAgain = () => {
  start()
  winOrLoseSection.style.display = 'none'
  board.style.display = 'flex'
  countQuestionsAsked = 0 // resets counter to 0 
  questionsAskedDisplay.innerText = countQuestionsAsked //and displays it
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', playAgain)
