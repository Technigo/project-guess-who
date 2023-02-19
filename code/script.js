// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions"); //dropdown that selects elements
const winOrLose = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const restartButton = document.getElementById("restart");
const playAgainButton = document.getElementById("playAgain");
const findOutbutton = document.getElementById("filter");

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

// Global variables we use throuhout the script
let secret; //will be the secret person object
let currentQuestion; //will be the current question object
let charactersInPlay; //will be an array of all the people left in the game after user "filtered"

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ""; //empty string that makes the board reset when using the function again
  //Detta nedan gör att samma mall med infotext och bild visas för alla karaktärer i arrayen.
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
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]; //charactersInPlay[Math.floor(Math.random(): (<=makes the browser randomly generate one person to be the secret one.) * charactersInPlay.length)]; (<= makes the length of the random-pick not be a higher number than number of characters in the array).
  console.log(secret);
};
// This function is created to start (and restart) the game:
const start = () => {
  charactersInPlay = CHARACTERS; //resets alla characters to the original array
  winOrLose.style.display = "none"; // dont show the win/lose screen
  board.style.display = "flex"; // show the game board again
  setSecret(); // set a new secret person
  generateBoard(); // Here we're setting charactersInPlay array to be all the characters to start with (så att de visas vid laddning av sidan)
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const value = questions.value; //stores the value of the question we selected
  const category = questions.options[questions.selectedIndex].parentNode.label; //parentNode.label stands for the optgroup label (dvs hair or eyes ets.)
  // Här måste vi själva skapa en const function for "värdet/value" för "category" alltså om "hair" är kategori så är värdet "yellow" tex. (DONE)

  // This variable stores what option group (category) the question belongs to.
  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button. Denna function assigns resultatet av jämförelsen mellan "currentQuestion.value" och "secret[currentQuestion.attribute]" till variabeln "keep". ALltså de gubbar vi vill behålla baserat på val.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  keep = false; // if this line of code is not included, then get wrong answers when selecting values from grouped categories. E.g. without keep = false,
  // if a character has yellow hair and hidden eyes.  I ask about yellow hair, the alert says yes they have yellow hair. Then I ask if they have green eyes, alert will give me a false yes,
  //because now keep has been changed to true for hair and eyes.

  // below: defining what categories and values to keep
  // we need to define the two else if conditionals here, values and attributes + arrays
  // here defining keep, what it means. Telling the browser what keep means
  if (category === "hair" || category === "eyes") {
    // each object property has one value
    // arrays below! where each object property has an array of values
  } else if (category === "accessories" || category === "other") {
    // need to be defined differently than hair and eyes
  }
};

// here using the keep variable set up above. This will be used to by const filterCharacters filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
    }
  } else if (category === "other") {
    // Similar to the one above
  } else {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Remove all people that wears ${value}`
      );
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      alert(
        `No, the person does not have ${value} hair! Remove all ${value} hair people!`
      );
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  //For hair and eyes
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value)
    );
  } else {
    charactersInPlay = charactersInPlay.filter(
      (person) => !person[category].includes(value)
    );
  }
  //for accessories and other:

  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const userConfirm = confirm(
    `Are you sure you want to guess on ${personToConfirm}?`
  );

  if (userConfirm) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret) {
    winOrLoseText.innerHTML = `You guessed RIGHT! Well played!!`;
  } else {
    winOrLoseText.innerHTML = `Oh no! You guessed wrong. Game over! <span role="img" aria-label="angry">😤</span>`;
  }
  winOrLose.style.display = "flex";
  board.style.display = "none";
};

// 1. Check if the personToCheck is the same as the secret person's name
// 2. Set a Message to show in the win or lose section accordingly
// 3. Show the win or lose section
// 4. Hide the game board
// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutbutton.addEventListener("click", () => {
  checkQuestion();
  filterCharacters();
});
