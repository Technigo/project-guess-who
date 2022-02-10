const gameBoard = document.getElementById("board");
const questions = document.getElementById("questions");
const questionsAll = document.querySelectorAll(".questions-all");
const totalGuesses = document.getElementById("totalGuesses");
const restartButton = document.getElementById("restart");
const playAgainButton = document.getElementById("playAgain");
const winOrLoseWrapper = document.querySelector(".win-or-lose-wrapper");
const winOrLoseText = document.getElementById("winOrLoseText");
const timer = document.getElementById("timer");


const characters = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: []
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: []
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    accessories: ["hat"],
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
    name: "Jake",
    img: "images/jake.svg",
    hair: "yellow",
    eyes: "green",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jolee",
    img: "images/jolee.svg",
    hair: "brown",
    eyes: "blue",
    accessories: ["headband"],
    other: []
  },
  {
    name: "Jia",
    img: "images/jia.svg",
    hair: "black",
    eyes: "blue",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "necklace"],
    other: []
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["smoker"]
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses", "hat"],
    other: ["smoker"]
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "hat"],
    other: ["smoker"]
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    accessories: ["hat"],
    other: []
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
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
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses"],
    other: []
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hair: "brown",
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
    name: "Jodi",
    img: "images/jodi.svg",
    hair: "yellow",
    eyes: "blue",
    accessories: ["hat"],
    other: []
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: []
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    accessories: [],
    other: []
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hair: "yellow",
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
    accessories: ["glasses", "hat"],
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
        <p>${character.name}</p>
        <img src=${character.img} alt=${character.name}>
        <div class="guess">
          <button class="guess-button" onclick="guess('${character.name}')">Guess <span class="name-block">${character.name}?</span></button>
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
  console.log(secretCharacter)
  guessCount = 0
  totalGuesses.innerText = "Number of guesses: 0"
  startTimer()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  questionsAll.forEach(question => {
    question.addEventListener("change", () => {
      const category = question.options[question.selectedIndex].parentNode.label;
      const value = question.options[question.selectedIndex].value;
       
      currentQuestion = {
        category: category,
        value: value
      }

      filterCharacters(currentQuestion); 
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
  alertMessage(secretCharacterValues, currentQuestion.value, currentQuestion.category )
  generateBoard();
  guessCount++
  totalGuesses.innerHTML = `Number of guesses: ${guessCount}`
}

const alertMessage = (keepCharacter) => {
  const { category, value } = currentQuestion;
  if (category === 'accessories') {
    if (keepCharacter) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
    }
  } else if (category === 'other') {
    if (keepCharacter) {
      alert(`Yes, the person is ${value}! Keep all people that are ${value}s`)
    } else {
      alert(`No, the person is not a ${value}! Remove all people that are not ${value}s`)
    }
  } else {
    if (keepCharacter) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`
      )
    } else {
      alert(
        `No, the person doesnt have ${value} ${category}! Remove all people with ${value} ${category}`
      )
    }
  }
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  confirm(`Are you sure you want to guess ${personToConfirm}?`);
  checkMyGuess(personToConfirm)
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (secretCharacter.name === personToCheck) {
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.innerHTML = `Great Job! It was ${secretCharacter.name}.`
  } else {
    winOrLoseWrapper.style.display = "flex";
    winOrLoseText.innerHTML = `It is not ${personToCheck}. It was ${secretCharacter.name}.`
  }
}

const startTimer = () => {
  clearInterval(timerInterval);

  let seconds = 0;
  let minutes = 0;
  let hours = 0;


  // Set a interval every 1000 ms
  timerInterval = setInterval(() => {
    timer.innerHTML = `Time elapsed: ${hours}${minutes}:${seconds}`
 
    if(hours) {
      hours + ":"
    } else {
      ""
    }

    if(minutes < 10) {
      0 + minutes
    } else {
      minutes
    }

    if (seconds < 10) {
      0 + seconds
    } else {
      seconds
    }

    // Next, we add a new second since one second is passed
    seconds++;

    // if seconds equals 60 seconds reset seconds to 0
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }

    // if minutes equals 60 minutes reset minutes to 0
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
  }, 1000);
}

// Invokes the start function when website is loaded
startGame()
selectQuestion()

// All the event listeners
restartButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", () => window.location.reload())
