// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const findOutBtn = document.getElementById("filter");
const playAgain = document.getElementById("playAgain");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const guesses = document.getElementById("guesses");
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
    other: ["bierded"],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    accessories: ["hat"],
    other: ["smoker", "bierded"],
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
    accessories: ["glasses", "necklace"],
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
    accessories: ["glasses", "necklace"],
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
    other: ["smoker", "bierded"],
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
    accessories: ["glasses", "hat", "necklace"],
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
    other: ["bierded"],
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
let numberOfGuesses = 0;

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
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  numberOfGuesses = 0;
  charactersInPlay = CHARACTERS;
  winOrLose.style.display = "none";
  board.style.display = "flex";
  guesses.innerHTML = `
  <p style="font-size:25px; color:purple;">You have guessed: ${numberOfGuesses} times</p>
  `;
  //pop upp all the characters
  generateBoard();
  //chose one character to be the secret one
  setSecret();
  // make the input in the question section to be abeld to be choosed before changing question.
  selectQuestion();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function is checking if the guessings are true or false and filtering the caracters when klicking on the 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep = false;

  if (category === "hair" || category === "eyes") {
    keep = value === secret[category];
  } else if (category === "accessories" || category === "other") {
    keep = secret[category].includes(value);
  }
  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  numberOfGuesses++;
  guesses.innerHTML = `
  <p style="font-size:25px; color:purple;">You have guessed: ${numberOfGuesses} times</p>
  `;
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      // filter by category to keep or remove based on the keep variable.
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      // filter by category to keep or remove based on the keep variable.
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes! the person is a ${value} Keep all persons that are ${value}´s `
      );
      // filter by category to keep or remove based on the keep variable.
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No! The person is not a ${value}. Remove all persons that are ${value}´s`
      );
      // filter by category to keep or remove based on the keep variable.
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "hair") {
    if (keep) {
      alert(
        `Yes the person has ${value} hair! Keep all the people with ${value} hair`
      );
      // filter by category to keep or remove based on the keep variable.
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No! the person do not have ${value} hair. Remove all person with ${value} hair`
      );
      // filter by category to keep or remove based on the keep variable.
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "eyes") {
    if (keep) {
      alert(
        `Yes the person has ${value} eyes! Keep all the people with ${value} eyes`
      );
      // filter by category to keep or remove based on the keep variable.
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No! the person do not have ${value} eyes. Remove all person with ${value} eyes`
      );
      // filter by category to keep or remove based on the keep variable.
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard(keep);
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let playerGuess = confirm(`Do you want to guess on ${personToConfirm}?`);

  if (playerGuess) {
    checkMyGuess(personToConfirm);
  } else {
    alert("You can continue if you like");
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToConfirm === secret.name) {
    //win sound will play
    const audio = new Audio("win.mp3");
    audio.play();
    winOrLoseText.innerHTML = `Yeeeha! You Won!! ${personToConfirm} was the right person.`;
  } else {
    //lose sound will play
    const audio = new Audio("loose.mp3");
    audio.play();
    winOrLoseText.innerHTML = `Sorry! You lost, ${secret.name} Was the right person`;
  }

  // To hide the board and showe the WinOrLose message
  winOrLose.style.display = "flex";
  board.style.display = "none";
  // adding a img off the secret person in the WinOrLose message
  winOrLoseText.innerHTML += `
        <img class="the-one-img"
          src="${secret.img}"
          alt="${secret.name}"
        /> 
      `;
};

start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutBtn.addEventListener("click", checkQuestion);
playAgain.addEventListener("click", start);
