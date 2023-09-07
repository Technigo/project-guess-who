// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const winOrLose = document.getElementById('winOrLose')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')
const winnerImg = document.createElement('img');
const winLoseP = document.createElement('p')
winLoseP.className = 'winLose-p'
winOrLose.appendChild(winLoseP)
winnerImg.className = 'winner-img';
winOrLose.appendChild(winnerImg);

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
let secret
let currentQuestion
let charactersInPlay
let guessedPerson


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
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  //Generate board
  generateBoard();
  //Set secret person
  setSecret(); 
}

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  //This variable stores what value of the category is selected 
  const value = questions.options[questions.selectedIndex].value
  //Redeclaring the global variable "currenQuestion", making it into an object.
  currentQuestion = {
    category: category,
    value: value
  }
}


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion //destructuring "secret variable"
  //Initialize a variable to track whether to keep or remove characters
  let keep = ""; 
  
    //This if statement checks if the current question category is either "hair" or "eyes"
    if (category === 'hair' || category === 'eyes') {
      //Redeclaring the keep-variable. If category attribute matches the selected value, keep is set to 'true'. (The secret[category] will be brown, grey, yellow etc)
      keep = secret[category] === value
      //This else if block checks if the current question category is either 'accessories' or 'other'
    } else if (category === 'accessories' || category === 'other') {
      //Want to check if the secret person has the selected 'value' within the category. secret[category] accesses the array (eg. ['hat']) of accessories or other characteristics. Sets the keep variable to true or false.
      keep = secret[category].includes(value)
   }
   //Invoking the filterCharacters (filtering the characters array and redraw gameboard), passing in keep (true or false)
   filterCharacters(keep)
}

// This function will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((character) => !character[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category].includes(value))
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all people that are ${value}s.`
      )
      charactersInPlay = charactersInPlay.filter((character) => !character[category].includes(value))
    }
  } else if (category === 'hair'){
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that doesn't have ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category] !== value)
    }
    
  } else if (category === 'eyes'){
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that doesn't have ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((character) => character[category] !== value)
    }
  }
  generateBoard()
}

// when clicking guess, the player first has to confirm that they want to make a guess. (This function is called in the onclick on row 230.)
//The value that is passed into the function is person.name
const guess = (personToConfirm) => {
  //An alert window shows up
  const confirmation = confirm(`Are you sure you want to guess on ${personToConfirm}?`)
  if(confirmation) { //If clicks OK the checkMyGuess() wil be invoked.
    checkMyGuess(personToConfirm)
  } else { //Else nothing will happen and the alert window will disappear.
    console.log ("Guess cancelled")
  }
}

// If user confirms, this function is invoked:
const checkMyGuess = (personToCheck) => { //The value that is passed on is person.name
  board.innerHTML = "" //Clears the board.
  winOrLose.style.display = "flex" //This will show the winOrLose style. Default in css is set to "none"
  if (personToCheck === secret.name) { //If person.name is same as sectet.name the user will see the win section
    winOrLoseText.innerHTML = `Yes! ${secret.name} was the one <br> who was hiding!`
    winnerImg.src = secret.img //Inserting img of the secret person
    winnerImg.alt = secret.name
  } else {
   winOrLoseText.innerHTML = `Oh no, that's not correct! <strong>${secret.name}</strong> was the one who was hiding. Try again!`
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', (event) => { 
  start() 
  winOrLose.style.display = "none"; // The winOrLoseWindow stops showing
  });

questions.addEventListener('change', selectQuestion)


