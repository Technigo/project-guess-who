// All the DOM SELECTORS stored as short variables//
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('findOut')
const playAgainButton = document.getElementById('playAgain')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText');


// ARRAY WITH ALL THE CARACTERS (as objects)//
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

// GLOBAL VARIABLES//
let secret //Will be the secret person object
let currentQuestion //Will be the current question object
let charactersInPlay //Will be an array of the people options still left in the game
let personToConfirm; //Filtering

// DRAW THE GAME BOARD - create a card for each person//
const generateBoard = () => {
  board.innerHTML = '' //Safety to keep board from just adding more charachters - how does it work tho?
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

//FUNCTIONS FOR GLOBAL VARIABLES//
// RANDOMLY SELECT A CHARACTER FROM ARRAY and set as the value of the variable called secret//
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret)
}

//START FUNCTION TO START (and restart) GAME//
const start = () => {
  //Link to all characthers from start
  charactersInPlay = CHARACTERS
  // Invokes the generateBoard function to display the board of charachters when website is loaded
  generateBoard()
  // Invokes the setSecret charachter function when website is loaded 
  setSecret()
  console.log("Start function called");
}

//DROPDOWN MENU - QUESTIONS//
// SETTING THE currentQuestion OBJECT when you select something in the dropdown menu
const selectQuestion = () => {
  console.log(selectQuestion)
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value
  // These variables store what option group (category) and value the question (option) belongs to.
  currentQuestion = {
    category: category,
    value: value
  }
}

//CHECK QUESTION //
//This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // COMPARE THE currentQuestion WITH THE SECRET PERSON based on category (hair, etc). See if we should keep or remove people based on that
  //Spent some on a mistake made here because when hair and eyes were correctly guessed, it first showed that the answer was right - then that it was wrong - and then the wholeboard disappeared. Turned out to be another curly bracket issue.. 
  if (category === 'hair' || category === 'eyes') {
    console.log(category, value)
    if (secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }

  else if (category === 'accessories' || category === 'other') {
    console.log(category, value)
    if (secret[category].includes(value)) {
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }
  }
}


// FILTER THE CHARACHTERS AND REDRAW BOARD GAME //
//Alert messages for every fallout
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people who wear ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people who wear ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people who wear ${value}`
      )
    } else {
      alert(
        `No, the person doesn´t wear ${value}! Remove all people who wear ${value}`
      )
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keep all people who have ${value} hair`
      )
    } else {
      alert(
        `No, the person doesn´t have ${value} hair! Remove all people who have ${value} hair`
      )
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people who have ${value} eyes`
      )
    } else {
      alert(
        `No, the person doesn´t have ${value} eyes! Remove all people who have ${value} eyes`
      )
    }
  }

  // FILTER BY CATEGORY TO KEEP/REMOVE BASED ON THE KEEP VARIABLE//
  if (category === 'hair' || category === 'eyes') {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value) === keep);
  } else if (category === 'accessories' || category === 'other') {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value) === keep);
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

//CLICK GUESS//
// when clicking guess, the player has to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(`Are you sure you want to guess ${personToConfirm}?`);
  if (confirmGuess) checkMyGuess(personToConfirm);
}

//WIN OR LOSE.//
// If they confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `That's correct!!! You won! Congratulations!`;
  } else {
    personToConfirm !== secret.name;
    winOrLoseText.innerHTML = `Sorry, thats wrong!`;
  }
  winOrLose.style.display = "flex";
}


//INVOKE START FUNCTION when webiste is loaded//
start()

// EVENT LISTENERS //
//Select an option from dropdown - eventlistener
questions.addEventListener('change', selectQuestion);
//Find out whether the option selected was right or wrong
findOutButton.addEventListener('click', checkQuestion);
//Restart game
restartButton.addEventListener('click', start)
//Play again from the win/ lose site
playAgainButton.addEventListener('click', () => {
  winOrLose.style.display = "none"
  start()
})