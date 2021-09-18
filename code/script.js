// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const boardWrapper = document.getElementById("board-wrapper");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const playAgainButton = document.getElementById("playAgain");
const winOrLose = document.getElementById("win-or-lose");
const winOrLoseWrapper = document.getElementById("win-or-lose-wrapper");
const winOrLoseText = document.getElementById("win-or-lose-text");
const startGameBtn = document.getElementById("startGameBtn");
const startGame = document.getElementById("startGame");
const gamePlayAudio = document.getElementById("gameplay-audio");
const introAudio = document.getElementById("intro-audio");
const gamePlayAudioBtn = document.getElementById("game-play-audio-btn");

// timer from Stackoverflow
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}
function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//count guess
const countGuess = document.getElementById("tally");
let count = 0;

const countUp = () => {
  count++;
  countGuess.innerHTML = count;
  console.log(count);
};

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Alien",
    img: "images/alien.png",
    hair: "no",
    eyes: "hidden",
    accessories: [],
    weapon: ["acid spit", "sharp-teeth"],
    type: "extraterrestrial",
  },
  {
    name: "Annabelle",
    img: "images/annabelle.png",
    hair: "orange",
    eyes: "blue",
    accessories: ["dress"],
    weapon: ["knife"],
    type: "haunted doll",
  },
  {
    name: "Babadook",
    img: "images/babadok.png",
    hair: "black",
    eyes: "black",
    accessories: ["hat", "long nails", "suit"],
    weapon: [],
    type: "ghost",
  },
  {
    name: "Chucky",
    img: "images/chucky.png",
    hair: "orange",
    eyes: "blue",
    accessories: ["jumper", "overall"],
    weapon: ["knife", "axe"],
    type: "haunted doll",
  },
  {
    name: "Darthvader",
    img: "images/darthvader.png",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["helmet", "mask", "cape"],
    weapon: ["light saber"],
    type: "human",
  },
  {
    name: "Dracula",
    img: "images/dracula.png",
    hair: "black",
    eyes: "black",
    accessories: ["cape"],
    weapon: ["sharp-teeth", "mind-games"],
    type: "supernatural",
  },
  {
    name: "Franky",
    img: "images/franky.png",
    hair: "black",
    eyes: "black",
    accessories: [],
    weapon: [],
    type: "monster",
  },
  {
    name: "Freddy",
    img: "images/freddy.png",
    hair: "no",
    eyes: "green",
    accessories: ["jumper", "hat"],
    weapon: ["razors"],
    type: "monster",
  },
  {
    name: "Gollum",
    img: "images/gollum.png",
    hair: "black",
    eyes: "blue",
    accessories: ["ring"],
    weapon: [],
    type: "monster",
  },

  {
    name: "Mike",
    img: "images/halloween.png",
    hair: "brown",
    eyes: "hidden",
    accessories: ["mask", "bomber jacket"],
    weapon: ["knife"],
    type: "human",
  },
  {
    name: "Pinhead",
    img: "images/hellraiser.png",
    hair: "no",
    eyes: "black",
    accessories: ["pins", "dress"],
    weapon: [],
    type: "demon",
  },
  {
    name: "Jason",
    img: "images/jason.png",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["mask", "bomber jacket"],
    weapon: ["knife", "axe"],
    type: "human",
  },
  {
    name: "Jaws",
    img: "images/jaws.png",
    hair: "no",
    eyes: "black",
    accessories: [],
    weapon: ["sharp-teeth"],
    type: "monster",
  },
  {
    name: "Jigsaw",
    img: "images/jigsaw.png",
    hair: "white",
    eyes: "black",
    accessories: ["bike"],
    weapon: ["mind-games"],
    type: "human",
  },
  {
    name: "Joker",
    img: "images/joker.png",
    hair: "green",
    eyes: "brown",
    accessories: ["mask", "suit"],
    weapon: ["guns"],
    type: "human",
  },
  {
    name: "Kingkong",
    img: "images/kingkong.png",
    hair: "black",
    eyes: "brown",
    accessories: [],
    weapon: ["sharp-teeth", "super-strength"],
    type: "monster",
  },
  {
    name: "Agent Smith",
    img: "images/matrix.png",
    hair: "brown",
    eyes: "hidden",
    accessories: ["glasses", "suit"],
    weapon: ["guns", "super-strength"],
    type: "AI",
  },
  {
    name: "Penny",
    img: "images/penny.png",
    hair: "orange",
    eyes: "brown",
    accessories: ["balloon", "mask"],
    weapon: ["sharp-teeth"],
    type: "monster",
  },
  {
    name: "Predator",
    img: "images/predator.png",
    hair: "no",
    eyes: "brown",
    accessories: ["helmet", "cape"],
    weapon: ["guns", "knife", "blaster"],
    type: "extraterrestrial",
  },
  {
    name: "Sadako",
    img: "images/sadako.png",
    hair: "black",
    eyes: "black",
    accessories: ["dress"],
    weapon: [],
    type: "monster",
  },
  {
    name: "Scream",
    img: "images/scream.png",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["cape", "mask"],
    weapon: ["knife"],
    type: "human",
  },
  {
    name: "Jack",
    img: "images/shining.png",
    hair: "brown",
    eyes: "brown",
    accessories: [],
    weapon: ["axe"],
    type: "human",
  },
  {
    name: "Night King",
    img: "images/whiteking.png",
    hair: "no",
    eyes: "blue",
    accessories: ["armor"],
    weapon: ["sword", "falx"],
    type: "monster",
  },
  {
    name: "Hannibal Lecter",
    img: "images/hannibal.png",
    hair: "brown",
    eyes: "brown",
    accessories: ["mask", "suit"],
    weapon: ["mind-games"],
    type: "human",
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let charactersNotInPlay;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card border-gradient border-gradient-color kept">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="guess-btn" onclick="guess('${person.name}'); playGameAudio();">Guess</button>
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
  charactersNotInPlay = "";
  generateBoard();
  setSecret();
  playGameAudio();
  totalSeconds = 0;
  valString = "";
  secondsLabel.innerHTML = "";
  minutesLabel.innerHTML = "";
  countGuess.innerHTML = "0";

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
  } else if (category === "type") {
    keep = secret.type === value;
  } else if (category === "accessories") {
    keep = secret.accessories.includes(value);
  } else if (category === "weapon") {
    keep = secret.weapon.includes(value);
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

  const keepCharStr = () => {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[category] === value
    );

    console.log(charactersInPlay);
  };

  const removeCharStr = () => {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[category] !== value
    );
    console.log(charactersInPlay);
  };

  const removeCharArray = () => {
    charactersInPlay = charactersInPlay.filter(
      (person) => !person[category].includes(value)
    );
    console.log(charactersInPlay);
  };

  const keepCharArray = () => {
    charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value)
    );
    console.log(charactersInPlay);
  };

  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears a/an ${value}! Keep all people that wears a/an ${value}`
      );

      keepCharArray();
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );

      removeCharArray();
    }
  } else if (category === "weapon") {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person likes to use ${value}! Keep all people that likes to use ${value}`
      );

      keepCharArray();
    } else {
      alert(
        `No, the person is not likes to use ${value}! Remove all people that likes to use ${value}`
      );

      removeCharArray();
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`
      );

      keepCharStr();
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`
      );

      removeCharStr();
    }
  }

  charactersNotInPlay = charactersInPlay.filter(
    (person) => person[category] === value
  );

  generateBoard();

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  // Invoke a function to redraw the board with the remaining people.
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const personToCheck = personToConfirm;
  let guessConfirm = window.confirm(
    `Are you sure ${personToCheck} is the villain?`
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
    boardWrapper.style.display = "none";
    toToggleWinOrLose(
      `You win! The villain is ${secret.name} <br>
      <img style="height:20rem;" src=${secret.img} alt=${secret.name}>`
    );
    winAudio.play();
  } else if (personToCheck !== secret.name) {
    boardWrapper.style.display = "none";
    toToggleWinOrLose(`You lose! The villain is ${secret.name}
    <br>
      <img class="win-or-lose-villain-img" src=${secret.img} alt=${secret.name}>`);
    loseAudio.play();
  }
};

// audio controls
var winAudio = new Audio("sound/scream.wav");
var loseAudio = new Audio("sound/evil.wav");

winAudio.volume = 0.2;
loseAudio.volume = 0.2;
introAudio.volume = 0.5;
gamePlayAudio.volume = 0.2;

const toggleAudioBtnText = () => {
  if (gamePlayAudioBtn.innerHTML === "Sound Off 🔈") {
    gamePlayAudioBtn.innerHTML = "Sound On 🔊";
  } else {
    gamePlayAudioBtn.innerHTML = "Sound Off 🔈";
  }
};

const playGameAudio = () => {
  if (gamePlayAudio.paused) {
    gamePlayAudio.play();
  } else {
    gamePlayAudio.pause();
  }
};

const stopIntroAudio = () => {
  introAudio.pause();
};

// All the event listeners
restartButton.addEventListener("click", () => {
  start;
  gamePlayAudio.currentTime = 0;
});
questions.addEventListener("change", selectQuestion);

findOutButton.addEventListener("click", () => {
  checkQuestion();
  countUp();
});

playAgainButton.addEventListener("click", () => {
  boardWrapper.style.display = "block";
  start();
  winOrLose.classList.toggle("open");
  gamePlayAudio.currentTime = 0;
  winAudio.currentTime = 0;
  loseAudio.currentTime = 0;
  gamePlayAudio.play();
  winAudio.pause();
  loseAudio.pause();
});
startGameBtn.addEventListener("click", () => {
  start();
  startGame.classList.toggle("close");
  stopIntroAudio();
});
gamePlayAudioBtn.addEventListener("click", () => {
  toggleAudioBtnText();
  playGameAudio();
});
