// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLoose = document.getElementById('winOrLoose')
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
    other: ['beard']
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
    accessories: ['tie'],
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
    other: ['stubble']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'necklace'],
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
    accessories: ['glasses', 'necklace', 'earrings'],
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
    other: ['smoker', 'stubble']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['freckles']
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
    other: ['photographer']
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
    accessories: ['tie'],
    other: ['beard']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: ['braids']
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
  charactersInPlay = CHARACTERS
  // We start off with setting the charactersInPlay array to show all the characters on the board when the games start

  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {

  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.

  const value = questions.options[questions.selectedIndex].value
  // We also need a variable that stores the actual value of the question we've selected.

  const label = questions.options[questions.selectedIndex].label
  // And finally we also want to store the label for the value to be used in the alerts later.


  currentQuestion = {
    category: category,
    value: value,
    label: label
  }
}

// This function is invoked when you click on the 'Find Out' button.
const checkQuestion = () => {
  selectQuestion()
  // We need to start with calling selectQuestion to define the currentQuestion object
  const { category, value, label } = currentQuestion
  const { name, img, hair, eyes, accessories, other } = secret


  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // Determine if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (value.includes(secret.hair) || value.includes(secret.eyes))
      filterCharacters(true)
    else {
      filterCharacters(false)
    }
    }
  else if (category === 'accessories') {
    if (secret.accessories.includes(label)){
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }
  }
  else if (category === 'other') {
    if (secret.other.includes(label)){
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    } 
  }
}


// This function will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  const { category, value, label } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Aye, the person do indeed wears ${label}! Keep all people that wears ${label}.`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      alert(
        `Shoot! The person doesn't wear ${label}. Remove all people that wears ${label}.`
        )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Check! The person has ${label}. Keep all people that has ${label}.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    else {
      alert(
        `Drat! That person doesn't have ${label}. Remove all people that have ${label}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'hair') {
      if (keep) {
        alert(
          `Roger that! The person has ${value} hair. Keep all people that have ${value} hair.`
          )
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      }
      else {
        alert(
          `Darn! The person does not have ${value} hair. Remove all people that have ${value} hair.`
          )
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Nice! The person has ${value} eyes. Keep all people that have ${value} eyes.`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } 
    else {
      alert(
        `Rats! The person does not have ${value} eyes. Remove all people that have ${value} eyes.`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
generateBoard()
// Invokes the function to redraw the board with the remaining people left after the filtering above.
}


// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  playerGuess = confirm(`Are you really sure you want to guess on ${personToConfirm}?`)
  // Stores the interaction from the player in a variable.

  // If the player wants to guess, this will invoke the checkMyGuess function.
  if (playerGuess) {
    checkMyGuess(personToConfirm)
  }
  else {
    alert(`No worries, you can guess later.`)
  }
}

// If the player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    // Checks if the personToCheck is the same as the secret person's name

    document.getElementById("winOrLooseText").innerHTML = `🎊 Woot woot! Your guess on ${personToCheck} is correct. You win! 🎊`;
    // Sets a Message to show in the win or loose section accordingly

    showWinOrLooseMessage()
    // Invokes the win or loose section

  }
  else {
    document.getElementById("winOrLooseText").innerHTML = `Bummer! Your guess on ${personToCheck} is not correct. You loose!`;
    // Set a Message to show in the win or loose section accordingly

    showWinOrLooseMessage()
    // Invokes the win or loose section
  }
}

const showWinOrLooseMessage = () => { 
  winOrLoose.style.display = "block";
  // Shows in the win or loose section
  board.style.display = "none";
  // Hides the game board
  }


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', () => window.location.reload(false))
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => window.location.reload(false))