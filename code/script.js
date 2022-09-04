// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const playAgainButton = document.getElementById('playAgain');
const attemptsCounter = document.getElementById('attempts');

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

let currentQuestion;
let charactersInPlay;
let secret;
let attemptsLeft;
//let secretCharacter; // This can be used if second aproach in setSecret (line 238) is active.

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

// Randomly select a person from [CHARACTERS] and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret);

  //Aproach 2
  /* secret = Math.floor(Math.random() * (charactersInPlay.length - 1 - 0 +1) + 0);
  secretCharacter = CHARACTERS[secret];
  console.log(secretCharacter); */
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // Functions below invokes when the game starts
  generateBoard()
  console.log('Generating Board')
  console.log('setting secret character')
  setSecret()
  selectQuestion();
  attemptsLeft = 5;
  attemptsCounter.innerHTML = attemptsLeft;
};

// Setting the currentQuestion object when you select something in the dropdown
// The selectedIndex property sets or returns the index of the selected option in a drop-down list.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value; // This variable stores the actual value of the question we've selected.
   
  currentQuestion = {
    category: category,
    value: value
  }
};

// Compare the currentQuestion details with the secret person details based on category (hair/eyes or accessories/others).
  // Then we invoke a filter if true or false
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      console.log('correct')
      filterCharacters(true)
    } else {
      console.log('false')
      filterCharacters(false)
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      console.log('correct')
      filterCharacters(true)
    } else {
      console.log('false')
      filterCharacters(false)
    }
  } else {
    filterCharacters(false)
  };
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person have ${value} hair! Keep all people that have ${value} hair`)
    } else {
      alert(`No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`)
    }
  } else if (category === 'eyes') {
      if (keep) {
      alert(`Yes, the person have ${value} eyes! Keep all people that have ${value} eyes`)
      } else {
        alert(`No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`)
      }
  } else if (category === 'accessories'){
      if (keep) {
      alert(`Yes, the person wear ${value}! Keep all people that wear ${value}`)
      } else {
        alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}`)
      }
  } else {
      if (keep) {
        alert(`Yes, the person is a ${value}! Keep all people that are ${value}s`)
      } else {
        alert(`No, the person is not a ${value}! Keep all people that aren't ${value}s`)
      }
  };
  

  // This will determine what is the category and filter by category to keep or remove based on the keep variable.
  if (category === 'hair' || category ==='eyes') {
    if (keep){
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else /* (category === 'accessories' || category === 'other') */ {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
  }
  generateBoard() // Invokes the function to redraw the board with the remaining people.

  //counter if statement
  if (attemptsLeft === 1) {
    alert('1 attempt left!');
  } else if (attemptsLeft === 0) {
    alert('Time to guess!')
    //If time to guess hide section to prevent player finding out more.
    findOutButton.style.display = 'none' 
    questions.style.display = 'none'
  }
};

// when clicking guess, the player first have to confirm that they want to make a guess.
//confirm() gives the player the option to confirm or not as an alert
const guess = (personToConfirm) => {
  const confirmGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`); 
  if (confirmGuess) {
    checkMyGuess(personToConfirm)
  }
};

// If the player confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) { 
    winOrLose.style.display = 'flex' //This will show the win or lose section
    winOrLoseText.innerHTML = `
    <iframe src="https://giphy.com/embed/Y3qaJQjDcbJPyK7kGk" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <p>${secret.name} was the right guess!</p>
    ` //Message to show if player win
    board.style.display = 'none' //This will hide the game board
  } else {
    winOrLose.style.display = 'flex'
    winOrLoseText.innerHTML = `
    <iframe src="https://giphy.com/embed/eJ4j2VnYOZU8qJU3Py" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <p>${secret.name} wasn't the right guess!</p>
    ` //Message to show if player loose
    board.style.display = 'none'
  }
};

const playAgain = () => {
  //We hide or redraw the sections
  winOrLose.style.display = 'none'
  board.style.display = ''
  findOutButton.style.display = ''
  questions.style.display = ''
  start()
};

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', () => {
  attemptsLeft-- //-1 in the counter
  attemptsCounter.innerHTML = attemptsLeft;
  checkQuestion();
});
playAgainButton.addEventListener('click', playAgain)
