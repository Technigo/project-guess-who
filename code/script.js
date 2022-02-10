// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgainButton = document.getElementById("playAgain");

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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // Generate board
  generateBoard();

  // Assign the winner charachter with setWinningCharacter
  setWinningCharacter();

  // Reset the pop-up window that appears when game over
  winOrLose.style.display = "none";
  board.style.display = "flex";
};

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what category the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // Stores the actual value of the question selected.
  const value = questions.options[questions.selectedIndex].value;

  // Create the object with
  currentQuestion = {
    category: category,
    value: value,
  };
  console.log(currentQuestion);
};

// This function should be invoked when you click on 'Find Out' button.
// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
// Then invoke filterCharacters
const checkQuestion = () => {
  //const { category, value } = currentQuestion;

  if (
    currentQuestion.category === "hair" ||
    currentQuestion.category === "eyes"
  ) {
    if (
      currentQuestion.value === winningCharacter.hair ||
      currentQuestion.value === winningCharacter.eyes
    ) {
      alert("yes it's true");
      filterCharactersKeep();

    } else {
      alert("no it's false");
      filterCharactersRemove();
    }
  } else if (
    currentQuestion.category === "accessories" ||
    currentQuestion.category === "other"
  ) {
    if (winningCharacter.accessories.includes(currentQuestion.value)) {
      alert("yes it's true");
      filterCharactersKeep();

    } else {
      alert("no it's false");
      filterCharactersRemove();
    }
  }
};

const filterCharactersKeep = () => {
      charactersInPlay = charactersInPlay.filter((person) => {
        return person[currentQuestion.category].includes(currentQuestion.value)
      });
    console.log(charactersInPlay);
    generateBoard();
  }

const filterCharactersRemove = () => {
    charactersInPlay = charactersInPlay.filter((person) => {
      return !person[currentQuestion.category].includes(currentQuestion.value)
    });
    console.log(charactersInPlay);
    generateBoard();
  }

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const playerGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`);
  if (playerGuess) {
    checkMyGuess(personToConfirm);
  } 
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (winningCharacter.name === personToCheck) {
    winOrLose.style.display = "flex";
    winOrLoseText.innerHTML = "right";
    board.style.display = "none";
  } else {
    winOrLose.style.display = "flex";
    winOrLoseText.innerHTML = "Wrong";
    board.style.display = "none";
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
findOutButton.addEventListener("click", checkQuestion);
questions.addEventListener("change", selectQuestion);
playAgainButton.addEventListener("click", start);