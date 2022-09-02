// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')
const counter = document.getElementById('counter')

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
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'necklace'],
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
    accessories: ['sunglasses', 'hat'],
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
let numberOfGuesses = 3;

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
          <button id=guessbtn class="filled-button small" onclick="guess('${person.name}')">Guess</button>
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
  // What else should happen when we start the game?
  setSecret()
  // invokes the generateBoard with names and pictures when website is loaded
  generateBoard()
  selectQuestion()
  console.log(secret)
  numberOfGuesses = 3;

}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {

  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }

}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  if (category === 'hair' || category === 'eyes') {

    if (value === secret[category]) {
      // Invoke filterCharacters
      filterCharacters(true)
      
    }
    else {
      filterCharacters(false)
      
    }
  }

  else if (category === 'accessories' || category === 'other') {
    if (value === secret[category]) {
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }

  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  if (numberOfGuesses < 1) {
    //counter for numberOfGuesses
    window.alert('No more choices, please try again or make a guess!');
    return;
  }

  numberOfGuesses--;
  counter.innerText = numberOfGuesses;

  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  // filter by category to keep or remove based on the keep variable.
  // Invoke a function to redraw the board with the remaining people.
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}. !YOU HAVE 3 CHOICES!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person['accessories'].includes(value))

    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.  !YOU HAVE 3 CHOICES!`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person['accessories'].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}. !YOU HAVE 3 CHOICES!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person['other'].includes(value))
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}.  !YOU HAVE 3 CHOICES!`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person['other'].includes(value))
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair. !YOU HAVE 3 CHOICES!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] === value)
    } else {
      alert(
        `No, the person doesnt have ${value} hair! Remove all people with ${value} hair.  !YOU HAVE 3 CHOICES!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] !== value)
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eye! Keep all people with ${value} eye. !YOU HAVE 3 CHOICES!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] === value)
    } else {
      alert(
        `No, the person doesnt have ${value} eye! Remove all people with ${value} eye.  !YOU HAVE 3 CHOICES!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] !== value)
    }
  }
  // invokes the generateBoard with names and pictures when website is loaded
  generateBoard()
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  if (confirm("Alert! End of the game! Are you sure you want to make a guess?") == true) {
    // If the player wants to guess, invoke the checkMyGuess function.
    checkMyGuess(personToConfirm)

  } else {

  }

}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    // Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerHTML = `Yessssssss, The correct answer is ${secret.name}. You are a champion 🏆!`;
    // Show the win or lose section
    winOrLose.style.display = 'flex'
    //  Hide the game board
    board.style.display = 'none'
    //Audiowin
    winOrLoseText.innerHTML += `
    <div class= "audio">
  <audio controls autoplay class="audio"
    source src="./videosound/win.wav" type="audio/wav">
  </audio> 
  </div> `

  } else {
    winOrLoseText.innerHTML = `Oh noooo! You lose! 😮 The correct answer is ${secret.name}`;
    // Show the win or lose section
    winOrLose.style.display = 'flex'
    //  Hide the game board
    board.style.display = 'none'
   //AudioLose
    winOrLoseText.innerHTML += `
    <div class= "audio">
  <audio controls autoplay
    source src="./videosound/lose.wav" type="audio/wav">
  </audio> 
  </div> `
   }

}

//Playagain when win or lose the game
playAgainButton.addEventListener('click', () => {
  console.log('playagain')
  winOrLose.style.display = "none"
  board.style.display = 'flex'
  generateBoard()
  setSecret()
  start()
  selectQuestion()
})


// Invokes the start function when website is loaded
start()



// All the event listeners
restartButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion) 