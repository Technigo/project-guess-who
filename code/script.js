// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLose = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['parrot']
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
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses'],
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
    accessories: ['glasses', 'earrings'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
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
    other: ['cellphone']
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
    accessories: ['cap'],
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
    accessories: ['glasses', 'earrings'],
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
    accessories: ['sunglasses', 'cap'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
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
    accessories: ['glasses', 'cap'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay 
let keep
let personToCheck


// Draw the game board
function generateBoard() {
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
  // Here we're setting charactersInPlay array to be all the characters to start with
   // What else should happen when we start the game?
const start = () => {
  charactersInPlay = CHARACTERS
  setSecret();
  generateBoard();
  console.log(secret);
  selectQuestion();
  /*board.style.display = 'flex'
  winOrLose.style.display = 'none'*/
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value //stores the actual value of the questions selected in the dropdown
 
  /*if (category === 'hair') {
    console.log('hair:', value)
    currentQuestion = {
      category: category,
      value: value
    }
  }
  else if (category === 'eyes') {
    console.log('eyes:', value)
    currentQuestion = {
      category: category,
      value: value
    }
  }
  else if (category === 'accessories') {
    console.log('accessories:', value)
    currentQuestion = {
      category: category,
      value: value
    }
  }
  else if (category === 'other') {
    console.log('other:', value)
    currentQuestion = {
      category: category,
      value: value
    }
   }*/
   currentQuestion = {
    category: category,
    value: value
  }
}

selectQuestion()

// This function should be invoked when you click on 'Find Out' button.
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

    const checkQuestion = () => {
      /*console.log('Please check if the secret person has these attributes!')*/
      const { category, value } = currentQuestion
      let keep
      if (category === 'hair' || category === 'eyes') {
        console.log(category, value) 
        if (value === secret.hair || value === secret.eyes) {
          keep = true
          filterCharacters(true) 
          /*console.log('You are on the right track!')*/
        }
        else {
          keep = false
          filterCharacters() 
          /*console.log('You are not on the right track!')*/
        }
      }
      else if (category === 'accessories' || category === 'other') {
        console.log(category, value) // Daniels förslag Q&A
        if (secret.accessories.includes(value) || secret.other.includes(value)) { 
          keep = true
          filterCharacters(true) 
          /*console.log('You are not on the right track')*/
        }
        else {
          keep = false
          filterCharacters() 
          /*console.log('You are not on the right track!')*/
        }
      }
   
    }


//filter the characters array 
const filterCharacters = (keep) => {
  console.log('Filtering')
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keep all people that has ${value} hair.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value) // from Q&A
    }
    else {
      alert(`No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people that have ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    }
    else {
      alert(`No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person has a ${value}! Keep all people that have a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      alert(`No, the person doesn't have a ${value}! Remove all people that have a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  console.log(charactersInPlay)
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
 
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
    const confirmGuess = confirm(`Are you sure you want to make a guess on ${personToConfirm}?`); 
    if(confirmGuess) {
      checkMyGuess(personToConfirm); 
    } 
    }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  /*confirm(checkMyGuess())*/


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if(personToCheck === secret.name) {
    winOrLoseText.innerHTML = (`You guessed on ${secret.name} and it was correct!`)
  } else {
    winOrLoseText.innerHTML = (`No, that is not the correct answer, it was ${secret.name}!`)
  }
  winOrLose.style.display = 'flex' 
  board.style.display = 'none' 

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

//Reloading the page after clicking Play again button
document.getElementById("playAgain").addEventListener("click", () => {
  location.reload(console.log("event triggered"))
  return false
}) 

// Invokes the start function when website is loaded
start();
generateBoard();


// All the event listeners
restartButton.addEventListener('click', start);
findOutButton.addEventListener('click', checkQuestion);
questions.addEventListener('change', selectQuestion);
/*playAgainButton.addEventListener('click', start)*/