// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const secretPerson = document.getElementById('secretPerson')
const findOutButton = document.getElementById('filter')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Albin',
    img: 'images/albin.svg',
    skinColor: 'blue',
    skinTexture: 'spots',
    attributes: ['twolegs'],
    other: []
  },
  {
    name: 'Bonnie',
    img: 'images/bonnie.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Cooper',
    img: 'images/cooper.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Dani',
    img: 'images/dani.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Edward',
    img: 'images/edward.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Freyja',
    img: 'images/freyja.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'George',
    img: 'images/george.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Holly',
    img: 'images/holly.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Idris',
    img: 'images/Idris.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },

  {
    name: 'Jasmine',
    img: 'images/jasmine.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Kurt',
    img: 'images/kurt.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Lilly',
    img: 'images/lilly.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Marcus',
    img: 'images/marcus.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Naomi',
    img: 'images/naomi.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Ollie',
    img: 'images/ollie.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Poppy',
    img: 'images/poppy.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Quentin',
    img: 'images/quentin.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Rosie',
    img: 'images/rosie.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Spencer',
    img: 'images/spencer.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Tina',
    img: 'images/tina.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Umer',
    img: 'images/umer.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Valerie',
    img: 'images/valerie.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Walter',
    img: 'images/walter.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Yolanda',
    img: 'images/yolanda.svg',
    skinColor: 'hidden',
    skinTexture: 'hidden',
    attributes: ['glasses', 'hat'],
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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
  selectQuestion()
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    value: value,
    // value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (currentQuestion["value"] === secret[currentQuestion["attribute"]]) {
    keep = true;
  } else {
    keep = false;
  }

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {

  } else if (category === 'accessories' || category === 'other') {

  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
    // Similar to the one above
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener('click', checkQuestion);

