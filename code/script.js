// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const questionCounter = document.getElementById('countQuestions')
const timerTick = document.getElementById('timer')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Laura',
    img: 'images/laura.svg',
    hair: 'brown',
    facemask: [],
    accessories: 'glasses',
    vaccinated: 'yes',
    other: 'regular'
  },
  {
    name: 'Anki',
    img: 'images/Anki.svg',
    hair: 'brown',
    facemask: [],
    accessories: [],
    vaccinated: 'yes',
    other: 'react'
  },
  {
    name: 'Lisa',
    img: 'images/lisa.svg',
    hair: 'white',
    facemask: 'white',
    accessories: [],
    vaccinated: 'no',
    other: 'redwood'
  },
  {
    name: 'Eyahya',
    img: 'images/Eyahya.svg',
    hair: 'blonde',
    facemask: 'blue',
    accessories: [],
    vaccinated: 'no',
    other: 'regular'
  },
  {
    name: 'Gonçalo',
    img: 'images/Gonçalo.svg',
    hair: 'bald',
    facemask: 'black',
    accessories: 'shades',
    vaccinated: 'no',
    other: 'regular'
  },
  {
    name: 'Hanna',
    img: 'images/Hanna.svg',
    hair: 'white',
    facemask: [],
    accessories: 'a beanie',
    vaccinated: 'yes',
    other: 'graphql'
  },
  {
    name: 'Jacob',
    img: 'images/Jacob.svg',
    hair: 'bald',
    facemask: 'white',
    accessories: 'a beanie',
    vaccinated: 'no',
    other: 'regular'
  },
  {
    name: 'Emma',
    img: 'images/Emma.svg',
    hair: 'black',
    facemask: 'blue',
    accessories: [],
    vaccinated: 'no',
    other: 'gatsby'
  },
  {
    name: 'Maurii',
    img: 'images/Maurii.svg',
    hair: 'black',
    facemask: 'green',
    accessories: 'glasses',
    vaccinated: 'no',
    other: 'redwood'
  },
  {
    name: 'Jennifer',
    img: 'images/Jennifer.svg',
    hair: 'bald',
    facemask: [],
    accessories: 'glasses',
    vaccinated: 'yes',
    other: 'regular'
  },
  {
    name: 'Jens',
    img: 'images/Jens.svg',
    hair: 'brown',
    facemask: 'red',
    accessories: 'glasses',
    vaccinated: 'no',
    other: 'graphql'
  },  
  {
    name: 'Mimmi',
    img: 'images/Mimmi.svg',
    hair: 'black',
    facemask: 'blue',
    accessories: 'shades',
    vaccinated: 'no',
    other: 'gatsby'
  },
  {
    name: 'Svante',
    img: 'images/Svante.svg',
    hair: 'brown',
    facemask: 'black',
    accessories: 'shades',
    vaccinated: 'no',
    other: 'gatsby'
  },
  {
    name: 'Terese',
    img: 'images/terese.svg',
    hair: 'white',
    facemask: 'black',
    accessories: 'glasses',
    vaccinated: 'no',
    other: 'redwood'
  },
  {
    name: 'Nabeel',
    img: 'images/Nabeel.svg',
    hair: 'blonde',
    facemask: 'red',
    accessories: 'glasses',
    vaccinated: 'no',
    other: 'react'
  },
  {
    name: 'Jessica',
    img: 'images/Jessica.svg',
    hair: 'white',
    facemask: [],
    accessories: 'a beanie',
    vaccinated: 'yes',
    other: 'regular'
  },
  {
    name: 'Nadia',
    img: 'images/Nadia.svg',
    hair: 'black',
    facemask: 'green',
    accessories: [],
    vaccinated: 'no',
    other: 'regular'
  }, 
  {
    name: 'Rijad',
    img: 'images/Rijad.svg',
    hair: 'bald',
    facemask: 'white',
    accessories: 'glasses',
    vaccinated: 'no',
    other: 'vue'
  },
  {
    name: 'Savannah',
    img: 'images/savannah.svg',
    hair: 'blonde',
    facemask: 'white',
    accessories: 'glasses',
    vaccinated: 'no',
    other: 'regular'
  },
  {
    name: 'Poya',
    img: 'images/Poya.svg',
    hair: 'black',
    facemask: 'blue',
    accessories: [],
    vaccinated: 'no',
    other: 'gatsby'
  },
  {
    name: 'Simon',
    img: 'images/Simon.svg',
    hair: 'bald',
    facemask: 'green',
    accessories: 'a beanie',
    vaccinated: 'no',
    other: 'react'
  },
  {
    name: 'Sofie',
    img: 'images/Sofie.svg',
    hair: 'blonde',
    facemask: [],
    accessories: 'shades',
    vaccinated: 'yes',
    other: 'redwood'
  }, 
  {
    name: 'Mathilda',
    img: 'images/mathilda.svg',
    hair: 'blonde',
    facemask: [],
    accessories: [],
    vaccinated: 'yes',
    other: 'react'
  }, 
  {
    name: 'Joanna',
    img: 'images/Joanna.svg',
    hair: 'brown',
    facemask: 'black',
    accessories: 'a beanie',
    vaccinated: 'no',
    other: 'vue'
  } 
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let numberOfGuesses
let totalSeconds = 0

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
}

// timer 
const timer = (restart) => {
  if (restart) {
    totalSeconds = 0;
  } else {
    totalSeconds++
  }

  let minutes = Math.floor(totalSeconds / 60)
  let seconds = totalSeconds - (minutes * 60)
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  timerTick.innerHTML = `<p>Time: ${minutes}:${seconds}</p>`
}

// stop the timer and restart the timer with 0 seconds
const stopTimer = () => {
  let setTimer = setInterval(timer, 1000)
  clearInterval(setTimer)
  timer('restart')
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  selectQuestion()
  winOrLose.style.display = "none"
  board.style.display = "flex"
  numberOfGuesses = 0;
  questionCounter.innerHTML = `<p class="guesses">GUESSES: ${numberOfGuesses}</p>`
  stopTimer()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
 

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  if (category === 'hair' || category === 'facemask') {
    keep = value === secret[category];
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value);
  }
  // Then invoke filterCharacters, 
  // we should call filterCharacters function with proper argument keep
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category].includes(value)
      )
      alert(
        `Yes, the person is has a ${value} shirt! Keep all people that have ${value} shirt`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person does not have a ${value} shirt! Remove all people that have a ${value} shirt`
      )
    }
  } else if (category === 'hair') { //for other categories: hair
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, the person doesnt have ${value} hair! Remove all people with ${value} hair`
      )
    }
  } else if (category === 'vaccinated') { //for other categories: hair
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(
        `Yes, the person is vaccinated! Keep all people that are vaccinated`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, the person is not vaccinated! Remove all people that are not vaccinated`
      )
    }
  } else { 
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(
        `Yes, the person has a ${value} mask! Keep all people who have ${value} masks`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, the person does not have a ${value} mask! Remove all people who do not have a ${value} mask`
      )
    }
  } 
  // Invoke a function to redraw the board with the remaining people.
  generateBoard(keep)
  numberOfGuesses++
  questionCounter.innerHTML = `<p>GUESSES MADE: ${numberOfGuesses}</p>`
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  let playerGuess = confirm(`Do you want to guess on ${personToConfirm}?`) // true or false
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuess) {
    checkMyGuess(personToConfirm)
  } else {
    alert("You can continue to guess!")
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name

  if (personToConfirm === secret.name) {
    winOrLoseText.innerHTML = `You are the dopest! You guessed on ${personToConfirm} and it was correct! You did it in only ${numberOfGuesses} questions.
    <audio autoplay muted>
    <source src="/code/sounds/wingame.mp3" type="audio/mp3">
    Your browser does not support the audio element.
    </audio>`
  } else {
    winOrLoseText.innerHTML = `Some you win, some you lose man. Unfortunately it's not ${personToConfirm}. The correct answer is ${secret.name}!
    <audio autoplay muted>
    <source src="/code/sounds/perdida.mp3" type="audio/mp3">
    Your browser does not support the audio element.
    </audio>`

    // 2. Set a Message to show in the win or lose section accordingly
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'

}

// Invokes the start function when website is loaded/to start a new game
start()
setInterval(timer, 1000);

// All the event listeners
restartButton.addEventListener('click', start, setInterval)
questions.addEventListener('change', selectQuestion)
findOut.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)
