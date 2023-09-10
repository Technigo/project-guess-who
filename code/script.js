// All the DOM selectors stored as short variables ------------------------------
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartBtn = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
const winOrLoseWrapper = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainBtn = document.getElementById('playAgain')
const secretPersonImg = document.getElementById('secretPerson')
const winOrLoseName = document.getElementById('winOrLoseName')

// Array with all the characters, as objects ------------------------------
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

// Global variables ------------------------------
let secret;
let currentQuestion;
let charactersInPlay;

// ------------------------------

// Draw the game board.
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

// Randomly select a person from the characters array and set as the value of the variable called secret.
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(`Secret person: ${secret.name}`);
}

// This function to start (and restart) the game.
const start = () => {
  // Setting charactersInPlay array to be all the characters to start with.
  charactersInPlay = CHARACTERS;
  generateBoard(); // Invokes generateBoard function.
  setSecret(); // Invokes setSecret function.
  filterBtn.disabled = true; // Disables the "Find Out" button before the player has selected an option from the selection menu.
  filterBtn.style.opacity = "0.5"; // Opacity set on the find out button.
}

// Setting the currentQuestion object when you select something in the dropdown.
const selectQuestion = () => {
  filterBtn.disabled = false; // Enables the "Find Out" button when a selection has been made.
  filterBtn.style.opacity = "1"; // Opacity set to default on the find out button.
  const category = questions.options[questions.selectedIndex].parentNode.label; // This variable stores what option group the question belongs to.

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  // Variable that stores what questionis selected.
  currentQuestion = {
    category: category,
    value: value,
  }
  console.log(`Selected question:`, currentQuestion);
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Compares the currentQuestion details with the secret person details based on category 'hair/eyes' or 'accessories/others'. Based on that it will, by invoking filterCharacters function, 'keep' or 'remove' people from the board.
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      keep = true;
      filterCharacters(true);
    } else {
      keep = false;
      filterCharacters(false);
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      keep = true;
      filterCharacters(true);
    } else {
      keep = false;
      filterCharacters(false);
    }
  }
}

// Filter the characters array and redraws the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Shows the correct alert message for different categories.
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all that are ${value}s`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all that aren't ${value}s`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all that has ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all that has ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
}

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // Using the confirm() method.
  if (confirm(`Is your final guess ${personToConfirm}?`)) {
    // Invokes the checkMyGuess function when player wants to continue.
    checkMyGuess(personToConfirm);
    console.log("Player clicked OK");
  } else {
    // Nothing happens and player can continue the game.
    console.log("Player clicked Cancel or closed the dialog");
  }
  // store the interaction from the player in a variable.????
}

// If you confirm, this function is invoked.
const checkMyGuess = (personToCheck) => {
  board.style.display = 'none'; // Hides the game board.
  winOrLose.style.display = 'flex'; // Shows the win or lose section.
  // Checks if the personToCheck is equal to the secret person's name and message shown in the win or lose section accordingly.
  if (personToCheck === secret.name) {
    secretPersonImg.src = `${secret.img}`; // Shows the secret persons image.
    secretPersonImg.alt = `Image of ${secret.name}`;
    winOrLoseText.textContent = `YAY! Congrats you won! 🙌`;
    winOrLoseName.textContent = `${secret.name}` // Shows the secret persons name.
    console.log("Player won the game");
  } else {
    winOrLoseText.textContent = `Oh no! You guessed wrong. Game over! 😤`;
    console.log("Player lost the game");
  }
}

// This function resets the dropdown.
const resetDropdown = () => {
  questions.selectedIndex = 0;
};

// Invokes the start function when website is loaded.
start();

// All the event listeners ------------------------------
restartBtn.addEventListener('click', () => {
  start(); // Start function is invoked.
  resetDropdown(); // Sets dropdown to default option.
});

// Invokes the selectQestion function.
questions.addEventListener('change', selectQuestion);

// Invokes the checkQuestion function when filterBtn is clicked.
filterBtn.addEventListener('click', checkQuestion);

// When play again button is clicked.
playAgainBtn.addEventListener('click', () => {
  start();
  resetDropdown();
  board.style.display = 'flex'; // Shows the game board.
  winOrLose.style.display = 'none'; // Hides the win or lose section.
});