//--------DOM selectors stored as short variables-------------//

const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

const findoutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
//don't need a GUESS button DOM selector because we add this button dynamically in this JS

//-------- Main Array (with all characters as objects) -------//

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
    other: ['smoker']
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

//---------------- Global Variables -------------------------//

// Global variables
let secret                  //Will be the secret person object
let currentQuestion         //Will be the current question object
let charactersInPlay        //Array of people still in the game


//----------- Functions after this comment -----------------//

// Function - start - to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard();  //Step 1 - I added this on Tues to see the board  
  setSecret(); //Step 1 - 'Computer player' selects the secret character the user tries to guess
}


// Function - generateBoard - to draw the game board
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


// Function - setSecret - Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret);

}

// Function - selectQuestion - setting currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  console.log(" selectQuestion function entered - make it an object")

  const category = questions.options[questions.selectedIndex].parentNode.label //stores selected category after find out button
  const value = questions.options[questions.selectedIndex].value //stores selected value after find out button

  //declare an object
  currentQuestion = {
    category: category,
    value: value
  }

  console.log(currentQuestion)
  return (currentQuestion)
}


// Function - checkQuestion - should be invoked when you click on 'Find Out' button
const checkQuestion = () => {
  console.log("find out button clicked, CheckQuestion function entered")

  selectQuestion(); //jump into selectQuestion to get details of what the user has guessed and return here to compare the values

  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if (secret.hair === value || secret.eyes === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }

  if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) { //the .include array property took me a ages to work out here
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}


// Function - filterCharacters - filter characters array and redraw the game board
const filterCharacters = (keep) => {
  console.log("we have entered filtercharacters")
  console.log(`the value of keep is: ${keep}`)

  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(`YES, the person has ${value} hair! We will keep all people who have ${value} hair.`
      )
    } else {
      alert(`NO, the person doesn't have ${value} hair. We will remove all people who have ${value} hair`
      )
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(`YES, the person has ${value} eyes! We will keep all people who have ${value} coloured eyes.`
      )
    } else {
      alert(`NO, the person doesn't have ${value} eyes. We will remove all people who have ${value} eyes`
      )
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(`YES, the person has ${value}! We will keep all people who have ${value}.`
      )
    } else {
      alert(`NO, the person doesn't have ${value}. We will remove all people who have ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`YES, the person has ${value}! We will keep all people who have ${value}.`
      )
    } else {
      alert(`NO, the person doesn't have ${value}. We will remove all people who have ${value}`
      )
    }
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



// Function - guess - when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}


// Function - checkMyGuess - if you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}


// Invokes the start function when website is loaded
start()


//-------------------- All Event Listeners --------------------//


//NOTE: 4 events - restart button, find out button, guess button, play again button

restartButton.addEventListener('click', start) //NOTE: technigo wrote this
playAgainButton.addEventListener('click', start)
findoutButton.addEventListener('click', checkQuestion)

//filterDropdown.addEventListener('change', filterGuess) //this is suggested in instructions but I have not used it as I have all my event listeners linked to buttons.
