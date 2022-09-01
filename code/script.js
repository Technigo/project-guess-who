// All the DOM selectors stored as short variables
const board = document.getElementById('board') //this is the game board
const questions = document.getElementById('questions') // this is the navigation area for questions
const restartButton = document.getElementById('restart') //this is to restart the game, left side in nav menu
const findOutButton = document.getElementById('filter')
const guessButton = document.getElementsByClassName('guess-button')
// Array with all the characters, as objects shows up in the game board
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'beard']
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
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
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
    eyes: 'hidden',
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
    other: ['smoker', 'beard']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
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
    hair: 'hidden',
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
    eyes: 'hidden',
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
    other: ['beard']
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
let currentQuestion
let charactersInPlay
let keep

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
          <button class="filled-button small" id ="guess-button" onclick="guess('${person.name}')">Guess</button>
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
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
  selectQuestion();
}
// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value
  console.log(value);

  currentQuestion = {
    category: category,
    value: value,
  }
}

const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep 
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
   console.log(category, value)
    if (value === secret[category]) {
      keep = true
    } else {
      keep = false
    }
  
  } else if (category === 'accessories' || category === 'other') {
    console.log(category, value)
    if (secret[category].includes(value)) {
      keep = true
    } else {
      keep = false
    }
  }
  filterCharacters(keep)
}
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
 

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that has ${value} hair`
      );  
      charactersInPlay = charactersInPlay.filter(person => person[category].includes(value)
      );
    }  else {
      alert(
        `No, the person does not have ${value} hair! Remove all the people that have ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter( person => !person[category].includes(value)
      );
    }
  }

  else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter(person => person[category].includes(value)
      );
    } else {
      alert(
        `No, the person does not have ${value} eyes! Remove all the people that have ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter(person => person[category].includes(value)
      );
    }
    }
    else if (category === 'accessories') {
      if (keep) {
        alert(
          `Yes, the person has ${value}! Keep all people that has ${value}`
        )
        charactersInPlay = charactersInPlay.filter(person => person[category].includes(value)
        );
      } else {
        alert(
          `No, the person does not have ${value}! Remove all the people that have ${value}`
        )
        charactersInPlay = charactersInPlay.filter(person => person[category].includes(value)
        );}
      }

      else if (category === 'other') {
        if (keep) {
          alert(
            `Yes, the person is a ${value}! Keep all people that is a ${value}`
          )
          charactersInPlay = charactersInPlay.filter(person => person[category].includes(value)
          );
        } else {
          alert(
            `No, the person is not a ${value}! Remove all the people that is a ${value}`
          )
          charactersInPlay = charactersInPlay.filter(person => person[category].includes(value)
          );
        }
        }
        generateBoard()
  } 

  // Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let confirmGuess = confirm('Are you sure you want to guess on this person?') //Sends an 
  // If the player wants to guess, invoke the checkMyGuess function.
  if (confirmGuess) {
    checkMyGuess(personToConfirm)  //sends the information and invokes the next function
  } else {
    pass
  }
}
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
//selectQuestion.addEventListener('click', start)
//questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', () => {
  selectQuestion()
  checkQuestion()
})

guessButton.addEventListener('click'), () => { personToConfirm()}
