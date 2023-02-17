// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const fillterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLose = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const myAudio = document.getElementById('myAudio')


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
let secret // this is the secret person object
let currentQuestion // this is current question object
let charactersInPlay  // array of all people left in the game after filtering
let myMusic

// Draw the game board
const generateBoard = () => {
  board.innerHTML = '' //fresh start after each full game 
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
// function that sets a value to a secret variable // Math.floor() returns random INTEGER
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret)
}

const guess = (suspect) => {
  // store the interaction from the player in a variable.
  const confirmationGuess = confirm(`are you sure it is ${suspect}?`)
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if(confirmationGuess){
    checkMyGuess(suspect)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  if (suspect === secret.name){
    winOrLoseText.innerHTML = `
    Congrats, ${suspect} was a corect person you were loking for! 😉`
  } else {
    winOrLoseText.innerHTML = `
    👎 To bad, ${suspect} was not the right person!  👎`
  } 
  // 3. Show the win or lose section
  winOrLose.style.display = "flex";
  // 4. Hide the game board when displaying win or loose text
  board.style.display = "none";
}

// setting the currentQuestion object when you select something in the dropdown
// .parentNode.label is hair or eye for example
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value 
  // value = questions.options[questions.selectedIndex].value 
  //value here is yellow, glasses, smoker
  currentQuestion = {
    category:category,
    value: value,
  }
}


// This function should be invoked when you click on 'Find Out' button.
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
const checkQuestion = () => {
  let category = currentQuestion.category
  let value = currentQuestion.value
  let keep = false

if (category === 'hair' || category === 'eyes') {
  keep = value === secret[category]
} 
else if (category === 'accessories' || category === 'other') {
  keep = secret[category].includes(value)
}

//if the above if-statements are execuded the keep variable value changes to true

filterCharacters(keep) 
   }
  
 
// It'll filter the characters array and redraw the game board. Keep is boolean
const filterCharacters = (keep) => {
  let attribute = currentQuestion.attribute;
  let category = currentQuestion.category;
  let value = currentQuestion.value;
  
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) { // if true
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `🎩Yes, the person wears ${value}! Keep all people that wears ${value}👓`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `🎩No, the person doesn't wear ${value}! Remove all people that wears ${value}👓`
      )
    }
  } else if (category === 'other') {
    if (keep){
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        ` 🚬 🚬 🚬Yes, the person is ${value}! Keep all people that are ${value}`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `⭐⭐⭐No, the person is not ${value}! Remove all people that are ${value}⭐⭐⭐`
      )
    }
  } else if (category === 'hair') {
      if (keep){
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
        alert(
          `Yes, the person has ${value} hair! Keep all people that have ${value} hair`
        )
      } else {
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
        alert(
          `No, the person does not ${value} hair! Remove all people that have ${value} hair`
        )
      }
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `👀👀👀Yes, that person has ${value} eyes. Keep everyone that has ${value} eyes.`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `👀👀👀No, that person does not have ${value} eyes. Remove all without ${value} eyes.`
      )
    }
  }


  generateBoard()
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard(); // generate the board with every character
  setSecret(); //set new secret person every new game
  winOrLose.style.display = 'none'
  board.style.dispaly = 'flex'  //this is fotr the mobile
   //every time you play set a new secret person
}

// Invokes the start function when website is loaded
start()

// All the event listeners
// listen to click vent once person clicks that button we want start function to run
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
fillterButton.addEventListener('click',checkQuestion );
//this will make sure that website will reload after clicking play again
playAgainButton.addEventListener("click", () => {
  location.reload("event triggered")
  return false
})