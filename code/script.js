// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOut = document.getElementById("filter");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgain = document.getElementById("playAgain");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hairColor: "hidden",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    patch: true,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: true,
    smoker: false,
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hairColor: "grey",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: true,
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "James",
    img: "images/james.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hairColor: "black",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: true,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    patch: false,
    earrings: true,
    cell: false,
    necklace: true,
    parrot: false,
    smoker: false,
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hairColor: "purple",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: true,
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hairColor: "brown",
    eyeColor: "blue",
    glasses: true,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: true,
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: true,
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hairColor: "white",
    eyeColor: "hidden",
    glasses: false,
    hat: true,
    patch: false,
    earrings: false,
    cell: true,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hairColor: "black",
    eyeColor: "blue",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jia",
    img: "images/jia.svg",
    hairColor: "black",
    eyeColor: "blue",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: false,
    patch: false,
    earrings: true,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jodi",
    img: "images/jodi.svg",
    hairColor: "yellow",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Joe",
    img: "images/joe.svg",
    hairColor: "brown",
    eyeColor: "brown",
    glasses: false,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jolee",
    img: "images/jolee.svg",
    hairColor: "black",
    eyeColor: "blue",
    glasses: false,
    hat: false,
    patch: false,
    earrings: true,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: true,
    parrot: false,
    smoker: false,
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hairColor: "grey",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    patch: false,
    earrings: true,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: false,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hairColor: "black",
    eyeColor: "green",
    glasses: false,
    hat: false,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: true,
    patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function starts the game and make sure all characters are included from start.
const start = () => {
  charactersInPlay = CHARACTERS;
  // the board is generated and the randomly selected secret person is set.
  generateBoard();
  setSecret();
};

// setting the currentQuestion object when you select something in the dropdown and defines which optground it is connected to.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

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
  } else if (category === "other") {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    };
  }
};

//Filters after comparing the value of the current question with the secret person.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute];
  filterCharacters(keep);
};

// Triggers an alert telling whether the secret person has the attribute chosen or not, and redraws a filtered board.
const filterCharacters = (keep) => {
  const { category, attribute, value } = currentQuestion;
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] === value
      );
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] !== value
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, the person is a ${attribute}! Keep all that is a ${attribute}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] === value
      );
    } else {
      alert(
        `No, the person isn't a ${attribute}! Remove all who is a ${attribute}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] !== value
      );
    }
  } else if (category === "hair color") {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all that has ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all who doesn't have ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] !== value
      );
    }
  } else if (category === "eye color") {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all that has ${value} eyes`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all who doesn't have ${value} eyes`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] !== value
      );
    }
  }
  generateBoard();
};

// asking for a confirmation to place a guess.
const guess = (suspect) => {
  let confirmGuess = confirm(`Have you decided to guess on ${suspect}?`);
  if (confirmGuess) {
    checkMyGuess(suspect);
  } else {
  }
};
//Invokes the checkMyGuess function in order to check if the secret person is the same as the player has selected.
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `You decided to guess on ${suspect} and good news; you were 100% right!`;
  } else {
    winOrLoseText.innerHTML = `You guessed on ${suspect}, but unfortunately it was not correct. The right choice is ${secret.name}.`;
  }
  winOrLose.style.display = "flex";
  board.style.display = "none";
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
findOut.addEventListener("click", checkQuestion);
questions.addEventListener("change", () => selectQuestion());
playAgain.addEventListener("click", start);
