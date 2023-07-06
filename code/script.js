const board = document.getElementById("board");
const boardWrapper = document.querySelector(".board-wrapper");
const winOrLoseWrapper = document.querySelector(".win-or-lose-wrapper");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutBtn = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const details = document.getElementById("details");
const card = document.querySelector(".card");
const timer = document.getElementById("timer");
const guesses = document.getElementById("guesses");

// Global variables
let guessCounter;
let secret;
let currentQuestion;
let charactersInPlay;

//Creating an array for each category options list and removing duplicates
let hairArr = [];
let eyesArr = [];
let accessoriesArr = [];
let otherArr = [];

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Charlie",
    img: "images/charlie.jpg",
    fur: "tabby",
    eyes: "hidden",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Ricky",
    img: "images/ricky.jpg",
    fur: "mixed color",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Jacques",
    img: "images/jacques.jpg",
    fur: "black",
    eyes: "yellow",
    accessories: [],
    other: ["shorthair", "tongue out"],
  },
  {
    name: "Peter",
    img: "images/peter.jpg",
    fur: "tabby",
    eyes: "yellow",
    accessories: ["collar"],
    other: ["longhair"],
  },
  {
    name: "Jake",
    img: "images/jake.jpg",
    fur: "tabby",
    eyes: "green",
    accessories: ["collar"],
    other: [],
  },
  {
    name: "Jana",
    img: "images/jana.jpg",
    fur: "mixed color",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Rufus",
    img: "images/rufus.jpg",
    fur: "grey",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.jpg",
    fur: "grey",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["shorthair"],
  },

  {
    name: "Martin",
    img: "images/martin.jpg",
    fur: "orange",
    eyes: "yellow",
    accessories: ["clothes"],
    other: ["shorthair"],
  },
  {
    name: "Oliver",
    img: "images/oliver.jpg",
    fur: "orange",
    eyes: "brown",
    accessories: [],
    other: ["longhair"],
  },
  {
    name: "Rocky",
    img: "images/rocky.jpg",
    fur: "orange",
    eyes: "hidden",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Mollie",
    img: "images/mollie.jpg",
    fur: "white",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Andy",
    img: "images/andy.jpg",
    fur: "mixed color",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Mandy",
    img: "images/mandy.jpg",
    fur: "mixed color",
    eyes: "blue",
    accessories: ["collar"],
    other: ["longhair"],
  },
  {
    name: "Jerry",
    img: "images/jerry.jpg",
    fur: "mixed color",
    eyes: "green",
    accessories: ["collar"],
    other: ["shorthair", "tongue out"],
  },
  {
    name: "Jess",
    img: "images/jess.jpg",
    fur: "white",
    eyes: "brown",
    accessories: [],
    other: ["longhair"],
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.jpg",
    fur: "orange",
    eyes: "brown",
    accessories: ["glasses"],
    other: ["longhair"],
  },
  {
    name: "Jon",
    img: "images/jon.jpg",
    fur: "tabby",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Jordan",
    img: "images/jordan.jpg",
    fur: "orange",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["shorthair"],
  },
  {
    name: "Tom",
    img: "images/tom.jpg",
    fur: "mixed color",
    eyes: "blue",
    accessories: ["clothes"],
    other: ["shorthair"],
  },
  {
    name: "Bob",
    img: "images/bob.jpg",
    fur: "tabby",
    eyes: "blue",
    accessories: ["collar"],
    other: ["shorthair"],
  },
  {
    name: "Annie",
    img: "images/annie.jpg",
    fur: "no",
    eyes: "hidden",
    accessories: [],
    other: [],
  },
  {
    name: "Kora",
    img: "images/kora.jpg",
    fur: "tabby",
    eyes: "yellow",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Zoe",
    img: "images/zoe.jpg",
    fur: "grey",
    eyes: "hidden",
    accessories: [],
    other: ["tongue out", "shorthair"],
  },
];

// audio
const sound = new Audio("images/meow.mp3");

// Draw the game board
const generateBoard = () => {
  board.innerHTML = "";
  charactersInPlay.forEach((cat) => {
    board.innerHTML += `
      <div class="card">
        <p>${cat.name}</p>
        <img src=${cat.img} class="board-images" alt=${cat.name}>
        <div class="guess">
          <span>Guess on ${cat.name}?</span>
          <button class="filled-button small" onclick="guess('${cat.name}')">Guess</button>
        </div>
      </div>
    `;
  });
};

const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  return secret;
};

// Create category (optGroup) elements
const categoryArray = Object.keys(CHARACTERS[0]);

//Removed unnecessary categories
categoryArray.splice(categoryArray.indexOf("img"), 1);
categoryArray.splice(categoryArray.indexOf("name"), 1);

const CategoryOptions = () =>
  charactersInPlay.forEach((character) => {
    if (!hairArr.includes(character.fur)) {
      hairArr.push(character.fur);
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

//Creating HTML element OptGroups and Options
const createCategories = () => {
  categoryArray.forEach((category) => {
    questions.innerHTML += `
     <optgroup label="${category}" id="${category}">
        </optgroup>
    `;
    if (category === "fur") {
      hairArr.forEach((hairItem) => {
        document.getElementById(category).innerHTML += `
    <option value="${hairItem}" id="${hairItem}">${hairItem} fur</option>
    `;
        document.getElementById(hairItem).disabled = false;
      });
    } else if (category === "eyes") {
      eyesArr.forEach((eyesItem) => {
        document.getElementById(category).innerHTML += `
    <option value="${eyesItem}" id="${eyesItem}">${eyesItem} eyes</option>
    `;
        document.getElementById(eyesItem).disabled = false;
      });
    } else if (category === "accessories") {
      accessoriesArr.forEach((accessoriesItem) => {
        document.getElementById(category).innerHTML += `
    <option value="${accessoriesItem}" id="${accessoriesItem}">${accessoriesItem}</option>
    `;
        document.getElementById(accessoriesItem).disabled = false;
      });
    } else if (category === "other") {
      otherArr.forEach((otherItem) => {
        document.getElementById(category).innerHTML += `
    <option value="${otherItem}" id="${otherItem}" >${otherItem} </option>
    `;
        document.getElementById(otherItem).disabled = false;
      });
    }
  });
};
//timer
let totalSeconds = 0;
const timerCount = () => {
  // define minutes and seconds variable
  totalSeconds++;
  minutes = Math.floor(totalSeconds / 60);
  seconds = totalSeconds - minutes * 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  timer.innerHTML = `Time: ${minutes}:${seconds}`;
};
setInterval(timerCount, 1000);
//Guess counter
const countGuesses = () => {
  guessCounter++;
  guesses.textContent = `Guesses: ${guessCounter}`;
};
// This function to start (and restart) the game
const start = () => {
  totalSeconds = 0;
  guessCounter = 0;
  guesses.textContent = `Guesses: ${guessCounter}`;
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  CategoryOptions();
  createCategories();
  timerCount();
};

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
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  if (category === "fur" || category === "eyes") {
    if (value === secret.fur || value === secret.eyes) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === "accessories" || category === "other") {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
  generateBoard();
  countGuesses();
  soundOnHover()
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  document.getElementById(value).disabled = true;
  if (category === "accessories" || category === "other") {
    if (keep) {
      alert(`Yes, the cat has ${value}! Keep all cats that have ${value}`);
      charactersInPlay = charactersInPlay.filter((cat) =>
        cat[category].includes(value)
      );
    } else {
      alert(
        `No, the cat doesn't have ${value}! Remove all cats that have ${value}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (cat) => !cat[category].includes(value)
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the cat has ${value} ${category}! Keep all cats with ${value} ${category}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (cat) => cat[category] === value
      );
    } else {
      alert(
        `No, the cat doesn't have ${value} ${category}! Remove all cats with ${value} ${category}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (cat) => cat[category] !== value
      );
    }
  }
};

const guess = (catToConfirm) => {
  if (confirm(`Do you want to confirm ${catToConfirm}?`) === true) {
    checkMyGuess(catToConfirm);
  } else {
  }
};

const checkMyGuess = (catToCheck) => {
  boardWrapper.style.display = "none";
  details.textContent = `${timer.textContent} ${guesses.textContent}`;
  if (catToCheck === secret.name) {
    alert("Match!");
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.textContent = `Hurray! You won!`;
    document.querySelector(".sadcat").style.display = "none";
  } else {
    alert(`Your answer is wrong!`);
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.textContent = `Your answer is wrong! ${secret.name} stole the tuna!`;
    document.querySelector(".happycat").style.display = "none";
  }
};

start();

restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutBtn.addEventListener("click", checkQuestion);

const soundOnHover = () => {
  Array.from(board.children).forEach((card) => {
    card.addEventListener("mouseenter", () => {
      sound.play();
    });
  });
};
  soundOnHover()
