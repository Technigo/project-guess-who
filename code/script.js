// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const option = document.getElementById('option')
const filter = document.getElementById('filter')
const restartButton = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('play-again')
const feedback = document.getElementById('feedback')
const feedbackSection = document.getElementById('feedback-section')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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
  console.log("secret", secret)
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  console.log(`Eventlister working`)
  const category = questions.options[questions.selectedIndex].parentNode.label
  const optionValue = questions.options[questions.selectedIndex].value
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: optionValue,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: optionValue,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: optionValue,
      value: true, 
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: 'smoker',
      value: true, 
      category: category,
    }
  }
  console.log(`Category: ${category}, attribute: ${currentQuestion.attribute}, value: ${optionValue}`)
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  selectQuestion()
  const secretValue = secret[currentQuestion.attribute]
  console.log(secretValue)
  console.log(currentQuestion.value)
  if (secretValue === currentQuestion.value) {
    console.log(true)
    filterCharacters(true)
  } else {
    console.log(false)
    filterCharacters(false)
  }
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const group = currentQuestion.category
  const value = currentQuestion.value
  const attribute = currentQuestion.attribute
  let message = ""
  if (group === 'accessories') {
    if (keep) {
      message = `<strong>Yes</strong>,<br> the person wears ${attribute}! <br> Kept all that wears ${attribute}.`
    } else {
      message = `strong>No, the person doesn't wear ${attribute}! <br> Removed all that wears ${attribute}...`
    }
  } else if (group === 'hair color') {
      if (keep) {
        message = `<strong>Yes</strong>,<br> the person has ${value} hair! <br> Kept all persons with ${value} hair.`
      } else {
        message = `<strong>No</strong>,<br> the person doesn't have ${value} hair! <br> Removed all persons with ${value} hair...`
      }
  } else if (group === 'eye color') {
      if (keep) {
        message = `<strong>Yes</strong>,<br> the person has ${value} eyes! <br> Kept all persons with ${value} eyes.`
      } else {
        message = `<strong>No</strong>,<br> the person does not have ${value} eyes! <br> Removed all persons with ${value} eyes...`
      }
  } else if (group === 'other') {
    if (keep) {
      message = `<strong>Yes</strong>,<br> this person has a smoking habit! <br> Kept all persons with a smoking habit.`
    } else {
      message = `<strong>No</strong>,<br> this person does not have a smoking habit! <br> Removed all persons with a smoking habit...`
    }
  }
  //alert(message)
  feedbackMessage(message)
  charactersInPlay = charactersInPlay.filter((person) => keep? person[attribute] === value:person[attribute] !== value)
  generateBoard()
}

const feedbackMessage = (message) => {
  feedbackSection.classList.add("visible")
  feedback.innerHTML = `${message}`
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  let myGuess = suspect
  if (confirm("Are you sure?")) {
    checkMyGuess(myGuess)
  } else {
    alert("Okay, keep trying!")
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (myGuess) => {
  if (myGuess === secret.name) {
    winOrLoseText.innerHTML = ` 
    ${myGuess} is correct, you won!
    `
  } else {
    winOrLoseText.innerHTML = ` 
    ${myGuess} is wrong, game over!
    `
  }
  board.innerHTML = ''
  winOrLose.classList.add("show")
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', () => {feedbackSection.classList.remove("visible"); start()})
filter.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', () => {winOrLose.classList.remove("show"); start()})