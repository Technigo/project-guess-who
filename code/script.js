// All the DOM selectors stored as short variables
const board = document.getElementById('board') //this is the game board
const questions = document.getElementById('questions') // this is the navigation area for questions
const restartButton = document.getElementById('restart') //this is to restart the game, left side in nav menu
const findOutButton = document.getElementById('filter') //The find out button
const guessButton = document.getElementsByClassName('guess-button') //The button to guess the character
const playAgainButton = document.getElementById('playAgain') //Play again

// Array with all the characters available on the board
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
    other: ['bearded']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoking', 'bearded']
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
    accessories: ['glasses', 'earrings'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoking']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoking']
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
    other: ['smoking', 'bearded']
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
    accessories: ['glasses', 'earrings'],
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
    accessories: ['earrings'],
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
    other: ['bearded']
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
let counter = 0

// Draws the game board
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

// Randomly selects a person from the characters array and sets the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}


// This function starts (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecret();
  selectQuestion();
}
// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label

  //This variable stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value
  console.log(value);

  currentQuestion = {
    category: category,
    value: value,
  }
}

//Checks what option hasd been chosen
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep 
  
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
  

// This function filter the characters array and redraws the game board.
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
      charactersInPlay = charactersInPlay.filter(person => !person[category].includes(value)
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
        charactersInPlay = charactersInPlay.filter(person => !person[category].includes(value)
        );}
      }

      else if (category === 'other') {
        if (keep) {
          alert(
            `Yes, the person is ${value}! Keep all people that is ${value}`
          )
          charactersInPlay = charactersInPlay.filter(person => person[category].includes(value)
          );
        } else {
          alert(
            `No, the person is not ${value}! Remove all the people that are ${value}`
          )
          charactersInPlay = charactersInPlay.filter(person => !person[category].includes(value)
          );
        }
        }
        generateBoard() //redraws the board with the characters left
  } 


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const guessedPerson = confirm(`Are you sure you want to guess on ${personToConfirm}?`) 
  if (guessedPerson) {
    checkMyGuess(personToConfirm) 
  } else {
    window.alert('Maybe that is for the best. Or is it?') //If clicking cancel
  }
}

// If you confirm, this function is invoked and tells you if you are right or wrong
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `Yes, you got it right!`
    winOrLose.style.display = 'block'
    board.style.display = 'none'
  } else {winOrLoseText.innerHTML = `Nope, you lose. Better luck next time!`
   winOrLose.style.display = 'block'
    board.style.display = 'none'
  }
}

//Reloads the page after clicking Play again button
document.getElementById("playAgain").addEventListener("click", () => {
  location.reload(console.log("event triggered"))
  return false
})

start()

//Event listeners

restartButton.addEventListener('click', () => {
  start() //reloads the board
  counter = 0
    document.querySelector("#result").innerHTML = counter //resets the counter
  })
findOutButton.addEventListener('click', () => {
  selectQuestion()
  checkQuestion()
   counter++
  document.querySelector("#result").innerHTML = counter  //For every guess the counter ticks up
})
guessButton.addEventListener('click', personToConfirm()) //Compares the guessed person to set secret