// All the DOM selectors stored as short variables
const asideRules =document.getElementById('aside-rules');
const asideGame =document.getElementById('aside-game');
const greetingText = document.getElementById('greeting-text');
const greetingForm = document.getElementById('form-wrapper');
const inputFromUser = document.getElementById('input');
const player = document.getElementById('player-name');
const welcomeBoard = document.getElementById('welcome-section');
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const filterButton = document.getElementById('filter');
const winOrLooseBoard = document.getElementById('winOrLose');
const winOrLooseText = document.getElementById('winOrLoseText');
const playAgainButton = document.getElementById('playAgain');
const round = document.getElementById('rounds-number');
const timer = document.getElementById('timer');
const looseSound = document.getElementById('loose-sound');
const alertSound = document.getElementById('alert-sound');
const defaultChoice = document.getElementById('default');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    hairStyle: 'hidden',
    eyeColor: 'hidden',
    mouth: 'open',
    glasses: true,
    hat: true,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    hairStyle: 'hidden',
    eyeColor: 'blue',
    mouth: 'open',
    glasses: false,
    hat: true,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    hairStyle: 'hidden',
    eyeColor: 'blue',
    mouth: 'open',
    glasses: false,
    hat: true,
    earrings: false,
    necklace: false,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    hairStyle: 'short',
    eyeColor: 'brown',
    mouth: 'open',
    glasses: false,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    hairStyle: 'short',
    eyeColor: 'green',
    mouth: 'open',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    hairStyle: 'short',
    eyeColor: 'green',
    mouth: 'closed',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    hairStyle: 'short',
    eyeColor: 'hidden',
    mouth: 'closed',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: true,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    hairStyle: 'bun',
    eyeColor: 'hidden',
    mouth: 'open',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    hairStyle: 'short',
    eyeColor: 'green',
    mouth: 'open',
    glasses: true,
    hat: false,
    earrings: true,
    necklace: true,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    hairStyle: 'bob',
    eyeColor: 'hidden',
    mouth: 'closed',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    hairStyle: 'hidden',
    eyeColor: 'blue',
    mouth: 'closed',
    glasses: true,
    hat: true,
    earrings: false,
    necklace: false,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    hairStyle: 'bob',
    eyeColor: 'green',
    mouth: 'open',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    hairStyle: 'hidden',
    eyeColor: 'green',
    mouth: 'closed',
    glasses: true,
    hat: true,
    earrings: false,
    necklace: false,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    hairStyle: 'bob',
    eyeColor: 'hidden',
    mouth: 'open',
    glasses: false,
    hat: true,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    hairStyle: 'bun',
    eyeColor: 'green',
    mouth: 'open',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    hairStyle: 'hidden',
    eyeColor: 'blue',
    mouth: 'closed',
    glasses: false,
    hat: true,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    hairStyle: 'bob',
    eyeColor: 'blue',
    mouth: 'open',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    hairStyle: 'bun',
    eyeColor: 'brown',
    mouth: 'open',
    glasses: true,
    hat: false,
    earrings: true,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    hairStyle: 'short',
    eyeColor: 'green',
    mouth: 'open',
    glasses: true,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    hairStyle: 'hidden',
    eyeColor: 'hidden',
    mouth: 'closed',
    glasses: true,
    hat: true,
    earrings: false,
    necklace: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    hairStyle: 'short',
    eyeColor: 'brown',
    mouth: 'open',
    glasses: false,
    hat: false,
    earrings: true,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    hairStyle: 'short',
    eyeColor: 'green',
    mouth: 'open',
    glasses: false,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    hairStyle: 'short',
    mouth: 'closed',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    earrings: false,
    necklace: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    hairStyle: 'braids',
    eyeColor: 'brown',
    mouth: 'open',
    glasses: true,
    hat: true,
    earrings: false,
    necklace: false,
    smoker: false,
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let roundNumber = 0;
let playerName;

//Global variables: timer
let seconds = 0;
let minutes = 0;
let displaySeconds = 0;
let displayMinutes = 0;

const gameTimer = () => {
  seconds++;
  if (seconds / 60 === 1){
    seconds = 0;
    minutes++;
  }
  if(seconds < 10) {
    displaySeconds = `0${seconds}`
  } else{
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = `0${minutes}`
  } else {
    displayMinutes = minutes;
  }
  timer.innerHTML = `${displayMinutes}:${displaySeconds}`;
}
const resetGameTimer = () =>{
  seconds = 0;
  minutes = 0;
}
//Welcome conversation functions

const showStartButton = (userInput) => {
  greetingText.innerHTML = `
  Welcome ${userInput}! Are you ready to play?`;
  greetingForm.innerHTML = `
  <button id="start-game" type="button" class="welcome-button">Start!</button>
  ` 
  const startGameButton = document.getElementById('start-game');
  startGameButton.addEventListener('click', () => {
    welcomeBoard.classList.add('hidden');
    asideRules.classList.add('hidden');
    asideGame.classList.add('shown')
    player.innerHTML = `${userInput}`;
    start();
  });
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
const updateTracker = () => {
  round.innerText = `${roundNumber}`
}
// This function starts (and restarts) the game
const start = () => {
  roundNumber = 0;
  updateTracker();
  resetGameTimer();
  questions.selectedIndex = defaultChoice;
  charactersInPlay = CHARACTERS;
  board.classList.add('shown');
  generateBoard();
  setSecret();
}

//This function creates an object currentQuestion from a drop down selector
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const valueOfTheQuestion = questions.value;
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: valueOfTheQuestion,
      category: category,
    }
  } else if (category === 'hairstyle') {
    currentQuestion = {
      attribute: 'hairStyle',
      value: valueOfTheQuestion,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: valueOfTheQuestion,
      category: category,
    }
  } else if (category === 'mouth') {
    currentQuestion = {
      attribute: 'mouth',
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
  return currentQuestion;
}
//  This function compares properties' values of secret object and currentQuestion object. 
//It is invoked when player clicks on 'Find Out' button.
const checkQuestion = () => {
  roundNumber++;
  updateTracker();
  const secretValue = secret[currentQuestion.attribute];
  if (secretValue === currentQuestion.value) {
    filterCharacters(true, currentQuestion.category)
  } else {
    filterCharacters(false, currentQuestion.category)
  }
}
//This function filters the characters based on the value of their choice.
//It also alerts the player of whether their choice was right/wrong
const filterCharacters = (keep, group) => {
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}!`
      );
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}!`
      );
    }
  } else if (group === 'hairstyle') {
    if (keep) {
      if (currentQuestion.value === 'braids') {
        alert(
          `Yes, the person has ${currentQuestion.value}! Keep all that have ${currentQuestion.value}!`
        );
      } else if (currentQuestion.value === 'bun') {
        alert(
          `Yes, the person has ${currentQuestion.value} hairdo! Keep all that have ${currentQuestion.value} hairdo!`
        );
      } else {
        alert(
          `Yes, the person has ${currentQuestion.value} haircut! Keep all that have ${currentQuestion.value} haircut!`
        );
      }
    } else {
      if (currentQuestion.value === 'braids') {
        alert(
          `No, the person does not have ${currentQuestion.value}! Remove all that have ${currentQuestion.value}!`
        );
      } else if (currentQuestion.value === 'bun') {
        alert(
          `No, the person does not have ${currentQuestion.value} hairdo! Remove all that have ${currentQuestion.value} hairdo!`
        );
      } else {
        alert(
          `No, the person does not have ${currentQuestion.value} haircut! Remove all that have ${currentQuestion.value} haircut!`
        );
      }
    }
  } else if (group === 'mouth') {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} mouth! Keep all that have ${currentQuestion.value} mouth!`
      );
    } else {
      alert(
        `No, the person does not have ${currentQuestion.value} mouth! Remove all that have ${currentQuestion.value} mouth!`
      );
    }
  } else if (group === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} hair! Keep all that have ${currentQuestion.value} hair!`
      );
    } else {
      alert(
        `No, the person does not have ${currentQuestion.value} hair! Remove all that have ${currentQuestion.value} hair!`
      );
    }
  } else if (group === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${currentQuestion.attribute}! Keep all that are ${currentQuestion.attribute}s!`
      );
    } else {
      alert(
        `No, the person is not a ${currentQuestion.attribute}! Remove all that are not ${currentQuestion.attribute}s!`
      );
    }
  } else {
    if (keep) {
      alert(
        `"Yes, the person has ${currentQuestion.value} eyes! Keep all persons with ${currentQuestion.value} eyes"`
      );
    } else {
      alert(
        `No, the person doesnt have ${currentQuestion.value} eyes! Remove all persons with ${currentQuestion.value} eyes"`
      )
    }
  }
  if (keep) {
    charactersInPlay = charactersInPlay.filter(person => person[currentQuestion.attribute] === currentQuestion.value)
  } else { charactersInPlay = charactersInPlay.filter(person => person[currentQuestion.attribute] !== currentQuestion.value) }
  generateBoard()
}

//Guess function allows the player to check the guess and secret person
const guess = (suspect) => {
  console.log(suspect);
  const userGuess = suspect;
  playAlerSound()
  if (confirm(`Are you sure you want to try ${userGuess}?`)) {
    checkMyGuess(userGuess);
  }
}
//This function removes the board and shows win/loose text
const showWinSection = () => {
  winOrLooseBoard.classList.add('shown');
  board.innerHTML = '';
}
//Sound effects functions
const playWinSound = () => {
  const winSound = document.getElementById('win-sound');
  winSound.play()
}
const playLooseSound = () => {
  looseSound.play()
}
const playAlerSound = () => {
  alertSound.play()
}
//This function invokes showWinSection function and shows the message depending on whether the guess was correct
const checkMyGuess = (userGuess) => {
  showWinSection()
  if (userGuess === secret.name) {
    playWinSound()
    if (roundNumber === 1) {
      winOrLooseText.innerText =
        `Congratulations! It is ${userGuess}! 
        It took you just ${roundNumber} question to win!
        The game took ${minutes}:${seconds}.`;
    } else {
      winOrLooseText.innerText =
        `Congratulations! It is ${userGuess}! 
        You won with ${roundNumber} questions!
        The game took ${minutes}m:${seconds}s.`;
    }
  } else {
    playLooseSound()
    winOrLooseText.innerText = 
    `Sorry, it is not ${userGuess}! Do you want to play again?`
  }
}

// Invokes the start function when website is loaded
setInterval(gameTimer,1000);

// All the event listeners
greetingForm.addEventListener('submit', (event)=> {
  event.preventDefault();
  const userName = inputFromUser.value;
  showStartButton(userName);
})

restartButton.addEventListener('click', () =>{ 
  // resetGameTimer();
  start();
  })
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => {
  winOrLooseBoard.classList.remove('shown');
  // resetGameTimer();
  start();
})
