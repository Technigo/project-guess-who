// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutBtn = document.getElementById('filter');
const guessCounter = document.getElementById('guesses');
const playAgainBtn = document.getElementById('playAgain');

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
    accessories: ['hat', 'buttons'],
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
    accessories: ['glasses', 'buttons'],
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
    accessories: ['glasses', 'jewelry', 'buttons'],
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
    accessories: ['glasses', 'jewelry'],
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
    accessories: ['glasses', 'hat', 'buttons'],
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
    accessories: ['glasses', 'jewelry'],
    other: [],
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', 'buttons'],
    other: [],
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewelry', 'buttons'],
    other: [],
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: [],
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['buttons'],
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
let charactersInPlay = CHARACTERS;
let minutesLabel = document.getElementById('minutes');
let secondsLabel = document.getElementById('seconds');
let numberOfGuesses = 0;
let totalSeconds = 0;

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

//Timer function
const setTime = () => {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
};

let timeStart = setInterval(setTime, 1000);

const pad = (time) => {
  let timeString = time + '';
  if (timeString.length < 2) {
    return '0' + timeString;
  } else {
    return timeString;
  }
};
// Function that randomly selects a person from the characters array and sets as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// Function that starts (and restarts) the game
const start = () => {
  // creating charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  numberOfGuesses = 0;
  guessCounter.innerHTML = `${numberOfGuesses}`;

  //Restart timer
  totalSeconds = 0;
  valString = '';
  secondsLabel.innerHTML = '';
  minutesLabel.innerHTML = '';
  // functions that are called when the game starts
  generateBoard();
  setSecret();
};

// sets the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// Function that is invoked when you click on 'Find Out' button.
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

// Function that filters the characters array and redraws the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person is wearing ${value}! Keep all people that are wearing ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person isn't wearing ${value}! Remove all people that are not wearing ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person is not a ${value}! Remove all the people who are ${value}s!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people that has ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people that has ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }

  generateBoard();
};

// Function where the player confirms its guess
const guess = (suspect) => {
  let userConfirm = confirm(`Do you think the secret person is ${suspect}?`);
  {
    if (userConfirm) {
      checkMyGuess(suspect);
    }
  }
};

// If player confirms, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `Yay, after ${totalSeconds} seconds and ${numberOfGuesses} guesses, you win! ${suspect} is the secret person!`;
  } else {
    winOrLoseText.innerHTML = `Noooooo, you made ${numberOfGuesses} guesses and still got it wrong! ${suspect} is not the secret person, ${secret.name} is! You lose the game!`;
  }
  winOrLose.style.display = 'flex';
};

start();

// All the event listeners
restartButton.addEventListener('click', start);

questions.addEventListener('change', selectQuestion);
findOutBtn.addEventListener('click', () => {
  checkQuestion();
  numberOfGuesses += 1;
  guessCounter.innerHTML = `${numberOfGuesses}`;
});
playAgainBtn.addEventListener('click', () => {
  start();
  winOrLose.style.display = 'none';
});
