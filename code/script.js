const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartBtn = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseHeader = document.getElementById('winOrLoseText')
const secretPerson = document.getElementById('secretPerson')


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

let secret, currentQuestion, charactersInPlay, secretValue, keep

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


const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
}

const selectQuestion = (value) => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value,            
      category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true,
      category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: 'smoker',
      value: true,
      category,
    }
  }
}

const checkQuestion = () => {
    const secretValue = secret[currentQuestion.attribute]

    if (secretValue === currentQuestion.value) {
      keep = true;
      filterCharacters(true, currentQuestion.attribute)
    } else {
      keep = false
      filterCharacters(false, currentQuestion.attribute)
    }
  } 

const filterCharacters = (keep) => {
  const category = currentQuestion.category
  const attribute = currentQuestion.attribute
  const value = currentQuestion.value

  if (category === 'hair color'){
    if (keep){
      alert(`Yes, the person has ${value} hair! Keep all people with ${value} hair`)
    } else {
      alert(`No, the person doesn't have ${value} hair! Remove all people with ${value} hair`)
    }
  } else if (category === 'eye color'){
    if (keep){
      alert(`Yes, the person has ${value} eyes! Keep all people with ${value} eyes`)
    } else {
      alert(`No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`)
    }
  } else if (category === 'accessories'){
    if (keep){
      alert(`Yes, the person wears ${attribute}! Keep all people with ${attribute}`)
    } else {
      alert(`No, the person doesn't wear ${attribute}! Remove all people with ${attribute}`)
    }
  } else if (category === 'other'){
    if (keep){
      alert(`Yes, the person is a ${attribute}! Keep all smokers`)
    } else {
      alert(`No, the person isn't a ${attribute}! Remove all smokers`)
    }
  }

  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  generateBoard()
}

const guess = (suspect) => {
  let confirmMessage = (`Do you really want to make a guess on ${suspect}?`)
  let confirmGuess = confirm(confirmMessage)
  if (confirmGuess === true) {
    checkMyGuess(suspect)
  } else {
    alert(`OK! Keep on guessing`)
  }
}

const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseHeader.innerHTML = 'Congratulations! You guessed the right person'
  } else {
    winOrLoseHeader.innerHTML = 'Oh no, you guessed the wrong person. Give it another try!'
  }

  secretPerson.innerHTML = `
    <h2>The right person was ${secret.name}!</h2>
    <img class="secret-image" src=${secret.img} alt=${secret.name}>
  `;

  winOrLose.style.display = 'flex'
  secretPerson.style.display = 'flex'
  board.style.display = 'none'
}

const playAgain = document.getElementById('playAgain') 
  playAgain.addEventListener('click', () => {
    winOrLose.style.display = 'none'
    secretPerson.style.display = 'none'
    board.style.display = 'flex'
    start()
  })

start()

restartBtn.addEventListener('click', start)

questions.addEventListener('change', () => {
  selectQuestion(questions.value)
})

findOutBtn.addEventListener('click', () => {
  checkQuestion()
})