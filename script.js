// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const winOrLoseText = document.getElementById('winOrLoseText');
const winOrLoseSection = document.getElementById('winOrLose');
const playAgainButton = document.getElementById('playAgain');

// Array with all the characters, as objects
const characters = [
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
let secret, personFeature, charactersInPlay;

// Funtion that draws the game board
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
    `;
  });
};

// Function that randomly selects a person from the characters array and stores the value in the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secret);
};

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = characters;
  generateBoard();
  setSecret();
  questions.value = questions.options[0];
  board.style.display = "flex";
  winOrLoseSection.style.display = "none";
};

// Function that sets the personFeature object when you select something in the dropdown
const selectQuestion = () => {
  const selectedCategory = questions.options[questions.selectedIndex].parentNode.label;
  const selectedValue = questions.options[questions.selectedIndex].value;
  console.log(selectedValue, selectedCategory);

  if (selectedCategory === 'hair color') {
    personFeature = {
      attribute: 'hairColor',
      value: selectedValue,
      category: selectedCategory
    };
  } else if (selectedCategory === 'eye color') {
      personFeature = {
        attribute: 'eyeColor',
        value: selectedValue,
        category: selectedCategory
      };
  } else if (selectedCategory === 'accessories') {
      personFeature = {
        attribute: selectedValue,
        value: true,
        category: selectedCategory
      };
  } else if (selectedCategory === 'other') {
      personFeature = {
        attribute: 'smoker',
        value: true,
        category: selectedCategory
      };
  }
};

// This function is invoked when you click on 'Find Out'.
const checkQuestion = () => {
  let keep = personFeature.value === secret[personFeature.attribute];
  filterCharacters(keep);
};

// Function that filter characters array and redraw the game board.
const filterCharacters = (keep) => {
  let group = personFeature.category;

  // Alert messages for different categories
  if (group === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${personFeature.value} hair! Keep all that have ${personFeature.value} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${personFeature.value} hair! Remove all that have ${personFeature.value} hair`
      )
    }
  } else if (group === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person has ${personFeature.value} eyes! Keep all that have ${personFeature.value} eyes`
      )
    } else {
      alert(
        `No, the person doesn't have ${personFeature.value} eyes! Remove all that have ${personFeature.value} eyes`
      ) 
    }   
  } else if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${personFeature.attribute}! Keep all that wears ${personFeature.attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${personFeature.attribute}! Remove all that wears ${personFeature.attribute}`
      )
      }       
    } else {
      if(keep) {
        alert(
          `Yes, the person is a ${personFeature.attribute}! Remove all non-${personFeature.attribute}s`
       ) 
      } else {
        alert(
          `No, the person is not a ${personFeature.attribute}! Remove all ${personFeature.attribute}s`
        )
      } 
    };

  // Filter method that filter out people from the charactersInPlay
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[personFeature.attribute] === personFeature.value);
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[personFeature.attribute] !== personFeature.value);
  }

  // Invoking function that draws the board with the remaining people.
  generateBoard(charactersInPlay);
};

// When player clicks guess, the player have to confirm that they want to make a guess.
const guess = (suspect) => {
  const confirmGuess = confirm(`Do you want to make a guess on ${suspect}?`);
    if (confirmGuess === true) {
      checkMyGuess(suspect);
    } else {
      generateBoard(charactersInPlay);
    }
};

// If player confirms in previous function guess, this function is invoked.
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `
    You win! ${suspect} is the one we are looking for!
    `;
  } else {
    winOrLoseText.innerHTML = `
    Unfortunately ${suspect} is not the one we're looking for...
    `; 
  }
  // Shows the win or lose section and hides the game board
  winOrLoseSection.style.display = "flex";
  board.style.display = "none";
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
playAgainButton.addEventListener('click', start);


