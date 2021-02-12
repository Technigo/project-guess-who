// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const gameBoard = document.getElementById('gameBoard');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const playAgain = document.getElementById('playAgain');
const playButton = document.getElementById('letsPlayButton');
const howToPlay = document.getElementById('howToPlayQuestion');
const howToPlayAnswer = document.getElementById('howToPlayAnswer');
const input = document.getElementById('input');
const playerName = document.getElementById('playerName');
let questionNumber = document.getElementById('questionCounter');

// Array with all the characters, as objects

const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    ageImg: 20,
    age: 'under 30',
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    ageImg: 55,
    age: 'over 45',
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
    ageImg: 65,
    age: 'over 45',
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    ageImg: 24,
    age: 'under 30',
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 32,
    age: '30-45',
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 23,
    age: 'under 30',
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 35,
    age: '30-45',
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 28,
    age: 'under 30',
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 66,
    age: 'over 45',
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
    ageImg: 31,
    age: '30-45',
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
    ageImg: 27,
    age: 'under 30',
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 32,
    age: '30-45',
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
    ageImg: 42,
    age: '30-45',
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
    ageImg: 33,
    age: '30-45',
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 37,
    age: '30-45',
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    ageImg: 18,
    age: 'under 30',
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 30,
    age: 'under 30',
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 39,
    age: '30-45',
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    ageImg: 43,
    age: '30-45',
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    ageImg: 19,
    age: 'under 30',
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    ageImg: 69,
    age: 'over 45',
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    ageImg: 35,
    age: '30-45',
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    ageImg: 44,
    age: '30-45',
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
    ageImg: 18,
    age: 'under 30',
  },
];

// Global variables
let secret, currentQuestion, charactersInPlay;
questionNumber = 0;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <p class="age">${person.ageImg} years old</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
};

// Randomly selects a person from the characters array and sets as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  setSecret();
  generateBoard();
  gameBoard.style.display = "flex";
  winOrLose.style.display = "none";
  input.value = '';
  questionNumber = 0;
  questionCounter.innerHTML = '';
};

// Setting the currentQuestion object when selecting something in the dropdown
const selectQuestion = () => {

  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
 
  // Variable that stores the actual value of the asked question
  const value = questions.value;

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value,
      category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category,
    }
  } else if (category === 'age') {
    currentQuestion = {
      attribute: 'age',
      value,
      category,
    }
  }
};


// This function gets invoked when clicking on 'Find out'.

const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute];
  // Compares the currentQuestion with the secret person.
  // Then invoke filterCharacters
  filterCharacters(keep);
};

// Function that filters the characters array, alerts the player and redraws the game board.

const filterCharacters = (keep) => {

  const { attribute, category, value } = currentQuestion;

  if (category === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all the people with ${value} hair!`
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all the people with ${value} hair!`
      );
    }
  } else if (category === 'eye color') {
      if (keep) {
        alert(
          `Yes, the person has ${value} eyes! Keep all the people with ${attribute} eyes!`
        );
      } else {
        alert(
          `No, the person doesn't have ${value} eyes! Remove all the people with ${value} eyes!`
        );
      }
  } else if (category === 'accessories') {
      if (keep) {
        alert(
          `Yes, the person wears ${attribute}! Keep everyone that wears ${attribute}!`
        );
      } else {
        alert(
          `No, the person doesn't wear ${attribute}! Remove everyone that wears ${attribute}!`
        );
      }
  } else if (category === 'other') {
      if (keep) {
        alert(
          `Yes, the person is ${attribute}! Keep all the ${attribute}!`
        );
      } else {
        alert(
          `No, the person is not ${attribute}! Remove all the ${attribute}!`
        );
      }
  } else if (category === 'age') {
    if (keep) {
      alert(
        `Yes, the person is ${value} years old! Keep all the people that is ${value} years old!`
      );
    } else {
      alert(
        `No, the person is not ${value} years old! Remove all the people that is ${value} years old!`
      );
    }
  }

  // Filtering out people 
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value);
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value);
  }

  // Redraws the game board and increments the question counter
  generateBoard();
  questionNumber ++;
  questionCounter.innerHTML = `<p>QUESTIONS ASKED: ${questionNumber}</p>`
};

  

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const playerGuess = confirm(`Do you want to guess on ${suspect}?`)

  // When the player wants to guess, it invokes the checkMyGuess function
  if (playerGuess) {
  checkMyGuess(suspect);
  }
};

// If player confirms, this function is invoked. Gives different responses based on right or wrong guess and if player makes it in 5 or less questions.
const checkMyGuess = (suspect) => {
  if (suspect === secret.name && questionNumber <= 5) {
    winOrLoseText.innerHTML = `
      <i class="far fa-grin-stars"></i>
      <h1>CONGRATULATIONS, ${input.value}! GREAT JOB!</h1>
      <h2>You guessed on ${suspect} and that was correct and you did it with only ${questionNumber} questions!</h2>`;
  } else if (suspect === secret.name) {
      winOrLoseText.innerHTML = `
        <i class="far fa-grin-stars"></i>
        <h1>CONGRATULATIONS, ${input.value}!</h1> 
        <h2>You guessed on ${suspect} and that was correct and you did it with ${questionNumber} questions!</h2>`;
  } else {
      winOrLoseText.innerHTML = `
        <i class="far fa-frown"></i>
        <h2>I'm sorry, ${input.value}! You guessed on ${suspect} and that was wrong and you did it with ${questionNumber} questions! The right answer was ${secret.name}!</h2>`;
  }
  // Restarts question counter, hides gameBoard and shows winOrLose section
  questionCounter.innerHTML = '';
  gameBoard.style.display = "none";
  winOrLose.style.display = "flex";
};


// Invokes the start function when website is loaded
start();


// All the event listeners

restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
playAgain.addEventListener('click', () => {
  start();
  gameBoard.scrollIntoView({behavior: 'smooth'});
});

playButton.addEventListener('click', () => {
  gameBoard.scrollIntoView({behavior: 'smooth'});
  playerName.innerHTML = `<p>${input.value}</p>`
});

howToPlay.addEventListener('click', () => {
  howToPlayAnswer.style.display = "flex";
});

howToPlayAnswer.addEventListener('click', () => {
  howToPlayAnswer.style.display = "none";
});



