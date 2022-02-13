// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const winOrLooseText = document.getElementById('winOrLoseText')

// Global variables
let secret
let currentQuestion
let charactersInPlay
let keep

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['parrot']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['pipe']
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
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses'],
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
    accessories: ['glasses', 'earrings'],
    other: []
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['cigarette']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['cigarette']
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
    other: ['cigarette']
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
    accessories: ['glasses', 'earrings'],
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
    accessories: ['sunglasses', 'hat'],
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

// The Game Board is being rendered with every characters card with a guess button
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

// This function randomly selects a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
 secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// Function for starting and restarting the game. All charactersInPlay are shown, the secret person is set. 
// If restarting the win or loose screen will be hidden
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  selectQuestion()
  winOrLose.classList.remove("show-win-or-lose");
}
// Variable that stores the category (option group/in the dropdown menu) and value for the question 
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
}

// After selecting a category, player chooses to Find out. This function compares the question with information about the secret person
// If the answer is true, it keeps the characters. Others will be filtered out. 
const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      filterCharacters(true)
    } else
      filterCharacters(false)

  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    } else if
      (filterCharacters(false)) {
    }
  }
}
// This function filters the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Alert message that tells the player if they were right in their guesses for category accessories and other on the secret person. 
  if (category === 'accessories') {
    if (keep) {
      alert(
      `Yes, the person wears ${value}! We will keep all people that wears ${value} on the board`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));

    } else {
      alert(
        `No, the person doesn't wear ${value}! We will remove all people that wears ${value} from the board`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));

    }
  }
  else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person has a ${value}! We will keep all persons that has a ${value} on the board.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert(
        `No, the person does not have a ${value}! We will remove all people that has a ${value} from the board`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'hair' || category === 'eyes') {
      if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! We will keep all persons that has ${value} ${category} on the board.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)

    } else {
      alert(
        `No, the person does not have  ${value} ${category}! We will remove all people that has ${value} ${category} from the board`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }
// Generates a board with the remaining charachters who are still in play. 
  generateBoard();
}
// If player clicks Guess button, they need to confirm that they want to guess on this charachter. 
const guess = (personToConfirm) => {
let confirmYourGuess = confirm(`Do you want to guess it is ${personToConfirm}?`)
  
if (confirmYourGuess){
    checkMyGuess(personToConfirm)
    } else{
      alert('Ok, continue game')
    }
  }
// If player confirm, the guessed persons name will be compared to the secret persons name. 
const checkMyGuess = (personToCheck) => {

  //If the personToCheck is the same as the secret person's name a winning or loosing message will be shown. 
   if (personToCheck === secret.name){
    winOrLooseText.innerHTML = `You are absolutely right! The secret person was ${secret.name}`
  } else {
    winOrLooseText.innerHTML = `No, I am sorry, that was incorrect. The secret person was ${secret.name}`
  }
  let winOrLose= document.getElementById('winOrLose'); 
  winOrLose.classList.add("show-win-or-lose");
  }
  //When the player has seen the winning/loosing message, they can choose to play again and the restart hides the Win/Loose screen


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion) 
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)

