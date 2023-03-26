// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const filterButton = document.getElementById('filter')
const restartButton = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')




// Array with all the characters
const CHARACTERS = [
  {
    img: 'images/guesswho/1.png',
    name: 'Number 1',
    pet: [],
    plants: ['2-needs-water'],
    accessories: ['mug'],
    other: []
  },
  {
    img: 'images/guesswho/19.png',
    name: 'Number 2',
    pet: [],
    plants: ['1-plant'],
    accessories: ['mug'],
    other: ['party']
  },
  {
    img: 'images/guesswho/3.png',
    name: 'Number 3',
    pet: [],
    plants: [],
    accessories: ['lamp', 'curtain'],
    other: []
  },
  {
    img: 'images/guesswho/4.png',
    name: 'Number 4',
    pet: ['cat'],
    plants: ['2-plant'],
    accessories: [],
    other: ['not-home']
  },
  {
    img: 'images/guesswho/5.png',
    name: 'Number 5',
    pet: [],
    plants: ['1-plant'],
    accessories: ['watercane'],
    other: []
  },
  {
    img: 'images/guesswho/6.png',
    name: 'Numbre 6',
    pet: ['dog'],
    plants: ['1-plant'],
    accessories: ['lamp', 'curtain'],
    other: []
  },
  {
    img: 'images/guesswho/7.png',
    name: 'Number 7',
    pet: ['cat'],
    plants: ['1-plant'],
    accessories: [],
    other: []
  },
  {
    img: 'images/guesswho/8.png',
    name: 'Number 8',
    pet: [],
    plants: ['2-plant'],
    accessories: [],
    other: ['not-home']
  },
  {
    img: 'images/guesswho/9.png',
    name: 'Number 9',
    pet: [],
    plants: ['1-plant'],
    accessories: ['watercane'],
    other: []
  },
  {
    img: 'images/guesswho/17.png',
    name: 'Number 10',
    pet: [],
    plants: [],
    accessories: ['vase'],
    other: []
  },
  {
    img: 'images/guesswho/11.png',
    name: 'Number 11',
    pet: ['dog'],
    plants: [],
    accessories: ['lamp', 'curtain'],
    other: []
  },
  {
    img: 'images/guesswho/12.png',
    name: 'Number 12',
    pet: ['cat'],
    plants: [],
    accessories: ['curtain'],
    other: []
  },
  {
    img: 'images/guesswho/15.png',
    name: 'Number 13',
    pet: [],
    plants: ['1-plant'],
    accessories: ['watercane'],
    other: []
  },
  {
    img: 'images/guesswho/14.png',
    name: 'Number 14',
    pet: [],
    plants: ['1-plant'],
    accessories: ['vase'],
    other: []
  },
  {
    img: 'images/guesswho/13.png',
    name: 'Number 15',
    pet: ['cat,'],
    plants: [],
    accessories: ['curtain'],
    other: []
  },
  {
    img: 'images/guesswho/16.png',
    name: 'Number 16',
    pet: ['cat'],
    plants: [],
    accessories: ['vase'],
    other: []
  },
  {
    img: 'images/guesswho/10.png',
    name: 'Number 17',
    pet: [],
    plants: ['2-plant'],
    accessories: [],
    other: []
  },
  {
    img: 'images/guesswho/18.png',
    name: 'Number 18',
    pet: ['dog'],
    plants: [],
    accessories: ['mug', 'vase'],
    other: []
  },
  {
    img: 'images/guesswho/2.png',
    name: 'Number 19',
    pet: [],
    plants: ['1-plant'],
    accessories: ['lamp'],
    other: []
  },
  {
    img: 'images/guesswho/20.png',
    name: 'Number 20',
    pet: [],
    plants: ['5-plant'],
    accessories: [],
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
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on this home?</span>
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
  questions.value='';
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  charactersInPlay = CHARACTERS //All caracters. later on filter characters
  generateBoard();
  setSecret();
  console.log(secret);

 
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
const  { category, value } = currentQuestion;

keep = false


if (category === 'pet' || category === 'plants' || category === 'accessories' || category === 'other') {
  if (secret[category].includes(value)) {
    keep = true
  }
} else {
  keep = false

}
filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  if (category === 'pet') {
    if (keep) {
      alert(
        `Yes, there is a ${value} in this home! Lets keep all windows where we can see a ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `Nope, no ${value} here! Lets remove all homes with a ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'plants') {
    if (keep) {
      alert(
        `Yes, it's ${value} in the window! Keep all windows that has ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, no plants in this home! Remove all homes with plants.`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  }
   else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, it's ${value} in this window! Keep all windows that has 
        ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `Nope, no ${value} here. Lets remove all windows with ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    } 
  }
    else if (category === 'other') {
      if (keep) {
        alert(
          `Yes, it's ${value} in this window! Keep all windows that has 
          ${value}.`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      } else {
        alert(
          `Nope, no ${value} here. Lets remove all windows with ${value}`
        );
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      } } 
     generateBoard();
      }
  

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const makeAGuess = confirm(`Are you sure you want to guess on this home?`)
  if(makeAGuess) {
    checkMyGuess(personToConfirm)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {

if (personToConfirm === secret.name) {
  winOrLoseText.innerHTML = `YES! You won, it's ${secret.name}!`;
} else {
  winOrLoseText.innerHTML = `No sorry, wrong answer! The secret home was ${secret.name}`
}

winOrLose.style.display = 'flex'
board.style.display = 'none'

}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)