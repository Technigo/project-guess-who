// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const playAgainButton = document.getElementById('playAgain')
const guessCounter = document.getElementById('guesses');

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
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let numberOfGuesses = 0;

// Draw's the game board 
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

// Function that randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secret);
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
 // if i want a time or counter it should be invoked here 
  
 // invoking the board and the secret person
  generateBoard();
  setSecret();
};

//currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function invokes when you click on 'Find Out' button and compares
// category and value with the secret person to determine what will happen in the next step 
// depending och true and false 
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  console.log(currentQuestion);
  let keep = false;

  if (category === 'hair' || category === 'eyes') {
    keep = secret[category] === value;
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value);
  }
  filterCharacters(keep);
};

// This filter's the characters array and redraw the game board. 
// It also determines the and filters by it
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => 
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => 
        !person[category].includes(value)
      );
    };
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}'s`
      );
      charactersInPlay = charactersInPlay.filter((person) => 
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all people that are ${value}'s`
      );
      charactersInPlay = charactersInPlay.filter((person) => 
      !person[category].includes(value)
      );
    };
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all the people that has ${value} ${category}`
      ); 
      charactersInPlay = charactersInPlay.filter((person) => 
        person[category] === value
      );
    } else {
      alert (
        `No, the person doesn't have ${value} ${category}! Remove all people that has ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter((person) => 
        person[category] !== value
      );
    };
  };
  generateBoard();
};

// when clicking guess, the player have to confirm that they want to make a guess.
const guess = (personToConfirm) => { 
  let userConfirm = confirm(`Do you think the secret person is ${personToConfirm}?`)
  if (userConfirm) {
    checkMyGuess(personToConfirm)
  };
};

// If player confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You guessed ${numberOfGuesses} times and got it right, ${personToCheck} is the secret person!! Good job!`
  } else {
    winOrLoseText.innerHTML = `Ooh noo! You guessed ${numberOfGuesses} times but got it wrong :( ${personToCheck} is not the secret person, ${secret.name} is!`
  };
  winOrLose.style.display = 'flex';
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', () => {
  location.reload();
  start();
});
questions.addEventListener('change', selectQuestion);

findOutButton.addEventListener('click', () => { 
  checkQuestion();
  numberOfGuesses += 1;
  guessCounter.innerHTML = `${numberOfGuesses}`;
});
playAgainButton.addEventListener('click', () => {
  start ();
  winOrLose.style.display = 'none';
});
