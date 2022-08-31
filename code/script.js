// All the DOM selectors stored as short variables
const board = document.getElementById('board') // a class within the section where the charachters will show. 
const questions = document.getElementById('questions') // where you do your guesse (the roll-down input section)
const restartButton = document.getElementById('restart') // the restart button
const findOutButton = document.getElementById('filter') // the find-out button

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['happy']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'beard']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
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
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['happy']
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
    other: ['happy']
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
    other: ['happy']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'beard']
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
    other: ['happy']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['happy']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
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
    other: ['beard', 'happy']
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
  console.log('secret person;', secret) //This console.log allows me to see who the secret person is for each game. 
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS // Here we're setting charactersInPlay array to be all the characters to start with
}

// This function sets the currentQuestion when the user selects something in the dropdow. The function is invoked when selecting an item in the dropdown.
const selectQuestion = () => {
  console.log('This is the question that I want answered')
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value // This variable stores the actual value of the quesiton we've selected in the dropdown.
    
    if (category === 'hair') {
      console.log('hair:', value)
      currentQuestion = { 
        category: category,
        value: value
      }
    }
  
    else if (category === 'eyes') {
      console.log('eyes:', value)
      currentQuestion = { 
        category: category,
        value: value
      }
    }

    else if (category === 'accessories') {
      console.log('accessories:', value)
      currentQuestion = { 
        category: category,
        value: value //At first, I thought it would be a boolean value, but perhaps not? 
      }
    }

    else if (category === 'other') {
      console.log('other:', value)
      currentQuestion = {
        category: category,
        value: value //same as above
      }
     }
  }


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log('Please check if the secret person has these attributes!')
  const { category, value } = currentQuestion 
  let keep

  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true) //This keeps everyone who has that hair/eye color
      console.log('You are on the right track!')
    }
    else {
      filterCharacters() //This removes everyone who don't have that hair/eye color
    }
  } 
  
  else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) { //this says includes instead of === since you either have the accessories/other or you don't. 
      filterCharacters(true) //This keeps everyone who has that accessory/other thing. 
      console.log('You are not on the right track')
    }
    else {
      filterCharacters() //This filters out everyone who don't have
    }
  }
  
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log('Filtering')
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keep all people that has ${value} hair.`)
      charactersInPlay = charactersInPlay.filter((person) => person[value] === value) // I changed attributes to CHARACHTERS since I did not understand where attributes came from
    }  
    else {
      alert(`No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`)
      charactersInPlay = charactersInPlay.filter((person) => person[value] !== value)
    }
  }
  
  else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people that have ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[value] === value)
    } 
    else {
      alert(`No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[value] !== value)
    }
  }

  else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    
    else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 
  
  else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person has a ${value}! Keep all people that have a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    
    else {
      alert(`No, the person doesn't have a ${value}! Remove all people that have a ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 

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
  /*Here I could put my count down(or up) if-statement. Perhaps look something like this? (First I need to define count) 
  if (count === 0) {
    alert('Game over! Refresh the page to try again.')
  }*/
  /*
  if (personToCheck === personToConfim) {
    alert('Are you Sherlock Holmes? Cause that sure was impressive detective work!')
  }
  else {
    alert('Not the sharpest tool in the tool box? Give it another go!')
    
  }
  */
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

//The following functions are called when the website is loaded:
start() // Invokes the start function when website is loaded
generateBoard() // Invokes the generateBoard function when the website is loaded
setSecret() // Invokes the setSecrets function when website is loaded (i.e. a new secret person is chosen)

// ALL EVENTLISTENERS
//This eventListener makes sure that the page relodes when the button Restart is clicked. 
restartButton.addEventListener('click', start)

//This eventListener is activeted when the dropdown is changed. I am not sure that it is needed, and what it should be connected to. 
questions.addEventListener('change', (event) => {
  selectQuestion()
}) 

//This eventListener is supposed to check whether my question is right or not (thus activate an alert message). I have not made it work yet.
findOutButton.addEventListener('click', (event) => {
  checkQuestion()
})
