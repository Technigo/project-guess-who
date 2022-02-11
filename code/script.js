// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['bright smile']
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
    other: ['smoking habit']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['bright smile']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['bright smile']
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
    accessories: ['glasses', 'jewellery'],
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
    accessories: ['glasses', 'jewellery'],
    other: ['bright smile']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoking habit']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoking habit', 'bright smile']
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
    other: ['smoking habit']
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
    other: ['bright smile']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses','jewellery'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['bright smile']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewellery'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewellery'],
    other: ['bright smile']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['bright smile']
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
let secret
let currentQuestion = { guessCategory: "hair", value: "brown" }   //This is optional but the value is saved in the variable(s) just so it works with the 'Find out' button from start. 
let charactersInPlay
let guesses = 0;    //The game has a counter which shows the amount of guesses you do. The counter ('guessCounter') has a variable which is declared to start from 0.  

// Draw the game board.
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

// Randomly select a person from the characters array and sets as the value of the variable called secret.
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game. Here we're setting charactersInPlay array to be all the characters to start with.
const start = () => {
  charactersInPlay = CHARACTERS
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  generateBoard()
  setSecret()
  guesses = 0;
  guessCounter.innerHTML =`
    <p>Number of guesses: ${guesses}/5</p>
    `
  //This enables the 'Find out' button when game starts.
  filter.disabled = false
}

// This function saves our questions in two variables 'guessCategory' and 'value' which is the stored in an array of an object ('currentQuestion'). 
const selectQuestion = () => {
  
  const guessCategory = questions.options[questions.selectedIndex].parentNode.label  //  What option group ('guessCategory') the value belongs to.
  const value = questions.value; // Actual value of the option group we've selected stored in a variable ('value').
 
  currentQuestion = {   
    guessCategory: guessCategory,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button. The checkQuestion() then invokes the filterCharacters(). 
const checkQuestion = () => {
  const { guessCategory, value } = currentQuestion

  // Here our guess ('value) is compared with the secret person ('secret[guessCategory]').  
  // The 'guessCategory' inside the brackets is telling us that the computer should extract the value according to what optgroup we chose. 
  // The values are then saved in a variable called userGuess which is to be used later in 'filterCharacters()'.
  if (guessCategory === 'hair' || guessCategory === 'eyes') { 
    userGuess = value === secret[guessCategory]
  } else if (guessCategory === 'accessories' || guessCategory === 'other') {
    userGuess = secret[guessCategory].includes(value)
  }
  
  filterCharacters(userGuess)
  guesses += 1;   //Every guess is adding a +1 to the counter. If the amount of guesses has reached 5 the following will happen: 
  
  if (guesses === 5){
    alert('Your are out of guesses. Please make your final choice.')
    filter.disabled = true  //The 'Find out' button is disabled (compare this status in start()).
  }
  
  guessCounter.innerHTML =`
    <p>Number of guesses: ${guesses}/5</p>
    `
}

// This function will filter the characters array and redraw the game board.  
const filterCharacters = (userGuess) => {
  const { guessCategory, value } = currentQuestion
  
  if (guessCategory === 'accessories') {

      if (userGuess === true) {
        alert(`Correctamundo! The person wears ${value}! Keep all people that wear ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory].includes(value))
      } else {
        alert(`Computer says no, the person doesn't wear ${value}! Remove all people that wear ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => !person[guessCategory].includes(value))
      }

  } else if (guessCategory === 'other') {

      if (userGuess === true) {
        alert(`Way to go! Yes, the person has a ${value}! Keep all people that have a ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory].includes(value))
      } else {
        alert(`Nice guess but try again. The person hasn't a ${value}! Remove all people that have a ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => !person[guessCategory].includes(value))
      }  

  } else if (guessCategory === 'eyes') {
      
      if (userGuess === true) {
        alert(`Well, look at you! Yes, the person has gorgeous ${value} eyes! Keep all people with ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory] === value)
      } else {
        alert(`No, you guessed wrong. The person doesn't have ${value} eyes! Remove all people with ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory] !== value)
      }

  } else if (guessCategory === 'hair') {
     
      if (userGuess === true) {
        alert(`You're right! The person is blessed with shiny ${value} hair! Keep all people that rock ${value} hair.`)
        charactersInPlay = charactersInPlay.filter((person) => person[guessCategory] === value)
      } else {
       alert(`Negative soldier, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`)
       charactersInPlay = charactersInPlay.filter((person) => person[guessCategory] !== value)
      }

    }
    generateBoard()  
  }

// The guess() is invoked when clicking on guess button on the character's card (row 221). The parameter "personToConfirm" gets its value from the same row. 
// When clicking guess button the 'guess()' will execute the following: a 'confirm()', store the guess in a variable and lastly start 'checkMyGuess()' 
const guess = (personToConfirm) => {

  if (confirm(`Is ${personToConfirm} your final guess?`)) {
    if (confirm(`Are you really sure with your answer?`)) {
        personToCheck = personToConfirm
        checkMyGuess(personToCheck)
    }
  }
}

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert("You win!")
    winOrLoseText.innerHTML =`
    <p>Way to go, champ! ${personToCheck} was the secret person!</p>
    `
  } else {
    alert(`Oh no! The secret person was ${secret.name}.`) 
    winOrLoseText.innerHTML =`
    <p>Sorry, you snooze, you lose! </p>
    `
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filter.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)

