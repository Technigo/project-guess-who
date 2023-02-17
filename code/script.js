// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')



// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Boh',
    img: 'images/boh.png',
    hair: 'yellow',
    clothes:"" ,
    accessories: [],
    other: []
  },
  {
    name: 'Boiler Geezer',
    img: 'images/boiler_geezer.png',
    hair: 'bald',
    clothes: 'red',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Calcifer',
    img: 'images/calcifer.png',
    hair: '',
    clothes: '',
    accessories: [],
    other: []
  },
  {
    name: 'Catbus',
    img: 'images/catbus.png',
    hair: 'mixed',
    clothes: '',
    accessories: [],
    other: ['teeth showing']
  },
  {
    name: 'chihiro',
    img: 'images/chihiro.png',
    hair: 'black',
    clothes: 'red',
    accessories: ['bow'],
    other: []
  },
  {
    name: 'Haku',
    img: 'images/haku.png',
    hair: 'mixed',
    clothes: '',
   // accessories: [],
    other: []
  },
  {
    name: 'jiji',
    img: 'images/jiji.png',
    hair: 'black',
    clothes: '',
    accessories: [],
    other: []
  },
  {
    name: 'kiki',
    img: 'images/kiki.png',
    hair: 'black',
    clothes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'kodama',
    img: 'images/kodama.png',
    hair: '',
    clothes: '',
    accessories: [],
    other: ['group']
  },

  {
    name: 'moro',
    img: 'images/moro.png',
    hair: 'white',
    clothes: '',
    accessories: [],
    other: ['teeth showing']
  },
  {
    name: 'No Face',
    img: 'images/no_face.png',
    hair: '',
    clothes: 'black',
    accessories: ['mask'],
    other: []
  },
  {
    name: 'San',
    img: 'images/san.png',
    hair: 'white',
    clothes: '',
    accessories: ['mask,earrings'],
    other: []
  },
  {
    name: 'Susuwatari',
    img: 'images/susuwatari.png',
    hair: 'black',
    clothes: '',
    accessories: ['stars'],
    other: ['group']
  },
  {
    name: 'Totoro',
    img: 'images/totoro.png',
    hair: 'mixed',
    clothes: 'hidden',
    accessories: ['hat'],
    other: ['teeth showing']
  },
  {
    name: 'Turnip Head',
    img: 'images/turnip_head.png',
    hair: '',
    clothes: 'blue',
    accessories: ['hat,pipe'],
    other: ['teeth showing']
  },
  {
    name: 'White & Blue totoros',
    img: 'images/white-blue_totoros.png',
    hair: 'mixed',
    clothes: '',
    accessories: ['leaf'],
    other: []
  },

]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let keep

//sound

const sounWinner =()=> {}

const soundLose =() =>{}

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
          <button class="filled-button small" 
          onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
 
};

// This function to start (and restart) the game
const start = () => {
  // 3. Show the win or lose section
  winOrLose.style.display = "none"
  // 4. Hide the game board
  board.style.display = "flex"
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard(); 
  setSecret(); // invoke the funtion so the computer select the secretc character
  
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
   const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }

}

// This function should be invoked when you click on 'Find Out' button. (step4)
const checkQuestion = () => {
  selectQuestion();
  const { category, value } = currentQuestion
  // Compare the currentQuestion details with the secret person details in a 
  // different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
 
  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      keep = true
      } else {
        keep = false
    }

  } else if (category === 'accessories' || category === 'other') {
     if (secret[category].includes(value)) {
      keep = true
      } else {
        keep = false
     }

    }
  
  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {

  const { category, value } = currentQuestion
 
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
      alert (`Yeees, the character wears ${value}! Keep all characters that wears${value}.`)
    } else  {
      alert (`oh no, the person doesn't wear ${value}! Remove all characters that wears. ${value}.`)
    }

} else if (category === "hair") {
    if (keep) {
      alert (`Yaay, the character has ${value} hair! Keep all characters with ${value} hair.`)
    } else  {
      alert (`oh no, the person doesnt have ${value} hair! Remove all characters with ${value} hair.`)
    }

} else if (category === "eyes") {
    if (keep) {
      alert (`Yeah, the character have ${value} eyes! Keep all characters with ${value} eyes.`)
    } else  {
      alert (`oh no, the character doesnt have ${value} eyes! Remove all characters with ${value} eyes.`)
    }

} else if (category === "other") {
    if (keep) {
      alert (`yuhuu, the character have ${value}! Keep all characters with ${value}.`)
    } else  {
      alert (`oh no, the character doesnt have ${value}! Remove all characters with ${value}.`)
    }
  }
  
   
  //for hair and eyes :
  if (category === "hair" || category === "eyes")
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }

    // for accessories and other
    if (category === "accessories"|| category === "other")
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }


    // Invoke a function to redraw the board with the remaining people.
    generateBoard();
   
  }

 

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {


  if (confirm (`Are you sure you want to make a guess on ${personToConfirm}?`)){
    const playerGuess = personToConfirm
    checkMyGuess(playerGuess)
  }

// store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name
   if ( secret.name === personToConfirm) {
     winOrLoseText.innerHTML = `YOU WON is ${secret.name}!`
    }

  // 2. Set a Message to show in the win or lose section accordingly
  else {
    winOrLoseText.innerHTML = `GAME OVER!` 
   }
// 3. Show the win or lose section
   winOrLose.style.display = "flex"
// 4. Hide the game board
   board.style.display = "none"
  
  }


 





// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)


