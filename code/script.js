// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const boardWrapper = document.querySelector('.board-wrapper');
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')

// Array with all the people, as objects
const people = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat', 'a beard'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'a beard']
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
    accessories: ['sunglasses', 'a necklace'],
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
    accessories: ['glasses', 'a necklace'],
    other: []
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
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
    other: ['smoker', 'a beard']
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
    name: 'Jia',
    img: 'images/jia.svg',
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
    name: 'Jodi',
    img: 'images/jodi.svg',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['a hat'],
    other: []
  },
  {
    name: 'Joe',
    img: 'images/joe.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['a hat'],
    other: []
  },
  {
    name: 'Jolee',
    img: 'images/jolee.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['earrings'],
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
    accessories: ['sunglasses', 'hat', 'a necklace'],
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
    other: ['a beard']
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
let secretPerson;
let currentQuestion;
let peopleInPlay;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  peopleInPlay.forEach((person) => {
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



// Randomly select a person from the people array and set as the value of the variable called secret
const setSecret = () => {
  secretPerson = peopleInPlay[Math.floor(Math.random() * peopleInPlay.length)]
  console.log(secretPerson);
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting peopleInPlay array to be all the people to start with
  peopleInPlay = people
  // What else should happen when we start the game?
  winOrLose.style.display = 'none';
  generateBoard();
  setSecret();
  selectQuestion();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value


  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const {category, value } = currentQuestion
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterPeople
  if (category === 'hair' || category === 'eyes') {
      if (value === secretPerson[category]) {
      filterPeople(true)
      } else
      filterPeople(false)

    } else if (category === 'accessories' || category === 'other') {
         if (secretPerson[category].includes(value)) {
      filterPeople(true)
    } else
      filterPeople(false) 
    
    }
}

// It'll filter the people array and redraw the game board.
const filterPeople = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people that has ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people that has ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people that has ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value}`
      )
      peopleInPlay = peopleInPlay.filter((person) => person[category] !== value)
    }
  } 
  generateBoard()
  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmGuess = confirm(`Are you ready to make a guess?`)
  if (confirmGuess) {
    checkMyGuess(personToConfirm)
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secretPerson.name) {
    winOrLose.style.display = 'flex';
    winOrLoseText.innerText = "You're right! Great job!"
  } else{
    winOrLose.style.display = 'flex';
    winOrLoseText.innerText = `Sorry, you guessed wrong. It was ${secretPerson.name}.`
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
playAgainButton.addEventListener('click', start)

findOutButton.addEventListener('click', () => {
  selectQuestion()
  checkQuestion()
})
