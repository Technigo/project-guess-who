// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filter = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')
const questionSection = document.getElementById('question-section')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Sonic',
    img: 'https://i.pinimg.com/originals/8b/cb/f2/8bcbf29e016bbe0c4565ecf03c6c03da.png',
    hair: 'blue',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Gordon Freeman',
    img: './code/images/GF2.png',
    hair: 'brown',
    eyes: 'black',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Bayek',
    img: './code/images/beyek.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['hat'],
    other: ['']
  },
  {
    name: 'Clementine',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Clementine.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['hat'],
    other: []
  },
  {
    name: '2B',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/2B.png',
    hair: 'white',
    eyes: 'hidden',
    accessories: [''],
    other: []
  },
  {
    name: 'Samus Aran',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/SamusAran.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Bayonetta',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Bayonetta.png',
    hair: 'black',
    eyes: 'black',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Leon S. Kennedy',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Leon.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'The Boss',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Boss.png',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Link',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Link.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['']
  },
  {
    name: 'John Marston',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/JohnMarston.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['hat'],
    other: ['']
  },
  {
    name: 'Joel',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Joel.png',
    hair: 'black',
    eyes: 'black',
    accessories: [],
    other: []
  },
  {
    name: 'Master Chief',
    img: './images/MasterChief.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Mario',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Mario.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Dante',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Dante.png',
    hair: 'white',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'BJ Blazkowicz',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/bj.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Ezio',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/ezio.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Lara Croft',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/lara-croft-icon.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Geralt',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/geralt.png',
    hair: 'white',
    eyes: 'yellow',
    accessories: [],
    other: []
  },
  {
    name: 'Shepard',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/shepard.png',
    hair: 'orange',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Aloy',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/aloy.png',
    hair: 'orange',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Nathatn Drake',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/Nathan.png',
    hair: 'black',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Ellie',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/ellie.png',
    hair: 'brown',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Solid Snake',
    img: '/Users/arnau/Desktop/technigo-projects/project-guess-who/code/images/solidsnake.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: [],
    other: []
  },
]

// Global variables
let secret 
let currentQuestion = questions
let charactersInPlay = CHARACTERS

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
  return secret
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  winOrLose.style.display = 'none'
  board.style.display = 'flex' 
  questionSection.style.display = 'flex'

  generateBoard()
  setSecret()
 
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value
  }
  console.log(currentQuestion)
  return currentQuestion
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair') {
      if (currentQuestion.value === secret.hair) {
        keep = true
        filterCharacters(keep)
        console.log(keep)
      } else {
        keep  = false
        filterCharacters(keep)
        console.log(keep)
      }
  } else if (category === 'eyes') {
    
      if (currentQuestion.value === secret.eyes) {
        keep = true
        filterCharacters(keep)
        console.log(keep)
      } else {
        keep  = false
        filterCharacters(keep)
        console.log(keep)
      }
  } else if (category === 'accessories') {
    if (currentQuestion.value.includes('glasses')) {
      if (currentQuestion.value.includes('glasses') === secret.accessories.includes('glasses')) {
        keep = true
        filterCharacters(keep)
        console.log(keep)
      } else if (currentQuestion.value.includes('glasses') !== secret.accessories.includes('glasses')) {
        keep  = false
        filterCharacters(keep)
        console.log(keep)
      }
    } else if (currentQuestion.value.includes('hat')) {
      if (currentQuestion.value.includes('hat') === secret.accessories.includes('hat')){
        keep = true
        filterCharacters(keep)
        console.log(keep)
      } else if(currentQuestion.value.includes('hat') !== secret.accessories.includes('hat')){
        keep  = false
        filterCharacters(keep)
        console.log(keep)
      }
    }
  } else if (category === 'other') {
    if (currentQuestion.value === secret.other.join()) {
      keep = true
      filterCharacters(keep)
      console.log(keep)
    } else {
      keep  = false
      filterCharacters(keep)
      console.log(keep)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep === true) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      )
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep === true) {
      alert(
        `Yes, the person is ${value}! Keep all people that are ${value}.`
      )
    } else {
      alert(
        `No, the person isn't ${value}! Remove all people that are ${value}.`
      )
    }
  } else if (category === 'hair') {
    if (keep === true) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
        alert(
          `Yes, the person has ${value} hair! Keep all people that have ${value} hair.`
        )
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(
          `No, the person doesn't have ${value} hair! Remove all people with ${value} hair.`
        )
    }
  } else if (category === 'eyes') {
    if (keep === true) {
      alert(
        `Yes, the person has the ${value} eyes! Keep all people that have ${value} eyes.`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes.`
      )
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
     */
  if ( category === 'hair' ) {
      if (category === 'hair' && keep === true ) {

        charactersInPlay = charactersInPlay.filter((person) => person.hair === value)
      } else {

        charactersInPlay = charactersInPlay.filter((person) => person.hair !== value)
      };
  } else if ( category === 'eyes' ) {
    
      if (category === 'eyes' && keep === true) {

        charactersInPlay = charactersInPlay.filter((person) => person.eyes === value)

      } else {

        charactersInPlay = charactersInPlay.filter((person) => person.eyes !== value)

      };
  } else if ( category === 'accessories' ) {

    if (category === 'accessories' && keep === true) {
        charactersInPlay = charactersInPlay.filter((person) => person.accessories.includes(value))
    } else {
        charactersInPlay = charactersInPlay.filter((person) => !person.accessories.includes(value))
    }
  } else if ( category === 'other') {
    if (category === 'other' && keep === true) {
        charactersInPlay = charactersInPlay.filter((person) => person.other.includes(value))
    } else {
        charactersInPlay = charactersInPlay.filter((person) => !person.other.includes(value))
    }
  }
  // Invoke a function to redraw the board with the remaining people.
    generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const personName = personToConfirm
  const confirm = (personName) => {
    alert(`Are you sure you want to guess the ${personName}?`)
  }
  confirm(personName)
  checkMyGuess(personName)
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Congratulation! ${personToCheck} is the one we selected for you! YOU WIN!!!`
  } else {
    winOrLoseText.innerHTML = `Sad... I'sorry but you filed, ${personToCheck} is incorrect. You should try ${secret.name}, play again?.`
   }
  
  winOrLose.style.display = 'flex'
  board.style.display = 'none' 
  questionSection.style.display = 'none'
  
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change',selectQuestion)
filter.addEventListener('click',checkQuestion)
playAgain.addEventListener('click',start)
