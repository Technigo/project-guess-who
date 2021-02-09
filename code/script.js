import { CHARACTERS } from "./scripts/characters.js";

// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')



// Global variables
let secret, currentQuestion, charactersInPlay

// Draw the game board
const generateBoard = () => {
  board.innerHTML = '';
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
    `;
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  generateBoard()
  setSecret()
  // What else should happen when we start the game?
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
  console.log(value)
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
    }
  } else if (category === 'eye color') {
      currentQuestion = {
        attribute: 'eyeColor',
        value: value,
        category: category,
      }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: 'glasses' | 'hat',
      value: true, 
      category: category,
    } 
  } else if (category === 'other') {
    currentQuestion = {
      attribute: 'smoker',
      value: true, 
      category: category,
    }
  checkQuestion(currentQuestion)
}
};

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = (currentQuestion) => {
  let keep;
  let userValue = currentQuestion.value;
  const keep = (currentQuestion.value === secret[currentQuestion.attribute])
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  filterCharacters(keep)
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep, currentQuestion) => {
  // Show the correct alert message for different categories
  if (currentQuestion.category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.value}! Keep all that wears ${currentQuestion.value}`
      )
        charactersInPlay = charactersInPlay.filter((person) => person['glasses' | 'hat'] === currentQuestion.value)
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.value}! Remove all that wears ${currentQuestion.value}`
      )
        charactersInPlay = charactersInPlay.filter((person) => person['glasses' | 'hat'] === currentQuestion.value)
    }
  } else if (currentQuestion.category === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person have ${currentQuestion.value}! Keep all that who have ${currentQuestion.value}`
      )
        charactersInPlay = charactersInPlay.filter((person) => person['hairColoe'] === currentQuestion.value)
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value}! Remove all that have ${currentQuestion.value}`
      )
        charactersInPlay = charactersInPlay.filter((person) => person['hairColor] !== currentQuestion.value)
    }
  } else if (currentQuestion.category === 'eyeColor') {
    if (keep) {
      alert(
        `Yes, the person have ${currentQuestion.value} eyes! Keep all have ${currentQuestion.value}`
      )
        charactersInPlay = charactersInPlay.filter((person) => person['eyeColor] === currentQuestion.value)
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} eyes! Remove all that have${currentQuestion.value}`
      )
        charactersInPlay = charactersInPlay.filter((person) => person['eyeColor] !== currentQuestion.value)
    }  
  } else if (currentQuestion.category === 'other') {
      if (keep){
        alert(
          `Yes, the person have ${currentQuestion.value}, but only at parties. Keep all that are ${currentQuestion.value}`
          )
          charactersInPlay = charactersInPlay.filter((person) => person['smokers'] === currentQuestion.value)
      } else {
        alert(
          `No, the person is not a ${currentQuestion.value}! Remove all that are ${currentQuestion.value}`
        )
          charactersInPlay = charactersInPlay.filter((person) => person['smokers] !== currentQuestion.value)
      } 
  }


  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
    const playerWantstoPlay = confirm(`So you're guessing on ${suspect}?`)
    if (playerWantstoPlay) {
    checkMyGuess(suspect)
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

  if (suspect === secret.name){
    winOrLoseText.innerHTML = `
    Yey! High Five! It was ${secret.name}
  } else {
    winOrLoseText.innerHTML = 
    Sorry! It is not ${suspect}
  }

    }
    winOrLose.style.display = 'flex'
    board.style.display = 'none'
}

// Invokes the start function when website is loaded

start()

// All the event listeners
questions.addEventListener('change', () => selectQuestion)
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', start)
filterBtn.addEventListener('click', checkQuestion)
