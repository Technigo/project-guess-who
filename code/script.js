// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')

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
let personToConfirm
let personToCheck

// Draw the game board
const generateBoard = (charactersInPlay) => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id="guessBtn" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}
generateBoard(CHARACTERS)

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = (charactersInPlay) => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]

}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with

  winOrLose.style.display = "none";
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  setSecret(CHARACTERS)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
  const value = questions.value
  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.

const checkQuestion = () => {
  const { category, value } = currentQuestion
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  // I created a group of console.log to help me check what information it contains and if I can use it in this scope
  // console.log(secret.name)
  // console.log(currentQuestion)
  // console.log(charactersInPlay)
  // console.log(secret[category])
  // console.log(value)


  if (category === 'hair' || category === 'eyes') {
    let compare = value === secret[category]
    filterCharacters(compare);
  }

  if (category === 'accessories' || category === 'other') {
    let compare = secret[category].includes(value)
    if (compare === true) {
      filterCharacters(true)
    }
    else if (compare === false) {
      filterCharacters(false)
    }
  }
}


// It'll filter the characters array and redraw the game board.<
// Use !== 
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people with ${value}`)
    } else {
      alert(`No, the person doesn't have ${value}! Remove all people that doesn't have ${value}`)
    }
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value === keep)
  }
  else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} color! Keep all people that has ${value} color`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`No, the person doesn't have ${value} color! Remove all people that has ${value} color`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all people that is a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person isn't a ${value}! Remove all people isn't a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  generateBoard(charactersInPlay)
  // I encounter some problems of the above block of code, I used chatGPT to check what was wrong. It provided an improvement of my code
  // Although I realized the problem was the value in the drop down list (hats) didn't match the attribube in the object (hat)
  // const filterCondition = keep
  //   ? (person) => person[category].includes(value)
  //   : (person) => !person[category].includes(value);

  // if (category === 'accessories') {
  //   if (keep) {
  //     alert(`Yes, the person wears ${value}! Keep all people that wear ${value}`);
  //   } else {
  //     alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}`);
  //   }

  //   charactersInPlay = charactersInPlay.filter(filterCondition);
  // }

}

// const redraw = 

// Determine what is the category
// filter by category to keep or remove based on the keep variable.
/* 
  for hair and eyes :
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    or
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
 
  for accessories and other
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    or
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
*/

// Invoke a function to redraw the board with the remaining people.e player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // personToConfirm = person.name
  if (confirm(`Are you sure you want to guess on ${personToConfirm}?`) == true) {
    checkMyGuess(personToConfirm)
  }
}
// store the interaction from the player in a variable.
// remember the confirm() ?
// If the player wants to guess, invoke the checkMyGuess function.


// If you confirm, this function is invoked


// 1. Check if the personToCheck is the same as the secret person's name
// 2. Set a Message to show in the win or lose section accordingly
// 3. Show the win or lose section
// 4. Hide the game board

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLose.style.display = "flex";
    winOrLoseText.innerHTML += `
    <h1>YAY! Congrats
    – you won! 🙌</h1>`
  } else {
    winOrLose.style.display = "flex";
    winOrLoseText.innerHTML = ""
    winOrLoseText.innerHTML += `
    <h1>Oh no! You guessed wrong. Game over! 😤</h1>
    `
  }
}

const replay = () => {
  generateBoard(CHARACTERS);
  start();
}
// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', replay)
questions.addEventListener('change', selectQuestion)
filterBtn.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', replay)



