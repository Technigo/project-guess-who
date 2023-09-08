// All the DOM selectors stored as short variables
const board = document.getElementById('board')  //board is the id of the div in html file where the cards are displayed
const questions = document.getElementById('questions') //questions is the id of the select element in html file
const restartButton = document.getElementById('restart') //restart is the id of the button element in html file
const findOutButton = document.getElementById('filter') //filter is the id of the button element in html file
const winOrLoseSection = document.getElementById('winOrLoseSection') //winOrLoseSection is the id of the section element in html file
const winOrLoseText = document.getElementById('winOrLoseText') //winOrLoseText is the id of the p element in html file
const guess = document.getElementById('guess') //guess is the id of the button element in html file
const playAgain = document.getElementById('playAgain') //playAgain is the id of the button element in html file

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
 
console.log("hello")

// Global variables
let secret // The current secret person

let currentQuestion = {
  category: '',
  value: ''
}
let charactersInPlay = CHARACTERS // To be able to filter the characters in play 

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
}


// This function to start (and restart) the game
function start () {
  board.innerHTML = ''
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
    <div class="card">
    <p>${person.name}</p>
    <img src=${person.img} alt=${person.name}/> 
    <div class="guess">
      <span>Guess on ${person.name}?</span>
      <button class=filled-button small target=click>Guess</button> 
    </div>
    `
  })
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value


  currentQuestion = {
    category: category,
    value: attribute
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value)

  } else if (category === 'accessories' || category === 'other') {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))

  
  }
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
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}`
      )
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}`
      )
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${person.hair} hair! Keep all people with ${person.hair} hair`)
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      alert(`No, the person doesnt have ${person.hair} hair! Remove all people with ${person.hair} hair`)
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${person.eyes} eyes! Keep all people with ${person.eyes} eyes`)
      // alert popup that says something like: "Yes, the person has yellow eyes! Keep all people with yellow eyes"
    } else {
      alert(`No, the person doesnt have ${person.eyes} eyes! Remove all people with ${person.eyes} eyes`)
      // alert popup that says something like: "No, the person doesnt have yellow eyes! Remove all people with yellow eyes"
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person is a ${person.other}! Keep all people that are ${person.other}`)
      // alert popup that says something like: "Yes, the person is a smoker! Keep all people that are smokers"
    } else {
      alert(`No, the person is not a ${person.other}! Remove all people that are ${person.other}`)
      // alert popup that says something like: "No, the person is not a smoker! Remove all people that are not smokers"
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${person.accessories}! Keep all people that wears ${person.accessories}`)
      // alert popup that says something like: "Yes, the person wears glasses! Keep all people that wears glasses"
    } else {
      alert(`No, the person doesnt wear ${person.accessories}! Remove all people that wears ${person.accessories}`)
      // alert popup that says something like: "No, the person doesnt wear glasses! Remove all people that doesnt wear glasses"
    }

    }
  }
  console.log(checkQuestion)
  console.log(filterCharacters) 

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
   // newFunction()
  // filter by category to keep or remove based on the keep variable.

  

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()


 /* function newFunction() {
    for (hair) and(eyes)
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    or
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for (accessories; ;) and(other)
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    or
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    document.getElementById('board').innerHTML = ''
    generateBoard()
  }
*/

// when clicking guess, the player first have to confirm that they want to make a guess.
const guessPerson = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const personCheck = confirm(`Do you think it is ${person.name} ?`)
  
  confirm(personCheck);
  { if (personCheck === true) {
      checkMyGuess(personToConfirm)
    } else {
      alert(`Ok, then keep playing!`)
    }
  }  // This function should be invoked when you click on the button 'Guess'.
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  personToCheck = secret.name,
  alert(`You guessed on ${personToCheck}!`);
  //win or lose section should be displayed
  const winOrLoseText = document.getElementById('winOrLoseText');
  const winOrLoseSection = document.getElementById('winOrLoseSection');
  winOrLoseSection.style.display = 'block';
  board.style.display = 'none';
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You guessed right! It was ${personToCheck}!`;
  } else {
    winOrLoseText.innerHTML = `You guessed wrong! It was ${secret.name}!`;
  }

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
guess.addEventListener('click', guess) //add eventlistener to Guess button
questions.addEventListener('change', selectQuestion) //add eventlistener to questions
findOutButton.addEventListener('click', checkQuestion) //add eventlistener to Find Out button
filterCharacters.addEventListener('click', filterCharacters) //add eventlistener to filterCharacters 