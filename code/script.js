// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const anotherTryButton = document.getElementById('anotherTry')



// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['happy']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['angry']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'angry']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['happy']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['neutral']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['angry']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'earrings'],
    other: ['happy']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker', 'angry']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'angry']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'angry']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: ['angry']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['neutral']
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['happy']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'earrings'],
    other: ['angry']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['happy']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
    other: ['happy']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['happy']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['neutral']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: ['neutral']
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let guessedPerson


// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.map((person) => {
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
  charactersInPlay = CHARACTERS;
  generateBoard ();
  setSecret();
  // What else should happen when we start the game?
  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.


  currentQuestion = {
    category: category, 
    value: value,
   }
}
  

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log (currentQuestion)
  const { category, value } = currentQuestion
  let keep = false
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  if (category === "hair" || category === "eyes") {
    keep = value === secret[category];
    
  } else if (category === "accessories" || category === "other") {
    keep = secret[category].includes(value);
  }

  console.log('keep', keep); //To see that it's working
  filterCharacters(keep);
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that has ${value} hair!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)

    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)

    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))

      } else {
        alert(
          `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
        )
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))

      }
  } else if (category === 'other') {
      if (keep) {
        alert(
          `Yes, the person is ${value}! Keep all people who is ${value}`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))

      } else {
        alert(
          `No, the person is not ${value}! Remove all people who is ${value}`
        )
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))

    }
    
  }
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  guessedPerson = personToConfirm
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
 
  if (window.confirm(`Do you really think that this is the secret person?`)) {
    console.log('guess is', guessedPerson )
    checkMyGuess();
  }
}


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  console.log('check my guess', guessedPerson,)
  if (guessedPerson === secret.name) {

    winSection()

  } else if (guessedPerson !== secret.name) {
    loseSection()
  }
}


const winSection = () => {
  board.innerHTML = '';
  const win = document.getElementById('win').style.display = "flex"
}
const loseSection = () => {
  board.innerHTML = '';
  const lost = document.getElementById('lose').style.display = "flex"
}


// Invokes the start function when website is loaded
start();
console.log('secret person', secret);

// All the event listeners
restartButton.addEventListener('click', () => location.reload())
anotherTryButton.addEventListener('click', () => location.reload())
playAgainButton.addEventListener('click',  () => location.reload());
questions.addEventListener('change', () => { selectQuestion(questions.value);}); 
findOutButton.addEventListener('click', () => checkQuestion() )
