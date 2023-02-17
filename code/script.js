// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const boardWrapper = document.querySelector(".board-wrapper");
const winOrLoseWrapper = document.querySelector(".win-or-lose-wrapper");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutBtn = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Charlie",
    img: "images/charlie.jpg",
    hair: "beige tabby",
    eyes: "hidden",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Ricky",
    img: "images/ricky.jpg",
    hair: "black and white",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Jacques",
    img: "images/jacques.png",
    hair: "black",
    eyes: "yellow",
    accessories: [],
    other: ["shorthair", "tongue out"],
  },
  {
    name: "Peter",
    img: "images/peter.jpg",
    hair: "brown tabby",
    eyes: "yellow",
    accessories: ["collar"],
    other: ["longhair"],
  },
  {
    name: "Jake",
    img: "images/jake.jpg",
    hair: "brown tabby",
    eyes: "green",
    accessories: ["collar"],
    other: [],
  },
  {
    name: "Jana",
    img: "images/jana.jpg",
    hair: "calico",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Rufus",
    img: "images/rufus.jpg",
    hair: "grey",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.jpg",
    hair: "grey",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["shorthair"],
  },

  {
    name: "Martin",
    img: "images/martin.jpg",
    hair: "orange",
    eyes: "yellow",
    accessories: ["clothes"],
    other: ["shorthair"],
  },
  {
    name: "Oliver",
    img: "images/oliver.jpg",
    hair: "orange",
    eyes: "brown",
    accessories: [],
    other: ["longhair"],
  },
  {
    name: "Rocky",
    img: "images/rocky.jpg",
    hair: "orange",
    eyes: "hidden",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Mollie",
    img: "images/mollie.jpg",
    hair: "white",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Andy",
    img: "images/andy.jpg",
    hair: "orange and white",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Mandy",
    img: "images/mandy.jpg",
    hair: "white and beige",
    eyes: "blue",
    accessories: ["collar"],
    other: ["longhair"],
  },
  {
    name: "Jerry",
    img: "images/jerry.jpg",
    hair: "white and brown",
    eyes: "green",
    accessories: ["collar"],
    other: ["shorthair", "tongue out"],
  },
  {
    name: "Jess",
    img: "images/jess.jpg",
    hair: "white",
    eyes: "brown",
    accessories: [],
    other: ["longhair"],
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.jpg",
    hair: "orange",
    eyes: "brown",
    accessories: ["glasses"],
    other: ["longhair"],
  },
  {
    name: "Jon",
    img: "images/jon.jpg",
    hair: "brown tabby",
    eyes: "green",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Jordan",
    img: "images/jordan.jpg",
    hair: "orange",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["shorthair"],
  },
  {
    name: "Tom",
    img: "images/tom.jpg",
    hair: "white brown",
    eyes: "blue",
    accessories: ["clothes"],
    other: ["shorthair"],
  },
  {
    name: "Bob",
    img: "images/bob.jpg",
    hair: "brown tabby",
    eyes: "blue",
    accessories: ["collar"],
    other: ["shorthair"],
  },
  {
    name: "Annie",
    img: "images/annie.jpg",
    hair: "no",
    eyes: "hidden",
    accessories: [],
    other: ["naked"],
  },
  {
    name: "Kora",
    img: "images/kora.jpg",
    hair: "white and grey tabby",
    eyes: "yellow",
    accessories: [],
    other: ["shorthair"],
  },
  {
    name: "Zoe",
    img: "images/zoe.jpg",
    hair: "grey",
    eyes: "hidden",
    accessories: [],
    other: ["tongue out", "shorthair"],
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
        <img src=${person.img} class="board-images" alt=${person.name}>
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
  charactersInPlay.forEach((character) => {
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
    <option value="${hairItem}" id="${hairItem}">${hairItem} fur</option>
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
  generateBoard();
  setSecret();
  CategoryOptions();
  createCategories();
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
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories

  if (category === "accessories" || category === "other") {
    if (keep) {
      alert(`Yes, the cat wears ${value}! Keep all cats that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      generateBoard();
    } else {
      alert(
        `No, the cat doesn't wear ${value}! Remove all cats that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      generateBoard();
    }
  } else {
    if (keep) {
      alert(`Yes, the cat has  ${value}! Keep all cats with ${value}`);
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
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.textContent = "Hurray! You won! Do you want to play again?";
    document.querySelector(".sadcat").style.display = "none";
  } else {
    alert(`Your answer is wrong!`);
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.textContent = `Your answer is wrong! The correct solution was ${secret.name}! Play again?`;
    document.querySelector(".happycat").style.display = "none";
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
