// All the DOM selectors stored as short variables.
const board = document.getElementById("board")
const questions = document.getElementById("questions")
const filterButton = document.getElementById("filter")
const winOrLose = document.getElementById('winOrLose') 
const winOrLoseText = document.getElementById('winOrLoseText') 
const restartButton = document.getElementById("restart")
const playAgainButton = document.getElementById('playAgain')

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
    hair: "blonde",
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
    hair: "blonde",
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
    hair: "blonde",
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
    hair: "blonde",
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

// Global variables – will let you know how later on.
let secret; // Will be the secret person object.
let currentQuestion; // Will be the current question object.
let charactersInPlay; // Will be an arry of all people left in the game.

// Draw the game board.
const generateBoard = () => {
  board.innerHTML = ''; // When you restart, the innerhtml clears.
  charactersInPlay.forEach((person) => {
    // To display each person, looping. Adding html to board wrapper.
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
  console.log(generateBoard)
}

// Randomly select a person from the characters array and set as the value of the variable called secret.
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Setting the currentQuestion object when you select something in the dropdown. A function that needs to be invoked by adding an eventListener.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label //Question = an id. The category has been defined.
  // This variable stores what option group (category) the question belongs to.
  //if === hair // global variable
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;
  // console.log("qqq", value)
  // If we don't change the dropdown, the category and value (category + value) haven't been declared = can't be used = error in console.
  //selectQuestion = the eventListener is listening to the change in category calling the selectQuestion function.

  if (category === 'hair') {
    currentQuestion = {
      category: 'hair',
      value: value
    }
  } else if (category === 'eyes') {
    currentQuestion = {
      category: 'eyes',
      value: value
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      category: 'accessories',
      value: value
    }
  } else {
    currentQuestion = {
      category: 'other',
      value: value
    }
  }
}

  // An object that stores the key and the key's value. This turns into if else, the whole conditional.
  // currentQuestion = {
  //   category: category // features
  //   value: value // colour
  // };

  // At first, the selectQuestion declares category and value.
  // Then it prepares data to be compared. Not yet doing anything w/ currentData.
  // If you have selected category eyes, this is what CurrentQuestion (a GLOBAL variable) means. We're not re-declaring it, we-re redefining it.

//   console.log(
//     "new dropdown item has been selected",
//     `category: ${category}`,
//     `value: ${value}`
//   );
// };

// This function should be invoked when you click on 'Find Out' button. Called by an eventListener, the Find Out button. A filter.
const checkQuestion = () => {
  const { category, value } = currentQuestion; // Destructs the currentQuestion object to be able to use these variables more easily.
  if (category === 'eyes') {
    if (value === secret.eyes) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  } else if (category === 'hair') {
    if (value === secret.hair) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  }
}  
  // If you've asked whether the secret person has glasses, it checks weather it does.
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that.
  // Then invoke filterCharacters.
  // keep = false; // If this line of code is not included, then we'll get wrong answers when selecting values from grouped categories. eg. without keep = false.
  // If a character has yellow hair and hidden eyes, I ask about yellow hair, the alert says yes they have yellow hair. Then I ask if they have green eyes, alert will give me a false yes, because now keep has been changed to true for hair and eyes.

  // Below: defining what categories and values to keep.
  // We need to define the two else if conditionals here, values and attributes + arrays.
  // Here defining keep, what it means. Telling the browser what keep means.
  // if (category === "hair" || category === "eyes") { // Each object property has one value.
  // Arrays below, where each object property has an array of values.
  // } else if (category === "accessories" || category === "other") { // need to be defined differently than hair and eyes.
  // }

  // Invoking the function filterCharacters with the varible keep.
//   filterCharacters(keep);
// };

// const keep = currentQuestion.value === secret[currentQuestion.category && value]
// category === "accessories" && value === secret[currentQuestion.category].includes(currentQuestion.value)

// Here using the keep variable set up above.
// It'll filter the characters array and redraw the game board.

const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories.
  // Add a filter to keep or remove. Array method .filter
  if (category === "accessories") {
    if (keep) {
      // console.log("xxx", category);
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
  }
  
  else if (category === "other") {
    // Similar to the one above.
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      // Alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair".
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that ${value}s`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      // Alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair".
    }
  }

  else {
    if (keep) {
    alert (
      `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
  } else {
    alert (
      `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
  }
}

  // Now get the removal function to work.
  // Determine what is the category.
  // Filter by category to keep or remove based on the keep variable.
  // Below starts filtering the board.

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
  generateBoard()
}

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // Store the interaction from the player in a variable.
  // Remember the confirm() ?
  const makeAGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`) 
  if (makeAGuess === true) {
    checkMyGuess(personToConfirm)
  }
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked.
const checkMyGuess = (personToCheck) => {
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
  // 1. Check if the personToCheck is the same as the secret person's name.
  // 2. Set a Message to show in the win or lose section accordingly.
  // 3. Show the win or lose section.
  // 4. Hide the game board.
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Congrats! You guessed it 👍`
  } else {
    winOrLoseText.innerHTML = `Oh no, that's not right. Would you like to play again?`
  }
}

// Here we start to fill up the board.
// This function, "start", to start (and restart) the game. Here we call other functions.
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with. Change the value of the variable charactersInPlay to CHARACTERS. Holds the value of the whole array.
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  charactersInPlay = CHARACTERS; // fetches ALL characters.
  // Call the generate board to make the board visible.
  // What else should happen when we start the game?
  // The values are global – work wherever.
  generateBoard(); // "Awakens" the board = calling the function. Later, this function will fetch the filtered characters. Generating new arrays rather than deleting characters – the filteredCharacters variable's parameter/argument.
  setSecret();
  console.log("yyy", secret.name);
  selectQuestion();
};

// Invokes the start function when website is loaded.
start();

// All the event listeners in the html files.
restartButton.addEventListener("click", start) // Listening for button.
questions.addEventListener("change", selectQuestion) // Dropdwon menu asking questions, listening to questions. The event is on questions, and the Listener is calling the selectQuestions which is a function that needs to be populated.
filterButton.addEventListener("click", checkQuestion) // Find out Button
  // findOutButton.addEventListener("click", () => {
  // Paranthesis and arrow invoke another happening.
  // checkQuestion();
  playAgainButton.addEventListener('click', start)
  // Eventlisteners can be in the bottom if it works all the time.
  // Put in function, call it once.