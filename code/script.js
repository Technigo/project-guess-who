// DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')

const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
];

// Global variables
let secret, currentQuestion, charactersInPlay, keep

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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
};

// This function to start (and restart) the game
const start = () => {

  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  generateBoard()
  setSecret()

};

// setting the currentQuestion object when you select something in the dropdown
// This variable stores what option group (category) the question belongs to.
// We also need a variable that stores the actual value of the question we've selected.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value,
      category
    }
  } else if (category === 'eye color') {
      currentQuestion = {
        attribute: 'eyeColor',
        value,
        category
      }
  } else if (category === 'hat') {
      currentQuestion = {
        attribute: 'hat',
        value: true, 
        category
    } 
  } else if (category === 'glasses') {
      currentQuestion = {
        attribute: 'glasses',
        value: true, 
        category
      }  
  } else if (category === 'other') {
      currentQuestion = {
        attribute: 'smoker',
        value: true, 
        category 
    }
  }
};
  
// This function should be invoked when you click on 'Find Out'.
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  
const checkQuestion = () => {
  selectQuestion()
  const secretValue = secret[currentQuestion.attribute]
  if (secretValue === currentQuestion.value) {
    filterCharacters(true,currentQuestion.category);
  } else {
    filterCharacters(false,currentQuestion.category);
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  if (currentQuestion.category === 'glasses') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`
      );
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
      );
    }  
  } else if (currentQuestion.category === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person have ${currentQuestion.value} hair! Keep all that who have ${currentQuestion.value}`
      );
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} hair! Remove all that have ${currentQuestion.value}`
      );
    }
    } else if (currentQuestion.category === 'hat') {
    if (keep) {
      alert(
        `Yes, the person wear ${currentQuestion.attribute}! Keep all that who have a ${currentQuestion.attribute}`
      );
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that have a ${currentQuestion.attribute}`
      );
    }
  } else if (currentQuestion.category === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person have ${currentQuestion.value} eyes! Keep all have ${currentQuestion.value}`
      );
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} eyes! Remove all that have${currentQuestion.value}`
      );
    }  
  } else if (currentQuestion.category === 'other') {
      if (keep){
        alert(
          `Yes, the person have ${currentQuestion.attribute}, but only at parties. Keep all that are ${currentQuestion.attribute}`
          );
      } else {
        alert(
          `No, the person is not a ${currentQuestion.attribute}! Remove all that are ${currentQuestion.attribute}`
        );
      } 
  };

  // Invoke a function to redraw the board with the remaining people.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
  }
  generateBoard()
};

// when clicking guess, the player first have to confirm that they want to make a guess.
  // store the interaction from the player in a variable.
  // If the player wants to guess, invoke the checkMyGuess function.
const guess = (suspect) => {
    let confirmation = confirm(`So you're guessing on ${suspect}?`);
    if (confirmation === true) {
    checkMyGuess(suspect)
  }
};

const checkMyGuess = (suspect) => {
  if (suspect === secret.name){
    winOrLoseText.innerHTML = `Yey! High Five! It was ${secret.name}`
    winOrLose.style.display = 'block';
  } else {
    winOrLose.style.display = 'block';
    winOrLoseText.innerHTML = `Sorry! It is not ${suspect}`
  }
    winOrLose.style.display = 'flex'
    board.style.display = 'none'
};

// Invokes the start function when website is loaded
start()

// Event listeners
questions.addEventListener('change', () => selectQuestion)
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', start)
filter.addEventListener('click', checkQuestion)
