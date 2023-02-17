// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const body = document.getElementById("body")
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

// Added gender property to the characters - still needs to be set individually
CHARACTERS.forEach( (person) => {
  person["gender"] = ""
})

//Array holding winOrLose html-elements (cleared on start)
let winOrLose = 
[`
<section id="winOrLose" class="win-or-lose-wrapper" style="display: flex;">
  <div class="win-or-lose">
  <img class="guess-who-icon" src="images/guess-who-bubble.png" alt="Guess Who">
  <h1 id="winOrLoseText">YAY! Congrats <br>
–    you won! <span role="img" aria-label="cheer">🙌</span></h1>
  <button id="playAgain" class="filled-button" onclick= start()>PLAY AGAIN</button>
  </div>
</section>
`, 
`
<section id="winOrLose" class="win-or-lose-wrapper" style="display: flex;">
  <div class="win-or-lose">
    <img class="guess-who-icon" src="images/guess-who-bubble.png" alt="Guess Who">
    <h1 id="winOrLoseText">Oh no! You guessed wrong. Game over! <span role="img" aria-label="angry">😤</span></h1>
    <button id="playAgain" class="filled-button" onclick = start()>PLAY AGAIN</button>
  </div>
</section>
`]

// Global variables - renamed secret to secretPerson
let secretPerson
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
  secretPerson = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  board.innerHTML -= winOrLose[0] || winOrLose[1]
  questions.selectedIndex = 0
  setSecret()
  generateBoard()
}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value


  if (category === 'hair') {
    currentQuestion = {
      attribute: 'hairCol',
      value: value,
      category: category,
    }
  } else if (category === 'eyes') {
    currentQuestion = {
      attribute: 'eyeCol',
      value: value,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  } else {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  //destructures currentQuestion to separate value of category and value from object
  const { category, value } = currentQuestion

  console.log(currentQuestion)
  
  //No need to check since all other cases are false
  let keep = false
  
  if (category === 'hair' || category === 'eyes') {
    if (value === secretPerson.hair || value === secretPerson.eyes) {
      keep = true
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secretPerson.accessories.includes(value) || secretPerson.other.includes(value)) {
      keep = true
    }
  }
  filterCharacters(keep)
}


  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters


// //It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const {attribute, category, value } = currentQuestion
  
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${attribute}! Let's see who are left...`)
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Let's see who are left...`
      )
    }
  } 
  else if (category === 'other') {
    if (keep) {
      alert(`Yes the person has ${attribute}`)
    } else {
      alert(`No, the person doesn't ${attribute}`)
    }
  } 
  else if (category === "hair"){
    if (keep) {
      alert(`Yes, the person has ${value} hair. Let's see who are left...`)
    } else {
      alert(`No the person doesn't have ${value} hair. Let's see who are left...`)
     }
    }
  else if (category === "eyes"){
    if (keep){
      alert(`Yes, the person has ${value} eyes`)
    } else {
      alert(`No the person doesn't have ${value} eyes`)
    }
  };


/* if (category === 'hair'|| 'eyes'){
    if (keep){
      charactersInPlay = charactersInPlay.filter((person) => person[value] === value)
      }};
    /* } else if (category === 'accessories'|| 'other'){
      if (keep){
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
        }
      } 
generateBoard(); */
if (keep) {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[attribute] === value
  )
} else {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[attribute] !== value
  )
}

generateBoard()
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const characterGuessed = personToConfirm
  // remember the confirm() ?
 if (confirm(`Do you really want to guess on ${characterGuessed}? If it's wrong you lose...`))
 {
  checkMyGuess(characterGuessed)
 }
  // If the player wants to guess, invoke the checkMyGuess function.

}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secretPerson.name){
    //show winner-board
    board.innerHTML += winOrLose[0]
} else {
    //Show loser-board
    board.innerHTML += winOrLose[1]
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener(('click'), checkQuestion)
// playAgainButton.addEventListener('click', start) - not working...//