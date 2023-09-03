// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");

// This button is under select box. When a user clicks, all the functions will be called to remove items from the board.
const filterBtn = document.getElementById("filter");

// These two under are after a user cliked a prompt and say yes to guess a person.
const winOrLosePage = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
//After win or lose page is displayed, this button is placed under a text. User can start over.
const playAgainBtn = document.getElementById("playAgain");

// This is where all the cards will be displayed
const boardWrapper = document.querySelector(".board-wrapper");

// this is where counter will be displayed.
const counterDisplay = document.getElementById("counter-display");

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

// Global variables//////////////////////////////////
// This stores secret person who a user is going to guess. In setSecret function, the person will be decided.
let secret;

// this will store an object of category and value, which a user choose from select box. category is the same as a key in object CHARACTERS. value is a value of option
// Value will be passed in function "selectQuestion" for both, category and value.
let currentQuestion;

// Here are ones who are displayed on the screen. When a user select an option, and some will be removed when a secret doesn't have the same feature.
let charactersInPlay = CHARACTERS;

// These two are for a value that will be picked up in function selectQuestion.
// It is a value of option in html. When a user clike a button "filterBtn", value will be stored. like a hat/yellow hair...
// -> it stores a no white space value in function "checkQuestion"
let valueNoWhiteSpace;
// Because value is different from a proparty in Object, I modify it in function "checkQuestion" to use it later function "filterCharactors"
let valueAsKey;

// To count how many guess a user made
let counter = 0;

///////////////////////////////////////////////////////
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
  console.log("this is set secret function");
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secret);
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // Whenever a user starts the game, counter will be reset.
  counter = 0;
  counterDisplay.innerText = counter;

  // board is made and a secret person is chosen here
  generateBoard();
  setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].text;

  currentQuestion = {
    category: category,
    value: value,
  };

  // counter will be added one when this function is called.
  counter++;
  counterDisplay.innerText = counter;

  // After a user select an option and click filterBtn, this function will call to check what will happen the next
  checkQuestion();
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // Getting rid of white space of a value
  valueNoWhiteSpace = value.replace(/\s/g, "");

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  if (category === "hair" || category === "eyes") {
    if (`${secret[category]}${category}` === valueNoWhiteSpace) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === "accessories" || category === "other") {
    // to make it easier to identigy key in object for step 5. Input value and proparty in object is different, so I am fixing it here.
    switch (valueNoWhiteSpace) {
      case "ahat":
        valueAsKey = "hat";
        break;
      case "glasses":
        valueAsKey = "glasses";
        break;
      case "asmokinghabit":
        valueAsKey = "smoker";
        break;
    }
    if (secret[category].includes("hat") || secret[category].includes("glasses")) {
      // If there are two elements in accessories
      if (secret[category].length === 2) {
        filterCharacters(true);

        // if there is only hat in accessories
      } else if (secret[category].toString() === "hat" && valueAsKey === "hat") {
        filterCharacters(true);

        // if there is only glasses in accessories
      } else if (secret[category].toString() === "glasses" && valueAsKey === "glasses") {
        filterCharacters(true);
      } else {
        filterCharacters(false);
      }
      // he/she is a smoker
    } else if (secret[category].includes("smoker")) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log(valueAsKey);
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueAsKey));
      generateBoard();
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`);

      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(valueAsKey)
      );
      generateBoard();
    }
  } else if (category === "other") {
    // Similar to the one above
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all people that are ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueAsKey));
      generateBoard();
    } else {
      alert(`No, the person isn't a ${value}! Remove all people that are ${value}`);
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(valueAsKey)
      );
      generateBoard();
    }
  } else {
    const valueArr = value.split(" ");
    if (keep) {
      alert(`Yes, the person has ${value}!  Keep all people with ${value} `);
      charactersInPlay = charactersInPlay.filter((person) => person[category] === valueArr[0]);
      generateBoard();
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== valueArr[0]);
      generateBoard();

      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(`No, the person doesn't have ${value}! Remove all people with ${value}`);
    }
  }

  // Invoke a function to redraw the board with the remaining people.
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmation = confirm(`Are you sure you want to guess on ${personToConfirm}`);
  if (confirmation) {
    checkMyGuess(personToConfirm);
  }
  // store the interaction from the player in a variable.  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  console.log(secret.name);
  winOrLosePage.style.display = "flex";
  boardWrapper.style.display = "none";
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    winOrLoseText.textContent = `✨🎉Conglaturation!! 🎉✨`;
  } else {
    winOrLoseText.textContent = `💫 Oh no!! A wrong person. 
                                        Game over 😱 💨`;
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners /////////////////////////////////
restartButton.addEventListener("click", start);

filterBtn.addEventListener("click", () => {
  selectQuestion();
});

playAgainBtn.addEventListener("click", () => {
  start();
  winOrLosePage.style.display = "none";
  boardWrapper.style.display = "flex";
});
