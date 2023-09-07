// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
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

// Draw the game board
const generateBoard = (charactersInPlay) => {
 let boardHTML = '';
  charactersInPlay.forEach((person) => {
    boardHTML += `
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

  board.innerHTML = boardHTML;
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  setSecret();
  currentQuestion = {};
  generateBoard(charactersInPlay);
  // What else should happen when we start the game?

}
document.addEventListener('DOMContentLoaded', start);


const restart = () => {
  charactersInPlay = CHARACTERS;
  setSecret ();
  currentQuestion = {};
  generateBoard (charactersInPlay);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
}
document.getElementById('filter').addEventListener('click', () => {
  selectQuestion();
  checkQuestion();
});
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  charactersInPlay = charactersInPlay.filter((person) => {

    if (category === 'hair') {
      return keep ? person.hair === value : person.hair !== value;
    } else if (category === 'eyes') {
      return keep ? person.eyes === value : person.eyes !== value;
    } else if (category === 'accessories') {
      return keep ? person.accessories.includes(value) : !person.accessories.includes(value);
    } else if (category === 'other') {
      return keep ? person.other.includes(value) : !person.other.includes(value);
    }
    return true;
  });

  generateBoard(charactersInPlay); 
}
questions.addEventListener('change', selectQuestion);
// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  const keep = charactersInPlay.some((person) => {
    if (category === 'hair') {
      return person.hair === value;
    } else if (category === 'eyes') {
      return person.eyes === value;
    } else if (category === 'accessories') {
      return person.accessories.includes(value);
    } else if (category === 'other') {
      return person.other.includes(value);
    }

    return false;
});
filterCharacters(keep);
generateBoard(charactersInPlay);

// It'll filter the characters array and redraw the game board.

if (category === 'hair') {
  if (keep) {
    alert(`The secret person has ${value} hair, let's keep everyone with ${value} hair!`) 
  } else {   
    alert(`The secret person does not have ${value} hair, let's remove everyone with ${value} hair.`)} }
else if (category === 'eyes') {
  if (keep) {
    alert(`The secret person has ${value} eyes, let's keep everyone with ${value} eyes!`) 
  } else {   
    alert(`The secret person does not have ${value} eyes, let's remove everyone with ${value} eyes.`) } }
else if (category === 'accessories') {
  if (keep) {
    alert(`The secret person wears ${value}, let's keep everyone with ${value}`)
  } else {
    alert(`The secret person does not wear ${value}, let's remove everyone with ${value}.`)} }
else if (category === 'other') {
  if (keep) {
    alert(`The secret person has ${value} as an attribute, let's keep everyone with ${value}`)
  } else {
    alert(`The secret person does not have ${value} as an attribute, let's remove everyone with ${value}.`) }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personName) => {
  const confirmed = confirm(`Are you sure you want to guess for ${personName}?`)
  if (confirmed) {
    checkMyGuess(personName);
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}
const winOrLoseText = [`You're awesome, you guessed ${secret.name} and that's the right answer!`, 
`Sorry, you guessed wrong. Better luck next time!`]
// If you confirm, this function is invoked
const checkMyGuess = (guessedPersonName) => {
  if (guessedPersonName === secret.name) {
    wOLtext.textContent = winOrLoseText[0];} 
    restart();
  else {
    wOLtext.textContent = winOrLoseText[1];

  if (charactersInPlay.length === 0) {
    restart();
    return;
  }
  } 

board.style.display = 'none';
}

// Invokes the start function when website is loaded
start();

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
  restart();
  generateBoard();
});

document.addEventListener('DOMContentLoaded', () => {
  start ();
  generateBoard ();
});
