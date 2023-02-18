// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')
let counterDisplayElem = document.querySelector('.counter-display');
let winOrLoseContainer = document.getElementById('winOrLoseContainer')
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
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker','beard']
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
    other: ['smoker', 'beard']
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
    other: ['beard']
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
let secret //Secret person object
let currentQuestion // The current question object
let charactersInPlay //The people that are left in the game
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <div class="inner-card">
          <div class="card-front">
            <p>${person.name}</p>
            <img src=${person.img} alt=${person.name}>
          </div>
          <div class="guess">
            <span>Guess on ${person.name}?</span>
            <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
          </div>
        </div>
      </div>
    `
})
}

let guessCounter = 0;


function updateDisplay() {
  counterDisplayElem.innerHTML = guessCounter;
};

updateDisplay(); 

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  generateBoard();  //Loads the board of characters
  setSecret();  //Generates a new secret person on start
  filterButton.disabled = true;
  filterButton.style.opacity = "0.5"
  console.log("The secret person is", secret.name);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  filterButton.disabled = false;
  const category = questions.options[questions.selectedIndex].parentNode.label// This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value; // This variable stores the value of the question from the dropdown.
  
  // We also need a variable that stores the actual value of the question we've selected.
  currentQuestion = {
    category: category,
    value: value
  }
  console.log("Question selected", currentQuestion);
}

const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      keep = true
      filterCharacters(true); 
    }
    else {
      keep = false
      filterCharacters(false); 
    }
  }
  else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {  
      keep = true
      filterCharacters(true); 
    }
    else {
      keep = false
      filterCharacters(false); 
    }
  }
}

// This will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const {category, value } = currentQuestion

  if (category === 'accessories') { 
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    }
    else {
      alert(`No, the person doesn't wear ${value}! Remove all that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  }
  else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person has a ${value}! Keep all people that has a ${value}s`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    }
    else {
      alert(`No, the person doesn't have a ${value}! Remove all people that has a ${value}s`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  }
  else {
    if (keep) {
      alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    }
    else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }
  // Function: redraw the board with the remaining people.
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const userGuess = window.confirm(`Are you sure about ${personToConfirm}..?`
  );
  if (userGuess) {
    checkMyGuess(personToConfirm);
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
    board.innerHTML = '';
    winOrLose.style.display = "block";
    let secretPersonImg = `<img class="cardFinal" src=${secret.img} alt=${secret.name}>`;
    winOrLoseContainer.insertAdjacentHTML("afterBegin", secretPersonImg);
   if (personToCheck === secret.name) {
     winOrLoseText.innerText = `Wohoo that's correct! You Win!`
  } else {
    winOrLoseText.innerText = `Oh no! Your guess is wrong! The correct answer is ${secret.name}`
  }
}

const startTimer = () => {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

const pause = () => {
  clearInterval(cron);
}

const reset = () => {
  minute = 0;
  second = 0;
  /* millisecond = 0; */
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  /*   document.getElementById('millisecond').innerText = '00'; */
}

const timer = () => {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }

  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
}

const returnData = (input) => {
  return input >= 10 ? input : `0${input}`
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', (event) => { 
start()
pause();
reset();
});
questions.addEventListener('change', () => {
  selectQuestion();
  filterButton.style.opacity = "1.0"
})
filterButton.addEventListener('click', checkQuestion)
playAgain.addEventListener("click", (event) => {
  /* window.location.reload();  */
  start();
  pause();
  reset();
  winOrLose.style.display = "none";
});
filterButton.addEventListener("click", () => {
  guessCounter += 1;
  updateDisplay();
  startTimer();
});
