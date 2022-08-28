// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')
const filterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Boo',
    img: 'images/boo.png',
    hair: [''],
    eyes: 'black',
    accessories:[''],
    headgear: [''],
    sweaterordress: [''],
    shoes: 'barefoot',
  },
  {
    name: 'Luigi',
    img: 'images/luigi.png',
    hair: 'brown',
    eyes: 'blue',
    accessories:['gloves', 'mustache'],
    headgear: 'hat',
    sweaterordress: 'green',
    shoes: 'brown',
  },
  {
    name: 'Mario',
    img: 'images/mario.png',
    hair: 'brown',
    eyes: 'blue',
    accessories:['gloves', 'mustache'],
    headgear: 'hat',
    sweaterordress: 'red',
    shoes: 'brown',
  },
  {
    name: 'Princess Peach',
    img: 'images/princesspeach.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories:['gloves', 'earings'],
    headgear: 'crown',
    sweaterordress: 'pink',
    shoes: [],
  },
  {
    name: 'toad',
    img: 'images/toad.png',
    hair: [],
    eyes: 'black',
    accessories:[],
    headgear: 'mushroom',
    sweaterordress: 'blue',
    shoes: 'barefoot',
  },
  {
    name: 'Yoshi',
    img: 'images/yoshi.png',
    hair: [],
    eyes: 'black',
    accessories: [],
    headgear: [],
    sweaterordress: [],
    shoes: 'yellow',
  },
  {
    name: 'Daisy',
    img: 'images/daisy.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['gloves'],
    headgear: ['crown'],
    sweaterordress: ['yellow'],
    shoes: 'yellow',
  },
  {
    name: 'Bowser Jr',
    img: 'images/bowser-jr.png',
    hair: 'orange',
    eyes: 'black',
    accessories: ['bracelet', 'bib'],
    headgear: [],
    sweaterordress: [],
    shoes: 'barefoot',
  },
  {
    name: 'Chief Chilly',
    img: 'images/ChiefChilly.png',
    hair: [],
    eyes: 'blue',
    accessories: [],
    headgear: 'crown',
    sweaterordress: [],
    shoes: 'green',
  },

  {
    name: 'Waluigi',
    img: 'images/waluigi.png',
    hair: 'brown',
    eyes: 'black',
    accessories: ['gloves', 'mustache'],
    headgear: 'hat',
    sweaterordress: 'purple',
    shoes: 'yellow',
  },
  {
    name: 'Toadette',
    img: 'images/toadette.png',
    hair: [],
    eyes: 'black',
    accessories: [],
    headgear: 'mushroom',
    sweaterordress: 'pink',
    shoes: 'brown',
  },
  // {
  //   name: 'Petey Piranha',
  //   img: 'images/PeteyPiranha.png',
  //   hair: 'brown',
  //   eyes: 'green',
  //   accessories: ['glasses'],
  //   headgear: 'mushroom',
  //   sweaterordress: 'pink',
  //   shoes: 'brown',
  // },
  {
    name: 'Diddy Kong',
    img: 'images/diddy-kong.png',
    hair: 'brown',
    eyes: 'black',
    accessories: [],
    headgear: 'hat',
    sweaterordress: 'red',
    shoes: 'barefoot',
  },
  {
    name: 'Star Luma',
    img: 'images/starluma.png',
    hair: [],
    eyes: 'black',
    accessories: [],
    headgear: [],
    sweaterordress: [],
    shoes: 'barefoot',
  },
  {
    name: 'Wario',
    img: 'images/wario.png',
    hair: 'brown',
    eyes: 'black',
    accessories: ['gloves', 'mustache'],
    headgear: 'hat',
    sweaterordress: 'yellow',
    shoes: 'green',
  },
  {
    name: 'Bowser',
    img: 'images/bowser.png',
    hair: 'orange',
    eyes: 'red',
    accessories: 'bracelet',
    headgear: [],
    sweaterordress: [],
    shoes: 'barefoot',
  },
  {
    name: 'Kamek',
    img: 'images/kamek.png',
    hair: [],
    eyes: 'hidden',
    accessories: 'glasses',
    headgear: 'hat',
    sweaterordress: 'blue',
    shoes: 'brown',
  },
  {
    name: 'Birdo',
    img: 'images/birdo.png',
    hair: [],
    eyes: 'black',
    accessories: [],
    headgear: 'bow',
    sweaterordress: [],
    shoes: 'barefoot',
  },
  {
    name: 'Rosalina',
    img: 'images/rosalina.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: [],
    headgear: 'crown',
    sweaterordress: 'blue',
    shoes: [],
  },
  {
    name: 'Donkey Kong',
    img: 'images/donkey-kong.png',
    hair: 'brown',
    eyes: 'black',
    accessories: 'tie',
    headgear: [],
    sweaterordress: [],
    shoes: 'barefoot',
  },
  {
    name: 'Antasma',
    img: 'images/antasma.png',
    hair: [],
    eyes: 'hidden',
    accessories: ['glasses', 'gloves'],
    headgear: [],
    sweaterordress: 'purple',
    shoes: 'barefoot',
  },
  {
    name: 'Tiny Kong',
    img: 'images/tinykong.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: [],
    headgear: [],
    sweaterordress: 'white',
    shoes: 'white',
  },
  {
    name: 'King Bob Omb',
    img: 'images/kingbobomb.png',
    hair: [],
    eyes: 'white',
    accessories: ['gloves', 'mustache'],
    headgear: 'crown',
    sweaterordress: [],
    shoes: 'yellow',
  },
  {
    name: 'Shy Guy',
    img: 'images/shyguy.png',
    hair: [],
    eyes: 'hidden',
    accessories: 'facemask',
    headgear: [],
    sweaterordress: 'red',
    shoes: 'blue',
  },
  {
    name: 'Dark Bowser',
    img: 'images/darkbowser.png',
    hair: 'black',
    eyes: 'red',
    accessories: 'bracelet',
    headgear: [],
    sweaterordress: [],
    shoes: 'barefoot',
  },
]

// OK   Global variables
let secret
let currentQuestion
let charactersInPlay

// OK   Draw the game board
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

// OK   Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// OK  This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecret();
}




// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].parentNode.label // Variable that stores the actual value of the question we've selected.

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
  if (category === 'hair' || category === 'eyes') {
    console.log(filterCharacters)
  } else if (category === 'accessories' || category === 'headgrear') {
    console.log(filterCharacters)
  } else if (category === 'sewaterordress' || category === 'shoes') {
    console.log(filterCharacters)
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
startBtn.onclick = () => {
  startPage.style.display = "none"
  setTimeout(start, 500)
}

start()

// All the event listeners
restartButton.addEventListener('click', start)
filterButton.addEventListener('click', () => {
  selectQuestion()
});
