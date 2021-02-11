// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLooseBlock = document.querySelector('.win-or-lose-wrapper')
const winner = document.querySelector('.winner')
const looser = document.querySelector('.looser')
const tryAgainBtn = document.getElementById('try-again-btn')
const alertBox = document.getElementById('hidden')
const playAgain =document.getElementById('playAgain')
// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: questions.value,
      // 👆 add the value from the input here
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: questions.value,
      // Set this up your self
      category: category,
      }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: questions.value,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: questions.value,
      value: true,
      category: category,
    // Set this up your self (should be same structure as above)
    }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  //In the checkQuestion function, 
  //we need to check if the attributes in the currentQuestion matches the attributes 
  //in the secret or not. 
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

    if (currentQuestion.value === secret[currentQuestion.attribute])
      {
      filterCharacters(true); 
      console.log('this is true')
      } else if (currentQuestion.value !== secret[currentQuestion.attribute])
      {
      filterCharacters(false); 
      console.log('this is not true')
      }
}

// It'll filter the characters array and redraw the game board.
// ShouldKeep parameter is a boolean. 

const filterCharacters = (shouldKeep) => {
  // Show the correct alert message for different categories
  const category = currentQuestion.category // To know what category the user refers to
  const attribute = currentQuestion.attribute //to catch value of attribute
  const value = currentQuestion.value //to catch value of attribute
  if (category === 'accessories') {
    if (shouldKeep) {
      //filtering the existing array charactersInPlay. Person (a parameter), 
      //used to see if attribute of any of the object in this array, matches what the user asks for (stores in value)
      charactersInPlay = charactersInPlay.filter((person) => {
        return person[attribute] === value
      })
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      )
    }

  } else if (category === 'other') {
    if (shouldKeep) {
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      alert(
        `Yes, the person is a ${attribute}! Keep all that are ${attribute}`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
      alert(
        `No, the person is not a ${attribute}! Remove all that are ${attribute}`
      )
    }
    // Similar to the one above
  } else if (category === 'hair color'){
    if (shouldKeep) {
      //here we want to catch the value we stored in attributes from currentQuestions
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
       alert (
      `Yes, the person has ${value} hair ! Keep all that has ${value}`)
      // alert popup that says something like: "Yes, the person has yellow hair! 
      //Keep all persons with yellow hair"
      
    } else { 
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
      alert (
      `NO, the person does not have ${value} ! Take away all that has ${value}`)
      // alert popup that says something like: "NO, the person doesnt have yellow hair! Remove all persons with yellow hair"
      
    }
  }else if (category === 'eye color'){
      if (shouldKeep) {
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
        alert (
          `Yes, the person${value}! Keep all that has ${value}`
          )
      } else { 
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
        alert (`NO, the person does not have ${value} ! Remove all that has ${value}`
        )
      }
    }
    generateBoard();

  // filter to keep or remove based on the keep variable.
  /* charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  }
    or 
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value) */

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
 const makeGuess = confirm(`Do you want to guess?`)
 if (makeGuess == true){
  checkMyGuess(suspect)
 } else if (makeGuess == false) {
  alert(`you have cancelled`)
 }
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the suspect is the same as the secret person's name. 
  //To access the name of the secret person we do this by accessing the object through secret.name 
  //console.log(secret.name)
  //console.log(suspect)
  if (suspect == secret.name) {
    runWinnerBlock();
  } else
   {
     runLooserBlock();
   }
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section display block
  // 4. Hide the game board. display none 
}


//I want to display the winner/looser block but hide the game board
const runWinnerBlock = () => {
  winOrLooseBlock.style.display = 'flex'
  winner.style.display ='block'
  board.style.display = 'none'

  playAgain.addEventListener('click', () => {
    winOrLooseBlock.style.display = ''
    looser.style.display =''
    board.style.display = ''
    start();
    })
}

const runLooserBlock = () => {
  console.log("you are wrong")
  winOrLooseBlock.style.display = 'flex'
  looser.style.display ='block'
  board.style.display = 'none'

  //style.display='' goes back to default settings in css
tryAgainBtn.addEventListener('click', () => {
  winOrLooseBlock.style.display = ''
  looser.style.display =''
  board.style.display = ''
  })
  
}

const showAlert =() =>{
  alertBox.style.display = 'block'
}
// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click' ,() => checkQuestion())


//When clicking on the 'Find out' button, you should invoke the checkQuestion function
// (using an eventListener)