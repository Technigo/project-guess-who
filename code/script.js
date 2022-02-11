// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findoutButton = document.getElementById('filter')
//const winOrLooseText = document.getElementById('winOr')
const playAgainButton = document.getElementById("playAgain")

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
    accessories: ['hat', 'facial-hair'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat', 'facial-hair'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['tie'],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'blonde',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses', 'facial-hair'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'jewellery'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'blonde',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'red',
    eyes: 'green',
    accessories: ['glasses', 'jewellery'],
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
    hair: 'red',
    eyes: 'green',
    accessories: ['glasses', 'hat', 'facial-hair'],
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
    hair: 'red',
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
    accessories: ['glasses', 'jewellery'],
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
    hair: 'blonde',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewellery'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewellery'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'blonde',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['tie', 'facial-hair'],
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
let secret //compare to currentQuestion 
let currentQuestion
let charactersInPlay //adds to array of people still in play 

// Draw the game board - show all characters in play. this is wehere the card for each player is set up
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

// Randomly select a person from the characters array and set as the value of the variable called secret. this should only happen ones - before we start playing
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
} 

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  console.log('start function is called')
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  // set the secret person -> invoke the setSecret function
  setSecret()
  // genreate the board, show the board on the screen -> invoking generateBoard 
  generateBoard()
  winOrLose.style.display = "none"; //to restart after game done
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  //how to get the value of the selected question and store that as the value of the qurrent question object below

  currentQuestion = {
    category: category, //eyes, hair, ARRAYS: accessories, other
    value: value //blue, blonde, jewellery
  }
}


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  //console.log(value) = test
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  // hair and eyes are strings
  // acessorires and other is arrays
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
     //(secret[category] === value) 
      filterCharacters(true);
    }else {
      filterCharacters(false);
    }
   
//if this is true check if the secret person has the hair color of the value = qurrentQuestion.categroy or qurrentQuestion.value or
// destructering : const { category, value } = currentQuestion (read about it in the coom pitfall document) its a shortcut.
//check if the secret person.hair === is the same as the currentquestion value  (step 2 and step 3)
//find away to compare the data type to an array. to check if something is included in a array use the method: includes
//but to check if something is exactly the string use the comparison symbols: ===
  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value))
    //if (secret[category].includes(value)) // How or what is the [] doing? in a conditional.
    {
      filterCharacters(true);
    }else {
      filterCharacters(false); //by default false?
    }
  }
}

// It'll filter the characters array and redraw the game board. is it a keep or a remove? 
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes, the person has ${value}! Keep all people that has ${value}.`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value}.` 
      )
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes, the person smoke! Keep all people with a smoking habbit!`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person doesn't have a smoking habbit! Remove all people with a smoking habbit!`
      )
    }
    
  } else if (category === 'hair' || category === 'eyes') { 
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(`Yes, the person has ${value} ${category}! Keep all people that have ${value} ${category}`)
      // alert popup that says something like: "Yes, the person has blonde hair! Keep all people with blonde hair"
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert( `No, the person does not have ${value} ${category}. Remove all people that have ${value} ${category}`)
      // alert popup that says something like: "No, the person doesnt have blonde hair! Remove all people with blonde hair"
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard(keep)
}

// when clicking guess, the player first have to confirm that they want to make a guess.
  // store the interaction from the player in a variable.
  // remember the confirm() 
  // If the player wants to guess, invoke the checkMyGuess function.
const guess = (personToConfirm) => {
  const guessedCharacter = confirm(
    `Are you sure you want to guess on ${personToConfirm}?`
  )
  if (guessedCharacter){
    checkMyGuess(personToConfirm)
  }else {
    alert('Keep on guessing!')
  }
}


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name){
    alert(`Yeahj! You did it, you guessed on ${secret.name} and it was right!`)
  }else {
    alert(`Nooooo! You lost! The secret person was ${secret.name}!`) 
  }
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

  winOrLose.style.display = 'block'
  //board.style.display = 'none'  
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findoutButton.addEventListener('click', checkQuestion) 
playAgainButton.addEventListener("click", start)
