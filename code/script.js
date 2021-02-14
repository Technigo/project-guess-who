// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgain = document.getElementById('playAgain')
const filterBtn = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const deafultQuestion = document.getElementById('default')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    woman: false,
    man: true,
    glasses: true,
    hat: true,
    greenclothes: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    woman: false,
    man: true,
    glasses: false,
    hat: true,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    woman: false,
    man: true,
    glasses: false,
    hat: true,
    greenclothes: false,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    woman: false,
    man: true,
    glasses: false,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    woman: false,
    man: true,
    glasses: true,
    hat: false,
    greenclothes: true,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    woman: false,
    man: true,
    glasses: true,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    woman: false,
    man: true,
    glasses: true,
    hat: false,
    greenclothes: true,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    woman: true,
    man: false,
    glasses: true,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    woman: true,
    man: false,
    glasses: true,
    hat: false,
    greenclothes: true,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    woman: true,
    man: false,
    glasses: true,
    hat: false,
    greenclothes: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    woman: false,
    man: true,
    glasses: true,
    hat: true,
    greenclothes: false,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    woman: true,
    man: false,
    glasses: true,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    woman: false,
    man: true,
    glasses: true,
    hat: true,
    greenclothes: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    woman: true,
    man: false,
    glasses: false,
    hat: true,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    woman: true,
    man: false,
    glasses: true,
    hat: false,
    greenclothes: true,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    woman: false,
    man: true,
    glasses: false,
    hat: true,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    woman: true,
    man: false,
    glasses: true,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    woman: true,
    man: false,
    glasses: true,
    hat: false,
    greenclothes: true,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    woman: false,
    man: true,
    glasses: true,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    woman: false,
    man: true,
    glasses: true,
    hat: true,
    greenclothes: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    woman: true,
    man: false,
    glasses: false,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    woman: false,
    man: true,
    glasses: false,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    woman: false,
    man: true,
    glasses: false,
    hat: false,
    greenclothes: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    woman: true,
    man: false,
    glasses: true,
    hat: true,
    greenclothes: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay
let guessCount = 0
let wrongGuess = 0 

//Functions for Audio
const playRightAnswer = () => {
  const soundOne = new Audio('green.wav')
  soundOne.play()
}

const playWrongAnser = () => {
  const soundTwo = new Audio ('red.wav')
  soundTwo.play()
}

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

//Function for adding number of guesses in html
const showGuessCount = () => {
  document.getElementById('guess-number').innerText = `${guessCount}`
}

// Asks for username when broswer starts
const askUserName = () => {
  let userName = sessionStorage.getItem('username') 

  if (userName === null) {
    swal('Hello friend, what is your name?', {
      content: 'input', 
    }) 
    .then ((userName) => {
      swal(
        `Hello ${userName}! Welcome to play guess who game 👾 🤖 🕹 You can only guess wrong 5️⃣ times. After that you loose and need to restart the game!`    
      )
    })
  }  
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  questions.selectedIndex = deafultQuestion //Making the options reload and start from select again

  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  document.querySelector('.timer').style.display = 'flex'

  guessCount = 0
  seconds = 0 
  minutes = 0
  generateBoard()
  setSecret()
  showGuessCount()
}

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  const value = questions.value
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value,
      category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category,
    } 
  } else if (category === 'gender') {
    currentQuestion = {
      attribute: value,
      value: true,
      category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true,
      category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category,
    }
  }
}

const checkQuestion = () => {
  guessCount++ 
  showGuessCount()
  const secretValue = secret[currentQuestion.attribute];
  if(secretValue === currentQuestion.value) {
    filterCharacters(true, currentQuestion.category)
    playRightAnswer()
  } else {
    filterCharacters(false, currentQuestion.category)
    playWrongAnser()
  } 
}

// It'll filter the characters array and redraw the game board. Alert for the user.
const filterCharacters = (keep, group) => {
   if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`
      )
    } else {
      wrongGuess++
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
      )
    }
  } else if (group === 'gender') {
    if (keep) {
      alert(
        `Yes, the person is a ${currentQuestion.attribute}. Keeping all that are ${currentQuestion.attribute}`      )
    } else {
      alert(
        `No, the person is not a ${currentQuestion.attribute}. Removing all that are ${currentQuestion.attribute}`    
      )
    }
  } else if (group === 'other') {
    if (keep) {
      alert( 
        `Yes, the person is a ${currentQuestion.attribute}! Keeping all that wears ${currentQuestion.attribute}`    
        )
    } else {
      wrongGuess++
      alert(
        `No, the person is not a ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
      )
    }
  } else if (group==='hair color') {
    if (keep) {
      alert( 
        `Yes, the person has ${currentQuestion.value} hair! Keeping all people with ${currentQuestion.value} hair`    
        )
    } else {
      wrongGuess++
      alert( 
        `No, the person dosen't have ${currentQuestion.value} hair! Removing all people with ${currentQuestion.value} hair`    
        )
    }
  } else if (group==='eye color') {
    if (keep) {
      alert( 
        `Yes, the person has ${currentQuestion.value} eyes! Keeping all people with ${currentQuestion.value} eyes`    
        )
    } else {
      wrongGuess++
      alert( 
        `No, the person dosen't have ${currentQuestion.value} eyes! Removing all people with ${currentQuestion.value} eyes`    
        )
    }
  }
  // Filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value) 
  }

  generateBoard()
  ammountQuestions() 
}

//Rule for how many wrong gussess, max 5
 const ammountQuestions = () => {
  if (wrongGuess >= 5) {
    swal(`❌❌❌ GAME OVER ❌❌❌! You have now guessed wrong ${wrongGuess} times. Restart the game again!`)
    wrongGuess = 0
    start()
  } else if (parseInt(filterCharacters) != NaN && filterCharacters != ''){  
      alert(`Number of wrong guesses: ${wrongGuess}/5!`) 
  }  
}   

// Timer starts here 
const timeCounter = () => {
  seconds++ 
  if(seconds/60 === 1) {
    seconds = 0
    minutes++
  }

  if(seconds < 10){
    displaySeconds = `0${seconds.toString()}`
  } else {
    displaySeconds = seconds
  }

  if (minutes < 10){
    displayMinutes = `0${minutes.toString()}`
  } else {
    displayMinutes = minutes
  }
  document.getElementById('display').innerHTML = `🕓 ${displayMinutes}:${displaySeconds}`
}

//Takes one second to change, like a watch 
const timeStarter = () => {
  interval = window.setInterval(timeCounter, 1000)
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const playerWantstoPlay = confirm(`Are you shure you want to do guess for ${suspect}?`)
   if (playerWantstoPlay) {
     checkMyGuess(suspect)
   } else {
     alert(`Okey, keep guessing!`)
   }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name){
    winOrLoseText.innerHTML = `
      Yes, it is right! The person is ${secret.name}. Your game time was ${minutes}:${seconds} & it took you ${guessCount} guesses. Great job 🎉.
    `
    document.querySelector('.win-or-lose-wrapper').style.background = 'rgb(59, 134, 59)'
    document.querySelector('.timer').style.display = 'none'
    playRightAnswer()
  } else {
    winOrLoseText.innerHTML = `
    Noooo, it is not right! The person is not ${suspect}, it was ${secret.name}! Your game time was ${minutes}:${seconds} and it took you ${guessCount} guesses.
    `
    document.querySelector('.win-or-lose-wrapper').style.background = 'rgb(211, 76, 76)'
    document.querySelector('.timer').style.display = 'none'
    playWrongAnser()
  }

   winOrLose.style.display = 'flex'
   board.style.display = 'none'
  }

// Invokes the start function when website is loaded & timer
askUserName()
start()
timeStarter()
// All the event listeners
questions.addEventListener('change', selectQuestion)
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', start)
filterBtn.addEventListener('click', checkQuestion)
