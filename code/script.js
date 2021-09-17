"use strict";
// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const playAgainButton = document.getElementById("playAgain");
const cheer = document.getElementById("myCheerAudio"); // Creating a variable to get the audio for the winner
const elevator = document.getElementById("myElevatorAudio"); // Creating a variable to get the audio for the background music

// Array with all the characters, as objects
// added gender, sunglasses, beards and jewlery
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    gender: "female",
    hair: ["hidden"],
    eyes: "hidden",
    accessories: ["sunglasses", "glasses", "hat"],
    other: [],
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    gender: "male",
    hair: ["hidden", "beard"],
    eyes: "blue",
    accessories: ["hat", "jewlery"],
    other: [],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    gender: "male",
    hair: ["grey", "beard"],
    eyes: "blue",
    accessories: ["hat"],
    other: ["smoker"],
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    gender: "male",
    hair: ["black"],
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    gender: "male",
    hair: ["yellow"],
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "James",
    img: "images/james.svg",
    gender: "male",
    hair: ["brown", "beard"],
    eyes: "green",
    accessories: ["sunglasses", "glasses"],
    other: [],
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    gender: "female",
    hair: ["black"],
    eyes: "hidden",
    accessories: ["sunglasses", "glasses", "jewlery"],
    other: [],
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    gender: "female",
    hair: ["yellow"],
    eyes: "hidden",
    accessories: ["sunglasses", "glasses"],
    other: [],
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    gender: "female",
    hair: ["orange"],
    eyes: "green",
    accessories: ["glasses", "jewlery"],
    other: [],
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    gender: "female",
    hair: ["purple"],
    eyes: "hidden",
    accessories: ["sunglasses", "glasses"],
    other: ["smoker"],
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    gender: "male",
    hair: ["brown", "beard"],
    eyes: "blue",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    gender: "female",
    hair: ["brown"],
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    gender: "male",
    hair: ["orange", "beard"],
    eyes: "green",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    gender: "female",
    hair: ["white"],
    eyes: "hidden",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    gender: "female",
    hair: ["orange"],
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    gender: "male",
    hair: ["hidden"],
    eyes: "blue",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    gender: "female",
    hair: ["black"],
    eyes: "blue",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    gender: "female",
    hair: ["black"],
    eyes: "brown",
    accessories: ["glasses", "jewlery"],
    other: [],
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    gender: "male",
    hair: ["brown"],
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    gender: "male",
    hair: ["yellow"],
    eyes: "hidden",
    accessories: ["sunglasses", "glasses", "hat", "jewlery"],
    other: [],
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    gender: "female",
    hair: ["grey"],
    eyes: "brown",
    accessories: ["jewlery"],
    other: [],
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    gender: "male",
    hair: ["yellow"],
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    gender: "male",
    hair: ["black", "beard"],
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    gender: "female",
    hair: ["black"],
    eyes: "brown",
    accessories: ["glasses", "hat"],
    other: [],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let counter = 1; // This is my play counter variable

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
let startTime;
let elapsedTime = 0;
let timerInterval;

// A function that resets the timer and then runs the start function
const reset = () => {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  start();
  counter = 1; // resets the counter
  document.getElementById("counter").innerHTML = `This far you have guessed 0 times`; // resets the innerHTML when the reset is run
  cheer.pause() // If the user wins the cheer plays and this pauses it when everything resets
  playElevatorMusic() // this runs the function that has the elevator music
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  setTimeout(() => generateBoard(), 500);
  setSecret();
  winOrLose.style.display = "";
  startTimer();
};

// Gets the time and converts it into strings
const timeToString = (time) => {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs); // Hours

  let diffInMin = (diffInHrs - hh) * 60; // Minutes
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60; // Seconds
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100; // Milliseconds
  let ms = Math.floor(diffInMs);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `Your playtime is: ${formattedHH}:${formattedMM}:${formattedSS}`; // Returns a string
}

// A function that modifies the innerHTML
const print = (txt) => {
  document.getElementById("timePlayed").innerHTML = txt;
}

// A function that starts the timer
const startTimer = () => {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  currentQuestion = { // creating the object that holds information about what I pick from the dropdown
    category: category,
    value: value,
  };
};


// A function that checks which I picked in the dropdown 
// It then takes the value and compares it to the secret persons value
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // This if statements first checks which category is picked
  if (category === "eyes" || category === "gender") {
    // If the category is hair/eyes it gets the value in this way
    if (secret[category] === value) {
      // If the value is true it runs filterCharacters with a true value
      filterCharacters(true);
    } else {
      filterCharacters(); // Otherwise it runs with a false value
    }
  } else if (category === "accessories" || category === "other" || category === "hair") {
    // If the category is accessories/other it gets the value with the includes() method since their values are stored in an array
    if (secret[category].includes(value)) {
      // If the value is true it runs filterCharacters with a true value
      filterCharacters(true);
    } else {
      filterCharacters();
    }
  }

  document.getElementById("counter").innerHTML = `This far you have made ${counter} guesses`; // prints this when the user makes a guess
  counter++; // then adds 1 to the counter

};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion; // The variables I can use to print my alerts
  
  // Huge if-statement that runs differently depending on which category is picked and wether it is true/false values that are being passed in
  if (category === "hair") {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people that have ${value}`);
      // THis filters out the characters if the value is true
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value));
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that has ${value}`
      );
      // This filters out the characters if the value is false
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "gender") {
    if (keep) {
      alert(
        `Yes, the person is ${value}! Keep all people that are ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person isn't ${value}! Remove all people that are ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "eyes") {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that has ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that has ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "accessories") {
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
      alert(`Yes the person smokes! Keep all the smokers`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(`No the person doesn't smoke! Remove all the smokers`);
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  setTimeout(() => generateBoard(), 500);
};

// When the user guesses on a person it then has to confirm that they want to make a guess
const guess = (personToConfirm) => {
  const result = window.confirm(`Are you sure this is your choice?`);

  if (result) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert("That's correct, you win!");
    board.innerHTML = "";
    winOrLose.style.display = "block";
    pauseElevatorMusic();
    cheer.play(); // This shows the winner block if you pick the correct person
  } else {
    alert("That is not correct, you lose!");
    reset(); // resets the timer
    pauseElevatorMusic();
  }
};

// This function runs the elevator music
const playElevatorMusic = () => {
  elevator.play()
}

// This function pauses the elevator music
const pauseElevatorMusic = () => {
  elevator.pause()
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", reset); // The restart function also runs the reset and then runs the starter function
questions.addEventListener("change", selectQuestion);
filter.addEventListener("click", checkQuestion);
playAgain.addEventListener("click", reset); // I invoke the reset first that resets the timer and then runs the starter function
questions.addEventListener("click", playElevatorMusic); // When the user clicks the dropdown the elevator music starts
// I had to add an event listener due to the fact that the browser doesnt allow it to run by default