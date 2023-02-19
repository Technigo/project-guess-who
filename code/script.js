// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterButton = document.getElementById("filter");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgain = document.getElementById("playAgain");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "people/jabala.png",
    hair: "grey",
    eyes: "hidden",
    accessories: ["horn"],
    other: [],
    species: "monster",
    gender: "else",
  },
  {
    name: "Jack",
    img: "people/jack.png",
    hair: "pink",
    eyes: "brown",
    accessories: [],
    other: [],
    species: "monster",
    gender: "male",
  },
  {
    name: "Jacques",
    img: "people/jacques.png",
    hair: "hidden",
    eyes: "brown",
    accessories: ["glasses"],
    other: [],
    species: "monster",
    gender: "female",
  },
  {
    name: "Jai",
    img: "people/jai.png",
    hair: "hidden",
    eyes: "blue",
    accessories: ["glasses"],
    other: [],
    species: "monster",
    gender: "female",
  },
  {
    name: "Jake",
    img: "people/jake.png",
    hair: "blue",
    eyes: "brown",
    accessories: ["horn"],
    other: [],
    species: "monster",
    gender: "male",
  },
  {
    name: "James",
    img: "people/james.png",
    hair: "pink",
    eyes: "green",
    accessories: ["horn"],
    other: [],
    species: "monster",
    gender: "male",
  },
  {
    name: "Jana",
    img: "people/jana.png",
    hair: "blue",
    eyes: "green",
    accessories: ["horn"],
    other: [],
    species: "monster",
    gender: "else",
  },
  {
    name: "Jane",
    img: "people/jane.png",
    hair: "yellow",
    eyes: "brown",
    accessories: ["horn"],
    other: [],
    species: "animal",
    gender: "female",
  },
  {
    name: "Jaqueline",
    img: "people/jaqueline.png",
    hair: "hidden",
    eyes: "green",
    accessories: ["horn"],
    other: [],
    species: "monster",
    gender: "female",
  },

  {
    name: "Jazebelle",
    img: "people/jazebelle.png",
    hair: "pink",
    eyes: "green",
    accessories: ["hat"],
    other: [],
    species: "human",
    gender: "female",
  },
  {
    name: "Jean",
    img: "people/jean.png",
    hair: "yellow",
    eyes: "brown",
    accessories: ["horn"],
    other: ["smoker"],
    species: "monster",
    gender: "else",
  },
  {
    name: "Jeane",
    img: "people/jeane.png",
    hair: "white",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: [],
    species: "monster",
    gender: "female",
  },
  {
    name: "Jed",
    img: "people/jed.png",
    hair: "yellow",
    eyes: "brown",
    accessories: ["horn"],
    other: ["smoker"],
    species: "human",
    gender: "male",
  },
  {
    name: "Jenni",
    img: "people/jenni.png",
    hair: "grey",
    eyes: "hidden",
    accessories: [],
    other: ["smoker"],
    species: "animal",
    gender: "female",
  },
  {
    name: "Jeri",
    img: "people/jeri.png",
    hair: "white",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: [],
    species: "animal",
    gender: "else",
  },
  {
    name: "Jerry",
    img: "people/jerry.png",
    hair: "grey",
    eyes: "blue",
    accessories: ["horn"],
    other: ["smoker"],
    species: "monster",
    gender: "male",
  },
  {
    name: "Jess",
    img: "people/jess.png",
    hair: "white",
    eyes: "hidden",
    accessories: ["glasses", "horn"],
    other: [],
    species: "human",
    gender: "female",
  },
  {
    name: "Jocelyn",
    img: "people/jocelyn.png",
    hair: "black",
    eyes: "brown",
    accessories: ["horn"],
    other: [],
    species: "human",
    gender: "female",
  },
  {
    name: "Jon",
    img: "people/jon.png",
    hair: "brown",
    eyes: "green",
    accessories: ["hat"],
    other: [],
    species: "monster",
    gender: "male",
  },
  {
    name: "Jordan",
    img: "people/jordan.png",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses", "horn"],
    other: ["smoker"],
    species: "monster",
    gender: "else",
  },
  {
    name: "Josephine",
    img: "people/josephine.png",
    hair: "white",
    eyes: "brown",
    accessories: [],
    other: [],
    species: "monster",
    gender: "female",
  },
  {
    name: "Josh",
    img: "people/josh.png",
    hair: "yellow",
    eyes: "green",
    accessories: ["hat", "horn", "glasses"],
    other: [],
    species: "human",
    gender: "male",
  },
  {
    name: "Jude",
    img: "people/jude.png",
    hair: "yellow",
    eyes: "brown",
    accessories: ["hat"],
    other: [],
    species: "monster",
    gender: "male",
  },
  {
    name: "Julie",
    img: "people/julie.png",
    hair: "pink",
    eyes: "blue",
    accessories: ["hat", "horn"],
    other: [],
    species: "moster",
    gender: "female",
  },
];

// Global variables
let secret; //object secret person
let currentQuestion; //object current question
let charactersInPlay; // the remaining people

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
          <button class="filled-button small" onclick="guess('${person.name}')">GUESS</button>
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

  generateBoard(); //Should load the characters on the board
  setSecret(); // Generates a new guess-person at start
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value; //This variable stores the value (value!) of the question in the dropdown

  // We also need a variable that stores the actual value of the question we've selected.
  currentQuestion = {
    category: category,
    value: value,
  };
  console.log("Selected Question", currentQuestion);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === "hair" || category === "eyes" || category === "gender") {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else {
    if (secret[category].includes(value)) {
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
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, it wears ${value}! Keep everything that wears ${value}!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, it does not wear ${value}! Remove everything that wears ${value}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, it is a ${value}! Keep everything that is a ${value}!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `Eouh.. noo, it's not a ${value}! Remove everyone that is a ${value}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "gender") {
    if (keep) {
      alert(
        `Yes, it is a ${value}! Keep everything that is a ${value}!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No no is not a ${value}! Remove everything that are a ${value}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
    
  } else if (category === "species") {
    if (keep) {
      alert(
        `Yep it's a ${value}! Keep everything that's a ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `Nope, it's not a ${value}! Let's kill everything that is not ${value}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      alert(
        `Yes, it has ${value} ${category}! Keep everything that have ${value} ${category}!`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(
        `Nope, it does not have ${value} ${category}! Remove everything with ${value} ${category}!`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

/* 
    for hair and eyes : (cannot get attributes to work)
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const confirmGuess = confirm(
    `Are your sure you want to guess on ${personToConfirm}?`
  );
  if (confirmGuess === true) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    winOrLose.style.display = "block";
    winOrLoseText.innerText = `Wow, you are awesome, that's absolutly right! You win!`;
  } else {
    winOrLose.style.display = "block";
    winOrLoseText.innerText = `Oh noes! Totally wrong that! The correct answer is ${secret.name}!`;
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener("click", checkQuestion); //invoking checQuestion to filter with the Find out button
playAgain.addEventListener("click", (event) => {
  start();
  winOrLose.style.display = "none";
});
