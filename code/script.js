// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const filterButton = document.getElementById('filter') // This is the "Find out"-button
const winOrLose = document.getElementById('winOrLose') 
const winOrLoseText = document.getElementById('winOrLoseText') 
const restartButton = document.getElementById('restart')
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
    hair: 'blonde',
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
    hair: 'blonde',
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
    hair: 'blonde',
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
    hair: 'blonde',
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
  console.log(generateBoard)
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}



// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label 
  // This variable stores the actual value of the question we've selected.
  const value = questions.value
  
  if (category === 'hair') {
    currentQuestion = {
      category: 'hair',
      value: value
    }
  } else if (category === 'eyes') {
    currentQuestion = {
      category: 'eyes',
      value: value
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      category: 'accessories',
      value: value
    }
  } else {
    currentQuestion = {
      category: 'other',
      value: value
    }
  }  
  // This is an object that stores the key: and its value
  //currentQuestion = {
  // category: category, // hair, eyes or accessories
  // value: value     // blue or brown etc
  // }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion; // This is to destruct the currentQuestion object to be able to use these variables more easily
  if (category === 'eyes') {
    if (value === secret.eyes) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  } else if (category === 'hair') {
    if (value === secret.hair) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  }
}



// const keep = currentQuestion.value === secret[currentQuestion.category && value]
// category === "accessories" && value === secret[currentQuestion.category].includes(currentQuestion.value)

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  // Add a filter to keep or remove. Array method .filter
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears a ${value}! Keep all people that wears a ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear a ${value}! Remove all the people that wears a ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }

  else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all that are ${value}s.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all that are ${value}s.`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }  
  }

    else {
      if (keep) {
      alert (
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert (
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

/*
  // Shorter way to write it? 
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    )
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[category] !== value
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    )
  }
  */

    // Generate the board again but filtered, with things removed from the array
    generateBoard()
  }



// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  const makeAGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`) 
    if (makeAGuess === true) {
      checkMyGuess(personToConfirm)
    }
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Yes! You made the right guess. Congratulations! 🎉`
  } else {
    winOrLoseText.innerHTML = `Darn it! You made the wrong guess. Play again? 👀`
  }
}



// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  // What else should happen when we start the game?
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  charactersInPlay = CHARACTERS;
  generateBoard()
  setSecret()
  selectQuestion()
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion) // Find out button
playAgainButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
