// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const findOutButton = document.getElementById("filter");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const restartButton = document.getElementById("restart");
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
    other: [],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "gray",
    eyes: "blue",
    accessories: ["a hat"],
    other: ["a smoker"],
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
    other: ["a smoker"],
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses", "a hat"],
    other: ["a smoker"],
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
    accessories: ["glasses", "a hat"],
    other: ["a smoker"],
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
    accessories: ["glasses", "a hat"],
    other: [],
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "gray",
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
    accessories: ["glasses", "a hat"],
    other: [],
  },
];

// Global variables
let secret; //Will become the secret person object
let currentQuestion; //Will become the current question object
let charactersInPlay; //Will become an array of all people left in the game

// Draw the game board
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `;
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  // Select a random index from the charactersInPlay array
  // Set the value of secret to the character at the randomly selected index

  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function starts (and restarts) the game
const start = () => {
  // Set charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  board.style.display = "";
  if (winOrLose.style.display === "block") {
    winOrLose.style.display = "none";
  } else {
    winOrLose.style.display = "none";
  }
};

// Set the currentQuestion object when something is selected in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  // This variable stores what option group (category) the question belongs to.
  // A variable that stores the actual value of the selected question.
  //Retrieve the value of the selected question option
  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when the 'Find Out' button is clicked.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep = value === secret[category];
  // Compares the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if people should be kept or removed from the board based on the selection
  // Invoke filterCharacters
  if (category === "Hair" || category === "Eyes") {
    //Check if the attributes in the currentQuestion matches the attributes in the secret or not
    //If the guess is true for the secret person, keep all the people with that value, e.g. yellow hair.
    //If the guess is false for the secret person, remove all people with that value e.g. yellow hair.
    if (value === secret.hair || value === secret.eyes) {
      keep = true;
      filterCharacters(true);
    } else {
      keep = false;
      filterCharacters(false);
    }
  } else if (category === "Accessories" || category === "Other") {
    //Check if the attributes in the currentQuestion matches the attributes in the secret or not
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      keep = true;
      filterCharacters(true);
    } else {
      keep = false;
      filterCharacters(false);
    }
  }
};

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "Hair") {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person.hair === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person.hair !== value
      );
    }
  }

  if (category === "Eyes") {
    if (keep) {
      alert(
        `Yes the person has ${value} eyes. Keep all the people that have ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person.eyes === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person.eyes !== value
      );
    }
  }

  if (category === "Accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person.accessories.includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.accessories.includes(value)
      );
    }
  }
  if (category === "Other") {
    if (keep) {
      alert(
        `Yes, the person is ${value}. Keep all the people that is ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person.other.includes(value)
      );
    } else {
      alert(
        `No, the person isn't ${value}! Remove all people that is ${value}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.other.includes(value)
      );
    }
  }
  // Determine the category
  // Filter by category to keep or remove based on the keep variable.
  // Invoke the function to redraw the board with the remaining people.
  generateBoard();
};

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // Store the interaction from the player in a variable.
  const madeAGuess = confirm(
    `Do you want to make a guess on ${personToConfirm}?`
  );
  // If the player wants to guess, invoke the checkMyGuess function.
  if (madeAGuess) {
    checkMyGuess(personToConfirm);
  }
};

// If the player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section
  // 3. Show the win or lose section
  // 4. Hide the game board and question section

  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You win! 🥳🎉${secret.name} is correct!`;
    winOrLose.style.display = "block"; //flex?
    board.style.display = "none";
  } else {
    winOrLoseText.innerHTML = `Game over 😒. The secret person was ${secret.name}`;
    winOrLose.style.display = "block"; //flex?
    board.style.display = "none";
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
restartButton.addEventListener("click", start);
playAgainButton.addEventListener("click", start);
