// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartBtn = document.getElementById('restart')
const findOutBtn = document.getElementById('filter') 
const playAgainBtn = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses', 'a hood'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['wear a eyepatch', 'have a beard', 'have a parrot']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['a hood'],
    other: ['smoke', 'have a beard']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['have a buttoned shirt collar', 'wear a tie']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['have a buttoned shirt collar']
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['sunglasses'],
    other: ['have bristles']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses', 'necklace'],
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
    accessories: ['glasses', 'earrings', 'necklace'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['smoke', 'have a turtleneck']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoke', 'have bristles']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['have a turtleneck']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoke']
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
    other: ['have a turtleneck']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'earrings'],
    other: ['have a turtleneck']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['have a buttoned shirt collar']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat', 'necklace'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['have a buttoned shirt collar']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['have a beard', 'have a buttoned shirt collar', 'wear a tie']
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

      //lägga ljud här med let winAudio, looseAudio?

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
          <button class="filled-button-small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
}

    // counter? NB

    
// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
      // timer and or counter?NB
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  // This variable stores what option group (category) the question belongs to.
  currentQuestion = {
    category: category,
    value: value
  }
  checkQuestion()
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log('checkQuestion testing')
  const { category, value } = currentQuestion
  let keep = true

  //Use an else-if statement for categorys where the value is a string.
  if (category === 'hair' || category === 'eyes') {
    if(secret[category] === value) {
      keep = true 
    } else {
      keep = false
    }

  //Use an else-if statement for categorys where the value is an array.
  } else if (category === 'accessories' || category === 'other') {
    if(secret[category].includes(value)) {
      keep = true
    } else {
      keep = false
    }
  }
  filterCharacters(keep)
}

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  if (category === 'accessories') {
    if (keep) {
      alert(`Great choise! Yes, the person wears ${value}! We'll keep all who wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No sorry, the person doesn't wear ${value}! So we'll remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Great choise! Yes, the person ${value}! We'll keep all who ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No sorry, the person don't ${value}! So we'll remove all people that ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else {
    if (keep) {
      alert(`Good guess! Yes, the person has ${value} ${category}! We'll keep all who have ${value} ${category}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`Oh no! the person doesn't have ${value} ${category}! We'll remove all who have ${value} ${category}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmGuess = confirm(`So, you think it's ${personToConfirm}, are you sure?`)
  if (confirmGuess) {
    checkMyGuess(personToConfirm)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `SUPER! , ${personToCheck} is the one we're looking for, well played YOU WIN!`
  }
  // let winAudio = new Audio(filformat.mp3)
  // winAudio.play() NB
   else {
    winOrLoseText.innerHTML = `Ooh no, I'sorry it's not ${personToCheck}, we were looking for ${secret.name}, play again?.`
   }
   // let loosAudio = new Audio(filformat.mp3)
   // loosAudio.play() NB
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
        // OK 1. Check if the personToCheck is the same as the secret person's name
        // OK 2. Set a Message to show in the win or lose section accordingly
        // OK 3. Show the win or lose section
        // OK 4. Hide the game board 
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartBtn.addEventListener('click', start)
findOutBtn.addEventListener('click', selectQuestion)
playAgainBtn.addEventListener('click', () => {
  start()
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
})       

//playAgainbutton, ovan eller nedan?
//This ivokes play again button and draws the board 
// playAgainBtn.addEventListener('click',() => { 
//   start()
//   document.getElementById('winOrLose').style.display='none';  
// })

// playAgainBtn.addEventListener('click', start)