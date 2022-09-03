// All the DOM selectors stored as short variables
const board = document.getElementById('board') // a class within the section where the charachters will show. 
const questions = document.getElementById('questions') // where the user asks the questions (the select/drop down)
const restartButton = document.getElementById('restart') // the restart button
const findOutButton = document.getElementById('filter') // the findout button
const winOrLoseSection = document.getElementById('winOrLose') 
const playAgainBtn = document.getElementById('playAgain') //the play again-button
const instructions = document.getElementById('gameInstructions')
const instructionsExtended = document.getElementById('gameInstructionsExtended')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['happy']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'beard']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['happy']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
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
    other: ['happy']
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
    other: ['happy outlook on life']
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
    other: ['happy outlook on life']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'beard']
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
    other: ['happy outlook on life']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['happy outlook on life']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'browneyes',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy outlook on life']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['happy outlook on life']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: ['happy outlook on life']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['happy outlook on life']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['beard', 'happy outlook on life']
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
let keep 

// Function: generateBoard draws the game board
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

// Function: setSecret randomly selects a person from the charachter array (this is the secret person).
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log('secret person;', secret) //This console.log allows me to see who the secret person is for each game. 
}

// Function: starts the game. 
const start = () => {
  charactersInPlay = CHARACTERS // Here we're setting charactersInPlay array to be all the characters to start with
}

// Function: selectQuestion sets the currentQuestion when the user selects something in the dropdown (ie when the user formulates his/her question).
const selectQuestion = () => {
  console.log('This is the question that I want answered')
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value // This variable stores the actual value of the quesiton we've selected in the dropdown.
    
    if (category === 'hair') {
      console.log('hair:', value)
      currentQuestion = { 
        category: category,
        value: value
      }
    }
  
    else if (category === 'eyes') {
      console.log('eyes:', value)
      currentQuestion = { 
        category: category,
        value: value
      }
    }

    else if (category === 'accessories') {
      console.log('accessories:', value)
      currentQuestion = { 
        category: category,
        value: value 
      }
    }

    else if (category === 'other') {
      console.log('other:', value)
      currentQuestion = {
        category: category,
        value: value 
      }
     }
  }

// Function: checkQuestion is invoked when pressing the findOutButton, and leads to the filter function. 
const checkQuestion = () => {
  console.log('Please check if the secret person has these attributes!')
  const { category, value } = currentQuestion 
  
  let keep

  if (category === 'hair' || category === 'eyes') {
    console.log(category, value) // Daniels förslag 
    if (value === secret.hair || value === secret.eyes) {
      keep = true
      filterCharacters(true) 
      console.log('You are on the right track!')
    }
    else {
      keep = false
      filterCharacters() 
      console.log('You are not on the right track!')
    }
  } 
  
  else if (category === 'accessories' || category === 'other') {
    console.log(category, value) // Daniels förslag 
    if (secret.accessories.includes(value) || secret.other.includes(value)) { //this says includes instead of === since you either have the accessories/other or you don't. 
      keep = true
      filterCharacters(true) //vad ska man ha inom dessa paranteser? 
      console.log('You are not on the right track')
    }
    else {
      keep = false
      filterCharacters() //samma som ovan 
      console.log('You are not on the right track!')
    }
  }
}

// Function: filterCharachters filters the charachters in the array and redraws the board. The redraw will depend on the user's question.
const filterCharacters = (keep) => {
  console.log('Filtering')
  const { category, value } = currentQuestion
  
  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keep all people that has ${value} hair.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value) 
    }  
    else {
      alert(`No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  
  else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people that have ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } 
    else {
      alert(`No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    
    else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 
  
  else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person has a ${value}! Keep all people that have a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    
    else {
      alert(`No, the person doesn't have a ${value}! Remove all people that have a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 
  console.log(charactersInPlay)
  generateBoard()
}

// Function: the user confirms his/her guess and the function checkMyGuess is invoked. 
const guess = (personToConfirm) => {
  confirm(`So you think it is ${personToConfirm}? If you are wrong, it is game over 🙀`) 
  checkMyGuess(personToConfirm) 
}

// Function: checkMyGuess checks whether the user's guess equals the secret person chosen in the setSecret-function
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) { // if the guess=the secret person, the msg below shows
    winOrLoseText.innerHTML = `Are you Sherlock Holmes? Cause that sure was some impressive detective work!`
  }
  
  else { //if the guess does not equal the secret person, this message shows
    winOrLoseText.innerHTML = `Not the sharpest tool in the toolbox, ey?`
  }

  winOrLoseSection.style.display = 'flex'  //Show the win or lose section
  board.style.display = 'none'  //Hide the game board
}

//The following functions are called when the website is loaded:
start() // Invokes the start function when website is loaded
generateBoard() // Invokes the generateBoard function when the website is loaded
setSecret() // Invokes the setSecrets function when website is loaded (i.e. a new secret person is chosen)

// ALL EVENTLISTENERS
//Function: when the dropdown is changed, the selectQuestion-function is invoked. 
questions.addEventListener('change', selectQuestion)

//Function: when the findOutButton is clicked, the checkQuestion-function is invoked. 
findOutButton.addEventListener('click', checkQuestion)

//Function: when the playAgainButton is clicked, the window returns to the start page after 0,5 seconds. 
playAgainBtn.addEventListener('click', (event) => {
  setTimeout (() => location.reload(console.log("event triggered")), 500)
    return false // lägg in förklaring om detta https://stackoverflow.com/c/technigo/questions/3983 
})

//Function: when the restartButton is clicked, the window returns to the start page after 0,5 seconds. 
restartButton.addEventListener('click', (event) => {
  setTimeout (() => location.reload(console.log("event triggered")), 500)
    return false // lägg in förklaring om detta https://stackoverflow.com/c/technigo/questions/3983 
})

//
instructions.addEventListener('click', (event) => {
  instructions.classList.toggle("active")
})