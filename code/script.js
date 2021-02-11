// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')


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
  console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
   // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  setSecret()
  generateBoard()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (value) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  
  console.log(category)
  
  console.log('questions', value)

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,        // 👆 add the value from the input here
      category: category,
    }
  } else if (category === 'eye color') {
      console.log(currentQuestion)
      currentQuestion = { 
      attribute: 'eyeColor',
      value: value,
      category: category,
      } 
    } else {
      currentQuestion = {
      attribute: value,   // value instead of glasses 
      value: true, 
      category: category,
      }
    
    }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  
  let keep
  if (currentQuestion.attribute === 'hairColor' && currentQuestion.value === secret.hairColor) {
    keep = true
    console.log('haircolor')
  }
  else if (currentQuestion.attribute === 'eyeColor' && currentQuestion.value === secret.eyeColor) {
    keep = true 
    console.log('eyecolor')
  }
  else if (currentQuestion.attribute === 'glasses' && currentQuestion.value === secret.glasses) {
    keep = true
    console.log('glasses')
  }
  else if (currentQuestion.attribute === 'hat' && currentQuestion.value === secret.hat) {
    keep = true
    console.log('hat')
  }
  else if (currentQuestion.attribute === 'smoker' && currentQuestion.value === secret.smoker) {
    keep = true
    console.log('smoker')
  }
  else {
    keep = false 
   
  }
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
 
  filterCharacters(keep)
  console.log(secret)
} 

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Show the correct alert message for different categories
  let group = currentQuestion.category;
  let attribute = currentQuestion.attribute;
  let value = currentQuestion.value;  


  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      )
    }
  } else if (group === 'other') {
    if (keep) {
      alert(
        `Yes, the person has ${attribute}! Keep all that has ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't have ${attribute}! Remove all that have ${attribute}`
      )
    }
  } else if (group === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all that has ${value} hair!`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} hair color! Remove all that has ${value} hair.`
      )
    }// Similar to the one above
  }   else {
      if (keep) {
        alert(
          `Yes, the person has ${value} eyes! Keep all that has ${value} eyes.`
        )
      } else {
        alert(
          `No, the person doesn't have ${value} eyes! Remove all that has ${value} eyes`
        )
      }
  
  // filter to keep or remove based on the keep variable.
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
   }
    else {
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value) 
    }
    generateBoard()
  }
}
  // Invoke a function to redraw the board with the remaining people.

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const confirmationOnGuess = confirm(`Are you sure you want to make a guess on ${suspect}`);
    if (confirmationOnGuess === true) {
    checkMyGuess(suspect)
  } else {
    console.log(false)
  }

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  confirm(checkMyGuess)
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  board.innerHTML=``
  let winOrLose = document.getElementById("winOrLose")   
  winOrLose.style.display = "block" 


  if (suspect === secret.name){
    winOrLose.innerHTML+= `congratz you are correct! 
    `
  } 
  else {
    winOrLose.innerHTML+= `I am sorry that was not a correct guess. Better luck next time!`
  }
    // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
const playAgain = document.getElementById("playAgain") 
  playAgain.addEventListener("click", () => {
    winOrLose.style.display = "none"
    winOrLose.innerHTML=``
    start() 
  })
}  
// Invokes the start function when website is loaded
start()
 
// All the event listeners
//restartButton.addEventListener('click', start)
let findOutButton = document.getElementById('filter').addEventListener('click', checkQuestion())
questions.addEventListener('change',() => selectQuestion(questions.value))
