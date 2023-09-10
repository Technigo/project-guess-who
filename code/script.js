// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const playAgain = document.getElementById('playAgain');

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

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;



// Draw the game board
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


// This function randomly selects a person from the characters array
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  secretPersonName = secret.name;
  console.log(secret);
  
}

// This function starts (and restarts) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // Reset the win/lose section and show the game board

  boardElement.style.display = 'flex';
  winOrLoseElement.style.display = 'none';

  // Reset the secret person for the new game
  setSecret();

  // What else should happen when we start the game?
  generateBoard();

}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;
  // This variable stores what option group (category) the question belongs to.
  
  currentQuestion = {
    category: category,
    value: value,
  };
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  selectQuestion();
  const { category, value } = currentQuestion;
  let keep = false;
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    keep = value === secret[category];
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value);
  }
    
  filterCharacters(keep);
}



// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people that has ${value}`
      )
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that has ${value}`
      )
    }
  } else {
    if (keep) {
      alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`)
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`)
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
 
  }
  // It filters by category to keep or remove based on the keep variable.

  if (category === 'hair' || category === 'eyes') {
    charactersInPlay = charactersInPlay.filter((person) => 
      keep ? person[category] === value : person[category] !== value
    );
  } else if (category === 'accessories' || category === 'other') {
    charactersInPlay = charactersInPlay.filter((person) => 
      keep ? person[category].includes(value) : !person[category].includes(value)
    );
  }

  generateBoard();
  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmation = confirm('Are you sure you want to make this guess?');    // store the interaction from the player in a variable.
  // remember the confirm() ?
  
  if (confirmation) {
    checkMyGuess(personToConfirm);  // If the player wants to guess, invoke the checkMyGuess function.
  } else {
    console.log("Player chose not to make a guess.");
  }
}

let secretPersonName = ""; // Replace with the actual secret person name.
let boardElement = document.getElementById('board'); // Replace with your game board element ID.
let winOrLoseElement = document.getElementById('winOrLose'); // Replace with your win/lose section element ID.
let messageElement = document.getElementById('winOrLoseText'); // Replace with your message element ID.

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secretPersonName) {
    // If the guessed person is the same as the secret person, the player wins.
    messageElement.innerText = "Congratulations! You've guessed the right person!";
  } else {
    // Otherwise, the player loses.
    messageElement.innerText = "Sorry, that was not the right person. You lose.";
  }

 // Reset the secret person for the new game
 winOrLoseElement.style.display = 'flex';
 boardElement.style.display = 'none'
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}
// Invokes the start function when website is loaded
start();
setSecret();
// All the event listeners
restartButton.addEventListener('click', start);
playAgain.addEventListener('click', start);
document.querySelector('#questions').addEventListener('change', selectQuestion);
questions.addEventListener('change', selectQuestion);
document.getElementById('filter').addEventListener('click', checkQuestion);