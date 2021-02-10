// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    /*patch: true,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: true,
    smoker: false,*/
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: true,*/
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
  /*  patch: false,
    earrings: false, 
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
  /*  patch: false, 
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
   /* patch: false,
    earrings: false, 
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
   /* patch: false, 
    earrings: false, 
    cell: false, 
    necklace: true,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
   /* patch: false,
    earrings: true,
    cell: false,
    necklace: true,
    parrot: false,
    smoker: false,*/
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: true,*/
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: true,*/
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
   /*patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    /*patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: true,*/
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: true,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
  /*  patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jia',
    img: 'images/jia.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
  /*  patch: false,
    earrings: true,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jodi',
    img: 'images/jodi.svg',
    hairColor: 'yellow',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Joe',
    img: 'images/joe.svg',
    hairColor: 'brown',
    eyeColor: 'brown',
    glasses: false,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jolee',
    img: 'images/jolee.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: false,
    hat: false,
   /* patch: false,
    earrings: true,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: true,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
  /*  patch: false,
    earrings: true,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
  /*  patch: false,
    earrings: false, 
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
  /*  patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
   /* patch: false,
    earrings: false,
    cell: false,
    necklace: false,
    parrot: false,
    smoker: false,*/
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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
console.log(secret);

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // generating game board
  generateBoard()
  // sets the hidden person
  setSecret()  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value;
 const question = {
   attribute: value,

 }
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      // value: ,
      // 👆 add the value from the input here
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
    }
  
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      //attribute: ,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
    // Set this up your self (should be same structure as above)
  } }

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value;
let keep;
if (currentQuestion.category === 'hair color' && currentQuestion.value === secret.hairColor){
  keep = true
} else if (currentQuestion.category === 'eye color' && currentQuestion.value === secret.eyeColor){
  keep = true
} else if (currentQuestion.category === 'accessories' && currentQuestion.attribute === 'glasses' && currentQuestion.value === secret.glasses){
  keep = true
} else if (currentQuestion.category === 'accessories' && currentQuestion.attribute === 'hat' && currentQuestion.value === secret.hat){
  keep = true
} /*else if (currentQuestion.category === 'accessories' && currentQuestion.attribute === 'patch' && currentQuestion.value === secret.patch){
  keep = true
} else if (currentQuestion.category === 'accessories' && currentQuestion.attribute === 'earrings' && currentQuestion.value === secret.earrings){
  keep = true
} else if (currentQuestion.category === 'accessories' && currentQuestion.attribute === 'cell' && currentQuestion.value === secret.cell){
  keep = true
} else if (currentQuestion.category === 'accessories' && currentQuestion.attribute === 'necklace' && currentQuestion.value === secret.necklace){
  keep = true
} else if (currentQuestion.category === 'accessories' && currentQuestion.attribute === 'parrot' && currentQuestion.value === secret.parrot){
  keep = true
}*/ else if (currentQuestion.category === 'other' && currentQuestion.value === secret.smoker){
  keep = true
} else {
  keep = false
}
filterCharacters(keep)
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value;
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
    alert(
      `Yes, the person is a ${attribute}! Keep all that is a ${attribute}`
    )
  } else {
    alert(
      `No, the person isn't a ${attribute}! Remove all who is a ${attribute}`
    )
  }
    // Similar to the one above
  } else if (category === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all that has ${value}`
      )// alert popup that says something like: "Yes, the person has yellow hair! Keep all persons with yellow hair"
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all who doesn't have ${value}`
      // alert popup that says something like: "NO, the person doesnt have yellow hair! Remove all persons with yellow hair"
      )} 
  } else if (category === 'eye color') {
      if (keep) {
        alert(
          `Yes, the person has ${value}! Keep all that has ${value}`
        )// alert popup that says something like: "Yes, the person has blue eyes! Keep all persons with blue eyes"
      } else {
        alert(
          `No, the person doesn't have ${value}! Remove all who doesn't have ${value}`
        // alert popup that says something like: "NO, the person doesnt have blue eyes! Remove all persons with blue eyes"
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
      }
      generateBoard()
    }

  // filter to keep or remove based on the keep variable.
  /* charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    or 
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value) */

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  let confirmGuess = confirm(`Have you decided to guess on ${suspect}?`)
  if (confirmGuess) {
    checkMyGuess(suspect)
  } else {

  }
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `You decided to guess on ${suspect} and good news; you were 100% right!`
  } else {
    winOrLoseText.innerHTML = `You guessed on ${suspect}, but unfortunately it was not correct. The right choice is ${secret.name}.`
  }
  winOrLose.style.display = 'flex'
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOut.addEventListener('click', checkQuestion)
questions.addEventListener('change', () => selectQuestion())

