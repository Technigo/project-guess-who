// DOM Selectors - reffering to the HTML
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')

// The array containing all the characters it is called CHARACTERS 
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

// GLOBAL VARIABLES
let secret //Will be the secret person object
let currentQuestion //Tracks the current question
let charactersInPlay //An array of all the people left in the game

// Draws the game board, shows characters. The 
const generateBoard = () => {
 board.innerHTML = '' //everytime we get a fresh start at each game
 //the person in the brackets is just a placeholder for the objects in the array charactersInPlay 
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

// **KLAR** Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]//Set a person in the array as the secret
  //secret = charactersInPlay[0] <= Sätter den hemliga personen till nr 1 i arrayen**
  //the Math.floor selects only integers
  //Math.random selects only numbers between 0 and 1 but adding
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS //Reset characters, all are shown
  winOrLose.style.display = 'none' //Removes win or lose display
  board.style.display = 'flex'//Shows the boardgame
  setSecret(); //Sets new secret person
  generateBoard(); //shows the gameboard
  // What else should happen when we start the game?
}

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label //gets the options group from the select drop down menu
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value //stores the users choice in a variable

  //stores the values of the category and value variables and put them inside the object currentQuestion
  currentQuestion = {
    category: category,
    value: value
  }
}
// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion //We could write let category = currentQuestion.category
  let keep = false
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    keep = value === secret[category]
    //keep is true when the value is the same as the secret person
  } 
  
  else if (category === 'accessories' || category === 'other') {
    //keep is true when the value is the same of the secret person
    keep = secret[category].includes(value)
  }

  //if the above if-statements are execuded the keep variable value changes to true

  filterCharacters(keep) 
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  //If statements for the different categories
  if (category === 'accessories') { //If-statment for acessories-category
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value} `)
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}`)
    }
  } 
  
  else if (category === 'other') { //Else if-statment for other-category
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(`Yes, the person is a ${value}! Keep all people that are ${value}s`)
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`No, the person is not a ${value}! Remove all people that are ${value}s`)
    }
  } 
  
  else if (category === 'hair') { //Else if-statment for hair-category
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(`Yes, the person has ${value} hair! Keep all people with ${value} hair`)
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`No, the person doesnt have ${value} hair! Remove all people with ${value} hair`)
    }
  } 
  
  else { //Else-statment for eyes-category
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(`Yes, the person has ${value} eyes! Keep all people with ${value} eyes`)
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(`No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes`)
    }
  }
  //Generates the board again based on the object in the new array (Characters in play)
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let userGuess = confirm(`Do you want to guess on ${personToConfirm}?`)
  //based on which person the user clicked on, this value is stored in personToConfirm
  //we later create a variable of the whole confirm-box and if the user press OK
  if (userGuess) {
    checkMyGuess(personToConfirm)
    //The user is sent to the function checkMyGuess and the value personToConfirm a parameter
  }

  else {
    alert("Make more guesses if you want! :)")
    //if the user presses cancel an alert pops up that informs the user that she can make more guesses. 
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
//personToConfirm is the person the user have clicked on, it can be called something else

//if personToConfirm is the same as the secret persons name, the user wins.
if (personToConfirm === secret.name){
winOrLoseText.innerHTML = `Congratulations, you won! &#129395 The right answer was ${secret.name}!`
}

//if personToConfirm is not the same as the secret person, the user loses.
else {
winOrLoseText.innerHTML = `Oh no! You lost! &#128543 The right answer was ${secret.name}.`
}

//Displays the HTML-section winOrLose
winOrLose.style.display = 'flex'
//Removes the display of the board.
board.style.display = 'none'
}

start()// Invokes the start function when website is loaded


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutBtn.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)