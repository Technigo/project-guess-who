// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const backgroundMusic = document.getElementById('backgroundMusic')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'a headwear'],
    other: ['a happy face']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a headwear', 'a beard'],
    other: ['a pet']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['a headwear', 'a beard'],
    other: ['a smoking habit']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['a happy face']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['a happy face']
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
    accessories: ['glasses', 'a necklace'],
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
    accessories: ['glasses', 'earrings', 'a necklace'],
    other: ['a happy face']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['a smoking habit']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'a headwear'],
    other: ['a smoking habit']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['a happy face']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'a headwear', 'a beard'],
    other: ['a smoking habit']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a headwear'],
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
    accessories: ['a headwear'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['a happy face']
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
    other: ['a happy face']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'a headwear', 'a necklace'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
    other: ['a happy face']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['a happy face']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['a beard'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'a headwear'],
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


// Randomly selects a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}




// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  // Presents the board
  setTimeout(() => generateBoard(), 500) 

  // Selects a secret person
  setSecret()
  console.log(secret)

  // The player selects a question
  selectQuestion()
}


// Setting the currentQuestion object when the player selects something in the dropdown
const selectQuestion = () => {
  
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.

  const value = questions.value;
  // This variable stores the actual value of the question selected.

  currentQuestion = {
    category: category,
    value: value,
  }
}


// This function invokes when the player click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compares the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // Sees if we should keep or remove people based on that
  // Then invokes filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true);
    }
    else {
      filterCharacters(false);
    }
} 

else if (category === 'accessories' || category === 'other') {
  if (secret[category].includes(value)) {
    filterCharacters(true);
  }
  else {
    filterCharacters(false);
  }
} 
}
 

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Shows the correct alert message for different categories
  // Determines what is the category
  // filters by category to keep or remove based on the keep variable.

  // Accessories
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people that have ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`Nope, the person doesn't have ${value}! Remove everyone with ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) 
      // If the category is accessories/other it gets the value with the includes() method since their values are stored in an array
    }
  } 

    // Other
  else if (category === 'other') {
    if (keep) {
      alert(`Oh yes, the person has ${value}! Keep all people that have ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`Nope, the person doesn't have ${value}! Remove all people that have ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))  
    }
  }

    // Eyes
    else if (category === 'eyes') {
      if (keep) {
        alert(`Yes, the person has beautiful ${value} eyes! Keep all people with ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value) 
      } else {
        alert(`No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    }

      // Hair
  else if (category === 'hair') {
    if (keep) {
      alert(`That's correct, the person has ${value} hair! Keep all people with ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`Nope, the person doesn't have ${value} hair! Remove all people with ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }


  // Invokes the function to redraw the board with the remaining people.
  generateBoard()
}

// When clicking guess, the player first have to confirm that they want to make a guess.
// This stores the interaction from the player in a variable.
  // Asks the player to confirm
  // If the player wants to guess, the checkMyGuess function invokes.
const guess = (personToConfirm) => {
  const result = window.confirm(`Are you sure this is your choice?`);

  if (result) {
    checkMyGuess(personToConfirm);
  }
}

// If player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  
  // 1. Checks if the personToCheck is the same as the secret person's name
  // 2. Sets a Message to show in the win or lose section accordingly
  // 3. Shows the win or lose section
  // 4. Hides the game board
  if (personToCheck === secret.name) {
    pauseBackgroundMusic()
    alert("We have a winner! Well done!");
    winOrLose.style.display='block';
  }
  else {
    alert("Computer says no. Game over!");
    winOrLose.style.display='block';
    pauseBackgroundMusic()
  }
}

// Invokes the start function when website is loaded
start()

// This function runs the background music
const playBackgroundMusic = () => {
  backgroundMusic.play()
}

// This function pauses the background music
const pauseBackgroundMusic = () => {
  backgroundMusic.pause()
}

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
questions.addEventListener('change', playBackgroundMusic) //Music starts when the player clicks on the dropdown list
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => {
  start()
  winOrLose.style.display='none'; //Invokes the Play again-button and displays the game board
})


