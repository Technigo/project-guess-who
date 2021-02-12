// Import scripts
import { CHARACTERS } from "./scripts/characters.js";
import { getCard } from "./scripts/cards.js";
import { getRandomNumber as random } from "./scripts/helperFunctions.js";

// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const questionSection = document.getElementById("questionSection");
const newGameSection = document.getElementById("newGame");
const endScreen = document.getElementById("endScreen");
const alert = document.getElementById("alert");

// Global variables
let secret,
  currentQuestion,
  charactersInPlay,
  charactersToFlip,
  counter,
  playerName,
  timer = {
    start: "",
    end: "",
    difference: "",
  };

/** FUNCTIONS **/

/** Function to insert html elements onto the game board
 * Logic:
 * 1. clears the board of anything previously on it.
 * 2. loops through the playable characters and calls the external getCard()
 * which returns a string (html element) that is inserted into the board element.
 */
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((person) => {
    board.innerHTML += getCard(person);
  });
};

/** Function to flip any cards that did/did not match the question asked
 * Logic:
 * 1. loops through the filtered out characters
 * 2. selects each character based on their name (which is also the id of the character cards)
 * 3. adds the CSS class which automatically flips the card
 */
const flipCards = () => {
  charactersToFlip.forEach((person) => {
    const cardPerson = board.querySelector(`#${person}`);
    cardPerson.classList.add("card__inner--flipped");
  });
};

/** Function to update the info elements based on the global variables
 * Logic:
 * 1. select the correct DOM element
 * 2. insert the values in the elements innerText
 */
const updateInfo = () => {
  // element selection
  const questionCounter = questionSection.children.namedItem("questionCount").firstElementChild;
  const nameInfo = questionSection.children.namedItem("nameInfo").firstElementChild;
  // set relevant info
  questionCounter.innerText = counter;
  nameInfo.innerText = playerName;
};

/** Function to set the secret variable to a random character object
 * Logic:
 * 1. use the dynamic random help function to get a random number between 0-available characters
 * 2. that random number is used to select a character object
 */
const setSecret = () => {
  secret = charactersInPlay[random(charactersInPlay.length, true)];
  // DEBUG: remove on submission
  console.log("The secret is: ", secret);
};

/** Function to set the currentQuestion object based on user selection
 * Logic:
 * 1. set up the elements and their data to be used in this function
 * 2. set up the current question object based on the selection and its category
 * 3. a question was asked; so we increase that counter and update the info to reflect that the value was changed
 * 4. call the next function to checkQuestion()
 */
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
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
  } else if (category === "accessories" || category === "other") {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
      text: text,
    };
  }
  counter++;
  updateInfo();
  checkQuestion();
};

/** Function to compare if the question matches an attribute of the secret character
 * Logic:
 * 1. set the secret value to be of the same attribute that the question was asking
 * 2. filter the characters based on if the values match or not; calls filter function
 */
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
/** Function to filter the characters into either flippable of still in play
 * Logic:
 * 1. show an alert that notifies the user if characters are to be flipped cause the question
 *  was accurate to the secret or not
 * 2. filter the charactersInPlay array
 * (based on the attribute value that was set when the user asked a question)
 * 3. any characters that are not in play anymore are added to the charactersToFlip array
 */
const filterCharacters = (keep) => {
  alert.classList.toggle("hidden");
  if (keep) {
    alert.firstElementChild.innerText = `Yes, the person has ${currentQuestion.text}! Keep all that has ${currentQuestion.text}.`;
    charactersInPlay = charactersInPlay.filter((character) => {
      if (character[currentQuestion.attribute] === currentQuestion.value) {
        return character;
      } else {
        charactersToFlip.push(character.name);
      }
    });
  } else {
    alert.firstElementChild.innerText = `No, the person doesn't have ${currentQuestion.text}! Remove all that have ${currentQuestion.text}`;
    charactersInPlay = charactersInPlay.filter((character) => {
      if (character[currentQuestion.attribute] !== currentQuestion.value) {
        return character;
      } else {
        charactersToFlip.push(character.name);
      }
    });
  }
};

/** Function to trigger a confirm alert if user click guess
 * Logic:
 * 1. shows the confirm alert
 * 2. if user does confirm the guess, triggers the check guess function
 */
const guess = (suspect) => {
  const makeGuess = confirm(`Are you sure you want to guess ${suspect}?`);
  if (makeGuess) {
    checkMyGuess(suspect);
  }
};

/** Function to check if the guess was correct
 * Logic:
 * 1. Check if the suspect is the same as the secret person's name
 * 1a. also set any elements to be used in the function
 * 2. Set a Message to show in the win or lose section accordingly
 * 3. Stop the timer and update the win screen game info elements with correct data
 * 4. Show the win or lose section and clear the board (since the game is over)
 */
const checkMyGuess = (suspect) => {
  // 1.
  const winState = suspect === secret.name ? true : false,
    endStateText = endScreen.querySelector("#endStateText"),
    questionCounter = endScreen.querySelector("#questionCount").firstElementChild;
  // 2.
  if (winState) {
    endStateText.innerText = `Good job ${playerName}! You guessed correctly!`;
  } else {
    endStateText.innerText = `Sorry ${playerName}... You guessed wrong.`;
  }
  // 3.
  questionCounter.innerText = counter;
  stopTimer();
  // 4.
  endScreen.classList.toggle("hidden");
  board.innerHTML = "";
};

/** Function to stop timer and set the final time
 * Logic:
 * 1. set the final time info element (available on the end screen)
 * 2. stop the timer; create a new time stamp
 * 3. get the difference of the start timestamp and end timestamp
 * 3a. format it to seconds and add it to the info element
 */
const stopTimer = () => {
  const finalTime = endScreen.querySelector("#timer").firstElementChild;
  timer.stop = Date.now();
  timer.difference = timer.stop - timer.start;
  finalTime.innerText = `${Math.floor(timer.difference / 1000)} seconds`;
};

/** Function to start the game
 * Logic:
 * 1. set any global variables to their intended default values
 * 2. start the timer by adding a timestamp using Date.now()
 * 3. call the update info function to make sure any previous round info is reset
 * 4. call the generate board function (to draw the board)
 * 5. call the set secret function to set a random character as the secret
 */
const start = () => {
  charactersInPlay = CHARACTERS;
  charactersToFlip = [];
  counter = 0;
  timer.start = Date.now();
  updateInfo();
  generateBoard();
  setSecret();
};

/** EVENT LISTENERS **/

// Listens for when user clicks on start new game
// ==> toggles the side sections accordingly
// ==> should set the player name
// ==> trigger start function
newGameSection.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "startGame") {
    newGameSection.classList.toggle("hidden");
    questionSection.classList.toggle("hidden");
    playerName = newGameSection.children.namedItem("playerName").value;
    start();
  }
});

// Listens for when user clicks a button in the question side section
// ==> could trigger user has selected a question control flow
// ==> could trigger a restart of the game
questionSection.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "filter") {
    selectQuestion();
  } else if (target.id === "restart") {
    start();
  }
});

// Listens for when user clicks on guess on a specific character card
// ==> triggers guess function control flow (with the clicked target data-name)
board.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "guess") {
    guess(target.dataset.name);
  }
});

// Listens for when user clicks confirm in the custom alert element
// ==> toggles the toggles and triggers the flipping cards control flow
alert.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "confirm") {
    alert.classList.toggle("hidden");
    flipCards();
  }
});

// Listens for when user clicks restart on the end screen
// ==> toggles the end screen and triggers the start function
endScreen.addEventListener("click", (event) => {
  const target = event.target;
  if (target.id === "playAgain") {
    endScreen.classList.toggle("hidden");
    start();
  }
});
