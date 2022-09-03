// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')


// Global variables
let secret
let currentQuestion
let charactersInPlay

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Lion',
    img: 'images/Lion.svg',
    color: ['brown'],
    eat: 'carnivore',
    habitat: 'savanah',
    moves: ['climb']
  },
  {
    name: 'Giraffe',
    img: 'images/Giraffe.svg',
    color: ['brown'],
    eat: 'herbivore',
    habitat: 'savanah',
    moves: []
  },
  {
    name: 'Elephant',
    img: 'images/Elephant.svg',
    color: ['grey'],
    eat: 'herbivore',
    habitat: 'savanah',
    moves: ['swim']
  },
  {
    name: 'Rhinoceros',
    img: 'images/Rhinoceros.svg',
    color: ['grey'],
    eat: 'herbivore',
    habitat: 'savanah',
    moves: []
  },
  {
    name: 'Zebra',
    img: 'images/Zebra.svg',
    color: ['black', 'white'],
    eat: 'herbivore',
    habitat: 'savanah',
    moves: []
  },
  {
    name: 'Hippo',
    img: 'images/Hippo.svg',
    color: ['grey'],
    eat: 'omnivore',
    habitat: 'savanah',
    moves: ['swim']
  },
  {
    name: 'Gorilla',
    img: 'images/Gorilla.svg',
    color: ['black'],
    eat: 'herbivore',
    habitat: 'jungle',
    moves: ['climb']
  },
  {
    name: 'Panther',
    img: 'images/Panther.svg',
    color: ['black'],
    eat: 'carnivore',
    habitat: 'jungle',
    moves: ['climb']
  },
  {
    name: 'Tucan',
    img: 'images/Tucan.svg',
    color: ['black', 'yellow', 'orange'],
    eat: 'herbivore',
    habitat: 'jungle',
    moves: ['fly']
  },

  {
    name: 'Snake',
    img: 'images/Snake.svg',
    color: ['black', 'yellow'],
    eat: 'carnivore',
    habitat: 'jungle',
    moves: ['climb']
  },
  {
    name: 'Chimpanzee',
    img: 'images/Chimpanzee.svg',
    color: ['black',],
    eat: 'omnivore',
    habitat: 'jungle',
    moves: ['climb']
  },
  {
    name: 'Parrot',
    img: 'images/Parrot.svg',
    color: ['yellow', 'black'],
    eat: 'omnivore',
    habitat: 'jungle',
    moves: ['climb', 'fly']
  },
  {
    name: 'Cow',
    img: 'images/Cow.svg',
    color: ['white', 'black'],
    eat: 'herbivore',
    habitat: 'farm',
    moves: []
  },
  {
    name: 'Horse',
    img: 'images/Horse.svg',
    color: ['brown', 'black'],
    eat: 'herbivore',
    habitat: 'farm',
    moves: []
  },
  {
    name: 'Pig',
    img: 'images/Pig.svg',
    color: ['pink'],
    eat: 'herbivore',
    habitat: 'farm',
    moves: []
  },
  {
    name: 'Sheep',
    img: 'images/Sheep.svg',
    color: ['white', 'black'],
    eat: 'herbivore',
    habitat: 'farm',
    moves: []
  },
  {
    name: 'Chicken',
    img: 'images/Chicken.svg',
    color: ['white', 'black'],
    eat: 'herbivore',
    habitat: 'farm',
    moves: []
  },
  {
    name: 'Duck',
    img: 'images/Duck.svg',
    color: ['yellow'],
    eat: 'herbivore',
    habitat: 'farm',
    moves: ['swim', 'fly']
  },
  {
    name: 'Deer',
    img: 'images/Deer.svg',
    color: ['brown'],
    eat: 'herbivore',
    habitat: 'forest',
    moves: []
  },
  {
    name: 'Rabbit',
    img: 'images/Rabbit.svg',
    color: ['brown'],
    eat: 'herbivore',
    habitat: 'forest',
    moves: []
  },
  {
    name: 'Fox',
    img: 'images/Fox.svg',
    color: ['brown', 'black'],
    eat: 'omnivore',
    habitat: 'forest',
    moves: ['climb']
  },
  {
    name: 'Squirrel',
    img: 'images/Squirrel.svg',
    color: ['brown'],
    eat: 'herbivore',
    habitat: 'forest',
    moves: ['climb']
  },
  {
    name: 'Raccoon',
    img: 'images/Raccoon.svg',
    color: ['grey', 'black', 'white'],
    eat: 'omnivore',
    habitat: 'forest',
    moves: ['climb']
  },
  {
    name: 'Sparrow',
    img: 'images/Sparrow.svg',
    color: ['brown', 'black', 'white'],
    eat: 'omnivore',
    habitat: 'forest',
    moves: ['fly']
  },
]

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((animal) => {
    board.innerHTML += `
      <div class="card">
        <p>${animal.name}</p>
        <img src=${animal.img} alt=${animal.name}>
        <div class="guess">
          <span>Guess on ${animal.name}?</span>
          <button class="filled-button small" onclick="guess('${animal.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select an animal from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  setSecret () // select secret character
  generateBoard () 
  selectQuestion () 
  
}

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; // This variable stores what option group (category) the question belongs to.
  const value = questions.value; // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (category === 'eat' || category === 'habitat') {
    keep = value === secret [category];
  } else if (category === 'color' || category === 'moves') {
    keep = secret[category].includes(value);
  }
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
// Show the correct alert message for different categories
  if (category === 'color') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((animal) => animal [category].includes(value))
      alert(`Yes, the animal is ${value}! Keep all the animals that are ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((animal) => !animal[category].includes(value))
      alert(`No, the animal is not ${value}! Remove all the animals that are ${value}`)
    } 
  } else if (category === 'moves') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((animal) => animal [category].includes(value))
      alert(`Yes, the animal can ${value}! Keep all the animals that can ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((animal) => !animal[category].includes(value))
      alert(`No, the animal can not ${value}! Remove all the animals that can ${value}`)
    }
  } else if (category === 'habitat') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((animal) => animal [category] === value)
      alert(`Yes, the animal lives in the ${value}! Keep all the animals that live in the ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((animal) => animal [category] !== value)
      alert(`No, the animal does not live in the ${value}! Remove all the animals that live in the ${value}`)
    }
  } else if (category === 'eat') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((animal) => animal [category] === value)
      alert(`Yes, the animal is a ${value}! Keep all the animals that are ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((animal) => animal [category] !== value)
      alert(`No, the animal is not a ${value}! Remove all the animals that are ${value}`)
    }
  }
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (animalToConfirm) => {
  const confirmation = confirm(`Are you sure it is ${animalToConfirm}?`)
  if (confirmation === true) {
    checkMyGuess(animalToConfirm)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (animalToCheck) => {
  board.style.display = 'none'
  winOrLose.style.display = 'flex'
  if (animalToCheck === secret.name){ //Check if the animal ToCheck is the same as the secret animals's name
    winOrLoseText.innerHTML = `Yey! You are right, Congratulations!`
  } else {
    winOrLoseText.innerHTML = `I am sorry, that is not correct. The secret animal was ${secret.name}`
  } //Set a Message to show in the win or lose section accordingly
  //Show the win or lose section
  //Hide the game board 
}

// Invokes the start function when website is loaded
start()

reload = () => {
  window.location.reload()
}

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
playAgainButton.addEventListener('click', reload);
