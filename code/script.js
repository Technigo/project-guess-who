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
    name: 'Quokka',
    img: 'images/quokka.jpg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  // {
  //   name: '',
  //   img: '',
  //   color: '',
  //   animalType: '',
  //   numberOfLegs: '',
  //   livesInWater: true,
  //   livesInJungle: false,
  //   isAmamal: true,
  // },
  {
    name: 'Leopard',
    img: 'images/leopard.jpg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Katt',
    img: 'images/kitten.jpg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Björn',
    img: 'images/bear.jpg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Lamm',
    img: 'images/lamb.jpg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Hök',
    img: 'images/hawk.jpg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Elefant',
    img: 'images/elephant.jpg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Kalv',
    img: 'images/cow.jpg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Orm',
    img: 'images/snake.jpg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Älg',
    img: 'images/moose.jpg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Anka',
    img: 'images/duck.jpg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Häst',
    img: 'images/horse.jpg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Giraff',
    img: 'images/giraffe.jpg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Gris',
    img: 'images/pig.jpg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Apa',
    img: 'images/monkey.jpg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Räv',
    img: 'images/fox.jpg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Igelkott',
    img: 'images/hedgehog.jpg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Tvättbjörn',
    img: 'images/racoon.jpg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Gås',
    img: 'images/goose.jpg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Koala',
    img: 'images/koala.jpg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Tiger',
    img: 'images/tiger.jpg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Bäver',
    img: 'images/beaver.jpg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Groda',
    img: 'images/frog.jpg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Hund',
    img: 'images/puppy.png',
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
        <img class="animal-img" src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Gissa på ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Gissa</button>
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
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
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
      category
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: 'smoker',
      value: true, 
      category
    }
  }
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
  if (confirm("Är du säker?")) {
    checkMyGuess(myGuess)
  } else {
    alert("Okej, försök igen!")
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (myGuess) => {
  if (myGuess === secret.name) {
    winOrLoseText.innerHTML = `${myGuess} är rätt, du vann!`
  } else {
    winOrLoseText.innerHTML = `${myGuess} är fel, game over!`
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