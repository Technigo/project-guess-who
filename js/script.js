// All the DOM selectors stored as short variables
const board              = document.getElementById('board')
const questions          = document.getElementById('questions')
const filterButton       = document.getElementById('filter')
const restartButton      = document.getElementById('restart')
const winOrLoseText      = document.getElementById('winOrLoseText')
const winOrLose          = document.getElementById('winOrLose')
const playAgainButton    = document.getElementById('playAgain')
const totalGuesses       = document.querySelector("#totalGuesses")
const time               = document.querySelector("#time")

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: true,
    button: true,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: false,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: true,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    necklace: true,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    necklace: true,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: true,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    necklace: false,
    earrings: false,
    phone: true,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Jia',
    img: 'images/jia.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jodi',
    img: 'images/jodi.svg',
    hairColor: 'yellow',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Joe',
    img: 'images/joe.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jolee',
    img: 'images/jolee.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: false,
    hat: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    necklace: true,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: true,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'hazel',
    glasses: false,
    hat: false,
    necklace: false,
    earrings: true,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: false,
    button: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: true,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: false,
    beard: true,
    button: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'hazel',
    glasses: true,
    hat: true,
    necklace: false,
    earrings: false,
    phone: false,
    smokinghabit: false,
    patterns: true,
    beard: false,
    button: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

// Draws the game board
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

// This function to start (and restart) the game, resets guess counter + timer
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  askName()
  sound()
  numberOfGuesses = 0
  totalGuesses.innerText = 0
  timePassed = 0
  timePassed.innerText = 0
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  //add one attribute to array "hairColor" instead of "hair"
  if (category === 'hair') {
    currentQuestion = {
      attribute: 'hairColor',
      value,
      category
    }
  } else if (category === 'eye') {
    currentQuestion = {
      attribute: 'eyeColor',
      value,
      category
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      // this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category
   }
  }
  numberOfGuesses++
  totalGuesses.innerText = numberOfGuesses
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]
  filterCharacters(keep)
 // Compare the currentQuestion with the secret person.
// See if we should keep or remove people based on that
// Then invoke filterCharacters
}
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
// Show the correctSwal.fire message for different categories
const { attribute, category, value } = currentQuestion

if (category === 'accessories') {
  if (keep) {
    sound()
    Swal.fire(`Yes! Guess is correct, secrect person wears ${attribute}!`, `Keep all who wears ${attribute}.`)
  } else {
    sound()
    Swal.fire(`Wrong guess, the person doesn't wear ${attribute}`,`Remove all who wears ${attribute}.`)
  }
} else if (category === 'hair') {
  if (keep) {
    sound()
    Swal.fire(`Yes, the person has ${value} hair!`) 
  } else {
    sound()
    Swal.fire(`No, the person hasn't ${value} hair!`)
  }
} else if (category === 'eye') {
  if (keep) {
    sound()
    Swal.fire(`Yes! Guess is correct, the person has ${value} eyes!`, `Keep all who has ${value} eyes.`)
  } else {
    sound()
   Swal.fire(`Wrong guess, the person doesn't have ${value} eyes.`, `Remove all that has ${value} eyes.`)
  }
} else if (category === 'other') {
  if (keep) {
    sound()
   Swal.fire(`Yes! Guess is correct, the person has a ${attribute}.`, `Keep all who has a ${attribute}.`)
} else {
  sound()
   Swal.fire(`Wrong guess, the person doesn't have a ${attribute}.`, `Remove all that has a ${attribute}.`)
  } 
}
  // filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
    // remember the confirm() ?
    // If the player wants to guess, invoke the checkMyGuess function.
 
  Swal.fire({
    title: 'Are you sure?',
    text: `Secrect person is ${personToConfirm}!`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: "Yes, let's go!"
  }).then((result) => {
    if (result.isConfirmed) {
      checkMyGuess(personToConfirm);
    }
  })
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    soundWin()
    winOrLoseText.innerHTML = `You are a genius!!  ${personToCheck} is a secrect person.`
  } else {
   soundLoose()
    winOrLoseText.innerHTML = `${personToCheck} is wrong guess. It was ${secret.name}.`
  }
  //display the win/looser message
  winOrLose.style.display = 'flex'
  //hide the board while displaing win/loose
  board.style.display = 'none'
}

//add sound
const sound = ()=>{
  let audio = new Audio('./audio/multi.mp3');
  audio.play();
}

const soundWin = ()=>{
  let audio = new Audio('./audio/win.wav');
  audio.play();
}

const soundLoose = ()=>{
  let audio = new Audio('./audio/loose.wav');
 audio.play();
}

//add user name
const askName = () => {
  Swal.fire({
    title: 'Enter username:',
    input: 'text', 
    confirmButtonText: 'OK',
  }).then((result) => {
    if (result.isConfirmed) {
      if(result.value == ""){
        document.getElementById("name").innerHTML = `Player name: Guest`;
      }else{
        document.getElementById("name").innerHTML = `Player name: ${result.value}`;
      }
    }
  })
}

// Sets the timer
setInterval(() => {

  timePassed++

  let minutes = Math.floor(timePassed / 60)
  let seconds = timePassed - (minutes * 60)
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  time.innerText = `${minutes}:${seconds}`

}, 1000)

// Invokes the start function when website is loaded

 start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', () => selectQuestion())
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => {
  location.reload()
})