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
    eyes: 'SVARTA',
    element: ['MARK'],
    other: []
  },
  {
    name: 'Pikachu',
    img: 'images/pikachu.png',
    color: 'GUL',
    eyes: 'SVARTA',
    element: ['ELEKTRISK'],
    other: []
  },
  {
    name: 'Totodile',
    img: 'images/totodile.png',
    color: 'TURKOS',
    eyes: 'RÖDA',
    element: ['VATTEN'],
    other: []
  },
  {
    name: 'Charizard',
    img: 'images/charizard.png',
    color: 'ORANGE',
    eyes: 'SVARTA',
    element: ['ELD', 'FLYGANDE'],
    other: []
  },
  {
    name: 'Krokorok',
    img: 'images/krokorok.png',
    color: 'BRUN',
    eyes: 'SVARTA',
    element: ['MARK', 'MÖRKER'],
    other: []
  },
  {
    name: 'Meowth',
    img: 'images/meowth.png',
    color: 'VIT',
    eyes: 'SVARTA',
    element: ['NORMAL'],
    other: []
  },
  {
    name: 'Octillery',
    img: 'images/oct.png',
    color: 'RÖD/ROSA',
    eyes: 'SVARTA',
    element: ['VATTEN'],
    other: []
  },
  {
    name: 'Piplup',
    img: 'images/pilup.png',
    color: 'BLÅ',
    eyes: 'SVARTA',
    element: ['VATTEN'],
    other: []
  },
  {
    name: 'Squirtle',
    img: 'images/squirtle.png',
    color: 'TURKOS',
    eyes: 'RÖDA',
    element: ['VATTEN'],
    other: []
  },

  {
    name: 'Butterfree',
    img: 'images/butterfree.png',
    color: 'VIT',
    eyes: 'RÖDA',
    element: ['INSEKT', 'FLYGANDE'],
    other: []
  },
  {
    name: 'Blissey',
    img: 'images/chansey.png',
    color: 'RÖD/ROSA',
    eyes: 'SVARTA',
    element: ['NORMAL'],
    other: []
  },
  {
    name: 'Dragonite',
    img: 'images/dragonite.png',
    color: 'ORANGE',
    eyes: 'SVARTA',
    element: ['DRAKE', 'FLYGANDE'],
    other: []
  },
  {
    name: 'Fennekin',
    img: 'images/fennokin.png',
    color: 'GUL',
    eyes: 'RÖDA',
    element: ['ELD'],
    other: []
  },
  {
    name: 'Minccino',
    img: 'images/minccino.png',
    color: 'GRÅ',
    eyes: 'SVARTA',
    element: ['NORMAL'],
    other: []
  },
  {
    name: 'Nidoqueen',
    img: 'images/nidoqueen.png',
    color: 'BLÅ',
    eyes: 'SVARTA',
    element: ['GIFT', 'MARK'],
    other: []
  },
  {
    name: 'Persian',
    img: 'images/persian.png',
    color: 'VIT',
    eyes: 'SVARTA',
    element: ['NORMAL'],
    other: []
  },
  {
    name: 'Pyroar',
    img: 'images/pyroar.png',
    color: 'BRUN',
    eyes: 'BLÅA',
    element: ['ELD', 'NORMAL'],
    other: []
  },
  {
    name: 'Sandshrew',
    img: 'images/sandshrew.png',
    color: 'GUL',
    eyes: 'SVARTA',
    element: ['MARK'],
    other: []
  },
  {
    name: 'Sneasel',
    img: 'images/sneasel.png',
    color: 'TURKOS',
    eyes: 'RÖDA',
    element: ['MÖRK', 'IS'],
    other: []
  },
  {
    name: 'Venusaur',
    img: 'images/venusaur.png',
    color: 'TURKOS',
    eyes: 'RÖDA',
    element: ['GRÄS', 'GIFT'],
    other: []
  },
  {
    name: 'Zapdos',
    img: 'images/zapdos.png',
    color: 'GUL',
    eyes: 'SVARTA',
    element: ['ELEKTRISK', 'FLYGANDE'],
    other: []
  },
  {
    name: 'Dragonair',
    img: 'images/dratini.png',
    color: 'BLÅ',
    eyes: 'SVARTA',
    element: ['DRAKE'],
    other: ['HORN']
  },
  {
    name: 'Fletchling',
    img: 'images/fletchling.png',
    color: 'RÖD/ROSA',
    eyes: 'SVARTA',
    element: ['NORMAL', 'FLYGANDE'],
    other: []
  },
  {
    name: 'Hoopa',
    img: 'images/hoopa.png',
    color: 'GRÅ',
    eyes: 'BLÅA',
    element: ['PSYKISK', 'SPÖKE'],
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
          <button id="guess" class="filled-button small" onclick="guess('${person.name}')">GISSA</button>
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
  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
  checkQuestion()
}

const checkQuestion = () => {
  const { category, value} = currentQuestion
  

    // Compare the currentQuestion details with the secret person details in a different manner based on category (color/eyes or element/others).
    // See if we should keep or remove people based on that
    // Then invoke filterCharacters
  if (category === 'color' || category === 'eyes') {
    
    let secretValue = secret[currentQuestion.category]
    
    if (secretValue === currentQuestion.value){
      filterCharacters(true)
    //EXEMPEL currentQuestion.category = color eller = eyes
     
    }else {
      filterCharacters(false)
    }
      
  }else if (category === 'element' || category === 'other') {
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
  if (category === 'element') {
    if (keep) {
      alert(
        `JA, pokemonen är ${value}! Spara alla som är ${value}`
      )
    } else {
      alert(
        `NEJ, pokemonen är inte ${value}! Ta bort alla som är ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `JA, pokemonen har ${value}! spara alla pokemon som har ${value}`
      )
      charactersInPlay
    } else {
      alert(
        `NEJ, pokemonen har inte ${value}! Ta bort alla pokemon med  ${value}`
      )
    }
   
  } else {
     // HAIR QUESTION!
    if (keep) {
      alert(
        `JA, pokemonen har ${value} ${category} ! Spara alla pokemon som har ${value} ${category} `
      )

      // alert popup that says something like: "Yes, the person has yellow color! Keep all people with yellow color"
    } else {
      alert(
        `Nej, pokemonen har inte ${value} ${category} ! Ta bort alla pokemon som har ${value} ${category} `
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
    else if (category === 'element' || category === 'other') {
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

let confirmedPerson = confirm(`Vill du verkligen gissa på ${personToConfirm}`)
  
if(confirmedPerson=== true){
    checkMyGuess(personToConfirm)
  }else {
    alert("FÖRSÖK IGEN!")

  }
  }
 

  // FOR PERSON TO CONFIRM store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
// If you confirm, this function is invoked


const checkMyGuess = (personToCheck) => { 

  if (secret.name === personToCheck){

    const winOrLose = document.getElementById('winOrLose')
    winOrLose.style.display ='flex'

    const winOrLoseText = document.getElementById('winOrLoseText')
    winOrLoseText.innerHTML = `<p>DU ÄR EN STJÄRNA</p>
    <p> ${personToCheck} var den hemliga pokemonen!<p/>`

    board.style.display ='none'
  
    const playAgainButton = document.getElementById('playAgain')
    playAgainButton.addEventListener('click', () => {
      winOrLose.style.display = 'none'
      board.style.display = 'flex'
    start()
    
   })
  } else {
    
    alert('ÅH NEEEEEJ, DU FÅR FÖRSÖKA IGEN')
   
}

}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', selectQuestion);

