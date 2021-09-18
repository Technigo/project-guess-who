// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const questionCounter = document.getElementById('countQuestions')

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
    accessories: ['glasses', 'necklace'],
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
    accessories: ['glasses', 'hat', 'necklace'],
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
let numberOfGuesses

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += /*html*/`
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
  // step 1 - generate the cards when the website is loaded to make the board visible
  generateBoard()
  // step 2 - when we start, the secret person should be selected
  setSecret()
  selectQuestion()
  winOrLose.style.display = "none"
  board.style.display = "flex"
  numberOfGuesses = 0;
  questionCounter.innerHTML = `<p class="guesses">GUESSES MADE: ${numberOfGuesses}</p>`
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.


  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  if (category === 'hair' || category === 'eyes') {
    keep = value === secret[category];
    // console.log('This is the comparaison:' + value === secret[category])

    // console.log('Value' + value)
    // console.log('Secret' + secret[category])
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value);
  }
  // Then invoke filterCharacters, 
  // we should call filterCharacters function with proper argument keep
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value} `
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category].includes(value)
      )
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}s`
      )
    }
  } else if (category === 'hair') { //for other categories: hair
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, the person doesnt have ${value} hair! Remove all people with ${value} hair`
      )
    }
  } else { // for eyes 
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes`
      )
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard(keep)
  numberOfGuesses++
  questionCounter.innerHTML = `<p>GUESSES MADE: ${numberOfGuesses}</p>`
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



// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  let playerGuess = confirm(`Do you want to guess on ${personToConfirm}?`) // true or false
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuess) {
    checkMyGuess(personToConfirm)
  } else {
    alert("You can continue to guess!")
  }
}

// If you confirm, this function is invoked

const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name

  if (personToConfirm === secret.name) {
    winOrLoseText.innerHTML = `YAY! ⭐️ You guessed on ${personToConfirm} and it was correct! You did it in only ${numberOfGuesses} questions.
    <audio autoplay>
    <source src="ES_Applause.mp3" type="audio/mp3">
    Your browser does not support the audio element.
    </audio>`
  } else {
    winOrLoseText.innerHTML = `Sorry, it's not ${personToConfirm}. The correct answer is ${secret.name}!
    <audio autoplay>
    <source src="ES_sad-melody.mp3" type="audio/mp3">
    Your browser does not support the audio element.
    </audio>`

    // 2. Set a Message to show in the win or lose section accordingly
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'

}

// Invokes the start function when website is loaded/to start a new game
start()

// All the event listeners
// when the user clicks on the restart button
restartButton.addEventListener('click', start)
// when the user selects the question in the drop down list
questions.addEventListener('change', selectQuestion)
// when the user clicks on the find out button
findOut.addEventListener('click', checkQuestion)
// when the user clicks on play again button
playAgain.addEventListener('click', start)
