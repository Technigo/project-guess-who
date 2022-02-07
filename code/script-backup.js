// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter') // ???
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
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
    other: ['parrot']
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
    accessories: ['glasses', 'necklace'],
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
// Global variables
let secret
let currentQuestion
let charactersInPlay

// for counter
let counterDisplay = document.getElementById('counterDisplay')
let count = 0

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
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret() // ???
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
  const value = questions.value // ???
  console.log('The selected category is', category, 'with this value:', value)


  currentQuestion = {
    category: category,
    value: value // ???
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  // for counter
  count++
  counterDisplay.innerHTML = count

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    // juste 'égal' ou non
    if (value === secret.hair || value === secret.eyes) {
      filterCharacters(true)
      console.log('hair/eyes is right')
    } else {
      filterCharacters(false)
      console.log('hair/eyes is wrong')
    }

  } else if (category === 'accessories' || category === 'other') {
    // peut avoir plusieurs accessoires/autres en même temps (donc 'contient', pas 'égal à')
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      filterCharacters(true)
      console.log('accessories/other is right')
    } else {
      filterCharacters(false)
      console.log('accessories/other is wrong')
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people with ${value}`
      )
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people with ${value}`
      )
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people with ${value}`
      )

    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people with ${value}`
      )

      // Swal.fire(`No, the person doesn't have ${value}! Remove all people with ${value}`)
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      generateBoard()
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      generateBoard()
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      generateBoard()
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      generateBoard()
    }
  }

  // if (secret.other.includes(value)) {
  //   charactersInPlay = charactersInPlay.filter((person) => person[other].includes(value))
  //   generateBoard()
  // } else {
  //   charactersInPlay = charactersInPlay.filter((person) => !person[other].includes(value))
  //   generateBoard()
  // }

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
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable. // qu'est-ce que ca veut dire????
  // remember the confirm() ?
  if (confirm(`Do you really want to make a guess on ${personToConfirm}?`) == true) {
    // If the player wants to guess, invoke the checkMyGuess function.
    checkMyGuess(personToConfirm) // à mettre dans le 'if confirm true' ou à la fin de la fonction?
  } else { // utile ou non?
    false
  }
  console.log(secret.name)
  console.log(personToConfirm)

}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  console.log(personToCheck)

  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    // 2. Set a Message to show in the win or lose section accordingly
    document.getElementById('winOrLoseText').innerText = 'You won!'
    // 3. Show the win or lose section
    document.getElementById('winOrLose').style.display = 'flex'
    // 4. Hide the game board
    board.style.display = 'none'
  } else {
    // 2. Set a Message to show in the win or lose section accordingly
    document.getElementById('winOrLoseText').innerText = 'You lost!'
    // 3. Show the win or lose section
    document.getElementById('winOrLose').style.display = 'flex'
    // 4. Hide the game board
    board.style.display = 'none'
  }
}

const playAgain = () => {
  start()
  document.getElementById('winOrLose').style.display = 'none'
  board.style.display = 'flex'
}

// Invokes the start function when website is loaded
start()

// CHARACTERS.forEach(({ name, hair, eyes }) => {
//   console.log(name)
//   console.log(hair)
//   console.log(eyes)
// })

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', playAgain)