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
    other: ['jewelry']
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
    other: ['jewelry']
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
    other: ['jewelry']
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
    other: ['jewelry']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: ['jewelry']
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
      checkProp: 'hairCol',
      value: value,
      category: category,
    }
  } else if (category === 'eyes') {
    currentQuestion = {
      checkProp: 'eyeCol',
      value: value,
      category: category,
    }
  } else if (category === 'accessories' || category === 'other') {
    currentQuestion = {
      checkProp: value,
      value: true,
      category: category,
    }
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  //destructures currentQuestion to separate value of category and value from object
  const {checkProp, value, category } = currentQuestion
  console.log(currentQuestion)

  const {hair, eyes, accessories, other} = secretPerson
  console.log(secretPerson)
  
  //CHeck if currentQuestion matches with secretPerson

  if (category === 'hair' || category === 'eyes') {
    if (value === secretPerson.hair || value === secretPerson.eyes) {  
      filterCharacters(true)
    } else {
      filterCharacters(false)}
  } else if (category === 'accessories' || category === 'other'){
      if (secretPerson.accessories.includes(checkProp) || secretPerson.other.includes(checkProp)){
       filterCharacters(true)
      } else {
        filterCharacters(false)}
    }
}


// //It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
const {checkProp, category, value} = currentQuestion

  
  if (category === 'accessories') {
    if (keep=== true) {
      alert(`Yes, the person wears ${checkProp}! Let's see who are left...`)
      //charactersInPlay = charactersInPlay.filter( person => person["accessories"].includes(value))
      charactersInPlay = charactersInPlay.filter(person => person['accessories'] === checkProp)
    } else {
      alert(`No, the person doesn't wear ${checkProp}! Let's see who are left...`)
      //charactersInPlay = charactersInPlay.filter( (person) => !person["accessories"].includes(value))
      charactersInPlay = charactersInPlay.filter(person => !person['accessories'].includes(checkProp))
    }
  } else if (category === 'other') {
    if (keep === true) {
      alert(`Yes the person has ${checkProp}`)
      charactersInPlay = charactersInPlay.filter(otherCheck => otherCheck.other.includes(checkProp))
    } else {
      alert(`No, the person doesn't have ${checkProp}`)
      charactersInPlay = charactersInPlay.filter(otherCheck => !otherCheck.other.includes(checkProp))
    }
  } else if (category === "hair"){
    if (keep === true) {
      alert(`Yes, the person has ${value} hair. Let's see who are left...`)
      charactersInPlay = charactersInPlay.filter(person => person.hair === value)
    } else {
      alert(`No the person doesn't have ${value} hair. Let's see who are left...`)
      charactersInPlay = charactersInPlay.filter(person => person.hair !== value)
     }
    } else if (category === "eyes"){
    if (keep === true){
      alert(`Yes, the person has ${value} eyes`)
      charactersInPlay = charactersInPlay.filter(person => person.eyes === value)
    } else {
      alert(`No the person doesn't have ${value} eyes`)
      charactersInPlay = charactersInPlay.filter(person => person.eyes !== value)
    }
  };
  console.log(currentQuestion)
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