// All the DOM selectors stored as short variables:
const board = document.getElementById("board");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const restartButton = document.getElementById("restart");
const playAgainButton = document.getElementById("playAgain");
const filterButton = document.getElementById("filter");
const questions = document.getElementById("questions");

// All the characters as objects:
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

// Global variables necessary for the game:
let secret; //The secret person object
let currentQuestion; //The current question, i.e. "Does the person have [characteristic]?"
let charactersInPlay; //The characters left in the game at the current time of playing
const applauseAudio = new Audio("applause.wav");

/*This function builds the game board so that every character that's 
still in the game is shown within their own card (which is also built in the function):*/
const generateBoard = () => {
  //This resets the board (I don't really understand the mechanism of this):
  board.innerHTML = "";
  charactersInPlay.forEach((person) => {
    //This adds the HTML of the character card for each character, and a button for selecting the character:
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

// This function randomly selects one character as the secret character which you're supposed to guess:
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  //console.log(secret); If you console.log this you ruin the game, because the console is going to tell you which character is the secret!
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS; //all characters are included at the start of the game
  winOrLose.style.display = "none"; // this hides the win/lose section for now
  board.style.display = "flex"; // this shows the board with the characters, instead of the winOrLose section
  setSecret(); // sets a new secret person based on the charactersInPlay-variable (so everyone)
  /* By calling the function generateBoard that we built above, 
  The game starts with all characters visible*/
  generateBoard();
};

// This sets the currentQuestion object when you select something in the dropdown:
const selectQuestion = () => {
  /* The questions variable grabs the HTML for the dropdown menu, and stores the option group/category.
  the ".parentNode.label"-snippet ensures that it's the category hair/eyes/accessory/other that is logged.*/
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what question we've selected from the dropdown menu:
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep = false;
  /*If the characteristic of the current question being asked by the player matches the secret person's characteristic,
people without this characteristic get removed and people matching this characteristic are kept on the board*/
  if (category === "hair" || category === "eyes") {
    keep = value === secret[category];
    //keep is true when the value is the same as the secret person
  } else if (category === "accessories" || category === "other") {
    //keep is true when the value is the same as the secret person
    keep = secret[category].includes(value);
  }
  //if the above if-statements are executed, the keep variable value changes to true
  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  // Show the correct alert message
  if (category === "accessories") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(
        `Yes, the person wears ${value}! Keep everyone that wears ${value}`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(
        `No, the person doesn't wear ${value}! Remove everyone that wears ${value}`
      );
    }
  } else if (category === "other") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(`Yes, the person is a ${value}! Keep all smokers`);
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(`No, the person isn't a ${value}! Remove all smokers`);
    }
  } else if (category === "hair") {
    //Else if-statement for hair-category
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alert(
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair`
      );
    }
  } else {
    //Else-statement for eyes-category
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`
      );
    }
  }
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
// when clicking guess, you first have to conform that you want to make a guess
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you sure you want to guess on ${suspect}?`);

  if (makeAGuess) {
    checkMyGuess(suspect);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `YAY! Congrats <br>
     – you won! <span role="img" aria-label="cheer">🙌</span>`;
    applauseAudio.play();
  } else {
    winOrLoseText.innerHTML = `Oh no! You guessed wrong. Game over! <span role="img" aria-label="angry">😤</span>`;
  }
  winOrLose.style.display = "flex";
  board.style.display = "none";
};

// Calling this function invokes the start function when website is loaded:
start();

// EVENT LISTENERS:
//Restarts the game at the click of the restart button:
restartButton.addEventListener("click", start);
//Selects the question in the dropdown menu:
questions.addEventListener("change", selectQuestion);
//Restarts the game at the click of the play again button:
playAgainButton.addEventListener("click", start);
filterButton.addEventListener("click", checkQuestion);
