
// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const finish = document.getElementById('winOrLose')
const finishText = document.getElementById('winOrLoseText')
const playAgainBtn = document.getElementById('playAgain')
const counterDisplayElem = document.querySelector('.counter-display') // for counter of how many guesses.


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['woman']
    
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['man']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'man']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['man']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['man']
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['man']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['woman']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['woman']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['woman']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker', 'woman']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'man']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['woman']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'man']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: ['woman']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['woman']
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['man']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['woman']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: ['woman']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['man']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['man']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: ['woman']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['man']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['man']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: ['woman']
  },
]

// Global variables
let secret
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
          <span>Dare to guess on ${person.name}?</span>
          <button class="filled-button-small" onclick="guess('${person.name}')">Yeah!</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log('Secret character chosen:', secret);
} 

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  finish.style.display = 'none'
  board.style.display ='flex' // Board will be visibel at the page. 
  generateBoard() // start game w/ all characters shown. 
  setSecret() // choose the secret person. 
  selectQuestion()
  alert('Do you wana play a game ?')
  
 
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
    console.log(category) 
    const value = questions.value // store the actual value of question

  // This variable stores what option group (category) the question belongs to.
  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  console.log('current question', currentQuestion)

  if (category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } else if (category === 'hair') {
    if (secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } else if (category === 'accessories') {
    if (secret[category].includes(value) ) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } else if (category === 'other') {
    if (secret[category].includes(value) ){
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } 
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log('keep it?', keep)


  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yesbox, this person has ${value}! let's keep it all person that has ${value}`
      );
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value) )
      alert(
        `No no no, this person dosen't have ${value}! Remove please. ${value}`
      );
    }

  } else if (category === 'other') {
   if (keep) { 
    charactersInPlay = charactersInPlay.filter((person) => person [category] === value);
    alert(`Woho, this person is a ${value}.  `);

    } else {
    charactersInPlay = charactersInPlay.filter((person) => person [category] !== value);
    alert(`this person is not a ${value}, remove done. `);
    } 

  } else if (category === 'hair') {
      if(keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
        alert(`Yesbox! the secret person looks amazing with ${value} hair. Keep it`);
      
      
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person [category] !== value);
      alert(`No, this person is not rocking ${value} hair! remove plzzz`);
      
    }
  } else if (category === 'eyes') {
    if(keep) {
      charactersInPlay = charactersInPlay.filter((person) => person [category] === value);
      alert(`Correct, this person has lovely ${value} eyes. Keeeeep them! `);
    }

  } else {
    charactersInPlay = charactersInPlay.filter((person) => person [category] !== value);
    alert(`Nooo, this person has not ${value} eyes. Lets remove and keep going.`);
  }
 
    // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

if (category === 'accessories') {
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  } 
  else {
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  }

} else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

} else if (category === 'hair') {
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
  }
  else {
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  }

} else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

    
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const guessUser = confirm(`${personToConfirm} is this you finall answer?`);

  if(guessUser) {
    checkMyGuess(personToConfirm)
  } //else {
   // alert(`keep guessing`) // change mind to guess, keep playing
  //}
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {

  board.style.display = 'none' // hides the game board to show last message 
  if (personToCheck === secret.name) {
    finish.style.display = 'flex'
    finishText.innerHTML += `Winner Winner, chicken dinner!  The secret person is ${personToCheck}`
  } else {
    finish.style.display = 'flex'
    finishText.innerHTML += `Close, but no cigar ! Better luck next time, it was ${secret.name}`
  }
  
}

// counter for how many guesses the user has done. 
let count = 0;

updateDisplay();

findOut.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};

function resetDisplay (){
  counterDisplayElem.innerHTML = 0; 
}

// Invokes the start function when website is loaded
start()
resetDisplay()


reload = () => {
  window-location.reload()
}

// All the event listeners
restartButton.addEventListener('click', reload)
findOut.addEventListener('click', checkQuestion) 
questions.addEventListener('change', selectQuestion)
playAgainBtn.addEventListener('click', reload)
restartButton.addEventListener('click', resetDisplay)





