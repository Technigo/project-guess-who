// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const filterButton = document.getElementById('filter')
const guessCounter = document.getElementById('guess-counter')
const timerCounter = document.getElementById('timer')
// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Stocken',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Staffan',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Ulf',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Pablo',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Linnea',
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
    name: 'Paloma',
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
    name: 'Alma',
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
    name: 'Fredrik',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['sports']
  },
  {
    name: 'Joao',
    img: 'images/jia.svg',
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
    name: 'Kerstin',
    img: 'images/jodi.svg',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'FB',
    img: 'images/joe.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['hat'],
    other: ['sports']
  },
  {
    name: 'Damien',
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
    name: 'Niklas',
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
const winTrack = new Audio('./images/woohoo.mp3')
  const winSound = () => {
   winTrack.play()
    winTrack.volume = 0.2
  }
 const loseTrack = new Audio('./images/nono.mp3')
  const loseSound = () => {
    loseTrack.play()
    loseTrack.volume = 0.2   
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
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

//seting up a timer function
let seconds = 0
let minutes = 0
const timer = () => {
  
    setInterval(function () {
      if (seconds < 59) {
        seconds++;
        document.getElementById("timer").textContent =
          minutes + ":" + seconds;
      } else {
        minutes++;
        document.getElementById("timer").textContent =
          minutes + ":" + seconds;
      }
    }, 1000);
 }

// This function to start the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS // sets the array to initial declaration
  board.style.display = "flex" // shows the game board
  winOrLose.style.display = "none "// hides win/lose-screen
  generateBoard() // generate board of characters
  setSecret() // sets the secret person
  selectQuestion()
  // Guess counter and timer set to 0 when the game starts/restarts
  counter = 0;
  guessCounter.innerHTML = `<h2>Guesses: </h2">`
  timer()
  seconds = 0
  minutes = 0
}

// This is the function for restarting the game
const restart = () => {
  location.reload();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out'(filter) button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  counter++
  guessCounter.innerHTML = `<h2>Guesses: ${counter}</h2">`
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
    if (
    currentQuestion.category === 'hair' ||
    currentQuestion.category === 'eyes'
  ) {
    if (secret[category] === value) {
      filterCharacters(true);
      alert(
        `Yes, the person have ${value} ${category}! Keep all people with ${value} ${category}.`
      );
    } else {
      filterCharacters(false);
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`
      );
    }
  } else if (category === 'accessories') {
    if (secret[category].includes(value)) {
      filterCharacters(true);
      alert(
        `Yes, the person is wearing ${value}! Keep all people with ${value}.`
      );
    } else {
      filterCharacters(false);
      alert(
        `No, the person doesn't wear ${value}! Remove all people with ${value}.`
      );
    }
  } else if (category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true);
      alert(`Yes, the person has a ${value}! Keep all people with a ${value}.`);
    } else {
      filterCharacters(false);
      alert(
        `No, the person doesn't have a ${value}! Remove all people with a ${value}.`
      );
    }
  }
}
// Filters the characters array and redraw the game board.
      
  const filterCharacters = (keep) => {
      const { category, value } = currentQuestion;
      if (category === 'hair' || category === 'eyes') {
         if (keep) {
          charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
          } else {
            const { category, value } = currentQuestion
           charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
         }
        } else if (category === 'accessories' || category === 'other') {
          if (keep) {
            charactersInPlay = charactersInPlay.filter((person) =>person[category].includes(value))
          } else {
            charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
          }
        }
      // Invoke redrawing of the board with the remaining people.
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  if (confirm(`Will ${personToConfirm} be your guess?`) === true) {
    checkMyGuess(personToConfirm)  // If the player wants to guess, invokes the checkMyGuess function.
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
      winOrLoseText.innerHTML = `Congratulations! ${personToCheck} was the correct!<br>Guesses: ${counter} `
      winSound()
    } else {
      winOrLoseText.innerHTML = `Darn! ${personToCheck} was not the right pick, better luck next time!`     
      loseSound()  
    }
    winOrLose.style.display = "flex"
    board.style.display = "none"
    winOrLoseText.style.display = "block"
  }
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', restart)
playAgainButton.addEventListener('click', restart)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)