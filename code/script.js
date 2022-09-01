const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const WinOrLoseText = document.getElementById('WinOrLoseText');


const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['smiling'],
    clothes: 'green'
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
    clothes: 'green'
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
    clothes: 'green'
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
    clothes: 'green'
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: 'glasses',
    other: 'smoker'
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: 'smoker'
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
    other: 'smoker',
    clothes: 'green'
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
    other: [],
    clothes: 'green'
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
    other: [],
    clothes: 'green'
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
    other: ['smiling'],
    clothes: 'green'
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
    other: ['smiling'],
    clothes: 'green'
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
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  board.classList.remove('hide-board')
  WinOrLose.classList.remove('show-win-lose')

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
  console.log(currentQuestion)
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = (currentQuestion) => {
  const { category, value } = currentQuestion
  console.log(category)
  console.log(value)

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  let keep
  if (category === 'hair' && value === secret.hair) {
    keep = true
  } else if (category === 'eyes' && value === secret.eyes) {
    keep = true
  } else if (category === 'other' && value === secret.other.find(element => element === value)) {
    keep = true
  } else if (category === 'accessories' && value === secret.accessories.find(element => element === value)) {
    keep = true
  } else if (category === 'clothes' && value === secret.clothes.find(element => element === value)) {
    keep = true
  }
  filterCharacters(keep)
}

const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person.accessories.includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person.accessories.includes(value))
    }

  } else if (category === 'other') {
    if (keep) {
      alert(`Yes the person is ${value}! Remove all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person.other.includes(value))
    } else {
      alert (`No, the person is not ${value}! Remove all people that are ${value}!`)
        charactersInPlay = charactersInPlay.filter((person) => !person.other.includes(value))
    }

  } else if (category === 'hair') {
    if (keep) {
      alert (`Yes, the person has ${value} hair! Remove all people that are ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person.hair.includes(value))
    } else {
      alert(`No, the person does not have ${value} hair! Remove all people that has ${value} hair.`)
        charactersInPlay = charactersInPlay.filter((person) => !person.hair.includes(value))
    }

  } else if (category === 'eyes') {
    if (keep) {
      alert (`Yes the person has ${value} eyes! Remove all people that has ${value}`)
      charactersInPlay = charactersInPlay.filter ((person) => person.eyes.includes(value))
    } else {
      alert(`No, the person does not have ${value} eyes! Remove all people that have ${value} eyes!`)
      charactersInPlay = charactersInPlay.filter ((person) => !person.eyes.includes(value))
    }

  } else if (category === 'clothes') {
    if (keep) {
      alert (`Yes, the person has ${value} clothes! Remove all people that has ${value} clothes!`)
      charactersInPlay = charactersInPlay.filter((person) => person.clothes.includes(value))
    } else {
      alert (`No, the person does not have ${value} clothes! Remove all that has ${value} clothes!`)
      charactersInPlay = charactersInPlay.filter((person) => !person.clothes.includes(value))
    }
  }




  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  if (
    confirm(`You are about to make ${personToConfirm} your guess?`) === true
  ) {
    checkMyGuess(personToConfirm)
  }
}
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    WinOrLoseText.innerText = `It's correct! \n\n it was ${personToCheck}!`
  } else {
    WinOrLoseText.innerText = `Wrong! \n\n it was ${secret.name}, \n not ${personToCheck}.`
  }
  board.classList.add('hide-board')
  WinOrLose.classList.add('show-win-lose')
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

start();

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutBtn.addEventListener('click', checkQuestion)