// All the DOM selectors stored as short variables

const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabalanew.svg',
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
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacquesnew.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['cigarette','beard']
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
    accessories: ['glasses','earrings'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebellenew2.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['cigarette']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['cigarette']
  },
  {
    name: 'Jeane',
    img: 'images/jeanenew.svg',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['cigarette','beard']
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
    img: 'images/jerinew3.svg',
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
    accessories: ['glasses','earrings'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon2.svg',
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
    accessories: ['earrings'],
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
    other: ['beard']
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
//Will be the secret random person object
let currentQuestion
//Will be the current question object
let charactersInPlay
//Will be an array of all people left in the game

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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard();
  // generateboard lets the characters appear when starting the page
  setSecret();
  selectQuestion();
  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  const value = questions.options[questions.selectedIndex].value;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    value: value
  };
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if(secret[category].includes(value)) {
        filterCharacters(true)
    } else {
        filterCharacters(false)
    }

  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
        filterCharacters(true)
    } else {
        filterCharacters(false)
    }
  }
}



// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion


  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters to take away the characters that are not correct

  if (category === 'hair') {
    if (keep) {
      alert(
        `Good guess! The person has ${value} hair! Keep everyone with ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      alert(
        `Sorry! The person doesn't have ${value} hair! Remove everyone with ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  } else if (category === 'eyes') {
    
    if (keep) {
      alert(
        `Good guess! The person has ${value} eyes! Keep everyone with ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      alert(
        `Sorry! The person doesn't have ${value} eyes! Remove everyone with ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  } else if (category === 'accessories') {
   
    if (keep) {
      alert(
        `Good guess! The person wears ${value}! Keep everyone with ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `Sorry! The person doesn't wear ${value}! Remove everyone with ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  
  } else if (category === 'other') {
    
    if (keep) {
      alert(
        `Good guess! The person has a ${value}! Keep everyone with ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `Sorry! The person does not have a ${value}! Remove everyone with ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  }


  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const result = window.confirm(`Are you sure?`);

  if (result) {
      checkMyGuess(personToConfirm);
  }
};


// If the player wants to guess, invoke the checkMyGuess function.


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert(`Good job! Your guess on ${personToCheck} is correct! You win!`);
    board.innerHTML = "";
    winOrLose.style.display = "flex";
} else {
    alert(`Oh no! Your guess is wrong! The correct answer is ${secret.name}`);
    board.innerHTML = "";
    winOrLose.style.display = "flex";
}
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start)

questions.addEventListener('change', selectQuestion)

findOutButton.addEventListener('click', checkQuestion)

playAgainButton.addEventListener('click', (event) => {
    start();
    winOrLose.style.display = "none";
});
