// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')
let winOrLoseContainer = document.getElementById('winOrLoseContainer')

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
    other: ['smoking habit']
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
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jia',
    img: 'images/jia.svg',
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
    name: 'Jodi',
    img: 'images/jodi.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Joe',
    img: 'images/joe.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jolee',
    img: 'images/jolee.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
];


// Global variables
let secret //Will be the secret person object.
let currentQuestion //Will be the current question object.
let charactersInPlay //Will be an array of all the people left in the game.
let keep

// Draw the game board
const generateBoard = () => {
  board.innerHTML = '';
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button-small" onclick="guess('${person.name}')">Guess</button>
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
  setSecret();
}

// setting the currentQuestion object when you select something in the dropdown

const selectQuestion = () => {
  // Behövs denna? filterButton.disabled = false;
  const category = questions.options[questions.selectedIndex].parentNode.label

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  console.log(selectQuestion);
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    value: value
  }

  console.log(currentQuestion);
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === "hair" || category === "eyes") {
    if (secret[category] === value) {
      keep = true
      filterCharacters(true);
    }
    else {
      keep = false
      filterCharacters(false);
    }
  }
  else if (category === "accessories" || category === "other") {
    if (secret[category].includes(value)) {
      keep = true
      filterCharacters(true);
    }
    else {
      keep = false
      filterCharacters(false);
    }
  }
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories

  if (category === 'accessories') {
    if (keep) {
      alert(`Yay, the person has ${value}! Keep all people that has ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));

    } else {
      alert(`Nope, the person doesn't have ${value}! Remove all people that have ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));

    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yay, the person does have a ${value}! Keep all people that has a ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));

    } else {
      alert(`Nope, the person doesn't have ${value}! Remove all people that have a ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));

    }
  } else {
    if (keep) {
      alert(`Yay, the person has ${value}! Keep all people that have ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));


    } else {
      alert(`Nope, the person doesn't have ${value}! Remove all people that have ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));

    }
  }
  generateBoard();
}

// Determine what is the category
// filter by category to keep or remove based on the keep variable.


// Invoke a function to redraw the board with the remaining people.

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.

  const userGuess = window.confirm(`Are you sure about ${personToConfirm}...?`)

  if (userGuess) {
    checkMyGuess(personToConfirm)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  board.innerHTML = '';
  winOrLose.style.display = "block";
  let secretPersonImg = `<img class="cardFinal" src=${secret.img} alt=${secret.name}>`;
  winOrLoseContainer.insertAdjacentHTML("beforeEnd", secretPersonImg);
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Good job, my friend! Thats is correct. You win!`
  } else {
    winOrLoseText.innerHTML = `Ha! You got it wrong! The correct answer is ${secret.name}. Try again!`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', (event) => { 
start()
/* pause();
reset(); */
window.location.reload();
});
questions.addEventListener('change', () => {
  selectQuestion();
  filterButton.style.opacity = "1.0"
})
filterButton.addEventListener('click', checkQuestion)
playAgain.addEventListener("click", (event) => {
  start();
 /*  pause();
  reset(); */
  winOrLose.style.display = "none";
  window.location.reload();
});

