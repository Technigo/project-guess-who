// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const winOrLoseSection = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const playAgainButton = document.getElementById('playAgain');
const timer = document.getElementById('timer');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    shirt: [],
    habit: '',
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    shirt: ['striped shirt'],
    habit: '',
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    shirt: [],
    habit: 'smoking'
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    shirt: ['collared shirt'],
    habit: ''
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    shirt: ['striped shirt', 'collared shirt'],
    habit: ''
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    shirt: [],
    habit: ''
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'jewelry'],
    shirt: ['collared shirt'],
    habit: ''
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    shirt: ['striped shirt'],
    habit: ''
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewelry'],
    shirt: [],
    habit: ''
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    shirt: [],
    habit: 'smoking'
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    shirt: ['collared shirt'],
    habit: 'smoking'
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    shirt: [],
    habit: ''
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    shirt: [],
    habit: 'smoking'
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    shirt: [],
    habit: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    shirt: ['striped shirt'],
    habit: ''
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    shirt: [],
    habit: ''
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    shirt: [],
    habit: ''
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'jewelry'],
    shirt: [],
    habit: ''
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    shirt: ['collared shirt'],
    habit: ''
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewelry'],
    shirt: ['collared shirt'],
    habit: ''
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
    shirt: [],
    habit: ''
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    shirt: ['collared shirt'],
    habit: ''
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    shirt: ['collared shirt'],
    habit: ''
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    shirt: [],
    habit: ''
  },
];

// Global variables
let secretPerson;
let currentQuestion;
let charactersInPlay;
// Create a counter to keep track of the number of times the player clicks the Find Out button to get a hint
let countOfHints = 0;
// Create a start time and an end time of the game
let startTime = 0;
let endTime = 0;


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
};

// Randomly select a person from the characters array and set as the value of the variable called secretPerson
const setSecretPerson = () => {
  secretPerson = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secretPerson);
};

// Function to start and update timer every second, to be invoked when the website is loaded - WHY SHOWING TIME WITH MINUS??? WHY ALWAYS STARTS AT 1 MINUTE???
const updateTimer = () => {
  setInterval(() => {
    startTime = new Date().getTime();
    let timeDiff = endTime - startTime;
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    timer.innerHTML = `${minutes}:${seconds}`;
  }, 1000);
}

// Function to stop timer, to be invoked when win or lose section is displayed
const stopTimer = () => {
  endTime = new Date().getTime();
  clearInterval(updateTimer());
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // Remove the result of the previous game and display the game board
  winOrLoseSection.style.display = 'none';
  board.style.display = 'flex';
  // Reset the selected option as the first one in the dropdown list
  questions.selectedIndex = 0;
  // Invoke the function to set a new secret person
  setSecretPerson();  
  // Invoke the function to draw the game board
  generateBoard();
  // Invoke the function to start and update timer
  updateTimer();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.  
  const category = questions.options[questions.selectedIndex].parentNode.label.toLowerCase();

  // This variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value
  }
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion; 

  // Compare the currentQuestion details with the secretPerson person details to determine if we should keep or remove people based on that
  // Invoke the function filterCharacters, passing in the value of the variable "keep"

  if (secretPerson[category].includes(value)) {
    filterCharacters(true);
  } else {
    filterCharacters(false);
  }

  // Increase the counter of hints by 1 and return it
  countOfHints++;
  return countOfHints;
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === 'hair' || category === 'eyes' || category === 'habit') {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people that have ${value} ${category}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people that have ${value} ${category}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    };
  } else if (category === 'accessories' || category === 'shirt') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    };
  } 

  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// When clicking "Guess", the player first has to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // Store the interaction from the player in a variable
  const personGuessed = personToConfirm;

  // Prompt the player to confirm whether he/she wants to guess. If yes, invoke the checkMyGuess function
  if (confirm(`Would you like to guess on ${personGuessed}? If it is wrong, you lose...`)) {
    checkMyGuess(personGuessed);
  };
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secretPerson person's name  
  // 2. Set a Message to show in the win or lose section accordingly
  if (personToCheck === secretPerson.name) {
    winOrLoseText.innerText = `Congratulations! You won after receiving ${countOfHints} hint(s)! Good job!`;
  } else {
    winOrLoseText.innerText = 'Sorry, wrong choice! Game over!';
  };

  // 3. Show the win or lose section
  winOrLoseSection.style.display = 'flex';

  // 4. Hide the game board
  board.style.display = 'none';

  // 5. Stop the timer
  stopTimer();
};

// Invokes the start function when website is loaded
start();

// All the event listeners
// Start or restart the game when user clicks on Restart button
restartButton.addEventListener('click', start);

// Invoke function to select question when user changes the option
questions.addEventListener('change', selectQuestion);

// Filter the characters when user clicks on Find out button
findOutButton.addEventListener('click', checkQuestion);

// Restart the game when user clicks on Play Again button
playAgainButton.addEventListener('click', start);