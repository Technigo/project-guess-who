// All the DOM selectors stored as short variables
const board = document.getElementById('board')  // a class within the section where the charachters will show.
const questions = document.getElementById('questions') // where you do your guesse (the roll-down input section)
const restartButton = document.getElementById('restart') // the restart button
const findOutButton = document.getElementById('filter') // the find-out button
const winOrLoseSection = document.getElementById('winOrLose') 
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain') //the play again-button

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat'],
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
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses'],
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
    accessories: ['glasses', 'jewelry'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
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
    accessories: ['cap'],
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
    accessories: ['glasses', 'jewelry'],
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
    accessories: ['sunglasses', 'cap', 'jewelry'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
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
    accessories: ['glasses', 'cap'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let keep

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
 console.log('secret person;', secret)  
}

// This function to start (and restart) the game
const start = () => {
  //Setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS 
}

// This function sets the currentQuestion when the user selects something in the dropdow. The function is invoked when selecting an item in the dropdown.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value; // This variable stores the actual value of the question we've selected in the dropdown.

  currentQuestion = {
    category: category, 
    value: value 
  }
}

// This checkQuestion function is invoked when you click on 'Find Out' button, leads to filter function
const checkQuestion = () => {
  const { category, value } = currentQuestion
  
  if (category === 'hair' || category === 'eyes') {
    if (secret[category]===value) {
      keep = true
      filterCharacters(true); // Keep everyone with that hair/eye colour 
    }
    else { 
      keep = false
      filterCharacters(false); // Remove everyone with that hair/eye colour
    }
  }
  else if (category === 'accessories' || category === 'other') 
  {
    if (secret[category].includes(value)) {  //says includes instead of === since you either have the accessories/other or not 
      keep = true
      filterCharacters(true); // Keep everyone with that accessory
    }
    else {
      keep = false
      filterCharacters(false); // Remove everyone with that accessory
    }
  }
}



// This will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
  if (category === 'accessories') { //accessories (glasses, hat)
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } 
    else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } 
  else if (category === 'other') { //Smokers
    if (keep) {
      alert(`Yes, the person is a ${value}! Keep all people that are ${value}s`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } 
    else {
      alert(`No, the person is not a ${value}! Remove all people that are ${value}s`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } 
  else {
    if (keep) { //hair & eyes
      alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } 
    else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }

  // Function: redraw the board with the remaining people.
  generateBoard();
}

// Function: the user confirms its guess (stored in a variable ) and the function checkMyGuess is invoked. 
const guess = (personToConfirm) => {
  const playerGuess = confirm(`Are you sure you want to guess on ${personToConfirm}...? 🤔`) 
  if (playerGuess) {
   checkMyGuess(personToConfirm)   
 }
}

 // Check if player's guess is correct, show message in the win-or-lose section accordingly
const checkMyGuess = (personToCheck) => { 
  if (personToCheck === secret.name) {
    winOrLoseText.innerText = `...you got it! The secret person is indeed ${personToCheck} 👏`;
  }
  else {
    winOrLoseText.innerText = `Incorrect guess unfortunately, the secret person is actually ${secret.name}!`;
    winOrLoseSection.style.display = 'flex';
  }
  winOrLoseSection.style.display = 'flex'; //Show the win-or-lose section
  board.style.display = 'none'  //Hide the game board
}

//The following functions are called when the website is loaded:
start() // Invokes the start function 
generateBoard() // Invokes the generateBoard function
setSecret() // Invokes the setSecrets function (i.e. a new secret person is chosen)

// ALL THE EVENTLISTENERS
// When the click event is triggered, the start function is invoked
restartButton.addEventListener('click', start) 

//When the dropdown is changed, the selectQuestion-function is invoked. 
questions.addEventListener('change', selectQuestion);

filter.addEventListener('click', checkQuestion);

//When the findOutButton is clicked, the checkQuestion-function is invoked. 
findOutButton.addEventListener('click', checkQuestion)

//When the "Play again" button is clicked, the window returns to the start page
playAgain.addEventListener('click', (event) => {
  setTimeout (() => location.reload(console.log("event triggered")))
    return false 
})