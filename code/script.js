const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById("winOrLoseText")
const playAgainButton = document.getElementById('playAgain')

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
  console.log(secret)
}

const start = () => {
  charactersInPlay = CHARACTERS;
  setSecret()
  generateBoard()
  board.style.display = "flex"
  winOrLose.style.display = "none"
}

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  let value = questions.value
 
  if (category === 'hair color') {
    console.log('hair color', value)
    currentQuestion = {
      attribute: 'hairColor',
      value: value,       
      category: category,
    } 
  } else if (category === 'eye color') {
    console.log('eye color', value)
      currentQuestion = { 
        attribute: 'eyeColor',
        value: value,
        category: category,
      } 
    } else if (category === "accessories") {
      console.log('accessories', value)
        currentQuestion = {
          attribute: value, // value instead of glasses 
          value: true,
          category: category, 
        }
      } else {
      console.log('other', value)
          currentQuestion = {
            attribute: value,   
            value: true, 
            category: category,
            }
        }
}

const checkQuestion = () => {
  let keep = currentQuestion.value === secret[currentQuestion.attribute]
  
  filterCharacters(keep)
}

const filterCharacters = (keep) => {
  const {attribute, category,value} = currentQuestion
  
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${attribute}! Keep all that wears ${attribute}`)
    } else {
      alert(`No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`)
    }
  } else if (category === 'other') {
      if (keep) {
        alert(`Yes, the person has ${attribute}! Keep all that has ${attribute}`)
      } else {
        alert(`No, the person doesn't have ${attribute}! Remove all that have ${attribute}`)
      }
    } else if (category === 'hair color') {
        if (keep) {
          alert(`Yes, the person has ${value} hair! Keep all that has ${value} hair!`)
        } else {
          alert(`No, the person doesn't have ${value} hair color! Remove all that has ${value} hair.`)
        }
    } else {
        if (keep) {
        alert(`Yes, the person has ${value} eyes! Keep all that has ${value} eyes.`)
        } else {
        alert(`No, the person doesn't have ${value} eyes! Remove all that has ${value} eyes`)
        }
    }

    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
    }  else {
         charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
       }

    generateBoard(charactersInPlay)
}

const guess = (suspect) => {
  const confirmationOnGuess = confirm(`Are you sure you want to make a guess on ${suspect}`);
    if (confirmationOnGuess === true) {
      checkMyGuess(suspect)
    }   else { 
        }
}

const checkMyGuess = (suspect) => {
  let winOrLoseText = document.getElementById('winOrLoseText')   
   
  if (suspect === secret.name){
    winOrLoseText.innerHTML= `Congratz ${suspect} is correct! `
  }   else {
        winOrLoseText.innerHTML= `I am sorry ${suspect} was not the one. Better luck next time!`
      }
  
  winOrLose.style.display = "flex"
  board.style.display = "none"

}

start()
 

restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion) 
questions.addEventListener('change',() => { selectQuestion(questions.value)})
playAgainButton.addEventListener('click', start) 
