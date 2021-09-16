// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')
const counter = document.getElementById('counter')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat'], 
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat', 'jacket'],
    other: ['beard', 'pet']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat', 'jacket'],
    other: ['smoker', 'beard']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['shirt'],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses', 'shirt'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses', 'jewellery', 'shirt'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewellery'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat', 'jacket'],
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
    accessories: ['glasses', 'jewellery'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', 'shirt'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat', 'jewellery', 'shirt'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewellery'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['shirt'],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['shirt'],
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
let count = 0

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += /*html*/ `
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

// Counts how many questions has been asked
const questionCounter = () => {
  count += 1;
  counter.innerHTML = /*html*/ `Questions asked: ${count}`
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
  //This console.log shows which is the secret person selected when not commented out:
  //console.log(`The secret person is ${secret.name}`)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value

  // This variable stores the text from the select option. 
  const text = questions.options[questions.selectedIndex].text
  
  currentQuestion = {
    category: category,
    value: value,
    text: text
  }
}

const checkQuestion = () => {

  const { category, value } = currentQuestion

  let keep = "false" //Default value

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  if (category === 'hair' || category === 'eyes') {
      if (value === secret[category]) {
        console.log("hair/eyes match!")
        filterCharacters(keep)
      } else {
        console.log("no hair/eyes match!")
        filterCharacters()
      }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) {
      console.log("accs/other match!")
      filterCharacters(keep)
    } else {
      console.log("no accs/other match!")
      filterCharacters()
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value, text } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      swal(`Yes, the person wears ${text}!`, `All people wearing ${text} have been kept.`)
    } else {
      swal(`No ${text}!`, `All people that wears ${text} have been removed.`)
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep) {
      swal(`Yes, the person has ${text}!`, `All people with ${text} have been kept.`)
    } else {
      swal(`No ${text}!`, `All people with ${text} have been removed.`)
    }
  } else {
    if (keep) {
      swal(`Yes, the person has ${text}!`, `All people with ${text} have been kept.`)
    } else {
      swal(`No ${text}!`, `All people with ${text} have been removed.`)
    }
  }
  // } else {
  //   if (keep) {
  //     swal(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`)
  //   } else {
  //     swal(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`)
  //   }
  // }

  
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  console.log("let's filter!")


  
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }

  } else if (category === 'accessories' || category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else {
    console.log("Someting went wrong when filtering!")
  }
      
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()

}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm()
  const playerGuess = confirm(`Are you sure you want to guess ${personToConfirm}?`)

  // const playerGuess = swal(`Are you sure you want to guess ${personToConfirm}?`, {
  //      buttons: {
  //        cancel: 'Maybe later',
  //        confirm: 'You bet I do!',
  //        },
  //      })
  
  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuess) {
    checkMyGuess(personToConfirm)
  } else {
    console.log("Guess cancelled.")
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToConfirm === secret.name) {
    swal(`You're a winner!`, `Let's celebrate!`, `success`)
  } else {
    swal(`Wrong answer!`, `The correct answer was ${secret.name}.`, `error`)
  }

  const winOrLose = document.getElementById('winOrLose')

  winOrLose.style.display="flex";

}

// Invokes the start function when website is loaded
start()

// All the event listeners
questions.addEventListener("change", (ev) => selectQuestion(ev.target.value))
findOutButton.addEventListener('click', () => { checkQuestion(), questionCounter()})
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', () => location.reload())
