// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterBtn = document.getElementById('filter')


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
let secretCharacter
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
          <button id="findOut" class="filled-button small"onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  }
  )
}

// Randomly select a person from the characters array and set as the value of the variable called secret
/*  Explanation for setSecret()
  The random character selection is based on the index number calculated using Math.random(). Math.random() generates decimal numbers 0>= x < 1.
  Since we have 24 characters and the index starts at 0, by also using the math.floor() method (that rounds down to the closest integer) the highest number that can be calculated is 23, which is the last character in the array[].
  charactersInPlay.length = the number of elements in the array. 
*/
const setSecretCharacter = () => {
  secretCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // Invoke/use the function generateBoard to load all the characters on the board.
  generateBoard(charactersInPlay);

  //Randomly select a character from the charactersInPlay array and designate it as the "secret" character.
  setSecretCharacter();
  console.log("The secret character is:", secretCharacter);
  console.log("secret is this data type:", typeof (secretCharacter));
}

// setting the currentQuestion object when you select something in the dropdown
/* EXPLANATION
const category: stores what option group (category) the question belongs to
  questions.options[questions.selectedIndex] retrieves the specific <option> element that is currently selected in the dropdown list.
  [questions.selectedIndex] returns the numerical index of the selected option. The first option in the list has an index of 0, the second has an index of 1, and so on.
  .parentNode.label, accesses the parent element of the selected <option>, the <optgroup> element and retrieves the label attribute of that element.
  So the whole expression is used to retrieve the label of the <optgroup> element from the option that is currently selected in the drop-down menu
*/
const selectQuestion = () => {
  const selectedOption = questions.options[questions.selectedIndex];
  const category = selectedOption.parentNode.label;

  // Variable that stores the actual value of the question that has been selected.
  const value = selectedOption.value;

  currentQuestion = {
    category: category,
    value: value
  };
  console.log("This is the category and value of currentQuestion", currentQuestion);
}


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  /* Explanation: Object destructuring
   extract data from an object and assign to new variables.
   Another way to do this is:
   const category = currentQuestion.category;
   const value = currentQuestion.value;
   The destructuring makes it easier to extract data
   */
  const { category, value } = currentQuestion;

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that

  /* 
  This is divided like this since the first two categories will have one to one comparisons while the other two categories contain properties with multiple values
  */
  let keep = false;

  if (category === 'hair' || category === 'eyes') {
    /* 
    We're accessing a CHARACTER object (via the variable secret) and look through its attributes until we find one that matches the category in the if statement. Once found we take the value (for example "yellow hair") and compare to the player's choice to see if the match.
    */
    if (value === secretCharacter[category]) {
      keep = true;
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secretCharacter[category].includes(value)) { // .includes() since there are multiple values
      keep = true;
    }
  }
  console.log('keep:', keep);
  // Then invoke filterCharacters
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keepParameter) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  console.log(charactersInPlay);
  if (category === 'hair') {
    // since keep parameter is a boolean there's no need to do an equation.
    if (keepParameter) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((person) => { person[category] === value })
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'eyes') {
    if (keepParameter) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((person) => { person[category] === value })
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'accessories') {
    if (keepParameter) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else {
    if (keepParameter) {
      alert(
        `Yes, the person has a ${value}! Keep all people that have a ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't have a ${value}! Remove all people that have a ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
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

// All the event listeners
restartButton.addEventListener('click', start)
// Event listener for the dropdown menu
questions.addEventListener('change', selectQuestion);
// Event listener for find out-button
/* EXPLANATION, event listeners:
there are two different options:
filterBtn.addEventListener('click', checkQuestion);
or
In this one i can pass in an argument to the function:
filterBtn.addEventListener('click', () => checkQuestion());
if I type:
filterBtn.addEventListener('click', checkQuestion());
the function will be run immediately without Javascript listening to the event which is not what i want here.
*/
filterBtn.addEventListener('click', () => checkQuestion());
