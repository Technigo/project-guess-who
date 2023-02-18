// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const restartButton = document.getElementById("restart");
const playAgainButton = document.getElementById("playAgain");
const filterButton = document.getElementById("filter");
const questions = document.getElementById("questions");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hairColor: "hidden",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hairColor: "grey",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: "James",
    img: "images/james.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hairColor: "black",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hairColor: "purple",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hairColor: "brown",
    eyeColor: "blue",
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hairColor: "white",
    eyeColor: "hidden",
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hairColor: "black",
    eyeColor: "blue",
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hairColor: "grey",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hairColor: "black",
    eyeColor: "green",
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: true,
    smoker: false,
  },
];

// Global variables
let secret, currentQuestion, charactersInPlay;

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

// Randomly set a secret person
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// when clicking guess, you first have to conform that you want to make a guess
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you sure you want to guess on ${suspect}?`);

  if (makeAGuess) {
    checkMyGuess(suspect);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `YAY! Congrats <br>
     – you won! <span role="img" aria-label="cheer">🙌</span>`;
  } else {
    winOrLoseText.innerHTML = `Oh no! You guessed wrong. Game over! <span role="img" aria-label="angry">😤</span>`;
  }
  winOrLose.style.display = "flex";
  board.style.display = "none";
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const value = questions.value;
  const category = questions.options[questions.selectedIndex].parentNode.label;

  if (category === "hair color") {
    currentQuestion = {
      attribute: "hairColor",
      value: value,
      category: category,
    };
  } else if (category === "eye color") {
    currentQuestion = {
      attribute: "eyeColor",
      value: value,
      category: category,
    };
  } else if (category === "accessories") {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    };
  } else {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    };
  }
};

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute];

  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { attribute, category, value } = currentQuestion;

  // Show the correct alert message
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      );
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, the person is a ${attribute}! Keep all that are ${attribute}s`
      );
    } else {
      alert(
        `No, the person isn't a ${attribute}! Remove all that aren't ${attribute}s`
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all that has ${value} ${category}`
      );
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all that has ${value} ${category}`
      );
    }
  }

  // filter to keep or remove
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value)
    );
  } else {
    charactersInPlay = charactersInPlay.filter(
      (person) => !person[category].includes(value)
    );
  }

  generateBoard();
};

// the function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS; // reset characters to the inital array
  winOrLose.style.display = "none"; // dont show the win/lose screen
  board.style.display = "flex"; // show the game board again
  setSecret(); // set a new secret person
  generateBoard(); // draw the board with all the people
};

// Starts the game when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
playAgainButton.addEventListener("click", start);
filterButton.addEventListener("click", checkQuestion);
questions.addEventListener("change", selectQuestion);
