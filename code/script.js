// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')

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
let secret //Will be the secret person
let currentQuestion //Will be the current question object
let charactersInPlay //After filtering the array, ex does not have black hair, all the people left in the game


// Draw the game board
const generateBoard = () => {
  board.innerHTML = '' 
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}/>
        <div class="guess">
          <span> Guess on ${person.name}?</span>
          <button class="filled-button small" onClick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
  console.log(charactersInPlay)
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret)
}


// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
  winOrLose.style.display = 'none';
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value;
  
  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  console.log(`checkQuestion will filter based on ${category}: ${value}`)
  
  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      filterCharacters(true); 
    } else {
      filterCharacters(false) 
    }

  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true) 
    } else {
      filterCharacters(false) 
    }
  }

}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  
  if (category === 'accessories') {
    if (keep) {
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
  } else if (category === 'other'){
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all the people that is ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person is not a ${value}! Remove all the smokers!`      
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'hair'){

    if (keep) {
      alert(
        `Yes, the person have ${value} hair! Keep all the people with ${value} hair!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesnt have ${value} hair! Remove all people with ${value} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  
  } else if (category === 'eyes'){
    if(keep) {
      alert(
        `Yes, the person have ${value} eyes! Keep all the people with ${value} eyes!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  generateBoard()
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
 const playerInteraction = window.confirm("Wan't to make a guess huh? Are you sure?")

 if (playerInteraction) {
  checkMyGuess(personToConfirm)
 }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alert('HOLY CRAP! You win!!!')
    winOrLoseText.innerHTML = `<h1>WIIHOOOO!!! You rule 🥳</h1>
    <h4>Are you up for another game?</h4>`
  } else {
    alert('Oh, GOD no!!')
    winOrLoseText.innerHTML = `<h1> Is that really all you've got?<h1/>
    <h4>Up for another game? Try to win this time maybe...🙄`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgain.addEventListener("click", start)
playAgainButton.addEventListener("click", () => {
  location.reload()
})
