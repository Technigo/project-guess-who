// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const wOL = document.getElementById('winOrLose')
const wOLtext = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')

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
let secret   //secret person
let currentQuestion //current question object
let charactersInPlay //array of all people left in the game
let personName = "";


// Draw the game board
const generateBoard = () => {
 board.innerHTML = '';
 if (charactersInPlay) {
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
 }
};



// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecretPerson = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  currentQuestion = {};
};

// This function to start (and restart) the game
const start = () => {
  generateBoard(); 
  charactersInPlay = CHARACTERS.slice(); 
  wOLtext.textContent = '';
  setSecretPerson();
  currentQuestion = {};
  generateBoard();
};




// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

  const checkQuestion = () => {
    const { category, value } = currentQuestion
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
    };
 

// This function should be invoked when you click on 'Find Out' button.


  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
const filterCharacters = (keep) => {
    const { category, value } = currentQuestion;
  if (category === 'hair') {
    if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    alert(`The secret person has ${value} hair, let's keep everyone with ${value} hair!`) 
  } else {  
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)); 
    alert(`The secret person does not have ${value} hair, let's remove everyone with ${value} hair.`)} }
  else if (category === 'eyes') {
    if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    alert(`The secret person has ${value} eyes, let's keep everyone with ${value} eyes!`) 
  } else {   
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    alert(`The secret person does not have ${value} eyes, let's remove everyone with ${value} eyes.`) } }
  else if (category === 'accessories') {
    if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    alert(`The secret person wears ${value}, let's keep everyone with ${value}`)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    alert(`The secret person does not wear ${value}, let's remove everyone with ${value}.`)} }
  else if (category === 'other') {
   if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    alert(`The secret person has ${value} as an attribute, let's keep everyone with ${value}`)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    alert(`The secret person does not have ${value} as an attribute, let's remove everyone with ${value}.`) }
  }

  generateBoard();
};

  // Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personName) => {
  //const guessedPersonName = personName === secret.name
  if (confirm (`Are you sure you want to guess for ${personName}?`)) {
    checkMyGuess(personName);
  }}
 
const winOrLose = ['You are the best, you guessed right!', 'Oops, that was wrong person, try again!'];

const checkMyGuess = (checkedPerson) => {
  const winLoseTextElement = document.getElementById('winOrLoseText'); 
  if (checkedPerson === secret.name) {
    winLoseTextElement.textContent = winOrLose[0]; 
  } else {
    winLoseTextElement.textContent = winOrLose[1]; 
  }

  wOL.style.display = 'block'; 

  if (charactersInPlay.length === 0) {
    const restartChoice = confirm("Do you want to play again?");
    if (restartChoice) {
      start();
    }
  }
};

// All the event listeners
restartButton.addEventListener('click', () => {
  start();
  generateBoard();
});

findOutButton.addEventListener('click', () => {
  checkQuestion();
});

  
questions.addEventListener('change', () => {
  selectQuestion();
});

playAgain.addEventListener('click', () => {
  start();
  generateBoard();
  wOL.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
  start ();
  generateBoard ();
});
