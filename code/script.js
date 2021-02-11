// Import scripts
import { CHARACTERS } from "./scripts/characters.js";
import { getRandomNumber as random } from "./scripts/helperFunctions.js";

// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const sideSection = document.getElementById("sideSection");
const endScreen = document.getElementById("endScreen");
const alert = document.getElementById("alert");

// Global variables
let secret, currentQuestion, charactersInPlay, counter;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p class="card__name">${person.name}</p>
        <img class="card__image" src=${person.img} alt=${person.name}>
        <div class="guess">
          <span class="guess__text">Guess on ${person.name}?</span>
          <button class="button button__filled button__filled--small" id="guess" data-name="${person.name}">Guess</button>
        </div>
      </div>
    `;
  });
};

// Update game info texts
const updateInfo = () => {
  const guessCounter = sideSection.children.namedItem("guessCount").firstElementChild;
  guessCounter.innerText = counter;
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[random(charactersInPlay.length, true)];
  // DEBUG: remove on submission
  console.log("The secret is: ", secret);
};

/** Function to handle the game start logic
 * Logic:
 * 1. set the globale charactersInPlay variable from the imported character file.
 * 2. call the generate board function (to draw the board)
 * 3. call the set secret function to set a random character as the secret
 */
const start = () => {
  charactersInPlay = CHARACTERS;
  counter = 0;
  updateInfo();
  generateBoard();
  setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  const text = questions.options[questions.selectedIndex].innerText;

  if (category === "hair color") {
    currentQuestion = {
      attribute: "hairColor",
      value: value,
      category: category,
      text: text,
    };
  } else if (category === "eye color") {
    currentQuestion = {
      attribute: "eyeColor",
      value: value,
      category: category,
      text: text,
    };
  } else if (category === "accessories") {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
      text: text,
    };
  } else if (category === "other") {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
      text: text,
    };
  }
  // DEBUG: remove on submission
  console.log("Question: ", currentQuestion);
  // increase question counter
  counter++;
  updateInfo();
  // After the currentQuestion is set we call checkQuestion
  checkQuestion();
};

// Compare the currentQuestion with the secret person.
// See if we should keep or remove people based on that
// Then invoke filterCharacters
const checkQuestion = () => {
  const secretValue = secret[currentQuestion.attribute];
  if (secretValue === currentQuestion.value) {
    filterCharacters(true);
  } else {
    filterCharacters(false);
  }
};

// It'll filter the characters array and redraw the game board.
// Show the correct alert message for different categories
const filterCharacters = (keep) => {
  alert.classList.toggle("hidden");
  if (keep) {
    alert.firstElementChild.innerText = `Yes, the person has ${currentQuestion.text}! Keep all that has ${currentQuestion.text}.`;
    charactersInPlay = charactersInPlay.filter(
      (character) => character[currentQuestion.attribute] === currentQuestion.value
    );
  } else {
    alert.firstElementChild.innerText = `No, the person doesn't have ${currentQuestion.text}! Remove all that have ${currentQuestion.text}`;
    charactersInPlay = charactersInPlay.filter(
      (character) => character[currentQuestion.attribute] !== currentQuestion.value
    );
  }
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const makeGuess = confirm(`Are you sure you want to guess ${suspect}?`);
  if (makeGuess) {
    checkMyGuess(suspect);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the suspect is the same as the secret person's name
  const winState = suspect === secret.name ? true : false,
    endStateText = endScreen.querySelector("#endStateText"),
    guessCounter = endScreen.querySelector("#guessCount").firstElementChild;
  // 2. Set a Message to show in the win or lose section accordingly
  if (winState) {
    endStateText.innerText = "YES! That is correct";
  } else {
    endStateText.innerText = "NO! That is wrong";
  }
  guessCounter.innerText = counter;
  // 3. Show the win or lose section
  endScreen.classList.toggle("hidden");
};

// Invokes the start function when website is loaded
start();

// All the event listeners
sideSection.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "filter") {
    selectQuestion();
  } else if (target.id === "restart") {
    start();
  }
});
board.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "guess") {
    guess(target.dataset.name);
  }
});
alert.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "confirm") {
    alert.classList.toggle("hidden");
    generateBoard();
  }
});
endScreen.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "playAgain") {
    endScreen.classList.toggle("hidden");
    start();
  }
});
