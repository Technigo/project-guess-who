const gameBoard = document.getElementById("board");
const questionSection = document.getElementById("questionSection");
const questionsOptions = document.querySelectorAll(".questions-options");
const totalGuesses = document.getElementById("totalGuesses");
const restartButton = document.getElementById("restart");
const playAgainButton = document.getElementById("playAgain");
const winOrLoseWrapper = document.querySelector(".win-or-lose-wrapper");
const winOrLoseText = document.getElementById("winOrLoseText");
const alertMessageText = document.getElementById("alertMessage");
const messageWrapper = document.getElementById("message");
const crossMark = document.getElementById("crossMark");

const characters = [
  {
    name: "Joe",
    img: "images/joe.svg",
    hair: "brunette",
    eyes: "brown",
    accessories: ["hats"],
    other: []
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "red",
    eyes: "green",
    accessories: ["glasses", "jewelry"],
    other: []
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "covered",
    eyes: "blue",
    accessories: ["hats"],
    other: []
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "covered",
    eyes: "blue",
    accessories: ["hats"],
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
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "white",
    eyes: "blue",
    accessories: [],
    other: ["smoker"]
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
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "covered",
    eyes: "hidden",
    accessories: ["sunglasses"],
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
    name: "Jodi",
    img: "images/jodi.svg",
    hair: "blonde",
    eyes: "blue",
    accessories: ["hats"],
    other: []
  },
  {
    name: "Jia",
    img: "images/jia.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "blonde",
    eyes: "hidden",
    accessories: ["sunglasses"],
    other: []
  },
  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    accessories: ["sunglasses"],
    other: ["smoker"]
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brunette",
    eyes: "blue",
    accessories: ["glasses", "hats"],
    other: ["smoker"]
  },
  {
    name: "Jolee",
    img: "images/jolee.svg",
    hair: "brunette",
    eyes: "blue",
    accessories: ["jewelry"],
    other: []
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brunette",
    eyes: "green",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "red",
    eyes: "green",
    accessories: ["glasses", "hats"],
    other: ["smoker"]
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    accessories: ["hats"],
    other: []
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    accessories: ["sunglasses", "jewelry"],
    other: []
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "red",
    eyes: "green",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Juan",
    img: "images/juan.svg",
    hair: "black",
    eyes: "blue",
    accessories: [],
    other: []
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses", "jewelry"],
    other: []
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "blonde",
    eyes: "hidden",
    accessories: ["sunglasses", "hats", "jewelry"],
    other: []
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "white",
    eyes: "brown",
    accessories: ["jewelry"],
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
    other: []
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses", "hats"],
    other: []
  },
]


let secretCharacter;
let currentQuestion;
let charactersInPlay;
let timerInterval;

// Draw the game board
const generateBoard = () => {
  gameBoard.innerHTML = ``
  charactersInPlay.forEach((character) => {
    board.innerHTML += `
      <div class="card">
        <p class="name">${character.name}</p>
        <img src=${character.img} alt=${character.name}>
        <div class="guess">
          <button class="transparent-button" onclick="guess('${character.name}')">Guess <span class="name-block">${character.name}?</span></button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array 
const setSecretCharacter = () => {
  secretCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

const startGame = () => {
  charactersInPlay = characters;
  generateBoard();
  setSecretCharacter();
  guessCount = 0
  totalGuesses.innerText = "Number of guesses: 0"
  startTimer()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  questionsOptions.forEach(question => {
    question.addEventListener("change", () => {
      const category = question.options[0].value;
      const value = question.options[question.selectedIndex].value;

      currentQuestion = {
        category,
        value,
      }

      filterCharacters(currentQuestion); 
      question.selectedIndex = 0;
    })
  })
}

// It will filter the characters array and redraw the game board.
const filterCharacters = (currentQuestion) => {
  const secretCharacterValues = secretCharacter.hair === currentQuestion.value || secretCharacter.eyes === currentQuestion.value || secretCharacter.accessories.includes(currentQuestion.value) || secretCharacter.other.includes(currentQuestion.value);
  const isArray = currentQuestion.category === 'accessories' || currentQuestion.category === 'other';

  if (isArray) {
    charactersInPlay = charactersInPlay.filter((character) => character[currentQuestion.category].includes(currentQuestion.value) === secretCharacterValues);
  } else {
    charactersInPlay = charactersInPlay.filter((character) => (character[currentQuestion.category] === currentQuestion.value) === secretCharacterValues);
  }

  alertMessage(secretCharacterValues, currentQuestion.value, currentQuestion.category);
  generateBoard();
  guessCount++
  totalGuesses.innerHTML = `Number of guesses: ${guessCount}`
  messageWrapper.style.display = "block";
}

const alertMessage = (keepCharacter) => {
  const { category, value } = currentQuestion;
  
  if (category === 'accessories') {
    if (keepCharacter) {
      alertMessageText.innerHTML = `Yes, the person wears ${value}! Keep all people that wear ${value}.`;
    } else {
      alertMessageText.innerHTML = `No, the person doesn't wear ${value}! Remove all people that wear ${value}.`;
    }
  } else if (category === 'other') {
    if (keepCharacter) {
      alertMessageText.innerHTML = `Yes, the person is a ${value}! Keep all people that are ${value}s.`;
    } else {
      alertMessageText.innerHTML = `No, the person is not a ${value}! Remove all people that are ${value}s.`;
    }
  } else {
    if (keepCharacter) {
      alertMessageText.innerHTML = 
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`;
    } else {
      alertMessageText.innerHTML = 
        `No, the person doesnt have ${value} ${category}! Remove all people with ${value} ${category}.`;
    }
  }
  generateBoard()
}

const guess = (personToConfirm) => {
  checkMyGuess(personToConfirm)
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (secretCharacter.name === personToCheck) {
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.innerHTML = `<span class="emoji"> 🥳 </span> Great Job! It was ${secretCharacter.name}.`
    gameBoard.innerHTML = ``
    questionSection.innerHTML = ""
  } else {
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.innerHTML = `<span class="emoji"> 😓 </span> It is not ${personToCheck}. It was ${secretCharacter.name}.`
    gameBoard.innerHTML = ``
    questionSection.innerHTML = ""
  }
}

const startTimer = () => {
  clearInterval(timerInterval);

  let seconds = 0; minutes = 0; hours = 0;

    // Set a interval every 1000 ms
    timerInterval = setInterval(() => {
      timer.innerHTML =
        "Time elapsed: " +
        (hours ? hours + ':' : '') +
        (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds);

      // Then, we add a second since one second has passed
      seconds++;

      // if seconds equals 60 seconds reset seconds to 0 and add a minute
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }

      // if minutes equals 60 minutes reset minutes to 0 and add 1 hour
      if (minutes == 60) {
        hours++;
        minutes = 0;
      }
    }, 1000);
};

// Invokes the start function when website is loaded
startGame()
selectQuestion()

// All the event listeners
restartButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", () => window.location.reload());
crossMark.addEventListener("click", () => messageWrapper.style.display = "none");