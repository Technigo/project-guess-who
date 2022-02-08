const gameBoard = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const filterButton = document.getElementById("filter");
const winOrLoseWrapper = document.querySelector(".win-or-lose-wrapper")

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
    name: "James",
    img: "images/james.svg",
    hair: "brown",
    eyes: "green",
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

// Draw the game board
const generateBoard = () => {
  gameBoard.innerHTML = ``
  charactersInPlay.forEach((character) => {
    board.innerHTML += `
      <div class="card">
        <p>${character.name}</p>
        <img src=${character.img} alt=${character.name}>
        <div class="guess">
          <span>Guess on ${character.name}?</span>
          <button class="filled-button small" onclick="guess('${character.name}')">Guess</button>
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
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value
  }
  filterCharacters(currentQuestion);
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

 
  // redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  confirm(`Are you sure you want to guess ${personToConfirm}?`);
  checkMyGuess(personToConfirm)
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  console.log(secretCharacter.name)
  console.log(personToCheck)
  if (secretCharacter.name === personToCheck) {

    alert("You have won the game!")
    winOrLoseWrapper.style.display = "flex";
  } else {
    alert("Sorry, that is not the right person. You have lost the game.")
    winOrLoseWrapper.style.display = "flex";
  }
}

// Invokes the start function when website is loaded
startGame()

// All the event listeners
restartButton.addEventListener("click", startGame);
filterButton.addEventListener("click", selectQuestion);