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
    name: "Doge",
    img: "images-2/doge.png",
    creature: "dog",
    hair: "fur",
    eyes: "black",
    expression: ["serious"],
    background: [],
  },
  {
    name: "Boris",
    img: "images-2/boris-throws.png",
    creature: "hooman",
    hair: "white",
    eyes: "blue",
    expression: ["angry"],
    background: ["kitten"],
  },
  {
    name: "Side Eye Chloe",
    img: "images-2/side-eye-chloe.png",
    creature: "hooman",
    hair: "blonde",
    eyes: "blue",
    expression: ["grimace"],
    background: [],
  },
  {
    name: "Trex",
    img: "images-2/trex.png",
    creature: "cartoon",
    hair: "bold",
    eyes: "black",
    expression: ["serious"],
    background: [],
  },
  {
    name: "Blinking Guy",
    img: "images-2/blinking-guy.png",
    creature: "hooman",
    hair: "red",
    eyes: "hidden",
    expression: ["awkward"],
    background: [],
  },
  {
    name: "Success Kid",
    img: "images-2/success-kid.png",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: ["serious"],
    background: ["beach"],
  },
  {
    name: "Grumpy Cat",
    img: "images-2/grumpy-cat.png",
    creature: "cat",
    hair: "grey",
    eyes: "blue",
    expression: ["angry"],
    background: [],
  },
  {
    name: "Distracted Boyfriend",
    img: "images-2/distracted-boyfriend.png",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: ["grimace"],
    background: ["women"],
  },
  {
    name: "Dark Kermit",
    img: "images-2/dark-kermit.png",
    creature: "puppet",
    hair: "green",
    eyes: "hidden",
    expression: ["serious"],
    background: [],
  },
  {
    name: "Disaster Girl",
    img: "images-2/disaster-girl.png",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: ["smile"],
    background: ["house"],
  },
  {
    name: "Ricardo",
    img: "images-2/ricardo.png",
    creature: "hooman",
    hair: "hidden",
    eyes: "blue",
    expression: ["smile"],
    background: [],
  },
  {
    name: "Dog Gets Attention",
    img: "images-2/dog-gets-attention.png",
    creature: "dog",
    hair: "grey",
    eyes: "blue",
    expression: ["smile"],
    background: ["crown"],
  },
  {
    name: "Hide the Pain Harold",
    img: "images-2/hide-the-pain-harold.jpeg",
    creature: "hooman",
    hair: "white",
    eyes: "blue",
    expression: ["smile"],
    background: [],
  },
  {
    name: "Scumbag Steve",
    img: "images-2/scumbag-steve.png",
    creature: "hooman",
    hair: "hidden",
    eyes: "brown",
    expression: ["serious"],
    background: [],
  },
  {
    name: "Side Eye Monkey",
    img: "images-2/side-eye-monkey.png",
    creature: "puppet",
    hair: "red",
    eyes: "black",
    expression: ["awkward"],
    background: [],
  },
  {
    name: "Woman Yelling",
    img: "images-2/woman-yelling-at-cat.png",
    creature: "hooman",
    hair: "blonde",
    eyes: "blue",
    expression: ["angry"],
    background: ["women"],
  },
  {
    name: "Dark Kermit",
    img: "images-2/dark-kermit.png",
    creature: "puppet",
    hair: "green",
    eyes: "black",
    expression: ["serious"],
    background: ["tea"],
  },
  {
    name: "Liam Neeson",
    img: "images-2/liam-neeson.jpeg",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: ["serious"],
    background: ["phone"],
  },
  {
    name: "Cat Being Yelled At",
    img: "images-2/cat-being-yelled-at.png",
    creature: "cat",
    hair: "white",
    eyes: "blue",
    expression: ["grimace"],
    background: ["salad"],
  },
  {
    name: "Bad Luck Brian",
    img: "images-2/bad-luck-brian.jpeg",
    creature: "hooman",
    hair: "red",
    eyes: "blue",
    expression: ["smile"],
    background: [],
  },
  {
    name: "Eyebrows Dog",
    img: "images-2/eyebrows-dog.jpeg",
    creature: "dog",
    hair: "white",
    eyes: "black",
    expression: ["smile"],
    background: [],
  },
  {
    name: "Stonks Guy",
    img: "images-2/stonks-guy.png",
    creature: "cartoon",
    hair: "bold",
    eyes: "blue",
    expression: ["serious"],
    background: [],
  },
  {
    name: "Overly Attached Ex",
    img: "images-2/overly-attached-ex.png",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: ["smile"],
    background: [],
  },
  {
    name: "Tuxedo Winnie",
    img: "images-2/tuxedo-winnie.png",
    creature: "cartoon",
    hair: "bold",
    eyes: "black",
    expression: ["smile"],
    background: [],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let guessCount = 0;

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
  guessCount = 0;
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

  // Below we run the if statement to compare the entered value to the secret value
  if (
    category === "hair" ||
    category === "eyes" ||
    category === "creature" ||
    category === "expression"
  ) {
    if (
      value === secret.hair ||
      value === secret.eyes ||
      value === secret.creature ||
      value === secret.expression
    ) {
      filterCharacters(true);
      s;
    } else {
      filterCharacters(false);
    }
  } else if (category === "background") {
    if (secret.expression.includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
  // if (category === "hair" || category === "eyes") {
  //   if (value === hair || value === eyes) {
  //     filterCharacters(true);
  //   } else {
  //     filterCharacters(false);
  //   }
  // } else if (category === "creature") {
  //   if (secret.creature.includes(value)) {
  //     filterCharacters(true);
  //   } else {
  //     filterCharacters(false);
  //   }
  // } else if (category === "gender") {
  //   if (secret.gender.includes(value)) {
  //     filterCharacters(true);
  //   } else {
  //     filterCharacters(false);
  //   }
  // } else if (category === "expression") {
  //   if (secret.expression.includes(value)) {
  //     filterCharacters(true);
  //   } else {
  //     filterCharacters(false);
  //   }
  // } else if (category === "background") {
  //   if (secret.background.includes(value)) {
  //     filterCharacters(true);
  //   } else {
  //     filterCharacters(false);
  //   }
  // }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "hair") {
    if (keep) {
      alert(
        `Yes, the meme persona has ${value} hair! Keep only meme personas that have ${value} hair!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `Ooopsie! Sorry, the meme persona doesn't have ${value} hari! Remove all meme personas that have ${value} hair!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "eyes") {
    if (keep) {
      alert(
        `Niceeee! The meme persona has ${value} eyes. Let's remove all that don't!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `Yikes! No, the meme persona doesn't have ${value} eyes! Let's remove all that do!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "creature") {
    if (keep) {
      alert(
        `Nice guess! We are dealing with a ${value} here. Keep all ${value}s!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `Close but not quite, ${value} is incorrect, all ${value}s must go!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "expression") {
    if (keep) {
      alert(`Yesh! Our meme persona is ${value}. Keep all ${value} faces!`);
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `Nah, our meme persona is not ${value}, remove all ${value} faces!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "background") {
    if (keep) {
      alert(
        `Spot on, you can see ${value} in the background. This should make it easy!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(`No ${value} co-star for this meme persona! Let's remove it!`);
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
    winOrLoseText.innerText = `WOWWWWWWZA! Yes it was ${name}! Congrats! `;
  } else {
    guess !== secret;
    winOrLoseText.innerText = `WRONG! Better luck next time!`;
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
findOutButton.addEventListener("click", checkQuestion);
questions.addEventListener("change", selectQuestion);
playAgainButton.addEventListener("click", () => {
  winOrLose.style.display = "none";
  board.style.display = "flex";
  start();
});
