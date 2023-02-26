// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const winOrLose = document.getElementById("winOrLose");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filter = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgain = document.getElementById("playAgain");
const nameButton = document.getElementById("name-button");
const userNameInput = document.getElementById("name");
const displayUsername = document.getElementById("users-name-displayed");
const resetUsernameButton = document.getElementById("reset-username");
const overlay = document.getElementById("overlay");
const count = document.getElementById("count");
const guesses = document.getElementById("guesses");
const totalTime = document.getElementById("total-time");

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
let secret,
  currentQuestion,
  charactersInPlay,
  userName,
  userGuess,
  seconds,
  minute,
  hour;
let numberOfGuesses = 0;

// Counters
// Display on aside
let counter = () => {
  numberOfGuesses++;
  count.innerHTML = `${numberOfGuesses}`;
};

//Display on win / lose
let displayGuesses = () => {
  numberOfGuesses++;
  guesses.innerHTML = `${numberOfGuesses}`;
};

// Reset Counter
let resetCounter = () => {
  numberOfGuesses = 0;
  count.innerHTML = `${numberOfGuesses}`;
};

// Timer
seconds = 0;
let timer = setInterval(() => {
  ++seconds;
  hour = Math.floor(seconds / 3600);
  minute = Math.floor((seconds - hour * 3600) / 60);
  let updSecond = seconds - (hour * 3600 + minute * 60);
  document.getElementById("timer").innerHTML =
    hour + ":" + minute + ":" + updSecond;
}, 1000);

// Reset timer
let resetTimer = () => {
  seconds = 0;
};

//Display time on Win / Loose
let displaySeconds = () => {
  totalTime.innerHTML = `${hour} : ${minute} : ${seconds}`;
};

//overlay func
const showOverlay = () => {
  overlay.style.display = "flex";
};

const hideOverlay = () => {
  overlay.style.display = "none";
};

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

  // What else should happen when we start the game?

  //Start value of question
  setSecret();
  generateBoard();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  let category = questions.options[questions.selectedIndex].parentNode.label;

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  //Object storing th category and question (value)
  currentQuestion = {
    category: category, //Cat from questions dropdown
    value: value, //Value from questions dropdown
  };
};

const checkQuestion = () => {
  const { category, value } = currentQuestion; // This is to destruct the currentQuestion object to be able to use these variables more easily
  if (category === "eyes") {
    if (value === secret.eyes) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  } else if (category === "hair") {
    if (value === secret.hair) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  } else if (category === "accessories" || category === "other") {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  let { category, value } = currentQuestion;
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }
  if (category === "hair") {
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
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, the person has ${value} as a habit! Keep all people with ${value} as a habit`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't have ${value} as a habit! Remove all people with ${value} as a habit`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  confirm(`Are you sure you want to guess on ${personToConfirm}?`);
  if (confirm) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  displaySeconds();
  displayGuesses();
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    // 2. Show the win section
    winOrLose.style.display = "block";

    // 3. Hide the game board
    board.style.display = "none";
    // 4. Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerHTML = `${userName}, You Win!`;
  } else {
    // 1. Show the lose section
    winOrLose.style.display = "block";
    // 2. Hide the game board
    board.style.display = "none";
    // 3. Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerHTML = `${userName}, You Lose!`;
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", () => {
  confirm("Are you sure you want to restart?");
  if (confirm) {
    start();
    resetCounter();
    resetTimer();
  }
});

filter.addEventListener("click", () => {
  counter();
  checkQuestion();
});

questions.addEventListener("change", () => {
  selectQuestion();
});

playAgain.addEventListener("click", () => {
  winOrLose.style.display = "none";
  board.style.display = "flex";
  start();
  resetCounter();
  resetTimer();
});

//Username input
userNameInput.addEventListener("keyup", () => {
  // console.log(userNameInput.value);
  userName = userNameInput.value;
});
//Hide overlay on click
nameButton.addEventListener("click", () => {
  if (typeof userName === "string" && userName.length > 0) {
    hideOverlay();
    displayUsername.innerHTML = `${userName}`;
  } else {
    alert("please enter username");
  }
  resetTimer();
});

//Reshow overlay
resetUsernameButton.addEventListener("click", () => {
  showOverlay();
});
