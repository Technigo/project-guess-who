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
    hat: true,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    hat: true,
    glasses: false,
    smoker: false
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    hat: false,
    glasses: true,
    smoker: true
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    hat: false,
    glasses: false,
    smoker: false
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    hat: false,
    glasses: true,
    smoker: false
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    hat: false,
    glasses: true,
    smoker: true
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    hat: true,
    glasses: true,
    smoker: true
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    hat: true,
    glasses: true,
    smoker: true
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    hat: true,
    glasses: false,
    smoker: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    hat: true,
    glasses: false,
    smoker: false
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    hat: false,
    glasses: true,
    smoker: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    hat: true,
    glasses: true,
    smoker: false
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    hat: false,
    glasses: false,
    smoker: false
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    hat: false,
    glasses: false,
    smoker: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    hat: false,
    glasses: false,
    smoker: false
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    hat: true,
    glasses: true,
    smoker: false
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
  console.log(secret)
}

// setting the currentQuestion object when you select something in the dropdown
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
const selectQuestion = () => {
  const value = questions.value
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

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
   const keep = currentQuestion.value === secret[currentQuestion.category]


  filterCharacters(keep)
}

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  /* if (category === 'hair' || category === 'eyes') {

  } else if (category === 'accessories' || category === 'other') {

  } */

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`);
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
    }
  }

  else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all that are ${value}s`)
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all that are ${value}s`)
    }  
  }

    else {
      if (keep) {
      alert (
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`)
    } else {
      alert (
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`)
    }
  }

  
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
    // for hair and eyes :
    if (category === 'hair', 'eyes') {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    } 
  //  for accessories and other
 if (category === 'accessories', 'other') {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
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
    winOrLoseText.innerHTML = `YAY! Congrats <br>
     – you won! <span role="img" aria-label="cheer">🙌</span>`
  } else {
    winOrLoseText.innerHTML = `Oh no! You guessed wrong. Game over! <span role="img" aria-label="angry">😤</span>`
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
  setSecret()
  generateBoard()
  // What else should happen when we start the game?
}


// Invokes the start function when website is loaded
start()


// All the event listeners
restartButton.addEventListener('click', start)
restartButton.addEventListener('click', start) 
playAgainButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)