// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const playAgain = document.getElementById('playAgain');
const winOrLose = document.getElementById('winOrLose');
const form = document.getElementById('questionForm');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: [],
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: [],
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker'],
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: [],
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker'],
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: [],
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: [],
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: [],
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: [],
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: [],
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: [],
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: [],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
const flipCardAudio = new Audio('/music/sci-fi-confirmation.wav'); //audio for flipping the cards
const winAudio = new Audio('/music/correct-answer.wav'); //audio for correct answer
const loseAudio = new Audio('/music/wrong-answer.wav'); //audio for wrong answer
let countGuesses = 0; //counter for how many guesses, will present it at the end of the game

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
  //play sound effect when flipping the cards. QuerySelectorAll - find all CSS selectors 'card'
  //and for each card when mouseover -> play flipCardAudio
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('mouseover', () => {
      flipCardAudio.currentTime = 0; //set currentTime = 0, the sound can reset even though the audio haven't finished playing
      flipCardAudio.play();
    });
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  loadingGifandBoard(); //loading Gif and invoke generateBoard()
  setSecret(); //invoke
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  //stores the data in a array
  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  let trueOrFalse;
  if (category === 'hair') {
    trueOrFalse = currentQuestion.value === secret.hair; //get either true or false
    if (trueOrFalse === true) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }
  } else if (category === 'eyes') {
    trueOrFalse = currentQuestion.value === secret.eyes;
    if (trueOrFalse === true) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }
  } else if (category === 'accessories' || category === 'other') {
    //the value of the options for "acc" and "other" won't be the same (on this case),
    //so can do || operator. Unlike the category hair and eyes, were both can be "hidden" or "brown"
    trueOrFalse =
      secret.accessories.includes(currentQuestion.value) ||
      secret.other.includes(currentQuestion.value);
    if (trueOrFalse === true) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories. keep=true
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      );
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that have a smoking habit.`
      );
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that have a smoking habit.`
      );
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair.`
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair.`
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes.`
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes.`
      );
    }
  }

  // filter by category to keep or remove based on the keep variable.
  if (category === 'hair' || category === 'eyes') {
    //if we get a match, it will filter and keep the characters that have the same value
    //as the selected input/value in the if-statement
    if (keep === true) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    }
    //if we do not have a match, it will filter and keep the characters that has NOT
    //the value as the selected input/value in the else-statement
    else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === 'accessories' || category === 'other') {
    //if we get a match, it will filter and keep the characters that have the same value
    //as the selected input/value in the if-statement. Attention! with Arrays we use INCLUDES!
    if (keep === true) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }
  //made a new function that will empty the board to present a loading gif.
  //and redraw the board after 1.5s
  loadingGifandBoard();
};

const loadingGifandBoard = () => {
  //empty the board
  board.innerHTML = '';
  //put a loading gif to make it looks like the computer is progressing
  board.innerHTML += `        
  <img src="/gif/beanEater.gif" class="loading-gif" alt="loading gif"/>
`;
  //after 1.5s redraw the board
  setTimeout(() => generateBoard(), 1500);
};

//the player have to confirm that they want to make a guess
const guess = (personToConfirm) => {
  //store the interaction from the player in variable, confirmGuess
  let confirmGuess = confirm(
    `Do you really want to guess on ${personToConfirm}?`
  );
  // If the player wants to guess, invoke the checkMyGuess function
  if (confirmGuess === true) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm and pressed OK, this function is invoked
const checkMyGuess = (personToCheck) => {
  // Check if the personToCheck is the same as the secret person's name
  // Set a Message to show in the win or lose section accordingly
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `
    You win!
    `;
    winAudio.play(); //play correct answer
    winOrLoseText.innerHTML += `
    <h1>You have guessed: ${countGuesses} time(s)!</h1>
    `;
  } else {
    winOrLoseText.innerHTML = `
    You lose!
    `;
    loseAudio.play(); //play wrong answer
    winOrLoseText.innerHTML += `
    <h1>You have guessed: ${countGuesses} time(s)!</h1>
    `;
  }
  winOrLose.style.display = 'block'; // Show the win or lose section
  board.style.display = 'none'; // Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', () => {
  countGuesses = 0; //reset the counter for how many guesses
  questions.value = ''; //empty select value when clicking the Restart button
  loadingGifandBoard();
  start();
});

//when selecting an option from the drop down list, it will invoke the selectQuestion function
questions.addEventListener('change', selectQuestion);

//Find out button, it will invoke the checkQuestion function
findOutButton.addEventListener('click', () => {
  checkQuestion();
  countGuesses++; //counter for how many guesses, count each valid click on the Find out button
});

//Play Again button in the winOrLose-section, it will restart the game
playAgain.addEventListener('click', () => {
  winOrLose.style.display = 'none'; //Hide the win or lose section
  board.style.display = 'flex'; //Show ide the game board
  countGuesses = 0; //reset the counter for how many guesses
  window.location.reload(); //refresh the page
});

//prevent page reload when submitting the form (when clicking on the Find out button)
form.addEventListener('submit', (event) => {
  event.preventDefault();
});
