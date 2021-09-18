const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const winOrLoseSection = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const playAgainButton = document.getElementById('playAgain');
const nameOfUserInput = document.getElementById("name-input");
const userWelcomeText = document.getElementById("user");
const questionNameSection = document.getElementById("question-name");
const startAndsendNameButton = document.getElementById("startAndSendName");
const asideSection = document.getElementById("aside-section");
const boardWrapper = document.getElementById("main-board-wrapper");
const minutesSection = document.getElementById("minutes");
const secondsSection = document.getElementById("seconds");
const counterSection = document.getElementById("counter");

const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'earrings'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'cap'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['cap'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'earrings'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'cap'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'cap'],
    other: []
  },
]

// Global variables
let secretCharacter = {};
let currentQuestion = {};
let charactersInPlay = [];
let count = 0;
let totalSeconds = 0;
let setInter = null;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
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
    `
  })
}


// Randomly select a person from the characters array 
const setSecretCharacter = () => {
  secretCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]

}

//timer functions
const setTime = () => {
  totalSeconds++;
  secondsSection.innerHTML = (totalSeconds % 60) < 10 ? "0" + (totalSeconds % 60) : totalSeconds % 60;
  minutesSection.innerHTML = parseInt(totalSeconds / 60) < 10 ? "0" + parseInt(totalSeconds / 60) : parseInt(totalSeconds / 60);
}

const timer = () => {
  totalSeconds = 0;
  setInter && clearInterval(setInter);
  setInter = setInterval(setTime, 1000);
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecretCharacter();

  timer();
}

// Start point ask for the name
const startAndReceiveName = (event) => {
  event.preventDefault();
  const name = nameOfUserInput.value;
  if (name) {
    userWelcomeText.innerText += `Welcome ${name}!`;
    questionNameSection.style.display = "none";
  } else {
    userWelcomeText.innerText += `Welcome!`;
    questionNameSection.style.display = "none";
  }
  questionNameSection.style.display = "none";
  boardWrapper.style.display = "flex";
  start();
}

//counter function
const counter = () => {
  count++
  count < 10 ? counterSection.innerText = "0" + count : counterSection.innerText = count;
}

// when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; //option group(category)
  const value = questions.options[questions.selectedIndex].value;
  currentQuestion = {
    category: category, // hair-eyes-accesories-other
    value: value // blue-green-yellow
  }
  filterCharacters(currentQuestion);
  counter();
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = ({ category, value }) => {
  const isValueInSecretCharacter = secretCharacter.hair === value || secretCharacter.eyes === value || secretCharacter.accessories.includes(value) || secretCharacter.other.includes(value);
  const isArray = category === 'accessories' || category === 'other';

  if (isArray) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value) === isValueInSecretCharacter);//compare true-true/ true-false
  } else {
    charactersInPlay = charactersInPlay.filter((person) => (person[category] === value) === isValueInSecretCharacter);//compare true-true/ true-false
  }
  alertMessage(isValueInSecretCharacter, { value, category })
  generateBoard();
}

const alertMessage = (keepCharacter, { value, category }) => {
  if (category === 'accessories' || category === 'other') {
    if (keepCharacter) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
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
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (nameGuessFromUser) => {
  let guessOption = prompt(`Do you want to guess on ${nameGuessFromUser}`, "yes");
  if (guessOption === "yes") {
    alert(`Let's see if the person is ${nameGuessFromUser}`);
    checkMyGuess(nameGuessFromUser);
  } else {
    alert("You can continue the game");
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (secretCharacter.name === personToCheck) {
    winOrLoseSection.style.display = "flex";
    winOrLoseText.innerHTML = `<h1>YOU WIN!<h1>
                               <h3 class= "winOrLoose2ndText">The secret person is: 
                               <img class="secret-image" src=${secretCharacter.img} alt=${secretCharacter.name}>
                               <h1>${secretCharacter.name}</h1>`
    board.innerHTML = ''
    asideSection.innerHTML = ''
  } else {
    winOrLoseSection.style.display = "flex";
    winOrLoseText.innerHTML = `<h1>YOU LOSE!<h1>
                               <h3 class= "winOrLoose2ndText">The secret person is not ${personToCheck}!!! The secret person is:</h3>
                               <img class="secret-image" src=${secretCharacter.img} alt=${secretCharacter.name}>
                               <h1>${secretCharacter.name}</h1>`
    board.innerHTML = ''
  }
}


// All the event listeners
restartButton.addEventListener('click', start);
findOutButton.addEventListener('click', selectQuestion);
playAgainButton.addEventListener('click', () => { location.reload(); });
startAndsendNameButton.addEventListener('click', startAndReceiveName);
