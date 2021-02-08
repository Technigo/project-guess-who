// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

// Array with all the characters, as objects
const CHARACTERS = [{
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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
  //generates gameboard
  generateBoard()
  //sets the secret character
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (handleOption) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  //value is set to the option playes selects
  if (isEqual(category, 'hair color')) {
    currentQuestion = {
      attribute: 'hairColor',
      value: handleOption,
      category: category,
    };
    console.log(currentQuestion)
  } else if (isEqual(category, 'eye color')) {
    currentQuestion = {
      attribute: 'eyeColor',
      value: handleOption,
      category: category,
    };
    //here the value is set to true and the player option is used in a switch to keep track of different accessories/other
    console.log(currentQuestion);
  } else if (isEqual(category, 'accessories')) {
    switch (handleOption) {
      case 'glasses':
        currentQuestion = {
          attribute: 'glasses',
          value: true,
          category: category,
        };
        break;
      case 'hat':
        currentQuestion = {
          attribute: 'hat',
          value: true,
          category: category,
        };
        break;
    }
    console.log(currentQuestion);
  } else if (isEqual(category, 'other')) {
    switch (handleOption) {
      case 'smoker':
        currentQuestion = {
          attribute: 'smoker',
          value: true,
          category: 'other',
        };
    }
  }
  //on click stopPropergate is run
  const findOut = document.getElementById('filter')
  findOut.addEventListener('click', stopPropergate);
  console.log('click')
}

//function used in if statements
const isEqual = (a, b) => {
  return a === b;
}

//the stored data for the current quess is passed as an argument to chechQuestion and repetition of the exact same function on click is hindered
const stopPropergate = (event) => {
  event.stopImmediatePropagation();
  checkQuestion(currentQuestion)
}

//This function is innvoked when you click FindOut. It compares the secret characters properties with the players options and sets "keep" to true if matching, otherwise false
const checkQuestion = (currentQ) => {
  let keep;
  let userValue = currentQ.value;

  switch (currentQ.category) {
    case 'hair color':
      if (isEqual(userValue, secret.hairColor)) {
        keep = true
      } else {
        console.log('haircolor false')
        keep = false
      }
      break;
    case 'eye color':
      if (isEqual(userValue, secret.eyeColor)) {
        keep = true;
      } else {
        keep = false
      }
      break;
    case 'accessories':
      if (isEqual(userValue, secret.glasses) && currentQ.attribute === 'glasses') {
        keep = true;
      } else if (isEqual(userValue, secret.hat) && currentQ.attribute === 'hat') {
        keep = true;
      } else {
        keep = false;
      }
      break;
    case 'other':
      if (isEqual(userValue, secret.smoker)) {
        keep = true;
        console.log('yes smoke')
      } else {
        keep = false;
        console.log('no smoke')
      }
      break;
  }
  //passes the properties of the current question and right/wrong option to the filter function
  filterCharacters(currentQ, keep)
}


// Filters the characters if keep is true/false (depending on option chosen of player) and alerts the response. Then uses array.filter to return an array of characters based on that
const filterCharacters = (currentQ, keep) => {

  if (isEqual(currentQ.category, 'accessories')) {
    if (isEqual(keep, true)) {
      alert(
        `Yes, the person wears ${currentQ.attribute}! Keep all that wears ${currentQ.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
    } else {
      alert(
        `No, the person doesn't wear ${currentQ.attribute}! Remove all that wears ${currentQ.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
    }
  } else if (isEqual(currentQ.category, 'hair color')) {
    if (isEqual(keep, true)) {
      alert(
        `Yes, the person has ${currentQ.value} hair! Keep all that have ${currentQ.value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person => person.hairColor === currentQ.value))
    } else {
      alert(
        `No, the person doesn't have ${currentQ.value} hair! Remove all that have ${currentQ.value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person => person.hairColor !== currentQ.value))
    }
  } else if (isEqual(currentQ.category, 'eye color')) {
    if (isEqual(keep, true)) {
      alert(
        `Yes, the person has ${currentQ.value} eyes! Keep all that have ${currentQ.value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person => person.eyeColor === currentQ.value))
    } else {
      alert(
        `No, the person doesn't have ${currentQ.value} eyes! Remove all that have ${currentQ.value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person => person.eyeColor !== currentQ.value))
    }
  } else if (isEqual(keep, true)) {
    alert(
      `Yes, the person is a ${currentQ.attribute}! Keep all the ${currentQ.attribute}'s`
    )
    charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
  } else {
    alert(
      `No, the person isn't a ${currentQ.attribute}! Remove all that are ${currentQ.attribute}'s`
    )
    charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
  }

  //generates a new board depending on the filtered array
  generateBoard(charactersInPlay)
}

// when the player clicks guess they need to confirm with yes or no. On yes checkMyGuess is invoked, on no the gameboard is showed again
const guess = (suspect) => {
  board.innerHTML = `
    Are you sure you want to guess on ${suspect}? 
    <button id="yes-btn" class="filled-button">
      YES
    </button> 
    <button id="no-btn" class="filled-button">
      NO
    </button>
  `
  document.getElementById("yes-btn").addEventListener('click', () => {
    checkMyGuess(suspect)
  })
  document.getElementById("no-btn").addEventListener('click', () => {
    generateBoard(charactersInPlay)
  })
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  board.innerHTML = ''
  let winOrLose = document.getElementById('winOrLose')
  winOrLose.style.display = 'block'
  if (isEqual(suspect, secret)) {
    winOrLose.innerHTML = `
      <div class="win-or-lose">
        <img
          class="guess-who-icon"
          src="images/guess-who-bubble.png"
          alt="Guess Who"/>
        <h1 id="winOrLoseText">
          Yes, ${suspect} was the secret character! Well done!
        </h1>
        <button id="playAgain" class="filled-button">
          PLAY AGAIN
        </button>
      </div>
    `
    const playAgain = document.getElementById("playAgain")
    playAgain.addEventListener('click', start)
  } else {
    winOrLose.innerHTML = `
      <div class="win-or-lose">
        <img
          class="guess-who-icon"
          src="images/guess-who-bubble.png"
          alt="Guess Who"/>
        <h1 id="winOrLoseText">
          Sorry, ${suspect} was the not the secret character! Better luck next time.
        </h1>
        <button id="playAgain" class="filled-button">
          PLAY AGAIN
        </button>
      </div>
    `
    const playAgain = document.getElementById("playAgain")
    playAgain.addEventListener('click', () => {
      start();
    })
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)

questions.addEventListener('change', () => {
  selectQuestion(questions.value)
})