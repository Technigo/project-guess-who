// ALL THE DOM SELECTORS STORED AS SHORT VARIABLES
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const playAgainButton = document.getElementById("playAgain");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");

// ARRAY WITH ALL THE CHARACTERS, AS OBJECTS
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hiddenhair",
    eyes: "hidden",
    accessories: ["sunglasses", "hat"],
    other: [],
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hiddenhair",
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
    accessories: ["sunglasses"],
    other: [],
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    accessories: ["sunglasses"],
    other: [],
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["sunglasses"],
    other: [],
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "jewelry"],
    other: [],
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    accessories: ["sunglasses"],
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
    hair: "hiddenhair",
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
    accessories: ["sunglasses", "hat"],
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

// GLOBAL VARIABLES
let secret; // WILL BE THE SECRET PERSON OBJECT
let currentQuestion; // WILL BE THE CURRENT QUESTION OBJECT
let charactersInPlay; // WILL BE AN ARRAY OF ALL PEOPLE LEFT IN THE GAME

// DRAW THE GAME BOARD
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

// RANDOMLY SELECT A PERSON FROM THE CHARACTERS ARRAY AND SET AS THE VALUE OF THE VARIABLE CALLED SECRET
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// FUNCTION TO START (AND RESTART) THE GAME
const start = () => {
  // HERE WE'RE SETTING CHARACTERSINPLAY ARRAY TO BE ALL THE CHARACTERS TO START WITH
  charactersInPlay = CHARACTERS;
  // WHAT ELSE SHOULD HAPPEN WHEN WE START THE GAME?
  setSecret();
  generateBoard();
  selectQuestion();
  winOrLose.style.display = "none";
  board.style.display = "flex";
};

// SETTING THE CURRENTQUESTION OBJECT WHEN YOU SELECT SOMETHING IN THE DROPDOWN
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// THIS FUNCTION SHOULD BE INVOKED WHEN YOU CLICK ON 'FIND OUT' BUTTON
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // COMPARE THE CURRENTQUESTION DETAILS WITH THE SECRET PERSON DETAILS IN A DIFFERENT MANNER BASED ON CATEGORY (HAIR/EYES OR ACCESSORIES/OTHERS).
  // SEE IF WE SHOULD KEEP OR REMOVE PEOPLE BASED ON THAT
  // THEN INVOKE FILTERCHARACTERS

  if (category === "hair" || category === "eyes" || category === "gender") {
    keep = value === secret[category];
  } else if (category === "accessories" || category === "other") {
    keep = secret[category].includes(value);
  }
  filterCharacters(keep);
};

// FILTER THE CHARACTERS ARRAY AND REDRAW THE GAME BOARD.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // SHOW THE CORRECT ALERT MESSAGE FOR DIFFERENT CATEGORIES
  // ALERT POPUP THAT SAYS SOMETHING LIKE: "NO, THE PERSON DOESNT HAVE YELLOW HAIR! REMOVE ALL PEOPLE WITH YELLOW HAIR"
  // ALERT POPUP THAT SAYS SOMETHING LIKE: "YES, THE PERSON HAS YELLOW HAIR! KEEP ALL PEOPLE WITH YELLOW HAIR"
  if (category === "hair") {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all the people with ${value} hair`
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair`
      );
    }
  }
  if (category === "eyes") {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`
      );
    }
  }
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
    }
  } else if (category === "other" || category === "gender") {
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all the ${value}s`);
    } else {
      alert(`No, the person is not a ${value}! Remove all the ${value}s`);
    }
  }

  // HAIR, EYES
  if (category === "hair" || category === "eyes") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
    // ACCESSORIES, OTHER
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }

  // INVOKE A FUNCTION TO REDRAW THE BOARD WITH THE REMAINING PEOPLE
  generateBoard();
};
start();

// WHEN CLICKING GUESS, THE PLAYER FIRST HAVE TO CONFIRM THAT THEY WANT TO MAKE A GUESS
const guess = (personToConfirm) => {
  // STORE THE INTERACTION FROM THE PLAYER IN A VARIABLE
  const playerGuess = confirm(
    `Do you really want to guess on ${personToConfirm}?`
  );
  // REMEMBER THE CONFIRM() ?
  // IF THE PLAYER WANTS TO GUESS, INVOKE THE CHECKMYGUESS FUNCTION.
  if (playerGuess) {
    checkMyGuess(personToConfirm);
  }
};

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `WOHO YOU ARE A WINNER 🏆 ${secret.name} is the correct person!`;
  } else {
    winOrLoseText.innerHTML = `😢 Better luck next time, correct person was ${secret.name}. Try again?`;
  }
  winOrLose.style.display = "flex";
  board.style.display = "none";
};

// INVOKES THE START FUNCTION WHEN WEBSITE IS LOADED
start();

// ALL THE EVENT LISTENERS
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", start);
