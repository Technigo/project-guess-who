// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const filterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLose = document.getElementById('winOrLose')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById('playAgain')

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
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
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
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    headgear: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
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
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    headgear: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
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
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    headgear: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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
  console.log(secret);
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
};

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
      // 👆 add the value from the input here
      category
    }
  } else if (category === 'eye color') {
    // Set this up your self
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category
    }
  } else if (category === 'other') {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
      attribute: value,
      value: true,
      category
   }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]
  filterCharacters(keep)
 // Compare the currentQuestion with the secret person.
// See if we should keep or remove people based on that
// Then invoke filterCharacters
}
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
// Show the correct alert message for different categories
const { attribute, category, value } = currentQuestion

if (category === 'accessories') {
  if (keep) {
    alert(
      `You are correct, the person wears ${attribute}! Keep all that wears ${attribute}.`
    )
  } else {
    alert(
      `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}.`
    )
  }
} else if (category === 'hair color') {
  if (keep) {
    alert(`You are correct, the person has ${value} hair! Keep all that has ${value} hair.`
    )
  } else {
    alert(
    `No, the person doesn't have ${value} hair. Remove all that has ${value} hair.`
    )
  }
} else if (category === 'eye color') {
  if (keep) {
    alert(
      `You are correct, the person has ${value} eyes! Keep all that has ${value} eyes.`
    )
  } else {
    alert(
      `No, the person doesn't have ${value} eyes. Remove all that has ${value} eyes.`
      )
  }
} else if (category === 'other') {
  if (keep) {
    alert(
      `You are correct, the person has a ${attribute}. Keep all that has a ${attribute}s.`
    )
} else {
    alert(
      `No, the person doesn't have a ${attribute}. Remove all that has a ${attribute}.`
    )
  } 
}

  // filter to keep or remove based on the keep variable.
  
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  generateBoard()

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const confirmed = confirm(`Do you think the secret person is ${suspect}?`)

  if (confirmed) {
    checkMyGuess(suspect)
  }
// store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
};

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {

  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `You have got it!! It was ${suspect}. Good job!`
  } else {
    winOrLoseText.innerHTML = `Sorry. It is not ${suspect}. It was ${secret.name}!`
  }
  
  // 1.Check if the suspect is the same as the secret person's name
  // 2.Set a Message to show in the win or lose section accordingly
  // 3.Show the win or lose section
  // 4.Hide the game board
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

playAgain.addEventListener('click', () => {
  location.reload()
})

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', () => selectQuestion())
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)