// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainbutton = document.getElementById('playAgain')
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


let secret, currentQuestion, charactersInPlay




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
  setSecret()
  generateBoard()
  winOrLose.classList.remove('active')
  board.classList.remove('hide')
  winOrLoseText.innerHTML = `
    `   
}

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const userInput = questions.options[questions.selectedIndex].value
  
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: userInput,      
      category: category,
      
    }
  } else if (category === 'eye color') {    
    currentQuestion = {
      attribute: 'eyeColor',
      value: userInput,
      category: category,
      
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: userInput,      
      value: true, 
      category: category,
      
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: userInput, 
      value: true,
      category: category,
      
    }
  }  
}

const checkQuestion = () => {
  let keep
  if (currentQuestion.attribute === 'hairColor' && currentQuestion.value === secret.hairColor) {
    keep = true
  } else if (currentQuestion.attribute === 'eyeColor' && currentQuestion.value === secret.eyeColor){
    keep = true
  }else if (currentQuestion.attribute === 'glasses' && currentQuestion.value === secret.glasses){
    keep = true
  }else if (currentQuestion.attribute === 'hat' && currentQuestion.value === secret.hat){
    keep = true
  }else if (currentQuestion.attribute === 'smoker' && currentQuestion.value === secret.smoker){
    keep = true
  } else {
    keep = false
  }
filterCharacters(keep)
}


const filterCharacters = (keep) => {    
if (currentQuestion.category === 'accessories') {
  if (keep) {    
    alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`
        )
        charactersInPlay = charactersInPlay.filter((person) =>           
        person[currentQuestion.attribute] === currentQuestion.value)
      } else {
        alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
        )
        charactersInPlay = charactersInPlay.filter((person) => 
        person[currentQuestion.attribute] !== currentQuestion.value)
      }
    }else if (currentQuestion.category === 'other') { 
      if (keep) {  
      alert(
        `Yes, the person is a ${currentQuestion.attribute}! Keep everyone who is a  ${currentQuestion.attribute}`
        )
        charactersInPlay = charactersInPlay.filter((person) =>           
        person[currentQuestion.attribute] === currentQuestion.value)   
      } else {
      alert(
      `No, the person isn´t a ${currentQuestion.attribute}! Remove everyone that is a ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => 
      person[currentQuestion.attribute] !== currentQuestion.value)      
    }
  }
    else if (currentQuestion.category === 'hair color'){ 
      if (keep) {   
      alert(
        `Yes, the person has ${currentQuestion.value} hair! Keep all persons with ${currentQuestion.value} hair`
        )
        charactersInPlay = charactersInPlay.filter((person) =>           
        person[currentQuestion.attribute] === currentQuestion.value)
      } else {
        alert(
          `NO, the person doesnt have ${currentQuestion.value} hair! Remove all persons with ${currentQuestion.value} hair`
          )
          charactersInPlay = charactersInPlay.filter((person) => 
          person[currentQuestion.attribute] !== currentQuestion.value)
        }
      }
      else if (currentQuestion.category === 'eye color'){
        if (keep) {
        alert(
          `Yes, the person has ${currentQuestion.value} eyes! Keep all persons with ${currentQuestion.value} eyes`
          )
          charactersInPlay = charactersInPlay.filter((person) =>           
          person[currentQuestion.attribute] === currentQuestion.value)
          } else {
            alert(
              `NO, the person doesnt have ${currentQuestion.value} eyes! Remove all persons with ${currentQuestion.value} eyes`
              )
              charactersInPlay = charactersInPlay.filter((person) => 
              person[currentQuestion.attribute] !== currentQuestion.value)
            }            
          }
          generateBoard()          
}        
const guess = (suspect) => {
      const guessPerson = confirm(`Do you want to guess ${suspect}`)
      if (guessPerson === true) {
        checkMyGuess(suspect)
      }
}

const checkMyGuess = (suspect) => {
  if (suspect === secret.name ) {
    winOrLose.classList.add('active')
    board.classList.add('hide')
    winOrLoseText.innerHTML += `      
        <p>Nice done!</p>
        <p>${suspect} was the correct person</p>
    `   
  }
  else {
    winOrLose.classList.add('active')
    board.classList.add('hide')
    winOrLoseText.innerHTML += `      
        <p>Sorry!</p>
        <p>${suspect} wasn´t the correct person</p>
        <p>It was ${secret.name}</p>      
    `
  } 
  // 4. Hide the game board
}



start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click',checkQuestion)
//Every time I change option in dropdown i trigger selectQuestion() to update currentQuestion
questions.addEventListener('change',selectQuestion)
playAgainbutton.addEventListener('click', start)



