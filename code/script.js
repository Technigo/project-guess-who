// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterBtn = document.getElementById("filter");
const winOrLosePage = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const boardWrapper = document.querySelector(".board-wrapper");

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
let charactersInPlay = CHARACTERS;
let valueNoWhiteSpace;
let valueAsKey;

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
  console.log("this is start function");
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  console.log("this is select q function");
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].text;

  currentQuestion = {
    category: category,
    value: value,
  };

  checkQuestion();
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log("this is check function");
  const { category, value } = currentQuestion;
  // Getting rid of white space for value
  valueNoWhiteSpace = value.replace(/\s/g, "");
  console.log(`${secret[category]}`, 2, value);

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

// All the event listeners
restartButton.addEventListener("click", start);

filterBtn.addEventListener("click", () => {
  selectQuestion();
});
