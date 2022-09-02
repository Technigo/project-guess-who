// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const winOrLoseText = document.getElementById('winOrLoseText');
const winOrLoseSection = document.getElementById('winOrLose');
const playAgain = document.getElementById('playAgain');
const numberOfguesses = document.getElementById('numberOfGuesses');



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
    accessories: ['glasses', 'necklace'],
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
    accessories: ['glasses', 'necklace', 'earrings'],
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
    accessories: ['glasses', 'earrings'],
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
    accessories: ['glasses', 'hat', 'necklace'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
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
let counter;

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

  // Hide win or lose section is visible from previous game
  winOrLoseSection.style.display = 'none';

  // This is so the that the first visible value in the select dropdown is not 'brown hair' but 'select'
  questions.value="";

  // Reset counter and remove number of guesses from previous game
  counter = 0;
  numberOfguesses.innerHTML = `<h2>Number of guesses: </h2">`

  // Set charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // Load the board of characters
  generateBoard();

  // Set secret person
  setSecret();  
}

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {

  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => 
{
  const { category, value } = currentQuestion
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true); // Keep everyone with that hair/eye colour 
    }
    else {
      filterCharacters(); // Remove everyone with that hair/eye colour
    }
  } 
  else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    }
    else {
      filterCharacters();
    }
  }

  // Increment counter for number of guesses/questions the player makes
  counter++;
  numberOfguesses.innerHTML = `<h2>Number of guesses: ${counter}</h2">`;
}

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories and filter by category to keep or remove, based on the keep variable
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } 
    else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } 
  else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all people that are ${value}s`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } 
    else {
      alert(`No, the person is not a ${value}! Remove all people that are ${value}s`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } 
  else {
    if (keep) {
      alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } 
    else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }

  // Invoke a function to redraw the board with the remaining people
  generateBoard();
}

// When clicking guess, the player first has to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  // Store the interaction from the player in a variable
  const playersGuess = confirm(`Do you want to guess ${personToConfirm}?`);
  
  // If the player wants to guess, invoke the checkMyGuess function
  if (playersGuess) {
    checkMyGuess(personToConfirm);
  }
}

// This function is invoked if player confirms they want to guess a person
const checkMyGuess = (personToCheck) => {

  // Check if player's guess is correct, show message in the win or lose section accordingly
  if (personToCheck === secret.name) {
    winOrLoseText.innerText = `That's correct!\n\n The secret person is ${personToCheck}.`;
  }
  else {
    winOrLoseText.innerText = `That's incorrect!\n\n It is not ${personToCheck}, the secret person is ${secret.name}.`;
  }

  winOrLoseSection.style.display = 'flex';
}

// Start function invoked when website is loaded
start()


// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
playAgain.addEventListener('click', start);
