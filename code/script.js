const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLoseWrapper = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain")
const winOrLoseText = document.getElementById("winOrLoseText")
const questionsAsked = document.getElementById("questionsAsked")

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
    accessories: ['glasses'],
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
    accessories: ['glasses'],
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
    accessories: ['glasses'],
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
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
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
    accessories: ['glasses', 'hat'],
    other: []
  },
]

//Global variables
let secret
let currentQuestion
let charactersInPlay

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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}


// This function to start (and restart) the game
const start = () => {
  winOrLoseWrapper.style.display = "none";
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecret();
  console.log(secret);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }

  } else {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value, secret } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
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
        alert(`Yes, the person ${value}! Keep all people that ${value}`);
        charactersInPlay = charactersInPlay.filter((person) =>
          person[category].includes(value)
        );
      } else {
        alert(`No, the person does not ${value}! Remove all people who ${value}`);
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category].includes(value)
        );
      }


    } else if (category === "hair") {
      if (keep) {
        alert(
          `Yes, the person has ${value} hair! Keep all people with ${value} hair`
        );
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value
        );
    
      } else {
        alert(
          `No, the person does not have ${value} hair! Remove all people with ${value} hair`
        );
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value
        );
      }


    } else {
      if (keep) {
        alert(
          `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
        );
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value
        );
      } else {
        alert(
          `No, the person does not have ${value} eyes! Remove all people with ${value} eyes`
        );
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value
        );
      }
    }
 generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  confirm(`Do you really want to guess?`) 
  if (true){
    checkMyGuess(personToConfirm);
  } else {}
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (secret.name === personToCheck) {
    winOrLoseText.innerHTML =
      "Woooho, you guessed it right! You win!";
  } else {
    winOrLoseText.innerHTML =
      "Oh no, you  guessed wrong! Try again!";
}
winOrLoseWrapper.style.display = "block";
}


// Invokes the start function when website is loaded
start()


// All the event listeners
restartButton.addEventListener("click", start)
questions.addEventListener("change", selectQuestion)
findOutButton.addEventListener("click", checkQuestion)
playAgainButton.addEventListener("click", start);
