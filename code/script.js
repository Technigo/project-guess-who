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


// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
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

const restart = () => {
  if (stopTimer.called === true) {
    //initialize time count to start from zero again
    addSeconds = 0;
    start();
    //Important to set property back to false after a completed round 
    //We want it to stopTimer.called to be true first when funciton is called
    stopTimer.called = false;
  } else {
    alert('You have to finish the game before restarting!');
  }
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
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  selectQuestion();
  console.log(secret)
  console.log(secret.hair)
  console.log(secret.accessories)
  startTimer();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value
  }
}

let count = 0;
// This function should be invoked when you click on 'Find Out' button.
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
    keep == true;
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


  // Show the correct alert message for different categories
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
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person.other.includes(value));
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person.other.includes(value));
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people that has ${value} eyes`);
      charactersInPlay = charactersInPlay.filter((person) => person.eyes === value);
    } else {
      alert(`No, the person doesn't have ${value}! Remove all people that have ${value} eyes`);
      charactersInPlay = charactersInPlay.filter((person) => person.eyes !== value);
    }
  }
  generateBoard();
}


// when clicking guess, the player first have to confirm that they want to make a guess.
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
// If you confirm, this function is invoked
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
    <img src=${secret.img} alt=${secret.name}>
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