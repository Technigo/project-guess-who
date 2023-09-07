// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter') // IDAH step 4

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
let secret ////Will be the secret person object
let currentQuestion ////Will be the current question object
let charactersInPlay////Will be an array of all people left in the game

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
  // Invokes the board to show all the characters
  generateBoard();
  // Invokes the randomizer function to randomly select one character as the secret one.
  setSecret();
  console.log(setSecret);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value; //IDAHS step 3 make selectQuest work

  currentQuestion = {
    category: category,
    value: value //IDAHS step 3
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  //IDAH step 4: True or false should be used Connect this to set secret på något sätt??? Check if the attributes in the current Question matches the attributes in the secret or not.Keep is in the filterCharacters.
  let keep
  //IDAH step 4 If the category chosen is a type of hair or eyes (objects). 
  if (category === 'hair' || category === 'eyes') {
    keep = secret[category] === value

    //IDAH step 4 If the category chosen is a type of accessory or other (array)
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value)
  }
  filterCharacters(keep)
}

// Filter the characters array and redraw the game board.
function filterCharacters(keep) {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  //Category: Accessories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) //Keeps the people that wear the chosen option.
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) //Removes the people that doesn't wear the chosen option.
    };
    //Category: Other
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all the people that is a ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) //Keeps the people that are smokers.
    } else {
      alert(
        `No, the person isn't a ${value}. Remove all the people that is a ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) //Removes the people that aren't smokers.
    }
    //Category: Hair
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all the people that has ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value) //Keeps the people that has the chosen hair color opt.
    } else {
      alert(
        `No, the person hasn't ${value} hair. Remove all the people that has ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value) // Removes the people that has the chosen hair color opt.
    }
    //Category: eyes
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all the people that has ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value) //Keeps the people that has the chosen eye color opt.
    } else {
      alert(
        `No, the person hasn't ${value} eyes. Remove all the people that has ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value) //Removes the people that has the chosen eye color opt.
    }
  }
  //Re render the game board so that only the people still in play is shown.
  generateBoard();
};

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

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion); //IDAHS step 3 to invoke the select element when we change something in the dropdown/select list
findOutButton.addEventListener('click', checkQuestion); //IDAHS step 4 to invoke checkQuestion
