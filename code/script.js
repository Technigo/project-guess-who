// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOut = document.getElementById('filter');
const playAgain = document.getElementById('playAgain');
const message = document.getElementById('winOrLoseText');
const wrapper = document.querySelector('.win-or-lose-wrapper');
const guesses = document.querySelector('.guesses');
const highscore = document.querySelector('.highscore');
const startTime = new Date();
const gameTimeParagraph = document.querySelector('.game-time');

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
    other: ['sassy pants'],
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'sassy pants'],
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
    other: ['sassy pants'],
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
    other: ['smoker', 'sassy pants'],
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'sassy pants'],
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
    other: ['smoker', 'sassy pants'],
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: ['sassy pants'],
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['sassy pants'],
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
    other: ['sassy pants'],
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
    other: ['sassy pants'],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = '';
  charactersInPlay.forEach(person => {
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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

const increaseGuesses = () => guesses.innerHTML++;

const setHighscore = score => {
  if (score < highscore.innerHTML || highscore.innerHTML === '0') {
    highscore.innerHTML = score;
  }
};

const checkGameTime = finishTime => {
  const gameTime = (finishTime - startTime) / 1000;

  // Stolen function from stack overflow
  const secondsToHms = d => {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
    const mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
    const sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
    return hDisplay + mDisplay + sDisplay;
  };
  gameTimeParagraph.innerHTML += ' ' + secondsToHms(gameTime);
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  wrapper.style.display = 'none';
  guesses.innerHTML = 0;
  generateBoard();
  setSecret();
  questions.selectedIndex = 0;
  currentQuestion = {
    category: 'hair',
    value: 'brown',
  };
  console.log(`The secret person is: ${secret.name}`);
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  };

  console.log('secret person', secret);
  console.log('currentQuestion:');
  console.log(currentQuestion);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  // Destructuring category and value from the currentQuestion object
  const { category } = currentQuestion;

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  let keep, filteredCharacters;
  if (category === 'hair' || category === 'eyes') {
    keep = secret[category] === currentQuestion.value;
    // console.log('secret[category]:', secret[category]);
    // console.log('currentQuestion.value:', currentQuestion.value);
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(currentQuestion.value);
    // console.log('secret[category]:', secret[category]);
    // console.log('currentQuestion.value:', currentQuestion.value);
  }

  increaseGuesses();

  // Then invoke filterCharacters
  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = keep => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}`
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      );
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${
          value === 'sassy pants' ? value : value + 's'
        }`
      );
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are ${
          value === 'sassy pants' ? value : value + 's'
        }`
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`
      );
    } else {
      alert(
        `No, the person doesnt have ${value} ${category}! Remove all people with ${value} ${category}`
      );
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        person => person[category] === value
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        person => person[category] !== value
      );
    }
  } else if (category === 'accessories' || category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(person =>
        person[category].includes(value)
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        person => !person[category].includes(value)
      );
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard(charactersInPlay);
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = personToConfirm => {
  const confirmed = confirm(
    `Are you sure you want to guess on ${personToConfirm}?`
  );
  confirmed && checkMyGuess(personToConfirm);
};

// If you confirm, this function is invoked
const checkMyGuess = personToCheck => {
  increaseGuesses();
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    checkGameTime(new Date());

    // 2. Set a Message to show in the win or lose section accordingly
    message.innerHTML = 'YOU WIN! 🥳';
    // 3. Show the win or lose section
    wrapper.style.display = 'flex';
    // 4. Hide the game board
    charactersInPlay = [];
    generateBoard([]);
    // 5. Set highscore
    setHighscore(guesses.innerHTML);
  } else {
    alert('Sadly that was not the correct guess 😢');
  }
  playAgain.addEventListener('click', start);
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
findOut.addEventListener('click', checkQuestion);
questions.addEventListener('change', selectQuestion);

console.log(startTime);
