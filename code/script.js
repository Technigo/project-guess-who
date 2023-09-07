// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions"); //the select dropdown
const questionSection = document.getElementById("question-section");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const finishWrapper = document.getElementById("winOrLose");
const finishMessage = document.getElementById("winOrLoseText");
const playAgainButton = document.getElementById("playAgain");
const counter = document.getElementById("counter");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: [],
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    accessories: ["hat"],
    other: ["smoker"],
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hair: "yellow",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "James",
    img: "images/james.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["smoker"],
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hair: "black",
    eyes: "blue",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: [],
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hair: "yellow",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hair: "black",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses", "hat"],
    other: [],
  },
];

// Global variables
let secretCharacter;
let currentQuestion;
let charactersInPlay;
let numberOfGuesses = 5;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id="best-guess" onclick="guessOnThisCharacter('${person.name}')">Guess</button>
        </div>
      </div>`;
  });

  if (numberOfGuesses === 5) {
    counter.innerText = `You have ${numberOfGuesses} guesses!`;
  } else if (numberOfGuesses < 5 && numberOfGuesses > 1) {
    counter.innerText = `You have ${numberOfGuesses} guesses left!`;
  } else if (numberOfGuesses === 1) {
    counter.innerText = `This is your last chance, make a guess!`;
    findOutButton.style.display = "none";
    questions.style.display = "none";
  }

  numberOfGuesses = numberOfGuesses - 1;
};

// Randomly select a person from the characters array and set as the value of the variable called secret
function setSecret() {
  secretCharacter =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
}

// This function will start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS;
  setSecret();
  numberOfGuesses = 5;
  generateBoard();

  finishWrapper.style.display = "none";
  board.style.display = "flex";
  questionSection.style.display = "flex";
  findOutButton.style.display = "flex";
  questions.style.display = "flex";
  findOutButton.disabled = true;
  questions.value = "";
};
// setting the currentQuestion object when you select something in the dropdown

const selectQuestion = () => {
  findOutButton.disabled = false;

  // These variables stores what option group (category) the question belongs to and the option value.
  const questCategory =
    questions.options[questions.selectedIndex].parentNode.label;
  const questValue = questions.options[questions.selectedIndex].value;

  //this is an object that I store the properties category and value in
  currentQuestion = {
    category: questCategory,
    value: questValue,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  let matchingAttribute = secretCharacter[currentQuestion.category].includes(
    currentQuestion.value
  );
  filterCharacters(matchingAttribute);
};

const filterCharacters = (match) => {
  const { category, value } = currentQuestion;
  if (category === "hair" || category === "eyes") {
    if (match) {
      alert(`Yes, the secret person does have ${value} ${category}!`);
      charactersInPlay = charactersInPlay.filter((person) => {
        return person[currentQuestion.category].includes(currentQuestion.value);
      });
    } else {
      alert(`No, the secret person does not have ${value} ${category}!`);
      charactersInPlay = charactersInPlay.filter((person) => {
        return !person[currentQuestion.category].includes(
          currentQuestion.value
        );
      });
    }
  } else if (category === "accessories") {
    if (match) {
      alert(`Yes, the secret person does have ${value}!`);
      charactersInPlay = charactersInPlay.filter((person) => {
        return person[currentQuestion.category].includes(currentQuestion.value);
      });
    } else {
      alert(`No, the secret person does not have ${value}!`);
      charactersInPlay = charactersInPlay.filter((person) => {
        return !person[currentQuestion.category].includes(
          currentQuestion.value
        );
      });
    }
  } else {
    if (match) {
      alert(`Its a smoker indeed!`);
      charactersInPlay = charactersInPlay.filter((person) => {
        return person[currentQuestion.category].includes(currentQuestion.value);
      });
    } else {
      alert("No, its a non-smoker.");
      charactersInPlay = charactersInPlay.filter((person) => {
        return !person[currentQuestion.category].includes(
          currentQuestion.value
        );
        if ((numberOfGuesses = 0)) {
        }
      });
    }
  }
  generateBoard();
};

// When clicking guess, the player first have to confirm that they want to make a guess.
const guessOnThisCharacter = (charactersName) => {
  let playersBestGuess = confirm(
    `Are you sure you want to guess on ${charactersName}?`
  );
  {
    if (playersBestGuess) {
      //if this is true, (the player is clicking on the ok button) we need to check the guess
      checkPlayersGuess(charactersName);
    }
  }
};

// If the player confirms, this function is invoked
const checkPlayersGuess = (characterToCheck) => {
  if (characterToCheck === secretCharacter.name) {
    finishWrapper.style.display = "flex";
    board.style.display = "none";
    questionSection.style.display = "none";
    finishMessage.innerText = `Yes, ${characterToCheck} is correct! Congratulations!`;
  } else {
    finishWrapper.style.display = "flex";
    board.style.display = "none";
    questionSection.style.display = "none";
    finishMessage.innerText = `I am sorry, ${characterToCheck} was not the secret person. Let's play again!`;
  }
};
// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
findOutButton.addEventListener("click", checkQuestion); //Check if the option you chose is the same as the secret persons
questions.addEventListener("change", () => selectQuestion(questions.value));
playAgainButton.addEventListener("click", start);
