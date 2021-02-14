////// TO-DO //////

//Minimum:
//[X] re-style CSS! required!
//[X] Make guess person functionality
//[X] Make guess person win/lose screen happen
//[X] fix the "true hat" bug xD
//[X] consider whether an exception to accessories is the only exception needed for the .category wording issue. Smoking is current also labeled as other, you know :P
//    [X] reconsider creating a new property for currentQuestion, but refresh yourself on why making an if statement or just NOT importing the category at all might be easier :P consider an alternative source for the text than .category which may already exist :))
//[X] in filterCharacters, move out the filter method calls from each category message ifs and elses and put them in a single separate if else at the end
//[_] properly implement the default choice of "choose here" (I think the html is what is left) also credit Maria and the other girl (Maria pinged us?)
//[_] either keep labels or remove them and find a way to make the category names prettier instead
 
//Extra flare:
//[X] Add portrait of the secret person on the winOrLose screen
//[_] Make my friends and memes as characters in a theme overhaul (4 h)


// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
let winOrLose = document.getElementById('winOrLose')
let winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
let secretPersonReveal = document.getElementById('secret-person-reveal')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    headwear: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    headwear: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    headwear: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headwear: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    headwear: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    headwear: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headwear: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    headwear: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    headwear: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    headwear: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    headwear: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    headwear: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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
  winOrLose.style.display = `none` //makes sure the winOrLose screen is deactivated
  charactersInPlay = CHARACTERS   // Here we're setting charactersInPlay array to be all the characters to start with
  setSecret();
  console.log(secret);
  generateBoard();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {

  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value // We also need a variable that stores the actual value of the question we've selected.

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      category: category,
      label: 'hair' //labels are used to write out "hair" and "eyes" instead of "hair color" and "eye color" as per the category names
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
      label: 'eyes'
    }
  } else if (category === 'accessories') {     
    currentQuestion = {
      attribute: questions.options[questions.selectedIndex].value, //reaches into the selected option tag itself to get the right subcategory of accessory (hat or glasses)
      value: true,
      category: category,
      label: questions.options[questions.selectedIndex].textContent //fetches the literal text of the option selected, which is exactly what the user sees
    }

  } else if (category === 'other') {
    currentQuestion = {
      attribute: 'smoker',
      value: true,
      category: category,
      label: 'smoke'
    }
  }

  checkQuestion();

}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {

  console.log(`you chose ${currentQuestion.value} ${currentQuestion.category} `)
  console.log(`the secret person has ${secret[currentQuestion.attribute]} ${currentQuestion.category}`) //

  if(secret[currentQuestion.attribute] === currentQuestion.value) {
    
    filterCharacters(true);

  } else {
    
    filterCharacters(false);

  }
}


const filterCharacters = (keep) => {    // Will filter the characters array and redraw the game board.


  if (currentQuestion.category === 'accessories') {     // Shows the correct alert message for different categories
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.label}! I'll remove all who don't for you.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.label}! I'll remove all who do for you.`
      )
    }
  } else if (currentQuestion.category === 'other') {
    if (keep) {
      alert(
        `Yes, the person ${currentQuestion.label}s! I'll remove all who don't for you.`
      )
    } else {
      alert(
        `No, the person doesn't ${currentQuestion.label}! I'll remove all who do for you.`
      )
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} ${currentQuestion.label}! I'll remove everyone who don't for you.`
      )
    } else {
      alert(
        `Nope, the person doesn't have ${currentQuestion.value} ${currentQuestion.label}! I'll remove everyone who does for you.`
      )
    }

  }

  //// The actual filtering ////
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value) 
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
  }

  generateBoard();

}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  
  const makeGuess = confirm(`Are you sure you want to guess on ${suspect} being the secret person?`)
  
  if (makeGuess) {

    checkMyGuess(suspect)

  } else {
    //intentionally kept empty
  }

}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  console.log(`U MADE GUESS on ${suspect}!!`)

  let message = ``

  if (suspect === secret.name) {

    message = `Correct! ${secret.name} was the secret person! Well done! ^^`

  } else {

    message = `Sorry, that's incorrect :( The secret person was actually ${secret.name}.`

  }

  board.innerHTML = ``    // hides the gameboard
  winOrLoseText.innerHTML = `${message}`  // assigns win/lose message
  winOrLose.style.display = `flex`  //activates the display of the win/lose screen

  //this section draws the secret person's card much like generateBoard(), but without guess button
  secretPersonReveal.innerHTML = `
    <div class="card">
      <p>${secret.name}</p>
      <img src=${secret.img} alt=${secret.name}>
    </div>
  `
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', selectQuestion)
playAgainButton.addEventListener('click', start)