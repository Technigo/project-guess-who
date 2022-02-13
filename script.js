// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questionsButton = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')





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
  console.log('Start function is called')
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

 //Generateboard is called and makes up the board
  generateBoard() //row 215

//Randomizes among the character array and picks a secret person 
  setSecret() //row 232

  //setting the currentQuestion object selected from the dropdown
  selectQuestion() //row 250



  // What else should happen when we start the game?
//set secret person -> invoke setSecret function
//show the board on the screen ->invoke generate board
} 

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
   //TODO
   const value = questions.value

  currentQuestion = {
    category: category, //Optgroups
    value: value //Option value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  //jämföra med strings comparison symboler ===



  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true)
     }
      else {
        filterCharacters(false)
      }

//Check if secret person.hair jämföra med person.hair === value... Hjälp finns i steg 1-3. Jämföra med array använda metod includes. Check via currentQuestion.category eller currenQuestion.value  const { category, value } = currentQuestion. 
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }

  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person['accessories'].includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person['accessories'].includes(value))
    }
  } 
  else if (category === 'other') {
    if (keep){
      alert(`Yes, the person have ${value}! Keep all people that has ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person['other'].includes(value))
    } else {
      alert (` No, the person is not a ${value}! Remove all people who is a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person['other'].includes(value))
    }
  } 
  else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people with ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] === value)
    } else {
      alert(`No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] !== value)
    }
  }
  //if (category === 'hair')
  else {
    if (keep){
      alert(`Yes, the person has ${value} hair! Keep all people with ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] === value)
    } else {
      alert (`No, the person doesnt have ${value} hair! Remove all people with ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] !== value)
    }
   }
     // Invoke a function to redraw the board with the remaining people.
generateBoard()
  }

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
 // store the interaction from the player in a variable.
  // remember the confirm() ?
  let playerGuess = confirm (`Do you think ${personToConfirm} is the secret person?`)

  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuess === true){
    checkMyGuess(personToConfirm)
    console.log('Player made a guess')
  }else {
    alert('Alright, lets keep going')
    console.log('Player did not make a guess')
}
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToConfirm === secret.name) {
    // 2. Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerHTML = `Well done! You guessed on ${personToConfirm} which is the right answer.`
  } else {
    winOrLoseText.innerHTML = `Good try! You guessed on ${personToConfirm} but ${secret.name} was the secret person.`
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'
  
}

// Invokes the start function when website is loade
start()

// All the event listeners
restartButton.addEventListener('click', start)

// Play again button after game ends
playAgainButton.addEventListener('click', start)

//Find out it checks the question
findOutButton.addEventListener('click', checkQuestion)

//Select question
questionsButton.addEventListener('change', selectQuestion)

//PlayAgainButton restarts the game
playAgainButton.addEventListener("click", () => window.location.reload())