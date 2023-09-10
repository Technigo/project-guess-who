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
const timer = document.getElementById("timer");
const questionSection = document.querySelector(".question-section");
const playCorrect = document.getElementById("soundCorrect");
const playWrong = document.getElementById("soundFail");
const playLose = document.getElementById("soundLose");
const playWin = document.getElementById("soundWin");

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
let minutes = 0;
let seconds = 0;
let timerInterval;

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
  //console.log(secret.name);
};

// This function to start the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  generateBoard();
  //The secret person is set
  setSecret();
  //Makes sure that the totalGuess counter is reset if not at 0
  totalGuesses = 0;
  guesses.innerHTML = `${totalGuesses}`;
  //Starts the timer for a new round
  timerStart();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variables store what option group (category) the question belongs to and what the value is.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  //The above variables are then used to modify currentQuestion
  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function is invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  //A check to make sure that the player chooses something to filter by
  if (questions.selectedIndex === 0) {
    alert(`You have to select an option`);
  } else {
    const { category, value } = currentQuestion;

    //the filterCharacters function is called and uses the category to filter the characters
    filterCharacters(category);

    //charactersInPlay is changed based on the filtering and then the board gets generated again based on the remaining characters.
    generateBoard();

    //Increases the amount of total guesses by 1 and displays it in the DOM
    totalGuesses++;
    guesses.innerHTML = `${totalGuesses}`;
  }
};

//Filters the characters array and redraws the game board.
const filterCharacters = (keep) => {
  //Uses the category and value to check if they correspond with the secret character in some way
  const { category, value } = currentQuestion;

  //If the category is either accessories or other, filtering has to be done differently as they are arrays
  //If the value of the player's guess matches the secret character, keep is set to true
  if (category === "accessories" || category === "other") {
    keep = secret[category].includes(value);
  } else {
    keep = secret[category] === value;
  }
  // Filters by category
  if (category === "accessories") {
    // If keep is true, the characters in the list that contain that value will remain while the others are removed
    if (keep) {
      //playSound(playCorrect);
      //lets the player know that their guess is correct.
      //There are two alerts for correct and wrong for better grammar
      if (value === "hat") {
        alert(
          `Yes, the person has a ${value}! Keep all people with a ${value}`
        );
      } else {
        alert(`Yes, the person wears ${value}! Keep all people with ${value}`);
      }
      //Modifies charactersInPlay to contain the filtered version and generates the board again
      charactersInPlay = charactersInPlay.filter((person) =>
        person.accessories.includes(value)
      );

      generateBoard();
    } else {
      //playSound(playWrong);
      //Lets the player know that their guess is incorrect.
      //There are two alerts for correct and wrong for better grammar

      if (value === "hat") {
        alert(
          `No, the person doesn't have a ${value}! Remove all people with a ${value}`
        );
      } else {
        alert(
          `No, the person doesn't wear ${value}! Remove all people with ${value}`
        );
      }
      //Removes all the characters with the incorrect value and filters charactersInPlay
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.accessories.includes(value)
      );

      //Generates the board again
      generateBoard();
    }
  } else if (category === "other") {
    // Similar to the one above
    if (keep) {
      //playSound(playCorrect);
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
      //playSound(playWrong);
      if (value === "smoker") {
        alert(
          `No, the person doesn't have a smoking habit! Remove all people that have a smoking habit.`
        );
      } else {
        alert(
          `No, the person doesn't have a ${value}! Remove all people that have a ${value}.`
        );
      }
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.other.includes(value)
      );
      generateBoard();
    }
  } else if (category === "eyes") {
    //Filters based the eyes value and the generates the board again based on a filtered list of charactersInPlay
    if (keep) {
      //playSound(playCorrect);
      alert(
        `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person.eyes.includes(value)
      );

      generateBoard();
    } else {
      //playSound(playWrong);
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.eyes.includes(value)
      );
      generateBoard();
    }
  } else if (category === "hair") {
    //Filters based the hair value and the generates the board again based on a filtered list of charactersInPlay

    if (keep) {
      //playSound(playCorrect);
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person.hair.includes(value)
      );
      generateBoard();
    } else {
      //playSound(playWrong);
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person.hair.includes(value)
      );
      generateBoard();
    }
  }
};

// when clicking guess, the player is asked to confirm their guess of the secret character.
const guess = (personToConfirm) => {
  // Stores the interaction from the player in a confirm() ?
  let confirmAnswer = confirm(`Do you think that it is ${personToConfirm}?`);

  // If the player wants to guess, invokes the checkMyGuess function.
  if (confirmAnswer) {
    checkMyGuess(personToConfirm);
  }
};

// If a guess is confirmed, this function is invoked
const checkMyGuess = (personToCheck) => {
  //Checks if the guessed character has the same name as the secret character
  personToCheck === secret.name ? correctGuess() : wrongGuess();
};

//This is called if the guess is correct
const correctGuess = () => {
  //Doesn't invoke the name if the namePrompt is empty, null or undefined
  if (namePrompt !== `` && namePrompt !== undefined && namePrompt !== null) {
    totalGuesses++;
    //Plays a victory sound
    playSound(playWin);
    winOrLoseText.innerHTML += `
    Nicely done ${namePrompt}!
    
    It took you ${totalGuesses} guess(es) to reach the correct answer.
    Time played: ${timePlayed()}`;
  } else {
    totalGuesses++;
    playSound(playWin);
    winOrLoseText.innerHTML += `
    Nicely done!
    
    It took you ${totalGuesses} guess(es) to reach the correct answer.
    Time played: ${timePlayed()}`;
  }
  //Displays the winOrLose-section
  nicelyDone.style.display = "flex";
  winOrLoseWrapper.style.display = "flex";

  //Hides the board and the questionSection
  board.style.display = "none";
  questionSection.style.display = "none";
  //Adds 1 to the value of total wins and displays it in the DOM
  //This is saved until the user refreshes the window
  totalWins++;
  win.innerHTML = `${totalWins}`;
};

//This is called if the guess is incorrect
const wrongGuess = () => {
  if (namePrompt !== `` && namePrompt !== undefined && namePrompt !== null) {
    playSound(playLose);
    winOrLoseText.innerHTML += `
      Yea, no. Better luck next time, ${namePrompt}. The correct person was ${
      secret.name
    }.
      Time played: ${timePlayed()}`;
  } else {
    playSound(playLose);
    winOrLoseText.innerHTML += `
        Yea, no. Better luck next time. The correct person was ${secret.name}. 
        Time played: ${timePlayed()}`;
  }
  winOrLoseWrapper.style.display = "flex";
  board.style.display = "none";
  questionSection.style.display = "none";
  //Adds 1 to the value of total losses and displays it in the DOM
  totalLosses++;
  lose.innerHTML = `${totalLosses}`;
};

//Resets the game
const resetTheGame = () => {
  //Clears and hides the winOrLose section
  winOrLoseWrapper.style.display = "none";
  winOrLoseText.innerHTML = ``;
  nicelyDone.style.display = "none";
  //Displays the board and questionSection again
  board.style.display = "flex";
  questionSection.style.display = "flex";

  //Resets the timer and the index of the question selector and finally calls the start function
  questions.selectedIndex = 0;
  seconds = 0;
  minutes = 0;
  start();
};

//Starts the timer. Sets the timeInterval if it hasn't already been done
const timerStart = () => {
  if (!timerInterval) {
    //Updates every second
    timerInterval = setInterval(updateTimer, 1000);
  }
};

const updateTimer = () => {
  //Increases by one every second
  seconds++;
  //if 60 seconds have passed, increases the minutes and sets seconds to 0 again
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  updateTimerDisplay();
};

//Updates the timer in the DOM
const updateTimerDisplay = () => {
  timer.textContent = `${minutes}m ${seconds}s`;
};

//Provides the info for the winOrLose screen
const timePlayed = () => {
  if (minutes < 1) {
    return `${seconds}s`;
  } else {
    return `${minutes}m ${seconds}s`;
  }
};

//Plays a sound for the player depending if they are correct, wrong, have lost or have won
const playSound = (sound) => {
  sound.play();
};

//Asks the player's name and starts the game.
//this only asks the players the first time they play and not on every reset
const startGame = () => {
  start();
  namePrompt = prompt("What is your name?");
  //Will display the player's name on the screen if namePrompt isn't empty, null or undefined
  if (namePrompt !== `` && namePrompt !== undefined && namePrompt !== null) {
    playerName.textContent = `${namePrompt},`;
  }
};

// Invokes the startGame function when website is loaded
startGame();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener("click", checkQuestion);
playAgain.addEventListener("click", resetTheGame);
