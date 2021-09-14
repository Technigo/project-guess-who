// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton =  document.getElementById('filter');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hood'],
    other: [],
    gender: 'female'
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    other: [],
    gender: 'male'
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hood', 'beard'],
    other: ['smoker'],
    gender: 'male'
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: [],
    gender: 'male'
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: 'male'
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: 'male'
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
    gender: 'female'
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
    gender: 'female'
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'ginger',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: 'female'
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker'],
    gender: 'female'
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
    gender: 'male'
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: 'female'
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat', 'beard'],
    other: ['smoker'],
    gender: 'male'
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: [],
    gender: 'female'
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'ginger',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: 'female'
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: [],
    gender: 'male'
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: [],
    gender: 'female'
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: [],
    gender: 'female'
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: 'male'
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: [],
    gender: 'male'
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: [],
    gender: 'female'
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: [],
    gender: 'male'
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['beard'],
    other: [],
    gender: 'male'
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: [],
    gender: 'female'
  },
]

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
    `
  });
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  console.log(secret);
  // What else should happen when we start the game?
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  console.log(category);
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  console.log(value);

  currentQuestion = {
    category: category,
    value: value
  };
  console.log(currentQuestion);
}

const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Refactored version
 let keep = Array.isArray(secret[category]) ? secret[category].includes(value) : secret[category]  === value;
// To understnad this refactoring first check the links below:
// I have a ternary operator syntax which is a bit confusing so u can read about it here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// The Array.isArray() method determines whether the passed value is an Array. It returns a Boolean.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// In current case if secret[category] is an Array it will continue to this evaluation operation: secret[category].includes(value) === value
// and return a result of the evaluation in boolean format. In other case if the secret[category] is not an Array it will return false and continue to
//evaluate secret[category] === value , and return a boolean for this evaluation.


//  This code is a longer version of 286 line and also works perfectly fine. 
//   let keep;
//   if (category === 'hair' || category === 'eyes') {
//     if (secret.hair === value || secret.eyes  === value) {
//       keep = true; 
//     } else {
//       keep = false;
//     }
//   } else if (category === 'accessories' || category === 'other') {
//     if (secret.accessories.includes(value) || secret.other.includes(value)=== value) {
//       keep = true;
//     } else {
//       keep = false;
//     }
//   } else {
//     if (secret.gender === value) {
//       keep = true;
//     } else {
//       keep = false;
//     }
//   }
  filterCharacters(keep);
};


const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that smokes.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that smokes.`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    } 
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has a ${value} hair! Keep all people that have ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      alert(
        `No, the person doesn't have a ${value} hair! Remove all people that have a ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has a ${value} eyes! Keep all people that have ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      alert(
        `No, the person doesn't have a ${value} eyes! Remove all people that have a ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people with ${value} appearance.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that have a ${value} appearance.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  };
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start); 
questions.addEventListener('change',selectQuestion);
findOutButton.addEventListener('click',checkQuestion);
