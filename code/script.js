// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartBtn = document.getElementById("restart");
const findOutBtn = document.getElementById("filter");
const winOrLose = document.getElementById(`winOrLose`);

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
let secret = ``;
let currentQuestion = ``;
let charactersInPlay = ``;
let personToCheck = ``;

// Draw the game board
const generateBoard = () => {
  console.log("Redrawing board");
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
  winOrLose.classList.remove("active");
  console.log(winOrLose);
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
  selectQuestion();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  console.log(category);
  console.log(currentQuestion);
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  console.log(`secret`, secret);
  console.log(`value`, value);
  if (category === "hair" || category === "eyes") {
    if (category === "hair" && value === secret.hair) {
      console.log("right guess hair");
      filterCharacters(true);
    } else if (category === "eyes" && value === secret.eyes) {
      console.log("right guess eyes");
      filterCharacters(true);
    } else {
      console.log("wrong guess hair eyes");
      filterCharacters(false);
    }
  } else if (category === "accessories" || category === "other") {
    console.log(secret);
    if (secret.accessories.includes(value)) {
      console.log(`right guess accessoars`);
      filterCharacters(true);
    } else if (secret.other.includes(value)) {
      console.log(`right guess other`);
      filterCharacters(true);
    } else {
      console.log(`wrong guess accessoars others`);
      filterCharacters(false);
    }
  }
};

const keepPlayersAccessoriesOther = (category, value) => {
  charactersInPlay = charactersInPlay.filter((person) =>
    person[category].includes(value)
  );
};

const removePlayersAccessoriesOther = (category, value) => {
  charactersInPlay = charactersInPlay.filter(
    (person) => !person[category].includes(value)
  );
};

const keepPlayersHairAndEyes = (category, value) => {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[category] === value
  );
};

const removePlayersHairAndEyes = (category, value) => {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[category] !== value
  );
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log("hej!!");
  console.log(`characters in play`, charactersInPlay[0]);
  console.log(secret);
  const { category, value } = currentQuestion;

  // Show the correct alert message for different categories
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      );
      keepPlayersAccessoriesOther(category, value);
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      );
      removePlayersAccessoriesOther(category, value);
    }
  } else if (category === "other") {
    if (keep) {
      keepPlayersAccessoriesOther(category, value);
      alert(
        `Yes, the person has ${value}! Keep all the people that has ${value}.`
      );
    } else {
      removePlayersAccessoriesOther(category, value);
      alert(
        `No, the person doesn't have ${value}! Remove all people that doesn't have ${value}.`
      );
    }
  } else if (category === "hair") {
    if (keep) {
      keepPlayersHairAndEyes(category, value);
      alert(
        `Yes, the person has ${value} hair! Keep all people that has ${value} hair.`
      );
    } else {
      removePlayersHairAndEyes(category, value);
      alert(
        `No, the person doesnt have ${value} hair! Remove all people with ${value} hair.`
      );
    }
  } else if (category === "eyes") {
    if (keep) {
      keepPlayersHairAndEyes(category, value);
      alert(
        `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes.`
      );
    } else {
      removePlayersHairAndEyes(category, value);
      alert(
        `No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes.`
      );
    }
  }

  console.log(`characters in play`, charactersInPlay);
  generateBoard();
};

const confirmGuess = (message) => {
  let result = confirm(message);
  if (result === true) {
    checkMyGuess(personToCheck);
  } else {
    console.log("Cancel was pressed");
  }
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  personToCheck = personToConfirm;
  confirmGuess("Do you really wanna guess on this option?");

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  console.log(`secrets name`, secret.name);

  if (personToCheck === secret.name) {
    console.log("hej");
    winOrLoseText.innerHTML = `Congratulations you guessed on the right person!`;
    console.log(winOrLose);
  } else {
    winOrLoseText.innerHTML = `Sorry, you guessed wrong!`;
  }
  winOrLose.classList.add(`active`);

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartBtn.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutBtn.addEventListener("click", checkQuestion);
playAgain.addEventListener("click", start);
