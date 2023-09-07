// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('find-out');
const winOrLoseSection = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const playAgainBtn = document.getElementById('playAgain');


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


//---------------------------------------------------------------------------------------------------------------------------------------------



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
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `;
  });
};


//---------------------------------------------------------------------------------------------------------------------------------------------




// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log("This is ", secret);
};


//---------------------------------------------------------------------------------------------------------------------------------------------




// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard();// step 1 The generateBoard function is invoked when the website is loaded
  setSecret(); // 
  
};


//---------------------------------------------------------------------------------------------------------------------------------------------





// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  console.log(`selects question from dropdown`);
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  if (category === "hair") {
    currentQuestion = {
      attribute: "hairColor",
      value: value,
      category: category,
    };
  } else if (category === "eyes") {
    currentQuestion = {
      attribute: "eyeColor",
      value: value,
      category: category,
    };
  } else if (category === "accessories") {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    };
  } else if (category === "other") {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    };
  }

  currentQuestion = {
    category: category,
    value: value
  };
  console.log("Show me" , currentQuestion)
};



// This function should be invoked when you click on 'Find Out' button.
// const checkQuestion = () => {
//   const { category, value } = currentQuestion

//   // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
//   // See if we should keep or remove people based on that
//   // Then invoke filterCharacters
//   if (category === 'hair' || category === 'eyes') {

//   } else if (category === 'accessories' || category === 'other') {

//   }
//   filterCharacters();
// }

//---------------------------------------------------------------------------------------------------------------------------------------------



const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Check if the attributes in currentQuestion match the attributes in secret
  let keep = false; // Initially set keep to false

  if (category === "hair" || category === "eyes") {
    // If we're asking about hair color or eye color
    keep = secret[category] === value;
  } else if (category === "accessories" || category === "other") {
    // If we're asking about accessories or other characteristics
    keep = secret[category].includes(value);
  }
  console.log(`category: ${category}, value: ${value}, keep: ${keep}`);
  // Call the filterCharacters function with the appropriate keep argument
  filterCharacters(keep);
};


//---------------------------------------------------------------------------------------------------------------------------------------------

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log('Filtering characters...');
  const { category, value } = currentQuestion
 // Show the appropriate alert message based on the question category
  
 if (category === 'accessories') {
  if (keep) {
    alert(`Yes, the person wears ${value}! Keep all people that wear ${value}.`);
  } else {
    alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}.`);
  }
} else if (category === 'other') {
  // Add an appropriate message for other characteristics (similar to the above)
  if (keep) {
    alert(`Yes, the person wears ${value}! Keep all people that wear ${value}.`);
  } else {
    alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}.`);
  }
} else {
  // For hair and eyes categories
  if (keep) {
    alert(`Yes, the person has ${value} hair/eyes! Keep all people with ${value} hair/eyes.`);
  } else {
    alert(`No, the person doesn't have ${value} hair/eyes! Remove all people with ${value} hair/eyes.`);
  }
}

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === 'hair' || category === 'eyes') {
    charactersInPlay = charactersInPlay.filter((person) => (person[category] === value) === keep);
  } else if (category === 'accessories' || category === 'other') {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value) === keep);
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}


//---------------------------------------------------------------------------------------------------------------------------------------------





// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const wantToGuess = confirm(`Are you sure you want to take a guess on ${personToConfirm}`)
  if (wantToGuess) {
    checkMyGuess(personToConfirm)
  }
}


//---------------------------------------------------------------------------------------------------------------------------------------------


// // If you confirm, this function is invoked
// const checkMyGuess = (personToCheck) => {
//   if (personToCheck === secret.name) {
//     alert(`Congrats! You guessed right, it's ${secret.name} .`);
//   } else {
//     alert(`Woops, this was wrong. It's not ${personToCheck} .`);s
// }
//   // 1. Check if the personToCheck is the same as the secret person's name
//   // 2. Set a Message to show in the win or lose section accordingly
//   // 3. Show the win or lose section
//   // 4. Hide the game board
// }
// const checkMyGuess = (personToCheck) => {
//   if (personToCheck === secret.name) {
//     // Display win message
//     winOrLoseText.textContent = `Congratulations! You guessed right  it id ${personToCheck}`;
//     winOrLoseSection.style.display = 'block';
//   } else {
//     winOrLoseText.textContent = `Oops, this was wrong. It's not ${personToCheck}.`;
//     winOrLoseSection.style.display = 'block';
//   }
// };

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    // Display win message
    winOrLoseText.textContent = `Congratulations! You guessed right  it id ${personToCheck}`;
    winOrLoseSection.style.display = 'block';
  } else {
    winOrLoseText.textContent = `Oops, this was wrong. It's not ${personToCheck}.`;
    winOrLoseSection.style.display = 'block';
  }
};


//---------------------------------------------------------------------------------------------------------------------------------------------



// Invokes the start function when website is loaded
console.log("I start", start);
start()


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
playAgainBtn.addEventListener('click', start);






