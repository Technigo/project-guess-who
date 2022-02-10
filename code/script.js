// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterButton = document.getElementById("filter");
const counterBox = document.getElementById("counterBox");
const questionsAsked = document.getElementById("questionsAsked");
const winOrLoseText = document.getElementById("winOrLOseText"); // maybe remove
const winOrLoseSection = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");

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
let secret;
let currentQuestion;
let charactersInPlay;
let counter = 0;

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
  console.log(secret); //I added
};

//This function adds to counter when a question has been asked
const add = () => {
  counter += 1;
};

//This function is invoked when the restart button is pressed. The whole board is generated, with all the characters
const playAgain = () => {
  winOrLoseSection.style.display = "none";
  board.style.display = "";
  charactersInPlay = CHARACTERS;
  generateBoard();
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  // Set the secret person --> invoke setSecret function
  // Show the board on the screen --> invoke generateBoard
  playAgain();
  generateBoard();
  setSecret();
  counter = 0;
  questionsAsked.innerHTML = `
  ${counter}`;
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = document.getElementById("questions").value; // ;?

  currentQuestion = {
    category: category,
    value: value, //,?
  }; // ;??
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === "hair" || category === "eyes" || category === "beard") {
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
  add();
  questionsAsked.innerHTML = `
  ${counter}`;
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value, secret } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      ); //To keep everyone who match the question
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      ); //To remove those who doesn't match the question
    }
  } else if (category === "other") {
    // Similar to the one above
    //} else {
    if (keep) {
      alert(`Yes the person is a ${value}! Keep all the ...`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      alert(`No the person is not a ${value}. Remove all people who ...`);
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      // alert popup that says something like: "No, the person doesn't have yellow hair! Remove all people with yellow hair"
    }
  } else if (category === "hair") {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair. Remove all people with ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "beard") {
    if (keep) {
      alert(
        `Yes, the person has a ${value} beard! Keep all the people with a ${value} beard.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have a ${value} beard. Remove all people whit a ${value} beard.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person have ${value} eyes! Keep all the people with ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes. Remove all with ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
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
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let confirmChoice = confirm("Do you really want to guess on this person?");
  if (confirmChoice === true) {
    // This invokes the checkMyGuess function
    checkMyGuess(personToConfirm);
  } else {
    console.log("pressed cancel"); // is this right???
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  let guessStatus = {
    status: "",
  };
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (secret.name === personToCheck) {
    // 2. Set a Message to show in the win or lose section accordingly
    //winOrLoseText.innerHTML = `Yey! You won in ${counter} guesses!`;
    guessStatus.status = "right";
  } else {
    // winOrLoseText.innerHTML = `Oh no... You lost the game!`;
    guessStatus.status = "wrong";
  }
  // 3. Show the win or lose section
  //winOrLoseSection.style.display = "block";
  board.innerHTML = "";
  // 4. Hide the game board
  //board.style.display = "none";
  board.innerHTML += `

`;
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", start);
