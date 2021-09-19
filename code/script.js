// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const findOutButton = document.getElementById('filter')
const playAgainBtn = document.getElementById('playAgain')
const restartButton = document.getElementById('restart')
const questions = document.getElementById('questions')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Marie',
    img: 'images/jabala.svg',
    hair: 'unknown',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat'],
    other: ['happy']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'unknown',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['angry']
  },
  {
    name: 'Melvin',
    img: 'images/jacques.svg',
    hair: 'unknown',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'unsure']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'dark',
    accessories: [],
    other: ['happy']
  },
  {
    name: 'Bertil',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Bosse',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['sunglasses'],
    other: ['unsure']
  },
  {
    name: 'Evelin',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses', 'jewelry'],
    other: ['happy']
  },
  {
    name: 'Hilda',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['unsure']
  },
  {
    name: 'Berit',
    img: 'images/jaqueline.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses', 'jewelry'],
    other: ['happy']
  },

  {
    name: 'Pia',
    img: 'images/jazebelle.svg',
    hair: 'other',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker', 'unsure']
  },
  {
    name: 'Lars',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'angry']
  },
  {
    name: 'Katarina',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Henrik',
    img: 'images/jed.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'angry']
  },
  {
    name: 'Ulrika',
    img: 'images/jenni.svg',
    hair: 'other',
    eyes: 'hidden',
    accessories: ['hat', 'jewelry'],
    other: ['unsure']
  },
  {
    name: 'Malin',
    img: 'images/jeri.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['unsure']
  },
  {
    name: 'Ronny',
    img: 'images/jerry.svg',
    hair: 'unknown',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['happy']
  },
  {
    name: 'Petra',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Ki',
    img: 'images/jocelyn.svg',
    hair: 'brown',
    eyes: 'dark',
    accessories: ['glasses', 'jewelry'],
    other: ['angry']
  },
  {
    name: 'Martin',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Gunnar',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewelry'],
    other: ['happy']
  },
  {
    name: 'Fia',
    img: 'images/josephine.svg',
    hair: 'other',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: ['happy']
  },
  {
    name: 'Hannes',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['happy']
  },
  {
    name: 'Pelle',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['unsure']
  },
  {
    name: 'Ann-Charlotte',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'dark',
    accessories: ['glasses', 'hat'],
    other: ['unsure']
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
  generateBoard()
  setSecret()
  selectQuestion()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  const {name, img, hair, eyes, accessories, other} = secret

 if (category === 'hair' || category === 'eyes') {
   if (value === hair || value === eyes) {
      filterCharacters(true)
  } else {
      filterCharacters(false)
   }

  } else if (category === 'accessories') {
      if (secret.accessories.includes(value)) {
        filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  } else if (category === 'other') {
      if (secret.other.includes(value)) {
        filterCharacters(true)
    } else {
      filterCharacters(false)
    } 
    }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, that person is ${value}. Byebye all people who aren't ${value}!`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `Noooope, ${value} is not correct! Byebye all people who are ${value}!`
        )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `How did you know!?! That person has ${value} hair. Lets keep 'em ${value}haired!`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, wrong! ${value} is not correct, toss all the ${value}haired people!`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'eyes') {
    if (keep) {
    alert(
      `Yes, our secret person does have ${value} eyes. So long to all the other ones!`
      )
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `Wrong! Our secret person does not have ${value} eyes. Say godbye to all people with ${value} eyes!`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  generateBoard()

}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => { 
  guessedPerson = confirm(`Are you sure you want to guess ${personToConfirm}?`)
 
  if (guessedPerson) {
     checkMyGuess(personToConfirm)
  } else {
     alert('Ok, go back at it!')
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
    const {name} = secret
    board.style.display = 'none'
    winOrLose.style.display = 'flex'
    
    if (personToCheck === name) {
     winOrLoseText.innerText = `Amazeballs, that's correct! Do it again!`
  } else { (guess !== secret)
     winOrLoseText.innerText = `Noooo, that's wrong! Do it again!`
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainBtn.addEventListener('click', () => {
  winOrLose.style.display = "none";
  board.style.display = "flex";
  start()
})