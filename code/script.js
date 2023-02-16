// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const playAgainButton= document.getElementById ('playAgain')
const winOrLoseText = document.getElementById ('winOrLoseText')
const winOrLose = document.getElementById ('winOrLose')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    glasses: true,
    hat: true,    
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    glasses: false, 
    hat: true,
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    glasses: false, 
    hat: true,
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    glasses:false,
    hat:false,     
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    glasses: true,
    hat: false, 
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    glasses: true,
    hat: false, 
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    glasses: true,
    hat: false, 
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    glasses: true,
    hat: false, 
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    glasses: true,
    hat: false, 
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    glasses: true,
    hat: false,
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    glasses:true,
    hat: true,    
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    glasses: true,
    hat: false, 
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    glasses:true,
    hat:true,
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    glasses: false, 
    hat: true,
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    glasses: true,
    hat: false,
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    glasses: true, 
    hat: true,
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    glasses: true,
    hat: false, 
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    glasses: true,
    hat: false, 
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    glasses: true,
    hat:false,
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    glasses: true,
    hat: true,
    smoker: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    glasses:false,
    hat:false,     
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    glasses:false,
    hat:false,     
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    glasses:false,
    hat:false,     
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    glasses:true,
    hat:true,    
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
  console.log(secret)
  }

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; 
  const value = questions.value;  
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =



  if (category === 'hair') {
    currentQuestion = {
      attribute: 'hair', 
      value: value, 
      category: category, 
      }
  } else if (category === 'eyes') {
      currentQuestion = {
        attribute: 'eyes', 
        value: value, 
        category: category,
      }
  } else if (category === 'accessories'){
      currentQuestion = {
        attribute: value, 
        value: true, 
        category: category,
  } } else {
    currentQuestion = {
      attribute: value, 
      value: true, 
      category: category, 
    }
   }
  }


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]


  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  filterCharacters(keep)

}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { attribute, category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'glasses', ) {
     if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all people that wear ${attribute}`
      ) 
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all people that wear ${attribute}`
      ) 
    }
  } else if (category === 'other') {
      if (keep) {
      alert(
        `Yes, the person is a ${attribute} and has no plan to quit. Keep all people that are ${attribute}s.`
      )
      } else {
      alert(
        `No, the person has made better life choices and isn't a ${attribute} anymore. Remove all people who aren't ${attribute}s.`
      )
      } 
  } else {
      if (keep) {
      alert(
        `Yes, the person has ${value} ${category} ! Keep all people with ${value} ${category}"`
      )
    } else {
      alert (
        `No, the person doesnt have ${value} ${category}! Remove all people with ${value} ${category} hair`
      )
   } 
  }

 

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  


    //for hair and eyes :
    
     /*   
    if (keep) {          
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
    } charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))

   
    //for accessories and other
         

charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)


      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
   

    */

  // Invoke a function to redraw the board with the remaining people.
generateBoard ()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener ('change', selectQuestion)
filterButton.addEventListener ('click', checkQuestion)
playAgainButton.addEventListener ('click', start)
