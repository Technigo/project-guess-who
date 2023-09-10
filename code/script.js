// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questionSection = document.getElementById('question-section')
const boardWrapper = document.getElementById('board-wrapper')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
const winOrLose = document.getElementById("winOrLose")
const winOrLoseText = document.getElementById("winOrLoseText")
const playAgainBtn = document.getElementById("playAgain")


// Array with all the pokemon, as objects
const POKEMON = [
  {
    name: 'Pikachu',
    img: 'images/Pikachu.png',
    color: 'yellow',
    type: ['electric'],
    other: ['tail']
  },
  {
    name: 'Ninetales',
    img: 'images/Ninetales.png',
    color: 'yellow',
    type: ['fire'],
    other: ['tail']
  },
  {
    name: 'Beedrill',
    img: 'images/Beedrill.png',
    color: 'yellow',
    type: ['bug', 'poison'],
    other: ['stinger']
  },
  {
    name: 'Meowth',
    img: 'images/Meowth.png',
    color: 'yellow',
    type: ['normal'],
    other: ['tail']
  },
  {
    name: 'Ponyta',
    img: 'images/Ponyta.png',
    color: 'yellow',
    type: ['fire'],
    other: ['tail', 'flame']
  },
  {
    name: 'Jigglypuff',
    img: 'images/Jigglypuff.png',
    color: 'pink',
    type: ['normal', 'fairy'],
    other: []
  },
  {
    name: 'Mew',
    img: 'images/Mew.png',
    color: 'pink',
    type: ['psychic'],
    other: ['tail']
  },
  {
    name: 'Clefairy',
    img: 'images/Clefairy.png',
    color: 'pink',
    type: ['fairy'],
    other: ['tail']
  },
  {
    name: 'Chansey',
    img: 'images/Chansey.png',
    color: 'pink',
    type: ['normal'],
    other: ['tail']
  },
  {
    name: 'Squirtle',
    img: 'images/Squirtle.png',
    color: 'blue',
    type: ['water'],
    other: ['tail']
  },
  {
    name: 'Gloom',
    img: 'images/Gloom.png',
    color: 'blue',
    type: ['grass', 'poison'],
    other: ['plant']
  },
  {
    name: 'Vaporeon',
    img: 'images/Vaporeon.png',
    color: 'blue',
    type: ['water'],
    other: ['tail', 'fin']
  },
  {
    name: 'Seadra',
    img: 'images/Seadra.png',
    color: 'blue',
    type: ['water'],
    other: ['tail', 'fin']
  },
  {
    name: 'Lapras',
    img: 'images/Lapras.png',
    color: 'blue',
    type: ['water', 'ice'],
    other: ['tail', 'fin']
  },
  {
    name: 'Poliwhirl',
    img: 'images/Poliwhirl.png',
    color: 'blue',
    type: ['water'],
    other: []
  },
  {
    name: 'Charmander',
    img: 'images/Charmander.png',
    color: 'red',
    type: ['fire'],
    other: ['tail', 'flame']
  },
  {
    name: 'Vileplume',
    img: 'images/Vileplume.png',
    color: 'blue',
    type: ['grass', 'poison'],
    other: ['plant']
  },
  {
    name: 'Electabuzz',
    img: 'images/Electabuzz.png',
    color: 'yellow',
    type: ['electric'],
    other: ['tail'],
  },
  {
    name: 'Flareon',
    img: 'images/Flareon.png',
    color: 'red',
    type: ['fire'],
    other: ['tail']
  },
  {
    name: 'Krabby',
    img: 'images/Krabby.png',
    color: 'red',
    type: ['water'],
    other: []
  },
  {
    name: 'Seaking',
    img: 'images/Seaking.png',
    color: 'red',
    type: ['water'],
    other: ['fin']
  },
  {
    name: 'Bulbasaur',
    img: 'images/Bulbasaur.png',
    color: 'green',
    type: ['grass', 'poison'],
    other: ['plant']
  },
  {
    name: 'Caterpie',
    img: 'images/Caterpie.png',
    color: 'green',
    type: ['bug'],
    other: ['tail']
  },
  {
    name: 'Scyther',
    img: 'images/Scyther.png',
    color: 'green',
    type: ['bug', 'flying'],
    other: ['tail']
  },
];

// Global variables
let secretCharacter
let currentQuestion
let charactersInPlay

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((pokemon) => {
    board.innerHTML += `
      <div class="card">
        <p>${pokemon.name}</p>
        <img class="pokemonImage" src=${pokemon.img} alt=${pokemon.name}>
        <div class="guess">
          <span>Guess on ${pokemon.name}?</span>
          <button id="findOut" class="filled-button small"onclick="guess('${pokemon.name}')">Guess</button>
        </div>
      </div>
    `
  }
  )
}

// Randomly select a pokemon from the POKEMON array and set as the value of the variable called secretCharacter
const setSecretCharacter = () => {
  secretCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Function to start (and restart) the game
const start = () => {
  // Setting the charactersInPlay array to be all the characters to start with
  charactersInPlay = POKEMON
  // Invoking/using the function generateBoard to load all the characters on the board.
  generateBoard(charactersInPlay);

  //Randomly select a character from the charactersInPlay array and designate it as the "secret" character.
  setSecretCharacter();
}

// Setting the currentQuestion object when something is selected in the dropdown menu
const selectQuestion = () => {
  const selectedOption = questions.options[questions.selectedIndex];
  const category = selectedOption.parentNode.label;

  // Variable that stores the actual value of the question that has been selected.
  const value = selectedOption.value;

  currentQuestion = {
    category: category,
    value: value
  };
}

// This function is invoked when the find-out button is clicked.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // Comparing the currentQuestion details with the secret pokemon details based on category (color, type and other). Based on that the board will be filtered and characters removed/kept.
  let keep = false; //Chose "false" to make the code below easier to read (and to avoid !)
  if (category === 'color') {
    if (value === secretCharacter[category]) {
      keep = true;
    }
  } else if (category === 'type' || category === 'other') {
    if (secretCharacter[category].includes(value)) { // .includes() since there are multiple values
      keep = true;
    }
  }

  filterCharacters(keep);
}

// Filter the characters array and redraw the game board.
const filterCharacters = (keepParam) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'color') {
    // since keep parameter is a boolean there's no need to do an equation.
    if (keepParam) {
      alert(
        `Yes, the pokemon is ${value}! Keep all pokemon that are ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((pokemon) => pokemon[category] === value)
    } else {
      alert(
        `No, the pokemon isn't ${value}! Remove all pokemon that are ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((pokemon) => pokemon[category] !== value)
    }
  } else if (category === 'type') {
    if (keepParam) {
      alert(
        `Yes, the pokemon has the ${value} type! Keep all pokemon that have the ${value} type.`
      )
      charactersInPlay = charactersInPlay.filter((pokemon) => pokemon[category].includes(value))
    } else {
      alert(
        `No, the pokemon doesn't have the ${value} type! Remove all pokemon that have the ${value} type.`
      )
      charactersInPlay = charactersInPlay.filter((pokemon) => !pokemon[category].includes(value))
    }
  } else {
    if (keepParam) {
      alert(
        `Yes, the pokemon has a ${value}! Keep all pokemon that have a ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((pokemon) => pokemon[category].includes(value))
    } else {
      alert(
        `No, the pokemon doesn't have a ${value}! Remove all pokemon that have a ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((pokemon) => !pokemon[category].includes(value))
    }
  }
  // Invoke a function to redraw the board with the remaining pokemon.
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (pokemonToConfirm) => {
  let result = confirm(`Are you sure you want to pick ${pokemonToConfirm}?`);
  // If the player wants to guess, the checkMyGuess function is invoked.
  if (result) {
    checkMyGuess(pokemonToConfirm);
  }
}

const checkMyGuess = (pokemonToCheck) => {
  board.style.display = "none";
  winOrLose.style.display = "flex";

  winOrLoseText.innerHTML =
    (pokemonToCheck === secretCharacter.name)
      ? `Yay! ${pokemonToCheck} was correct! Congratz!`
      : `Oh, no! ${secretCharacter.name} was the right answer! Better luck next time!`;
}

// Invokes the start function when website is loaded
start()

// Counter for number of guesses
let counter = 0;

let counterDiv = document.createElement("div");
counterDiv.id = "counterDiv";

let numberOfGuessesText = 'Number of guesses: ';
let counterText = document.createTextNode(`${numberOfGuessesText} ${counter}`);
counterText.id = "counterElement";

// Append the text node to the div.
// The new node will be last in the list of children.
counterDiv.appendChild(counterText);

// Append the div to the aside section.
questionSection.appendChild(counterDiv);


// All the event listeners
filterBtn.addEventListener('click', () => {
  counter++; // Increase counter by 1
  // Updates the textnode since that text is static and the counter number won't go up without this update
  counterText.textContent = `${numberOfGuessesText} ${counter}`;
  checkQuestion();
});
restartButton.addEventListener('click', () => {
  location.reload();
  start();
})
// Event listener for the dropdown menu
questions.addEventListener('change', selectQuestion);
// Event listener for find out-button
playAgainBtn.addEventListener('click', () => {
  winOrLose.style.display = "none";
  board.style.display = "flex";
  location.reload();
  start();
})