// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
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
    hair: 'hidden',
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

// This function generates the game board by populating the HTML with character cards. It iterates over the charactersInPlay array and creates a card for each character, including their name, image, and a "Guess" button.
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

// This function randomly selects a secret character from the charactersInPlay array. This character is the one that the player must guess to win the game.
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  
  // Invoke the board
  generateBoard();
  // Invoke the secret character
  setSecret();
};

// This function is called when the player selects a question from the dropdown menu. It determines the category and value of the selected question and stores it in the currentQuestion object.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;

  // Making currentQuestion into an object.
  currentQuestion = {
    category: category,
    value: value
  }
}

// This function is invoked when you click on 'Find Out' button. It compares the current question with the attributes of the secret character and filters the characters accordingly.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
}

// This function filters the characters based on the current question and updates the game board accordingly. It also displays alerts to inform the player about the filtering results. Then a function is invoked to redraw the board with the remaining people.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category].includes(value));
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((character) => !character[category].includes(value));
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category].include(value))
    } else {
      alert(
        `No, the person is not a ${value}! Remove all the people that are ${value}`
      )
      charactersInPlay = charactersInPlay.filter((character) => !character[category].includes(value))
    }
  } else if (category === 'hair'){
    if (keep) {
      alert(
        `Yes, the person have ${value} hair! Keep all the people with ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category] === (value))
  } else {
    alert(
      `No, the person does not have ${value} hair! Remove all people with ${value} hair`
    )
     charactersInPlay = charactersInPlay.filter((character) => character[category] !== (value))
    }
  } else if (category === 'eyes'){
    if (keep) {
      alert(
        `Yes, the person have ${value} eyes! Keep all people that have ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === (value))
    } else {
      alert(
        `No, the person does not have ${value} eyes! Remove all the people that does not have ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  generateBoard();
}

// This function is called when the player clicks the "Guess" button on a character card. It asks for confirmation before proceeding to check if the guessed character is correct.
const guess = (personToConfirm) => {
  if (confirm(`Are you sure you want to guess ${personToConfirm}?`)) {
    checkMyGuess(personToConfirm);
  } else {
    alert(`Ok then, keep playing!`);
  }
}

// This function is invoked after the player confirms their guess. It compares the guessed character's name with the secret character's name and displays a message indicating whether the guess was correct. It also shows the game outcome and hides the game board.
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
   winOrLoseText.innerHTML = `That is correct, it was indeed ${personToCheck}! Good job.`
  } else {
    winOrLoseText.innerHTML = `No, that's incorrect! The right person was ${secret.name}. Try again!`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
};


// Invokes the start function when website is loaded
start()

// All the event listeners that triggers different functions of the game when a certain action is being taken.
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', (event) => {
  winOrLose.style.display = "none";
  board.style.display = "flex"
  start();
})

