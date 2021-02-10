// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrlose = document.getElementById("winOrLose");
const secretDebugg = document.getElementById("secret-debugg");
// Array with all the characters, as objects
const CHARACTERS = [{
    name: "Jabala",
    img: "images/jabala.svg",
    hairColor: "hidden",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hairColor: "grey",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: true,
    necklace: false,
    earring: false,
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "James",
    img: "images/james.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hairColor: "black",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: true,
    earring: false,
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: true,
    earring: true,
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hairColor: "purple",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: true,
    necklace: false,
    earring: false,
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hairColor: "brown",
    eyeColor: "blue",
    glasses: true,
    hat: true,
    smoker: true,
    necklace: false,
    earring: false,
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: true,
    smoker: true,
    necklace: false,
    earring: false,
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hairColor: "white",
    eyeColor: "hidden",
    glasses: false,
    hat: true,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hairColor: "black",
    eyeColor: "blue",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: false,
    earring: true,
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hairColor: "grey",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    smoker: false,
    necklace: false,
    earring: true,
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: false,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hairColor: "black",
    eyeColor: "green",
    glasses: false,
    hat: false,
    smoker: false,
    necklace: false,
    earring: false,
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: true,
    smoker: false,
    necklace: false,
    earring: false,
  },
];

// Global variables
let secret, currentQuestion, charactersInPlay;

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
          <button id="guessButton" class="filled-button small" onclick="checkMyGuess('${person.name}')">Guess</button>
        </div>
        </div>
    `;
  });
};

const generateSecretPerson = () => {
  winOrlose.innerHTML += "";
  winOrlose.innerHTML += `
      <center><h1 class="win-or-lose-h1">Congrats <br> Your guess was right <br> The secret person is: </h1>
      <div class="card-Secret-Person">
        <p>${secret.name}</p>
        <img src=${secret.img} alt=${secret.name}></center>
    `;
  const playAgainButton = document.getElementById("playAgain");
  playAgainButton.addEventListener("click", restartGame);
};



// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // What else should happen when we start the game?

  setSecret(); //The game will generate a secret charatcer at the very start
  console.log(`Secret Person: ${secret.name}`); // Log the secret person to console for debugging.
  secretDebugg.innerHTML = `Secret Person: ${secret.name}`;
  generateBoard(); // The game will render all the characters onto the board.
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what option group (category) the question belongs to.

  // We also need a variable that stores the actual value of the question we've selected.
  let optionValue = questions.value;

  if (category === "hair color") {
    currentQuestion = {
      attribute: "hairColor",
      value: optionValue,
      // 👆 add the value from the input here
      category: category,
    };
    checkQuestion();
  } else if (category === "eye color") {
    currentQuestion = {
      attribute: "eyeColor",
      value: optionValue,
      category: category,
    };
    checkQuestion();
  } else if (category === "accessories") {
    currentQuestion = {
      attribute: optionValue,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    };
    checkQuestion();
  } else if (category === "other") {
    currentQuestion = {
      attribute: optionValue,
      value: true,
      category: category,
    };
    checkQuestion();
    // Set this up your self (should be same structure as above)
  }
};

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  let secretValue = secret[currentQuestion.attribute];
  if (secretValue === currentQuestion.value) {
    console.log("match - true");
    filterCharacters(true, currentQuestion.category);
  } else {
    console.log("no match - false");
    filterCharacters(false, currentQuestion.category);
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep, group) => {
  // Show the correct alert message for different categories
  if (group === "hair color") {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} hair! Keep all that has ${currentQuestion.value} hair.`
      );
      charactersInPlay = charactersInPlay.filter((character) => {
        return character.hairColor === currentQuestion.value;
      });
      generateBoard();
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} hair! Remove everyone with ${currentQuestion.value} hair`
      );
      charactersInPlay = charactersInPlay.filter((character) => {
        return character.hairColor !== currentQuestion.value;
      });
      generateBoard();
    }
  } else if (group === "eye color") {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} eyes! Keep all that has ${currentQuestion.value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter((character) => {
        return character.eyeColor === currentQuestion.value;
      });
      generateBoard();
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} eye! Remove everyone with ${currentQuestion.value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter((character) => {
        return character.eyeColor !== currentQuestion.value;
      });
      generateBoard();
    }
  } else if (group === "accessories") {
    if (keep) {
      alert(
        `You asked for ${currentQuestion.value}! Keep the ${currentQuestion.value}`
      );
    } else {
      alert(
        `Sadly you asked for ${currentQuestion.value} but it's not a match.! Remove the${currentQuestion.value}`
      );
    }
  } else if (group === "other") {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value}! Keep all that has ${currentQuestion.value}`
      );
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value}! Remove all that wears ${currentQuestion.value}`
      );
    }
  };
};

const restartGame = () => {
  winOrlose.style = "display: none;"
  board.style = "display: flex;"
  start();
}

// If you confirm, this function is invoked
// suspect is = person.name
const checkMyGuess = (suspect) => {
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

  alert("Are you sure you want to make your guess?");
  if (suspect === secret.name) {
    console.log(`${secret.name} is the correct guess. You win!`);

    /* board.style = "display: none;" */
    board.classList.add("game-board-hidden");
    winOrlose.style = "display: block;"
    generateSecretPerson();
  } else {
    alert("Sorry. Your guess was wrong. The game will now restart.");
    restartGame();
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", restartGame);
findOutButton.addEventListener("click", selectQuestion);