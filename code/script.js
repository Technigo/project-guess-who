// The DOM selectors in use.
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const guessButton = document.getElementById('guess-button')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
 
// All of the characters we will use in the game as an array.
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

// GLOBAL VARIABLES that are not yet defined.
let secret
let currentQuestion
let charactersInPlay

// A function that generates the board, referencing the HTML docuent. The forEach method creates each character and makes it visible as a separate "space".
const generateBoard = () => {
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

// The setSecret selects a person which the player will have to guess on. 
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function starts (and restarts) the game. This function allows the game to start, and eventually restart. It sets all the characters into the charactersInPlay variable, starts the setSecret funtion and generates the board.
// The winOrLose and board.style.display lines make it so that the CSS for win and lose are invisible before the game is over.
  const start = () => {
    charactersInPlay = CHARACTERS
    setSecret()
    generateBoard()
    winOrLose.style.display = 'none'
    board.style.display = 'flex'
  }  

// the selectQuestion funcion defines category and value as variables, and stores the information that the player picks in the options menu.
  const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
}

// Here, we state the rules for filtering out characters.
  const checkQuestion = () => {
  const {category, value} = currentQuestion

  if (category === 'hair' || category === 'eyes') { // If the player selected a property within the hair or eyes category
    if (value === secret.hair || value === secret.eyes) { // And if the selected property matches the randomly selected correct person's properties
      filterCharacters(true) // the filterCharacters funtion is invoked
    } else {
      filterCharacters(false) 
      // If the above statements are false, the funtion is not invoked.
    }
} else if (category === 'accessories' || category === 'other') { // If the player selected a property within the accessories or other category
  if ((secret.accessories).includes(value)) { // And if the selected property matches the randomly selected correct person's properties in the accessories category
    filterCharacters(true) // the filterCharacters funtion is invoked
  } else if ((secret.other).includes(value)) { // OR if the selected property matches the randomly selected correct person's properties in the other category
    filterCharacters(true) // invoke the filterCharacters function.
  } else {
    filterCharacters(false)
    // If the above statements are false, the funtion is not invoked.
  }
}
}

// Here, we filter out the characters we rules out in the function above.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(`Very good! The person wears ${value}! Remove everyone who doesn't wear ${value}.`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`Not quite, the person does not wear ${value}! Remove those who wear ${value}.`)
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(`Correct, the person is a ${value}. Remove those who are not a ${value}.`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`Nix, the person is not a ${value}. Remove those who are a ${value}.`)
    }
  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Nice! The person has ${value} hair. Remove those who don't have ${value} hair.`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`Nope! The person does not have ${value} hair. Remove everyone with ${value} hair.`)
    }
  } else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Good! The person does have ${value} eyes. Remove everyone who doesn't have ${value} eyes.`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`No! The person does not have ${value} eyes. Remove those who have ${value} eyes.`)
    }
  }
  generateBoard() // Here we regenerate the board based on the filtration above.
} 

// When guessing on a person, the player will be prompted to either confirm the guess or keep playing.
// If they do confirm the guess, it will invoke the checkMyGuess funtion.
const guess = (personToConfirm) => {
  if (confirm(`Are you sure you want to guess on ${personToConfirm}?`) === true) {
  checkMyGuess(personToConfirm)
  } else {
  alert("Okidoki. Keep playing then!")
  }
}

// If the player confirmed in the prompt above, this function is invoked.
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) { 
    winOrLoseText.innerHTML = `Yaay! You were right, the person was indeed ${personToCheck}! Gold star for you!`
    } else {
      winOrLoseText.innerHTML = `No, silly! The correct person was ${secret.name}.`
    }
  winOrLose.style.display = 'flex'
  board.style.display = 'none' // These two lines display the winOrLose CSS that were previously hidden.
}

// The start() function is invoked with this line below. It is down here at the bottom of the code so that the computer reads through all the rules above first.
start()

// EVENT LISTENERS that enable the functions we want when the user clicks the start, find out, or guess buttons.

restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)
