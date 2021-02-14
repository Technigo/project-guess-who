// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById("winOrLose")
const playAgainButton = document.getElementById("playAgain")

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
  console.log("secret person", secret)
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // when you click play again the winOrLose will not be displayed
  // call funcions to draw the board game and randonly select a secret person from CHARACTER array
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // These variable stores what category the question belongs to and its value.
  const category = questions.options[questions.selectedIndex].parentNode.label
  //console.log("categoty", category)
  value = questions.value
  //console.log("value", value)
  // currentQuestion stores what attribute we ask for, the value of the attribute and what category it belongs to of the question selected
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
    
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value, // this is the property of the booleans such as glasses and hat.
      value: true, // asking if this person wears a hat for exaple, so always true in the question.
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

// This function is invoked when you click 'Find Out'.
// Compare the currentQuestion with the secret person. Keep or remove characters based on that
const checkQuestion = () => {
  let keep 
  if (currentQuestion.attribute === 'hairColor' && currentQuestion.value === secret.hairColor) {
    keep = true
  } else if (currentQuestion.attribute === 'eyeColor' && currentQuestion.value === secret.eyeColor) {
    keep = true
  } else if (currentQuestion.attribute === 'glasses' && currentQuestion.value === secret.glasses) {
    keep = true
  } else if (currentQuestion.attribute === 'hat' && currentQuestion.value === secret.hat) {
    keep = true
  } else if (currentQuestion.attribute === 'smoker' && currentQuestion.value === secret.smoker) {
    keep = true
  } else {
    keep = false
  }
  console.log("keep", keep);
  // Invoke filterCharacters
  filterCharacters(keep)
}

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  let category = currentQuestion.category
  let attribute = currentQuestion.attribute
  let value =currentQuestion.value

  // Show the correct alert message for different categories
  console.log("current category", category);
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert (
        `Yes, the person is a ${attribute}! Keep all ${attribute}`
      )
    } else {
      alert (
        `No, the person is not ${attribute}! Remove all ${attribute}`
      )
    }
  } else if (category === 'hair color'){
    if (keep) {
      alert (
        `Yes, the person has ${value} hair! Keep all persons whit ${value} hair.`
      )
    } else {
      alert (
        `No, the person does not have ${value} hair! Remove all persons whit ${value} hair`
      )
    }
  } else {
    if (keep) {
      alert (
        `Yes, the person has ${value} eyes! Keep all persons whit ${value} eyes.`
        )
    } else {
      alert (
        `No, the person does not have ${value} eyes! Remove all persons whit ${value} eyes`
      )
    }
  }

  // filter to keep or remove based on the keep variable. 
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  // Invoke function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm (`Do you want to guess on ${suspect}?`) 
    if (confirmGuess === true) {
      console.log("suspect", suspect)
      //invoke checkMyGuess function when comfirming
      checkMyGuess(suspect)
    } else {
     console.log(false)
   }
  }

const checkMyGuess = (suspect) => {
  // Check if the suspect is the same as the secret person's name and show message (ternary operator)
  suspect === secret.name ? winOrLoseText.innerHTML = `You guessed on ${suspect} and it was correct!`: winOrLoseText.innerHTML = `No it's not ${suspect}. It was ${secret.name}!`
  // Show the win or lose section, hide the game board
  winOrLose.style.display = 'flex'

}

const playAgain = () => {
  winOrLose.style.display = 'none'
  start()
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
// select question using change elemnt, when selecting question the function is invoked
questions.addEventListener('change', selectQuestion)
// compare selected question with secret person attribute and value
findOutButton.addEventListener('click', checkQuestion)
// play again button
playAgainButton.addEventListener('click', playAgain)