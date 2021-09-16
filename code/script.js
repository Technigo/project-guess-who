// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')

let guessButton = ''
let chosenPerson = ''

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Phanpy',
    img: 'images/phanpy.png',
    color: 'TURKOS',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Pikachu',
    img: 'images/pikachu.png',
    color: 'GUL',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Totodile',
    img: 'images/totodile.png',
    color: 'TURKOS',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Charizard',
    img: 'images/charizard.png',
    color: 'ORANGE',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Krokorock',
    img: 'images/krokorok.png',
    color: 'BRUN',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Meowth',
    img: 'images/meowth.png',
    color: 'VIT',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Oct',
    img: 'images/oct.png',
    color: 'RÖD/ROSA',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Pilup',
    img: 'images/pilup.png',
    color: 'BLÅ',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Squirtle',
    img: 'images/squirtle.png',
    color: 'TURKOS',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Butterfree',
    img: 'images/butterfree.png',
    color: 'VIT',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Chansey',
    img: 'images/chansey.png',
    color: 'RÖD/ROSA',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Dragonite',
    img: 'images/dragonite.png',
    color: 'ORANGE',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Fennokin',
    img: 'images/fennokin.png',
    color: 'GUL',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Minccino',
    img: 'images/minccino.png',
    color: 'GRÅ',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Nidoqueen',
    img: 'images/nidoqueen.png',
    color: 'BLÅ',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Persian',
    img: 'images/persian.png',
    color: 'VIT',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Pyroar',
    img: 'images/pyroar.png',
    color: 'BRUN',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Sandshrew',
    img: 'images/sandshrew.png',
    color: 'GUL',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Sneasel',
    img: 'images/sneasel.png',
    color: 'TURKOS',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Venusaur',
    img: 'images/venusaur.png',
    color: 'TURKOS',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Zapdos',
    img: 'images/zapdos.png',
    color: 'GUL',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Dratini',
    img: 'images/dratini.png',
    color: 'BLÅ',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Fletchling',
    img: 'images/fletchling.png',
    color: 'GRÅ',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Hoopa',
    img: 'images/hoopa.png',
    color: 'GRÅ',
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
        <div class="guess" >
          <span>Guess on ${person.name}?</span>
          <button id="guess" class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  
    personToConfirm = person.name

  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  console.log(secret)
  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
  console.log('inside selectQuestion:', currentQuestion)
 
  checkQuestion()
}

const checkQuestion = () => {
  const { category, value} = currentQuestion
  console.log(category, value)
  console.log('inside checkQuestion:', currentQuestion)

    // Compare the currentQuestion details with the secret person details in a different manner based on category (color/eyes or accessories/others).
    // See if we should keep or remove people based on that
    // Then invoke filterCharacters
  if (category === 'color' || category === 'eyes') {
    
    let secretValue = secret[currentQuestion.category]
    console.log('inside checkQuestion secret:',secretValue)

    if (secretValue === currentQuestion.value){
      filterCharacters(true)
    //EXEMPEL currentQuestion.category = color eller = eyes
     
    }else {
      filterCharacters(false)
    }
      

  }else if (category === 'accessories' || category === 'other') {
      let secretValueArray = secret[currentQuestion.category]
 
      if (secretValueArray.includes(currentQuestion.value)){
        filterCharacters(true)
      } else {
        filterCharacters(false)
      }
    }  
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {

  const { category, value } = currentQuestion //this one gives value to the category and value, ex  'color' and 'brown'
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`
      )
      charactersInPlay
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are  ${value}s`
      )
    }
   
  } else {
     // HAIR QUESTION!
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category} ! Keep all people that have ${value} ${category} `
      )

      // alert popup that says something like: "Yes, the person has yellow color! Keep all people with yellow color"
    } else {
      alert(
        `No, the person hasn't ${value} ${category} ! Remove all people that has ${value} ${category} `
      )
      // alert popup that says something like: "No, the person doesnt have yellow color! Remove all people with yellow color"
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
    //for color and eyes 
    if (category === 'color' || category === 'eyes') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] === currentQuestion.value)
        
      } else {
        // or
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] !== currentQuestion.value)
        
      }
      } 
    else if (category === 'accessories' || category === 'other') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      
      }
     else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      } 
    }
    
    generateBoard()
  }



// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

window.confirm(`Do you really want to guess on ${personToConfirm}`)
  if(window.confirm){
    personToCheck = personToConfirm
    checkMyGuess(personToCheck)
  }else {
    alert("ok, try again!")
  }
  }
 

  // FOR PERSON TO CONFIRM store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
// If you confirm, this function is invoked


const checkMyGuess = (personToCheck) => {



  if (secret.name === personToCheck){

    console.log("You are such a star!")
    const winOrLose = document.getElementById('winOrLose')
    winOrLose.style.display ="flex"

    const playAgainButton = document.getElementById('playAgain')
    playAgainButton.addEventListener('click', () => {
      winOrLose.style.display = 'none'
      start()
   })
   
  
}else {
  alert('Oh NOOOO, you have to try again')
}


}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', () => {
  selectQuestion()});

