//DOM selectors declared here
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const playAgainButton = document.getElementById("playAgain");
const restartButton = document.getElementById("restartBtn");
const filterButton = document.getElementById("filter");
const guessCounter = document.getElementById("guesses");

//Array with all the characters as objects
const CHARACTERS = [
  {
    name: "Adelaide",
    img: "images/adelaide.png",
    fur: "short",
    color: "bw",
    accessories: ["suit"],
    other: [],
  },
  {
    name: "Biscuit",
    img: "images/Biscuit.png",
    fur: "short",
    color: "dotted",
    accessories: ["hat", "jewlery"],
    other: [],
  },
  {
    name: "Boots",
    img: "images/Boots.png",
    fur: "long",
    color: "white",
    accessories: ["hat", "collar"],
    other: [],
  },
  {
    name: "Churchill",
    img: "images/Churchill.png",
    fur: "short",
    color: "black",
    accessories: ["collar"],
    other: [],
  },
  {
    name: "Dorothy",
    img: "images/Dorothy.png",
    fur: "long",
    color: "white",
    accessories: [],
    other: ["royal"],
  },
  {
    name: "Dutch",
    img: "images/Dutch.png",
    fur: "short",
    color: "white",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Elektra",
    img: "images/Elektra.png",
    fur: "short",
    color: "black",
    accessories: ["jewlery"],
    other: ["royal"],
  },
  {
    name: "Ghost",
    img: "images/Ghost.png",
    fur: "long",
    color: "white",
    accessories: [],
    other: [],
  },
  {
    name: "Hamlet",
    img: "images/Hamlet.png",
    fur: "short",
    color: "bw",
    accessories: ["jewlery"],
    other: ["metalfan"],
  },

  {
    name: "Hero",
    img: "images/Hero.png",
    fur: "short",
    color: "cream",
    accessories: ["suit"],
    other: [],
  },
  {
    name: "Howl",
    img: "images/Howl.png",
    fur: "long",
    color: "tricolor",
    accessories: ["armor"],
    other: [],
  },
  {
    name: "Iggy",
    img: "images/Iggy.png",
    fur: "long",
    color: "cream",
    accessories: [],
    other: ["royal"],
  },
  {
    name: "Java",
    img: "images/Java.png",
    fur: "short",
    color: "dotted",
    accessories: ["collar"],
    other: [],
  },
  {
    name: "Kamala",
    img: "images/Kamala.png",
    fur: "short",
    color: "brown",
    accessories: [],
    other: ["royal"],
  },
  {
    name: "Lucky",
    img: "images/Lucky.png",
    fur: "long",
    color: "bw",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Medusa",
    img: "images/Medusa.png",
    fur: "short",
    color: "dotted",
    accessories: ["suit"],
    other: [],
  },
  {
    name: "Monet",
    img: "images/Monet.png",
    fur: "short",
    color: "black",
    accessories: ["armor"],
    other: [],
  },
  {
    name: "Nessie",
    img: "images/Nessie.png",
    fur: "short",
    color: "black",
    accessories: [],
    other: ["royal"],
  },
  {
    name: "Oates",
    img: "images/Oates.png",
    fur: "short",
    color: "tricolor",
    accessories: ["armor"],
    other: [],
  },
  {
    name: "Pickles",
    img: "images/Pickles.png",
    fur: "short",
    color: "white",
    accessories: [],
    other: ["royal"],
  },
  {
    name: "Pippin",
    img: "images/Pippin.png",
    fur: "short",
    color: "tricolor",
    accessories: ["armor"],
    other: [],
  },
  {
    name: "Platon",
    img: "images/Platon.png",
    fur: "short",
    color: "bw",
    accessories: ["collar"],
    other: ["metalfan"],
  },
  {
    name: "Satin",
    img: "images/Satin.png",
    fur: "short",
    color: "brown",
    accessories: ["jewlery"],
    other: [],
  },
  {
    name: "Ted",
    img: "images/Ted.png",
    fur: "short",
    color: "tricolor",
    accessories: ["hat", "collar"],
    other: [],
  },
  {
    name: "Tofu",
    img: "images/Tofu.png",
    fur: "long",
    color: "tricolor",
    accessories: ["suit"],
    other: [],
  },
  {
    name: "Wrinkle",
    img: "images/Wrinkle.png",
    fur: "long",
    color: "creme",
    accessories: ["armor"],
    other: [],
  },
  {
    name: "Yeti",
    img: "images/Yeti.png",
    fur: "long",
    color: "black",
    accessories: ["hat"],
    other: [],
  },
];

let secret; // will be the secret character
let currentQuestion; // will be the current question object
let charactersInPlay; //will be an array of all characters left in the game
let guesses = 0 //Guess counter

//Generates the board with all the dogs. Starts with reset to clear dogs if filter is applied.
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((dog) => {
    board.innerHTML += `
        <div class="card">
            <p>${dog.name}</p>
            <img src=${dog.img} alt=${dog.name}/>
            <div class="guess">
            <span>Guess on ${dog.name}?</span>
            <button class="filled-button small" onclick="guess('${dog.name}')">Guess</button>
            </div>
        </div>
        `;
  });
};

//Generating secret character
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

//Starting function
const start = () => {
  charactersInPlay = CHARACTERS; //everyone is in play at the beginning
  setSecret(); //Set secret character
  generateBoard(); //Draws the board
  winOrLose.style.display = "none"; //needs to be cleared if someone has restarted
  board.style.display = "flex"; //board needs to be visible if "play again" was clicked
  guessCounter.innerHTML = `0`
};

//Setting the current question in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = { category: category, value: value };
};

//Checking the question values against the secret character
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  if (category === "color" || category === "fur") {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === "accessories" || category === "other") {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
};

//Alerting the user and filtering the characters
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (category === "color" || category === "fur") {
    if (keep) {
      alert(
        `Yes, the dog has ${value} ${category}! Keeping everyone with ${value} ${category}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (dog) => dog[category] === value
      );
    } else {
      alert(
        `No, the dog doesn't have ${value} ${category}! Removing everyone with ${value} ${category}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (dog) => dog[category] !== value
      );
    }
  } else if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the dog is wearing ${value}! Keeping everyone wearing ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((dog) =>
        dog[category].includes(value)
      );
    } else {
      alert(
        `No, the dog doesn't wear ${value}! Removing everyone wearing ${value}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (dog) => !dog[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(`Yes, the dog is a ${value}! Keeping all ${value}s.`);
      charactersInPlay = charactersInPlay.filter((dog) =>
        dog[category].includes(value)
      );
    } else {
      alert(`No, the dog is not a ${value}! Removing all ${value}s.`);
      charactersInPlay = charactersInPlay.filter(
        (dog) => !dog[category].includes(value)
      );
    }
  }
  guesses++ //Adds +1 guesses to the guess counter
  guessCounter.innerHTML = guesses //Shows game counter to player
  generateBoard();
};

//Making a guess
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you sure you want to guess ${suspect}?`);
  if (makeAGuess) {
    checkMyGuess(suspect);
  }
};

//Checks the guess against the secret character's name
const checkMyGuess = (dogToCheck) => {
  if (dogToCheck === secret.name) {
    winOrLoseText.innerHTML = `NICE JOB! You guessed correct! The dog was ${secret.name}.`;
  } else {
    winOrLoseText.innerHTML = `Oh no, your guess was not correct. The dog was ${secret.name}. Game over!`;
  }
  winOrLose.style.display = "flex";
  board.style.display = "none";
};

//First thing that happens when site loads
start();

//Eventlisteners
restartButton.addEventListener("click", start);
playAgainButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener("click", checkQuestion);
