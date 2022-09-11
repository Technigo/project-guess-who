// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const winOrLose = document.getElementById ('winOrLose')
const winOrLoseText1 = document.getElementById ('winOrLoseText1')
const winOrLoseText2 = document.getElementById ('winOrLoseText2')


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
  console.log(secret) // to see the secret person
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard();  // Calling the radomly selected person
  setSecret();
}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  
   // This variable stores what option group (category) and value the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  let value = questions.value

  currentQuestion = {
    category: category, //hair, eyes, accesories, other
    value: value, // the value in every category
  }
}

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  document.getElementById('questions').value = ""

  keep = true
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      filterCharacters(keep)  
   } else {
      filterCharacters(false)
    }
  
  } else if (category === 'accessories' || category === 'other') {
    if ( secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(keep)
    } else {
      filterCharacters(false)
    }
  }
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, of course! The person have ${value} hair! That means we'll keep all people with ${value} hair`
      )
    } else {
      alert(
        `No, sorry! The person doesn't have ${value} hair! Remove all people that have ${value} hair`
      )
    }

  } if (category === 'eyes') {
    if (keep) {
      alert(
        `You're good! Of course the person have ${value} eyes! Keep all people that have ${value} eyes`
      )
    } else {
      alert(
        `Oh no, sorry, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`
      )
    }
  } 
  if (category === 'accessories') {
    if (keep) {
      alert(
        `You're on fire! Of course the person has ${value}! That means we'll keep all people that do. `
      )
    } else {
      alert(
        `Sorry no ... the person has no ${value}. Remove all people that have.`
      )
    }
  } 

  if (category === 'other') {
    if (keep) {
      alert(
        `Unfortunately yes, this person is a ${value}! Keep all people that smoke`
      )
    } else {
      alert(
        `Good thing this person isn't a ${value}. Remove all people that is.`
      )
    }
  } 

  // Determine what is the category & filter by category to keep or remove based on the keep variable.

  if (category === 'hair' || category === 'eyes' ){
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] === currentQuestion.value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] !== currentQuestion.value)
    }
  }

  if ( category === 'other' || category === 'accessories'){
    if(keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }  
  }

  generateBoard() // Invoke a function to redraw the board with the remaining people.
}

start(); // Invokes the start function when website is loaded



// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmGuess = confirm(`You sure you want to guess on ${personToConfirm}?`)
  if (confirmGuess) {
    checkMyGuess(personToConfirm) //invoking the checkMyGuess function
  }
}


// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  if (personToConfirm === secret.name) {
   winOrLoseText1.innerHTML = `🥇 Hurray! 🥇`
   winOrLoseText2.innerHTML = `You guessed the correct person, ${secret.name}!`
  } else { winOrLoseText1.innerHTML = `Oh, bummer 🤷‍♀️ ...`
            winOrLoseText2.innerHTML = `I'm sorry, but the correct person is ${secret.name}`
  }


winOrLose.style.display = "flex"
board.style.display = "none"
}


const playAgain = () => {
    winOrLose.style.display = "none"
    board.style.display = "flex"
    start ()
}


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', playAgain)

