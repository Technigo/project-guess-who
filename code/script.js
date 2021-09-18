// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const playAgainButton = document.getElementById("playAgain");
const gameMusic = document.getElementById("gameMusic");
const winningSound = document.getElementById("winningSound");
const losingSound = document.getElementById("losingSound");

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
    accessories: ["glasses", "earrings", "necklace"],
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
    accessories: ["glasses", "earrings"],
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
    accessories: ["earrings"],
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
let charactersInPlay;
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let timeStart = setInterval(setTime, 1000);

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

// Timer function
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(time) {
  let timeString = time + "";
  if (timeString.length < 2) {
    return "0" + timeString;
  } else {
    return timeString;
  }
}

// A randomly selected person from the characters array is set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// Function to start (and restart) the game
const start = () => {
  // All the characters will show from the beginning
  charactersInPlay = CHARACTERS;

  // Restart timer
  totalSeconds = 0;
  valString = "";
  secondsLabel.innerHTML = "";
  minutesLabel.innerHTML = "";

  // The board with the characters will show
  generateBoard();

  // One of the characters is randomly selected as the secret person
  setSecret();

  //Invokes the selectQuestion function
  selectQuestion();

  //The music restarts
  gameMusic.play();
  gameMusic.currentTime = 0;
};

//Sets the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // Variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function is invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Compares the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // Invokes the filterCharacters function based on the outcome
  if (category === "hair" || category === "eyes") {
    if (category === "hair") {
      if (secret.hair === value) {
        filterCharacters(true);
      } else {
        filterCharacters(false);
      }
    } else {
      if (secret.eyes === value) {
        filterCharacters(true);
      } else {
        filterCharacters(false);
      }
    }
  } else if (category === "accessories" || category === "other") {
    if (category === "accessories") {
      if (secret.accessories.includes(value)) {
        filterCharacters(true);
      } else {
        filterCharacters(false);
      }
    } else {
      if (secret.other.includes(value)) {
        filterCharacters(true);
      } else {
        filterCharacters(false);
      }
    }
  }
};

// This function filters the characters array and redraws the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  // Alert messages are shown for different categories
  // The characters are filtered by category to keep or remove based on the keep variable.

  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all the people that are ${value}`
      );

      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all people that are ${value}`
      );

      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "hair") {
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
  } else if (category === "eyes") {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }

  // Redraws the board with the remaining people.
  generateBoard();
};

// When clicking guess, the player first has to confirm that he/she wants to make a guess.
// The function checkMyGuess will be invoked if the player confirms the guess.
const guess = (personToConfirm) => {
  const guessConfirmed = confirm(`Is ${personToConfirm} your answer?`);
  if (guessConfirmed) {
    checkMyGuess(personToConfirm);
  }
};

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    document.getElementById("winOrLoseText").innerHTML =
      "Congratulations! You won! Wanna play again?";
    gameMusic.pause();
    winningSound.play();
  } else {
    document.getElementById("winOrLoseText").innerHTML =
      "Oh no! Better luck next time! Try again?";
    gameMusic.pause();
    losingSound.play();
  }

  // The win or lose section is shown.
  document.getElementById("winOrLose").style.display = "flex";
};

// Invokes the start function when website is loaded
start();

// All the event listeners

// The timer restarts when player clicks on the restart button
restartButton.addEventListener("click", () => {
  start();
  count = 0;
  clearInterval(timeStart);
  timeStart = setInterval(setTime, 1000);
});

//selectQuestion is invoked when player clicks on one of the questions
questions.addEventListener("change", selectQuestion);

//checkQuestion is invoked when player clicks on the Find Out button
findOutButton.addEventListener("click", checkQuestion);

// The start function is invoked again when player clicks on the Play Again button.
// The win or lose section gets hidden
playAgainButton.addEventListener("click", () => {
  start();
  document.getElementById("winOrLose").style.display = "none";
});

// The music start playing when player enters the page and clicks on this button
findOutButton.addEventListener("click", () => {
  gameMusic.play();
});
