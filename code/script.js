// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const winOrLose = document.getElementById('winOrlose')
const winOrLoseText = document.getElementById('winOrLoseText')
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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  document.getElementById('winOrLose').style.display = "none";
  charactersInPlay = CHARACTERS
  generateBoard()
  // What else should happen when we start the game?
  setSecret()
  console.log(secret)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;
  console.log(category)
  console.log(value)
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value,
  };
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion; // deconstructed version of the two underneath 
  //const currentQuestion = currentQuestion.category 
  //const currentQuestion = currentQuestion.value 

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') { //these are looking for single strings
      if (value === secret.hair || value === secret.eyes) {
        let keep = value === secret[category];
        filterCharacters(keep)
      } else {
        keep = false 
        filterCharacters(keep)
      }
  } else if (category === 'accessories' || category === 'other') { // these are looking for arrays 
      if (secret.accessories.includes(value) || secret.other.includes(value)) {
        keep = true
       filterCharacters(keep)
      } else {
        keep = false 
        filterCharacters(keep)
      }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories

  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keep all people that has ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'eyes') {   
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`No, the person doesn't have ${value} eyes! Remove all people that has ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    } 
  } else {
    if (keep) {
      alert (`Yes the person is a ${value}! Keep all people that are ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person is not a ${value}. Remove all people that are ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }

  generateBoard()
}

  // if (category === 'accessories') {
  //   if (keep) {
  //     alert(
  //       `Yes, the person wears ${value}! Keep all people that wears ${value}`
  //     )
  //     charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  //   } else {
  //     alert(
  //       `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
  //     )
  //     charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  //   }
  // } else if (category === 'other') {
  //     if (keep) {
  //     alert(
  //       `Yes, the person is a ${value} ! Keep all people that are ${value}s`
  //     )
  //     charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  //   } else {
  //     alert(
  //       `No, the person is not a ${value} ! Remove all people that are ${value}s`
  //     )
  //     charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  //   }
  // } else if (category === 'hair') {
  //   if (keep) {
  //     alert(
  //       `Yes, the person has ${value} hair! Keep all people that has ${value} hair`
  //     )
  //     charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
  //   } else {
  //     alert(
  //       `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`
  //     )
  //     charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
  //   }
  // } else {
  //   if (keep) {
  //     alert(
  //       `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`
  //     )
  //     charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
  //   } else {
  //     alert(
  //       `No, the person doesn't have ${value} eyes! Remove all people that has ${value} eyes`
  //     )
  //     charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
  //   }
  // }
  
  //  if (keep===true) {
  //   charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] === value)
  //   generateBoard()
  // } else {
  //   charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] !== value)
  //   generateBoard()
  // }


  // if (keep) {
  //   if (category === 'hair' || category === 'eyes') {  // if true, hair and eyes
  //   charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
  //   generateBoard()
  //   } else {
  //   charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) // if true, cateogory accessories and others
  //   generateBoard()
  //   }
  // } else { // if false 
  //   if (category === 'accessories' || category === 'other' ) {
  //   charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) // if false accessories and other 
  //   generateBoard()
  //   } else { // if false for hair and eyes 
  //   charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
  //   generateBoard()
  // }
  // }


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

  // Invoke a function to redraw the board with the remaining people.

// when clicking guess, the player first have to confirm that they want to make a guess.
function guess(personToConfirm) {
  const userGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`)

  if (userGuess) {
    checkMyGuess(personToConfirm)
  } else {
    alert('okidoki, nevermind')
  }

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    let displayWinOrLose = () => {
      document.getElementById('winOrLose').style.display = "flex";
      winOrLoseText.innerHTML = `You win! ${personToCheck} was correct!`
    }
      board.innerHTML =''
      displayWinOrLose()
  } else {
    let displayWinOrLose = () => {
      document.getElementById('winOrLose').style.display = "flex";
      winOrLoseText.innerHTML = `Oh noooo! ${personToCheck} was incorrect! ${secret.name} was the correct answer`
    }
    board.innerHTML =''
    displayWinOrLose()
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', start)
findOut.addEventListener('click', () => {
  selectQuestion()
  checkQuestion()
})


// /restart game
// const newGame = () =>{
// winOrLose.style.display = 'none'
// board.style.display = 'flex'
// start()
// } 