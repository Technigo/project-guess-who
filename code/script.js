"use strict";
// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
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
  console.log(secret);
};
let startTime;
let elapsedTime = 0;
let timerInterval;

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  start();
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  setTimeout(() => generateBoard(), 500);
  setSecret();
  winOrLose.style.display = "";
  startTimer();
};

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `Time played: ${formattedHH}:${formattedMM}:${formattedSS}`;
}

// Create function to modify innerHTML
function print(txt) {
  document.getElementById("timePlayed").innerHTML = txt;
}

const startTimer = () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };

  console.log(currentQuestion);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === "hair" || category === "eyes") {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }
  } else if (category === "accessories" || category === "other") {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }
  }

  // let counter = document.getElementById('counter');
  // counter.forEach((count) => {
  //   count++;
  //   counter.innerHTML += `This far you have guessed ${count} times`
  // });
  // let element = document.getElementById('counter');
  // let counter = 0;
  // counter.forEach((element, index) => console.log(element, index));
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "hair") {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people that have ${value}`);
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that has ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "eyes") {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that has ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that has ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "accessories") {
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
  } else if (category === "other") {
    if (keep) {
      alert(`Yes the person smokes! Keep all the smokers`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(`No the person doesn't smoke! Remove all the smokers`);
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  setTimeout(() => generateBoard(), 500);
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const result = window.confirm(`Are you sure this is your choice?`);
  console.log(result);

  if (result) {
    checkMyGuess(personToConfirm);
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert("That's correct, you win!");
    board.innerHTML = "";
    winOrLose.style.display = "block";
  } else {
    alert("That is not correct, you lose!");
    reset();
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", reset);
questions.addEventListener("change", selectQuestion);
filter.addEventListener("click", checkQuestion);
playAgain.addEventListener("click", reset);
