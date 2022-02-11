// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgainButton = document.getElementById("playAgain");
const popUp = document.getElementById("popUpQuestion");
const popUpQuestionText = document.getElementById("popUpQuestionText");
const popUpButton = document.getElementById("popUpButton");
const startButton = document.getElementById("startButton");
const wrapperOverlay = document.getElementById("startWrapperOverlay");
const confirmOverlay = document.getElementById("confirmWrapper");
const confirmText = document.getElementById("confirmText");
const confirmButton = document.getElementById("confirmButton");
const noConfirmButton = document.getElementById("noConfirmButton");

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
let secret;
let currentQuestion;
let charactersInPlay;
let guessCount = 0;
let personToConfirm;

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
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `;
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setWinningCharacter = () => {
  winningCharacter =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
    console.log(winningCharacter);
};

// Remove start overlay
const closeOverlay = () => {
  wrapperOverlay.style.display = "none";
}

// This function start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  generateBoard();

  setWinningCharacter();

  // Reset the pop-up window that appears when game over
  winOrLose.style.display = "none";
  board.style.display = "flex";
};

// Setting the currentQuestion object when something is selected in the dropdown menu
const selectQuestion = () => {
  // This variable stores what category the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // Stores the actual value of the question selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// Function invoked when you click on 'Find Out' button --> Compare the currentQuestion with the secret person 
const checkQuestion = () => {
  if (
    currentQuestion.category === "hair" ||
    currentQuestion.category === "eyes"
  ) {
    if (
      currentQuestion.value === winningCharacter.hair ||
      currentQuestion.value === winningCharacter.eyes
    ) {
      popUp.style.display = "flex";
      popUpQuestionText.innerHTML = "Yes, it's indeed the case.";
      filterCharactersKeep();

    } else {
      popUp.style.display = "flex";
      popUpQuestionText.innerHTML = "Nix, it's totally incorrect.";
      filterCharactersRemove();
    }

  } else if (
    currentQuestion.category === "accessories" ||
    currentQuestion.category === "other"
  ) {

    if (winningCharacter.accessories.includes(currentQuestion.value)) {
      popUp.style.display = "flex";
      popUpQuestionText.innerHTML = "Yes, it's indeed the case.";
      filterCharactersKeep();

    } else {
      popUp.style.display = "flex";
      popUpQuestionText.innerHTML = "Nix, it's totally incorrect.";
      filterCharactersRemove();
    }
  }
};

// Remove pop up overlay
const closePopUp = () => {
  popUp.style.display = "none";
}

// Remove pop up overlay
const closeConfirm = () => {
  confirmOverlay.style.display = "none";
}

const filterCharactersKeep = () => {
      charactersInPlay = charactersInPlay.filter((person) => {
        return person[currentQuestion.category].includes(currentQuestion.value)
      });
    generateBoard();
  }

const filterCharactersRemove = () => {
    charactersInPlay = charactersInPlay.filter((person) => {
      return !person[currentQuestion.category].includes(currentQuestion.value)
    });
    generateBoard();
  }

const guess = (guessing) => {
  personToConfirm = guessing;
  confirmOverlay.style.display = "flex";
  confirmText.innerHTML = `Are you sure you want to guess on ${personToConfirm}?`;
}

// Function invoked if the user want to make a guess 
const checkMyGuess = (personToCheck) => {
  if (winningCharacter.name === personToCheck) {
    winOrLose.style.display = "flex";
    winOrLoseText.innerHTML = `Excellent, ${personToCheck} is absolutely correct!`;
    board.style.display = "none";
  } else {
    winOrLose.style.display = "flex";
    winOrLoseText.innerHTML = `Dooh, ${personToCheck} is unfortunately not the one!`;
    board.style.display = "none";
  }
};

// Invokes the start function when website is loaded or the game is restarted
start();

// All the event listeners
restartButton.addEventListener("click", start);
findOutButton.addEventListener("click", checkQuestion);
questions.addEventListener("change", selectQuestion);
playAgainButton.addEventListener("click", start);
popUpButton.addEventListener("click", closePopUp);
startButton.addEventListener("click", closeOverlay);
noConfirmButton.addEventListener("click", closeConfirm);
confirmButton.addEventListener('click', () => {
  confirmOverlay.style.display = "none";
  checkMyGuess(personToConfirm);
})