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
  generateBoard()
  setSecret()
  console.log('secret set')
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (handleOption) => {
  console.log("loopS")
  const category = questions.options[questions.selectedIndex].parentNode.label
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
    console.log(currentQuestion);
  }
  const findOut = document.getElementById('filter')
  findOut.addEventListener('click', stopPropergate);
  console.log('click')
}

const stopPropergate = (event) => {
  event.stopImmediatePropagation();
  checkQuestion(currentQuestion)
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = (currentQ) => {
  let keep;
  let userValue = currentQ.value;

  switch (currentQ.category) {
    case 'hair color':
      if (isEqual(userValue, secret.hairColor)) {
        console.log('haircolor true')
        console.log(currentQ)
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
  filterCharacters(currentQ, keep)
}

const isEqual = (a, b) => {
  return a === b;
}

// It'll filter the characters array and redraw the game board.
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
generateBoard(charactersInPlay)
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)

questions.addEventListener('change', () => {
  selectQuestion(questions.value)
})