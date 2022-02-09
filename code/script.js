// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden-hair',
    eyes: 'hidden-eyes',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden-hair',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden-eyes',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden-eyes',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden-eyes',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden-eyes',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden-hair',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden-eyes',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion = {category: 'hair', value: 'brown'}
let charactersInPlay

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

/*
This function chooses a random person from the CHARACTERS array once the game starts and
sets that person as the variable called secret.
*/
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}


/*
This function starts the game when the page loads for the first time and also
when the player restarts the game.
*/
const start = () => {
// Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  setSecret()
  console.log(secret)
  generateBoard()
}

/*
This function stores the information of the answer when the player chooses
an option from the dropdown. The currentQuestion variable stores the category
and the value of the question.
*/
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category,
    value
  }
  //console.log('This is the answer information') 
  //console.log(currentQuestion)
}

/*
This function is invoked by clicking the Find Out- button.
The function compares the category and value stored in the currentQuestion object
to the category and value of the chosen secret person.
*/
const checkQuestion = () => {
  const { category, value } = currentQuestion
    console.log('clicking the find out-button after choosing the value')
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
    //filterCharacters = true
  
  } else if (category === 'accessories' || category === 'other') {
    console.log('testing testing')
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}


// It'll filter the characters array and redraw the game board.
/*
This function filters the game characters based on the players question.
The function filters out characters (keeps or removes them) based on the players chosen
questions and how they match the secret person.
The function will also give alerts to the player which include information whether the
question was matching the secret person or not.
The function will also generate the board with selected characters according to the filtering process.
*/
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    console.log(value)
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      console.log(charactersInPlay)
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(`Yes, the person does have ${value}! Keep all people that have ${value}`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(`No, the person doesn't have ${value}! Remove all people that don't have ${value}`)
    }
  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] === value)
      alert(`Yes! The person has ${value} hair! Keep all people with ${value} hair`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] !== value)
      alert(`No, the person does not have ${value} hair. Remove all people with ${value} hair`)
    }
  } else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] === value)
      alert(`Yes, the person has ${value} eyes! Keep all people with ${value} eyes`)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] !== value)
      alert(`No, the person does not have ${value} eyes. Remove all people with ${value} eyes`)
    }
  }
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
    winOrLose
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)