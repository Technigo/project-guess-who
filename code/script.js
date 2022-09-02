const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainBtn = document.getElementById('playAgain')
const guessCounter = document.getElementById('guess-counter')

const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['smiling'],
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
    accessories: 'hat',
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['smiling']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: 'glasses',
    other: ['smiling'],
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: 'glasses',
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: 'glasses',
    other: ['smiling'],
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: 'glasses',
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: 'glasses',
    other: ['smiling'],
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: 'glasses',
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
    accessories: 'glasses',
    other: ['smiling']
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
    accessories: 'hat',
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: 'glasses',
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: 'hat',
    other: ['smiling']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: 'glasses',
    other: ['smiling']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: 'glasses',
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: 'glasses',
    other: ['smiling']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['smiling']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: ['smiling']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['smiling']
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
    other: ['smiling']
  },
]

let secret
let currentQuestion
let charactersInPlay

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

// This function to start (and restart) the game
const start = () => {
  if (winOrLose.style.display === 'block') {
    winOrLose.style.display = 'none'
    board.style.display = 'flex'
  } else {
    winOrLose.style.display = 'none'
    board.style.display = 'flex'}
  console.log('starts the game and generates board')
  
  charactersInPlay = CHARACTERS // Here we're setting charactersInPlay array to be all the characters to start with

  generateBoard()
  setSecret()
  selectQuestion()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
  console.log('Question selected', currentQuestion)
}

   // This function invokes when the player click on ‘Find Out’ button. 
   //Compares the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
    let count = 0
    const checkQuestion = () => {
      count++

      guessCounter.innerHTML = ''
      guessCounter.innerHTML += `<p>Guess counter: ${count}</p>`
      const { category, value } = currentQuestion 
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

const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'other') {
    if (keep) {
      alert(`Yes the person is ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
        } else {
      alert (`No, the person is not ${value}! Remove all people that are ${value}!`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'hair') {
    if (keep) {
      alert (`Yes, the person has ${value} hair! Remove all people that are ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person does not have ${value} hair! Remove all people that has ${value} hair.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'eyes') {
    if (keep) {
      alert (`Yes the person has ${value} eyes! Remove all people that has ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person does not have ${value} eyes! Remove all people that have ${value} eyes!`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const madeGuess = confirm(`You are about to make ${personToConfirm} your guess?`)
  console.log('Guess button is clicked')
  if (madeGuess) {
    checkMyGuess(personToConfirm)
  }
}

// When you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    console.log('Win!')
    winOrLose.style.display = 'block',
    winOrLoseText.innerHTML = `It's correct! It was ${personToCheck}!`
    board.style.display = 'none'
  } else {
    console.log('You lost the game')
    winOrLose.style.display = 'block',
    winOrLoseText.innerText = `Wrong! It was ${secret.name}.`
    board.style.display = 'none'
  }
}

start();

restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutBtn.addEventListener('click', checkQuestion)
playAgainBtn.addEventListener('click', start)