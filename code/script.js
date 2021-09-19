// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLoseWrapper = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const timerDisplay = document.getElementById("timer");
const secretPersonDisplay = document.getElementById("secretPerson");
const secretText = document.getElementById("secretText");

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
let currentQuestion = {
  category: "hair",
  value: "brown",
};
let charactersInPlay;
let numberOfQuestionsAsked = 0;
let timer;
let sec = 0;
let min = 0;
const cardSound = new Audio("./files/shuffle.mp3");

//****** IN THIS SECTION ALL THE FUNCTIONS USED ARE DEFINED */

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
  cardSound.play();
};

// this function reveals who was the secret person when the player makes a wrong guess
const revealSecretPerson = (secretPerson) => {
  secretPersonDisplay.innerHTML = "";
  secretPersonDisplay.innerHTML = `
  <div class="cardSingle">
        <p>${secretPerson.name}</p>
        <img src=${secretPerson.img} alt=${secretPerson.name}>
      </div>
    `;
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = CHARACTERS[Math.floor(Math.random() * 24)];
};

// This function start the game
const start = () => {
  timer = setInterval(timeCounter, 1000); //Starts the timer
  numberOfQuestionsAsked = 0; //Resets the questions asked counter
  showTimesAsked(numberOfQuestionsAsked); // Displays the number of questions asked
  winOrLoseWrapper.style.display = "none";
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
};

// This function resets the time counter;
const restartTimer = () => {
  clearInterval(timer);
  sec = 0;
  min = 0;
  timerDisplay.innerHTML = "";
};

//This function runs when player click on Restart button,
//it restarts timer and runs the start function
const restart = () => {
  restartTimer();
  start();
};

// setting the currentQuestion object when you select something in the dropdown
// this is linked with onChange listener
const selectQuestion = () => {
  currentQuestion = {
    category: questions.options[questions.selectedIndex].parentNode.label,
    value: questions.value,
  };
};

// Function that displays how many questions player has asked
const showTimesAsked = (number) => {
  document.getElementById(
    "questionCounter"
  ).innerHTML = `Questions asked: ${number}`;
};

// This is the function that will count time and will be executed with setInterval() method
const timeCounter = () => {
  timerDisplay.innerHTML = `${min} min : ${sec} sec`;
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
};

// This function should be invoked when you click on 'Find Out' button.
// Function displays a different text depending on the category and calls a function to filter characters
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  numberOfQuestionsAsked++;
  showTimesAsked(numberOfQuestionsAsked);
  if (category === "hair") {
    if (value === secret.hair) {
      alert(
        `Yes, this person has ${value} hair. We keep all people with ${value} hair`
      );
      filterCharacters(true);
    } else {
      alert(
        `No, this person doesn't have ${value} hair. We remove all people with ${value} hair`
      );
      filterCharacters();
    }
  } else if (category === "eyes") {
    if (value === secret.eyes) {
      alert(
        `Yes, this person has ${value} eyes. We keep all people with ${value} eyes`
      );
      filterCharacters(true);
    } else {
      alert(
        `No, this person doesn't have ${value} eyes. We remove all people with ${value} eyes`
      );
      filterCharacters();
    }
  } else if (category === "accessories") {
    if (secret.accessories.includes(value)) {
      alert(
        `Yes, this persons wears ${value}. We keep all people with ${value}`
      );
      filterCharacters(true);
    } else {
      alert(
        `No, this person doesn't wear ${value}. We remove all people with ${value}`
      );
      filterCharacters();
    }
  } else {
    if (secret.other.includes(value)) {
      alert(
        `Yes, this persons is a ${value}. We keep all people who are ${value}`
      );
      filterCharacters(true);
    } else {
      alert(
        `No, this persons isn't a ${value}. We remove all people who are ${value}`
      );
      filterCharacters();
    }
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (category === "hair" || category === "eyes") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (character) => character[category] === value
      );
      generateBoard();
    } else {
      charactersInPlay = charactersInPlay.filter(
        (character) => character[category] !== value
      );
      generateBoard();
    }
  } else if (category === "accessories" || category === "other") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((character) =>
        character[category].includes(value)
      );
      generateBoard();
    } else {
      charactersInPlay = charactersInPlay.filter(
        (character) => !character[category].includes(value)
      );
      generateBoard();
    }
  }
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let youSure = confirm(`Are you sure you ant the guess on ${personToConfirm}`);
  if (youSure) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  let timeSpent = timerDisplay.innerHTML;
  restartTimer();
  winOrLoseWrapper.style.display = "block";
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Congratulations. You guessed it. ${personToCheck} is the secret person and it took you ${timeSpent}`;
  } else {
    winOrLoseText.innerHTML = `Nope. ${personToCheck} is not the secret person. You used ${timeSpent} to come up with a guess`;
    secretText.innerHTML = "The secret person is:";
    revealSecretPerson(secret);
  }
  document.getElementById("playAgain").addEventListener("click", start);
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", restart);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
