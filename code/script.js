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
    cat: true,
    dog: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    cat: false,
    dog: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
    cat: false,
    dog: true
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    cat: true,
    dog: false
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
    cat: false,
    dog: true
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
    cat: false,
    dog: false
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    cat: true,
    dog: true
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
    cat: false,
    dog: false
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
    cat: true,
    dog: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    cat: false,
    dog: true
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    cat: false,
    dog: true
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    cat: true,
    dog: false
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    cat: false,
    dog: false
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
    cat: true,
    dog: true,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay, startTime, endTime, questionsAsked = 0,
  totalSeconds = 0;

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
  const counter = document.getElementById("counter")
  counter.innerHTML = `Questions asked: ${questionsAsked}`
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

//timer showing the passing seconds in the game
const timer = (x) => {
  if (x === 'restart') {
    totalSeconds = 0;
  }
  totalSeconds++
  let minute = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - (minute * 60);
  if (minute < 10)
    minute = "0" + minute;
  if (seconds < 10)
    seconds = "0" + seconds;
  document.getElementById("timer").innerHTML = minute + ":" + seconds;
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  //generates gameboard
  generateBoard()
  //sets the secret character
  setSecret()
  totalSeconds = 0;
  timer('restart')
  setInterval(timer, 1000)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (handleOption) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  questionsAsked++
  if (questionsAsked === 1) {
    startTime = performance.now()
  }
  console.log(questionsAsked)
  //value is set to the option playes selects
  if (isEqual(category, 'hair color')) {
    currentQuestion = {
      attribute: 'hairColor',
      value: handleOption,
      category: category,
    };
  } else if (isEqual(category, 'eye color')) {
    currentQuestion = {
      attribute: 'eyeColor',
      value: handleOption,
      category: category,
    };
    //here the value is set to true and the player option is used in a switch to keep track of different accessories/other
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
  } else if (isEqual(category, 'animals')) {
    switch (handleOption) {
      case 'cat':
        currentQuestion = {
          attribute: 'cat',
          value: true,
          category: category,
        }
        break;
      case 'dog':
        currentQuestion = {
          attribute: 'dog',
          value: true,
          category: category,
        }
        break;
    }
  } else {
    currentQuestion = {
      attribute: 'smoker',
      value: true,
      category: 'other',
    };

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
        console.log('glasses')
        keep = true;
      } else if (isEqual(userValue, secret.hat) && currentQ.attribute === 'hat') {
        console.log('hat')
        keep = true;
      } else {
        console.log('not glass/hat')
        keep = false;
      }
      break;
    case 'animals':
      if (isEqual(userValue, secret.cat) && currentQ.attribute === 'cat') {
        keep = true;
      } else if (isEqual(userValue, secret.dog) && currentQ.attribute === 'dog') {
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
  if (isEqual(keep, true)) {
    switch (currentQ.category) {
      case 'accessories':
        alert(
          `Yes, the person wears ${currentQ.attribute}! Keep all that wears ${currentQ.attribute}`
        )
        charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
        break;
      case 'hair color':
        alert(
          `Yes, the person has ${currentQ.value} hair! Keep all that have ${currentQ.value} hair`
        )
        charactersInPlay = charactersInPlay.filter((person => person.hairColor === currentQ.value))
        break;
      case 'eye color':
        alert(
          `Yes, the person has ${currentQ.value} eyes! Keep all that have ${currentQ.value} eyes`
        )
        charactersInPlay = charactersInPlay.filter((person => person.eyeColor === currentQ.value))
        break;
      case 'animals':
        alert(
          `Yes, the person is a ${currentQ.attribute} owner! Keep all the ${currentQ.attribute} owners`
        )
        charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
        break;
      case 'other':
        alert(
          `Yes, the person is a ${currentQ.attribute}! Keep all the ${currentQ.attribute}'s`
        )
        charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
        break;
    }
  } else {
    switch (currentQ.category) {
      case 'accessories':
        alert(
          `No, the person doesn't wear ${currentQ.attribute}! Remove all that wears ${currentQ.attribute}`
        )
        charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
        break;
      case 'hair color':
        alert(
          `No, the person doesn't have ${currentQ.value} hair! Remove all that have ${currentQ.value} hair`
        )
        charactersInPlay = charactersInPlay.filter((person => person.hairColor !== currentQ.value))
        break;
      case 'eye color':
        alert(
          `No, the person doesn't have ${currentQ.value} eyes! Remove all that have ${currentQ.value} eyes`
        )
        charactersInPlay = charactersInPlay.filter((person => person.eyeColor !== currentQ.value))
        break;
      case 'animals':
        alert(
          `No, the person isn't a ${currentQ.attribute} owner! Remove all that are ${currentQ.attribute} owners.`
        )
        charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
        break;
      case 'other':
        alert(
          `No, the person isn't a ${currentQ.attribute}! Remove all that are ${currentQ.attribute}'s`
        )
        charactersInPlay = charactersInPlay.filter((person => person[currentQ.attribute] === keep))
        break;
    }

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
  const yesBtn = document.getElementById("yes-btn")
  yesBtn.addEventListener('click', () => {
    checkMyGuess(suspect)
  })
  const noBtn = document.getElementById("no-btn")
  noBtn.addEventListener('click', () => {
    generateBoard(charactersInPlay)
  })
}

// If you confirm, this function is invoked which says if you won or lose
const checkMyGuess = (suspect) => {
  let winOrLose = document.getElementById('winOrLose')
  //shows winOrLose section
  winOrLose.style.display = 'block'
  if (isEqual(suspect, secret.name)) {
    winOrLose.innerHTML = `
      <div class="win-or-lose">
        <img
          class="guess-who-icon"
          src="images/guess-who-bubble.png"
          alt="Guess Who"/>
        <h1 id="winOrLoseText">
          Yes, ${suspect} was the secret character! Well done!
        </h1>
        <h1> Your total time was ${Math.round((totalSeconds/60)*100)/100} minutes for this round</h1>
        <button id="playAgain" class="filled-button">
          PLAY AGAIN
        </button>
      </div>
    `
  } else {
    winOrLose.innerHTML = `
      <div class="win-or-lose">
        <img
          class="guess-who-icon"
          src="images/guess-who-bubble.png"
          alt="Guess Who"/>
        <h1 id="winOrLoseText">
          Sorry, ${suspect} was the not the secret character, but ${secret.name}! Better luck next time.
        </h1>
        <h1> Your total time was ${Math.round((totalSeconds/60)*100)/100} minutes for this round</h1>
        <button id="playAgain" class="filled-button">
          PLAY AGAIN
        </button>
      </div>
    `
  }

  questionsAsked = 0;
  //play again? click and winOrLose section will be hidden and start() will run
  const playAgain = document.getElementById("playAgain")
  playAgain.addEventListener('click', () => {
    winOrLose.style.display = 'none'
    start()
  })
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)

questions.addEventListener('change', () => {
  selectQuestion(questions.value)
})