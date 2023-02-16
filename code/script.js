// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const boardWrapper = document.querySelector(".board-wrapper");
const winOrLoseWrapper = document.querySelector(".win-or-lose-wrapper");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutBtn = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgainBtn = document.getElementById("playAgain");

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

const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secret);
  return secret;
};

// Create category (optGroup) elements
const categoryArray = Object.keys(CHARACTERS[0]);
//Removed unnecessary categories
categoryArray.splice(categoryArray.indexOf("img"), 1);
categoryArray.splice(categoryArray.indexOf("name"), 1);
console.log(categoryArray);

//Creating an array for each category options list and removing duplicates
let hairArr = [];
let eyesArr = [];
let accessoriesArr = [];
let otherArr = [];

const CategoryOptions = () =>
  CHARACTERS.forEach((character) => {
    if (!hairArr.includes(character.hair)) {
      hairArr.push(character.hair);
    }
    if (!eyesArr.includes(character.eyes)) {
      eyesArr.push(character.eyes);
    }
    character.accessories.forEach((accessoriesItem) => {
      if (!accessoriesArr.includes(accessoriesItem)) {
        accessoriesArr.push(accessoriesItem);
      }
    });
    character.other.forEach((otherItem) => {
      if (!otherArr.includes(otherItem)) {
        otherArr.push(otherItem);
      }
    });
  });
CategoryOptions();

console.log(hairArr, eyesArr, accessoriesArr, otherArr);

//Creating HTML element OptGroups and Options
const createCategories = () => {
  categoryArray.forEach((category) => {
    questions.innerHTML += `
     <optgroup label="${category}" id="${category}">
        </optgroup>
    `;
    if (category === "hair") {
      hairArr.forEach((hairItem) => {
        document.getElementById(category).innerHTML += `
    <option value="${hairItem}" id="${hairItem}">${hairItem} hair</option>
    `;
      });
    } else if (category === "eyes") {
      eyesArr.forEach((eyesItem) => {
        document.getElementById(category).innerHTML += `
    <option value="${eyesItem}">${eyesItem} eyes</option>
    `;
      });
    } else if (category === "accessories") {
      accessoriesArr.forEach((accessoriesItem) => {
        document.getElementById(category).innerHTML += `
    <option value="${accessoriesItem}">${accessoriesItem}</option>
    `;
      });
    } else if (category === "other") {
      otherArr.forEach((otherItem) => {
        document.getElementById(category).innerHTML += `
    <option value="${otherItem}">${otherItem} </option>
    `;
      });
    }
  });
};

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS;
  winOrLoseWrapper.style.display = "none";
  boardWrapper.style.display = "flex";
  generateBoard();
  setSecret();
  createCategories();
};

// const test = () => {
//   CHARACTERS.forEach((character) => {
//     for (const [key, value] of Object.entries(character)) {
//       console.log(`${key}: ${value}`);
//     }
//   });
// };
// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; // it gives the name of the optgroup element
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  };
  console.log(value);
  console.log(currentQuestion);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  console.log(category, value);
  if (category === "hair" || category === "eyes") {
    if (value === secret.hair || value === secret.eyes) {
      console.log("it's hair or eyes and there is a match with secret");
      filterCharacters(true);
    } else {
      console.log("doesn't match");
      filterCharacters(false);
    }
  } else if (category === "accessories" || category === "other") {
    console.log("it's accessories or other and there is a match with secret");
    filterCharacters(true);
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories" || category === "other") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      generateBoard();
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      generateBoard();
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has  ${value} ${category}! Keep all people with ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      console.log(charactersInPlay);
    }
    generateBoard();
  }

  // Invoke a function to redraw the board with the remaining people.
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  confirm(`Do you want to confirm ${personToConfirm}?`);
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  checkMyGuess(personToConfirm);
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  boardWrapper.style.display = "none";
  if (personToCheck === secret.name) {
    alert("Match!");
    // winOrLoseText.innerText("Congrats!");
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.textContent = "Hurray! You won! Do you want to play again?";
  } else {
    alert(`Your answer is wrong!`);
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.textContent = `Your answer is wrong! The correct solution was ${secret.name}! Play again?`;
  }

  // 3. Show the win or lose section
  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutBtn.addEventListener("click", checkQuestion);
playAgainBtn.addEventListener("click", start);
