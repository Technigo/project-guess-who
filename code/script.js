const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOut = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const playAgain = document.getElementById('playAgain');
const nameInput = document.getElementById("name-input");
const user = document.getElementById("user");
const questionName = document.getElementById("question-name");
const sendName = document.getElementById("sendName");
const asideSection = document.getElementById("aside-section");

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
    accessories: ['hat'],
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
let secret
let currentQuestion
let charactersInPlay

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
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log("secret ", secret);
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecret();

}

const handleNameInput = (event) => {
  event.preventDefault();
  const name = nameInput.value;
  if (name) {
    user.innerText += `Welcome ${name}!`;
    questionName.style.display = "none";
  } else {
    user.innerText += `Welcome!`;
    questionName.style.display = "none";
  }
}

// when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; //option group(category)
  const value = questions.options[questions.selectedIndex].value;
  currentQuestion = {
    category: category, //hair-eyes-accesories-other
    value: value //blue-green-yellow
  }
  checkQuestion();
}

//compare the selected category/value with the secret
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  if (category === 'hair' || category === 'eyes') {
    if (secret.hair === value || secret.eyes === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
  if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      generateBoard();
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      generateBoard();
    }
  }

  else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      generateBoard();
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      generateBoard();
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      generateBoard();
    } else {
      alert(
        `No, the person doesnt have ${value} ${category}! Remove all people with ${value} ${category}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      generateBoard();
    }
  }
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  console.log("personToConfirm", personToConfirm)
  const nameGuessFromUser = personToConfirm;
  let guessOption = prompt(`Do you want to guess on ${nameGuessFromUser}`, "yes");
  if (guessOption === "yes") {
    alert(`Let's see if the person is ${nameGuessFromUser}`);
    checkMyGuess(nameGuessFromUser);
  }
  if (guessOption !== "yes" || !guessOption) {
    alert("You can continue the game");
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (secret.name === personToCheck) {
    winOrLose.style.display = "flex";
    winOrLoseText.innerText = "YOU WIN!"
    board.innerHTML = ''
    asideSection.innerHTML = ''
  } else {
    winOrLose.style.display = "flex";
    winOrLoseText.innerText = "YOU LOOSE!"
    board.innerHTML = ''
  }
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
findOut.addEventListener('click', selectQuestion);
playAgain.addEventListener('click', () => { location.reload(); });
sendName.addEventListener('click', handleNameInput);
