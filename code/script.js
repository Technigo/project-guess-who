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
let secret
let currentQuestion
let charactersInPlay


// Draw the game board
const generateBoard = () => {
  board.innerHTML = '';
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
    <div class="card">
      <p>${person.name}</p>
      <img src=${person.img} alt=${person.name}>
      <div class="guess">
        <span>Guess on ${person.name}?</span>
        <button class="filled-button small" onclick="Guess('${person.name}')">Guess</button>
      </div>
    </div>
  `;
});
};


// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  currentQuestion = {}; 
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  board.innerHTML -= winOrLose[0] || winOrLose[1];
  questions.selectedIndex = 0;
  setSecret();
  currentQuestion = {};
  generateBoard();
  wOL.style.display = 'none';
}

const restart = () => {
  charactersInPlay = CHARACTERS; 
  setSecret(); 
  currentQuestion = {}; 
  generateBoard(); 
};

// setting the currentQuestion object when you select something in the dropdown

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;
  
    
      currentQuestion = {
        category: category.toLowerCase(), 
        value: value.toLowerCase(), 
    }
  };


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Initialize keep variable to false
  let keep = false;

  if (category === 'hair' || category === 'eyes') {
    // Check if any character matches the value
    keep = charactersInPlay.some((person) => person[category] === value);
  } else if (category === 'accessories' || category === 'other') {
    // Check if any character matches the value in accessories or other
    keep = charactersInPlay.some((person) => person[category].includes(value));
  }

  // Call the filterCharacters function with the correct parameter
  filterCharacters(keep);
};



const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  let attributeOrCategory;

  if (category === 'hair' || category === 'eyes') {
    attributeOrCategory = category;
  } else {
    attributeOrCategory = category;
  }

  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[attributeOrCategory] === value);
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value}`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[attributeOrCategory] !== value);
      alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}`);
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[attributeOrCategory] === value);
      alert(`Yes, the person has ${value}! Keep all people that has a ${value}`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[attributeOrCategory] !== value);
      alert(`No, the person doesn't have ${value}! Remove all people that has a ${value}`);
    }
  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[attributeOrCategory] === value);
      alert(`Yes, person has ${value} hair! Keep all people that have ${value} hair`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[attributeOrCategory] !== value);
      alert(`No, the person doesn't have ${value} hair! Remove all the people with ${value} hair`);
    }
  } else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[attributeOrCategory] === value);
      alert(`Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[attributeOrCategory] !== value);
      alert(`No, the person doesn't have ${value} eyes! Remove all the people with ${value} eyes`);
    }
  }

  // After filtering, update the game board
  generateBoard();
};

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

       // Invoke a function to redraw the board with the remaining people.

// when clicking guess, the player first have to confirm that they want to make a guess.

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
const Guess = (personToConfirm) => {
  const isCorrectGuess = personToConfirm === secret.name;
  if (confirm(`Do you want to guess on ${personToConfirm}?`)) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const winOrLose = ['You got it! Congratulations!', 'Close, but still so far. Try again.'];

// ... (your existing code)

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    wOLtext.textContent = winOrLose[0];
  } else {
    wOLtext.textContent = winOrLose[1];
  }
  wOL.style.display = 'inline-block'; 

  if (charactersInPlay.length === 0) {
    restart();
    return;
  }
  // Hide the game board
  board.style.display = 'none';
};

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', () => {
  start(); 
});

findOutButton.addEventListener("click", () => {
  checkQuestion();
});

playAgain.addEventListener('click', () => {
  start(); 
  generateBoard();
});



document.addEventListener('DOMContentLoaded', () => {
  start()
  });

document.addEventListener('DOMContentLoaded', () => {
  generateBoard();
});

questions.addEventListener('change', selectQuestion);








