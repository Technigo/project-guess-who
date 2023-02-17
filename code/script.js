// Alexander: All the needed DOM selectors stored as short variables

const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const winOrLoseSection = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");

// Alexander: The main array with all the characters as objects

const CHARACTERS = [
  {
    name: "Björk",
    img: "images/bjork.png",
    hair: "black",
    eyes: "visible",
    accessories: ["hat"],
    other: ["singer"],
  },
  {
    name: "Frida Kahlo",
    img: "images/frida.png",
    hair: "black",
    eyes: "visible",
    accessories: ["a necklace", "earrings"],
    other: ["artist"],
  },
  {
    name: "Maya Angelou",
    img: "images/maya.png",
    hair: "black",
    eyes: "visible",
    accessories: ["a headband"],
    other: ["author"],
  },
  {
    name: "Yayoi Kusama",
    img: "images/yayoi.png",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: ["artist"],
  },
  {
    name: "Utada Hikaru",
    img: "images/utada.png",
    hair: "black",
    eyes: "visible",
    accessories: ["earrings"],
    other: ["singer"],
  },
  {
    name: "Tamara Łempicka ",
    img: "images/tamara.png",
    hair: "blonde",
    eyes: "visible",
    accessories: ["a hat"],
    other: ["artist"],
  },
  {
    name: "Aretha Franklin",
    img: "images/aretha.png",
    hair: "black",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["singer"],
  },
  {
    name: "Bridget Riley",
    img: "images/bridget.png",
    hair: "brown",
    eyes: "visible",
    accessories: [],
    other: ["artist"],
  },
  {
    name: "Dolly Parton",
    img: "images/dolly.png",
    hair: "blonde",
    eyes: "visible",
    accessories: ["a hat"],
    other: ["singer"],
  },

  {
    name: "Vivienne Westwood",
    img: "images/vivienne.png",
    hair: "orange",
    eyes: "visible",
    accessories: ["earrings"],
    other: ["fashion designer"],
  },
  {
    name: "Chaka Khan",
    img: "images/chaka.png",
    hair: "black",
    eyes: "visible",
    accessories: ["a microphone"],
    other: ["singer"],
  },
  {
    name: "Rei Kawakubo",
    img: "images/rei.png",
    hair: "black",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["fashion designer"],
  },
  {
    name: "Astrid Lindgren",
    img: "images/astrid.png",
    hair: "orange",
    eyes: "visible",
    accessories: ["a necklace", "a hat"],
    other: ["smoker"],
  },
  {
    name: "Amy Winehouse",
    img: "images/amy.png",
    hair: "black",
    eyes: "winged",
    accessories: ["a flower"],
    other: ["singer"],
  },
  {
    name: "Agnetha Fältskog",
    img: "images/agnetha.png",
    hair: "blonde",
    eyes: "visible",
    accessories: ["glasses"],
    other: ["singer"],
  },
  {
    name: "Paula Rego",
    img: "images/paula.png",
    hair: "red",
    eyes: "visible",
    accessories: ["a necklace", "earrings"],
    other: ["artist"],
  },
  {
    name: "Amy Sherald",
    img: "images/amysherald.png",
    hair: "brown",
    eyes: "visible",
    accessories: ["glasses"],
    other: ["artist"],
  },
  {
    name: "Kate Bush",
    img: "images/kate.png",
    hair: "red",
    eyes: "visible",
    accessories: ["a flower"],
    other: ["singer"],
  },
  {
    name: "Shirin Nishat",
    img: "images/shirin.png",
    hair: "hidden",
    eyes: "winged",
    accessories: ["earrings"],
    other: ["artist"],
  },
  {
    name: "Janet",
    img: "images/janet.png",
    hair: "hidden",
    eyes: "visible",
    accessories: ["earrings", "a hat"],
    other: ["singer"],
  },
  {
    name: "Grace Jones",
    img: "images/grace.png",
    hair: "black",
    eyes: "visible",
    accessories: [],
    other: ["singer", "smoker"],
  },
  {
    name: "Yoko Ono",
    img: "images/yoko.png",
    hair: "black",
    eyes: "visible",
    accessories: ["a hat", "glasses"],
    other: ["artist"],
  },
  {
    name: "Tina Turner",
    img: "images/tina.png",
    hair: "orange",
    eyes: "visible",
    accessories: ["a microphone"],
    other: ["singer"],
  },
  {
    name: "Janis Joplin",
    img: "images/janis.png",
    hair: "brown",
    eyes: "visible",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
];

// Alexander: Declaring all glocal variables

let secret;
let currentQuestion;
let charactersInPlay;

// Alexander: Declaring sound effects for winning or losing to be referenced later

const winningSound = new Audio("assets/tadaa.mp3");
const losingSound = new Audio("assets/woop.mp3");

// Alexander: Drawing the game board

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

// Alexander: The start function creates an array of the characters to be iterated through later, generates the character cards and sets the secret character
// It also clears WinOrLoseSection after winning or losing

const start = () => {
  // Alexander: This sets the first option as "select" in the dropdown

  questions.value = "";
  winOrLoseSection.style.display = "none";
  // winOrLoseSection.innerText += ` `;

  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?

  // This loads the board of characters
  generateBoard();

  // Set secret person to be guessed by user
  setSecret();
  console.log(secret);
};

// Alexander: Setting the currentQuestion object when you select something in the "Does the person have..." dropdown
const selectQuestion = () => {
  // The category variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // The value variable stores the actual value of the question we've selected.
  const value = questions.value;
  //Alexander: Or, const value = questions.options[questions.selectedIndex].value;

  //Alexander: Storing the category and value variables in currentQustion
  currentQuestion = {
    category: category,
    value: value,
  };

  // Alexander: To check the values of currentQuestion
  console.log(currentQuestion);
};

// Alexander: checkQuestion is invoked when you click on 'Find Out' button
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes OR accessories/others)
  // See if we should keep or remove people based on that - (true) or (false)
  // At the end it invokes filterCharacters
  if (category === "hair" || category === "eyes") {
    if (secret[category] === value) {
      filterCharacters(true); // Keep everyone with that hair/eye colour
    } else {
      filterCharacters(); // Remove everyone with that hair/eye colour
    }
  } else if (category === "accessories" || category === "other") {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }
  }

  // counter possibly?
};

// Alexander: Filters the array based on currentQuestion output and redraws the board
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Alexander: Alert message for different categories and filter by category to keep or remove, based on the keep variable
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
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
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }

  // Invoke the generateBoard function to redraw the board with the remaining people
  generateBoard();
};

// Alexander: Following button "guess", the player first have to confirm that they want to make a guess
// If the user conmfirms, the checkMyGuess function will be invoked
const guess = (personToConfirm) => {
  // Store the interaction from the player in a variable
  const playersGuess = confirm(`Do you want to guess ${personToConfirm}?`);

  // If the player confirms with "OK", nothing is invoked with "Cancel"
  if (playersGuess) {
    checkMyGuess(personToConfirm);
  }
};

// Alexander: This function is invoked after the user's confirmation
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winningSound.play();
    winOrLoseText.innerText = `That's correct! The person is indeed ${secret.name}`;
  } else {
    losingSound.play();
    winOrLoseText.innerText = `You lost! It is not ${personToCheck}. The person is ${secret.name}`;
    // An attempt to have the image of the secret person shows, could not get it to reload afterwads
    // winOrLoseSection.innerHTML += `
    //     <img src=${secret.img} alt=${secret.name}>
    // `;
  }
  winOrLoseSection.style.display = "flex";
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// Alexander: The event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener("click", checkQuestion);
playAgainButton.addEventListener("click", start);
