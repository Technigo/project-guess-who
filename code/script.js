// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const counter = document.getElementById('counter') 

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Alice',
    img: 'images/ALICE.jpg',
    hair: 'brown',
    pants: 'black',
    profession: 'unknown',
    headGear: '',
    sweater: ['blue'],
    face: ['glasses', 'lipstick'],
    accessories: ['dog', 'dog bone'],
  },
  {
    name: 'Bella',
    img: 'images/BELLA.jpg',
    hair: 'blonde',
    pants: 'striped',
    profession: 'villain',
    headGear: '',
    sweater: ['striped'],
    face: ['mask', 'scarf'],
    accessories: ['dog', 'dog bone'],
  },
  {
    name: 'Charlie',
    img: 'images/CHARLIE.jpg',
    hair: 'black',
    pants: 'striped',
    profession: 'villain',
    headGear: '',
    sweater: ['striped'],
    face: ['beard'],
    accessories: [],
  },
  {
    name: 'Daniel',
    img: 'images/DANIEL.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'unknown',
    headGear: '',
    sweater: ['white', 'yellow'],
    face: ['beard'],
    accessories: ['baby', 'baby carrier'],
  },
  {
    name: 'Emilio',
    img: 'images/EMILIO.jpg',
    hair: 'black',
    pants: 'black',
    profession: 'unknown',
    headGear: '',
    sweater: ['beige'],
    face: ['beard'],
    accessories: [],
  },
  {
    name: 'Frank',
    img: 'images/FRANK.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'villain',
    headGear: 'hat',
    sweater: ['striped', 'red'],
    face: ['beard', 'pirate patch'],
    accessories: ['binocular'],
  },
  {
    name: 'Hjalmar',
    img: 'images/HJALMAR.jpg',
    hair: 'unknown',
    pants: 'blue',
    profession: 'police',
    headGear: 'hat',
    sweater: ['blue'],
    face: ['glasses'],
    accessories: [],
  },
  {
    name: 'Holly',
    img: 'images/HOLLY.jpg',
    hair: 'red',
    pants: 'blue',
    profession: 'unknown',
    headGear: '',
    sweater: ['green'],
    face: ['lipstick'],
    accessories: ['skateboard'],
  },
  {
    name: 'Isak',
    img: 'images/ISAK.jpg',
    hair: 'blonde',
    pants: 'black',
    profession: 'musician',
    headGear: 'bandana',
    sweater: ['green', 'white'],
    face: ['beard'],
    accessories: ['guitar'],
  },
  {
    name: 'Jimmy',
    img: 'images/JIMMY.jpg',
    hair: 'unknown',
    pants: 'blue',
    profession: 'builder',
    headGear: 'helmet',
    sweater: ['orange', 'blue'],
    face: ['beard', 'dirt'],
    accessories: [],
  },
  {
    name: 'Liam',
    img: 'images/LIAM.jpg',
    hair: 'unknown',
    pants: 'blue',
    profession: 'farmer',
    headGear: 'hat',
    sweater: ['red', 'green'],
    face: ['glasses'],
    accessories: [],
  },
  {
    name: 'Lova',
    img: 'images/LOVA.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'driver',
    headGear: 'helmet',
    sweater: ['red', 'white'],
    face: ['lipstick'],
    accessories: [],
  },
  {
    name: 'Melker',
    img: 'images/MELKER.jpg',
    hair: 'blonde',
    pants: 'white',
    profession: 'unknown',
    headGear: '',
    sweater: ['red'],
    face: [],
    accessories: ['dog', 'hot dog'],
  },
  {
    name: 'Neville',
    img: 'images/NEVILLE.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'scientist',
    headGear: 'hat',
    sweater: ['white'],
    face: ['beard'],
    accessories: [],
  },
  {
    name: 'Nils',
    img: 'images/NILS.jpg',
    hair: 'brown',
    pants: 'gray',
    profession: 'villain',
    headGear: '',
    sweater: ['striped', 'red'],
    face: ['mask'],
    accessories: [],
  },
  {
    name: 'Olivia',
    img: 'images/OLIVIA.jpg',
    hair: 'brown',
    pants: 'blue',
    profession: 'police',
    headGear: 'hat',
    sweater: ['blue'],
    face: ['glasses'],
    accessories: ['hand cuffs'],
  },
  {
    name: 'Patrik',
    img: 'images/PATRIK.jpg',
    hair: 'black',
    pants: 'black',
    profession: 'chef',
    headGear: '',
    sweater: ['white'],
    face: ['beard'],
    accessories: [],
  },
  {
    name: 'Sam',
    img: 'images/SAM.jpg',
    hair: 'brown',
    pants: 'red',
    profession: 'carpenter',
    headGear: '',
    sweater: ['red'],
    face: ['freckles'],
    accessories: ['wrench'],
  },
  {
    name: 'Theo',
    img: 'images/THEO.jpg',
    hair: 'black',
    pants: 'blue',
    profession: 'unknown',
    headGear: '',
    sweater: ['gray', 'red'],
    face: ['glasses'],
    accessories: ['dog', 'dog bone'],
  },
  {
    name: 'Tobias',
    img: 'images/TOBIAS.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'unknown',
    headGear: 'hat',
    sweater: ['green', 'white'],
    face: ['whiskers'],
    accessories: ['hot dog'],
  },
  {
    name: 'Tomten',
    img: 'images/TOMTEN.jpg',
    hair: 'unknown',
    pants: 'red',
    profession: 'santa',
    headGear: 'hat',
    sweater: ['red'],
    face: ['beard'],
    accessories: ['teddy bear'],
  },
  {
    name: 'Valter',
    img: 'images/VALTER.jpg',
    hair: 'gray',
    pants: 'white',
    profession: 'unknown',
    headGear: '',
    sweater: ['blue', 'white'],
    face: ['beard'],
    accessories: ['surf board'],
  },
  {
    name: 'Viking',
    img: 'images/VIKING.jpg',
    hair: 'unknown',
    pants: 'black',
    profession: 'unknown',
    headGear: 'helmet',
    sweater: ['gray'],
    face: ['beard'],
    accessories: ['bike'],
  },
  {
    name: 'Wilhelm',
    img: 'images/WILHELM.jpg',
    hair: 'black',
    pants: 'gray',
    profession: 'unknown',
    headGear: '',
    sweater: ['gray', 'black'],
    face: ['glasses'],
    accessories: [],
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let incrementOne = 0

//this increment counter with one.

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
  // if I want, I can have more characters and randomly choose to pick 24. It´s important that setSecret is randomly taking a person from the characters in play.
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  counter.innerText = 0
  // What else should happen when we start the game?
}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
  const text = questions.options[questions.selectedIndex].text
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  
  currentQuestion = {
    category: category, 
    value: value,
    text: text,
  }
}

//on change in select list a new key value pair will be saved to currentQuestion.
questions.addEventListener('change', () => {
  selectQuestion()
  console.log(currentQuestion)
})

//Compare currentQuestion (our guess) with the details of the secret person.
//If secret has what was guessed, keep people that have that detail by passing keep to filterfuntion.
//If secret has not what was guessed, remove people that does not have the detail in filterfunction. 
const checkQuestion = () => {
  const { category, value, text } = currentQuestion

  if (category === 'hair' || category === 'pants' || category === 'profession' || category === 'headgear') {
    
    if (value === secret.hair || value === secret.pants || value === secret.profession || value === secret.headgear) {
      console.log(`secret has ${category} ${value}`)
      filterCharacters(value)
    } else {
      console.log(`secret has not ${text}`)
      filterCharacters()
    }
  } else if (category === 'sweater' || category === 'face' || category === 'accessories') {
    //check if secret array of values includes selected value (returns true/false)

      if ((secret.sweater).includes(value)) {
        console.log(`secret has accessories ${text}`)
        filterCharacters(value)
      } else if ((secret.face).includes(value)) {
        console.log(`secret has other: ${text}`)
        filterCharacters(value)
      } else if ((secret.accessories).includes(value)) {
        console.log(`secret has other: ${text}`)
        filterCharacters(value)
      } else {
        console.log(`secret has not ${text}`)
        filterCharacters()
      }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  //save current guess to compare what should be kept for different categories.
  const { category, value, text } = currentQuestion
  console.log(currentQuestion)
  console.log(text)
  console.log(keep)
  // Show the correct alert message for different categories
  if (category === 'sweater') {
    if (keep) {
      alert(
        `Yes, the person wears ${text}! Keep all people that wears ${text}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${text}! Remove all people that wears ${text}`
      )
    }
  } else if (category === 'face') {
    if (keep) {
      alert(
        `Yes, the person wears ${text}! Keep all people that has ${text}`
      )
    } else {
       alert(
         `No, the person doesn't wear ${text}! Remove all people that wears ${text}`
      )
    } 
  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${text}! Keep all people that has ${text}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${text}! Remove all people that wears ${text}`
      )
    }
    
  } else {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people with ${value}`)
    } else {
      alert(`No, the person doesn't have ${value}! Remove all people with ${value}`)
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === 'hair' || category === 'pants' || category === 'profession' || category === 'headgear') {
    if (keep) {  
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
    //for accessories and other we need check if the value is included in an array.
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const confirmGuess = confirm(`So, you want to make a guess?`)
  if (confirmGuess) {
    checkMyGuess(personToConfirm)
  } 
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    alert(`It is ${personToCheck}, good job!`)

  } else {
    alert(`Oh, I´m sorry but it is not ${personToCheck}, it was ${secret.name} all the time.. Better luck next time!`)
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
//This invokes the checkQuestion
findOutBtn.addEventListener('click', () => {
  checkQuestion()
  incrementOne++
  counter.innerText = incrementOne
})