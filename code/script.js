// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
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

// Selects a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Starts (and restarts) the game
const start = () => {
  charactersInPlay = CHARACTERS
  winOrLose.style.display = "none";
  winOrLoseText.innerHTML = "";
  board.style.display = 'flex'; 
  setSecret ()
  generateBoard()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value:value,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion ={
      attribute: 'eyeColor',
      value:value,
      category:category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value:true,
      category: category,
    }  
  }
}

// Invoked when 'Find Out' is clicked.
const checkQuestion = () => {
  let keep
  if(currentQuestion.attribute === "hairColor" && currentQuestion.value === secret.hairColor) {
    keep = true
  }
  else if (currentQuestion.attribute === "eyeColor" && currentQuestion.value === secret.eyeColor){
  keep = true
  }
  else if(currentQuestion.attribute === "glasses" && currentQuestion.value === secret.glasses){
    keep = true
  }
  else if(currentQuestion.attribute === "hat" && currentQuestion.value === secret.hat) {
    keep = true
  }
  else if(currentQuestion.attribute === "smoker" && currentQuestion.value === secret.smoker) {
    keep = true
  }
  else{
    keep = false
  }
  filterCharacters (keep)
}

//Filters the characters
const filterCharacters = (keep) => {
  if (currentQuestion.category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
      }
  } else if (currentQuestion.category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a smoker ${currentQuestion.attribute}! Keep all that smokes ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
    } else {
      alert(
        `No, the person doesn't smoke ${currentQuestion.attribute}! Remove all that smokes ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
      }
  } else if (currentQuestion.category === 'eye color') { 
    if (keep) {
        alert(
          `Yes, the person has ${currentQuestion.value} eyes! Keep all persons with ${currentQuestion.value} eyes`
        )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
      } else {
        alert(
          `No, the person doesn't have ${currentQuestion.value} eyes! Remove all persons with ${currentQuestion.value} eyes`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
      }
  } else if (currentQuestion.category === 'hair color') {
    if (keep) {
      alert (
        `Yes, the person has ${currentQuestion.value} hair! Keep all the persons with ${currentQuestion.value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
      
    } else {
      alert (
        `No, the person dosen't have ${currentQuestion.value} hair! Remove allt persons with ${currentQuestion.value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
    }
  }
  generateBoard()
}

 //Invokes when you click on guess button 
const guess = (suspect) => {
  let confirmGuess = confirm(`Do you want to guess on ${suspect}?`)
  if (confirmGuess === true) {
      checkMyGuess(suspect)
  }
}

//Shows when you have made your guess
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
  winOrLoseText.innerHTML = 'Congratulations, you Won!'
  } else {
    winOrLoseText.innerHTML = 'Sorry, you lost'
  }
  winOrLose.style.display = "block";
  board.style.display = 'none';
}

//Invokes the start function
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)

