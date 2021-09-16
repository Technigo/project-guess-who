// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const playAgainButton = document.getElementById("playAgain");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const startGameBtn = document.getElementById("startGameBtn");
const startGame = document.getElementById("startGame");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Alien",
    img: "images/alien.png",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: [],
  },
  {
    name: "Annabelle",
    img: "images/annabelle.png",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Babadook",
    img: "images/babadok.png",
    hair: "grey",
    eyes: "blue",
    accessories: ["hat"],
    other: ["smoker"],
  },
  {
    name: "Chucky",
    img: "images/chucky.png",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Darthvader",
    img: "images/darthvader.png",
    hair: "yellow",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Dracula",
    img: "images/dracula.png",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Franky",
    img: "images/franky.png",
    hair: "black",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Freddy",
    img: "images/freddy.png",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Gollum",
    img: "images/gollum.png",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },

  {
    name: "Halloween",
    img: "images/halloween.png",
    hair: "purple",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["smoker"],
  },
  {
    name: "Hellraiser",
    img: "images/hellraiser.png",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jason",
    img: "images/jason.png",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jaws",
    img: "images/jaws.png",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jigsaw",
    img: "images/jigsaw.png",
    hair: "white",
    eyes: "hidden",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Joker",
    img: "images/joker.png",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Kingkong",
    img: "images/kingkong.png",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Mr. Andersson",
    img: "images/matrix.png",
    hair: "black",
    eyes: "blue",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Penny",
    img: "images/penny.png",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Predator",
    img: "images/predator.png",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Sadako",
    img: "images/sadako.png",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: [],
  },
  {
    name: "Scream",
    img: "images/scream.png",
    hair: "grey",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Shinning",
    img: "images/shining.png",
    hair: "yellow",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "White King",
    img: "images/whiteking.png",
    hair: "black",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Hannibal Lecter",
    img: "images/hannibal.png",
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
      <div class="card border-gradient border-gradient-color">
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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  generateBoard();

  setSecret();
  // What else should happen when we start the game?
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;
  console.log(value);

  currentQuestion = {
    category: category,
    value: value,
  };
  console.log(category);
  console.log(value);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  console.log(currentQuestion);
  let keep;

  // Compare the currentQuestion details with the secret person details in a
  //  different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === "hair") {
    keep = secret.hair === value;
  } else if (category === "eyes") {
    keep = secret.eyes === value;
  } else if (category === "accessories") {
    keep = secret.accessories.includes(value);
  } else if (category === "other") {
    keep = secret.other.includes(value);
  }

  // else {
  //   keep = false
  // }

  filterCharacters(keep);
};
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  console.log(currentQuestion);
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
    // Similar to the one above
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all people that are ${value}`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }

  generateBoard();

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const personToCheck = personToConfirm;
  let guessConfirm = window.confirm(
    `Are you sure ${personToCheck} is the person?`
  );

  if (guessConfirm) {
    checkMyGuess(personToCheck);
  } else {
    alert("Guess canceled! Continue the game.");
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  let toToggleWinOrLose = (msg) => {
    winOrLose.classList.toggle("open");
    winOrLoseText.innerHTML = `${msg}`;
  };

  if (personToCheck === secret.name) {
    toToggleWinOrLose("You Win!");
  } else if (personToCheck !== secret.name) {
    console.log(personToCheck);
    toToggleWinOrLose("You Lose!");
  }
};

// Invokes the start function when website is loaded

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", () => {
  start();
  winOrLose.classList.toggle("open");
});
startGameBtn.addEventListener("click", () => {
  start();
  startGame.classList.toggle("close");
});
