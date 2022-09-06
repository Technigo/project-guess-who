// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const select = document.getElementById("questions");
const winOrLose = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["glasses", "a hat"],
    other: [],
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["a hat"],
    other: [
      "a little green animal on them",
      "an impressive beard",
      "30+ years of boating experience",
    ],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    accessories: ["a hat"],
    other: [
      "a smoking habit",
      "an impressive beard",
      "30+ years of boating experience",
    ],
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["a tie"],
    other: ["a little green animal on them"],
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
    accessories: ["glasses", "a necklace"],
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
    accessories: ["glasses", "earrings", "a necklace"],
    other: [],
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["a smoking habit"],
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses", "a hat"],
    other: ["a smoking habit"],
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: ["freckles"],
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "a hat"],
    other: ["a smoking habit", "an impressive beard"],
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    accessories: ["a hat"],
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
    accessories: ["a hat"],
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
    accessories: ["glasses", "earrings"],
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
    accessories: ["glasses", "a hat", "a necklace"],
    other: [],
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    accessories: ["earrings"],
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
    accessories: ["a tie"],
    other: ["an impressive beard"],
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses", "a hat"],
    other: [],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let numberOfQuestionsAsked = 0;
let guessesLeftToMake = 3;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img class="character-image" src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Could it be ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">GUESS</button>
        </div>
      </div>
    `;
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// Start (or restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  setNumberOfQuestionsAsked(0);
  setNumberOfGuessesLeftToMake(3);
  winOrLose.style.display = "none";
  winOrLoseText.innerHTML = "";
};

// Count how many of questions the user has asked during the current game
function setNumberOfQuestionsAsked(count) {
  numberOfQuestionsAsked = count;
  questionCounter.innerText = numberOfQuestionsAsked;
}

// Count how many guesses the user has got left
function setNumberOfGuessesLeftToMake(count) {
  numberOfGuessesLeftToMake = count;
  guessCounter.innerText = numberOfGuessesLeftToMake;
}

// Set the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// Runs when user clicks "Find Out" button
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep;

  // Compares the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // The checks if we should keep or remove people based on that

  if (category === "hair" || category === "eyes") {
    keep = value === secret[category];
  } else if (category === "accessories" || category === "other") {
    keep = secret[category].includes(value);
  } else {
    keep = false;
  }

  // Resets the select efter user asks a question
  document.getElementById("questions").selectedIndex = 0;

  filterCharacters(keep);
};

// Filter out the character array and redraw the game board
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  const attribute = category;
  if (category === "hair") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(`Yes, the person has got ${value} hair! 😀`);
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(`No, the person does not have ${value} hair...`);
    }
  } else if (category === "eyes") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(`Yes, the person has got ${value} eyes! 😊`);
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(`No, the person does not have ${value} eyes...`);
    }
  } else if (category === "accessories") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(`Yes, the person is wearing ${value}! 🙂`);
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(`No, the person is not wearing ${value}...`);
    }
  } else if (category === "other") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(`Yes, the person has got ${value}! 😃`);
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(`No, the person does not have ${value}...`);
    }
  }
  if (["hair", "eyes", "accessories", "other"].includes(category)) {
    setNumberOfQuestionsAsked(numberOfQuestionsAsked + 1);
  }

  // Redraw the board with the remaining people

  generateBoard();
};

// Have user confirm their guess before continuing
const guess = (personToConfirm) => {
  if (window.confirm(`Are you sure you want to guess ${personToConfirm}?`)) {
    setNumberOfGuessesLeftToMake(numberOfGuessesLeftToMake - 1);
    checkMyGuess(personToConfirm);
  }
};

// If user presses OK, the game checks they were right or not
const checkMyGuess = (personToCheck) => {
  if (personToCheck == secret.name) {
    winOrLoseText.innerHTML += `That's right, it was ${secret.name}! Well done! 🥳<br>
    This round you asked ${numberOfQuestionsAsked} before figuring it out.`;
    // Display confetti if user wins
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["⭐️"],
      emojiSize: 35,
      confettiNumber: 10,
    });
    jsConfetti.addConfetti({ confettiNumber: 500, confettiRadius: 5 });
    board.style.display = "hidden";
    winOrLose.style.display = "flex";
  } else {
    // Wrong guess - check if the user still has guesses left to make
    window.alert(
      `Not quite right 🙁 You can make ${numberOfGuessesLeftToMake} guesses!`
    );
    if (numberOfGuessesLeftToMake < 1) {
      winOrLoseText.innerHTML += `Game over... 😢<br>
      The secret person was ${secret.name}.<br>
      Better luck next time! `;
      // Display sympathy confetti if user loses
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({ confettiNumber: 5, confettiRadius: 4 });
      board.style.display = "hidden";
      winOrLose.style.display = "flex";
    }
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
playAgainButton.addEventListener("click", start);
select.addEventListener("change", () => {});
document.getElementById("filter").addEventListener("click", () => {
  selectQuestion();
  checkQuestion();
});
