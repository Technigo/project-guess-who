// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.querySelector('.win-or-lose-wrapper')
const playAgain = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')
const resultWrapper = document.getElementById('winOrLose')

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
    accessories: ['glasses', 'hat', 'necklace'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
    other: ['happy']
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
  selectQuestion()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      keep = true
    } else {
      keep = false
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
    keep = true
  } else {
    keep = false
  }
}
filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      Swal.fire(
        `Yes, the person wears ${value}! Let's keep all the people that wears ${value}`)
    } else {
      Swal.fire(`No, the person doesn't wear ${value}! Let's remove all the people that wears ${value}`)
    }
  } else if (category === 'other') {
    if (keep) {
      Swal.fire(`Yes, the person is a ${value}! Let's keep all the smokers`)
    } else {
      Swal.fire(`No, the person is'nt a ${value}! We're removing all the smokers!`)
    }
  }
    else if (category === 'hair') {
      if (keep) {
        Swal.fire(`Yes, the person has ${value} hair! Let's keep all the people with ${value} hair`)
      } else {
       Swal.fire(`No, the person doesn't have ${value} hair! Now we're removing all people with ${value} hair`)
      }
    }
    else {
      if (keep) {
        Swal.fire(`Yes, the person has ${value} eyes. Let's keep all the people that have ${value} eyes`)
      } else {
        Swal.fire(`No, the person doesn't have ${value} eyes. Now we're removing all people with ${value} eyes`)
      }
    }

    // Conditionals for filtering by category to keep or remove based on keep variable
    if (category === 'hair' || category === 'eyes') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
  
      } else if (category === 'accessories' || category === 'other') {
        if (keep) {

          charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
        } else {
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
        }
      }

  // Invoking the function to redraw board with remaining people.
  generateBoard()
}

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  let letGuess = Swal.fire({
    title: 'Are you sure?',
    text: `Do you want to guess on ${personToConfirm}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d4b4b2',
    cancelButtonColor: '#9a2323',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      checkMyGuess (personToConfirm)
    }
  })
  }

const checkMyGuess = (personToCheck) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })

  resultWrapper.classList.add("active")
  if (personToCheck === secret.name) {
    winOrLose.style.display = 'flex'
    winOrLoseText.innerText = 'Yay, you won! Play again?'
  } else {
    winOrLose.style.display = 'flex'
    winOrLoseText.innerText = `Sorry, it's not ${personToCheck}. It was ${secret.name}. Play again?`
  }

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', () => {
  start()
  winOrLose.style.display = 'none'
} )