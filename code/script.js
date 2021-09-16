// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterButton = document.getElementById("filter");
const playAgain = document.getElementById("playAgain");

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
let secret; //random person that is supposed to be guessed
let currentQuestion; //keep track of current questions
let charactersInPlay; //list of characters still in play

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
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  winOrLose.style.display = "none";
  console.log(secret); //REMOVE
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const actualValue = questions.value;

  // This variable stores what option group (category) the question belongs to.
  currentQuestion = {
    category: category,
    value: actualValue,
  };
};

// This function should be invoked when you click on 'Find Out' button.
// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
// Then invoke filterCharacters
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  if (category === "hair" || category === "eyes") {
    if (secret[category] === value) {
      console.log("Yes that is correct");
      filterCharacters(true);
    } else {
      console.log("no, that didnt match");
      filterCharacters(false);
    }
  } else if (category === "accessories" || category === "other") {
    if (secret[category].includes(value)) {
      console.log("Yes that is correct");
      filterCharacters(true);
    } else {
      console.log("no, that didnt match");
      filterCharacters(false);
    }
  }
};

// This function will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    // Similar to the one above
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all ${value}s`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(`No, the person is not a ${value}! Remove all ${value}s`);
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }
  // Invoke function to redraw the board with the remaining people.
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
// If the player wants to guess, invoke the checkMyGuess function.
const guess = (personToConfirm) => {
  const playerInteraction = window.confirm("Are you sure you want to guess?");

  if (playerInteraction) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert("YAY, you win!");
    winOrLose.style.display = "block";
    winText.style.display = "block";
    loseText.style.display = "none";
  } else {
    alert("Nooooooooooooo....");
    winOrLose.style.display = "block";
    loseText.style.display = "block";
    winText.style.display = "none";
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion); //Eventlistener when user selects attributes in the drop down list
filterButton.addEventListener("click", checkQuestion);
playAgain.addEventListener("click", start);
