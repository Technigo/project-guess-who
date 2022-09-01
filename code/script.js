// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLoseWrapper = document.getElementById('WinOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const timer = document.getElementById('timer')

// Array with all the family guy-characters, as objects
const CHARACTERS = [
  {
    name: 'Bertram',
    img: 'images/kid.png',
    hair: 'orange hair',
    clothing: ['orange', 'purple'],
    accessories: [],
    other: []
  },
  {
    name: 'Adam West',
    img: 'images/adamwest.png',
    hair: 'grey hair',
    clothing: ['grey'],
    accessories: ['a weapon'],
    other: []
  },
  {
    name: 'Brian',
    img: 'images/brian.png',
    hair: 'white hair',
    clothing: ['nothing'],
    accessories: ['a collar'],
    other: []
  },
  {
    name: 'Chris',
    img: 'images/chris.png',
    hair: 'blonde hair',
    clothing: ['blue', 'black'],
    accessories: ['hat'],
    other: ['fat']
  },
  {
    name: 'Cleveland',
    img: 'images/cleveland.png',
    hair: 'black hair',
    clothing: ['red', 'blue'],
    accessories: [],
    other: []
  },
  {
    name: 'Vinnie',
    img: 'images/dogvinnie.png',
    hair: 'blonde hair',
    clothing: ['nothing'],
    accessories: ['a collar'],
    other: []
  },
  {
    name: 'Cleveland Jr',
    img: 'images/clevelendjr.png',
    hair: 'black hair',
    clothing: ['red', 'blue'],
    accessories: ['glasses'],
    other: ['fat']
  },
  {
    name: 'Jerome',
    img: 'images/heyguy.png',
    hair: 'black hair',
    clothing: ['red', 'black'],
    accessories: [],
    other: []
  },
  {
    name: 'Quagmire',
    img: 'images/jiggedy.png',
    hair: 'black hair',
    clothing: ['red', 'blue'],
    accessories: [],
    other: []
  },

  {
    name: 'Joe',
    img: 'images/joe.png',
    hair: 'brown hair',
    clothing: ['grey', 'blue'],
    accessories: [],
    other: ['disabled']
  },
  {
    name: 'Rallo',
    img: 'images/kidafro.png',
    hair: 'black hair',
    clothing: ['blue'],
    accessories: [],
    other: []
  },
  {
    name: 'Lois',
    img: 'images/lois.png',
    hair: 'orange hair',
    clothing: ['blue'],
    accessories: [],
    other: ['a singer']
  },
  {
    name: 'Big Lois',
    img: 'images/loisbig.png',
    hair: 'orange hair',
    clothing: ['blue', 'grey'],
    accessories: [],
    other: ['fat']
  },
  {
    name: 'Meg',
    img: 'images/meggriffin.png',
    hair: 'brown hair',
    clothing: ['pink', 'blue'],
    accessories: ['hat', 'glasses'],
    other: []
  },
  {
    name: 'Herbert',
    img: 'images/oldguy.png',
    hair: 'grey hair',
    clothing: ['blue'],
    accessories: [],
    other: ['disabled']
  },
  {
    name: 'Diane',
    img: 'images/newsanchor.png',
    hair: 'brown hair',
    clothing: ['pink'],
    accessories: [],
    other: []
  },
  {
    name: 'Peter',
    img: 'images/peter.png',
    hair: 'brown hair',
    clothing: ['white', 'green'],
    accessories: ['glasses'],
    other: ['fat']
  },
  {
    name: 'Seamus',
    img: 'images/pirate.png',
    hair: 'white hair',
    clothing: ['red', 'white'],
    accessories: ['hat'],
    other: ['disabled']
  },
  {
    name: 'Blonde Meg',
    img: 'images/loisblonde.png',
    hair: 'blonde hair',
    clothing: ['pink', 'blue'],
    accessories: [],
    other: []
  },
  {
    name: 'Rock Peter',
    img: 'images/peterrock.png',
    hair: 'brown hair',
    clothing: ['black', 'purple'],
    accessories: [],
    other: ['a singer', 'fat']
  },
  {
    name: 'Angry Peter',
    img: 'images/peterangry.png',
    hair: 'brown hair',
    clothing: ['green', 'white'],
    accessories: ['glasses'],
    other: ['fat']
  },
  {
    name: 'Chewie Brian',
    img: 'images/starwarsbrian.png',
    hair: 'brown hair',
    clothing: ['nothing'],
    accessories: ['a collar'],
    other: []
  },
  {
    name: 'Stewie',
    img: 'images/stevie.png',
    hair: 'black hair',
    clothing: ['red', 'yellow'],
    accessories: [],
    other: []
  },
  {
    name: 'Consuela',
    img: 'images/consuela.png',
    hair: 'black hair',
    clothing: ['pink', 'yellow'],
    accessories: ['glasses'],
    other: ['fat']
  },
]

// Global variables
let secretCharacter
let currentQuestion
let charactersInPlay
let numberOfGuesses = 0
let timerInterval

// Draws the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id="guess-btn" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}


// Sound effect when guessing wrong :(
const loserSound = () => {
  let audio = new Audio("/audio/peter-griffin-sneaky-laugh.mp3")
  audio.play();
}

// Sound effect when guessing right! :)
const winnerSound = () => {
  let audio = new Audio("http://soundfxcenter.com/television/family-guy/8d82b5_Family_Guy_Glenn_Quagmire_Giggidy_Sound_Effect.mp3")
  audio.play();
}

// This is the timer function
startTimer = () => {

  // Starts by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  let second = 0, // Clear the variables
    minute = 0,
    hour = 0;

   timerInterval = setInterval(function () {  // Sets an interval every 1000 ms
    timer.classList.toggle('odd');   // Toggle the odd class every interval

    // Sets the timer text to include a two digit representation
    timer.innerHTML =
      (hour ? hour + ":" : "") +
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);

    // Adds a new second since when every second is passed
    second++;
  
    // Check if second equals 60 -> "one minute". If so, we add a minute and reset our seconds to 0.
    if (second == 60) {
      minute++;
      second = 0;
    }
    // If it hits 60 minutes -> "one hour" we reset the minutes and add an hour.
    if (minute == 60) {
      hour++;
      minute = 0;
    }

  },1000);
}


// Randomly selects a person from the characters array and sets as the value of the variable called secretCharacter
const setSecretCharacter = () => {
  secretCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log('Secret character chosen:', secretCharacter);
}


// This function is to start (and restart) the game
const start = () => {
  numberOfGuesses = 5
  document.getElementById('guess-counter').innerHTML = `${numberOfGuesses}`
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecretCharacter();
  selectQuestion();
  alert('Lets play!');
  startTimer()
}

// Sets the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value,
  }

}

// This function will be invoked when you click on 'Find Out' button.
// This compares the currentQuestion details with the SecretCharacter person details in a different manner based on category.
// Sees if we should keep or remove people based on that
// Then invokes filterCharacters true or false
const checkQuestion = () => {
  numberOfGuesses -= 1
  document.getElementById('guess-counter').innerHTML = `${numberOfGuesses}`
  const { category,value } = currentQuestion
  console.log('current question', currentQuestion)
  
  if (numberOfGuesses === -1) {
    findOutButton.style.display = 'none'
    document.getElementById('guess-counter').innerHTML = `No guesses left. Time to make a guess!`

  } else if (category === 'accessories') {
    if (secretCharacter[category].includes(value)) {
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }

  } else if (category === 'other') {
    if (secretCharacter[category].includes(value)) {
          filterCharacters(true)
      }
    else {
          filterCharacters(false)
      }

  } else if (category === 'hair') {
    if (secretCharacter[category] === value) {
        filterCharacters(true)
    } else {
        filterCharacters(false)
     }

   } else if (category === 'clothing') {
      if (secretCharacter[category].includes(value)) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }

  }

// This will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log('keep it?', keep)

  const { category, value } = currentQuestion
  // Shows the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is ${value}. Keep all peoople that is ${value}`)   
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      alert(`No, the person is not ${value}. Remove all people that is ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  
  } else if (category === 'hair') {
      if (keep) {
        alert(`Yes, the person has ${value}! Keep all people with ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
        alert(`No, the person doesn't have ${value}. Remove all people with ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }

  } else if (category === 'clothing') {
    if (keep) {
      alert(`Yes, the person has wears ${value}! Keep all people that wears ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  } else {
      alert(`No, the person doesn't wear ${value}. Remove all people wearing ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  }
}

 // Determines what is the category
// Filters by category to keep or remove based on if the keep variable is true or false.

  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'other') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      }
      else {
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }

  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }

  } else if (category === 'clothing') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      }
      else {
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }

  }

  //Generates new board with filtered characters
  generateBoard();

}
  

// When clicking guess, the player first have to confirm/press ok that they want to make a guess. If cancel, nothing happens.
const guess = (personToConfirm) => {
  const userGuess = confirm(`Are you sure you want to guess ${personToConfirm}?`)

  if (userGuess) {
    checkMyGuess(personToConfirm);
  } 
  
}

// If player confirms that they want to guess, this function is invoked
const checkMyGuess = (personToCheck) => {

  board.style.display = 'none'

  if (personToCheck === secretCharacter.name) {
    winnerSound();
     winOrLose.style.display = "flex"
     winOrLoseText.innerHTML += `
    Yey! ${personToCheck} was correct. You Win. Want to play again?
     `
    } else {
    loserSound();
    winOrLose.style.display = "flex"
    winOrLoseText.innerHTML += `
   Sorry, ${personToCheck} was not correct. Want to play again?
    `
  }
 
}

// Invokes the start function when website is loaded
start()

// This reloads after pressing "play again"-button
reload = () => {
  window.location.reload()
}

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', reload)