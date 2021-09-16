// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: false,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: true,
    button: true,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: true,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    headgear: false,
    necklace: true,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: true,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: true,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    headgear: true,
    necklace: true,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'hazel',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: true,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
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
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
  console.log(setSecret)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  
  const value = questions.value
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value,
      category
    }

  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category
    }

  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true,
      category
    }

  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category
   }
}
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

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
restartButton.addEventListener('click', start)
questions.addEventListener('change', () => selectQuestion())
