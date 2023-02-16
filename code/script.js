// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filledButton = document.getElementById('filter')
const winOrLose = document.getElementById('inOrLose')
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
console.log(CHARACTERS);
// Global variables
let secret // this is the secret person object
let currentQuestion // this is current question object
let charactersInPlay  // array of all people left in the game after filtering

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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard(); // generate the board with every character
  setSecret(); //every time you play set a new secret person
}

// setting the currentQuestion object when you select something in the dropdown
// .parentNode.label is hair or eye for example
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  const value = questions.value

  if (category === 'hair color'){
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
    }
  }else if (category === 'eye color'){
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
    }
  }else if (category === 'accessories'){
    currentQuestion = {
      attribute: attribute,
      value: true,
      category: category,
    }
  }if (category === 'other'){
    currentQuestion = {
      attribute: attribute,
      value: true,
      category: category,
    }
  }
}
console.log(selectQuestion);

// This function should be invoked when you click on 'Find Out' button.
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
const checkQuestion = () => {
  if (currentQuestion.value === secret[currentQuestion.attribute]){
    filterCharacters(true) //correct guess
  } else {
    filterCharacters(false) // incorect guess
  }
 //filterCharacters(keep)
  }
  
 
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  let attribute = currentQuestion.attribute;
  let category = currentQuestion.category;
  let value = currentQuestion.value
  
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
  } else if (category === 'hair color') {
    if (keep){
      alert(
        `Yes, the person has ${attribute} hair! Keep all people with ${attribute} hair`
      )
    } else {
      alert(
        `No, the person does not have ${attribute} hair! Remove all people with ${attribute} hair`
      )
    }
  } else if (category === 'eye color') {
    if (keep){
      alert(
        `Yes, the person has ${attribute} eyes! Keep all people with ${attribute} eyes`
      )
    } else {
      alert(
        `No, the person does not have ${attribute} eyes! Remove all people with ${attribute} eyes`
      )
    }

  } else {
    if (keep) {
      alert(
        `Yes, that person has ${value} `
      )
    } else {
      alert(
        `No, that person does not have ${value}`
      )
    }
  }

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
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  const confirmationGuess = confirm(`are you sure it is ${suspect}?`);
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if(confirmationGuess === true){
    checkMyGuess(suspect)
  } else {
    return false
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  winOrLose.innerHTML += `
    div class="win-or-lose">
          <img
            class="guess-who-icon"
            src="images/guess-who-bubble.png"
            alt="Guess Who"
          />
          <h1 id="winOrLoseText"></h1>
          <button type="button" 
              id="playAgain" 
              class="filled-button">
              PLAY AGAIN
          </button>
        </div>
  `

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  if (suspect === secret.name){
    winOrLoseText.innerHTML = `
    Congrats, ${suspect} was a corect person you were loking for!`
  } else {
    winOrLoseText.innerHTML = `
    To bad, ${suspect} was not the right person!`
  } 
  // 3. Show the win or lose section
  winOrLose.style.display = "flex";
  // 4. Hide the game board
  board.style.display = "none";
}

// Invokes the start function when website is loaded
start()

//setSecret()

// All the event listeners

// listen to click vent once person clicks that button we want start function to run
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filledButton.addEventListener('click',checkQuestion )
playAgainButton.addEventListener('click', start)