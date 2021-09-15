// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'unknown',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat'],
    other: ['happy']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'unknown',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['angry']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'unknown',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'unsure']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'dark',
    accessories: [],
    other: ['happy']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['sunglasses'],
    other: ['unsure']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses', 'jewelry'],
    other: ['happy']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['unsure']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses', 'jewelry'],
    other: ['happy']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'other',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker', 'unsure']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'angry']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'angry']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'other',
    eyes: 'hidden',
    accessories: ['hat', 'jewelry'],
    other: ['unsure']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['unsure']
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'other',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['happy']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'brown',
    eyes: 'dark',
    accessories: ['glasses', 'jewelry'],
    other: ['angry']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['happy']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewelry'],
    other: ['happy']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'other',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: ['happy']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['happy']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['unsure']
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'dark',
    accessories: ['glasses', 'hat'],
    other: ['unsure']
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

  console.log(secret)

}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
 
generateBoard()
setSecret()
selectQuestion()

}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  //parentNode är alltså listan "select id=question" och lable är lablarna i den listan - hair/eyes/etc
  // This variable stores what option group (category) the question belongs to.
  
  const value = questions.value

  console.log("question value" + questions.value + category)
  
  //this referrs to the id question in html and further its value in the dropdown
  // We also need a variable that stores the actual value of the question we've selected.
  // const value = brown/yellow/hidden/glasses/smoker parentNode.value? questions.value?


  currentQuestion = {
    category: category,
    value: value
  }

  console.log(currentQuestion)
}
//Eventlistener to make the function selectQuestion work..

//questions.addEventListener('change', selectQuestion)

//findOutButton.addEventListener('click', selectQuestion)

//selectQuestion.addEventListener('click') findoutbutton.. id filter

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  const {name, img, hair, eyes, accessories, other} = secret
  
  console.log('currentquestion', currentQuestion)
  console.log('secret', secret)

 if (category === 'hair' || category === 'eyes') {
   if (value === hair || value === eyes)
   //filterCharacters(true)
   alert('yes')
   else {
     //filterCharacters(false)
     alert('no')
   }

  } else if (category === 'accessories' || category === 'other') {
    //alert('no')


  }
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  filterCharacters = (value, secret, catergory)

  

//findOutButton.addEventListener('click', checkQuestion)

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
//generateBoard()
//setSecret()
//selectQuestion()


// All the event listeners

restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
