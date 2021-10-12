// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const startGameButton = document.getElementById("play");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterButton = document.getElementById("filter");
const restart = document.getElementById("playAgain");
const countGuess = document.getElementById("countGuess");
count = 0;

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
    accessories: [],
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
let backgroundMusic = new Audio("sounds/harryPotterTheme.mp3");
backgroundMusic.volume = 0.5;
let correctAnswerAudio = new Audio("sounds/correct.mp3");
correctAnswerAudio.volume = 1;

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
  charactersInPlay = CHARACTERS;
  countGuess.innerHTML = "Guesses: ";
  setSecret();
  totalSeconds = 0;
  valString = "";
  secondsLabel.innerHTML = "";
  minutesLabel.innerHTML = "";
  generateBoard(charactersInPlay);
};

const timer = () => {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
};

const pad = (val) => {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
};
//game timer
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(timer, 1000);

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;
  currentQuestion = {
    category: category,
    value: value,
  };
};
selectQuestion();

//Checks the value against secret person
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep;
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
      alert(`Yes, the person is a student! Keep all people that is a student`);
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
    } else {
      alert(
        `No, the person isn't related to a Weasley! Remove all people that is related to a Weasley`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToCheck) => {
  const confirmGuess = confirm(`You are about to guess ${personToCheck}?`);
  if (confirmGuess) checkMyGuess(personToCheck);
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You powerful wizard! You won in ${totalSeconds} seconds.`;
    correctAnswerAudio.play();
  } else {
    winOrLoseText.innerHTML = `Sadly you were beaten. The correct one was ${secret.name}`;
  }
  winOrLose.style.display = "flex";
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener("click", () => {
  checkQuestion();
  count += 1;
  countGuess.innerHTML = "Guesses:" + count;
});
restart.addEventListener("click", () => {
  start();
  winOrLose.style.display = "none";
});
startGameButton.addEventListener("click", () => {
  start();
  startGame.style.display = "none";
  backgroundMusic.play();
});
