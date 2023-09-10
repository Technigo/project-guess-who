// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterButton = document.getElementById("filter");
const guessButton = document.querySelector(".filled-button");
const winOrLoseWrapper = document.querySelector(".win-or-lose-wrapper");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgain = document.getElementById("playAgain");
const nicelyDone = document.getElementById("nicely-done");
const guesses = document.getElementById("guess");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const playerName = document.getElementById("playerName");

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
    other: ["beard", "parrot"],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    accessories: ["hat"],
    other: ["smoker", "beard"],
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
    other: ["smoker", "beard"],
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
    other: ["beard"],
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
let totalGuesses = 0;
let totalWins = 0;
let totalLosses = 0;
let namePrompt;

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
  console.log(secret.name);
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
  console.log(secret);
  totalGuesses = 0;
  guesses.innerHTML = `${totalGuesses}`;
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };

  console.log(secret[category] === value);
  console.log(currentQuestion);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  if (questions.selectedIndex === 0) {
    alert(`You have to select an option`);
  } else {
    const { category, value } = currentQuestion;

    // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
    // See if we should keep or remove people based on that
    // Then invoke filterCharacters

    filterCharacters(category);

    //in order to initialize the generateBoard function properly, charactersInPlay is changed.

    generateBoard();

    //Increases the amount of total guesses by 1 and displays it in the DOM
    totalGuesses++;
    guesses.innerHTML = `${totalGuesses}`;
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  if (category === "accessories" || category === "other") {
    keep = secret[category].includes(value);
  } else {
    keep = secret[category] === value;
  }
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      if (value === "hat") {
        alert(
          `Yes, the person has a ${value}! Keep all people with a ${value}`
        );
      } else {
        alert(`Yes, the person wears ${value}! Keep all people with ${value}`);
      }
      charactersInPlay = charactersInPlay.filter((person) =>
        person.accessories.includes(value)
      );
      generateBoard();
    } else {
      if (value === "hat") {
        alert(
          `No, the person doesn't have a ${value}! Remove all people with a ${value}`
        );
      } else {
        alert(
          `No, the person doesn't wear ${value}! Remove all people with ${value}`
        );
      }
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.accessories.includes(value)
      );
      generateBoard();
    }
  } else if (category === "other") {
    // Similar to the one above
    if (keep) {
      if (value === "smoker") {
        alert(
          `Yes, the person has a smoking habit! Keep all people that have a smoking habit`
        );
      } else {
        alert(
          `Yes, the person has a ${value}! Keep all people that have a ${value}`
        );
      }

      charactersInPlay = charactersInPlay.filter((person) =>
        person.other.includes(value)
      );
      generateBoard();
    } else {
      alert(
        `No, the person doesn't have a ${value}! Remove all people that have a ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.other.includes(value)
      );
      generateBoard();
    }
  } else if (category === "eyes") {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person.eyes.includes(value)
      );

      generateBoard();
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.eyes.includes(value)
      );
      generateBoard();
    }
    // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
  } else if (category === "hair") {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person.hair.includes(value)
      );
      generateBoard();
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.hair.includes(value)
      );
      generateBoard();
    }
    // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
  } else {
    // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

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
  let confirmAnswer = confirm(`Do you think that it is ${secret.name}?`);

  if (confirmAnswer) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  personToCheck === secret.name ? correctGuess() : wrongGuess();
};

const correctGuess = () => {
  winOrLoseText.innerHTML += `
  Nicely done ${namePrompt}!
  
  It took you ${totalGuesses} guesses to reach the correct answer.`;
  nicelyDone.style.display = "flex";
  winOrLoseWrapper.style.display = "flex";
  board.style.display = "none";
  //Adds 1 to the value of total wins and displays it in the DOM
  totalWins++;
  win.innerHTML = `${totalWins}`;
};

const wrongGuess = () => {
  winOrLoseText.innerHTML += `
    Yea, no. Better luck next time, ${namePrompt}. The correct person was ${secret.name}`;
  winOrLoseWrapper.style.display = "flex";
  board.style.display = "none";
  //Adds 1 to the value of total losses and displays it in the DOM
  totalLosses++;
  lose.innerHTML = `${totalLosses}`;
};

const resetTheGame = () => {
  board.style.display = "flex";
  winOrLoseWrapper.style.display = "none";
  questions.selectedIndex = 0;
  start();
};

//a function that asks the player's name and starts the game.
//this only asks the players the first time they play and not on every reset
const startGame = () => {
  start();
  namePrompt = prompt("What is your name?");
  playerName.textContent = `${namePrompt},`;
};

// Invokes the startGame function when website is loaded
startGame();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener("click", checkQuestion);
playAgain.addEventListener("click", resetTheGame);
