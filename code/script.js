// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
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
    accessories: ['glasses', 'necklace'],
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
    accessories: ['glasses', 'necklace'],
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
    accessories: ['glasses', 'hat', 'necklace'],
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

// Global variables
let secret
let currentQuestion
let charactersInPlay


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
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  
  //Clears the game board fron the winOrLose-page
  winOrLose.style.display = 'none';
  board.style.display = "flex";

  generateBoard();
  setSecret();
  console.log(secret.name);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
    // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value //not sure why questions.value also work, or does it? 

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function is invoked when you click on the 'Find Out' button.
const checkQuestion = () => {
  // Compare the currentQuestion details with the secret person details 
  const { category, value } = currentQuestion
  
  //Saving the value in the variable keep
  let keep 
  if (category === 'hair' || category === 'eyes') {
    keep = value === secret[category];
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value); 
  }
  //Invoke next function filterCharacters and passing along keep 
  filterCharacters(keep);
}

// Alert correct message after question is asked and redraw the game board with the new set of character.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
    if (category === 'accessories') {
      if (keep) {
        alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      } else {
        alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      }
   }
    else if (category === 'other') {
      if (keep) {
        alert(`Yes, the person is a ${value}! Keep all the ${value}s`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      } else {
        alert(`No, the person isn't a ${value}! Remove all the ${value}s`);
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      }
    }

    else {
      if (keep) {
        alert(`Yes, the person have ${value} ${category}! Keep all people that have ${value} ${category}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      } else {
        alert(`No, the person does not have ${value} ${category}. Remove all people with ${value} ${category}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      }
    }
    //redraw the board 
    generateBoard(); // Why don't I need to pass along a value/attribute ex:charactersInPlay? 
  }

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(`Are you sure you want to guess ${personToConfirm}?`);
  // If the player wants to guess, invoke the checkMyGuess function.   
  if (confirmGuess) { //confirm  = true if user click yes
       checkMyGuess(personToConfirm); //Why not passing personToCheck?!And why do I have to pass personToConfirm
    }
} //Does not need to add an else, because if the user don't confirm, checkMyGUess is not invoked and user can continue ask questions.

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
  // 2. Set a Message to show in the win or lose section accordingly
  winOrLoseText.innerHTML = `Correct, you win!`; 
  } else {
    winOrLoseText.innerHTML = `Wrong, you loose!`;
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'; 
  // 4. Hide the game board
  board.style.display = 'none'; 
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start)
findOut.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgain.addEventListener('click', start)

