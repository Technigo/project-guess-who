// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const winOrLose = document.getElementById('winOrLose')
const correctOrIncorrect = document.getElementById('correctOrIncorrect')
const confirmGuess = document.getElementById('confirmGuess')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const startGameButton = document.getElementById('startGame')
const okButton = document.getElementById('ok')

const playerName = document.getElementById('playerName')
const playerNameText = document.getElementById('playerNameText')
const questionsAsked = document.getElementById('questionsAsked')

const timer = document.getElementById('timer')

//sound efects
const losingAudio = new Audio ("images/game-over.wav")
const winningAudio = new Audio ("images/applause.wav")



// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Ben',
    img: 'images/ben.png',
    hair: 'blonde',
    eyes: 'green',
    dates: [],
    relatives: ['Monica', 'Ross']
  },
  {
    name: 'Carol',
    img: 'images/carol.png',
    hair: 'blonde',
    eyes: 'blue',
    dates: ['Ross'],
    relatives: []
  },
  {
    name: 'Chandler',
    img: 'images/chandler.png',
    hair: 'brown',
    eyes: 'blue',
    dates: ['Monica'],
    relatives: ['Chandler']
  },
  {
    name: 'Charlie',
    img: 'images/charlie.png',
    hair: 'brown',
    eyes: 'brown',
    dates: ['Joey', 'Ross'],
    relatives: []
  },
  {
    name: 'David',
    img: 'images/david.png',
    hair: 'brown',
    eyes: 'brown',
    dates: ['Phoebe'],
    relatives: []
  },
  {
    name: 'Dina',
    img: 'images/dina.png',
    hair: 'red',
    eyes: 'green',
    dates: [],
    relatives: ['Joey']
  },
  {
    name: 'Emily',
    img: 'images/emily.png',
    hair: 'brown',
    eyes: 'brown',
    dates: ['Ross'],
    relatives: []
  },
  {
    name: 'Emma',
    img: 'images/emma.png',
    hair: 'golden-blonde',
    eyes: 'blue',
    dates: [],
    relatives: ['Monica', 'Rachel', 'Ross']
  },
  {
    name: 'Frank Jr',
    img: 'images/frank.png',
    hair: 'brown',
    eyes: 'blue',
    dates: [],
    relatives: ['Phoebe']
  },
  {
    name: 'Gunther',
    img: 'images/gunther.png',
    hair: 'blonde',
    eyes: 'blue',
    dates: [],
    relatives: []
  },
  {
    name: 'Jack',
    img: 'images/jack.png',
    hair: 'grey',
    eyes: 'brown',
    dates: [],
    relatives: ['Monica', 'Ross']
  },
  {
    name: 'Janice',
    img: 'images/janice.png',
    hair: 'brown',
    eyes: 'brown',
    dates: ['Chandler', 'Ross'],
    relatives: []
  },
  {
    name: 'Joey',
    img: 'images/joey.png',
    hair: 'black',
    eyes: 'brown',
    dates: ['Rachel'],
    relatives: ['Joey']
  },
  {
    name: 'Judy',
    img: 'images/judy.png',
    hair: 'grey',
    eyes: 'blue',
    dates: [],
    relatives: ['Monica', 'Ross']
  },
  {
    name: 'Kathy',
    img: 'images/kathy.png',
    hair: 'red',
    eyes: 'brown',
    dates: ['Chandler', 'Joey'],
    relatives: []
  },
  {
    name: 'Monica',
    img: 'images/monica.png',
    hair: 'black',
    eyes: 'blue',
    dates: ['Chandler'],
    relatives: ['Ross, Monica']
  },
  {
    name: 'Mike',
    img: 'images/mike.png',
    hair: 'brown',
    eyes: 'green',
    dates: ['Phoebe'],
    relatives: []
  },
  {
    name: 'Nora',
    img: 'images/nora.png',
    hair: 'blonde',
    eyes: 'blue',
    dates: [],
    relatives: ['Chandler']
  },
  {
    name: 'Paolo',
    img: 'images/paolo.png',
    hair: 'brown',
    eyes: 'brown',
    dates: ['Rachel'],
    relatives: []
  },
  {
    name: 'Phoebe',
    img: 'images/phoebe.png',
    hair: 'blonde',
    eyes: 'green',
    dates: [],
    relatives: ['Phoebe']
  },
  {
    name: 'Rachel',
    img: 'images/rachel.png',
    hair: 'golden-blonde',
    eyes: 'blue',
    dates: ['Joey', 'Ross'],
    relatives: ['Rachel']
  },
  {
    name: 'Richard',
    img: 'images/richard.png',
    hair: 'brown',
    eyes: 'brown',
    dates: ['Monica'],
    relatives: []
  },
  {
    name: 'Ross',
    img: 'images/ross.png',
    hair: 'black',
    eyes: 'brown',
    dates: ['Rachel'],
    relatives: ['Monica', 'Ross']
  },
  {
    name: 'Ursula',
    img: 'images/ursula.png',
    hair: 'blonde',
    eyes: 'green',
    dates: ['Joey'],
    relatives: ['Phoebe']
  },
]

// Global variables
let secret
let currentQuestion = {category: 'hair', value: 'black'}
let charactersInPlay
let keep 
let numberOfGuesses = 0
let personToConfirm
let totalSeconds = 0
let minutes = 0
let seconds = 0

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

//Timer
const timerCount = () => {
  // define minutes and seconds variable
  totalSeconds++
  minutes = Math.floor(totalSeconds / 60)
  seconds = totalSeconds - (minutes * 60)
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  timer.innerHTML=`Time: ${minutes}:${seconds}`

}



//This invokes when you click restart button
const restart = () => {
  playerName.value = ''
  document.getElementById('starting-aside').style.display = 'block'
  document.getElementById('question-aside').style.display = 'none'
  board.style.display = 'none'
  winOrLose.style.display = 'none'
}


//This happens when user presses the start game button
setInterval(timerCount, 1000)

//This invokes when you press ok button after the game shows the user was the question correct or incorrect
const hideAnswerAndShowBoard = () => {
  correctOrIncorrect.style.display = 'none'
  board.style.display = 'flex'
}

const hideConfirmAndShowBoard = () => {
  confirmGuess.style.display = 'none'
  board.style.display = 'flex'
}


// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret)
}


// This function to start  the game
const start = () => {
  totalSeconds = 0
  numberOfGuesses = 0
  playerNameText.innerHTML=`Player: ${playerName.value}`
  questionsAsked.innerHTML=`Question counter: ${numberOfGuesses}`
  
  document.getElementById('starting-aside').style.display = 'none'
  document.getElementById('question-aside').style.display = 'block'
  winOrLose.style.display = 'none'
  board.style.display = 'flex'

  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  currentQuestion = {category: category, value: value}
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  numberOfGuesses++ //here we want to increase the numberOfGuesses with one
  questionsAsked.innerHTML=`Question counter: ${numberOfGuesses}`
  //for testing:
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair') {
    if (value === secret[category]){
      keep = true
    }
    else{
      keep = false
    }

  } 
  else if (category === 'eyes') {
    if (value === secret[category]){
      keep = true
    }
    else{
      keep = false
    }

  } 
  else if (category === 'dates') {
    if(secret[category].includes(value)){
      keep = true
    }
    else{
      keep = false
    }
  }
  else if (category === 'relatives') {
    if(secret[category].includes(value)){
      keep = true
    }
    else{
      keep = false
    }
  }
  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'dates') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      correctOrIncorrectText.innerHTML = `Yes, the person has dated with ${value}! Keep all people that have dated with ${value}`
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      correctOrIncorrectText.innerHTML = `No, the person has not dated with ${value}! Remove all people that have dated with ${value}`
    }
  } 
  else if (category === 'relatives') {
    // Similar to the one above
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      correctOrIncorrectText.innerHTML = `Yes, the person is a relative of ${value}! Keep all people that relative of ${value}`
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      correctOrIncorrectText.innerHTML = `No, the person is not a relative of ${value}! Remove all people that are relatives of ${value}`
    }
  } 
  else if (category === 'hair') {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      correctOrIncorrectText.innerHTML = `Yes, the person has ${value} hair! Keep all people that have ${value} hair`
    } 
    else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      correctOrIncorrectText.innerHTML = `No, the person has not ${value} hair! Remove all people that have ${value} hair`
    }
  }
  else if (category === 'eyes') {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      correctOrIncorrectText.innerHTML = `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`
    } 
    else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      correctOrIncorrectText.innerHTML = `No, the person has not ${value} eyes! Remove all people that have ${value} eyes`
    }
  }
  // Show the correct or incorrect section
  correctOrIncorrect.style.display = 'flex'
  // Hide the game board
  board.style.display = 'none'
  generateBoard() 
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  // store the interaction from the player in a variable.
  // remember the confirm() ?

  

  confirmGuessText.innerHTML = `Do you want to guess  on ${personToConfirm}?`
  const confirmButton = document.getElementById('confirm')
  const cancelButton = document.getElementById('cancel')

  cancelButton.addEventListener('click', hideConfirmAndShowBoard)
  confirmButton.addEventListener('click', () => {
    checkMyGuess(personToConfirm)
    confirmGuess.style.display = 'none'
  })

  // Show the confirm section
  confirmGuess.style.display = 'flex'
  // Hide the game board
  board.style.display = 'none'
  

}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  if (personToCheck === secret.name){
    winningAudio.currentTime = 0
    winningAudio.play()
    winOrLoseText.innerHTML = `YAY! ⭐️ You guessed on ${personToCheck} and it was correct! You did it in only ${numberOfGuesses} questions.`
    
  }
  
  else {
    losingAudio.currentTime = 0
    losingAudio.play()
    winOrLoseText.innerHTML = `Sorry, it's not ${personToCheck}. The correct answer is ${secret.name}!`
  }
  
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'
}


// All the event listeners
restartButton.addEventListener('click', restart)
playAgainButton.addEventListener('click', restart)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
startGameButton.addEventListener('click', start,setInterval)
okButton.addEventListener('click', hideAnswerAndShowBoard)





