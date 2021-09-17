// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findBtn = document.getElementById("filter");
const playAgainBtn = document.getElementById("playAgain");
const winLose = document.getElementById("winOrLose");
const winLoseText = document.getElementById("winLoseText");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Darth Vader",
    img: "images/darthvader.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: ["weapon", "cape"],
    other: ["villan"],
  },
  {
    name: "Dumbledore",
    img: "images/dumbledore.jpg",
    hair: "white",
    headpiece: "hat",
    accessories: ["weapon", "pet"],
    other: ["wizard"],
  },
  {
    name: "Black Widow",
    img: "images/blackwidow.jpg",
    hair: "brown",
    headpiece: "no headpiece",
    accessories: [],
    other: ["superhero"],
  },
  {
    name: "Voldemort",
    img: "images/voldemort.jpg",
    hair: "bald",
    headpiece: "no headpiece",
    accessories: ["weapon", "pet"],
    other: ["villan", "wizard"],
  },
  {
    name: "Gandalf",
    img: "images/gandalf.jpg",
    hair: "hidden",
    headpiece: "hat",
    accessories: ["weapon", "cape"],
    other: ["wizard"],
  },
  {
    name: "Harley Quinn",
    img: "images/harleyquinn.jpg",
    hair: "white",
    headpiece: "no headpiece",
    accessories: [],
    other: ["villan"],
  },
  {
    name: "Thanos",
    img: "images/thanos.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: [],
    other: ["villan"],
  },
  {
    name: "Hermione",
    img: "images/hermione.png",
    hair: "brown",
    headpiece: "no headpiece",
    accessories: [],
    other: ["wizard"],
  },
  {
    name: "Superman",
    img: "images/superman.jpg",
    hair: "black",
    headpiece: "no headpiece",
    accessories: ["cape"],
    other: ["superhero"],
  },

  {
    name: "Luke Skywalker",
    img: "images/luke.jpg",
    hair: "blond",
    headpiece: "no headpiece",
    accessories: ["weapon"],
    other: ["superhero"],
  },
  {
    name: "M. McGonagall",
    img: "images/minerva.jpg",
    hair: "gray",
    headpiece: "hat",
    accessories: ["glasses"],
    other: ["wizard"],
  },
  {
    name: "Storm Tropper",
    img: "images/stormtropper.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: ["weapon"],
    other: ["villan"],
  },
  {
    name: "Indiana Jones",
    img: "images/indianajones.jpg",
    hair: "hidden",
    headpiece: "hat",
    accessories: ["weapon"],
    other: ["superhero"],
  },
  {
    name: "Harry Potter",
    img: "images/harry.jpg",
    hair: "black",
    headpiece: "no headpiece",
    accessories: ["weapon", "pet"],
    other: ["wizard"],
  },
  {
    name: "Loki",
    img: "images/loki.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: ["cape"],
    other: ["villan"],
  },
  {
    name: "Yoda",
    img: "images/yoda.jpg",
    hair: "bald",
    headpiece: "no headpiece",
    accessories: ["weapon"],
    other: ["superhero"],
  },
  {
    name: "Bellatrix L",
    img: "images/belatrix.jpg",
    hair: "black",
    headpiece: "no headpiece",
    accessories: [],
    other: ["villan", "wizard"],
  },
  {
    name: "Catwoman",
    img: "images/catwoman.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: ["glasses"],
    other: ["villan"],
  },
  {
    name: "Bobba Fett",
    img: "images/bobbafett.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: ["weapon", "cape"],
    other: ["villan"],
  },
  {
    name: "Batman",
    img: "images/batman.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: ["cape", "weapon"],
    other: ["superhero"],
  },
  {
    name: "Smeagle",
    img: "images/smeagle.jpg",
    hair: "bald",
    headpiece: "no headpiece",
    accessories: [],
    other: ["villan"],
  },
  {
    name: "Captain America",
    img: "images/captain.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: ["weapon"],
    other: ["superhero"],
  },
  {
    name: "Wolerine",
    img: "images/wolverine.jpg",
    hair: "black",
    headpiece: "no headpiece",
    accessories: ["weapon"],
    other: ["superhero"],
  },
  {
    name: "Thor",
    img: "images/thor.jpg",
    hair: "hidden",
    headpiece: "helmet",
    accessories: ["cape"],
    other: ["superhero"],
  },
  {
    name: "Leia",
    img: "images/leia.jpg",
    hair: "brown",
    headpiece: "no headpiece",
    accessories: [],
    other: ["superhero"],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let counterValue = 0;
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let timeStart = setInterval(setTime, 1000);

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

//Timer function
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(time) {
  let timeString = time + "";
  if (timeString.length < 2) {
    return "0" + timeString;
  } else {
    return timeString;
  }
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

//Attempts counter
function findOutCounter() {
  updateDisplay(++counterValue);
}

//Update number of guesses
function updateDisplay(val) {
  document.getElementById("counterLabel").innerHTML = val;
}

const greetPlayer = () => {
  let person = prompt("Hello! What's your name?");
  alert(`Let's start the game ${person}!`);
  greeting.innerHTML = `Player: ${person}`;
  generateBoard();
};

// This function to start (and restart) the game
const start = () => {
  counterValue = 0;
  updateDisplay(counterValue);
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  winLose.classList.remove("active");
  setTimeout(greetPlayer, 1300);

  //Restart timer
  totalSeconds = 0;
  valString = "";
  secondsLabel.innerHTML = "";
  minutesLabel.innerHTML = "";
  console.log(secret); // remove later
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // A variable that stores the actual value of the question
  const value = questions.value;

  // This variable stores what option group (category) the question belongs to.
  currentQuestion = {
    category: category,
    value: value, // We also need a variable that stores the actual value of the question we've selected.
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  if (category === "hair" || category === "headpiece") {
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

  if (category === "hair") {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "headpiece") {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people that have ${value}`);
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "accessories") {
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
      alert(`Yes the person is a ${value}! Keep all the ${value}`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(`No the person is not a ${value}! Remove all the ${value}`);
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  setTimeout(() => generateBoard(), 500);
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const guessConfirm = window.confirm(`Are you sure you want to guess?`);

  if (guessConfirm) {
    checkMyGuess(personToConfirm);
  }
};

// Win or lose audio
const audio = new Audio("win.wav");
const audioLose = new Audio("lose.wav");

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert(`You're right!`);
    audio.play();
    board.innerHTML = winLose.classList.add("active");
    winLoseText.innerHTML = `
    <h5>You're a WINNER!!</h5> 
    <h6>You completed the game in ${counterValue} attempts and ${totalSeconds} seconds. Do you wanna play again?</h6>`;
  } else {
    alert(`Sorry, this is not your character. It is ${secret.name}.`);
    audioLose.play();
    board.innerHTML = "";
    winLose.classList.add("active");
    winLoseText.innerHTML = `
    <h5>Better luck next time!</h5> 
    <h6>Would you like to try again?</h6>`;
  }
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
restartButton.addEventListener("click", () => {
  clearInterval(timeStart);
  timeStart = setInterval(setTime, 1000);
});
questions.addEventListener("change", selectQuestion);
findBtn.addEventListener("click", checkQuestion);
playAgainBtn.addEventListener("click", start);
