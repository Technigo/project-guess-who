// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filter = document.getElementById("filter");
const guessButton = document.getElementById("winOrLose");
const winOrLose = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");
const questionCounter = document.getElementById("questionCounter");

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
    accessories: ["glasses", "jevellery"],
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
    accessories: ["glasses", "jevellery"],
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
    accessories: ["glasses", "jevellery"],
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
    accessories: ["glasses", "hat", "jevellery"],
    other: [],
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    accessories: ["jevellery"],
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

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let numberOfGuesses;

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

//* Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

//* This function to start (and restart) the game
const start = () => {
  board.innerHTML += `
  <div class= gif-bg>
  <img src="images/loading.gif" class="loading-gif" alt="loading"/>
  </div>`;

  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  setTimeout(() => generateBoard(), 1000);
  setSecret();
  numberOfGuesses = 0;
  questionCounter.innerHTML = `<p class="guesses">GUESSES: ${numberOfGuesses}</p>`;

  // console.log(secret); //remove when it is ready to launch
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  };

  // console.log(`does the person has ${value} ${category} ?`); //checking the selectQuestion function
};

//* This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Compare the currentQuestion details with the secret person details in a different manner based on category
  // (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === "hair" || category === "eyes") {
    // if (secret[category] === value)
    if (secret[currentQuestion.category] === currentQuestion.value) {
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

//* It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}!`
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people wears ${value}!`
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all people that ${value}!`);
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that ${value}!`
      );
    }
  } else if (category === "hair" || category === "eyes") {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category} ! Keep all people with ${value} ${category}! `
      );
    } else {
      alert(
        `No, the person doesnt have ${value} ${category}! Remove all people with ${value} ${category}!`
      );
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  //  for hair and eyes :
  if (category === "hair" || category === "eyes") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
    //  for accessories and other
  } else if (category === "accessories" || category === "other") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }
  //* Invoke a function to redraw the board with the remaining people.
  generateBoard();
  numberOfGuesses++;
  questionCounter.innerHTML = `<p>GUESSES: ${numberOfGuesses}</p>`;
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.

  const userGuess = confirm(`Are you sure to guess on ${personToConfirm}?`);
  if (userGuess) {
    // If user confirms, checkmyGuess function is invoked
    personToCheck = personToConfirm;
    checkMyGuess(personToCheck);
  } else {
    alert("Keep trying!");
  }
};

const checkMyGuess = (personToCheck) => {
  // console.log(personToCheck);
  // console.log(secret.name);

  winOrLose.style.display = "flex"; //Show the win or lose section

  // Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `
      <p> You win the game! </p>   
      <img style= margin:0 width='30%' src=${secret.img} alt=${secret.name}>
      <p>The secret person is ${secret.name}!</p>  
      <p>  👏👏👏  </p> 
    `;
    let youWinAudio = new Audio("sound/youWin.wav");
    youWinAudio.play();
  } else {
    winOrLoseText.innerHTML = `
    <p> You lost! 👎🏻 </p>  
    <img style= margin:0 width='30%' src=${secret.img} alt=${secret.name}>       
    <p>  ${secret.name} is the person we are looking for. </p>  
    `;
    let youLostAudio = new Audio("sound/youLost.wav");
    youLostAudio.play();
  }

  playAgainButton.addEventListener("click", () => {
    winOrLose.style.display = "none";
  });

  start();

  // Set a Message to show in the win or lose section accordingly
  // Hide the game board
};

// timer https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
// doesnt reset the counter with restart button
// need a time is up message
const startTimer = (duration, display) => {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
    // else (duration === 0) {
    //   clearInterval(timer);
    //   showMsg({
    //     text: "Time is up! Try again!",
    //     confirmText: "Play Again",
    //     onConfirm: () => window.location.reload(),
    //   });
    // }
  }, 1000);
};

window.onload = function () {
  var oneMinute = 60 * 1,
    display = document.querySelector("#time");
  startTimer(oneMinute, display);
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
filter.addEventListener("click", checkQuestion); // to invoke the checkQuestion button
guessButton.addEventListener("onclick", guess); // to invoke the Guess button
