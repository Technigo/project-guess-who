// Ylva - All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const winOrLoseSection = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");
const secretImageAtCheck = document.getElementById("secretImage");
const numberOfQuestionsAllowed = document.getElementById("numberOfQuestions");
const gameTimer = document.getElementById("timer");

// Ylva - Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: ["smoker"]
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: ["active"]
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    accessories: ["hat"],
    other: ["non-smoker"]
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: []
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hair: "yellow",
    eyes: "green",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "James",
    img: "images/james.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["active"]
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["smoker"]
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: ["smoker"]
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["non-smoker"]
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses", "hat"],
    other: ["smoker"]
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: ["active"]
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "hat"],
    other: ["smoker"]
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    accessories: ["hat"],
    other: ["non-smoker"]
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: ["active"]
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: []
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hair: "black",
    eyes: "blue",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: ["active"]
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    accessories: [],
    other: []
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hair: "yellow",
    eyes: "green",
    accessories: [],
    other: []
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hair: "black",
    eyes: "green",
    accessories: [],
    other: ["non-smoker"]
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses", "hat"],
    other: ["active"]
  },
];

// Ylva - here are all the Global variables declared
let secret; //this is the secret person
let currentQuestion; //current question object
let charactersInPlay; //the array of characters in the game
let numberOfQuestions; //number of questions allowed
let timeLeft; //time left in the timer
let timerCountdown; //countdown timer
let playerName; //the user's name in the game

// Ylva - might add sound effects here if I have time later

// Ylva - Function for the timer function (to show double digits)
const paddedNumber = (number, length) => {
  let str = number + "";
  while (str.length < length) str = "0" + str;
  return str;
};
// countdown- function and reset for the timer
const resetTimer = () => {
  timeLeft = 240;
  //timeLeft = 120; //2-minutes countdown for game - might make this longer

  countDown = setInterval(() => {
    if (timeLeft <= 0) {
    clearInterval(countDown);
    winOrLoseText.innerHTML = `<p>Game Over</p>`;
    winOrLose.style.display = "flex";
  } else {
    //showing the time left in minutes and seconds instead of default settings
    let minutes = Math.floor(timeLeft / 60) % 60;
    let seconds = timeLeft % 60;
    gameTimer.innerHTML = paddedNumber(minutes, 2) + ":" + paddedNumber(seconds, 2) + " - time left";
  }
  timeLeft -= 1;
  }, 1000);
};

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

// Ylva - Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};
console.log(setSecret);

// Ylva - This function to start (and restart) the game - this also creates an array called charactersInPlay to be iterated
//through later, generates the cards of the characters and sets the secret character.
// This function also clears the RightOrWrongSection after winning or losing the "Guess who? in the game
const start = () => {
  //This shows the first option as selected in the dropdown-menu
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  console.log("The secret person is",secret.name); // - the secret person works - YEY!
  
  board.style.display = "flex"; //added - this doesn't look that nice though - need to change but don't know how
  questions.value = "";
  secretImageAtCheck.innerHTML = "";
  
  //resetting the questions allowed
  
  numberOfQuestions = 3;
   //resetting the timer
  resetTimer();
  //resetting the div with questions and makes it visible once again
  questions.style.display = "block";
  document.getElementById("filter").style.display = "block";
  document.getElementById("mainQuestion").innerText = "Does the person have...";
  //resetting the player's name in game
  document.getElementById("nameInput").value = "";
  
  // Ylva - Resets the counter of questions allowed
numberOfQuestionsAllowed.innerText = `You have 3 questions left`;

//winOrLose.innerText += ` `;

  // Here we're setting charactersInPlay array to be all the characters to start with
  // charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
};
// Ylva - setting the currentQuestion object when you select something in the dropdown - "Does the person have..."
const selectQuestion = () => {
  // The category variable is used to store what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // Ylva - this is a variable that stores the actual value of the question we've selected.
  const value = questions.value;
  // this above could also be written as:
  // const value = questions.options[questions.selectedIndex].value;

  // Ylva - This below is variables that stores the actual value of the current questions we've selected.
  currentQuestion = {
  category: category,
  value: value,
  };

 // Ylva - to check the values of the currentQuestion object
console.log(currentQuestion);
};

const playerNameSave = () => {
playerName = document.getElementById("nameInput").value;
console.log(playerName);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
//if-statement limits the number of questions allowed to 3 questions in total
  if (numberOfQuestions > 0) {
    console.log(numberOfQuestions);
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that (true or false)
  // Then invoke filterCharacters
  if (category === "Hair" || category === "Eyes") {
   if (secret[category] === value) {
    filterCharacters(true); //keep everyone with true according to hair/eye color
   } else {
   filterCharacters(); //remove everyone with false according to hair/eye color
   }
  } else if (category === "Accessories" || category === "Other") {
if (secret[category].includes(value)) {
filterCharacters(true); //keep everyone with true according to accessories/other
} else {
  filterCharacters(); //remove everyone with false according to accessories/other
  }
}
//don't know if there's something wrong here with the curly brackets above - still to check
numberOfQuestions--;
    console.log(numberOfQuestions);
    numberOfQuestionsAllowed.innerText = `Number of questions left: ${numberOfQuestions}`;
  } else if ((numberOfQuestions === 1)) {
    if (category === "Hair" || category === "Eyes") {
      if (secret[category] === value) {
        filterCharacters(true); // Keep everyone with that hair/eye colour
      } else {
        filterCharacters(); // Remove everyone with that hair/eye colour
      }
    } else if (category === "Accessories" || category === "Other") {
      if (secret[category].includes(value)) {
        filterCharacters(true);
      } else {
        filterCharacters();
      }
    }
numberOfQuestionsAllowed.innerText = `You have 0 questions left`;
questions.style.display = "none";
document.getElementById("filter").style.display = "none";
document.getElementById('mainQuestion').innerText = 
"Now it's time to make a guess!";
//adds +1 to the counter of questions allowed
//Make the counter for number of guesses/questions from the player
//counter++;
//Nr of questions allowed should be 3 - but I can't make that work now
//NrOfQuestionsLimit();
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories, to keep or remove - based on the value of keep.

  if (category === "Accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        !person[category].includes(value)
      );
    }
  } else if (category === "Other") {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      // Similar to the one above
  } else {
    alert(
      `No, the person is not a ${value}! Remove all people that are ${value}s`
    );
    charactersInPlay = charactersInPlay.filter(
      (person) => !person[category].includes(value)
    );
  }
} else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
  }

  // this line of code below is from Tuesdays Live Session - don't yet know where to put it or how to use it
  // this is an example of a callback function - ((function) => {})
  //const filteredCharacters = CHARACTERS.filter((singleCharacter) => {
    // if (singleCharacter.hair === "black") {
    // return singleCharacter;
// }
// });
// console.log(filteredCharacters);


  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
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

// Ylva - when clicking guess, the player first have to confirm that they want to make a guess.
// If the user confirms the guess, the game will start and the checkMyGuess function will be invoked.

const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
const playersGuess = confirm(`Do you want to guess ${personToConfirm}?`);
  // remember the confirm() ?

  // If the player wants to guess, invoke the checkMyGuess function.
if (playersGuess) {
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
    // winningSound.play(); - might add sound here if time
    winOrLoseText.innerText = `That's correct ${playerName}! The person is indeed ${secret.name}`;
    secretImageAtCheck.innerHTML += `<img src=${secret.img} alt=${secret.name}>`;
  } else {
    // losingSound.play(); - might add a sound here if time
    winOrLoseText.innerText = `You lost ${playerName}! It is not ${personToCheck}. The person is ${secret.name}`;
    // winOrLoseSection.innerHTML += `
    //     <img src=${secret.img} alt=${secret.name}>
    // `;
    secretImageAtCheck.innerHTML += `<img src=${secret.img} alt=${secret.name}>`;
  }
  winOrLoseSection.style.display = "flex";
};

const numberOfQuestionsLimit = () => {
  winOrLoseSection.style.display = "flex";
  //losingSound.play();
  winOrLoseText.innerText = `You lost! It is not ${personToCheck}. The person is ${secret.name}`;
};
// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", start);
findOutButton.addEventListener("click", playerNameSave);