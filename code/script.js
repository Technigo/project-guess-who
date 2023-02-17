// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const findOutButton = document.getElementById("filter");
const restartButton = document.getElementById("restart");

// Array with all the characters, as objects.
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden", // single value
    eyes: "hidden",
    accessories: ["glasses", "hat"], // arrays – access data differnetly from value
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

// Global variables – will let you know how later
let secret; // Will be the secret person object
let currentQuestion; // Will be the current question object
let charactersInPlay; // Will be an arry of all people left in the game

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ""; // 237 when you restart, it clears it innerhtml. The board.
  charactersInPlay.forEach((person) => {
    // To display each person, looping. //adding html to board wrapper.
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

// Here we start to fill up the board
// This function to start (and restart) the game
const start = () => {
  //funktion - i vilken vi kallar andra funktionre. När man väcker
  // Here we're setting charactersInPlay array to be all the characters to start with. Change the value of variable charactersInPlay to CHARCTERS. Holds the value of the whole array.
  charactersInPlay = CHARACTERS; // hämtar ALLA karaktärerna
  // call the generate board to make spelplanen visible
  // What else should happen when we start the game?
  // The values are global – work wherever
  generateBoard(); // väcker den = calling the function // later, this function will fetch the filtered characters. Generating new arrays rather than deleting characters. The filteredCharacters variable parameter/argument
  setSecret();
  console.log("yyy", secret.name);
};

// setting the currentQuestion object when you select something in the dropdown
// a function that needs to be invoked by adding an eventListener
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; //question är id. category has been defined
  // This variable stores what option group (category) the question belongs to.
  //if === hair // global variable

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;
  console.log("qqq", value)

  // if we don't change the dropdown, the category and value (category + value) hAVEN'T BEEN DEClared = can't be used = error in console
  //selectQuestion = the eventKistener is listening to the change in category calling the selectQuestion function

  // This turns into if else, the whole conditional
  currentQuestion = {
    category: category,
    value: value,
  };

  // 1st selectQ declares cat and value
  // 2nd it prepares data to be compared. Not yet doing anything w/ currentData
  // if U have selected category eyes, this is what CurrentQuestion (GLOBAL) means. We're not re-declaring it, we-re redefining it

  console.log(
    "new dropdown item has been selected",
    `category: ${category}`,
    `value: ${value}`
  );
};

// This function should be invoked when you click on 'Find Out' button. Called by an eventListener. Find Out button!! ett filter
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // If you've asked wetjer the secret person has glasses, it checks weather it does

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

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

  // Invoking the function filterCharacters with the varible keep
  filterCharacters(keep);
};

// here using the keep variable set up above
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      console.log("xxx", category);
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
        `No, the person is not a ${value}! Remove all people that wears ${value}`
      );
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
  }

  // now get removal function to work
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  //below starts filtering the board

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
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners //in the html files
restartButton.addEventListener("click", start); // listening for button
questions.addEventListener("change", selectQuestion); //dropdwon menu asking questions, listening to questions. The event is on questions, and the Listener is calling the selectQuestions which is a function that needs to be populated
findOutButton.addEventListener("click", () => {
  // paranthesis and arrow invoke another happening
  checkQuestion();
  filterCharacters();
});
//Eventlisteners can be in the bottom if it works all the time

// Put in function, call it once =
