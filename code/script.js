// All the DOM selectors stored as short variables
const board = document.getElementById("board"),
  questions = document.getElementById("questions"),
  restartButton = document.getElementById("restart"),
  findOutButton = document.getElementById("filter"),
  winOrLoseMessage = document.getElementById("winOrLoseText"),
  winOrLoseSection = document.getElementById("winOrLose"),
  playAgainButton = document.getElementById("playAgain");

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
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `;
  });
};

// Randomly select a person from the characters array
// Set selected person as the secret character
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  //Testing that the random secret person is set
  console.log("Random character: ");
  console.log(secret);
};

// Start (and restart) the game
const start = () => {
  // Set charactersInPlay array to include all the characters we start with
  charactersInPlay = CHARACTERS;
  // Invoke the function that draws the game board
  generateBoard();
  // Pick a secret character
  setSecret();
  // Hide the win or lose screen
  winOrLoseSection.style.display = "none";
};

// Select a question in the dropdown and set its value to currentQuestion
const selectQuestion = () => {
  // Store what "option group" (category) the question belongs to
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // Store the actual value of the selected question
  const value = questions.value;
  // Store category and value in the current question
  currentQuestion = {
    category: category, // Based on the optgroup
    value: value, // Comes from the selected option
  };
};

// After clicking on the 'Find Out' button, compare the details from currentQuestion
// with the secret person
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // Comparison for key pairs with string values
  if (category === "hair" || category === "eyes") {
    if (secret[category] === value) {
      filterCharacters(true);
    } else filterCharacters();
  } // Comparison for key pairs with array values
  else if (category === "accessories" || category === "other") {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else filterCharacters();
  }
};

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}`
      );
      // Remove non-matching characters from the board
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all people that aren't ${value}s`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people that have ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      `No, the person doesn't have ${value} ${category}! Remove all people that have ${value} ${category}`;
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
    // Redraw the board with remaining characters
    generateBoard();
  }
};

// After clicking on the "guess" button, the player must confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmed = confirm(`Are you sure about ${personToConfirm}?`);
  if (confirmed) {
    checkMyGuess(personToConfirm);
  }
};

// If user confirms, check who wins
const checkMyGuess = (personToCheck) => {
  // Send the user to the Win Or Lose screen
  winOrLoseSection.style.display = "block";
  // Determine who won by comparing the user's guess with the secret character
  if (personToCheck === secret.name) {
    winOrLoseMessage.innerHTML = "You win!";
  } else {
    winOrLoseMessage.innerHTML = "Nope sorry, I win!";
  }
};

// Invoke the start function when website is loaded
start();

// All event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", start);

/* Pseudocode

2 players
2 sets of character cards for each player (charArray1 and charArray2)
each player chooses a character
the other will guess their chosen character

while cards !== 1

Player asks binary question about character trait 
if answer === 'no', loop through charArray and discard character(s) with non-matching traits
else -> matching cards stay in place 

if cards === 1, player wins
else continue to next player */
