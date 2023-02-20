//DOM selectors declared here
const board = document.getElementById("board");
const dropdown = document.getElementById("dropdown");
const playAgainButton = document.getElementById("playAgain");
const restartButton = document.getElementById("restartBtn");
const filterButton = document.getElementById("filter");
const questionCounter = document.getElementById("questions-left");

//Array with all the characters as objects
const CHARACTERS = [
  {
    name: "Biscuit",
    img: "images/Biscuit.png",
    color: "dotted",
    job: "designer",
    accessories: ["hat", "jewelry"],
    other: [],
  },
  {
    name: "Boots",
    img: "images/Boots.png",
    color: "white",
    job: "slacker",
    accessories: ["jewelry"],
    other: ["royal"],
  },
  {
    name: "Churchill",
    img: "images/Churchill.png",
    color: "black",
    job: "professor",
    accessories: ["collar", "glasses"],
    other: [],
  },
  {
    name: "Dorothy",
    img: "images/Dorothy.png",
    color: "brown",
    job: "bartender",
    accessories: ["hat", "collar"],
    other: [],
  },
  {
    name: "Dutch",
    img: "images/Dutch.png",
    color: "white",
    job: "mooch",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Elektra",
    img: "images/Elektra.png",
    color: "black",
    job: "mooch",
    accessories: ["jewelry"],
    other: ["royal"],
  },
  {
    name: "Gerald",
    img: "images/Gerald.png",
    color: "brown",
    job: "designer",
    accessories: ["hat", "glasses"],
    other: [],
  },
  {
    name: "Hamlet",
    img: "images/Hamlet.png",
    color: "black",
    job: "professor",
    accessories: ["jewelry"],
    other: ["metalfan"],
  },

  {
    name: "Hero",
    img: "images/Hero.png",
    color: "white",
    job: "lawyer",
    accessories: ["suit"],
    other: [],
  },
  {
    name: "Howl",
    img: "images/Howl.png",
    color: "tricolor",
    job: "knight",
    accessories: ["armor"],
    other: [],
  },
  {
    name: "Iggy",
    img: "images/Iggy.png",
    color: "brown",
    job: "mooch",
    accessories: ["jewelry"],
    other: ["royal"],
  },
  {
    name: "Java",
    img: "images/Java.png",
    color: "dotted",
    job: "cowboy",
    accessories: ["collar", "hat"],
    other: [],
  },
  {
    name: "Kamala",
    img: "images/Kamala.png",
    color: "brown",
    job: "mooch",
    accessories: ["jewelry"],
    other: ["royal"],
  },
  {
    name: "Lucky",
    img: "images/Lucky.png",
    color: "brown",
    job: "cowboy",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Medusa",
    img: "images/Medusa.png",
    color: "brown",
    job: "lawyer",
    accessories: ["jewelry"],
    other: ["metalfan"],
  },
  {
    name: "Monet",
    img: "images/Monet.png",
    color: "dotted",
    job: "mooch",
    accessories: ["jewelry"],
    other: ["royal"],
  },
  {
    name: "Nessie",
    img: "images/Nessie.png",
    color: "brown",
    job: "mooch",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Oates",
    img: "images/Oates.png",
    color: "white",
    job: "bartender",
    accessories: ["hat", "glasses"],
    other: [],
  },
  {
    name: "Pippin",
    img: "images/Pippin.png",
    color: "brown",
    job: "knight",
    accessories: ["armor"],
    other: [],
  },
  {
    name: "Platon",
    img: "images/Platon.png",
    color: "black",
    job: "designer",
    accessories: ["collar"],
    other: ["metalfan"],
  },
  {
    name: "Satin",
    img: "images/Satin.png",
    color: "brown",
    job: "designer",
    accessories: ["jewelry"],
    other: [],
  },
  {
    name: "Ted",
    img: "images/Ted.png",
    color: "tricolor",
    job: "mooch",
    accessories: ["hat", "collar"],
    other: [],
  },
  {
    name: "Tofu",
    img: "images/Tofu.png",
    color: "tricolor",
    job: "lawyer",
    accessories: ["suit"],
    other: [],
  },
  {
    name: "Wendy",
    img: "images/Wendy.png",
    color: "black",
    job: "mooch",
    accessories: ["jewelry"],
    other: ["royal"],
  },
  {
    name: "Yeti",
    img: "images/Yeti.png",
    color: "black",
    job: "designer",
    accessories: ["hat", "glasses"],
    other: [],
  },
];

let secret; // will be the secret character
let currentQuestion; // will be the current question object
let charactersInPlay; //will be an array of all characters left in the game
let questions; //Question counter

//Generates the board with all the dogs. Starts with reset to clear dogs if filter is applied.
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((dog) => {
    board.innerHTML += `
        <div class="card">
            <img src=${dog.img} alt=${dog.name}/>
            <div class="guess">
            <span>Guess on ${dog.name}?</span>
            <button class="filled-button small" onclick="guess('${dog.name}')">Guess</button>
            </div>
            <p>${dog.name}</p>
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
  questions = 5; //Number of guesses at start
  questionCounter.innerHTML = `5`; //Number of guesses shown to player
};

//Setting the current question in the dropdown
const selectQuestion = () => {
  const category = dropdown.options[dropdown.selectedIndex].parentNode.label;
  const value = dropdown.options[dropdown.selectedIndex].value;
  currentQuestion = { category: category, value: value };
};

//Checking the question values against the secret character
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  if (category === "color" || category === "job") {
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
  if (category === "color") {
    if (keep) {
      alert(
        `Yes, the dog has ${value} fur! Keeping everyone with ${value} fur.`
      );
      charactersInPlay = charactersInPlay.filter(
        (dog) => dog[category] === value
      );
    } else {
      alert(
        `No, the dog doesn't have ${value} fur! Removing everyone with ${value} fur.`
      );
      charactersInPlay = charactersInPlay.filter(
        (dog) => dog[category] !== value
      );
    }
  } else if (category === "job") {
    if (keep) {
      alert(`Yes, the dog works as a ${value}! Keeping all ${value}s.`);
      charactersInPlay = charactersInPlay.filter(
        (dog) => dog[category] === value
      );
    } else {
      alert(`No, the dog doesn't work as a ${value}! Removing all ${value}s.`);
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
  questions--; //Removes 1 guess from the guess counter
  questionCounter.innerHTML = questions; //Shows game counter to player
  generateBoard();
  dropdown.selectedIndex = null; //Clears the dropdown from previously chosen values

  if (questions <= 0) {
    //alerts the user that it's time to make their guess, lets them make a final guess
    alert(`Time to make a guess!`);
  } else if (questions <= -1) {
    //alerts user that they've run out of questions
    winOrLoseText.innerHTML = `You've run out of questions!`;
    winOrLose.style.display = "flex";
    board.style.display = "none";
  }
};

//Making a guess
const guess = (theory) => {
  const makeAGuess = confirm(`Are you sure you want to guess ${theory}?`);
  if (makeAGuess) {
    checkMyGuess(theory);
  }
};

//Checks the guess against the secret character's name
const checkMyGuess = (dogToCheck) => {
  if (dogToCheck === secret.name) {
    winOrLoseText.innerHTML = `NICE JOB! Your guess was correct! The secret dog was the ${secret.job} ${secret.name}!`;
  } else {
    winOrLoseText.innerHTML = `Oh no, your guess was not correct. The secret dog was the ${secret.job} ${secret.name}. Game over!`;
  }
  winOrLose.style.display = "flex";
  board.style.display = "none";
};

//First thing that happens when site loads
start();

//Eventlisteners
restartButton.addEventListener("click", start);
playAgainButton.addEventListener("click", start);
dropdown.addEventListener("change", selectQuestion);
filterButton.addEventListener("click", checkQuestion);
