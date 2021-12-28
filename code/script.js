// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const findOut = document.getElementById('filter')
const gameTimer = document.getElementById('timer')
const playAgain = document.getElementById('playAgain')
const questions = document.getElementById('questions')
const winOrLose = document.getElementById('winOrLose')
const restartButton = document.getElementById('restart')
const winOrLoseText = document.getElementById('winOrLoseText')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': true,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    'a hat': true,
    smoker: false,
    'face hair': true,
    jewelry: false
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    'a hat': true,
    smoker: true,
    'face hair': true,
    jewelry: false
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'blonde',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': true,
    jewelry: false
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: true
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'blonde',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: true
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': false,
    smoker: true,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    'a hat': true,
    smoker: true,
    'face hair': true,
    jewelry: false
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    'a hat': true,
    smoker: true,
    'face hair': true,
    jewelry: false
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    'a hat': true,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    'a hat': true,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: true
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'blonde',
    eyeColor: 'hidden',
    glasses: true,
    'a hat': true,
    smoker: false,
    'face hair': false,
    jewelry: true
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: true
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'blonde',
    eyeColor: 'green',
    glasses: false,
    'a hat': false,
    smoker: false,
    'face hair': false,
    jewelry: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    'a hat': false,
    smoker: false,
    'face hair': true,
    jewelry: false
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    'a hat': true,
    smoker: false,
    'face hair': false,
    jewelry: false
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

// Randomly select a person from the characters array
// and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}



  /* starts the game and
  uses all of the characters from the array
  (re)sets the board, guess panel and selection
  invoke the function to generate the board and
  the selection of a secret character */
const start = () => {
  charactersInPlay = CHARACTERS
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  questions.selectedIndex = '0'
  generateBoard()
  setSecret()
  startTimer()
}

  /* a function to reload the page
  invoked by the 'restart' and 'play again' button
  due to timer otherwise not resetting
  (ie i currently couldn't find a way) */
// function reload() {
//   window.location.reload();
//   return false;
// }

const startTimer = () => {
  time = Date.now()
  setInterval(() => {
    elapsedTime = Math.floor((Date.now() - time) / 1000)
    gameTimer.innerHTML = `${elapsedTime}`
  }, 1000)
}

  /* function to count guesses when clicking 'find out' button */
let guesses = 0;

function onClick() {
  guesses += 1;
  document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const guessCategory = questions.options[questions.selectedIndex].parentNode.label
  const guessValue = questions.value
  if (guessCategory === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: guessValue,
      category: guessCategory,
    }
  } else if (guessCategory === 'eye color') {
      currentQuestion = {
        attribute: 'eyeColor',
        value: guessValue,
        category: guessCategory,
      }
  } else if (guessCategory === 'accessories') {
      currentQuestion = {
        attribute: guessValue,
        value: true,
        category: guessCategory,
    }
  } else if (guessCategory === 'other') {
      currentQuestion = {
        attribute: guessValue,
        value: true,
        category: guessCategory,
      }
  }
}

  /* here we simply compare the selected values to
  the secret attribute whether it's true or false
  we pass the result along
  [...] */
const checkQuestion = () => {
  const isGuessCorrect = currentQuestion.value === secret[currentQuestion.attribute]
  filterCharacters(isGuessCorrect)
}

  /* [...]
  depending on outcome print output in an alert box and
  finally re-draw the board by keeping or removing characters */
const filterCharacters = (isGuessCorrect) => {
  const { attribute, value, category } = currentQuestion
    if (category === 'accessories') {
      if (isGuessCorrect) {
        alert(`✔ Yes, the person wears ${attribute}! Good guess.
🤖 Keeping those who wear ${attribute}.`)
      } else {
        alert(`❌ Nope, the person doesn't wear ${attribute}! Guess again.
🤖 Removing those who wear ${attribute}.`)
        }
    } else if (category === 'other') {
      if (isGuessCorrect) {
        alert(`✔ Yes, ${attribute} is the name of the game! Good guess.
🤖 Keeping those ones.`)
      } else {
        alert(`❌ Nope, ${attribute} isn't in the cards! Guess again.
🤖 Removing those ones.`)
        }
    } else if (category === 'hair color') {
      if (isGuessCorrect) {
        alert(`✔ Yes, the person has ${value} hair! Good guess.
🤖 Keeping every ${value} haired ones.`)
      } else {
        alert(`❌ Nope, the person doesn't have ${value} hair! Guess again.
🤖 Removing those with ${value} hair.`)
        }
    } else if (category === 'eye color') {
      if (isGuessCorrect) {
        alert(`✔ Yes, gaze into their ${value} eyes! Good guess.
🤖 Keeping the ${value} eyed ones.`)
      } else {
        alert(`❌ Nope, the person doesn't have ${value} eyes!
🤖 Removing everyone with ${value} eyes.`)
        }
    }
  if (isGuessCorrect) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  }
  else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  let cont = confirm(`You're about to guess on ${suspect}, do you want to do that?`)
  if (cont === true) {
    checkMyGuess(suspect)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `Blimey, it was <em>${suspect}</em>! Congratulations!`
  }
  else {
    winOrLoseText.innerHTML = `Bummer, it wasn't ${suspect}. It was <em>${secret.name}</em>!`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

start()

playAgain.addEventListener('click', () => {
  start()
})
restartButton.addEventListener('click', () => {
  start()
})
findOut.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)