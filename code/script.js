// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const winOrLoseSection = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["glasses", "hat", "sunglasses"],
    other: ["female"]
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: ["beard", "male"]
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    accessories: ["hat"],
    other: ["smoker", "beard", "male"]
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: ["male"]
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hair: "yellow",
    eyes: "green",
    accessories: ["glasses"],
    other: ["male"]
  },
  {
    name: "James",
    img: "images/james.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses", "sunglasses"],
    other: ["male"]
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    accessories: ["glasses", "sunglasses"],
    other: ["female"]
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["female"]
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: ["female"]
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    accessories: ["glasses", "sunglasses"],
    other: ["smoker", "female"]
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses", "hat"],
    other: ["smoker", "male"]
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: ["female"]
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "hat"],
    other: ["smoker", "beard", "male"]
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    accessories: ["hat"],
    other: ["female"]
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: ["female"]
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: ["male"]
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hair: "black",
    eyes: "blue",
    accessories: ["glasses"],
    other: ["female"]
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses"],
    other: ["female"]
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: ["male"]
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses", "hat", "sunglasses"],
    other: ["male"]
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    accessories: [],
    other: ["female"]
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hair: "yellow",
    eyes: "green",
    accessories: [],
    other: ["male"]
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hair: "black",
    eyes: "green",
    accessories: [],
    other: ["beard", "male"]
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses", "hat"],
    other: ["female"]
  }
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;

let winAudio = new Audio("https://mingosounds.com/wp-content/uploads/2021/01/inspector_gadget.mp3");
let loseAudio = new Audio("https://vgmsite.com/soundtracks/inspector-gadget-snes/qidhguiyzn/17%20Game%20Over.mp3");

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
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // What else should happen when we start the game?
  generateBoard();
  setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value
  };
};

// Checks if the secret character has the chosen characteristic
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  console.log(currentQuestion);
  let keep = false;
  // checks if the values are the same but in a different way depending on whether the object value is a string or array
  if (typeof secret[category] === "string") {
    keep = secret[category] === value;
  } else if (Array.isArray(secret[category])) {
    keep = secret[category].includes(value);
  } else {
    console.log("a problem occured");
  }
  alertUserOfAnswer(keep);
  filterCharacters(keep);
};

const alertUserOfAnswer = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (keep) {
    alert(`Yes, the person has ${value} in the category ${category}! Keep all the people with ${value} in ${category}`);
  } else {
    alert(`No, the person doesn't have ${value} in the category ${category}! Remove all people with ${value} in category ${category}`);
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (Array.isArray(secret[category])) {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let personToCheck = personToConfirm;
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let userConfirmed = window.confirm(`Do you want to guess ${personToConfirm}?`);
  // If the player wants to guess, invoke the checkMyGuess function.
  if (userConfirmed) {
    checkMyGuess(personToCheck);
  } else {
    alert("Guess cancelled");
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // const guessedCorrectly = (secret.name === personToCheck); open line
  // 1. Check if the personToCheck is the same as the secret person's name
  if (secret.name === personToCheck) {
    // 2. Set a Message to show in the win or lose section accordingly
    winOrLoseSection.style.display = "block";
    board.style.display = "none";
    winAudio.play();
    winOrLoseText.innerHTML = "Congratulations 🙌 inspector!!! you identified the secret person!";
  } else {
    winOrLoseSection.style.display = "block";
    board.style.display = "none";
    loseAudio.play();
    winOrLoseText.innerHTML = "Sorry 🙁 inspector this is not the secret person, try again";
  }
};
// 3. Show the win or lose section

const playAgain = () => {
  winOrLoseSection.style.display = "none";
  board.style.display = "flex";

  location.reload();
};

// Invokes the start function when website is loaded
//

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", playAgain);
winOrLoseSection.classList.toggle("display");

start();
