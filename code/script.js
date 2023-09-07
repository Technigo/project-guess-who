// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const playAgainButton = document.getElementById("playAgain");
const filter = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText"); // Behövs denna???
const counter = document.getElementById("counter");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Amanda",
    img: "images/amanda.png",
    hair: "blonde",
    eyes: "hidden",
    accessories: ["earrings"],
    other: ["hat"],
  },
  {
    name: "Lily",
    img: "images/lily.png",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Elsa",
    img: "images/elsa.png",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Tina",
    img: "images/tina.png",
    hair: "black",
    eyes: "brown",
    accessories: ["earrings"],
    other: [],
  },
  {
    name: "Anna",
    img: "images/anna.png",
    hair: "hidden",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Belle",
    img: "images/belle.png",
    hair: "black",
    eyes: "hidden",
    accessories: ["earrings"],
    other: ["hat"],
  },
  {
    name: "Bob",
    img: "images/bob.png",
    hair: "red",
    eyes: "green",
    accessories: [],
    other: ["hat"],
  },
  {
    name: "Charlie",
    img: "images/charlie.png",
    hair: "blonde",
    eyes: "hidden",
    accessories: ["glasses", "tie"],
    other: [],
  },
  {
    name: "Christina",
    img: "images/christina.png",
    hair: "blonde",
    eyes: "green",
    accessories: [""],
    other: [],
  },

  {
    name: "Daisy",
    img: "images/daisy.png",
    hair: "blonde",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Daniel",
    img: "images/daniel.png",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Dave",
    img: "images/dave.png",
    hair: "hidden",
    eyes: "green",
    accessories: ["glasses"],
    other: ["hat"],
  },
  {
    name: "Emma",
    img: "images/emma.png",
    hair: "red",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Hailey",
    img: "images/hailey.png",
    hair: "brown",
    eyes: "hidden",
    accessories: [],
    other: [],
  },
  {
    name: "Hanna",
    img: "images/hanna.png",
    hair: "red",
    eyes: "blue",
    accessories: [],
    other: [],
  },
  {
    name: "Hilary",
    img: "images/hilary.png",
    hair: "black",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Karen",
    img: "images/karen.png",
    hair: "red",
    eyes: "blue",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Kim",
    img: "images/kim.png",
    hair: "black",
    eyes: "brown",
    accessories: ["earrings"],
    other: [],
  },
  {
    name: "Nina",
    img: "images/nina.png",
    hair: "black",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Sam",
    img: "images/sam.png",
    hair: "black",
    eyes: "hidden",
    accessories: [],
    other: [],
  },
  {
    name: "Steve",
    img: "images/steve.png",
    hair: "blonde",
    eyes: "brown",
    accessories: ["tie"],
    other: ["hat"],
  },
  {
    name: "Tiffany",
    img: "images/tiffany.png",
    hair: "blonde",
    eyes: "green",
    accessories: ["glasses", "earrings"],
    other: [],
  },
  {
    name: "Tom",
    img: "images/tom.png",
    hair: "brown",
    eyes: "green",
    accessories: ["tie"],
    other: [],
  },
  {
    name: "Adam",
    img: "images/adam.png",
    hair: "brown",
    eyes: "brown",
    accessories: ["glasses"],
    other: [],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let personToConfirm;
let numberOfGuesses = 7;

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
  // if Math.random return 1 we would try to get an index that does not exists
  // on the array, therefore if secret is undefined we will rerun the function to
  // try again.
  if (secret === undefined) {
    setSecret();
  }
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  winOrLose.style.display = "none";
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  selectQuestion();
  console.log(secret);

  // What else should happen when we start the game?
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (event) => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;
  console.log(category, value);
  console.log(event);
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // category = hair
  // value = yellow

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

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
  // keep = true;
  // if (category === "hair" || category === "eyes") {
  //   keep = secret[category] === value;
  // } else if (category === "accessories" || category === "other") {
  //   keep = secret[category] === value;
  // } else {
  // }

  // filterCharacters(keep);
  // console.log(keep);
};

// if(currentQuestion === Secret)?????? = keep????

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

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  // for hair and eyes :
  // charactersInPlay = charactersInPlay.filter(
  //   (person) => person[category] === value
  // );

  // charactersInPlay = charactersInPlay.filter(
  //   (person) => person[category] !== value
  // );

  // for accessories and other
  // charactersInPlay = charactersInPlay.filter((person) =>
  //   person[category].includes(value)
  // );

  // charactersInPlay = charactersInPlay.filter(
  //   (person) => !person[category].includes(value)
  // );

  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(`Are you sure you want to guess?`);
  if (confirmGuess) checkMyGuess(personToConfirm);
};

// If you confirm, this function is invoked
const checkMyGuess = (suspectCharacter) => {
  if (suspectCharacter === secret.name) {
    winOrLoseText.innerHTML = `You won! Congratulations!`;
  } else {
    personToConfirm !== secret.name;
    winOrLoseText.innerHTML = `Sorry you lost...`;
  }
  winOrLose.style.display = "flex";
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners

restartButton.addEventListener("click", start);
playAgainButton.addEventListener("click", start);
filter.addEventListener("click", checkQuestion);
// lyssnar på change-eventet hos/på select elementet(questions)
questions.addEventListener("change", selectQuestion);

// -------count down------// glöm inte Stop,annars fortsätter timern
// const countDown = document.getElementById("countdown");
// const startingMinutes = 5;
// let time = startingMinutes * 60;

// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   countDown.innerHTML = `0${minutes}:${seconds}`;
//   time--;
// }
// setInterval(updateCountdown, 1000);
