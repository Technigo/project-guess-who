// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterButton = document.getElementById("filter");
const restart = document.getElementById("playAgain");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Harry Potter",
    img: "images/harry.png",
    hair: "black",
    house: "gryffindor",
    accessories: ["glasses", "pet", "wand"],
    student: "yes",
    aWeasley: "no",
  },
  {
    name: "Hermione Granger",
    img: "images/hermione.webP",
    hair: "red",
    house: "gryffindor",
    accessories: ["pet", "wand"],
    student: "yes",
    aWeasley: "no",
  },
  {
    name: "Ron Weasley",
    img: "images/ron.jpg",
    hair: "red",
    house: "gryffindor",
    accessories: ["pet", "wand"],
    student: "yes",
    aWeasley: "yes",
  },
  {
    name: "Ginny Weasley",
    img: "images/ginny.jpg",
    hair: "red",
    house: "gryffindor",
    accessories: ["wand"],
    student: "yes",
    aWeasley: "yes",
  },
  {
    name: "Molly Weasley",
    img: "images/molly.jpg",
    hair: "red",
    house: "noHouse",
    accessories: ["wand"],
    student: "no",
    aWeasley: "yes",
  },
  {
    name: "Minerva McGonagall",
    img: "images/minerva.webP",
    hair: "gray",
    house: "noHouse",
    accessories: ["hat", "wand"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Dolores Umbridge",
    img: "images/dolores.jpg",
    hair: "brown",
    house: "noHouse",
    accessories: ["wand"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Luna Lovegood",
    img: "images/luna.jpg",
    hair: "blonde",
    house: "ravenclaw",
    accessories: ["wand"],
    student: "yes",
    aWeasley: "no",
  },
  {
    name: "Rubeus Hargrid",
    img: "images/hagrid.webP",
    hair: "brown",
    house: "noHouse",
    accessories: ["pet"],
    student: "no",
    aWeasley: "no",
  },

  {
    name: "Fred Weasley",
    img: "images/fred.jpg",
    hair: "red",
    house: "gryffindor",
    accessories: ["wand"],
    student: "yes",
    aWeasley: "yes",
  },
  {
    name: "George Weasley",
    img: "images/george.jpg",
    hair: "red",
    house: "gryffindor",
    accessories: ["wand"],
    student: "yes",
    aWeasley: "yes",
  },
  {
    name: "Bellatrix Lestrange",
    img: "images/bella.jpg",
    hair: "black",
    house: "noHouse",
    accessories: ["wand"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Draco Malfoy",
    img: "images/draco.jpg",
    hair: "blonde",
    house: "slytherin",
    accessories: ["wand"],
    student: "yes",
    aWeasley: "no",
  },
  {
    name: "Sirius Black",
    img: "images/sirius.jpg",
    hair: "brown",
    house: "noHouse",
    accessories: ["wand"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Voldemort",
    img: "images/voldemort.webP",
    hair: "none",
    house: "noHouse",
    accessories: ["wand"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Neville Longbottom",
    img: "images/neville.jpg",
    hair: "brown",
    house: "gryffindor",
    accessories: ["wand"],
    student: "yes",
    aWeasley: "no",
  },
  {
    name: "Dumbledore",
    img: "images/dumbledore.webP",
    hair: "grey",
    house: "noHouse",
    accessories: ["wand", "hat"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Severus Snape",
    img: "images/snape.jpg",
    hair: "black",
    house: "noHouse",
    accessories: ["wand"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Dobby",
    img: "images/dobby.jpg",
    hair: "none",
    house: "noHouse",
    accessories: ["wand"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Remus Lupin",
    img: "images/lupin.jpg",
    hair: "red",
    house: "noHouse",
    accessories: ["wand"],
    student: "no",
    aWeasley: "no",
  },
  {
    name: "Peter Pettigrew",
    img: "images/peter.jpg",
    hair: "blonde",
    house: "noHouse",
    accessories: ["wand"],
    student: "yes",
    aWeasley: "no",
  },
  {
    name: "Seamus Finnigan",
    img: "images/seamus.jpg",
    hair: "brown",
    house: "gryffindor",
    accessories: ["wand"],
    student: "yes",
    aWeasley: "no",
  },
  {
    name: "Dudley Dursley",
    img: "images/dudley.jpg",
    hair: "brown",
    house: "noHouse",
    accessories: [],
    student: "yes",
    aWeasley: "no",
  },
  {
    name: "Argus Filch",
    img: "images/filch.jpg",
    hair: "gray",
    house: "noHouse",
    accessories: ["pet"],
    student: "no",
    aWeasley: "no",
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
  console.log(secret);
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  setSecret();
  // What else should happen when we start the game?
  generateBoard(charactersInPlay);
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};
selectQuestion();
// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep;
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === "hair") {
    keep = secret.hair === value;
  } else if (category === "house") {
    keep = secret.house === value;
  } else if (category === "accessories") {
    keep = secret.accessories.includes(value);
  } else if (category === "student") {
    keep = secret.student === value;
  } else if (category === "aWeasley") {
    keep = secret.aWeasley === value;
  }
  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person have a ${value}! Keep all people that have a ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't have a ${value}! Remove all people that have a ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "hair") {
    if (keep) {
      alert(
        `Yes, the person have ${value} hair! Keep all people that have ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "house") {
    if (keep) {
      alert(
        value === "noHouse"
          ? "Yes, the person does not live in a house! Kepp all the people that does not belong to a house"
          : `Yes, the person belongs to ${value}! Keep all people that belongs to ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        value === "noHouse"
          ? "No, the person lives to a house! Removes all people that doesn't live in a house"
          : `No, the person doesn't belong to ${value}! Remove all people that belongs to${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "student") {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that is a ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person isn't a student! Remove all people that is a student`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "aWeasley") {
    if (keep) {
      alert(
        `Yes, the person is related to a Weasley! Keep all people that is related to a Weasley`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      console.log(category, value);
    } else {
      alert(
        `No, the person isn't related to a Weasley! Remove all people that is related to a Weasley`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      console.log(category, value);
    }
  }

  generateBoard();
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
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToCheck) => {
  //const guessedName = charactersInPlay.name;
  confirm(`You are about to guess ${personToCheck}?`);
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.

  checkMyGuess(personToCheck);
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You have won`;
  } else {
    winOrLoseText.innerHTML = `You have lost`;
  }
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  winOrLose.style.display = "flex";
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener("click", checkQuestion);
restart.addEventListener("click", () => {
  start();
  winOrLose.style.display = "none";
});

/* GLÖM INTE TA DISPLAY NONE EFTER VINST*/
