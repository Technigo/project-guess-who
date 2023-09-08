// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutBtn = document.getElementById("filter");
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgainbtn = document.getElementById("playAgain");
const pText = document.getElementById("counter");


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
let secret; //will be the secret person object
let currentQuestion; //will be the current question object
let charactersInPlay; //will be an array of all people left in the game
let keep;
let guessCount = 0; //Initialize the counter

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
  //console.log(secret);
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  console.log(category);
  // This variable stores what option group (category) the question belongs to.

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  console.log(value);

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  //array that stores the characters that matches the criteria, when keep is true 
  const matchingCharacters = [];

  //for of loop, chacking which characters of charachertsInPlay should be included (if they matched the conditions)
  for (const character of charactersInPlay) {
    let shouldKeep = false;

    // if hair OR eyes AND characters category equals the choosen value, then ShouldKeep is set to true, indicates that the characters should be kept.
    if ((category === 'hair' || category === 'eyes') && character[category] === value) {
      shouldKeep = true;
    } else if ((category === 'accessories' || category === 'other') && character[category].includes(value)) {
      shouldKeep = true;
    }

    //if keep AND shouldKeep is true OR if keep AND should keep is NOT true, then push characters to matchingCharacters.
    if ((keep && shouldKeep) || (!keep && !shouldKeep)) {

      matchingCharacters.push(character);
    }
  }

  //filter the board
  filterCharacters(keep, matchingCharacters);
};

//if keep is true keep characters, if keep is false remove characters
const filterCharacters = (keep, matchingCharacters) => {
  console.log(keep);
  const { category, value } = currentQuestion;

  // alert a response based on the users guess
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value}`);
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}`);
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is ${value}! Keep all people that are ${value}`);
    } else {
      alert(`No, the person is not ${value}! Remove all people that are ${value}`);
    }
  } else {
    if (keep) {
      alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`);
    } else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`);
    }
  }

  // if hair OR eyes matches the value(keep is true) keep
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      //if not remove
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
    // if character has a value that includes accessories OR other (keep is true) keep
  } else if (category === 'accessories' || category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      //if not remove
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }

  //filter the board
  generateBoard(keep);
};


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  let confirmGuess = confirm
    (`Are you sure you want to guess on ${personToConfirm}?`);

  // If the player wants to guess, invoke the checkMyGuess function.
  if (confirmGuess) {
    checkMyGuess(personToConfirm);
  }
};

// If user wants to guess, invoke response
const checkMyGuess = (personToCheck) => {

  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = ` Congratulation, you guessed right! you're a winner'!`;
  } else {
    winOrLoseText.innerHTML = `No! Wrong guess, game over! `;
  }
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  winOrLose.style.display = "flex";
  // 4. Hide the game board
  board.innerHTML = "";
};

//restart button, asking the user to confirm if restarting
const restart = () => {
  let userConfirmed = confirm(`Are you sure you want to restart?`);
  if (userConfirmed) {
    location.reload();
  }
}


// Invokes the start function when website is loaded
start();

// All the event listeners

questions.addEventListener("change", selectQuestion);
findOutBtn.addEventListener("click", checkQuestion);
restartButton.addEventListener("click", restart)
playAgainbtn.addEventListener("click", () => {
  location.reload();
});