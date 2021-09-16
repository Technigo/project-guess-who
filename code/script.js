// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const playAgainButton = document.getElementById("playAgain");

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
 secret  = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}



// This function to start (and restart) the game
const start = () => {
  document.getElementById("winOrLose").style.display = "none";

  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  // The generateBoard function is called that draws the gameboard
  generateBoard()
  
  // setSecret selects a secret character randomly from the CHARACTERS array
  setSecret() 

  // setting the currentQuestion object when you select something in the dropdown
  selectQuestion()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // We also need a variable that stores the actual value of the question we've selected.

  const actualValue = questions.value
  //console.log("Questions value" + questions.value + category)


  // This variable stores what option group (category) the question belongs to.

  currentQuestion = {
  category: category,
  value: actualValue,
    }
  }


// This function should be invoked when you click on 'Find Out' button.
// It'll filter the characters array and redraw the game board.


const checkQuestion = () => {
  const { category, value } = currentQuestion;


  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true)
    }
     else {
       filterCharacters(false)
     }

  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    } 
    else {
      filterCharacters(false)
    }
};  
}

    //this function KEEPS characters that match the secret hair and eyes
    const keepCharactersHairEyes = (category, value) => {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
     }
 
     //this function REMOVES characters that don't match the secret hair and eyes
     const removeCharactersHairEyes = (category, value) => {
     charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
     }
 
     // this function KEEPS characters that match the secret accessories or other
     const keepCharactersAccessoriesOther = (category, value) => {
     charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
     }
       
     // this function REMOVES characters that don't match the secret accessories or other
     const removeCharactersAccessoriesOther = (category, value) => {
     charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
     }
 

const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      keepCharactersAccessoriesOther(category, value)
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}`
      )
    } else {
      removeCharactersAccessoriesOther (category, value)
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      )
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep) {
      keepCharactersAccessoriesOther (category, value)
      alert ( `Yes, the person has ${value}! Keep all people with ${value}`)
    } else {
      removeCharactersAccessoriesOther
      alert (`No, the person doesnt have ${value}! Remove all people with ${value}`)
    }

  } else if (category === 'hair') {
  // Similar to the one above
    if (keep) {
    keepCharactersHairEyes (category, value)
    alert ( `Yes, the person has ${value} hair! Keep all people with ${value} hair`)
    } else {
    removeCharactersHairEyes (category, value)
    alert (`No, the person doesn't have ${value} hair! Remove all people with ${value} hair`)
    }
  
  } else if (category === 'eyes') {
    // Similar to the one above
      if (keep) {
      keepCharactersHairEyes (category, value)
      alert ( `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`)
      } else {
      removeCharactersHairEyes (category, value)
      alert (`No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`)
      }
    }


  // This function redraws the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.


const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const result = window.confirm("You sure?")
  
  if (result) {
    checkMyGuess(personToConfirm)
  }
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
 if (personToCheck === secret.name) {
   alert("Yes! You win!")
   board.innerHTML = ""
   winOrLose.style.display = "block"
 } else {
   alert("Sorry, you guessed wrong.")
 }
}
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board



// Invokes the start function when website is loaded

start()

// All the event listeners
restartButton.addEventListener('click', restart)
questions.addEventListener('change', selectQuestion)
findOut.addEventListener('click', checkQuestion)