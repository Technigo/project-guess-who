// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

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
let secret
let currentQuestion
let charactersInPlay

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
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  generateBoard() //Load all the characters
  setSecret() //Generates a new secret person to guess on at the start
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label 
  
  const selectedOption = questions.options[questions.selectedIndex];
  // This variable stores the actual value of the question we've selected.
  const value = selectedOption.value; 

  currentQuestion = {
    category: category,
    value: value
  }
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const {category, value} = currentQuestion
  let keep

  // Compares the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  if (category === 'hair' || category === 'eyes') {
    keep = secret[category] === value;
    // Defines the condition for 'accessories' or 'other' category.  
  } else if (category === 'accessories' || category === 'other') {
      keep = secret[category].includes(value);
  }
  // This invoke filterCharacters
  filterCharacters(keep)
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const {category, value} = currentQuestion
  //let attribute
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'other') { 
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that is a ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all people that isn't a ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'hair') {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all the people with ${value} hair.`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(
        `No, the person does not have ${value} hair! Remove all people with ${value} hair.`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  } else if (category === 'eyes') {
      if (keep) {
      alert (
        `Yes, the person has ${value} eyes! Keep all the people with ${value} eyes.`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
       `No, the person does not have ${value} eyes! Remove all people with ${value} eyes.`
         );
         charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      }
    }
    generateBoard(charactersInPlay);
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(
    `Are you sure you want to guess on ${personToConfirm} ?`
    )
    if (confirmGuess === true) {
      checkMyGuess(personToConfirm) // Invoking the checkMyGuess function.
    }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // Checks if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    winOrLose.style.display = "flex"; // Show the win or lose section
    board.style.display = "none" // Hideing the game board
    winOrLoseText.innerText = `Yay, that is correct, you win! 🤩`;
  } else {
    winOrLose.style.display = "flex";
    board.style.display = "none"
    winOrLoseText.innerText = `You guessed wrong 🫣
    The correct answer is ${secret.name}.`
  }
};

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)

// Sets up a event listener for the click event. Makes the board regenerate and restarts the game.
playAgainButton.addEventListener('click', (event) => {
  winOrLose.style.display = "none";
  board.style.display = "flex"
  start();
})