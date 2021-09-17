// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filter = document.getElementById("filter");
const playAgainButton = document.getElementById("playAgain");

// Array with all the characters, as objects
const CHARACTERS = [
  // write in caps lock when it should NOT be changed
  {
    name: "Marshall",
    img: "images/Marshall.jpg",
    hair: "brown",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Michael",
    img: "images/MichaelScott.png",
    hair: "black",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Leslie",
    img: "images/lesliejpg.jpg",
    hair: "yellow",
    eyes: "blue",
    accessories: [],
    other: [],
  },
  {
    name: "Phil",
    img: "images/phil.jpg",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Johnny",
    img: "images/johnny.jpg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Ron",
    img: "images/ron.png",
    hair: "brown",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Cameron",
    img: "images/cameron.jpg",
    hair: "brown",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Mitchell",
    img: "images/mitchell.png",
    hair: "orange",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Ron",
    img: "images/ron.jpg",
    hair: "orange",
    eyes: "green",
    accessories: ["wand"],
    other: [],
  },

  {
    name: "Robin",
    img: "images/robin.jpg",
    hair: "brown",
    eyes: "brown",
    accessories: [],
    other: ["smoker"],
  },
  {
    name: "Barney",
    img: "images/barney.jpg",
    hair: "yellow",
    eyes: "blue",
    accessories: [],
    other: [],
  },
  {
    name: "Frankie",
    img: "images/frankie.jpg",
    hair: "grey",
    eyes: "green",
    accessories: [],
    other: ["smoker"],
  },
  {
    name: "Lois",
    img: "images/lois.png",
    hair: "orange",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Rick",
    img: "images/rick.png",
    hair: "grey",
    eyes: "black",
    accessories: [],
    other: [],
  },
  {
    name: "Marge",
    img: "images/marge.jpg",
    hair: "blue",
    eyes: "black",
    accessories: ["necklace"],
    other: [],
  },
  {
    name: "Smithers",
    img: "images/smith.jpg",
    hair: "brown",
    eyes: "brown",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Poussey",
    img: "images/poussey.jpg",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Cindy",
    img: "images/cindy.png",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Dumbledore",
    img: "images/dumbledore.jpg",
    hair: "grey",
    eyes: "green",
    accessories: ["glasses", "wand", "hat"],
    other: [],
  },
  {
    name: "Harry",
    img: "images/harry.png",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["smoker"],
  },
  {
    name: "Snoop",
    img: "images/snoop.jpg",
    hair: "grey",
    eyes: "hidden",
    accessories: ["hat", "glasses"],
    other: ["smoker"],
  },
  {
    name: "Elliot",
    img: "images/thumbnail_20210826_114509.jpg",
    hair: "gray",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Lily",
    img: "images/lily.jpg",
    hair: "orange",
    eyes: "green",
    accessories: [],
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
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  const value = questions.value;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.      invoke to see if we get wrong or right answer
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // const secretValue = secret[currentQuestion.category];

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
};

// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
// See if we should keep or remove people based on that
// Then invoke filterCharacters

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
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
  } else if (category === "other") {
    if (keep) {
      alert("Yes, the person smokes, keep all the smokers");
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(`No, the person doesn't smoke. Remove all the smokers`);
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "eyes") {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes. Keep all the people who has ${value} eyes`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes. Remove all the people that doesn't have ${value} eyes`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "hair") {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair. Keep all the people with ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair. Remove all the people with ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }

  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const characterResult = confirm(`Are you sure this is your choice?`);

  if (characterResult) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Woho, ${personToCheck} is correct! 🌟`;
  } else {
    winOrLoseText.innerHTML = `Nooo, ${personToCheck} is not correct! 👎`;
  }
  winOrLose.style.display = "flex";
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
filter.addEventListener("click", checkQuestion);
questions.addEventListener("change", selectQuestion);
playAgainButton.addEventListener("click", () => {
  start();
  winOrLose.style.display = "none";
});
