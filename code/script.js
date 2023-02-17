// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgainButton')

// Array with all the characters in the game, as objects
const CHARACTERS = [
  {
    name: 'Paris',
    img: 'images/pexels-photo-460740.jpeg',
    continent: 'europe',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Bangkok',
    img: 'images/bangkok.png',
    continent: 'asia',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Washington DC',
    img: 'images/washington.png',
    continent: 'north-america',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Berlin',
    img: 'images/berlin.png',
    continent: 'europe',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Pretoria', //is this correct...?
    img: 'images/pretoria.png',
    continent: 'africa',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Buenos Aires',
    img: 'images/buenosaires.png',
    continent: 'south-america',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Rome',
    img: 'images/rome.png',
    continent: 'europe',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerusalem',
    img: 'images/jerusalem.png',
    continent: 'asia',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Lima',
    img: 'images/lima.png',
    continent: 'south-america',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Canberra',
    img: 'images/canberra.png',
    continent: 'oceania',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Copenhagen',
    img: 'images/copenhagen.png',
    continent: 'europe',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Dubai',
    img: 'images/dubai.png',
    continent: 'asia',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jakarta',
    img: 'images/jakarta.png',
    continent: 'asia',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'New York',
    img: 'images/newyork.png',
    continent: 'north-america',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Vancouver',
    img: 'images/vancouver.png',
    continent: 'north-america',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Cancun',
    img: 'images/cancun.png',
    continent: 'north-america',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Kyoto',
    img: 'images/kyoto.png',
    continent: 'asia',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Nairobi',
    img: 'images/nairobi.png',
    continent: 'africa',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Amsterdam',
    img: 'images/amsterdam.png',
    continent: 'europe',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Addis Abeba',
    img: 'images/addisababa.png',
    continent: 'africa',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Delhi',
    img: 'images/delhi.png',
    continent: 'asia',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Barcelona',
    img: 'images/barcelona.png',
    continent: 'europe',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Lahore',
    img: 'images/lahore.png',
    continent: 'asia',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Auckland',
    img: 'images/auckland.png',
    continent: 'oceania',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let keep

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
  console.log(secret); //REMOVE - Only to see that a new secret character is selected each time
}
//WORKING




// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value // A variable that stores the actual value of the question we've selected ("blue", "brown")

  currentQuestion = {
    category: category,
    value: value
  }
  console.log("Selected value", currentQuestion)//REMOVE - WORKING!
};


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const {category, value} = currentQuestion;
  

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'continent' || category === 'eyes') {
    if (secret[category] === value) {
      keep = true
      filterCharacters(true);
    } else {
      keep = false
      filterCharacters(false);
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      keep = true
      filterCharacters(true);
    } else {
      keep = false
      filterCharacters(false);
    }
  }
};



// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));

    } else {
      alert(`No, the person does not wear ${value}! Remove all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }


  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people that has ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));

    } else {
      alert(`No, the person does not have ${value}! Remove all people that have ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }

  } else {
    if (keep) {
      alert(`Yes, the city is in ${value}! Keep all the cities in ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);

    } else {
      alert(`No, the city is not in ${value}! Remove all the cities in ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
    
  }
  generateBoard();
};


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`)
  if (confirmGuess === true) {
  checkMyGuess(personToConfirm) //Should probably be invoked here?
  }
};


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
  winOrLose.style.display = 'flex';
  board.style.display = 'none';
  winOrLose.innerHTML += `
        <h1>YOU WIN! ${personToCheck} was the secret person</h1>
    `;
  } else {
    winOrLose.style.display = 'flex'
    board.style.display = 'none'
    winOrLose.innerHTML += `
        <h1>You lost! ${personToCheck} was not the secret person, it was ${secret.name}!</h1>
      `;
  }
};


const start = () => {
  charactersInPlay = CHARACTERS // reset characters to the initial array
  winOrLose.style.display = 'none' // don't show the win/lose screen
  board.style.display = 'flex' // show the game board again
  setSecret() // set a new secret person
  generateBoard() // draw the board with all the people
} 


// Invokes the start function when website is loaded
start()


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener("click", start)



