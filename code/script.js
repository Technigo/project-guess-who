// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const winnerImg = document.getElementById('winner')
const questionSection = document.getElementById('questionSection')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Aaron',
    img: 'images2/aaron.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: ['animal'],
    other: []
  },
  {
    name: 'Aiden',
    img: 'images2/aiden.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: ['hat', 'mobile'],
    other: []
  },
  {
    name: 'Alex',
    img: 'images2/alex.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: ['mobile'],
    other: ['tattoos']
  },
  {
    name: 'Ben',
    img: 'images2/ben.jpg',
    hair: 'brown',
    eyes: 'hidden',
    accessories: [],
    other: []
  },
  {
    name: 'Brian',
    img: 'images2/brian.jpg',
    hair: 'brown',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['beard']
  },
  {
    name: 'Callum',
    img: 'images2/callum.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: ['glasses'],
    other: ['mustache']
  },
  {
    name: 'Calvin',
    img: 'images2/calvin.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: [],
    other: []
  },
  {
    name: 'Cameron',
    img: 'images2/cameron.jpg',
    hair: 'blonde',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  // {
  //   name: 'Charlie',
  //   img: 'images2/charlie.jpg',
  //   hair: 'brown',
  //   eyes: 'hidden',
  //   accessories: [],
  //   other: []
  // },

  {
    name: 'Damon',
    img: 'images2/damon.jpg',
    hair: 'blonde',
    eyes: 'dead',
    accessories: [],
    other: []
  },
  {
    name: 'Devon',
    img: 'images2/devon.jpg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Emily',
    img: 'images2/emily.jpg',
    hair: 'blonde',
    eyes: 'dead',
    accessories: ['mobile', 'animal'],
    other: []
  },
  {
    name: 'Gemma',
    img: 'images2/gemma.jpg',
    hair: 'blonde',
    eyes: 'dead',
    accessories: [],
    other: ['lipstick']
  },
  {
    name: 'Hayden',
    img: 'images2/hayden.jpg',
    hair: 'brown',
    eyes: 'hidden',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images2/jake.jpg',
    hair: 'no',
    eyes: 'dead',
    accessories: [],
    other: ['tattoos']
  },
  {
    name: 'Jamie',
    img: 'images2/jamie.jpg',
    hair: 'blonde',
    eyes: 'hidden',
    accessories: [],
    other: []
  },
  {
    name: 'Jason',
    img: 'images2/jason.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: [],
    other: []
  },
  {
    name: 'Liam',
    img: 'images2/liam.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: [],
    other: ['tattoos', 'beard', 'mustache']
  },
  // {
  //   name: 'Nick',
  //   img: 'images2/nick.jpg',
  //   hair: 'brown',
  //   eyes: 'dead',
  //   accessories: ['animal'],
  //   other: []
  // },
  {
    name: 'Nigel',
    img: 'images2/nigel.jpg',
    hair: 'no',
    eyes: 'dead',
    accessories: [],
    other: ['mustache']
  },
  // {
  //   name: 'Phillip',
  //   img: 'images2/phillip.jpg',
  //   hair: 'brown',
  //   eyes: 'dead',
  //   accessories: ['glasses', 'mobile'],
  //   other: []
  // },
  {
    name: 'Sasha',
    img: 'images2/sasha.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: [],
    other: ['lipstick']
  },
  {
    name: 'Shaun',
    img: 'images2/shaun.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: ['animal'],
    other: []
  },
  {
    name: 'Stefan',
    img: 'images2/stefan.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: [],
    other: []
  },
  {
    name: 'Tom',
    img: 'images2/tom.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: ['hat', 'mobile'],
    other: []
  },
  {
    name: 'Tracey',
    img: 'images2/tracey.jpg',
    hair: 'brown',
    eyes: 'dead',
    accessories: [],
    other: []
  },
  {
    name: 'Trent',
    img: 'images2/trent.jpg',
    hair: 'blonde',
    eyes: 'dead',
    accessories: [],
    other: ['beard']
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let userGuess

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img class="img-card" src=${person.img} alt=${person.name}>
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
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value
  }
}



// This function should be invoked when you click on 'Find Out' button.
// Checking if the attributes in currentQuestion matches the ones of secret person
const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (secret[category].includes(value)) {
    filterCharacters(true);
  } else {
    filterCharacters(false)
  }
}

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes! Indeed ${value}! Keep all people with ${value}.`
      ) 
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `Nope! No ${value} here! Remove everyone with ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep everyone with ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, no ${value} here... Remove all the tinder nightmares that have ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Oh yes, the person has got ${value} hair! Keep all the loosers with ${value} hair.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, this tinder nightmare does not have ${value} hair! Remove everyone with ${value} hair.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'eyes') {
      if (keep) {
        alert(
            `Yes, the person have ${value} eyes! Keep all persons with ${value} eyes.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
        alert(
            `No, the person haven´t got ${value} eyes! Remove all persons that have ${value} eyes.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  userGuess = confirm(`Are you sure you think it's ${personToConfirm}?`)

  if (userGuess === true) {
    checkMyGuess(personToConfirm)
  } else {
    alert(`Alright, give it another go!`)
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
    if (personToCheck === secret.name) {
  // 2. Set a Message to show in the win or lose section accordingly
  winOrLoseText.innerHTML = `
      <div class="winner-card"><img class="winner-img" src="images2/${secret.name}-big.jpg" />
      <p class="win-or-lose-text">You goddamn right it's that dirty fish ${secret.name}!</p><p>Well played!</p></div>`
  // 3. Show the win or lose section
      winOrLose.style.display = "flex"
      
    } else {
      winOrLoseText.innerHTML = `
      <p>Sorry babe but you got it all oh-so wrong...</p>`
      winOrLose.style.display = "flex"
    }

  // 4. Hide the game board
  board.innerHTML = ''
  questionSection.innerHTML = ''

}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => {
  winOrLose.style.display = "none";
  board.style.display = "flex";
  start()
})