// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters as objects
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

// Global variables declared outside of functions to be accessed and modified from anywhere within JavaScript.
let secret ////Will be the secret person object
let currentQuestion ////Will be the current question object
let charactersInPlay////Will be an array of all people left in the game

// Function to draw the game board
const generateBoard = () => {
  board.innerHTML = '' //Clears the content with the id board. Sets the innerHTML property of that element to an empty string.
  charactersInPlay.forEach((person) => { //Iterates over each element in the charactersInPlay array
    //Generates HTML content for each character and adds it to the board element.
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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // Invokes the board to show all the characters
  generateBoard();
  // Invokes the randomizer function to randomly select one character as the secret one.
  setSecret();
  console.log(secret); //To see the secret person in the console
}

// Setting and updating the currentQuestion object when the player select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value;
  currentQuestion = {
    category: category,
    value: value
  }
}

// checkQuestion function is invoked when player click on 'Find Out' button. Comparing the currentQuestion (global variable) details with the secret person details based on category and determining whether to keep or remove characters based on question.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep //Sets the variable to true or false (yes/no).
  //If the category chosen is a type of hair or eyes (objects). 
  if (category === 'hair' || category === 'eyes') {
    keep = secret[category] === value

    //If the category chosen is a type of accessory or other (array)
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value)
  }
  filterCharacters(keep) //Invokes filterCharacters
}

// Filter the characters array and redraw the game board.
function filterCharacters(keep) {
  const { category, value } = currentQuestion

  // Determine and show the alert message for different categories and options
  //Category: Accessories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) //Keeps the people that wear the chosen option.
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) //Removes the people that doesn't wear the chosen option.
    };
    //Category: Other
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all the people that is a ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) //Keeps the people that are smokers.
    } else {
      alert(
        `No, the person isn't a ${value}. Remove all the people that is a ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) //Removes the people that aren't smokers.
    }
    //Category: Hair
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all the people that has ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value) //Filter and keeps the people that has the chosen hair color opt.
    } else {
      alert(
        `No, the person hasn't ${value} hair. Remove all the people that has ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value) // Filter and removes the people that has the chosen hair color opt.
    }
    //Category: eyes
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all the people that has ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value) //Filter and keeps the people that has the chosen eye color opt.
    } else {
      alert(
        `No, the person hasn't ${value} eyes. Remove all the people that has ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value) //Filter and removes the people that has the chosen eye color opt.
    }
  }
  //Re render the game board (invoke) so that only the people still in play is shown.
  generateBoard();
};


// when clicking guess, the player then confirms if they want to make a guess.
const guess = (personToConfirm) => {
  // Storing the interaction from the player in the variable 'confirming'.
  const confirming = confirm(`Are you sure you want to guess on ${personToConfirm}?`) //Confirm
  if (confirming) {
    checkMyGuess(personToConfirm) //Invoking checkMyGuess if player presses ok
  } else {
    // If the user clicked "Cancel" in the confirmation dialog
    console.log("No guess was made")
  }
}

// If player confirms in the function above, this function is invoked and will show the win or lose section.
const checkMyGuess = (personToCheck) => {
  board.innerHTML = ""; //Clears/hides the game board
  winOrLose.style.display = "flex"; //Makes the id winOrLose visible from the CSS-file

  if (personToCheck === secret.name) //If the personToCheck is the same as the secret person's name a winner-text appears
  {
    winOrLoseText.innerHTML = `Yeay! ☀️ ${secret.name} is correct!`
  }
  else { //If the personToCheck is not the same as the secret person's name a wrong anser-text appears
    winOrLoseText.innerHTML = `Oh no! ⛈️ Wrong answer, ${secret.name} is the correct answer. Reload the page to try again!`
  }
};

//Function to restart game/Play again
const restartGame = () => {
  winOrLose.style.display = ''; //Hides winOrLose again
  start(); //Invokes the start function
};

// Invokes the start function when website is loaded
start();

// Event listeners
restartButton.addEventListener('click', start);
findOutButton.addEventListener('click', checkQuestion);
playAgainButton.addEventListener('click', restartGame);
questions.addEventListener('change', selectQuestion);
