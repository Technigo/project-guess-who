// All the DOM selectors stored as short variables
const board = document.getElementById('board')
//This is the Dropdown menu:
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const winOrLosetxt = document.getElementById('winOrLoseText')
const findOutbtn = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
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
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
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
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
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
    accessories: ['hat'],
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
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
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
];

// Global variables
let secret //This is the sectret person opject
let currentQuestion //This is the current question object
let charactersInPlay //This is an array of people left in the game

// Draw the game board
//This is the games styling - the cards etc
const generateBoard = () => {
  console.log(generateBoard);
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
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  console.log('secret')
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  currentQuestion = {};

};

// This function to start (and restart) the game
const start = () => {
  console.log('start game');
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  winOrLose.style.display = 'none';
  setSecret();
  generateBoard();
};

//This functions with a eventlistner
const restart = () => {
  console.log('restart');
  charactersInPlay = CHARACTERS;
  setSecret();
  currentQuestion = {};
  generateBoard();
};


// setting the currentQuestion object when you select something in the dropdown
// .parentNode.label stores hair and eyes
// category is the options - 


const selectQuestion = () => {
  console.log(selectQuestion);
  const category = questions.options[questions.selectedIndex].parentNode.label;
  //const = value this just go here - and this is the value ex "hair" = the category is "brown" = the value
  const value = questions.value;


  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category.toLowerCase(),
    value: value.toLowerCase(),
    // value: value
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log(checkQuestion);
  const { category, value } = currentQuestion;

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (secret[category].includes(value)) {
    filterCharacters(true);
    //something will happen - put in here
  } else {
    filterCharacters(false);
    //something will happen - put in here
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log(filterCharacters);
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );

    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {

    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(
        `Yes, the person is a ${value}! Keep all people that is ${value}`
      );
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(
        `No, the person is not ${value}! Remove all people that is ${value}`);
    }
  } else if (category === 'eyes') {

    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(
        `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(
        `No, the person do not have ${value} eyes! Remove all people with ${value} eyes`);
    }
  } else if (category === 'hair') {

    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(
        `No, the person do not have ${value} hair! Remove all people with ${value} hair`);
    }
  }


  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  console.log('guess')

  const confirmed = confirm(
    `Are you sure it's ${personToConfirm}?`
  );

  if (confirmed) {
    console.log('guess');
    checkMyGuess(personToConfirm);
  }
};


const checkMyGuess = (personToCheck) => {
  console.log('checkMyGuess');
  if (personToCheck === secret.name) {
    winOrLose.style.display = 'block',
      winOrLosetxt.textContent = `Congratulations! You are amazing! The right answer is ${personToCheck}`;
    board.style.display = 'none';

  } else {
    winOrLose.style.display = 'block',
      winOrLosetxt.textContent = `Ooops! That was the wrong answer. The right answer is ${secret.name}.`;
    board.style.display = 'none'
  }
}

start();



restartButton.addEventListener('click', () => {
  restart();
  winOrLose.style.display = 'none';
  board.style.display = 'flex';
});

questions.addEventListener('change', () => {
  selectQuestion();
});

findOutbtn.addEventListener('click', () => {
  checkQuestion();
});

playAgain.addEventListener('click', () => {
  start();
  winOrLose.style.display = 'none';
  board.style.display = 'flex';
});




//Keeping all my comments so I understand if I have to change anything :)



