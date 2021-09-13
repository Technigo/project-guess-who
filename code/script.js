// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Aladdin',
    img: 'images/aladdin.jpg',
    hairstyle: 'medium',
    hair: 'black',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Alice',
    img: 'images/alice.jpg',
    hairstyle: 'long',
    hair: 'blonde',
    accessories: ['ribbon'],
    other: []
  },
  {
    name: 'Anna',
    img: 'images/anna.jpg',
    hairstyle: 'updo',
    hair: 'auburn',
    accessories: ['necklace'],
    other: []
  },
  {
    name: 'Ariel',
    img: 'images/ariel.jpg',
    hairstyle: 'long',
    hair: 'red',
    accessories: [],
    other: ['mermaid']
  },
  {
    name: 'Aurora',
    img: 'images/aurora.jpg',
    hairstyle: 'long',
    hair: 'blonde',
    accessories: ['crown', 'necklace'],
    other: []
  },
  {
    name: 'Belle',
    img: 'images/belle.jpg',
    hairstyle: ['long', 'updo'],
    hair: 'brown',
    accessories: ['earrings'],
    other: []
  },
  {
    name: 'Cinderella',
    img: 'images/cinderella.jpg',
    hairstyle: 'updo',
    hair: 'blonde',
    accessories: ['earrings', 'necklace', 'ribbon'],
    other: []
  },
  {
    name: 'Elsa',
    img: 'images/elsa.jpg',
    hairstyle: 'long',
    hair: 'white',
    accessories: [],
    other: []
  },
  {
    name: 'Esmeralda',
    img: 'images/esmeralda.jpg',
    hairstyle: 'long',
    hair: 'black',
    accessories: ['earrings', 'ribbon'],
    other: []
  },

  {
    name: 'Genie',
    img: 'images/genie.jpg',
    hairstyle: 'updo',
    hair: 'black',
    accessories: ['earrings'],
    other: ['beard']
  },
  {
    name: 'Hercules',
    img: 'images/hercules.jpg',
    hairstyle: 'short',
    hair: 'auburn',
    accessories: ['ribbon'],
    other: []
  },
  {
    name: 'Megara',
    img: 'images/megara.jpg',
    hairstyle: ['long', 'updo'],
    hair: 'brown',
    accessories: ['ribbon'],
    other: []
  },
  {
    name: 'Merida',
    img: 'images/merida.jpg',
    hairstyle: 'long',
    hair: 'orange',
    accessories: [],
    other: []
  },
  {
    name: 'Moana',
    img: 'images/moana.jpg',
    hairstyle: 'long',
    hair: 'dark brown',
    accessories: ['flower', 'necklace'],
    other: []
  },
  {
    name: 'Mulan',
    img: 'images/mulan.jpg',
    hairstyle: 'medium',
    hair: 'black',
    accessories: [],
    other: []
  },
  {
    name: 'Peter-Pan',
    img: 'images/peterpan.jpg',
    hairstyle: 'short',
    hair: 'orange',
    accessories: ['hat'],
    other: ['can fly']
  },
  {
    name: 'Pinocchio',
    img: 'images/pinocchio.jpg',
    hairstyle: 'short',
    hair: 'black',
    accessories: ['hat', 'ribbon'],
    other: ['doll']
  },
  {
    name: 'Pocahontas',
    img: 'images/pocahontas.jpg',
    hairstyle: 'long',
    hair: 'black',
    accessories: ['necklace'],
    other: []
  },
  {
    name: 'Snow-White',
    img: 'images/snowwhite.jpg',
    hairstyle: 'medium',
    hair: 'black',
    accessories: ['ribbon'],
    other: []
  },
  {
    name: 'Tarzan',
    img: 'images/tarzan.jpg',
    hairstyle: 'long',
    hair: 'auburn',
    accessories: [],
    other: ['naked']
  },
  {
    name: 'Beast',
    img: 'images/thebeast.jpg',
    hairstyle: 'short',
    hair: 'brown',
    accessories: [],
    other: ['horns']
  },
  {
    name: 'Tiana',
    img: 'images/tiana.jpg',
    hairstyle: 'updo',
    hair: 'black',
    accessories: ['crown', 'necklace'],
    other: []
  },
  {
    name: 'Tinkerbell',
    img: 'images/tinkerbell.jpg',
    hairstyle: 'updo',
    hair: 'blonde',
    accessories: ['ribbon'],
    other: ['can fly']
  },
  {
    name: 'Woody',
    img: 'images/woody.jpg',
    hairstyle: 'short',
    hair: 'brown',
    accessories: ['hat'],
    other: ['toy']
  },
]

// Global variables
let secret
let currentQuestion
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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    // value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'hairstyle') {

  } else if (category === 'accessories' || category === 'other') {

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
    // Similar to the one above
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
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
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
