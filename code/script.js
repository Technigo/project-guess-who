// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const playAgain = document.getElementById('playAgain');
const playButton = document.getElementById('lets-play-button');
const gameContainer = document.getElementById('game-container');
const howToPlay = document.getElementById('how-to-play-question');
const howToPlayCard = document.getElementById('how-to-play-answer');
const input = document.getElementById('input');
const playerName = document.getElementById('player-name');
let questionNumber = document.getElementById('questionNum');

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
    ageImg: 30,
    age: 'under 30',
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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  setSecret();
  setTimeout(generateBoard, 1000);
  board.style.display = "flex";
  winOrLose.style.display = "none";
  input.value = '';
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
 
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value,
      category,
    }
  } else if (category === 'eye color') {
    // Set this up your self
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category,
    }
  } else if (category === 'other') {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
      attribute: value,
      value: true,
      category,
    }
  } else if (category === 'age') {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
      attribute: 'age',
      value,
      category,
    }
  }
};


// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute];
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Show the correct alert message for different categories

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
  generateBoard();
  questionNumber ++;
  questionNum.innerHTML = `<div><p>QUESTION ${questionNumber}</p></div>`
  
};

  // Invoke a function to redraw the board with the remaining people.
  

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const playerGuess = confirm(`Do you want to guess on ${suspect}?`)

  if (playerGuess) {
  checkMyGuess(suspect);
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `
      Congratulations, ${input.value}! You win! You guessed on ${suspect} and that was correct and you did it in only ${questionNumber} questions!`;
  } else {
    winOrLoseText.innerHTML = `
      I'm sorry, ${input.value}! You lose! You guessed on ${suspect} and that was wrong and you did it in ${questionNumber} questions! The right answer was ${secret.name}!`;
  }
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  questionNumber = 0;
  questionNum.innerHTML = '';
  board.style.display = "none";
  winOrLose.style.display = "flex";
};

// Invokes the start function when website is loaded
start();


// All the event listeners

restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
playAgain.addEventListener('click', start);

playButton.addEventListener('click', () => {
  board.scrollIntoView({behavior: 'smooth'});
  playerName.innerHTML = `<p>${input.value}</p>`
});

howToPlay.addEventListener('click', () => {
  howToPlayCard.style.display = "flex";
});

howToPlayCard.addEventListener('click', () => {
  howToPlayCard.style.display = "none";
});



