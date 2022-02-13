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
    expression: "serious",
    background: [],
  },
  {
    name: "Boris",
    img: "images-2/boris-throws.png",
    creature: "hooman",
    hair: "white",
    eyes: "blue",
    expression: "angry",
    background: "kitten",
  },
  {
    name: "Side Eye Chloe",
    img: "images-2/side-eye-chloe.png",
    creature: "hooman",
    hair: "blonde",
    eyes: "blue",
    expression: "grimacing",
    background: [],
  },
  {
    name: "Trex",
    img: "images-2/trex.png",
    creature: "cartoon",
    hair: "bold",
    eyes: "black",
    expression: "serious",
    background: [],
  },
  {
    name: "Blinking Guy",
    img: "images-2/blinking-guy.png",
    creature: "hooman",
    hair: "red",
    eyes: "hidden",
    expression: "awkward",
    background: [],
  },
  {
    name: "Success Kid",
    img: "images-2/success-kid.png",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: "serious",
    background: "beach",
  },
  {
    name: "Grumpy Cat",
    img: "images-2/grumpy-cat.png",
    creature: "cat",
    hair: "grey",
    eyes: "blue",
    expression: "angry",
    background: [],
  },
  {
    name: "Distracted Boyfriend",
    img: "images-2/distracted-boyfriend.png",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: "grimacing",
    background: "women",
  },
  {
    name: "Dark Kermit",
    img: "images-2/dark-kermit.png",
    creature: "puppet",
    hair: "green",
    eyes: "hidden",
    expression: "serious",
    background: [],
  },
  {
    name: "Disaster Girl",
    img: "images-2/disaster-girl.png",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: "smiling",
    background: "house",
  },
  {
    name: "Ricardo",
    img: "images-2/ricardo.png",
    creature: "hooman",
    hair: "hidden",
    eyes: "blue",
    expression: "smiling",
    background: [],
  },
  {
    name: "Dog Gets Attention",
    img: "images-2/dog-gets-attention.png",
    creature: "dog",
    hair: "grey",
    eyes: "blue",
    expression: "smiling",
    background: "crown",
  },
  {
    name: "Hide the Pain Harold",
    img: "images-2/hide-the-pain-harold.jpeg",
    creature: "hooman",
    hair: "white",
    eyes: "blue",
    expression: "smiling",
    background: [],
  },
  {
    name: "Scumbag Steve",
    img: "images-2/scumbag-steve.png",
    creature: "hooman",
    hair: "hidden",
    eyes: "brown",
    expression: "serious",
    background: [],
  },
  {
    name: "Side Eye Monkey",
    img: "images-2/side-eye-monkey.png",
    creature: "puppet",
    hair: "red",
    eyes: "black",
    expression: "awkward",
    background: [],
  },
  {
    name: "Woman Yelling",
    img: "images-2/woman-yelling-at-cat.png",
    creature: "hooman",
    hair: "blonde",
    eyes: "blue",
    expression: "angry",
    background: "women",
  },
  {
    name: "Tea Kermit",
    img: "images-2/tea-kermit.png",
    creature: "puppet",
    hair: "green",
    eyes: "black",
    expression: "serious",
    background: "tea",
  },
  {
    name: "Liam Neeson",
    img: "images-2/liam-neeson.jpeg",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: "serious",
    background: "phone",
  },
  {
    name: "Cat Being Yelled At",
    img: "images-2/cat-being-yelled-at.png",
    creature: "cat",
    hair: "white",
    eyes: "blue",
    expression: "grimacing",
    background: "salad",
  },
  {
    name: "Bad Luck Brian",
    img: "images-2/bad-luck-brian.jpeg",
    creature: "hooman",
    hair: "red",
    eyes: "blue",
    expression: "smiling",
    background: [],
  },
  {
    name: "Eyebrows Dog",
    img: "images-2/eyebrows-dog.jpeg",
    creature: "dog",
    hair: "white",
    eyes: "black",
    expression: "smiling",
    background: [],
  },
  {
    name: "Stonks Guy",
    img: "images-2/stonks-guy.png",
    creature: "cartoon",
    hair: "bold",
    eyes: "blue",
    expression: "serious",
    background: [],
  },
  {
    name: "Overly Attached Ex",
    img: "images-2/overly-attached-ex.png",
    creature: "hooman",
    hair: "brown",
    eyes: "blue",
    expression: "smiling",
    background: [],
  },
  {
    name: "Tuxedo Winnie",
    img: "images-2/tuxedo-winnie.png",
    creature: "cartoon",
    hair: "bold",
    eyes: "black",
    expression: "smiling",
    background: [],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let timerInterval;
let startSound = new Audio("sounds/start-sound.mp3");
let loseSound = new Audio("sounds/lose-sound.mp3");
let winSound = new Audio("sounds/win-sound.mp3");
let alertSound = new Audio("sounds/alert-sound.mp3");

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
  startSound.play();
  startTimer();

  // Resets the selected element to the placeholder value
  questions.selectedIndex = 0;
};

// Game timer
const startTimer = () => {
  clearInterval(timerInterval);

  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  timerInterval = setInterval(() => {
    timer.innerHTML =
      "⌛ Your time: " +
      (hours ? hours + ":" : "") +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);
    seconds++;

    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }

    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
  }, 1000);
};

// Setting the currentQuestion object when you select something in the dropdown
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
    if (secret.background.includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
};

// This function filters the characters based on the selected value.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "hair") {
    if (keep) {
      Swal.fire(
        `Yes, the meme persona has ${value} hair! Keep only meme personas that have ${value} hair!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alertSound.play();
    } else {
      Swal.fire(
        `Ooopsie! Sorry, the meme persona doesn't have ${value} hair! Remove all meme personas that have ${value} hair!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alertSound.play();
    }
  } else if (category === "eyes") {
    if (keep) {
      Swal.fire(
        `Niceeee! The meme persona has ${value} eyes. Let's remove all that don't!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alertSound.play();
    } else {
      Swal.fire(
        `Yikes! No, the meme persona doesn't have ${value} eyes! Let's remove all that do!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alertSound.play();
    }
  } else if (category === "creature") {
    if (keep) {
      Swal.fire(
        `Nice guess! We are dealing with a ${value} here. Keep all ${value}s!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alertSound.play();
    } else {
      Swal.fire(
        `Close but not quite, ${value} is incorrect, all ${value}s must go!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alertSound.play();
    }
  } else if (category === "expression") {
    if (keep) {
      Swal.fire(`Yesh! Our meme persona is ${value}. Keep all ${value} faces!`);
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alertSound.play();
    } else {
      Swal.fire(
        `Nah, our meme persona is not ${value}, remove all ${value} faces!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alertSound.play();
    }
  } else if (category === "background") {
    if (keep) {
      Swal.fire(
        `Spot on, you can see ${value} in the background. This should make it easy!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alertSound.play();
    } else {
      Swal.fire(`No ${value} co-star for this meme persona! Let's remove it!`);
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alertSound.play();
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let letGuess = Swal.fire({
    title: "Are you sure?",
    text: `Do you want to guess on ${personToConfirm}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "var(--secondary)",
    cancelButtonColor: "var(--primary)",
    confirmButtonText: "Yes!",
  }).then((result) => {
    if (result.isConfirmed) {
      checkMyGuess(personToConfirm);
    }
  });
  alertSound.play();
};

// If player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  const { name } = secret;
  board.style.display = "none";
  winOrLose.style.display = "flex";
  if (personToCheck === name) {
    winOrLoseText.innerText = `WOWWWWWWZA! Yes it was ${name}! Congrats! `;
    winSound.play();
  } else {
    guess !== secret;
    winOrLoseText.innerText = `WRONG! The secret person was ${secret.name}. Better luck next time!`;
    loseSound.play();
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
  // Here I stop the wining / losing sound when player presses "Play Again"
  loseSound.pause();
  winSound.pause();
  start();
});
