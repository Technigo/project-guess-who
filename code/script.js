// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')   // filters the answer
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: [],
    gender: ['man']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker'],
    gender: ['man']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: [],
    gender: ['man']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['man']
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: [],
    gender: ['man']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewellry'],
    other: [],
    gender: ['woman']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'pink',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker'],
    gender: ['woman']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
    gender: ['man']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
    gender: ['man']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: [],
    gender: ['man']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'jewellry'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    gender: ['man']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewellry'],
    other: [],
    gender: ['man']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewellry'],
    other: [],
    gender: ['woman']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: [],
    gender: ['man']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: [],
    gender: ['man']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: [],
    gender: ['woman']
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

startButton.onclick = () => {
  startPage.style.display = "none"
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
} 


// THIS FUNCTION STARTS ** AND ** RESTARTS THE GAME 
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
   //sets secret person   
   setSecret()
   // If game is won or lost, play again button triggers;
   if (winOrLose.style.display === 'block') {
     winOrLose.style.display = 'none'  
   } else {
     winOrLose.style.display = 'none'     
   }  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value;
  
  currentQuestion = {
    category: category,
    value: value
  }

}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  document.getElementById("questions").value = "";  // Makes placeholder bounce back after a choice or restart the game 
  
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      filterCharacters(true)  //invoke filterCharacters
    } else {
      filterCharacters(false)
    }
  
  } else if (category === 'accessories' || category === 'other' || category === 'gender') {
    if ( secret.accessories.includes(value) || secret.other.includes(value) || secret.gender.includes(value)) {
      filterCharacters(true)
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
        `Yes, the person have ${value} hair! Keep all people that have ${value} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`
      )
    }
  } if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person have ${value} eyes! Keep all people that have ${value} eyes`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`
      )
    }
  } 
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wear ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      )
    }
  } 
  if (category === 'other' || category === 'gender') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are a ${value}`
      )
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are a ${value}`
      )
    }
  } 




  if (category === 'hair' || category === 'eyes') {
    if (keep) {  
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }

  
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }  
  
// Invoke a function to redraw the board with the remaining people.
  generateBoard()  
} 
start()  


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable// remember the confirm(message+person)
  // If the player wants to guess, invoke the checkMyGuess function.
  const theGuess = confirm(`Do you really want to guess on ${personToConfirm}?`) 
  if (theGuess) {
   checkMyGuess(personToConfirm)   
 }
}


// If you confirm the choice = this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {                                          
    winOrLoseText.innerHTML = `You are a WINNER! 🏆  ${secret.name} is correct!`     
    winOrLose.style.display = 'block', // shows wrapper
    board.style.display = 'none'   // hides board behind wrapper

  } else {
    winOrLose.style.display = 'block',
    winOrLoseText.innerHTML = `GAME OVER 💀 The secret person was ${secret.name}. Want to try again?`
    board.style.display = 'none'
  }
}

// RESTART
const playAgain = () => {
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  start()
}


// Invokes the start function when website is loaded/ restarted 

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);  // filter button 
playAgainButton.addEventListener('click', playAgain); //why doesnt board show 


