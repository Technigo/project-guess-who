// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const playAgainButton = document.getElementById("playAgain");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");

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
};

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  selectQuestion();
  // What else should happen when we start the game?
  // Here maybe add some music or something----?
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  const { name, img, hair, eyes, accessories, other } = secret;

  // Below we run the if statement to compare the entered value to the secret value
  if (category === "hair" || category === "eyes") {
  } else if (category === "accessories" || category === "other") {
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
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
    if (keep) {
      alert(
        `Yes, that person is ${value}. Byebye all people who aren't ${value}!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `Noooope, ${value} is not correct! Byebye all people who are ${value}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "hair") {
    if (keep) {
      alert(
        `How did you know!?! That person has ${value} hair. Lets keep 'em ${value}haired!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, wrong! ${value} is not correct, toss all the ${value}haired people!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "eyes") {
    if (keep) {
      alert(
        `Yes, our secret person does have ${value} eyes. So long to all the other ones!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `Wrong! Our secret person does not have ${value} eyes. Say godbye to all people with ${value} eyes!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  guessedPerson = confirm(`Are you sure you want to guess ${personToConfirm}?`);
  if (guessedPerson) {
    // If the player wants to guess, invoke the checkMyGuess function.
    checkMyGuess(personToConfirm);
  } else {
    alert("Ok, go back at it!");
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  const { name } = secret;
  board.style.display = "none";
  winOrLose.style.display = "flex";
  if (personToCheck === name) {
    winOrLoseText.innerText = `Amazeballs, that's correct! Do it again!`;
  } else {
    guess !== secret;
    winOrLoseText.innerText = `Noooo, that's wrong! Do it again!`;
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
findOutButton.addEventListener("click", checkQuestion);
questions.addEventListener("change", selectQuestion);
playAgainBtn.addEventListener("click", () => {
  winOrLose.style.display = "none";
  board.style.display = "flex";
  start();
});
