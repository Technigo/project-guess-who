// All the DOM selectors stored as short variables
const board = document.getElementById('board')              //this is the game board
const questions = document.getElementById('questions')      //navigation area for questions
const restartButton = document.getElementById('restart')    // restarts game, left side in nav menu
const winOrLose = document.getElementById ('winOrLose')
const playAgain = document.getElementById('playAgain')      // play again
const count = document.getElementById('counter')
const filter = document.getElementById('filter')



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
    other: ['pirate']
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
    accessories: ['jewelry'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'pink',
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
    other: ['cellphone']
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
    other: ['jewelry']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
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
let selectedCharacter                                        //the secret character
let secret
let currentQuestion
let charactersInPlay

// Draw the game board
const generateBoard = () => {      
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {                     //charactersInPlay = individual 
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



// Generating the secret person 
const guessWho = () => {
  let secret = Math.floor(Math.random() * CHARACTERS.length+1);
  selectedCharacter = CHARACTERS[secret];                    //generate random name in console
  console.log("Selected: " , selectedCharacter);             // console check
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
 secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
 console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard(); //Showing board with characters, I added
  setSecret();//Randomly setting a secret person
  guessWho();
  winOrLose.style.display = "none";
  winOrLoseText.innerHTML = " ";
}



// setting the currentQuestion object when you select something in the dropdown, player chooses
const selectQuestion = () => {     
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value      // this variable stores what option group/category the question belongs to
  
    currentQuestion = {              // A variable that stores the value of the question user selected
    category: category,
    value: value,
  }
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion          
  console.log("Question ready: " , currentQuestion)

  if (category === 'accessories') {
    if (selectedCharacter[category].includes(value)) {
      filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }
  } 
  else if (category === 'other') {
    if (selectedCharacter[category].includes(value)) {
          filterCharacters(true)
      }
    else {
          filterCharacters(false)
      }
  
  } else if (category === 'hair') {
    if (selectedCharacter[category] === value) {
        filterCharacters(true)
    } else {
        filterCharacters(false)
     }
  
   } else if (category === 'eyes') {
      if (selectedCharacter[category].includes(value)) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }
   
  };


// Then invoke filterCharacters
//filterCharacters(keep) // This sends KEEP as a parameter to the filterCharachters function
// It'll filter the characters array and redraw the game board.
// Show the correct alert message for different categories

const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
     } 
    else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 
    else if (category === 'other') {  
    if(keep) {
      alert(`Yes! The person wears ${value}! Keep all people that has a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  } 
   else {
    alert(`No, the person doesn't have ${value}. Remove all people that has a ${value}`)
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  }
}
   else if (category === 'hair') {
  if (keep) {
    alert(`Yes, the person has ${value}! Keep all people that has ${value} hair`)
    charactersInPlay = charactersInPlay.filter((person)[category].includes(value))
  }
  else {
    alert(`No, the person doesn't have ${value}! Remove all people that wears ${value} hair`)
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  }
    }
   else if (category === 'eyes') {
      if (keep) {
        alert(`Yes, the person has ${value}! Keep all people that has ${value} eyes`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      }
   else {
        alert(`No, the person doesn't have ${value} eyes ! Remove all people that has ${value} eyes`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
   }

   // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } 
  else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
  } 
  else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category] !== value)
    }

  } 
  else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    }
    else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
    } 
  
  generateBoard(); // Gives a new board that is filtered with remaining people
  };


// when clicking guess, the player first have to confirm that they want to make a guess.
// Two options show here, if user guesses, invoke checkmyGuess function.
const guess = (personToConfirm) => {
  if (window.confirm `Taking the risk and guessing ${personToConfirm}?`) {
    checkMyGuess(personToConfirm);
  }
  else {
    console.log("Cancelled confirmation")
  }
};


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === selectedCharacter.name) {
    winOrLoseText.innerHTML = `YIPPIE! You guessed right! It was ${selectedCharacter.name}! Congratulations!`
    console.log(personToCheck)   
  }
  else {
    winOrLoseText.innerHTML = `Sorry friend, better luck next time. The secret person was ${selectedCharacter.name}`
    board.style.display = `none`
  }
  winOrLose.style.display = `flex`    
}


// Invokes the start function when website is loaded
start();

const refresh = () => {window.location.reload()};

// All the event listeners
restartButton.addEventListener('click', start)
filter.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgain.addEventListener('click', refresh)
