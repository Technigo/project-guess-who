// DOM selectors 
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgian = document.getElementById('playAgain')

// Characters Array 


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

// Game board
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

// Randomly secret person 
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

// CurrentQuestion object when select in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const optValue = questions.value 
 

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: optValue,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: optValue,
      category: category,
    }
    
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: optValue,
      value: true, 
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: optValue,
      value: true, 
      category: category,
    }
  }
  
}

// 'Find Out' Function
const checkQuestion = () => {
  const secretValue = secret[currentQuestion.attribute]
  if (secretValue === currentQuestion.value) {
    filterCharacters(true)
  } else {
    filterCharacters(false) 
  }
}

// Filter Section
const filterCharacters = (keep) => { 
  const group = currentQuestion.category
  const attribute = currentQuestion.value 
 
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
      )
    }
  } else if (group === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${currentQuestion.attribute}! Keep all persons that is a ${currentQuestion.attribute}`
      )
    } else {
      alert(
        `No, the person is not a ${currentQuestion.attribute}! Remove all persons that is a ${currentQuestion.attribute}`
      )
    }
  } else if (group === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} hair! Keep all that has ${currentQuestion.value} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} hair! Remove all persons with ${currentQuestion.value} hair`
      )
    }
  } else if (group === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} eyes! Keep all that has ${currentQuestion.value} eyes`
      )
      
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} eyes! Remove all persons with ${currentQuestion.value} eyes`
      )
    }
  } 

  if (keep) {
  charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
 } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
  }
  generateBoard()
}

  

// Guess section
const guess = (suspect) => {
  let confirmAnswer = confirm('Are you sure?')
  if (confirmAnswer === true) {
    checkMyGuess(suspect)
  } else {
    alert(
      `Sorry...! Try again`
    )
  }
}

const checkMyGuess = (suspect) => {
  
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `Yay! That's correct, ${suspect} it is!`

  } else {
    winOrLoseText.innerHTML = `Sorry, ${suspect} is wrong..`
  }
  board.innerHTML=""
  winOrLose.classList.add("show")
}

// Start function
start()


// Event listeners
playAgian.addEventListener("click", () => {winOrLose.classList.remove("show"); start()})
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutBtn.addEventListener('click', checkQuestion)