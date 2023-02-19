// All the DOM selectors stored as short variables
const board = document.getElementById("board")
const questions = document.getElementById("questions")
const restartButton = document.getElementById("restart")
const findOutButton = document.getElementById("filter")
const winOrLose = document.getElementById("winOrLose")
const winOrLoseText = document.getElementById("winOrLoseText")
const playAgainButton = document.getElementById("playAgain")

// Array with all the characters, as objects
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
    other: ['parrot', 'beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'beard']
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
    other: ['smoker', 'beard']
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
    accessories: ['glasses', 'hat'],
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
    other: ['beard']
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

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let keep

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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  document.getElementById('winOrLose').style.display = "none" //This hides the winOrLose css
  generateBoard(); 
  setSecret();
  console.log("Secret:", secret.name)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
if (category === 'hair') {
  currentQuestion = {
    category: category,
    value: value
  }
} else if (category === 'eyes') {
  currentQuestion = {
   category: category,
   value: value
  }
} else if (category === 'accessories') {
  currentQuestion = {
    category: category,
    value: value
  }

} else if (category === 'other') {
  currentQuestion = {
    category: category,
    value: value
  }
}
}

// This function should be invoked when you click on 'Find Out' button.
//I decided to try the switch statement here since I did so many if else statements in the 
//previous project
const checkQuestion = () => {
  const { category, value } = currentQuestion

let keep = false

switch (category) {
  case 'hair':
  case 'eyes':
    console.log(category, value)
    if (value === secret[category]) {
      keep = true
    }
    break;
  case 'accessories':
  case 'other':
    if (secret[category].includes(value)) {
      keep = true
    }
    break;
  default:
    break;
}
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  switch (category) {
    case 'hair':
    case 'eyes':
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => 
        person[category] === value
      );
      alert(
        `Yes, the person wears ${value} ${category}! Confirm to keep all people who wear ${value}`
      );
    } else {
        charactersInPlay = charactersInPlay.filter((person) =>
        person[category] !== value
      );
      alert(
        `No, the person does not wear ${value} ${category}! Confirm to remove all people who wear ${value}`
      );
    }
    break;

  case 'accessories':
  case 'other':
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value)
      );
      alert(
        `Yes, the person has ${value}! Confirm to keep all people who have ${value}`
      );
    } else {
      charactersInPlay = charactersInPlay.filter((person) =>
      !person[category].includes(value)
      );
      alert(
        `No, the person does not have ${value}! Confirm to remove all people who have ${value}`
      );
    }
    break;
    default:
    break;
  }

  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const playerConfirmation = confirm(`Are you sure about your guess on ${personToConfirm}?`
  );
  if (playerConfirmation) {
    checkMyGuess(personToConfirm);
  } else {
    alert(`Ok, keep guessing!`);

  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    let showWinOrLose = () => {
      document.getElementById('winOrLose').style.display = "flex"
      winOrLoseText.innerHTML = `Whoop whoop, you got it!!! 🍾`
    }
    board.innerHTML = ""
    showWinOrLose ();
} else {
  let showWinOrLose = () => {
    document.getElementById('winOrLose').style.display = "flex"
    winOrLoseText.innerHTML = `Better luck next time, ${secret.name} was the one to look for! 👀`
  }
    board.innerHTML = ""
    showWinOrLose ();
}
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)