// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filter = document.getElementById('filter')
const winOrLose = document.getElementById('win-or-lose')
const winOrLoseText = document.getElementById('win-or-lose-text')
const playAgain = document.getElementById('play-again')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value;
  console.log(value, category);
   // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
 
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
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
      attribute: 'accessories',
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
      attribute: 'other',
      value: true, 
      category: category,
    }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  let keep
  if (currentQuestion.attribute === 'hairColor' && currentQuestion.value === secret.hairColor) {
    keep = true
  }
  else if (currentQuestion.attribute === "eyeColor" && currentQuestion.value === secret.eyeColor) {
    keep = true
  }
  else if (currentQuestion.attribute === "accessories" && currentQuestion.value === secret.accessories) {
    keep = true
  }

  else if (currentQuestion.attribute === "other" && currentQuestion.value === secret.other) {
    keep = true
  }
  else {
    keep = false
  }

  filterCharacters(keep);
  console.log(keep);
}
    //pass this on to the variable filterCharacter in an argument, like (keep).
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Show the correct alert message for different categories
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value;

  if (category === 'hair color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all with ${value} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} hair! Remove all with ${value} hair`
      )
    }
  } else if (category === 'eye color') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all with ${value} eyes`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all with ${value} eyes`
      )
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all that wears ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all that ${value}`
      )
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all ${value}s`
      )
    }
  }


  // filter to keep or remove based on the keep variable.
// charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
//     // or 
    // charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    if (keep) {
      charactersInPlay = charactersInPlay.filter(person => {
        return person[currentQuestion.attribute] === value; })
    } else {
      charactersInPlay = charactersInPlay.filter(person => {
        return person[currentQuestion.attribute] !== value})
    }

    generateBoard();
  // Invoke a function to redraw the board with the remaining people.

};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const confirmGuess = confirm('Are you sure you want to guess?');
  console.log(confirmGuess);

  if (confirmGuess === true) {
    checkMyGuess(suspect);
  } else {
    alert('Ok');
  }
}
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.


// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect.name === secret.name)  {
    alert('Thats right!')
  } else {
    alert ('Sorry, thats not the right answer')
  }
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion);
filter.addEventListener('click', checkQuestion);