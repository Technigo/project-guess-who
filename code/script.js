// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const playAgainButton = document.getElementById('playAgain');
const findOutButton = document.getElementById('filter');
const winOrLoseText = document.getElementById('winOrLoseText');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: [],
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['beard', 'striped shirt'],
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: [],
    other: ['smoking habit', 'beard'],
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['a tie'],
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
    accessories: ['sunglasses'],
    other: [],
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses', 'a necklace'],
    other: [],
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['striped shirt'],
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'a necklace', 'earrings'],
    other: [],
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['smoking habit', 'turtleneck sweater'],
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'a hat'],
    other: ['smoking habit'],
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['turtleneck sweater'],
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'a hat'],
    other: ['smoking habit', 'beard'],
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a hat'],
    other: [],
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['striped shirt'],
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat'],
    other: [],
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['turtleneck sweater'],
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'earrings'],
    other: ['turtleneck sweater'],
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
    accessories: ['sunglasses', 'a hat', 'a necklace'],
    other: [],
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
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
    accessories: ['a tie'],
    other: ['beard'],
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'a hat'],
    other: [],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;

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

// Randomly select a character from the characters array and set as the value of the variable secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secret);
};

// This function starts (and restarts) the game
const start = () => {
  // Here we're setting the array charactersInPlay to be all characters to start with
  charactersInPlay = CHARACTERS;

  // In case it's a restart this will remove the win/lose screen
  board.classList.remove('hide-board');
  winOrLose.classList.remove('show-win-lose', 'bg-lose');

  setSecret();
  generateBoard();
  selectQuestion();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // These variables stores what optgroup (hair, accessories etc.)
  // the question  belongs to" and value stores the actual value (brown, green etc.)
  // of the question selected.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function is invoked when player click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // currentQuestion details is being compared with the secret character's
  // and based on that we're deciding what characters to keep or remove
  // Then invoke filterCharacters

  if (
    currentQuestion.category === 'hair' ||
    currentQuestion.category === 'eyes'
  ) {
    if (secret[category] === value) {
      filterCharacters(true);
      alert(
        `Yes, the person have ${value} ${category}! Keep all people with ${value} ${category}.`
      );
    } else {
      filterCharacters(false);
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`
      );
    }
  } else if (category === 'accessories') {
    if (secret[category].includes(value)) {
      filterCharacters(true);
      alert(
        `Yes, the person is wearing ${value}! Keep all people with ${value}.`
      );
    } else {
      filterCharacters(false);
      alert(
        `No, the person doesn't wear ${value}! Remove all people with ${value}.`
      );
    }
  } else if (category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true);
      alert(`Yes, the person has a ${value}! Keep all people with a ${value}.`);
    } else {
      filterCharacters(false);
      alert(
        `No, the person doesn't have a ${value}! Remove all people with a ${value}.`
      );
    }
  }
};

// This function is used for filtering the characters array after the player makes a guess.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      const { category, value } = currentQuestion;
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === 'accessories' || category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }
  // After the filtering we invoke this function again,
  // now to redraw the board with the remaining characters
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make the guess.
const guess = (personToConfirm) => {
  if (
    confirm(`You are about to make ${personToConfirm} your guess?`) === true
  ) {
    checkMyGuess(personToConfirm);
  }
};

// If player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerText = `🎉CORRECT!🎉 \n \n It is ${personToCheck}. \n \n 🏆You won!🏆`;
  } else {
    winOrLoseText.innerText = `Wrong! \n \n It was ${secret.name}, \n not ${personToCheck}. \n \n ☠️ Game Over ☠️`;
  }
  board.classList.add('hide-board');
  winOrLose.classList.add('show-win-lose');
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
playAgainButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
