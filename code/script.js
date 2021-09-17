// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')

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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

  function findOutCounter() {
    updateDisplay(++counterValue);
  }

  function updateDisplay(val) {
    document.getElementById("counterLabel").innerHTML = val;
  }


// This function to start (and restart) the game
const start = () => {
  counterValue = 0;
  updateDisplay(counterValue);
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  winOrLose.style.display = 'none';
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variabel stores the actual value of the question we've selected.
  const questionValue = questions.value;

  // this variable stores what option group (category) the question belogs to
  currentQuestion = {
    category: category,
    value: questionValue,
  }
}

// This function is invoked when you click Find out. It compares the guess with the characters (and then invokes the filter-function)
const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if (secret[currentQuestion.category] === currentQuestion.value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }  

  } else if (category === 'accessories' || category === 'other') {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
}

// This big function will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
  if (category === 'accessories') {
    if (keep) {
      alert (
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
     
    } else {
      alert (
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
        )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  
    }

  } else if (category === 'other') {
    if (keep) {
      alert (
        `Yes, the person is ${value}! Keep all people that is ${value}.`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))

    } else {
      alert(
        `No, the person isn't ${value}! Remove all people that are ${value}.`
        )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }


  } else if (category === 'hair') {
    if (keep) {
      alert (
        `Yes, the person has ${value} hair! Keep all people that has ${value} hair.`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)

    } else {
      alert (
        `No, the person doesn't has ${value} hair! Remove all people that has ${value} hair.`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
  

  } else if (category === 'eyes') {
    if (keep) {
        alert (
          `Yes, the person has ${value} eyes! Keep all people with ${value} eyes.`
          )
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)

      } else {
        alert (
          `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes.`
          )
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    }

  // This function renders the board when som characters are removed.
  generateBoard()
}

//this function confirms and stores the guess
const guess = (personToConfirm) => {
  const confirmedGuess = confirm(
    `Are you really sure you want to take a guess on ${personToConfirm}?`
    );

    if (confirmedGuess) {
      checkMyGuess(personToConfirm);
    }
}

// When you have confirmed your guess, this function will show if you are right or wrong
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLose.style.display = 'block';
    winOrLoseText.innerHTML = `
    <h1>You wonderful beast!<br /> You won! Go celebrate (by playing one more time).</h1>`
    
  } else {
    winOrLose.style.display = 'block';
    winOrLoseText.innerHTML = `<h1>You lost. Very sad.<br /> Do you want to play again?</h1>`
  }
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start) //starts and restarts the game
questions.addEventListener("change", selectQuestion); //registers a new question/value when it is chosen from the dropdown
filterButton.addEventListener('click', checkQuestion); //filters the electable persons
playAgainButton.addEventListener('click', start); //when you are done with the game, you can play again