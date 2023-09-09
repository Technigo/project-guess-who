// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const winOrLose = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const playAgainButton = document.getElementById('playAgain');
const filterButton = document.getElementById('filter');


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden hair',
    eyes: 'hidden',
    accessories: ['glasses', 'a hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden hair',
    eyes: 'blue',
    accessories: ['a hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey hair',
    eyes: 'blue',
    accessories: ['a hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black hair',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow hair',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown hair',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black hair',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow hair',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange hair',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple hair',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown hair',
    eyes: 'blue',
    accessories: ['glasses', 'a hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown hair',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange hair',
    eyes: 'green',
    accessories: ['glasses', 'a hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white hair',
    eyes: 'hidden',
    accessories: ['a hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange hair',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden hair',
    eyes: 'blue',
    accessories: ['a hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black hair',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black hair',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown hair',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow hair',
    eyes: 'hidden',
    accessories: ['glasses', 'a hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey hair',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow hair',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black hair',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black hair',
    eyes: 'brown',
    accessories: ['glasses', 'a hat'],
    other: []
  },
]

// Global variables
let secret; //will be the secret person object
let currentQuestion; //will be the current question object
let charactersInPlay; //Will be an array of the people that are left in the game

// Draw the game board
const generateBoard = () => {
  //This resets the board?
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
  charactersInPlay = CHARACTERS;
  winOrLose.style.display = "none";
  board.style.display = "flex";
  setSecret();
  generateBoard();
};

// this is the currentQuestions-connection - the one we're asking now
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This part I still don't understand and have struggled a lot with
const checkQuestion = () => {
  const { category, value } = currentQuestion;
let keep = false;
  if (category === 'hair' || category === 'eyes') {
    keep = value === secret[category];
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value);
  }
  filterCharacters(keep);
  generateBoard();
};


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the person wears ${value}! Keep anyone that wears ${value}`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the person doesn't wear ${value}! Remove anyone that is wearing ${value}`);
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the person is a ${value}! Remove all that take care of their lungs.`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the person isn't a ${value}! Remove all with cigarettes.`)
    }
  } else if (category === "hair") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the person has ${value}! We're keeping everyone with ${value}.`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      alert(`Nope, the person doesn't have ${value}! We're getting rid of everyone with ${value}.`);
    }
  } else if (category === "eyes") {
    if(keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(`Yes, the person has ${value} eyes! We're keeping anybody with ${value} eyes.`);
    } else {
    charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      alert(`Sorry, the person does not have ${value} eyes! Removing everyone with ${value} eyes.`);
  }
  }
};


  // Invoke a function to redraw the board with the remaining people.

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (chosenPerson) => { 
  const timeToGuess = confirm(`Are you sure you want to guess on ${chosenPerson}?`);
  if (timeToGuess) {
    checkMyGuess(chosenPerson);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (chosenPerson) => {
  if (chosenPerson === secret.name) {
    winOrLoseText.innerHTML = `CONGRATULATIONS! <br> 
    YOU PICKED THE RIGHT ONE!`;
  } else {
    winOrLoseText.innerHTML = `Aaah dang it, that was the wrong one!`;
  }
  winOrLose.style.display = "flex";
  board.style.display = "none";
};

// Calling this function invokes to load and start the website; i.e we get the board on the site!
start();

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
playAgainButton.addEventListener('click', start);
filterButton.addEventListener('click', checkQuestion);
