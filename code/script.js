const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('playAgain')
const filterButton = document.getElementById('filter')

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
]

// Global variables declared.
let secret
let currentQuestion
let charactersInPlay

// Function to generate gameboard
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
}

//Function that selects the secretperson
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS.slice();// Create a copy of characters

  setSecret();
  // Sets secret person randomly.

  // function that shuffles characters on the board
  function shuffleArray(array) {
  
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(CHARACTERS);//Shuffles characters 
  generateBoard();// Generate gameboard

  
  document.getElementById('winOrLose').style.display = 'none';
  //Hides the win or lose section 
  document.getElementById('board').style.display = 'flex';
  // Shows gameboard.
};

//Function thats select a question
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  const value =questions.value;
  

  currentQuestion = {
    category: category,
    value: value,
  }
}

// Funtion to check the selected question agains the secret person
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false;
// compares question to secretperson.
  if (category === 'hair' || category === 'eyes') {

keep = value === secret[category];

  } else if (category === 'accessories' || category === 'other') {
keep = secret[category].includes(value);

  } 

  
filterCharacters(keep);
};

// Function to filter characters based on the selected question
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
  // This part shows appropiate messages based on category
  if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes the person is a ${value}! Keep all ${value}'s!`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No the person is not a ${value}, Reamove all ${value}'s!`);
    }
  } else if (category === 'accessories') {
  if (keep) {
charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
alert(`yes the person wears ${value}! Keep all people with ${value}!`);
 } else {
  charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
  alert(`No the person does not wear ${value}! Remove all people with ${value}!`);
 }
} else if (category === 'hair') {
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    alert(`Yes the person has ${value} ${category}! Keep all people with ${value} ${category}!`);
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    alert(`No the person does not have ${value} ${category}! Remove all people with ${value} ${category}!`);
  }
} else {
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    alert(`Yes the person has ${value} ${category}! Keep all people with ${value} ${category}!`);
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    alert(`No the person does not have ${value} ${category}! Remove all people with ${value} ${category}!`);
  }
}
  
  
 generateBoard();// redraws gameboard
};

// Function that controlles the users guess
const guess = (personToConfirm) => {
  
  const isConfirmed = confirm(`Are you sure you want to guess that ${personToConfirm} is the secret person?`);
  
  if (isConfirmed) {
    checkMyGuess(personToConfirm);
  }
};

// This function compares your guess to the secretperson and if its a match it shows a message.
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    document.getElementById('winOrLoseText').textContent ='Congratulations! You guessed right 🥳🥳🥳!';

  } else {
document.getElementById('winOrLoseText').textContent = 'Sorry you lost, try again!';

  } 

  document.getElementById('winOrLose').style.display = 'flex';
  document.getElementById('board').style.display = 'none';
};

// This function resets the dropdown 
const resetDropdowns = () => {
  questions.selectedIndex = 0;
};


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)

//Eventlistener to the "filter"button
filterButton.addEventListener('click', () => {
  selectQuestion(); // Set the current question based on dropdowns
  
  checkQuestion(); //Filter characters based on question

  resetDropdowns(); //resets dropdown to defoault values
});
