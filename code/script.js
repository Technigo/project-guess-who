// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const questionSection = document.getElementById('questionSection')
const playAgain = document.getElementById('playAgain')
const questionCounter = document.getElementById('questionCounter')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/1.svg',
    mostly: 'blue',
    looking: 'angry',
    a: 'one-eyed',
    having: ['fangs']
  },
  {
    name: 'Jack',
    img: 'images/2.svg',
    mostly: 'green',
    looking: 'excited-or-happy',
    a: 'two-eyed',
    having: ['horns']
  },
  {
    name: 'Jacques',
    img: 'images/3.svg',
    mostly: 'orange',
    looking: 'disgruntled',
    a: 'one-eyed',
    having: []
  },
  {
    name: 'Jai',
    img: 'images/4.svg',
    mostly: 'pink',
    looking: 'angry',
    a: 'two-eyed',
    having: ['horns', 'fangs']
  },
  {
    name: 'Jake',
    img: 'images/5.svg',
    mostly: 'purple',
    looking: 'angry',
    a: 'four-eyed',
    having: []
  },
  {
    name: 'James',
    img: 'images/6.svg',
    mostly: 'blue',
    looking: 'confused',
    a: 'two-eyed',
    having: ['fangs', 'wings']
  },
  {
    name: 'Jana',
    img: 'images/7.svg',
    mostly: 'purple',
    looking: 'excited-or-happy',
    a: 'four-eyed',
    having: []
  },
  {
    name: 'Jane',
    img: 'images/8.svg',
    mostly: 'blue',
    looking: 'excited-or-happy',
    a: 'three-eyed',
    having: ['fangs', 'wings']
  },
  {
    name: 'Jaqueline',
    img: 'images/9.svg',
    mostly: 'orange',
    looking: 'excited-or-happy',
    a: 'two-eyed',
    having: ['horns']
  },

  {
    name: 'Jazebelle',
    img: 'images/10.svg',
    mostly: 'green',
    looking: 'excited-or-happy',
    a: 'three-eyed',
    having: ['fangs']
  },
  {
    name: 'Jean',
    img: 'images/11.svg',
    mostly: 'purple',
    looking: 'angry',
    a: 'two-eyed',
    having: ['horns', 'fangs', 'wings']
  },
  {
    name: 'Jeane',
    img: 'images/12.svg',
    mostly: 'blue',
    looking: 'excited-or-happy',
    a: 'two-eyed',
    having: ['horns']
  },
  {
    name: 'Jed',
    img: 'images/13.svg',
    mostly: 'green',
    looking: 'excited-or-happy',
    a: 'three-eyed',
    having: ['horns']
  },
  {
    name: 'Jenni',
    img: 'images/14.svg',
    mostly: 'pink',
    looking: 'excited-or-happy',
    a: 'one-eyed',
    having: []
  },
  {
    name: 'Jeri',
    img: 'images/15.svg',
    mostly: 'blue',
    looking: 'excited-or-happy',
    a: 'three-eyed',
    having: []
  },
  {
    name: 'Jerry',
    img: 'images/16.svg',
    mostly: 'purple',
    looking: 'excited-or-happy',
    a: 'two-eyed',
    having: ['horns']
  },
  {
    name: 'Jess',
    img: 'images/17.svg',
    mostly: 'blue',
    looking: 'excited-or-happy',
    a: 'one-eyed',
    having: ['wings']
  },
  {
    name: 'Jocelyn',
    img: 'images/18.svg',
    mostly: 'yellow',
    looking: 'confused',
    a: 'two-eyed',
    having: ['fangs']
  },
  {
    name: 'Jon',
    img: 'images/19.svg',
    mostly: 'blue',
    looking: 'excited-or-happy',
    a: 'two-eyed',
    having: ['horns']
  },
  {
    name: 'Jordan',
    img: 'images/20.svg',
    mostly: 'red',
    looking: 'excited-or-happy',
    a: 'two-eyed',
    having: ['fangs']
  },
  {
    name: 'Josephine',
    img: 'images/21.svg',
    mostly: 'orange',
    looking: 'confused',
    a: 'one-eyed',
    having: ['horns']
  },
  {
    name: 'Josh',
    img: 'images/22.svg',
    mostly: 'pink',
    looking: 'excited-or-happy',
    a: 'two-eyed',
    having: ['horns']
  },
  {
    name: 'Jude',
    img: 'images/23.svg',
    mostly: 'green',
    looking: 'disgruntled',
    a: 'two-eyed',
    having: ['fangs']
  },
  {
    name: 'Julie',
    img: 'images/24.svg',
    mostly: 'blue',
    looking: 'excited-or-happy',
    a: 'one-eyed',
    having: ['fangs']
  },
]


// Global variables
let secret
let currentQuestion = {category: 'mostly', value: 'blue'}
let charactersInPlay
let guessNumber


// This function draws the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card" onmouseenter='playSound()'>
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


// This function chooses a random person from the CHARACTERS array once the game starts and sets that person as the variable called secret.
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}


// 1. This function starts the game when the page loads for the first time and also when the player restarts the game.
const start = () => {

  // 2. Inside the function the all the game characters are chosen for the beginning of the game.
  charactersInPlay = CHARACTERS

  // 3. Here the secret person is set for the game.
  setSecret()

  // 4. The board is generated with the chosen characters, in this case all of them.
  generateBoard()

  // 5. The win or lose-board is hidden and the game board and question section are unhidden (functions which were invoked in the end of the game).
  // The number of guesses is first set to 0.
  winOrLose.style.display = "none"
  questionSection.style.display = "flex"
  board.style.display = "flex"
  guessNumber = 0
}


// 1. This function stores the information of the question when the player chooses it from the dropdown.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  // 2. The currentQuestion variable stores the category and the value of the question.
  currentQuestion = {
    category,
    value
  }
}


// 1. This function is invoked by clicking the Find Out- button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  /* 2. The function compares the category and value stored in the currentQuestion object
  to the category and value of the chosen secret person. */
  if (category === 'mostly' || category === 'looking' || category === 'a') {
    if (value === secret.mostly || value === secret.looking || value === secret.a) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }  
  } else if (category === 'having') {
    if (secret.having.includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}


/*
1. This function filters out game characters (keeps or removes them) based on the questions
  chosen by the player and how they match the secret person. */
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  /* 2. The function will also give alerts to the player which include information about whether the
  question value was matching the secret person or not. */
  if (category === 'having') {
    console.log(value)
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      console.log(charactersInPlay)
      alert(`Yes, the monster does have ${value}! Keep all monsters that have ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`No, the monster doesn't have ${value}! Remove all monsters with ${value}`)
    }
  } else if (category === 'a') {
    console.log(value)
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Yes, the monster is ${value}! Keep all monsters that are ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`No, the monster isn't ${value}! Remove all monsters that are ${value}`)
    }
  } else if (category === 'mostly') {
    console.log(value)
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Yes! The monster is ${value}! Keep all monsters that are ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`No, the monster is not ${value}. Remove all monsters that are ${value}`)
    }
  } else if (category === 'looking') {
    console.log(value)
    if (keep) {
      console.log(`test`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Yes, the monster is looking ${value}! Keep all monsters that look ${value}`)
    } else {
      console.log(`test`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`No, the monster is not looking ${value}. Remove all monsters that look ${value}`)
    }
  }

  /* 3. The function will also generate the board with selected characters according to the filtering process and
  count how many guesses the player has used and prints it as text on the page. */
  generateBoard()
  guessNumber++
  questionCounter.innerHTML = `
  Number of guesses: ${guessNumber}
  `
}


// 1. This function stores the players guess into a variable.
const guess = (personToConfirm) => {

  /* 2. The function confirms the players guess with the confirm() method by showing a window
  where the player either clicks OK to confirm their choice or CANCEL to close the window. */
  let guessedPerson = confirm(`Do you want to guess ${personToConfirm}?`)

  /* 3. If the player confirms their guess the checkMyGuess function is invoked, otherwise an
  alert is shown for the player which tells that they can keep playing. */
  if (guessedPerson) {
    checkMyGuess(personToConfirm)
    //console.log(guessedPerson)
  } else {
    alert(`Okay, you can continue guessing!`)
  }
}


// 1. This function is invoked when the player confirms their guess.
const checkMyGuess = (personToCheck) => {

  /* 2. The function compares the players guess to the secret person and then shows either
  a winning or a losing message and plays a sound depending on their guess. */
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `
    Or in human words: Yay! You guessed correctly! It is ${secret.name}!
    `
    const audio = new Audio('assets/win-sound.wav')
      audio.play()
  } else {
    winOrLoseText.innerHTML = `
    Or in human words: Noo! The right answer would have been ${secret.name}! But no worries, you can try again! 
    `
    const audio = new Audio('assets/monster-lose-growl.mp3')
      audio.play()
  }
  // 3. The function shows the win or lose - section and hides the game board and the question section.
  winOrLose.style.display = "flex"
  board.style.display = "none"
  questionSection.style.display = "none"
  questionCounter.innerHTML = `
  Number of guesses: 0
  `
}


// This function plays a sound when the player moves their mouse cursor over the character card.
const playSound = () => {
  const audio = new Audio('assets/card-sound.mp3')
    audio.play()
    audio.autoplay = true
    audio.volume = 0.5
}


// This function plays a sound when the player moves their mouse cursor over the find out- and restart- buttons.
const playButtonSound = () => {
  const audio = new Audio('assets/monster-growl-button.mp3')
    audio.play()
    sound.autoplay = true
    audio.volume = 0.5
}


// This invokes the start function when website is loaded
start()


// All the event listeners:

// 1. This invokes the start function when the player clicks on restart-button
restartButton.addEventListener('click', start)

// 2. This invokes the function selectQuestion when the player chooses an option from the select input
questions.addEventListener('change', selectQuestion)

// 3. This invokes the function checkQuestion when the player clicks on the find out-button
findOutButton.addEventListener('click', checkQuestion)

// 4. This invokes the start function when the player clicks on the play again-button
playAgain.addEventListener('click', start)

// 5. This invokes the playButtonSound function when the player moves over the find out-button with the mouse cursor
findOutButton.addEventListener('mouseenter', playButtonSound)

// 6. This invokes the playButtonSound function when the player moves over the restart-button with the mouse cursor
restartButton.addEventListener('mouseenter', playButtonSound)