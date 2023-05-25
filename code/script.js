// Ylva - All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
// const findOutButton = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const winOrLoseSection = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");
const filter = document.getElementById("filter");
const secretImageAtCheck = document.getElementById("secretImage");
const guessesRemaining = document.getElementById("guessesRemaining");
//const numberOfQuestionsAllowed = document.getElementById("numberOfQuestions");
const gameTimer = document.getElementById("timer");

// Guess form elements
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");

// Game status element
const gameStatus = document.getElementById("game-status");

// Ylva - Array with all the characters, as objects
// document.addEventListener("DOMContentLoaded", function() {
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
    hair: "blonde",
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
    hair: "blonde",
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
    hair: "blonde",
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
    hair: "blonde",
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
let charactersInPlay; //the array of characters in the game-remaining characters
let guessedCharacter;
let numberOfQuestions; //number of questions allowed
// let timeLeft; //time left in the timer
// let timerCountdown; //countdown timer
// let playerName; //the user's name in the game


// Draw the game board - Technigo version
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

//this randomly choses the secret person on the board for the game
 const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  if (secret === undefined) {
    setSecret();
  }
 };

 const start = () => {
  winOrLoseSection.style.display = "none";
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  // selectQuestion();
 console.log(secret);
};

const selectQuestion = (event) => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;
  console.log(category, value);
  console.log(event);

  currentQuestion = {
    category: category,
    value: value,
  };
};

const checkQuestion = () => {
  const { category, value } = currentQuestion;
  keep = true;

  if (category === "hair" || category === "eyes") {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === "accessories" || category === "other") {
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

  console.log("filterCharacters", category, value);
  // Show the correct alert message for different categories
  if (category === "accessories") {
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
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, the person wear a ${value}! Keep all people that wear ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else {
    if (category === "hair") {
      if (keep) {
        alert(
          `Yes, the person hair is ${value}! Keep all people that has ${value} hair.`
        );
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value
        );
      } else {
        alert(
          `No, the person hair is not ${value}! Remove all people that has ${value} hair.`
        );
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value
        );
      }
    } else if (category === "eyes") {
      console.log(category, keep);
      if (keep) {
        alert(
          `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes.`
        );
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value
        );
      } else {
        alert(
          `No, the person has not ${value} eyes! Remove all people that has ${value} eyes.`
        );
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value
        );
      }
    }
  }

    // Invoke a function to redraw the board with the remaining people.
    generateBoard();
  };

    // When clicking guess, the player first have to confirm that they want to make a guess.
    const guess = (guessedCharacter) => {
      const confirmed = confirm(`Are you sure you want to guess on ${guessedCharacter}?`);
      if (confirmed) checkMyGuess(guessedCharacter);
    };
    
    // If you confirm, this function is called - if not, nothing happens.
    const checkMyGuess = (suspect) => {
      if (suspect === secret.name) {
        winOrLoseText.innerHTML = `You win! 🎉`
      } else {
        winOrLoseText.innerHTML = `Sorry, that's wrong. 😭`
      }
      winOrLoseSection.style.display = "flex";
    };

    // Invokes the start function when website is loaded
    start();
    
    // Add event listeners to the buttons
    questions.addEventListener("change", selectQuestion);
    
    // questions.addEventListener('change', () => {
    //   currentQuestion = questions.value
    // })
    
    findOutBtn.addEventListener('click', checkQuestion)
    
    playAgainBtn.addEventListener('click', () => {
      location.reload()
    })
    
    document.querySelectorAll('.character').forEach(character => {
      character.addEventListener('click', () => {
        guess(character.getAttribute('data-character'))
      })
    })
    





    // // Update game status
// function updateGameStatus() {
//   const remainingText = `Remaining characters: ${remainingCharacters.length}`;
//   const guessedText = `Guessed characters: ${guessedCharacters.length}`;
//   gameStatus.innerHTML = `${remainingText}<br>`


// }
    


      // Disable all buttons
   //   disableButtons(true)

    
    // Disable or enable the buttons
    // const disableButtons = (disable) => {
    //   if (disable) {
    //     questionsBtn.disabled = true
    //     findOutBtn.disabled = true
    //     playAgainBtn.disabled = false
    //   } else {
    //     questionsBtn.disabled = false
    //     findOutBtn.disabled = false
    //     playAgainBtn.disabled = true
    //   }
    // }
    