document.addEventListener("DOMContentLoaded", () => {
  // All the DOM selectors stored as short variables
  const board = document.getElementById("board");
  const questions = document.getElementById("questions");
  const restartButton = document.getElementById("restart");
  const findOut = document.getElementById("filter");
  const playAgain = document.getElementById("playAgain");

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
      other: ["beard"],
    },
    {
      name: "Jacques",
      img: "images/jacques.svg",
      hair: "grey",
      eyes: "blue",
      accessories: ["hat"],
      other: ["smoker", "beard"],
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
      other: ["smoker", "beard"],
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
      other: ["beard"],
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

  // This function to start (and restart) the game
  const start = () => {
    // Here we're setting charactersInPlay array to be all the characters to start with
    charactersInPlay = CHARACTERS;
    generateBoard();
    setSecret();
    console.log("The secret person is", secret.name); // Shows the randomly chosen secret character
  };

  // setting the currentQuestion object when you select something in the dropdown
  const selectQuestion = () => {
    const category =
      questions.options[questions.selectedIndex].parentNode.label; // This variable stores what option group (category) the question belongs to.
    const value = questions.options[questions.selectedIndex].value; // Could be written as: const value = questions.value;

    currentQuestion = {
      category: category,
      value: value,
    };
    console.log("Question selected", currentQuestion); // Shows what question the player choose.
  };

  // This function should be invoked when you click on 'Find Out' button.
  const checkQuestion = () => {
    const { category, value } = currentQuestion;
    console.log("Guess on", category, value);
    console.log("This is", secret[category].includes(value));
    let keep = false;
    if (category === "hair" || category === "eyes") {
      if (value === secret[category]) {
        keep = true;
      }
    } /* else if (category === "eyes") {
      if (value === secret.eyes) {
        keep = true;
      } */ else if (category === "accessories" || category === "other") {
      if (secret[category].includes(value)) {
        keep = true;
      }
      /* } else if (category === "other") {
      if (secret.other.includes(value)) {
        keep = true;
      } */
    }
    filterCharacters(keep);
  };
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  // It'll filter the characters array and redraw the game board.
  const filterCharacters = (keep) => {
    console.log("Filtering");
    const { category, value } = currentQuestion;
    // Hair filter
    if (category === "hair") {
      if (keep) {
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value
        );
        alert(
          `Yes, the person has ${value} hair! Keep all people that has ${value} hair`
        );
      } else {
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value
        );
        alert(
          `No, the person doesn't have ${value} hair! Remove all people that has ${value} hair`
        );
      }
    }
    // Eyes filter
    else if (category === "eyes") {
      if (keep) {
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value
        );
        alert(
          `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes`
        );
      } else {
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value
        );
        alert(
          `No, the person doesn't have ${value} eyes! Remove all people that has ${value} eyes`
        );
      }
    }
    // Accessories filter
    else if (category === "accessories") {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) =>
          person[category].includes(value)
        );
        alert(
          `Yes, the person wears ${value}! Keep all people that wears ${value}`
        );
      } else {
        charactersInPlay = charactersInPlay.filter(
          (person) => !person[category].includes(value)
        );
        alert(
          `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
        );
      }
    }
    // Other filter
    else if (category === "other") {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) =>
          person[category].includes(value)
        );
        alert(
          `Yes, the person has a ${value}! Keep all people that has a ${value}`
        );
      } else {
        charactersInPlay = charactersInPlay.filter(
          (person) => !person[category].includes(value)
        );
        alert(
          `No, the person is not a ${value}! Remove all people that are a ${value}`
        );
      }
    }
    generateBoard(); // Redraws the board with the remaining people.
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

  // All the event listeners
  restartButton.addEventListener("click", start);
  questions.addEventListener("change", selectQuestion); // could be written "questions.onchange = selectQuestion"
  findOut.addEventListener("click", checkQuestion);
  playAgain.addEventListener("click", start);
});
