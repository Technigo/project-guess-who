// All the DOM selectors stored as short variables in order like the HTML
const restartButton = document.getElementById('restart') 
const questions = document.getElementById('questions') 
const findOut = document.getElementById('filter')
const board = document.getElementById('board')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const boardWrapper = document.getElementById('boardWrapper')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Antman',
    img: 'images/Antman.jpg height="165px"',
    hair: 'hidden',
    eyes: 'hidden',
    superpower: ['strength'],
    other: ['hero']
  },
  {
    name: 'Aquaman',
    img: 'images/Aquaman.jpg width="135px"',
    hair: 'hidden',
    eyes: 'blue',
    superpower: ['strength','speed'],
    other: ['hero']
  },
  {
    name: 'Bane',
    img: 'images/Bane.jpg width="135px"',
    hair: 'bald',
    eyes: 'blue',
    superpower: ['feerless','super-sanity'],
    other: ['villain']
  },
  {
    name: 'Batman',
    img: 'images/Batman.jpg width="135px"',
    hair: 'hidden',
    eyes: 'hidden',
    superpower: ['tech'],
    other: ['hero']
  },
  {
    name: 'Black Panther',
    img: 'images/black-panter.jpg height="165px"',
    hair: 'hidden',
    eyes: 'hidden',
    superpower: ['strength','tech'],
    other: ['hero']
  },
  {
    name: 'Black Widow',
    img: 'images/Black-Widow.jpg height="165px"',
    hair: 'red',
    eyes: 'green',
    superpower: ['speed','tech'],
    other: ['hero']
  },
  {
    name: 'Captin America',
    img: 'images/Captin-america.jpg height="165px"',
    hair: 'brown',
    eyes: 'blue',
    superpower: ['strength','speed'],
    other: ['hero']
  },
  {
    name: 'Captin Marvel',
    img: 'images/Captin-marvel.jpg width="165px"',
    hair: 'gold',
    eyes: 'blue',
    superpower: ['strength'],
    other: ['hero']
  },
  {
    name: 'Dr Strange',
    img: 'images/dr-strange.jpg height="165px"',
    hair: 'black',
    eyes: 'green',
    superpower: ['magic'],
    other: ['hero']
  },

  {
    name: 'Flash',
    img: 'images/Flash.jpg height="165px"',
    hair: 'hidden',
    eyes: 'hidden',
    superpower: ['speed'],
    other: ['hero']
  },
  {
    name: 'Harley Quinn',
    img: 'images/harley-Quinn.jpg height="165px"',
    hair: 'white',
    eyes: 'black',
    superpower: ['super-sanity','feerless'],
    other: ['villain']
  },
  {
    name: 'Hulk',
    img: 'images/hulk.jpg height="165px"',
    hair: 'black',
    eyes: 'green',
    superpower: ['strength'],
    other: ['hero']
  },
  {
    name: 'Joker',
    img: 'images/joker.jpg height="165px"',
    hair: 'black',
    eyes: 'green',
    superpower: ['super-sanity','feerless'],
    other: ['villain']
  },
  {
    name: 'Spiderman',
    img: 'images/spiderman.jpg height="165px"',
    hair: 'hidden',
    eyes: 'hidden',
    superpower: ['strength','speed'],
    other: ['hero']
  },
  {
    name: 'Star Lord',
    img: 'images/star-lord.jpg height="165px"',
    hair: 'ginger',
    eyes: 'green',
    superpower: ['tech'],
    other: ['hero']
  },
  {
    name: 'Superman',
    img: 'images/superman.jpg height="165px"',
    hair: 'black',
    eyes: 'blue',
    superpower: ['immortality','speed','strength'],
    other: ['hero']
  },
  {
    name: 'Thor',
    img: 'images/Thor.jpg width="135px"',
    hair: 'grey',
    eyes: 'blue',
    superpower: ['strength'],
    other: ['hero']
  },
  {
    name: 'Wolverine',
    img: 'images/wolverine.jpg height="165px"',
    hair: 'brown',
    eyes: 'brown',
    superpower: ['strength','immortality'],
    other: ['hero']
  },
  {
    name: 'Wonder Woman',
    img: 'images/wonder-woman.jpg height="165px"',
    hair: 'black',
    eyes: 'green',
    superpower: ['speed'],
    other: ['hero']
  },
  {
    name: 'Loki',
    img: 'images/Loki.jpg height="165px"',
    hair: 'black',
    eyes: 'blue',
    superpower: ['magic'],
    other: ['villain']
  },
  {
    name: 'Iron Man',
    img: 'images/Iron-man.jpg height="165px" ',
    hair: 'hidden',
    eyes: 'hidden',
    superpower: ['tech'],
    other: ['hero']
  },
  {
    name: 'Thanos',
    img: 'images/Thanos.jpg  height="165px"',
    hair: 'bald',
    eyes: 'green',
    superpower: ['strength','immortality'],
    other: ['villain']
  },
  {
    name: 'Deadpool',
    img: 'images/Deadpool.jpeg  width="135px"',
    hair: 'hidden',
    eyes: 'hidden',
    superpower: ['immortality'],
    other: ['hero']
  },
  {
    name: 'Venom',
    img: 'images/Venom.jpg height="165px"',
    hair: 'bald',
    eyes: 'white',
    superpower: ['immortality','strength'],
    other: ['villain']
  },
  {
    name: 'Ghost Rider',
    img: 'images/Ghost_Rider.jpg width="135px"',
    hair: 'bald',
    eyes: 'red',
    superpower: ['immortality','magic'],
    other: ['villain']
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let counter = 0


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
// Counter conected to the HTML
let btncounter = document.querySelector("#filter")

btncounter.addEventListener('click', function () {
  counter++  // The ++ and one more per click the player does on findOut button
  document.querySelector("#result").innerHTML = counter})

// The game starts here
// This function to start (and restart) the game
const start = () => {
  console.log('start function is called')
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS 
  generateBoard() // We are setting up the board
  setSecret() // We set a secret person :)
}

// where u selectingen the questions in the dropdown
// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
   const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value,
  }
}

// when we ask the qusetion the checkqusetion 

const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false
  
 // Then we invoke it
  
 if (category === 'hair' || category === 'eyes') {
  keep = secret[category] === value
} else if (category === 'accessories' || category === 'other') {
  keep = secret[category].includes(value)
}
//The filterCharacters tells us what to keep
  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
const { category, value } = currentQuestion

  
// Show the correct alert message for different categories
if (category === 'superpower') {
  if (keep) {
    alert(
      `Yes, the person has ${value}! Keep all people that has ${value}.`
    )
  } else {
    alert(
      `No, the person doesn't has ${value}! Remove all people that has ${value}.`
    )
  }
} else if (category === 'hair') {
  if (keep) {
    alert(
      `You are right, the person has ${value} hair! Keep all that has ${value} hair.`
    )
  } else {
    alert(
      `Nope, the person doesn't have ${value} hair. Remove all that have ${value} hair.`
    )
  }
} else if (category === 'eye') {
  if (keep) {
    alert(
      `Good choice, the person has ${value} eyes! Keep all that has ${value} eyes.`
    )
  } else {
    alert(
      `Sorry, the person doesn't have ${value} eyes. Remove all that has ${value} eyes.`
    )
  }
} else if (category === 'other') {
  if (keep) {
    alert(
      `You are right, the person is a ${value}! Keep all that are ${value}.`
    )
  } else {
    alert(
      `Sorry, the person is not a ${value}. Remove all that are ${value}.`
    )
  }
} else {
  if (keep) {
    alert(
      `Yes, the person has ${value}! Keep all that still can be the secret person.`
    )
  } else {
    alert(
      `No, the person doesnt have ${value}! Remove all people that in fact are not the secret person.`
    )
  }
}

// Determine what is the category are, filter to keep and remove based on the variables from keep


// for hair and eyes
if (category === 'hair' || category === 'eyes') {
  if (keep) {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[category] === value
    )
  } else {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[category] !== value
    )
  }
  // for accessories and other
} else if (category === 'superpower' || category === 'other') {
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value)
    )
  } else {
    charactersInPlay = charactersInPlay.filter(
      (person) => !person[category].includes(value)
    )
  }
}

// Here we reinvoke the board with the remaining people after filtering.
generateBoard()
}


// when clicking guess, the player first have to confirm that they want to make a guess.'
 // store the interaction from the player in a variable.
 
const guess = (personToConfirm) => {
  const guessed = confirm(`Do you want to guess who the person is?`)
  if (guess) {
    checkMyGuess(personToConfirm)
  } 
}
// If you confirm, this function is invoked if its right guess
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Holycrap you are a mind reader! It was ${secret.name}!`
    // The sound if they are right
    var audio = new Audio('wand.mp3');
    audio.play();

// If the person guessed wrong
  } else {
    winOrLoseText.innerHTML = `Im sorry you guessed at the wrong person. The secret person was ${secret.name}. I hope you do better next time you play!`

 // The sound if the are wrong :) 
    var audio = new Audio('evilLaugh.mp3');
    audio.play();

  }

  winOrLose.style.display = 'flex'

}
    
 // Here we give the player one option i the wanna restart and play again
const  oneMoreTime = () => {
  winOrLose.style.display = 'none'
  start();
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOut.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', oneMoreTime)