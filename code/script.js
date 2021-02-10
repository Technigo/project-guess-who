// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLooseBoard = document.getElementById('winOrLose')
const winOrLooseText = document.getElementById('winOrLoseText')

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
let secret; 
let currentQuestion = undefined; 
let charactersInPlay = "";

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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard() // - I added this myself
  setSecret() // - I added this myself
}

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const valueOfTheQuestion = questions.value;
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: valueOfTheQuestion,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: valueOfTheQuestion,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: valueOfTheQuestion,
      value: true,
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: valueOfTheQuestion,
      value: true,
      category: category,
    }
  }
  return currentQuestion
}
// This function should be invoked when you click on 'Find Out'.
// Compare the currentQuestion with the secret person.
// See if we should keep or remove people based on that
// Then invoke filterCharacters
const checkQuestion = () => {
  const secretValue = secret[currentQuestion.attribute];
  if (secretValue === currentQuestion.value) {
    filterCharacters(true, currentQuestion.category)
  } else{
    filterCharacters(false, currentQuestion.category)
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep, group) => {
  // Show the correct alert message for different categories
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}!`
      )
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}!`
      )
    }
  } else if(group === 'hair color') {
      if (keep) {
        alert(
          `Yes, the person has ${currentQuestion.value} hair! Keep all that have ${currentQuestion.value} hair!`
        )
      } else{
        alert(
          `No, the person does not have ${currentQuestion.value} hair! Remove all that have ${currentQuestion.value} hair!`
        )
      }
  } else if (group === 'other') {
    if (keep) {
        alert(
          `Yes, the person is a ${currentQuestion.attribute}! Keep all that are ${currentQuestion.attribute}s!`
        )
    } else {
        alert (
          `No, the person is not a ${currentQuestion.attribute}! Remove all that are not ${currentQuestion.attribute}s!`
        )
    }
  } else {
    if (keep) {
      alert(
        `"Yes, the person has ${currentQuestion.value} eyes! Keep all persons with ${currentQuestion.value} eyes"`
      )
    } else {
      alert (
        `No, the person doesnt have ${currentQuestion.value} eyes! Remove all persons with ${currentQuestion.value} eyes"`
      )
      
    }
  }
if (keep){
  charactersInPlay = charactersInPlay.filter(person => person[currentQuestion.attribute] === currentQuestion.value)
} else {charactersInPlay = charactersInPlay.filter(person => person[currentQuestion.attribute] !== currentQuestion.value)}
generateBoard()
}



// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  console.log(suspect);
  const userGuess = suspect;
  if (confirm(`Are you sure you want to try ${userGuess}?`)) {
  checkMyGuess(userGuess);
} 
}

const showWinSection = () => {
  winOrLooseBoard.classList.add('shown'); 
}

const checkMyGuess = (userGuess) => {
  showWinSection()
  if (userGuess === secret.name) {
    winOrLooseText.innerText = `Congratulations! It is ${userGuess}!`
  } else {
    winOrLooseText.innerText = `Sorry, try again!`
  }
}
// If you confirm, this function is invoked
  
  // 1. Check if the suspect is the same as the secret person's name if (suspect = secret.name) {}
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
