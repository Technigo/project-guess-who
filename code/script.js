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
    other: ['cigarette', 'beard']
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
    other: ['cigarette']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['cigarette']
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
    other: ['cigarette', 'beard']
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
let secret
let currentQuestion
let charactersInPlay
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
  charactersInPlay = CHARACTERS
  document.getElementById('winOrLose').style.display = "none" //This hides the winOrLose css
  generateBoard();
  setSecret();
  console.log("Secret:", secret.name) //I can see in the console who is set as the secret
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value
  }
  console.log("Selected", currentQuestion.value)
  console.log("Selected", currentQuestion.category)
} 

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

if (category === 'hair' || category === 'eyes') {
  if (value === secret[category]) {
      filterCharacters (true)
   } else {
      filterCharacters(false)
   }

} else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters (true)
    } else {
      filterCharacters(false)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] === value
      );
      alert(
        `Yes, the person wears ${value} ${category}! Confirm to keep all people who wear ${value} ${category}.`
      );
    } else {
        charactersInPlay = charactersInPlay.filter(
          (person) => person[category] !== value
      );
      alert(
        `No, the person does not wear ${value} ${category}! Confirm to remove all people who wear ${value} ${category}.`
      );
    }
  }

  else if (category === 'accessories' || category === 'other') {    
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)
      );
      alert(
        `Yes, the person wears or has a ${value}! Confirm to keep all people who wear or have a ${value}.`
      );
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
      );
      alert(
        `No, the person does not wear or have a ${value}! Confirm to remove all people who wear or have a ${value}.`
      );
    }
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
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    let showWinOrLose = () => {
      document.getElementById('winOrLose').style.display = "flex"
      winOrLoseText.innerHTML = `✨ Nailed it!!! ✨`
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
}

// Invokes the start function when website is loaded
start();

// All the event listeners

questions.addEventListener('change', selectQuestion); //when player chooses hair/eyes/accessories/other, the function selectQuestion is called
findOutButton.addEventListener('click', checkQuestion); //when clicking on find out, the checkQuestion function is called
restartButton.addEventListener('click', start); //restarts the game bt calling the function start
playAgainButton.addEventListener('click', start); //when clicking on play again, the game restarts by calling the function start