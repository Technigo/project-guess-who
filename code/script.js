// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const playAgain = document.getElementById('playAgain');
const findOutButton = document.getElementById('filter');
const winOrLoseText = document.getElementById('winOrLoseText');
const winOrLoseWrapper = document.getElementById("winOrLose");
const counterTimerWrapper = document.getElementById("counterTimerWrapper");
const guessCounterDiv = document.getElementById("guessCounter");
const timerDiv = document.getElementById("timer");

// Array with all the characters, as objects
// I added a couple new accessories, eg separated 'glasses' from 'sunglasses', added 'jewelry' as an option and also 'collared shirt'
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat', "a bird"],
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
    accessories: ["a collared shirt"],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses', "a collared shirt"],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses', 'jewelry', "a collared shirt"],
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
    accessories: ['glasses', 'jewelry'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
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
    accessories: ['hat', 'jewelry'],
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
    accessories: ['glasses', 'jewelry'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', "a collared shirt"],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat', 'jewelry', "a collared shirt"],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ["a collared shirt"],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ["a collared shirt"],
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
let guessCounter = 0;
let seconds = 1;
let secondsString = "";
let minutes = 0;
let minutesString = "";
const winningSound = new Audio('audio/fanfare.flac');
const losingSound = new Audio('audio/wahwahwaaaaah.flac');

//set up fanfare winning sound 
const soundEffect = (result) => {
  if (result === "win") {
    winningSound.play();
  } else {
    losingSound.play();
  }
};

//Timer that is called every second that adds 1 second to the time and updates the innerHTML of the timerDiv
const timerStart = () => {
  if (seconds < 10) {
    secondsString = "0" + seconds; //adding a '0' if seconds is less than 10 to always have two digits
  } else if (seconds > 59) {
    seconds = 0;
    secondsString = "00";
    minutes++
  } else {
    secondsString = seconds;
  };

  if (minutes < 10) {
    minutesString = "0" + minutes;
  };

  timerDiv.innerHTML = `Time elapsed: ${minutesString}:${secondsString}`;
  seconds++;
  //It's not programmed to show hours because I thought it unlikely to be necessary 
} ;

//GuessCounter that updates the number of guesses
const updateGuesses = () => {
  guessCounter++;
  guessCounterDiv.innerHTML = `Guesses made: ${guessCounter}`;
};


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
  })
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  resetForStart();
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
};

const resetForStart = () => {
  //reset the timer, guesses, and board's and win/lose's display
  seconds = 0;
  minutes = 0;
  guessCounter = 0;
  guessCounterDiv.innerHTML = `Guesses made: ${guessCounter}`;
  winOrLoseWrapper.style.display = "none";
  board.style.display = "flex";
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  updateGuesses(); //updates the number of guesses
  selectQuestion(); //finds the category and value of the characteristic the user wants to find out

  const { category, value } = currentQuestion;
 
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (currentQuestion.value === secret[category]) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)){
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  // Show the correct alert message for different categories
  //I put the two if statements together so the filtering is done immediately after the alert is triggered
  //This means there is a repeated line on lines 347 & 356 and 350 & 359 but I thought it was a little unnecessary with two conditionals after one another 
  //the generateBoard is called at the end of the function at which point the charactersInPlay is already filtered
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value}.`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}.`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all ${value}s`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(`No, the person is not a ${value}! Remove all ${value}s`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else { //invoked if the category is 'hair' or 'eyes'
    if (keep) {
      alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all the people with ${value} ${category}.`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  if (confirm(`Are you sure you want to guess ${personToConfirm}?`)) { //confirm() returns a bool so if the answer to the question is true checkMyGuess will be called
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  winOrLoseWrapper.style.display = "flex"; //shows the finishd game screen
  board.style.display = "none"; // hides the board
  if (personToCheck === secret.name) {
    soundEffect("win"); //triggers a winning type of sound
    winOrLoseText.innerHTML = `Yay!! ${personToCheck} was correct! You used ${guessCounter} guesses and it took you ${minutes} minutes and ${seconds} seconds!`;
  } else {
    soundEffect("lose"); // triggers a sad losing sound
    winOrLoseText.innerHTML = `I'm sorry! ${personToCheck} was not the right answer. The correct person was ${secret.name}!!`;
  }
};

// Invokes the start function when website is loaded
start();
setInterval(timerStart, 1000);
console.log("updated now")
// All the event listeners
restartButton.addEventListener('click', start);
playAgain.addEventListener('click', start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
