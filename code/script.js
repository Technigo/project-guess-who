// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const guessesHowMany = document.getElementById('howManyGuesses')
const secretImageAtGuess = document.getElementById('secretImageAtGuess')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Ozzy Orange',
    img: 'images/orange.png',
    color: 'orange',
    a: 'fruit',
    characteristics: ['juicy', 'sweet'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Shakira Soda',
    img: 'images/soda.png',
    color: 'red',
    a: 'drink',
    characteristics: ['fizzy', 'sweet'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Chris Chili',
    img: 'images/chili.png',
    color: 'red',
    a: 'vegetable',
    characteristics: ['spicy'],
    hiddenTalent: ['actor']
  },
  {
    name: 'Bob Banana',
    img: 'images/banana.png',
    color: 'yellow',
    a: 'fruit',
    characteristics: ['sweet', 'slippery'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Billie Bread',
    img: 'images/bread.png',
    color: 'yellow',
    a: 'meal',
    characteristics: ['moist', 'slices'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Beyonce Brocoli',
    img: 'images/brocoli.png',
    color: 'green',
    a: 'vegetable',
    characteristics: ['healthy', 'raw'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Cat Cherry',
    img: 'images/cherry.png',
    color: 'red',
    a: 'fruit',
    characteristics: ['sweet', 'kernels'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Courtney Coffee',
    img: 'images/coffee.png',
    color: 'beige',
    a: 'drink',
    characteristics: ['hot', 'cold'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Cameron Croissant',
    img: 'images/croissant.png',
    color: 'brown',
    a: 'sweet',
    characteristics: ['crispy', 'greasy'],
    hiddenTalent: ['actor']
  },

  {
    name: 'Cristiano Cupcake',
    img: 'images/cupcake.png',
    color: 'purple',
    a: 'sweet',
    characteristics: ['sweet', 'fluffy'],
    hiddenTalent: ['elite athlete']
  },
  {
    name: 'Enya Egg',
    img: 'images/egg.png',
    color: 'yellow',
    a: 'meal',
    characteristics: ['cooked', 'healthy'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Freddie Fries',
    img: 'images/french-fries.png',
    color: 'yellow',
    a: 'meal',
    characteristics: ['hot', 'greasy'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Gaga Grapes',
    img: 'images/grape.png',
    color: 'purple',
    a: 'fruit',
    characteristics: ['sweet', 'juicy'],
    hiddenTalent: ['artist', 'actor']
  },
  {
    name: 'Iggy Ice-cream',
    img: 'images/ice-cream.png',
    color: 'pink',
    a: 'sweet',
    characteristics: ['sweet', 'cold'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Jay Jam',
    img: 'images/jam.png',
    color: 'orange',
    a: 'sweet',
    characteristics: ['sweet', 'sticky'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Mikael Milk',
    img: 'images/milk.png',
    color: 'blue',
    a: 'drink',
    characteristics: ['cold'],
    hiddenTalent: ['actor']
  },
  {
    name: 'Maria Mushroom',
    img: 'images/mushroom.png',
    color: 'brown',
    a: 'vegetable',
    characteristics: ['healthy', 'spongy'],
    hiddenTalent: ['elite athlete']
  },
  {
    name: 'Natalie Noodle',
    img: 'images/noodle.png',
    color: 'blue',
    a: 'meal',
    characteristics: ['hot', 'slippery'],
    hiddenTalent: ['actor']
  },
  {
    name: 'Orlando Onion',
    img: 'images/onion.png',
    color: 'beige',
    a: 'vegetable',
    characteristics: ['raw', 'crying'],
    hiddenTalent: ['actor']
  },
  {
    name: 'Pete Pea',
    img: 'images/pea.png',
    color: 'green',
    a: 'vegetable',
    characteristics: ['healthy', 'crispy'],
    hiddenTalent: ['elite athlete']
  },
  {
    name: 'Penelope Pizza',
    img: 'images/pizza.png',
    color: 'beige',
    a: 'meal',
    characteristics: ['greasy', 'hot'],
    hiddenTalent: ['actor']
  },
  {
    name: 'Paul Popsicle',
    img: 'images/popsicle.png',
    color: 'orange',
    a: 'sweet',
    characteristics: ['sweet', 'cold'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Tina Taco',
    img: 'images/taco.png',
    color: 'brown',
    a: 'meal',
    characteristics: ['spicy', 'greasy'],
    hiddenTalent: ['artist']
  },
  {
    name: 'Pele´ Potato',
    img: 'images/potato.png',
    color: 'brown',
    a: 'vegetable',
    characteristics: ['cooked', 'healthy'],
    hiddenTalent: ['elite athlete']
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let counter

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
  questions.value='';
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  //Make the counter reset to 0 when the game starts. 
  counter= 0;
  guessesHowMany.innerHTML= `<h2>Number of guesses: </h2>`;
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const {category, value} = currentQuestion
  // Compare the currentQuestion details with the secret person details in a different manner based on category (color/a or characteristic/hiddenTalent).
  // See if we should keep or remove figure based on that
  // Then invoke filterCharacters
  if (category === 'color' || category === 'a') {
    if (secret[category] === value) {
      filterCharacters(true); // Keep everyone with that color/a value
    } else {
      filterCharacters(); // Remove everyone with that color/a value
    }
  } else if (category === 'characteristics' || category === 'hiddenTalent') {
    if (secret[category].includes(value)) {
      filterCharacters(true); //Keep everyone with characteristic/hiddenTalent that match secret
    } else {
      filterCharacters(); //Remove all with characteristic/hiddenTalent that does not match secret
    }
  }
  counter++;
  guessesHowMany.innerHTML=`<h2>Number of guesses: ${counter} </h2>`
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories and filter based on the category and value
  if (category === 'characteristics') {
    if (keep) {
      alert(`Yes, it is ${value}! Keep all figures that are ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(`No, it is not ${value}! Remove all figures that are ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'hiddenTalent') {
    if (keep) {
      alert(`Yes, the figures secret talent is ${value}! Keep all that are ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(`No, the figures secret talent is not ${value}! Remove all that are ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else {
    if (keep) {
      alert(`Yes, it is ${category} ${value}! Keep all that are ${category} ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      alert(`No, it is not ${category} ${value}! Remove all that are ${category} ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  //Here I store the interaction from the player in a variable
  let playerGuess = confirm(`Do you wish to guess on ${personToConfirm}?`);
  // If the player wants to guess, invoke the checkMyGuess function. 
  //I pass playerGuess as param, if the player confirmed yes in the pop-up playerGuess = true and the codeblock runs
  if (playerGuess){
    checkMyGuess(personToConfirm);
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
  // 2. Set a Message to show in the win or lose section accordingly  
    winOrLoseText.innerHTML= `Wihuuuu that is correct, the secret figure is ${personToCheck}`;
  } else {
    winOrLoseText.innerHTML= `Sorry, but your guess ${personToCheck} is not correct. The secret figure is ${secret.name}`;
    secretImageAtGuess.innerHTML= `<img src=${secret.img} alt=${secret.name}>`;
  }
  // 3. Show the win or lose section
  winOrLose.style.display= 'flex'
  // 4. Hide the game board
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)
