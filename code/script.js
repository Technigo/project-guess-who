// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById('playAgain')
const filterBtn = document.getElementById('filter')
const winOrLoseSection = document.getElementById('winOrLose')


// Array with all the characters, as objects
const CHARACTERS = [
  {
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
  winOrLoseSection.classList.remove('show-win-or-lose-wrapper')
  generateBoard()
  setSecret()
  console.log(secret);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const optionValue = questions.value;


  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: optionValue,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
    attribute: 'eyeColor',
    value: optionValue,
    category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: optionValue,
      value: true, 
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: optionValue,
      value: true, 
      category: category,
  }
};
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const secretValue = secret[currentQuestion.attribute];
  if (secretValue === currentQuestion.value) {
      filterCharacters(true);
  } else {
      filterCharacters(false);
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const group = currentQuestion.category;
  let attribute = currentQuestion.value;
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
      `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
  } else if (group === 'other') { //Smokers
      if (keep) {
        alert(
          `Yes, the person is a ${currentQuestion.attribute}! Keep all that are ${currentQuestion.attribute}s`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person is not a ${currentQuestion.attribute}! Remove all that are ${currentQuestion.attribute}s`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }
  } else if (group === 'hair color') {
    if (keep) {
      alert(
        `Yes the person has ${attribute} hair! Keep all that have ${attribute} hair!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `No, the person does not have ${attribute} hair! Remove all that have ${attribute} hair`
       )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
    
    } else if (group === 'eye color') {
      if (keep) {
        alert (
          `Yes the person has ${attribute} eyes! Keep all that have ${attribute} eyes!`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person does not have ${attribute} eyes! Remove all that have ${attribute} eyes`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }
    }
    generateBoard ()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  let confirmAnswer = confirm (
    `Are you sure you want to guess on ${suspect}?`
  );
    if (confirmAnswer) {
      checkMyGuess(suspect)
    } else { 
      alert (`Ok, keep playing :-) `)
    }
  }
 
// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  let winOrLoseText = document.getElementById('winOrLoseText')
  board.innerHTML = ''
  winOrLoseSection.classList.add('show-win-or-lose-wrapper')
  if (secret.name === suspect) {
   winOrLoseText.innerHTML=`Congratulations, you guessed right!!`
  } else {
    winOrLoseText.innerHTML=`Oh no, your guess was wrong :-(`
  }
}

// Invokes the start function when website is loaded
start()
// All the event listeners
restartButton.addEventListener('click', start)
playAgainButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterBtn.addEventListener('click', checkQuestion)
