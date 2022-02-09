// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter');
const guessCounter = document.getElementById('guess-counter');
const timeCounter = document.getElementById('time-counter');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Angel',
    img: 'images/angel.png',
    hair: 'brown',
    eyes: 'hidden',
    accessories: ['wings', 'hat'],
    other: ['dead']
  },
  {
    name: 'Angry bird',
    img: 'images/bird.png',
    hair: 'red',
    eyes: 'black',
    accessories: ['wings'],
    other: ['animal']
  },
  {
    name: 'Chicken',
    img: 'images/cute.png',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['wings'],
    other: ['animal']
  },
  {
    name: 'Liemannen',
    img: 'images/liemannen.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['weapon'],
    other: ['dead']
  },
  {
    name: 'Super Mario',
    img: 'images/mario.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Mumie',
    img: 'images/mumie.png',
    hair: 'hidden',
    eyes: 'red',
    accessories: [],
    other: ['dead']
  },
  {
    name: 'Mushu',
    img: 'images/mushu.png',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['wings'],
    other: ['animal']
  },
  {
    name: 'Ninja',
    img: 'images/ninja.png',
    hair: 'hidden',
    eyes: 'black',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Peter Pan',
    img: 'images/peterpan.png',
    hair: 'hidden',
    eyes: 'black',
    accessories: ['hat', 'weapon'],
    other: []
  },
  {
    name: 'Gandalf',
    img: 'images/wizard.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['hat', 'weapon'],
    other: ['beard']
  },
  {
    name: 'Spirited Away',
    img: 'images/spiritedaway.png',
    hair: 'hidden',
    eyes: 'black',
    accessories: [],
    other: ['dead']
  },
  {
    name: 'Minion',
    img: 'images/minion.png',
    hair: 'black',
    eyes: 'white',
    accessories: [],
    other: []
  },
  {
    name: 'Customer Service',
    img: 'images/customerservice.png',
    hair: 'brown',
    eyes: 'hidden',
    accessories: ['headset', 'glasses'],
    other: []
  },
  {
    name: 'Aladdin',
    img: 'images/aladdin.png',
    hair: 'black',
    eyes: 'black',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Spiderman',
    img: 'images/spiderman.png',
    hair: 'hidden',
    eyes: 'white',
    accessories: [],
    other: []
  },
  {
    name: 'Shejk',
    img: 'images/shejk.png',
    hair: 'hidden',
    eyes: 'brown',
    accessories: ['hat'],
    other: ['beard']
  },
  {
    name: 'Pocahontas',
    img: 'images/pocahontas.png',
    hair: 'black',
    eyes: 'black',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Artist',
    img: 'images/artist.png',
    hair: 'blue',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['paint']
  },
]

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img style="width: 100px; height: 100px;" src=${person.img} alt=${person.name}>
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
  console.log(secret)
}

//Displays elapsed time
let addSeconds = 0;
const renderTime = () => {
  addSeconds++;
  let minutes = Math.floor(addSeconds / 60).toString().padStart(2, '0');;
  let seconds = (addSeconds % 60).toString().padStart(2, '0');
  console.log(addSeconds)
  timeCounter.innerHTML = '';

  timeCounter.innerHTML += `
  <p>Elapsed time: ${minutes} : ${seconds}</p>
  `
}

//Set displaying of time to increase with 1s intervals, invoked at start and restart
let setTimer;
const startTimer = () => {
  setTimer = setInterval(renderTime, 1000);
}

//Stops timer, invoked in guess function
const stopTimer = () => {
  clearInterval(setTimer);
  //enabling to check if stopTimer function has been called later on in restart function by adding property
  stopTimer.called = true;
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  selectQuestion();
  console.log(secret)
  console.log(secret.hair)
  console.log(secret.accessories)
  startTimer();
}

const restart = () => {
  if (stopTimer.called === true) {
    //initialize counters to start from zero again
    addSeconds = 0;
    count = 0;
    guessCounter.innerHTML = `<p>Guess counter: 0</p>`;
    start();
    //Important to set property back to false after a completed round 
    //We want it to stopTimer.called to be true first when funciton is called
    stopTimer.called = false;
  } else {
    alert('You have to finish the game before restarting!');
  }
}

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
}

let count = 0;
const checkQuestion = () => {
  count += 1;
  console.log(count)
  guessCounter.innerHTML = '';
  guessCounter.innerHTML += `<p>Guess counter: ${count}</p>`;
  const { category, value } = currentQuestion
  console.log(category)
  console.log(value)

let keep;

if (category === 'hair' && value === secret.hair) {
    keep = true;
} else if (category === 'eyes' && value === secret.eyes) {
    keep = true;
} else if (category === 'accessories' && value === secret.accessories.find(element => element === value)) {
    keep = true;
} else if (category === 'other' && value === secret.other.find(element => element === value)) {
    keep = true;
} else {
    keep = false;
  }
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person.accessories.includes(value));
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person.accessories.includes(value));
    } 
  } else if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keep all people that has ${value} hair`);
      charactersInPlay = charactersInPlay.filter((person) => person.hair === value);
    } else {
      alert(`No, the person doesn't have ${value} hair! Remove all people that has ${value} hair`);
      charactersInPlay = charactersInPlay.filter((person) => person.hair !== value);
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is ${value}! Keep all people that are ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person.other.includes(value));
    } else {
      alert(`No, the person is not ${value}! Remove all people that are ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person.other.includes(value));
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people that has ${value} eyes`);
      charactersInPlay = charactersInPlay.filter((person) => person.eyes === value);
    } else {
      alert(`No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`);
      charactersInPlay = charactersInPlay.filter((person) => person.eyes !== value);
    }
  }    
  generateBoard();
}

const guess = (personToConfirm) => {
  let confirmChoice = confirm('Sure you wanna guess? It will be the last draw. Please confirm');
  if (confirmChoice === true) {
    checkMyGuess(personToConfirm);
    stopTimer();
  } else {
    console.log('pressed cancel')
  }
}

let guessStatus = {
  status: ''
}

const checkMyGuess = (personToCheck) => {
    if (secret.name === personToCheck) {
    guessStatus.status = 'right';
  } else {
    guessStatus.status = 'wrong';
  }

  board.innerHTML = ''

  board.innerHTML += `
  <div style="display: flex; flex-direction: column; align-items: center;">
  <p style="text-align: center;">You guessed at ${personToCheck} and it was ${guessStatus.status}</p>
  <div class="card">
    <p>${secret.name}</p>
    <img style="width: 100px; height: 100px;" src=${secret.img} alt=${secret.name}>
  </div>
  <p>${secret.name} was the secret person!</p>
  </div>
`
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', restart);
findOutButton.addEventListener('click', checkQuestion);
questions.addEventListener('change', selectQuestion)