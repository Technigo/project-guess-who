// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const guessCountBox = document.getElementById('guess-container')
const winnerLoserImg = document.createElement('img');
const winnerLoserP = document.createElement('p');

//Adding classes to the DOM variables
winnerLoserImg.className = 'winner-loser-img';
winnerLoserP.className = 'winner-loser-p';
//Setting children to the winOrLose element
winOrLose.appendChild(winnerLoserImg);
winOrLose.appendChild(winnerLoserP);


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses', 'a hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat', 'an eye-patch'],
    other: ['a beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['a smoking habit', 'a beard']
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
    accessories: ['sunglasses'],
    other: ['a beard']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses', 'jewelry'],
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
    accessories: ['glasses','jewelry'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['a smoking habit']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'a hat'],
    other: ['a smoking habit', 'a beard']
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
    accessories: ['glasses', 'a hat'],
    other: ['a smoking habit', 'a beard']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a hat', 'jewelry'],
    other: ['a phone']
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
    accessories: ['a hat'],
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
    accessories: ['glasses', 'jewelry'],
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
    accessories: ['sunglasses', 'a hat', 'jewelry'],
    other: []
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
    other: ['a beard']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'a hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let guessCount = 0 //counts guesses(questions!), starting at 0

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
  console.log(`secret character is ${secret.name}`)
}
//This function shows the number of guesses (later invokes in filter button event listener)
const guessCountDisplay = () => {
  guessCountBox.innerText =`${guessCount}`
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecret();
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  currentQuestion = {
    category: category,
    value: value,
  }
  console.log("question selected", currentQuestion);
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
 

  if (category === 'hair' || category === 'eyes') {
   if (secret[category] === value) {
    keep = true
    filterCharacters(true);
   } else {
    keep = false
    filterCharacters(false);
   }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      keep = true
      filterCharacters(true);
    } else {
      keep = false
      filterCharacters(false);
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 
  else if (category === 'other') {
    // Similar to the one above
    if (keep) {alert(`Yes, the person has ${value}! Keep all people that have ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't have ${value}! Remove all people that have ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      alert(`Yes, the person has ${value} ${category}! Keep all the people with ${value} ${category}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(`No, the person doesn't have ${value} ${category}! Remove all the people with ${value} ${category}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
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
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const userGuess = confirm(`Are you sure it's ...${personToConfirm}?`);
  if (userGuess){
    checkMyGuess(personToConfirm);
  }
 console.log(personToConfirm);
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  board.innerHTML = '' //hide the game board
  winOrLose.style.display = 'flex'; //show win or lose section
  if (personToCheck === secret.name) {
    console.log(`WINNER BABY!`)
    winOrLoseText.innerHTML = `YOU'RE A WINNER BABY!`;
    /* THIS CODE DID NOT WORK, it blocked the playAgainButton somehow?
    winOrLose.innerHTML +=`
    <img class="win-or-lose-card" src=${secret.img} alt=${secret.name}</img>
    <p class="win-or-lose-p"> ${secret.name} was the person we were looking for!</p>`;
    */
   winnerLoserImg.src = secret.img
   winnerLoserImg.alt = secret.name
   winnerLoserP.innerHTML = `${secret.name} was the person we were looking for!`
   
  }
  else {
    console.log(`LOSER BABY!`)
    winOrLoseText.innerHTML = `YOU'RE A LOSER BABY!`;
    winnerLoserImg.src = secret.img
    winnerLoserImg.alt = secret.name
    winnerLoserP.innerHTML = `Your guess was ${personToCheck}... <strong ${secret.name} was the person we were looking for!`

  }
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly

}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
filterButton.addEventListener('click', () => {
  checkQuestion();
  guessCount += 1; //Count is increased by 1
  guessCountDisplay(); //Updates the actual count!
})
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', () => {
  window.location.reload(); //reloads the page if user clicks play again
} );

