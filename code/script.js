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
    other: "",
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
    hair: "barely",
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
  //   other: [true],
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
let secretCharacter;
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

// A person is randomly selected a person from the characters array and set as the value of the variable called secret
const setsecretCharacter = () => {
  secretCharacter =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function starts (and restarts) the game
const start = () => {
  // Generates a new board of characters and a new secret person is selected
  charactersInPlay = CHARACTERS;
  generateBoard();
  setsecretCharacter();
};

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value; // This variable stores what option group (category) the question belongs to.

  // Each question is related to category and values,
  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep = false;

  // Invoking filterCharacters
  if (category === "hair") {
    keep = secretCharacter.hair === value;
  } else if (category === "eyes") {
    keep = secretCharacter.eyes === value;
  } else if (category === "accessories") {
    keep = secretCharacter.accessories.includes(value);
  } else if (category === "other") {
    keep = secretCharacter.other;
  }
  filterCharacters(keep); // Invokes filterCharacters
};

// Filters the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  // Show the correct alert message for different categories dependent if they match the value of the secret person

  if (category === "accessories") {
    if (keep) {
      alert(`Yes! The person has a ${value}! Keep everyone with a ${value}`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No! The person does not have a ${value}! Remove everyone with a ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(`Yes! The person has a ${value}! Keep everyone with a ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category]);
    } else if (keep) {
    } else {
      alert(
        `No! The person does not have a ${value}! Remove all people with a ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category]);
    }
  }
  if (category === "hair") {
    if (keep) {
      alert(
        `Yes! The person has ${value} hair! Keep everyone with ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No! The person does not have ${value} hair! Remove everyone with ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }
  if (category === "eyes") {
    if (keep) {
      alert(
        `Yes! The person has ${value} eyes! Keep everyone with ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No! The person does not have ${value} eyes! Remove everyone with ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }
  generateBoard();
};

// Player has to confirm before guessing whom the secret person is
const guess = (suspectCharacter) => {
  const confirmGuess = confirm(`Are you sure you want to guess?`);
  if (confirmGuess) checkMyGuess(suspectCharacter);
};

// If you confirm, this function is invoked and different text is shown dependent of guess is right or wrong
const checkMyGuess = (suspectCharacter) => {
  if (suspectCharacter === secretCharacter.name) {
    winOrLoseText.innerHTML = `Well done! The right person was ${secretCharacter.name} Congratulations!`;
  } else {
    winOrLoseText.innerHTML = `Oh no, you lost... The right person was actually ${secretCharacter.name}.`;
  }
  winOrLose.style.display = "flex";
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
findOutButton.addEventListener("click", checkQuestion);
questions.addEventListener("change", selectQuestion);
playAgainButton.addEventListener("click", () => {
  start();
  window.location.reload();
});
