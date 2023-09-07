// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter') 
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')
const questionSection = document.getElementById('question-section')



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
    pirate: true, //I added this one since in the default, there was no way to tell Jack and Jerry apart when they were the only two left. 
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

// This function to start (and also restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  //shows and generates the gameboard
  generateBoard() 
  //sets the secret person
  setSecret()
  console.log(`Secret person ${secret.name}`)


}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  //console.log(category) //hair color, eye color, accessories, other
   const value = questions.options[questions.selectedIndex].value
  //console.log(value)// brown, blue, glasses, smoker

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
}

// This is the function that happens once you click "find out"
const checkQuestion = () => {

  if (secret[currentQuestion.attribute] === currentQuestion.value) { 
    filterCharacters(true) //To see if they are the same 
  } else {
    filterCharacters(false) //Or not the same
  }  
}

// This will filter the characters and remove after question
const filterCharacters = (keep) => {
  group = currentQuestion.category
  console.log(keep) //false or true
  console.log(group)// eg. haircolor, accessories
  console.log(currentQuestion.category)
  
  // Show the correct alert messages for keep or remove
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
  } else if (group === 'eye color') {
    if (keep) {
      alert(
        `Yes the person has ${currentQuestion.value} eyes! Keep all with eyes ${currentQuestion.value}`
      )
    } else {
      alert (
        `No the person has not ${currentQuestion.value} eyes! Remove all with eyes ${currentQuestion.value}`
      )
    }
  } else if (group === 'other') {
    if (keep) { //attribute to show glasses, smoker and eye patch
      alert(
        `Yes, the person is a  ${currentQuestion.attribute}! Keep all persons who are a ${currentQuestion.attribute}`
      )
    } else {
      alert (
        `No, the person is not a ${currentQuestion.attribute}! Remove all the persons who are a ${currentQuestion.attribute}`
      )
    }
    
  } else {
    if (keep) { 
      alert (
        `Yes, the person has ${currentQuestion.value} hair! Keep all with hair ${currentQuestion.value} `
      )
    } else {
      alert (
        `No, the person doesn't have ${currentQuestion.value} hair! Remove all with hair ${currentQuestion.value} `
      )
      
    }
  }

  if (keep) { //Ex: Does the person have glasses? If yes, they will be kept, if not, removed
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value) 
    //Keeps everyone who has got the asked attribute
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value) 
    //Removes everyone who doesn't have the asked attribute
  }
  

  generateBoard()
}

// Once clicking guess, the player has to confirm the guess to avoid misstakes
const guess = (suspect) => {
  const guessConfirmation =  confirm(`Are you sure that you want to guess on ${suspect}?`)
  if (guessConfirmation){
    console.log(suspect)
    checkMyGuess(suspect)
  }
  
// If the player wants to guess, invoke the checkMyGuess function.
}

//this is what happens when you confirm your guess
const checkMyGuess = (suspect) => {
  if (suspect === secret.name){
    //the H1 in the html
    winOrLoseText.innerHTML = `
    Congratulations! Your guess on ${suspect} is correct! Try playing again and see if you can win again!
    `
  } else {
    winOrLoseText.innerHTML = `
    Oh boy.. Your guess on ${suspect} is wrong.
    Looks like you need more practice. Press "Play Again" and have another go!
    `
  }

  winOrLose.style.display = 'flex' //shows if you win or lose
  board.style.display = 'none' //this removes the board
  
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', () => {
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  start()
})
questions.addEventListener('change', selectQuestion)
findOut.addEventListener('click', checkQuestion)