// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters
// Change array values for accessories and other to booleans?
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    accessories: ['glasses', 'hat'],
    other: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    accessories: ['hat', 'parrot'],
    other: false
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    accessories: ['hat'],
    other: true
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    accessories: ['tie'],
    other: false
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    accessories: ['glasses'],
    other: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    accessories: ['glasses'],
    other: false
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    accessories: ['glasses', 'necklace'],
    other: false
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    accessories: ['glasses'],
    other: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    accessories: ['glasses', 'necklace'],
    other: false
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    accessories: ['glasses'],
    other: true
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    accessories: ['glasses', 'hat'],
    other: true
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    accessories: ['glasses'],
    other: false
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    accessories: ['glasses', 'hat'],
    other: true
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    accessories: ['hat', 'phone'],
    other: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    accessories: ['glasses'],
    other: false
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    accessories: ['hat'],
    other: false
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    accessories: ['glasses'],
    other: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    accessories: ['glasses'],
    other: false
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    accessories: ['glasses'],
    other: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    accessories: ['glasses', 'hat', 'necklace'],
    other: false
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    accessories: [],
    other: false
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    accessories: [],
    other: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    accessories: ['tie'],
    other: false
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    accessories: ['glasses', 'hat'],
    other: false
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

// Randomly select a person from the characters array and set as the value of the variable called secret. Using Math.
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (characters) => {
  const makeAGuess = confirm(`Are you really sure you want to guess on ${characters}?`)
  // change here for minions
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (characters) => {
  if (minionToCheck === secret.name) {
    winOrLoseText.innerHTML = `Banana 🍌! Congrats <br>
    - you are a winner! <span role=img" aria-label="trophy">🏆</span>`
  }
  else {
    winOrLoseText.innerHTML = `Oh no, no banana for you this time. <br>
    <span role="img" aria-label = "warningLight">🚨</span>`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

  // 1. Check if the personToCheck is the same as the secret person's name. OK.
  // 2. Set a Message to show in the win or lose section accordingly. OK. 
  // 3. Show the win or lose section
  // 4. Hide the game board


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {} 
  const value = questions.value
  const category = questions.options[questions.selectedIndex].parentNode.label

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value, 
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: 'accessories',
      value: value,
      category: category, 
    }
  } else {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
  
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  const checkQuestion = () => {
    const keep = currentQuestion.value === secret[currentQuestion.attribute]
  
    filterCharacters(keep)
  }

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { attribute, category, value } = currentQuestion
  //perhaps add attribute within the curly brackets 

// Show the correct alert message for different categories
if (category === 'accessories') {
  if (keep) {
    alert(
      `Yes, the person wears ${attribute}! Keep all people that wears ${attribute}`
    )
  } else {
    alert(
      `No, the person does not wear a ${attribute}! Remove all people that wears ${attribute}`
    )
  }
} else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${attribute}! Keep all that are ${attribute}s.`
      )
    } else {
      alert(
        `No the person is not a ${attribute}. Remove all that are not ${attribute}s.`
      )
    }
} else {
  if (keep) {
    alert(
      `Correct, the person has ${value} ${category}! Keep all that have ${value} ${category}.`
    )
  } else {
    alert(
      `No, the person does not have ${value} ${category}! Remove all that do not have ${value} ${category}`
    )
  }
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
} 
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    // value: value
  }


  // Filter by category to keep or remove
if (keep) {
  charactersInPlay = charactersInPlay.filter(
    (person) =>[attribute] === value
  )
} else {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[attribute] !== value
  )
}

generateBoard()
  
}

// Function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS //reset character to original array
  winOrLose.style.display = 'none' //dont show win or lose display 
  board.style.display = 'flex' //show the board again
  setSecret() //set a new secret person
  generateBoard() //draw board w all characters
  // What else should happen when we start the game?
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('click', selectQuestion)
playAgainButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion)

