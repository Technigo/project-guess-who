// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLoseSection = document.getElementById("winOrLose");
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
let charactersInPlay = CHARACTERS;

// Draws the game board
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

// Randomly selects a person from the characters array and sets the value of the variable secret.
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function starts (and restarts) the game
const start = () => {
  charactersInPlay = CHARACTERS; // Sets the charactersInPlay array to be all the characters to start with.
  generateBoard();
  setSecret();
  console.log(secret);
};

// Sets the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  const value = questions.value; // This variable stores what option group (category) the question belongs to.

  currentQuestion = {
    category: category,
    value: value, // This variable stores the actual value of the question selected.
  };
  console.log(`chosen category in dropdown is ${category}`);
  console.log(`chosen value in dropdown is ${value}`);
};

// This function will be invoked when you click on the 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  console.log(currentQuestion);
  let keep = false; // Creates a boolean value for the variable keep. Later on the variable will be reassigned a new boolean value (depending on if the secret matches the selected value).

  // Compares the currentQuestion details with the secret person details based on category (hair, eyes, accessories or others).
  if (category === "hair") {
    keep = secret.hair === value;
    console.log(`category is ${category} value is ${value}`);
    console.log(`keep value for selected hair category is: ${keep}`);
  } else if (category === "eyes") {
    keep = secret.eyes === value;
    console.log(`category is ${category} value is ${value}`);
    console.log(`keep value for selected eyes category is: ${keep}`);
  } else if (category === "accessories") {
    keep = secret.accessories.includes(value);
    console.log(`category is ${category} value is ${value}`);
    console.log(`keep value for selected accessories category is: ${keep}`);
  } else if (category === "other") {
    keep = secret.other.includes(value);
    console.log(`category is ${category} value is ${value}`);
    console.log(`keep value for selected other category is: ${keep}`);
  }

  filterCharacters(keep); // Invokes filterCharacters
};

// Filters the characters array and redraws the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  console.log(currentQuestion);
  // Displays an alert message for different categories and filters by category to keep or remove based on the keep variable.
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s.`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}s.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesnt have ${value} ${category}! Remove all people with ${value} ${category}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }

  // Invokes the function to redraw the board with the remaining people.
  generateBoard();
};

// When clicking on guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let personToCheck = personToConfirm;
  let userConfirmed = confirm("Are you sure?"); // Displays a confirm-window
  if (userConfirmed) {
    checkMyGuess(personToCheck); // If the player wants to guess, checkMyGuess function is invoked.
  }
};

// If user confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  const correctGuess = secret.name === personToCheck; // Checks if the personToCheck is the same as the secret person's name
  console.log(`person to check is: ${personToCheck}`);
  console.log(`secret person is: ${secret.name}`);
  console.log("Check my guess function is called");
  // Displays a message that is shown in the win or lose section
  if (correctGuess) {
    console.log("You won!");
    winOrLoseText.innerHTML = `${personToCheck} is correct, you have won!`;
  } else {
    console.log("You loose!");
    winOrLoseText.innerHTML = `${personToCheck} is wrong, you loose!`;
  }
  // Toggles the classlist that make the win or lose section appear
  winOrLoseSection.classList.toggle("display");
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);

playAgainButton.addEventListener("click", () => {
  winOrLoseSection.classList.toggle("display");
  start();
});
