// All the DOM selectors stored as short variables

  const board = document.getElementById("board");
  const questions = document.getElementById("questions");
  const restartButton = document.getElementById("restart");
  const findOutButton = document.getElementById('filter');
  const winOrLose = document.getElementById('winOrLose');
  const winOrLoseText = document.getElementById('winOrLoseText');
  const playAgain = document.getElementById('playAgain')
  const guessCounter = document.getElementById('guesses')
  


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
      hair: "pink",
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
      hair: "grey",
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
  let secret;
  let currentQuestion;
  let charactersInPlay;
  let numberOfGuesses = 0;
  
  

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
    charactersInPlay = CHARACTERS; // Here we're setting charactersInPlay array to be all the characters to start with
    winOrLose.style.display = "none";
    generateBoard(); //call/invoke function generateBoard on row 210
    setSecret(); //call/invoke function setSecret on row 227
    console.log("secret:", secret);
  };

  // setting the currentQuestion object when you select something in the dropdown
  const selectQuestion = () => {
    const category =
      questions.options[questions.selectedIndex].parentNode.label;
    //This variable stores what option group (category) the question belongs to.
    const value = questions.value;
    /* const value = questions.value Works too */
    // We also need a variable that stores the actual value of the question we've selected.

    currentQuestion = {
      category: category,
      value: value,
    };

    console.log("question selected:", currentQuestion);
  };

  /* questions.onchange = selectQuestion same as 350 */

  // This function should be invoked when you click on 'Find Out' button.
  const checkQuestion = () => {
    const { category, value } = currentQuestion
  let keep = false
  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      keep = true
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
    keep = true
  }
}
filterCharacters(keep)
}

  // It'll filter the characters array and redraw the game board.
  const filterCharacters = (keep) => {
    const { category, value } = currentQuestion;
    if (category === "hair") {
      if (keep) {
        alert(`Good job! The person really has ${value} hair.`);
      } else {
        alert(`No, the person does not have ${value} hair. A good try though!`);
      }
    } else if (category === "eyes") {
      if (keep) {
        alert(`Did you just say ${value}? Oh yeah! You rock!`);
      } else {
        alert(`No, it wasn't ${value} ${category}. Keep playing!`);
      }
    } else if (category === "accessories") {
      if (keep) {
        alert(
          `Good job! The person really wears ${value}! I will then keep all people that wear ${value}`
        );
      } else {
        alert(
          "No, the person doesn't wear any sort of hair cover! I will then remove all people that do"
        );
      }
    } else {
      if (keep) {
        alert(`Yes, the person is a ${value}! Keep all the ${value}s then.`);
      } else {
        alert(
          `No, the person isn't a ${value}! I am removing all the people that smoke then.`
        );
      }
    }

    /* secret.hair === value
      ? window.alert(`Good job! The person really has ${value} hair.`)
      : window.alert(
          `No, the person does not have ${value} hair. A good try though!`
        ); */

    // Determine what is the category
    // filter by category to keep or remove based on the keep variable.

    if (category === "hair" || category === "eyes") {
      if (keep) {
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value
        );
      } else {
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value
        );
      }
    } else if (category === "accessories" || category === "other") {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) =>
          person[category].includes(value)
        );
      } else {
        charactersInPlay = charactersInPlay.filter(
          (person) => !person[category].includes(value)
        );
      }
    }

    // Invoke a function to redraw the board with the remaining people.
    generateBoard();
  };

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => { 
  const userConfirm = confirm(`Are you sure you want to guess on ${personToConfirm}?`)

  if (userConfirm) {
    checkMyGuess(personToConfirm)
  } 
}

 // If you confirm in the previous step, this function is invoked
 /*
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    let displayWinOrLose = () => {
      document.getElementById('winOrLose').style.display = "flex"; // this displays the winOrLose wrapper
      winOrLoseText.innerHTML = `Hurray! You win! ${personToCheck} was correct!`
    }
      board.innerHTML ='' // this cleared the board
      displayWinOrLose()
  } else {
    let displayWinOrLose = () => {
      document.getElementById('winOrLose').style.display = "flex";
      winOrLoseText.innerHTML = `Sorry, too bad! ${personToCheck} was incorrect! ${secret.name} was the correct answer. You lost`
    }
    board.innerHTML =''
    displayWinOrLose()
  }
} */

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Hurray! You guess ${numberOfGuesses} times & win! ${personToCheck} was correct!`
  } else {
    winOrLoseText.innerHTML = `Sorry, too bad!  You guessed ${numberOfGuesses} times but ${personToCheck} was incorrect! ${secret.name} was the correct answer. You lost`
  }
  winOrLose.style.display = 'flex';
}



  start()

  // All the event listeners
  restartButton.addEventListener("click", start)
  playAgain.addEventListener('click', () => {
    start();
    numberOfGuesses = 0
    guessCounter.innerHTML =`${numberOfGuesses}`;
  })
  questions.addEventListener("change", selectQuestion);
  findOutButton.addEventListener("click", () => {
    checkQuestion();
    numberOfGuesses += 1;
    guessCounter.innerHTML =`${numberOfGuesses}`;
  });
  
    

