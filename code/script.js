// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgain = document.getElementById('playAgain')
const findOutButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLoseWrapper = document.getElementById("winOrLose")
const counterTimerWrapper = document.getElementById("counterTimerWrapper")
const guessCounterDiv = document.getElementById("guessCounter")
const timerDiv = document.getElementById("timer")

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
    accessories: ['hat', "a bird"],
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
    accessories: ["a collared shirt"],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses', "a collared shirt"],
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
    accessories: ['sunglasses', 'jewelry', "a collared shirt"],
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
    accessories: ['hat', 'jewelry'],
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
    accessories: ['glasses', 'jewelry'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', "a collared shirt"],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat', 'jewelry', "a collared shirt"],
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
    accessories: ["a collared shirt"],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ["a collared shirt"],
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
let guessCounter = 0
let seconds = 1
let secondsString = ""
let minutes = 0
let minutesString = ""
const winningSound = new Audio('audio/fanfare.flac');
const losingSound = new Audio('audio/wahwahwaaaaah.flac');

//set up fanfare winning sound 
const soundEffect = (result) => {
  if (result === "win") {
    winningSound.play()
  } else {
    losingSound.play()
  }
}

//Set up timer
const timerStart = () => {
  if (seconds < 10) {
    secondsString = "0" + seconds
  } else if (seconds > 59) {
    seconds = 0;
    secondsString = "00"
    minutes++
  } else {
    secondsString = seconds
  }

  if (minutes < 10) {
    minutesString = "0" + minutes
  } else if (seconds > 59) {
    minutes = 0;
    minutes++
  }
  timerDiv.innerHTML = `Time elapsed: ${minutesString}:${secondsString}`;
  // console.log(seconds)
  seconds++;
} 

//Set up guessCounter
const updateGuesses = () => {
  guessCounter++
  guessCounterDiv.innerHTML = `Guesses made: ${guessCounter}`;
}


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
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
}

// This function to start (and restart) the game
const start = () => {
  //reset the timer and the guesses
  seconds = 0;
  minutes = 0;
  guessCounter = 0;
  guessCounterDiv.innerHTML = `Guesses made: ${guessCounter}`;

  // Here we're setting charactersInPlay array to be all the characters to start with
  winOrLoseWrapper.style.display = "none"
  board.style.display = "flex"
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  updateGuesses()
  selectQuestion()
  const { category, value } = currentQuestion
  // console.log(secret[category])
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (currentQuestion.value === secret[category]) {
      // console.log(`${secret["name"]} has ${secret[category]} ${category}`)
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)){
      // console.log(`${secret["name"]} has ${value}.`)
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // console.log("filterCharacters called")
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}.`
      )
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all ${value}s`
      )
    } else {
      alert(
        `No, the person is not a ${value}! Remove all ${value}s`
      )
    }
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`
      )
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all the people with ${value} ${category}.`
      )
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (keep) {
    if (category === 'hair' || category === 'eyes') {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      generateBoard();
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      generateBoard();
    }
  } else {
    if (category === 'hair' || category === 'eyes') {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      generateBoard();
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      generateBoard();
    };
    // generateBoard();
  }
  

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
const guess = (personToConfirm) => {
  if (confirm(`Are you sure you want to guess ${personToConfirm}?`)) {
    checkMyGuess(personToConfirm)
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  winOrLoseWrapper.style.display = "flex"
  board.style.display = "none"
  if (personToCheck === secret.name) {
    theResultsAreIn(personToCheck, "win")
  } else {
    theResultsAreIn(personToCheck, "lose")
  }

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

const theResultsAreIn = (guessedPerson, result) => {
  
  if (result === "win") {
    soundEffect("win");
    winOrLoseText.innerHTML = `Yay!! ${guessedPerson} was correct! You used ${guessCounter} guesses and it took you ${minutes} minutes and ${seconds} seconds!`
  } else {
    soundEffect("lose");
    winOrLoseText.innerHTML = `I'm sorry! ${guessedPerson} was not the right answer. The correct person was ${secret.name}!!`
  }
}

// Invokes the start function when website is loaded
start()
setInterval(timerStart, 1000)


// All the event listeners
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', start)
questions.addEventListener("change", selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
