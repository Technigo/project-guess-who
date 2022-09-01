// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const guessButton = document.getElementById('guess-button')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
 
// Array with all the characters, as objects. The 'accessories' and 'other' properties are nested arrays.
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'a hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['a hat'],
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
    accessories: ['glasses', 'a hat'],
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
    accessories: ['glasses', 'a hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a hat'],
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
    accessories: ['a hat'],
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
    accessories: ['glasses', 'a hat'],
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
    accessories: ['glasses', 'a hat'],
    other: []
  },
]

// GLOBAL VARIABLES
// These start out as undefined variables that get assigned (new) values in the functions below.
let secret
let currentQuestion
let charactersInPlay

// This function generates the game board. Due to the forEach(person) method, it creates a new "card" for every individual in the CHARACTERS array, along with a guess button.
const generateBoard = () => {
  console.log("generateBoard invoked")
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id="guess-button" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// This function randomly selects a person from the characters array and sets that person as the value of the 'secret' variable.
// I've added a console.log message here to check that the function assigned a new random person to the game with every refresh (Iteration 2 of the assignment).
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log("setSecret invoked:")
  console.log(secret.name)
}

// This function starts (and restarts) the game. 
// It starts by adding all the characters (and their properties) in the CHARACTERS array to the charactersInPlay variable. 
// It then invokes the above setSecret function, which randomly selects one of those characters to be the target of the game. 
// It then invokes the generateBoard function to render the board with all the characters.
// Finally, if this function is invoked by the user restarting the game, it clears the win/lose CSS settings and restores the board.
  const start = () => {
    console.log("start invoked")
    charactersInPlay = CHARACTERS
    setSecret()
    generateBoard()
    winOrLose.style.display = 'none'
    board.style.display = 'flex'
  }  

// This function starts out by defining two new variables: category and value, based on what you select in the drop-down menu. 
const selectQuestion = () => {
  console.log("selectQuestion invoked")
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
// It then adds these as properties to the currentQuestion object.
  currentQuestion = {
    category: category,
    value: value
  }
  console.log("currentQuestion invoked")
  console.log(currentQuestion)
}

// This function filters out characters based on the properties of the currentQuestion object.
const checkQuestion = () => {
  console.log("checkQuestion invoked")
  const {category, value} = currentQuestion

  if (category === 'hair' || category === 'eyes') { // IF the user selected a value in the categories 'hair' OR 'eyes'...
    if (value === secret.hair || value === secret.eyes) { // AND if the selection matched that of the secret person's hair OR eyes...
      filterCharacters(true) // invoke the filterCharacters function. 
    } else {
      filterCharacters(false) // Otherwise, don't invoke it.
    }
} else if (category === 'accessories' || category === 'other') { // IF the user selected a value in the categories 'accessories' OR 'other'...
  if ((secret.accessories).includes(value)) { // AND if the secret person has a value in 'accessories' corresponding to what the user selected...
    filterCharacters(true) // invoke the filterCharacters function. 
  } else if ((secret.other).includes(value)) { // Alternatively, IF the secret person has a value in 'other' corresponding to what the user selected...
    filterCharacters(true) // invoke the filterCharacters function.
  } else {
    filterCharacters(false) // Otherwise, don't invoke it.
  }
}
}

// This function filters out the characters we want to keep and redraws the game board. 
const filterCharacters = (keep) => {
  console.log("filterCharacters invoked")
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(`Yep! The person wears ${value}! Removing everyone who doesn't wear ${value}...`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`Nope! The person doesn't wear ${value}! Removing everyone who wears ${value}...`)
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(`Yep! The person's a ${value}. Removing everyone who's not a ${value}...`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`Nope! The person's not a ${value}. Removing everyone who's a ${value}...`)
    }
  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Yep! The person's hair colour is ${value}. Removing everyone who's hair colour isn't ${value}...`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`Nope! The person's hair colour isn't ${value}. Removing everyone with ${value} hair...`)
    }
  } else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Yep! The person has ${value} eyes. Removing everyone who doesn't have ${value} eyes...`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`Nope! The person's eye colour isn't ${value}. Removing everyone who's eye colour is ${value}...`)
    }
  }
  generateBoard()
} 

// Upon clicking any Guess button, the player will by prompted to confirm their choice. If they do (confirm === true), they invoke the checkMyGuess function below.
const guess = (personToConfirm) => {
  console.log("guess invoked")
  if (confirm(`You're about to select ${personToConfirm}. Are you sure?`) === true) {
  checkMyGuess(personToConfirm)
  } else {
  alert("No problem! Keep playing then.")
  }
}

// By confirming, the player invokes the checkMyGuess function.
const checkMyGuess = (personToCheck) => {
  console.log("checkMyGuess invoked")
  if (personToCheck === secret.name) { 
    winOrLoseText.innerHTML = `Well done! It was indeed ${personToCheck}!`
    } else {
      winOrLoseText.innerHTML = `You fool! It was ${secret.name}.`
    }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

// This function is the one that kicks everything else off. It's invoked as soon as the browser has read through all the rest of the code and makes it down to here.
//It's at the bottom because we want the browser to read all the 'game rules' first before kicking off.
start()

// EVENT LISTENERS

// This EL invokes the start function whenever the user clicks on the Restart button.
restartButton.addEventListener('click', start)
// The next two ELs invoke the selectQuestion AND checkQuestion functions whenever the user clicks on the Find Out button.
findOutButton.addEventListener('click', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)