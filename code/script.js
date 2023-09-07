// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");

// Store a player name
let player;
// This button is under select box. When a user clicks, all the functions will be called to remove items from the board.
const filterBtn = document.getElementById("filter");

// This is h3 for initial page. Welcome message with player's name will be displayed
const welcomeMessage = document.getElementById("hello-text");
// This is h3 for displaying name in aside
const NameContainer = document.getElementById("display-name");

// These two under are after a user cliked a prompt and say yes to guess a person.
const winOrLosePage = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
//After win or lose page is displayed, this button is placed under a text. User can start over.
const playAgainBtn = document.getElementById("playAgain");

// This is where all the cards will be displayed
const boardWrapper = document.querySelector(".board-wrapper");

// this is where counter will be displayed.
const counterDisplay = document.getElementById("counter-display");

// This is used for timer funtion
const timer = document.getElementById("timer");
let timerInterval;

/*****************************************************************************/
// This is for localStorage.
let finalCounts = 0;
let finalTimerValue = "";
let arrayForLocalStorage = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
/*****************************************************************************/

// For Modal Window
const bestScoreContainer = document.getElementById("best-score-container-inner");
const tbody = document.getElementById("table-body");
const table = document.querySelector(".modal-table");
const clearGameBtn = document.querySelector(".game-clear-btn");
const gameDataBtn = document.querySelector(".game-data-btn");
const modalWindow = document.querySelector(".modal-window");
const modalCloseBtn = document.querySelector(".close-icon");

let modalDisplayArr;
let bestScore = 0;
let bestPlayerObj;

/*********************************************************************/
// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    wedlock: "divorced",
    accessories: ["glasses", "hat"],
    pet: ["cat"],
    other: [],
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    wedlock: "single",
    accessories: ["hat"],
    pet: [],
    other: [],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    wedlock: "single",
    accessories: ["hat"],
    pet: [],
    other: ["smoker"],
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hair: "black",
    eyes: "brown",
    wedlock: "married",
    accessories: [],
    pet: ["bog"],
    other: [],
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hair: "yellow",
    eyes: "green",
    wedlock: "divorced",
    accessories: ["glasses"],
    pet: ["bog"],
    other: [],
  },
  {
    name: "James",
    img: "images/james.svg",
    hair: "brown",
    eyes: "green",
    wedlock: "married",
    accessories: ["glasses"],
    pet: ["rabbit"],
    other: [],
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    wedlock: "single",
    accessories: ["glasses"],
    pet: ["bog", "cat"],
    other: [],
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    wedlock: "married",
    accessories: ["glasses"],
    pet: [],
    other: [],
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    wedlock: "widowed",
    accessories: ["glasses"],
    pet: [],
    other: [],
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    wedlock: "sambo",
    accessories: ["glasses"],
    pet: ["cat"],
    other: ["smoker"],
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    wedlock: "sambo",
    accessories: ["glasses", "hat"],
    pet: [],
    other: ["smoker"],
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    wedlock: "divorced",
    accessories: ["glasses"],
    pet: ["bog", "cat"],
    other: [],
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    wedlock: "sambo",
    accessories: ["glasses", "hat"],
    pet: [],
    other: ["smoker"],
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    wedlock: "single",
    accessories: ["hat"],
    pet: ["rabbit"],
    other: [],
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "orange",
    eyes: "green",
    wedlock: "sambo",
    accessories: ["glasses"],
    pet: ["bog"],
    other: [],
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "hidden",
    eyes: "blue",
    wedlock: "single",
    accessories: ["hat"],
    pet: ["cat"],
    other: [],
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hair: "black",
    eyes: "blue",
    wedlock: "sambo",
    accessories: ["glasses"],
    pet: [],
    other: [],
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    wedlock: "widowed",
    accessories: ["glasses"],
    pet: [],
    other: [],
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hair: "brown",
    eyes: "green",
    wedlock: "single",
    accessories: ["glasses"],
    pet: [],
    other: [],
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "yellow",
    eyes: "hidden",
    wedlock: "sambo",
    accessories: ["glasses", "hat"],
    pet: [],
    other: [],
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    wedlock: "married",
    accessories: [],
    pet: [],
    other: [],
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hair: "yellow",
    eyes: "green",
    wedlock: "single",
    accessories: [],
    pet: [],
    other: [],
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hair: "black",
    eyes: "green",
    wedlock: "sambo",
    accessories: [],
    pet: ["bog"],
    other: [],
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    wedlock: "married",
    accessories: ["glasses", "hat"],
    pet: [],
    other: [],
  },
];

// Global variables//////////////////////////////////
// This stores secret person who a user is going to guess. In setSecret function, the person will be decided.
let secret;

// this will store an object of category and value, which a user choose from select box. category is the same as a key in object CHARACTERS. value is a value of option
// Value will be passed in function "selectQuestion" for both, category and value.
let currentQuestion;

// Here are ones who are displayed on the screen. When a user select an option, and some will be removed when a secret doesn't have the same feature.
let charactersInPlay = CHARACTERS;

// These two are for a value that will be picked up in function selectQuestion.
// It is a value of option in html. When a user clike a button "filterBtn", value will be stored. like a hat/yellow hair...
// -> it stores a no white space value in function "checkQuestion"
let valueNoWhiteSpace;
// Because value is different from a proparty in Object, I modify it in function "checkQuestion" to use it later function "filterCharactors"
let valueAsKey;

// To count how many guess a user made
let counter = 0;

// Listen to page load if the page is freshly loaded, I don't want to start a timer as the initial page is first shown
let pageLoad = false;

// screen width -> when a width ois resized, it will get a new value.
let screenWidth = window.screen.width;

// This event listener listen to resize event when a user is changing a screen width
window.addEventListener("resize", () => {
  screenWidth = window.screen.width;
  generateBoard();
});

///////////////////////////////////////////////////////
// Draw the game board
const generateBoard = () => {
  board.innerHTML = "";

  charactersInPlay.forEach((person) => {
    if (screenWidth >= 769) {
      board.innerHTML += `
      <div class="card">
      <div class="inner-card">
      <div class="card-front">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}></div>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small guess-button" id="guess-button" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `;
    } else {
      board.innerHTML += `
      <div class="card-sm">
      <div class="inner-card-sm">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess-sm">
          <button class="filled-button small guess-button" id="guess-button" onclick="guess('${person.name}')">Guess</button>
          </div>
          </div>
     
      </div>`;
    }
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // Whenever a user starts the game, counter will be reset.
  counter = 0;
  counterDisplay.innerText = counter;

  // when start/restart btn is clicked, timer starts counting.
  startTimer();

  // board is made and a secret person is chosen here
  generateBoard();
  setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].text;

  currentQuestion = {
    category: category,
    value: value,
  };

  // counter will be added one when this function is called.
  counter++;
  counterDisplay.innerText = counter;

  // After a user select an option and click filterBtn, this function will call to check what will happen the next
  checkQuestion();
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Getting rid of white space of a value(green eye-> greeneye/ "wedlock" needs to be concated due to a value from option)
  valueNoWhiteSpace = category === "wedlock" ? value + category : value.replace(/\s/g, "");

  /*****************************************************************************************/
  // Compare the currentQuestion details with the secret person details in a different manner based on category
  if (category === "hair" || category === "eyes" || category === "wedlock") {
    if (`${secret[category]}${category}` === valueNoWhiteSpace) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
    /*****************************************************************************************/
  } else if (category === "pet" || category === "accessories" || category === "other") {
    // These categories are made from arrays. So it needs to be carefully validated.

    // to make it easier to identigy key in object for step 5. Input value and proparty in object are different, so I am fixing it here.

    switch (valueNoWhiteSpace) {
      case "ahat":
        valueAsKey = "hat";
        break;
      case "glasses":
        valueAsKey = "glasses";
        break;
      case "asmokinghabit":
        valueAsKey = "smoker";
        break;
      case "acat":
        valueAsKey = "cat";
        break;
      case "abog":
        valueAsKey = "bog";
        break;
      case "arabbit":
        valueAsKey = "rabbit";
        break;
    }

    const secretCategory = secret[category];
    const secretCategoryString = secretCategory.toString();

    // There are some varieties with these arrays. But other option has only two options. Smoker or not. So I validate it separetly.
    if (
      secretCategory.includes("hat") ||
      secretCategory.includes("glasses") ||
      secretCategory.includes("cat") ||
      secretCategory.includes("bog") ||
      secretCategory.includes("rabbit")
    ) {
      // If there are two elements in an array of accessories or pet
      if (secretCategory.length === 2) {
        filterCharacters(true);

        // if there is only one item in an array of accessories or pet
      } else if (
        (secretCategoryString === "hat" && valueAsKey === "hat") ||
        (secretCategoryString === "glasses" && valueAsKey === "glasses") ||
        (secretCategoryString === "cat" && valueAsKey === "cat") ||
        (secretCategoryString === "bog" && valueAsKey === "bog") ||
        (secretCategoryString === "rabbit" && valueAsKey === "rabbit")
      ) {
        filterCharacters(true);
      } else {
        filterCharacters(false);
      }

      // secret is a smoker
    } else if (secret[category].includes("smoker")) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  // Here is a function will change player for arrays ( other/pet/accessories)
  function changePlayerForArr(keep) {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueAsKey));
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(valueAsKey)
      );
    }
  }
  // Here is a function will change player for "strings"(wedlock/hair/eye)
  function changePlayer(keep, checker) {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === checker);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== checker);
    }
  }
  /************************************************************************************/
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`);
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`);
    }
    changePlayerForArr(keep);

    /************************************************************************************/
    // If category is other or wedlock
  } else if (category === "other" || category === "wedlock") {
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all people that are ${value}`);
    } else {
      alert(`No, the person isn't a ${value}! Remove all people that are ${value}`);
    }
    // checking if category is other or wedlock. Then involk a function depends on that.
    category === "other" ? changePlayerForArr(keep) : changePlayer(keep, value);

    /*******************************************************************************/
    //  If category is pet
  } else if (category === "pet") {
    if (keep) {
      alert(`Yes, the person has ${value}!  Keep all people with ${value} `);
    } else {
      alert(`No, the person doesn't have ${value}! Remove all people with ${value}`);
    }

    changePlayerForArr(keep);
    /******************************************************************************************/
  } else {
    // I split "value"(black heair) into array as I just need a first value(black).
    const valueArr = value.split(" ");

    if (keep) {
      alert(`Yes, the person has ${value}!  Keep all people with ${value} `);
    } else {
      alert(`No, the person doesn't have ${value}! Remove all people with ${value}`);
    }
    changePlayer(keep, valueArr[0]);
  }

  // Generate a board with remaining players
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmation = confirm(`Are you sure you want to guess on ${personToConfirm}`);
  // only the player confirmed, then checkMyGuess function will be called
  if (confirmation) {
    checkMyGuess(personToConfirm);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // display needs to be changed to show if the player guesed correctly or not
  winOrLosePage.style.display = "flex";
  boardWrapper.style.display = "none";

  // Store final counter number and time for local storage
  finalCounts = counter;
  finalTimerValue = timer.textContent;

  // check a name of secret and guessed person's name is the same
  if (personToCheck === secret.name) {
    handleLocalStorage();

    winOrLoseText.textContent = `✨🎉Conglaturation!! 🎉✨`;
    createSound("./images/audio/win-sound.mp3");
  } else {
    winOrLoseText.textContent = `💫 Oh no!! A wrong person. 
                                        Game over 😱 `;
    createSound("./images/audio/fail-sound.mp3");
  }
};

// Handle Local Storage

const handleLocalStorage = () => {
  const dataStorage = {
    playerName: "sakura",
    howManyGuesses: finalCounts,
    time: finalTimerValue,
  };
  // Pushing a newly created obj with game data into the array that stores data from localstorage
  arrayForLocalStorage.push(dataStorage);

  // then store again in localstorage
  window.localStorage.setItem("items", JSON.stringify(arrayForLocalStorage));
  console.log(localStorage);
};

/*********************************************************************/
// opening the borad page
const startGameBtn = document.getElementById("game-start-btn");
const initialPage = document.getElementById("initial-page");

player = prompt("Who is going to play, today?");

// if player did not type its name, alert and ask again
while (!player) {
  alert("Please type your name!");
  player = prompt("Who is going to play,today");
}

welcomeMessage.innerText = `Welcome to Guess Who, ${player}!! `;

startGameBtn.onclick = function () {
  initialPage.style.display = "none";

  NameContainer.innerText = `Player: ${player}`;
  // Invokes the start function when startgameBtn is clicked
  start();
};

/*********************************************************************/
// Sound effect function

function createSound(soundSrc) {
  const audio = document.createElement("audio");
  winOrLosePage.appendChild(audio);
  audio.setAttribute("src", soundSrc);
  audio.volume = 0.1;
  audio.play();
}

/*********************************************************************/
// timer function

const startTimer = () => {
  console.log("start Timer");
  clearInterval(timerInterval);

  let second = 0,
    minute = 0,
    hour = 0;

  timerInterval = setInterval(function () {
    timer.innerHTML =
      (hour ? hour + ":" : "") +
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);

    second++;

    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
};
/*********************************************************************/
// For Modal Window

// Here I am getting data from localStorage
const getDataFromLocalStorage = () => {
  if (localStorage.length === 1) {
    modalDisplayArr = JSON.parse(localStorage.getItem("items"));
  }
};

// checking the best scored game
const checkBextGame = (arr) => {
  arr.forEach((item) => {
    if (item.howManyGuesses <= bestScore) {
      bestScore = item.howManyGuesses;
      bestPlayerObj = item;
    }
  });

  // if there are the some score as the best score, then it filters and make it into a new array

  const bestScoreArr = arr.filter((item) => item.howManyGuesses === bestScore);

  if (bestScoreArr.length < 5) {
    bestScoreArr.forEach((item) => {
      const bestPlayerBox = document.createElement("div");
      bestPlayerBox.classList.add("best-players-box");
      bestPlayerBox.innerHTML += `
    <p>Player: ${item.playerName}</p>
    <p>Guesses: ${item.howManyGuesses}</p>
    <p>Time: ${item.time}</p>
    `;
      bestScoreContainer.insertAdjacentElement("beforeend", bestPlayerBox);
    });
  } else {
    const ajustedBestScoreArr = bestScoreArr.slice(0, 4);
    ajustedBestScoreArr.forEach((item) => {
      const bestPlayerBox = document.createElement("div");
      bestPlayerBox.classList.add("best-players-box");
      bestPlayerBox.innerHTML += `
    <p>Player: ${item.playerName}</p>
    <p>Guesses: ${item.howManyGuesses}</p>
    <p>Time: ${item.time}</p>
    `;
      bestScoreContainer.insertAdjacentElement("beforeend", bestPlayerBox);
    });
  }
};
// This creates table tr
const createHTMLForTable = (arr) => {
  // creating html for each item in an array
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    tbody.innerHTML += `<tr>
  <td>${arr[i].playerName}</th>
  <td>${arr[i].howManyGuesses}</th>
  <td>${arr[i].time}</th>
  <tr>
`;
    //  addting trElement the end of the childelement of Tbody
    table.insertAdjacentElement("beforeend", tbody);
  }
};

// Create table element for a table on a modal window.
const alartMessageBox = document.createElement("div");
const createTableElement = (arr) => {
  if (arr.length < 10) {
    createHTMLForTable(arr);
  } else {
    const ajustedArr = arr.slice(0, 9);
    createHTMLForTable(ajustedArr);

    alartMessageBox.classList.add("table-alert-text");
    alartMessageBox.textContent = "Please clear the data to store new data";
    table.insertAdjacentElement("afterend", alartMessageBox);
  }
};

/****************** Modal Event Handlers ************************************/

// This is a button you can clean up localstorage and data that is displayed in a table.
clearGameBtn.addEventListener("click", () => {
  localStorage.clear();
  console.log("clear", localStorage);
  tbody.textContent = "";
  alartMessageBox.textContent = "";
  bestScoreContainer.textContent = "";
});

// Closeing icon on a modal window event handler
modalCloseBtn.addEventListener("click", () => {
  // hide a modal window
  modalWindow.style.display = "none";
  modalWindow.style.zIndex = "-1";
  // clears up textcontent on a modal so that the next time when a modal is open, it won't show old data and won't mess up.
  tbody.textContent = "";
  alartMessageBox.textContent = "";
  bestScoreContainer.textContent = "";
});

// This is a button which is placed in aside, under count box. When it is clicked, modal window will open. You can see previous game data, which are stored in localStorage.
gameDataBtn.addEventListener("click", () => {
  modalWindow.style.display = "flex";
  modalWindow.style.zIndex = "100000";
  clearGameBtn.style.zIndex = "100000";
  getDataFromLocalStorage();
  // This scrolls up to the top of the window, when a modal is opened.
  window.scrollTo(0, 0);
  // if there is a data that is stored in localstorage, then a modal would show some previous game data.
  if (localStorage.length === 1) {
    createTableElement(arrayForLocalStorage);
    checkBextGame(arrayForLocalStorage);
  } else {
    console.log("no Data");
  }
});

// This works for preventing scrolling when a modal window/ initial page is open
modalWindow.addEventListener("wheel", preventScroll, { passive: false });
initialPage.addEventListener("wheel", preventScroll, { passive: false });

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

/**************************************************************************************************************************************************/
// All the event listeners

// Listen to page load event and set it pageLoad to true, then when start btn is clicked, the value is assignted to false.
// only when pageload = false, time starts.
window.addEventListener("load", (event) => {
  pageLoad = true;
});

restartButton.addEventListener("click", start);

filterBtn.addEventListener("click", () => {
  selectQuestion();
});

playAgainBtn.addEventListener("click", () => {
  start();
  winOrLosePage.style.display = "none";
  boardWrapper.style.display = "flex";
});
