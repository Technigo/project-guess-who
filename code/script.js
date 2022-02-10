// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const gameOverWrapper = document.getElementById('winOrLose');
const gameOverText = document.getElementById('winOrLoseText');
const playAgainButton = document.getElementById('playAgain');
const previousQuestion = document.getElementById('previous-question');
const questionCountDisplay = document.getElementById('question-count');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let maxQuestions = 4;
let questionCounter = 0;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((character) => {
    board.innerHTML += `
    <div class="card">
    <p>${character.name}</p>
    <img src=${character.img} alt=${character.name}>
    <div class="guess">
    <span>Guess on ${character.name}?</span>
    <button class="filled-button small" onclick="guess('${character.name}')">Guess</button>
    </div>
    </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setWinningCharacter = () => {
  winningCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Start (and restart) the game
const start = () => {
  gameOverWrapper.style.display = "none";
  board.style.display = "flex";
  questionCounter = 0
  charactersInPlay = CHARACTERS
  generateBoard();
  setWinningCharacter();
  questionCountDisplay.innerText = `Questions remaining: ${maxQuestions - questionCounter}`;
  previousQuestion.innerHTML = '';
  questions.disabled = false;
  findOutButton.disabled = true;
}

// Set currentQuestion object selecting from dropdown
const selectQuestion = () => {
  findOutButton.disabled = false;
  const questionCategory = questions.options[questions.selectedIndex].parentNode.label;
  const questionValue = questions.options[questions.selectedIndex].value;
  currentQuestion = {
    category: questionCategory,
    value: questionValue,
  }
}

// Invoked when 'Find Out' button is clicked
const checkQuestion = () => {
  questionCounter++;
  findOutButton.disabled = true;
  questionCountDisplay.innerText = `Questions remaining: ${maxQuestions - questionCounter}
    `;
  if (questionCounter === maxQuestions) {
    questionCountDisplay.innerText = `No questions remaining. Time to make a guess!`;
    findOutButton.disabled = true;
  }

  // status will be boolean - true or false
  let status = winningCharacter[currentQuestion.category].includes(currentQuestion.value)
  alertMessage(status);   
  filterCharacters(status);

  // display question asked
  if (currentQuestion.category === "hair" || currentQuestion.category === "eyes") {
    previousQuestion.innerHTML += `
      <p>${currentQuestion.value} ${currentQuestion.category}</p>  
    `;
  } else {
    previousQuestion.innerHTML += `
      <p>${currentQuestion.value}</p>  
    `;
  }
}

// function for alerting the player
// TO DO create alert messages for the different attributes to avoid weird grammer
const alertMessage = (correct) => {
  if (correct) {
    alert (`Correct!`)
  } else {
    alert (`Nope, guess again!`)
  }
}

// Invoked after question is checked
const filterCharacters = (keep) => {
  if (keep) {
    charactersInPlay = charactersInPlay.filter((character) => { 
      return character[currentQuestion.category].includes(currentQuestion.value);
    });
  } else {
    charactersInPlay = charactersInPlay.filter((character) => { 
      return !character[currentQuestion.category].includes(currentQuestion.value);
    });
  }
  generateBoard()
}


const guess = (characterName) => {
  let playerGuess = confirm(`Are you sure you want to guess that it's ${characterName}?`);
  if (playerGuess) {
    checkMyGuess(characterName);
  } 
  //else nothing
}

// If confirmed, check function is invoked
const checkMyGuess = (characterName) => {
  if (characterName === winningCharacter.name) {
    gameOverWrapper.style.display = "flex"
    gameOverText.innerText = `
    Yes, ${characterName} was right! Congratulations!
  `
  }
  else {
    gameOverWrapper.style.display = "flex";
    board.style.display = "none";
    gameOverText.innerText = `
    Sorry, it wasn't ${characterName}. ${winningCharacter.name} is the correct answer. Better luck next time!
  `;
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
playAgainButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);