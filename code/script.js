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
    other: ['pirate']
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

// Counter to keep track of how many guesses the player does. 
let btnCounter = document.querySelector('#filter')
let counter = 0

const updateGuessCounter = () => {
  btnCounter.innerHTML = `Guesses: ${parseInt(counter)}`;
};

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
  console.log(secret)
}

// setting the currentQuestion object when you select something in the dropdown
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
const selectQuestion = () => {
  const value = questions.value //referring to the value in the optgroups in the index-file
  const category = questions.options[questions.selectedIndex].parentNode.label 

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
}


// Compares the currentQuestion with the secret person based on category
// Eyes and hair can be compared by compairing the value of the property string from the secret person and all other characters on the board
// Accessories and other can be compared by caompairing the arrays and therefor we use .includes(value)
const checkQuestion = () => {
  const { category, value } = currentQuestion; 

  if (category === 'eyes' || category === 'hair') {
    if (value === secret.eyes || value === secret.hair) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }  } 

  else {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters();
    }
  }
  counter++; 
updateGuessCounter();
}

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  // filter by category to keep or remove based on the keep variable.
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }

  else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all that are ${value}s`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all that are ${value}s`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }  
  }

    else {
      if (keep) {
      alert (
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert (
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
} 

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const makeAGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`)
  if (makeAGuess) {
    checkMyGuess(personToConfirm)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You we're correct! <br> Great job!`
  } else {
    winOrLoseText.innerHTML = `Wrong answer. <br> Let's try again!`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}



// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  winOrLose.style.display = 'none' 
  board.style.display = 'flex' 
  // Invoke generate board and set secret when loading and reloading the page
  setSecret()
  generateBoard()
  counter = 0;
updateGuessCounter();
}


// Invokes the start function when website is loaded
start()


// All the event listeners
restartButton.addEventListener('click', start)
playAgainButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)

// Event listener for the counter (that I didn't use, but will try to get it to work later)
// btnCounter.addEventListener('click', function () {
 // counter ++
//  document.querySelector("#result").innerHTML = counter
//})

