// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const winOrLose = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    beard: "no",
    accessories: ["sunglasses", "hat"],
    other: [],
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    beard: "brown",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    beard: "grey",
    accessories: ["hat"],
    other: ["smoker"],
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hair: "black",
    eyes: "brown",
    beard: "no",
    accessories: [],
    other: [],
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hair: "yellow",
    eyes: "green",
    beard: "no",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "James",
    img: "images/james.svg",
    hair: "brown",
    eyes: "green",
    beard: "no",
    accessories: ["sunglasses"],
    other: [],
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    beard: "no",
    accessories: ["sunglasses", "jewellery"],
    other: [],
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    beard: "no",
    accessories: ["sunglasses"],
    other: [],
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    beard: "no",
    accessories: ["glasses", "jewellery"],
    other: [],
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    beard: "no",
    accessories: ["sunglasses"],
    other: ["smoker"],
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    beard: "no",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    beard: "no",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    beard: "orange",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    beard: "no",
    accessories: ["hat"],
    other: ["selfie addict"],
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "orange",
    eyes: "green",
    beard: "no",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "hidden",
    eyes: "blue",
    beard: "no",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hair: "black",
    eyes: "blue",
    beard: "no",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    beard: "no",
    accessories: ["glasses", "jewellery"],
    other: [],
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hair: "brown",
    eyes: "green",
    beard: "no",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "yellow",
    eyes: "hidden",
    beard: "no",
    accessories: ["sunglasses", "hat", "jewellery"],
    other: [],
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    beard: "no",
    accessories: ["jewellery"],
    other: [],
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hair: "yellow",
    eyes: "green",
    beard: "no",
    accessories: [],
    other: [],
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hair: "black",
    eyes: "green",
    beard: "black",
    accessories: [],
    other: [],
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    beard: "no",
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
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // Here we're showing the board, activating the secret person and the selected question.
  generateBoard();
  setSecret();
  selectQuestion();
  winOrLose.style.display = "none";
  board.style.display = "flex";
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what option group (category) the question belongs to.
  // Tis variable stores the actual value of the question we've selected.
  const value = questions.value;
  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function invokes when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep = false;
  // Here the currentQuestion details is compared with the secret person details
  // And keeps or removes people based on that
  if (category === "hair" || category === "eyes" || category === "beard") {
    keep = value === secret[category];
    console.log("value:" + value);
    console.log("Secret: " + secret[category]);
  } else if (category === "accessories" || category === "other") {
    keep = secret[category].includes(value);
  }
  // This function invokes filterCharacters
  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log("keep: " + keep);

  const { category, value } = currentQuestion;
  // Showing the correct alert message for different categories.
  if (category === "accessories") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(
        `Yes, the person wears ${value}! 🤩 Keeping all people that wears ${value}`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(
        `No, the person doesn't wear ${value}! 🤔 Removing all people that wears ${value}`
      );
    }
  } else if (category === "other") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(
        `Yes, the person is a ${value}! 🤩 Keeping all people that are ${value}'s`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(
        `No, the person is not a ${value}! 🤔 Removing all people that are ${value}'s`
      );
    }
  } else if (category === "hair") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alert(
        `Yes, the person has ${value} hair! 🤩 Keeping all people that have ${value} hair.`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alert(
        `No, the person doesn't have ${value} hair! 🤔 Removing all people that have ${value} hair.`
      );
    }
  } else if (category === "beard") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alert(
        `Yes, the person has ${value} beard! 🤩 Keeping all people that have ${value} beard.`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alert(
        `No, the person doesn't have ${value} beard! 🤔 Removing all people that have ${value} beard.`
      );
    }
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alert(
        `Yes, the person has ${value} eyes! 🤩 Keeping all people that have ${value} eyes.`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alert(
        `No, the person doesn't have ${value} eyes! 🤔 Removing all people that have ${value} eyes.`
      );
    }
  }
  generateBoard(keep);
};

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToCheck) => {
  // A variable that stores the interaction from the player.
  let playerGuess = confirm(`Do you want to guess on ${personToCheck}? 🤓`);
  // If the player wants to guess, the checkMyGuess function invokes.
  if (playerGuess) {
    checkMyGuess(personToCheck);
  } else {
    alert("You can continue with the game! 🥳");
  }
};

// If the player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You did it! 🌟 You guessed on the correct person - ${personToCheck}! You win! 🎊🎊🎊`;
  } else {
    winOrLoseText.innerHTML = `Sorry the mysterious person wasn't ${personToCheck}. You loose! 😓 The correct person was ${secret.name}.`;
  }
  // Showing the win or lose section
  winOrLose.style.display = "flex";
  // Hides the game board
  board.style.display = "none";
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", () => selectQuestion());
findOutButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", start);
