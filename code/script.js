// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')
const guessCounter = document.getElementById('guesses')



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

// Global variables
let secret
let currentQuestion
let charactersInPlay
let numberOfGuesses = 0

// Draw the game board
const generateBoard = () => {
  board.innerHTML = '' // Sets the inner HTML to an empty string when you re-start it, to start afresh
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
   console.log(secret); //To check that a new secret person has been selected 
}

// When the game starts:
const start = () => { // Use this function to start (and restart) the game
  charactersInPlay = CHARACTERS   // Here we're setting charactersInPlay array to be all the characters 
  winOrLose.style.display = 'none' // We dont want to show the win/lose screen here 
  board.style.display = 'flex' // We want to show the game board 
  setSecret() // This sets a new secret person  
  generateBoard() // This draws the board with all the people 
}


// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label   // This variable stores what option group (category) the question belongs to.
  const value = questions.value   // We also need a variable that stores the actual value ('yellow' if hair colour, for example) of the question we've selected.

  currentQuestion = {
    category: category,
    value: value,
  };

//THIS WAS ANOTHER WAY TO WRITE THE ABOVE FOR currentQUestion//
//   if (category === 'hair color') {
//     currentQuestion = {
//       attribute: 'hair',
//       value: value,
//       category: category,
//     }
//   }
// else if (category === 'eyes'){
//    currentQuestion = {
//     attribute: 'eyes',
//     value: value,
//     category: category,
//   }
// }
// else if (category === 'accessories'){
//     currentQuestion = {
//       attribute: 'accessories',
//       value: value,
//       category: category,
//     }
//   }
// else {
//     currentQuestion = {
//       attribute: 'other',
//       value: value, 
//       category: category,
//     }
// }


}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  //previously added .value === secret[currentQuestion.value] //doesn't seem to do anything
  //const keep = currentQuestion.value === secret[currentQuestion.attribute] // This was another way but did not fully work

let keep = false

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that.
 
if (category === 'hair' || category === 'eyes') {
  if (value ===secret[category]) {
    keep = true
  }
}
else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)){
    keep = true
}
}

filterCharacters(keep); //
}


// This filters the characters array and shows the correct alert message for different categories.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if  (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`
      )
    } 
 } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`
      )
    } else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`
      )
    } 
  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}`
      )
    } else {
        alert(
         `No, the person doesn't wear any kind of ${value}! Remove all people that wear ${value}`
        )
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people are a ${value}`
      )
    } else {
       alert (
        `No, the person isn't a ${value}. Remove all people that are not a ${value}`
      )
   }   
  }
//Filter by cateogry to keep or remove based on the keep variable.

if (category === 'hair'|| category === 'eyes'){
  if (keep) {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[category] === value
  )
  } else {
  charactersInPlay = charactersInPlay.filter(
    (person) => person[category] !== value
  );
}
} else if (category === 'accessories' || category === 'other'){
  if (keep) {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[category].includes(value)
    );
  } else {
    charactersInPlay = charactersInPlay.filter(
      (person)=> !person[category].includes(value)
    );
  }
}


// Invoke this function to redraw the board with the remaining people.
  generateBoard(); 
};

// when clicking guess, the player first has to confirm that they want to make a guess.
const guess = (personToConfirm) => {   // store the interaction from the player in a variable.
  const makeAGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`)
  
  if (makeAGuess) { // If the player wants to guess, invoke the checkMyGuess function.
    checkMyGuess(personToConfirm)  
  }
}


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
    // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
      // 2. Set a Message to show in the win or lose section accordingly
      winOrLoseText.innerHTML =  `Hooray, you guessed correctly it was ${secret.name} in ${numberOfGuesses} guesses!`
      //console.log("yes", personToCheck, secret.name)
  } else {
      winOrLoseText.innerHTML = `Sorry, you guessed ${numberOfGuesses} times but it's not ${personToCheck} - it was ${secret.name}! Better luck next time!`
      //console.log("no", personToCheck, secret.name)
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'
}



// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)       //Clicking the restart button will invoke the start function
questions.addEventListener('change', selectQuestion) //Clicking the questions will invoke the selectQuestion function
findOutButton.addEventListener('click',() => {       // Clicking the Find Out button will invoke the checkQuestion function 
  checkQuestion();                                      //and add one more guessto the guessCounter
  numberOfGuesses += 1; 
  guessCounter.innerHTML = `${numberOfGuesses}`;}) 
playAgain.addEventListener('click', () => {       
  start();
  numberOfGuesses = 0;
  guessCounter.innerHTML = `${numberOfGuesses}`;})  //Clicking the playAgain button will invoke the start function and set 
                                                        //numberOfGuesses back to 0
