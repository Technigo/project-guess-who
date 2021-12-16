const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterBtn = document.getElementById("filter");
const playAgainBtn = document.getElementById("playAgain");
const nameOfGamer = document.getElementById("namehere");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    age: "middleage",
    accessories: ["glasses", "hat"],
    other: []
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    age: "middleage",
    accessories: ["hat"],
    other: []
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    age: "old",
    accessories: ["hat"],
    other: ["smoker"]
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hair: "black",
    eyes: "brown",
    age: "middleage",
    accessories: [],
    other: []
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hair: "yellow",
    eyes: "green",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "James",
    img: "images/james.svg",
    hair: "brown",
    eyes: "green",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    age: "old",
    accessories: ["glasses"],
    other: []
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    age: "middleage",
    accessories: ["glasses"],
    other: ["smoker"]
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    age: "middleage",
    accessories: ["glasses", "hat"],
    other: ["smoker"]
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    age: "middleage",
    accessories: ["glasses", "hat"],
    other: ["smoker"]
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    age: "middleage",
    accessories: ["hat"],
    other: []
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "orange",
    eyes: "green",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "hidden",
    eyes: "blue",
    age: "middleage",
    accessories: ["hat"],
    other: []
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hair: "black",
    eyes: "blue",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hair: "brown",
    eyes: "green",
    age: "middleage",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "yellow",
    eyes: "hidden",
    age: "middleage",
    accessories: ["glasses", "hat"],
    other: []
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    age: "old",
    accessories: [],
    other: []
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hair: "yellow",
    eyes: "green",
    age: "middleage",
    accessories: [],
    other: []
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hair: "black",
    eyes: "green",
    age: "middleage",
    accessories: [],
    other: []
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    age: "middleage",
    accessories: ["glasses", "hat"],
    other: []
  }
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
};

const name = () => {
  let addName = prompt(`Hi Gamer, what is your name?`);
  addName.value = "";
  nameOfGamer.innerText = `Welcome ${addName}`;
};

functionSound = () => {
  let audio = document.createElement("audio");
  audio.src = "./audio/sound.wav";

  audio.play();
  audio();
};

const start = () => {
  charactersInPlay = CHARACTERS;
  generateBoard();
  board.style.display = "";
  setSecret();
  count = 0;
  counter.innerHTML = `click counter: 0`;
  name();
};

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value
  };
};

const checkQuestion = () => {
  selectQuestion();
  filterCharacters();
  functionSound();
};

const filterCharacters = (keep) => {
  if (currentQuestion.category.includes("accessories")) {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) {
      keep = true;
      alert(
        `Yes, the person wears ${currentQuestion.value}! Keep all people that wears ${currentQuestion.value}`
      );
    } else {
      keep = false;
      alert(
        `No, the person doesn't wear ${currentQuestion.value}! Remove all people that wears ${currentQuestion.value}`
      );
    }
  }
  if (currentQuestion.category.includes("other")) {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) {
      keep = true;

      alert(
        `Yes, the person is a ${currentQuestion.value}! Keep all people that are ${currentQuestion.value}s`
      );
    } else {
      keep = false;
      alert(
        `No, the person is not a ${currentQuestion.value}! Remove all people that are ${currentQuestion.value}s`
      );
    }
  }

  if (currentQuestion.category.includes("hair")) {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) {
      keep = true;

      alert(
        `Yes, the person has ${currentQuestion.value} hair! Keep all people with ${currentQuestion.value} hair`
      );
    } else {
      keep = false;
      alert(
        `No, the person doesn't have ${currentQuestion.value} hair! Remove all people that have ${currentQuestion.value} hair`
      );
    }
  }
  if (currentQuestion.category.includes("eyes")) {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) {
      keep = true;
      alert(
        `Yes, the person has ${currentQuestion.value} eyes! Keep all people with ${currentQuestion.value} eyes`
      );
    } else {
      keep = false;
      alert(
        `No, the person doesn't have ${currentQuestion.value} eyes! Remove all people that have ${currentQuestion.value} eyes`
      );
    }
  }

  if (currentQuestion.category.includes("age")) {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) {
      keep = true;
      alert(
        `Yes, the person are ${currentQuestion.value}! Keep all the ${currentQuestion.value} people`
      );
    } else {
      keep = false;
      alert(
        `No, the person is not ${currentQuestion.value}! Remove all the ${currentQuestion.value} people`
      );
    }
  }

  if (currentQuestion.value !== "") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[currentQuestion.category].includes(currentQuestion.value)
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) =>
          !person[currentQuestion.category].includes(currentQuestion.value)
      );
    }
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[currentQuestion.category] === value
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[currentQuestion.category] !== value
      );
    }
  }

  generateBoard();
};

const guess = (suspected) => {
  const yourGuess = prompt(
    `So you think ${suspected} is the suspected person? (yes or no) `
  );

  if (yourGuess === "yes") {
    board.style.display = "none";
    winOrLose.style.display = "flex";
    if (secret.name === suspected) {
      alert(`you win`);
    } else if (secret.name !== yourGuess) {
      alert(`you lose! This time the "Guess-Who-person" was ${secret.name}`);
    }
  } else {
    alert(`make a new guess`);
  }
};

let counter = document.getElementById("clickcounter"),
  count = 0;
filterBtn.onclick = function () {
  count += 1;
  counter.innerHTML = `click counter: ` + count;
};

start();

// All the event listeners
restartButton.addEventListener("click", start);
filterBtn.addEventListener("click", checkQuestion);
playAgainBtn.addEventListener("click", () => location.reload());
