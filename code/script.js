// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const playAgainButton = document.getElementById("playAgain");
const winOrLoseSection = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");

// Array with all the characters avaible, structured as objects with properties
const CHARACTERS = [
  {
    name: "Aragorn",
    img: "images/aragorn.png",
    hair: "brown",
    eyes: "blue",
    accessories: [],
    other: true,
  },
  {
    name: "Legolas",
    img: "images/legolas.png",
    hair: "blonde",
    eyes: "blue",
    accessories: [],
    other: false,
  },
  {
    name: "Boromir",
    img: "images/boromir.png",
    hair: "red",
    eyes: "brown",
    accessories: [],
    other: true,
  },
  {
    name: "Gimli",
    img: "images/gimli.png",
    hair: "red",
    eyes: "brown",
    accessories: ["weapon"],
    other: true,
  },
  {
    name: "Gandalf",
    img: "images/gandalf.png",
    hair: "grey",
    eyes: "blue",
    accessories: ["staff", "hat"],
    other: true,
  },
  {
    name: "Elrond",
    img: "images/elrond.png",
    hair: "black",
    eyes: "blue",
    accessories: ["crown"],
    other: false,
  },
  {
    name: "Frodo",
    img: "images/frodo.png",
    hair: "brown",
    eyes: "blue",
    accessories: ["ring"],
    other: false,
  },
  {
    name: "Sam",
    img: "images/sam.png",
    hair: "red",
    eyes: "brown",
    accessories: [],
    other: false,
  },
  {
    name: "Arwen",
    img: "images/arwen.png",
    hair: "black",
    eyes: "blue",
    accessories: ["evenstar"],
    other: false,
  },
  {
    name: "Merry",
    img: "images/merry.png",
    hair: "blonde",
    eyes: "blue",
    accessories: [],
    other: false,
  },
  {
    name: "Pippin",
    img: "images/pippin.png",
    hair: "brown",
    eyes: "blue",
    accessories: [],
    other: false,
  },
  {
    name: "Theoden",
    img: "images/theoden.png",
    hair: "blonde",
    eyes: "blue",
    accessories: [],
    other: true,
  },
  {
    name: "Eowyn",
    img: "images/eowyn.png",
    hair: "blonde",
    eyes: "blue",
    accessories: [],
    other: false,
  },
  {
    name: "Gollum",
    img: "images/gollum.png",
    hair: "barely any",
    eyes: "blue",
    accessories: ["ring"],
    other: false,
  },
  {
    name: "Bilbo",
    img: "images/bilbo.png",
    hair: "grey",
    eyes: "blue",
    accessories: ["ring"],
    other: false,
  },
  {
    name: "Galadriel",
    img: "images/galadriel.png",
    hair: "blonde",
    eyes: "blue",
    accessories: ["crown"],
    other: false,
  },
  {
    name: "Faramir",
    img: "images/faramir.png",
    hair: "red",
    eyes: "blue",
    accessories: [],
    other: true,
  },
  // {
  //   name: "Jocelyn",
  //   img: "images/jocelyn.svg",
  //   hair: "black",
  //   eyes: "brown",
  //   accessories: ["glasses"],
  //   other: ["jewelleries"],
  // },
  // {
  //   name: "Jon",
  //   img: "images/jon.svg",
  //   hair: "brown",
  //   eyes: "green",
  //   accessories: ["glasses"],
  //   other: [],
  // },
  // {
  //   name: "Jordan",
  //   img: "images/jordan.svg",
  //   hair: "blonde",
  //   eyes: "hidden",
  //   accessories: ["sunglasses", "hat"],
  //   other: ["jewelleries"],
  // },
  // {
  //   name: "Josephine",
  //   img: "images/josephine.svg",
  //   hair: "different",
  //   eyes: "brown",
  //   accessories: [],
  //   other: ["jewelleries"],
  // },
  // {
  //   name: "Josh",
  //   img: "images/josh.svg",
  //   hair: "blonde",
  //   eyes: "green",
  //   accessories: [],
  //   other: [],
  // },
  // {
  //   name: "Jude",
  //   img: "images/jude.svg",
  //   hair: "black",
  //   eyes: "green",
  //   accessories: ["tie"],
  //   other: ["beard"],
  // },
  // {
  //   name: "Julie",
  //   img: "images/julie.svg",
  //   hair: "black",
  //   eyes: "brown",
  //   accessories: ["glasses", "hat"],
  //   other: [],
  // },
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
  generateBoard();
  setSecret();
  selectQuestion();
};

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  console.log(value);
  currentQuestion = {
    category: category, // <-- Based on the optgroup
    value: value, // <-- Comes from the selected option
  };
};

// Let the game move forward from the first alternative ('brown hair')
questions.onchange = selectQuestion;

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep;
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === "hair" || category === "eyes" || category === "other") {
    console.log(category, value);
    if (value === secret[category]) {
      keep = true;
    } else {
      keep = false;
    }
  } else if (category === "accessories") {
    console.log(category, value);
    if (secret[category].includes(value)) {
      keep = true;
    } else {
      keep = false;
    }
  }
  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      swal(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      );
    } else {
      swal(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      );
    }
  } else if (category === "other") {
    if (keep) {
      swal(
        `Yes, the person is a ${value}! Keep all people that isn't a ${value}.`
      );
    } else {
      swal(
        `No, the person isn't a ${value}! Remove all people that is a ${value}.`
      );
    }
  } else if (category === "eyes") {
    if (keep) {
      swal(
        `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes.`
      );
    } else {
      swal(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`
      );
    }
  } else {
    if (keep) {
      swal(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair.`
      );
    } else {
      swal(
        `No, the person doesnt have ${value} hair! Remove all people with ${value} hair.`
      );
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  // for hair and eyes:
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

    // for accessories:
  } else if (category === "accessories") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }

    //for other:
  } else if (category === "other") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category]);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category]);
    }
  } // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let playerGuess = confirm("Are you sure you want to guess?");
  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuess === true) {
    checkMyGuess(personToConfirm);
  } else {
    swal("Okay! Keep on playing!");
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    // 2. Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerText = "Yay, you won! Wanna play again?";
  } else {
    swal(
      `Oh no! The secret person wasnt ${personToCheck}. It was ${secret.name}.`
    );
  }
  // 3. Show the win or lose section
  winOrLose.style.display = "flex";

  // 4. Hide the game board
  board.style.display = "none";
};

// Invokes the start function when website is loaded
start();

// Reload after pressing playAgain button
reload = () => {
  window.location.reload();
};

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("load", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", reload);
