// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

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
// Vi har inte sparat något värde i currentQuestion från början utan det sparas endast när man väljer en option i drop down menyn. Menyn har ett förvalt värde som vi nu
// sparar i currentQuestion. Alternativt kan man sätta en förvald option tex "Välj kategori" och disablea "FIND OUT" knappen
let currentQuestion = { guessCategory: "hair", value: "brown" }
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

// Randomly select a person from the characters array and sets as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  winOrLose.style.display = 'none'
  generateBoard()
  setSecret()
  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const guessCategory = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (guessCategory) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;
 
  // when the two variables have been declared they are stored in an array of an object called (currentQuestion).
  currentQuestion = {
    guessCategory: guessCategory,
    value: value
  }
  //console.log(currentQuestion)
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { guessCategory, value } = currentQuestion
  
  //console.log(currentQuestion)
  //console.log(category)
  //console.log(value)

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (guessCategory === 'hair' || guessCategory === 'eyes') {
    keep = value === secret[guessCategory]    
    //The user's guess (value) is compared with the secret person (secret). 
    //The [guessCategory] is the variable (see row 245) which saves the category the user chose its value from. 
    //If choosing category hair, secret[guessCategory] will then look into the same category for the secret person and extract the values from there.   
  
    //alternativ 1: lösning keep = value === secret[guessCategory]

  } else if (guessCategory === 'accessories' || guessCategory === 'other') {
    keep = secret[guessCategory].includes(value)
    //alternativ 2: lösning med funktionen include()
  }
filterCharacters(keep)

}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { guessCategory, value } = currentQuestion
  // Show the correct alert message for different categories
  if (guessCategory === 'accessories') {

      if (keep === true) {
        alert(`Correctamundo! The person wears ${value}! Keep all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory].includes(value))

      } else {
        alert(`Not really, the person doesn't wear ${value}! Remove all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person[guessCategory].includes(value))
      }

  } else if (guessCategory === 'other') {

      if (keep === true) {
        alert(`Yes, the person is a ${value}! Keep all people that is a ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory].includes(value))

      } else {
        alert(`No, try again. The person isn't a ${value}! Remove all people that isn't a ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => !person[guessCategory].includes(value))

      }  

  } else if (guessCategory === 'eyes') {
      
      if (keep === true) {
        alert(`Yes, the person has gorgeous ${value} eyes! Keep all people with ${value} eyes`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory] === value)

      } else {
        alert(`No, you guessed wrong. The person doesn't have ${value} eyes! Remove all people that doesn't spark ${value} eyes`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory] !== value)
      }

  } else if (guessCategory === 'hair') {
     if (keep === true) {
        alert(`You're right! The person is blessed with shiny ${value} hair! Keep all people that have ${value} hair`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory] === value)

      } else {
       alert(`Incorrect, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`)
       charactersInPlay = charactersInPlay.filter((person) => person[guessCategory] !== value)

       }
    }
    generateBoard()
  }

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  //I tried ${personToConfirm} but it did not show the value

  if (confirm(`Is ${personToConfirm} your final guess?`)) {
    personToCheck = personToConfirm
  }

  checkMyGuess(personToCheck)
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert("You win!")
    winOrLose.style.display = 'flex'
  } else {
    alert(`Oh no! The secret person was ${secret.name}.`)
    winOrLose.style.display = 'flex'
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
filter.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)

