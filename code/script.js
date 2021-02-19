// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLooseBlock = document.querySelector('.win-or-lose-wrapper')
const winner = document.querySelector('.winner')
const looser = document.querySelector('.looser')
const alertBox = document.querySelector('.alert')
const confirmBox = document.querySelector('.confirm')
const howManyGuesses = document.getElementById('so-many-guesses')
const tryAgainBtn = document.getElementById('try-again-btn')
const playAgain = document.getElementById('playAgain')
const amountOfGuesses = document.getElementById('many-guesses')
const confirmButton = document.getElementById('confirm-btn')
const cancelButton = document.getElementById('cancel-btn')

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
let guessClicks = 1;
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
          <button class="filled-button small" id"guess-btn" onclick="guess('${person.name}')">Guess</button>
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
    }
  }
}

// This function should be invoked when you click on 'Find Out'
//In the checkQuestion function, 
//we need to check if the attributes in the currentQuestion matches the attributes 
//in the secret or not. 
// Compare the currentQuestion with the secret person.
// See if we should keep or remove people based on that
// Then invoke filterCharacters

const checkQuestion = () => {
  if (currentQuestion.value === secret[currentQuestion.attribute]){
      filterCharacters(true); 
    } else if (currentQuestion.value !== secret[currentQuestion.attribute]){
      filterCharacters(false); 
    }
}

// It'll filter the characters array and redraw the game board.
// ShouldKeep parameter is a boolean. 
// Show the correct alert message for different categories

const filterCharacters = (shouldKeep) => {
  const category = currentQuestion.category // To know what category the user refers to
  const attribute = currentQuestion.attribute //to catch value of attribute
  const value = currentQuestion.value //to catch value of attribute
  if (category === 'accessories') {
    if (shouldKeep) {
      //filtering the existing array charactersInPlay. Person (a parameter), 
      //used to see if attribute of any of the object in this array, matches what the user asks for (stores in value)
      charactersInPlay = charactersInPlay.filter((person) => {return person[attribute] === value})
      showAlertBox();
        alertBox.innerHTML=""
        alertBox.innerHTML += 
        `<div> 
          <p>Yes, this person is wearing ${attribute}! Keep all that are wearing ${attribute}</p>
          </div>
          <button onclick="hideAlertBox()">OK</button>
        `
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
      showAlertBox();
      alertBox.innerHTML=""
      alertBox.innerHTML+= 
      `<div> 
        <p>NO, the person is not wearing ${attribute}! Remove all that are wearing ${attribute}</p>
        </div>
        <button onclick="hideAlertBox()">OK</button>    
      ` 
    }
  } else if (category === 'other') {
    if (shouldKeep) {
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      // alert(
      //   `Yes, the person is a ${attribute}! Keep all that are ${attribute}`
      // )
      showAlertBox();
        alertBox.innerHTML=""
        alertBox.innerHTML += 
        `<div> 
          <p>Yes, this person is a ${attribute}! Keep all that are ${attribute}</p>
          </div>
          <button onclick="hideAlertBox()">OK</button>
        `
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
      showAlertBox();
      alertBox.innerHTML=""
      alertBox.innerHTML+= 
      `<div> 
        <p>NO, the person is not a ${attribute}! Remove all that are ${attribute}</p>
        </div>
        <button onclick="hideAlertBox()">OK</button>
      ` 
    }
  } else if (category === 'hair color'){
    if (shouldKeep) {
      //here we want to catch the value we stored in attributes from currentQuestions
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      showAlertBox();
        alertBox.innerHTML=""
        alertBox.innerHTML += 
        `<div> 
          <p>Yes,the person has ${value} hair! Keep all that has ${value} hair</p>
          </div>
          <button onclick="hideAlertBox()">OK</button>
        ` 
    } else { 
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
      showAlertBox();
      alertBox.innerHTML=""
      alertBox.innerHTML+= 
      `<div> 
        <p>NO, the person does not have ${value} hair! Remove all that has ${value} hair</p>
        </div>
        <button onclick="hideAlertBox()">OK</button>
      ` 
    }
  } else if (category === 'eye color'){
      if (shouldKeep) {
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
        showAlertBox();
        alertBox.innerHTML=""
        alertBox.innerHTML += 
        `<div> 
          <p>Yes,the person has ${value} eyes! Keep all that has ${value} eyes</p>
          </div>
          <button onclick="hideAlertBox()">OK</button>
        `
      } else { 
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
        // alert (`NO, the person does not have ${value} ! Remove all that has ${value}`
        // )
        showAlertBox();
        alertBox.innerHTML=""
        alertBox.innerHTML+= 
        `<div> 
          <p>NO, the person does not have ${value} eyes! Remove all that has ${value} eyes</p>
          </div>
          <button onclick="hideAlertBox()">OK</button>
         `
      }
  }
    generateBoard();
}

// Costum made alert boxes, styles in CSS
const showAlertBox = () => {
  alertBox.style.display = 'flex';
}

const hideAlertBox = () => {
  console.log('I am hiding the alert')
  alertBox.style.display = '';
}

// when clicking guess, the player first have to confirm that they want to make a guess.
// store the interaction from the player in a variable.
// If the player wants to guess, invoke the checkMyGuess function.
const guess = (suspect) => {
  confirmBox.style.display ='flex'
  confirmButton.addEventListener('click' ,() => checkMyGuess(suspect))
  cancelButton.addEventListener('click', () => {
  confirmBox.style.display =''
})

// Without costum made confirm. Keeping this in case I need it for later project 
//  const confirmGuess = () => {
//  if (confirmGuess == true){
//   checkMyGuess(suspect)
//  } else if (confirmGuess == false) {
//   alert(`you have cancelled`)
//  }
// }

}

// If you confirm, this function is invoked
// 1. Check if the suspect is the same as the secret person's name. 
// 2. Set a Message to show in the win or lose section accordingly
// 3. Show the win or lose section display block
// 4. Hide the game board. display none 
 //To access the name of the secret person we do this by accessing the object through secret.name

const checkMyGuess = (suspect) => {
  confirmBox.style.display =''
  if (suspect == secret.name) {
    runWinnerBlock();
  } else {
    runLooserBlock();
  }
}

//I want to display the winner/looser block (styled in css) but hide the game board
 //style.display='' goes back to default settings in css
const runWinnerBlock = () => {
  winOrLooseBlock.style.display = 'flex'
  winner.style.display ='block'
  looser.style.display =''
  board.style.display = 'none'
  if (guessClicks <= 1){
    howManyGuesses.innerHTML = `You won after making ${guessClicks} guess only ⭐️`
    } else if (guessClicks >= 2){
    howManyGuesses.innerHTML = `You won after making ${guessClicks} guesses only ⭐️`
    }
}

//click event to play again. location.reload, inbuild method to refresh page
playAgain.addEventListener('click', () => {
  location.reload()
})

const runLooserBlock = () => {
  if (guessClicks <= 1){
  amountOfGuesses.innerHTML = `You have made ${guessClicks} guess`
  } else if (guessClicks >= 2){
  amountOfGuesses.innerHTML = `You have made ${guessClicks} guesses`
  }
  winOrLooseBlock.style.display = 'flex'
  looser.style.display ='block'
  board.style.display ='none'
}

//click event to try guising again, hiding the losser block element 
//adding guessClicks++ to count amount of guesses
tryAgainBtn.addEventListener('click', () => {
  amountOfGuesses.innerHTML = ''
  winOrLooseBlock.style.display = ''
  looser.style.display =''
  board.style.display =''
  guessClicks++;
})

// Invokes the start function when website is loaded
start();

// All the event listeners
//When clicking on the 'Find out' button, you should invoke the checkQuestion function
// restartButton.addEventListener('click', start)

restartButton.addEventListener('click', () => {
  location.reload()
})
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click' ,checkQuestion)

