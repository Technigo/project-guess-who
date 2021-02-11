// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLosePage = document.getElementById('winOrLose')

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
  setSecret();
  generateBoard();
  winOrLosePage.classList.toggle("hidden");
  console.log("hello")
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const selectedElementValue = questions.options[questions.selectedIndex].value;
  const selectedElementInnerText = questions.options[questions.selectedIndex].innerText;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: selectedElementValue,
      innerText: selectedElementInnerText,
      // 👆 add the value from the input here
      category: category,
    }
  } else if (category === 'eye color') {
    // Set this up your self
    currentQuestion = {
      attribute: 'eyeColor',
      value: selectedElementValue,
      innerText: selectedElementInnerText,
      // 👆 add the value from the input here
      category: category,
    }
    // 👆 add the value from the input here
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: selectedElementValue,
      innerText: selectedElementInnerText,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
      attribute: selectedElementValue,
      innerText: selectedElementInnerText,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {

  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  const secretValue = secret[currentQuestion.attribute];
  if (secretValue === currentQuestion.value) {
    filterCharacters(true, currentQuestion);
    } else {
    filterCharacters(false, currentQuestion);
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep, { attribute, innerText, value, category }) => {
  // Show the correct alert message for different categories

  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${innerText}! Keeping all that wears ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the person doesn't wear ${innerText}! Removing all that wears ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person has a ${innerText}! Keeping all that has a ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the person doesn't have a ${innerText}! Removing all that has a ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all persons with yellow hair"
      alert(
        `Yes, the person has ${innerText}! Keeping all that has ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      // alert popup that says something like: "NO, the person doesnt have yellow hair! Remove all persons with yellow hair"
      alert(
        `No, the person doesn't have ${innerText}! Removing all that has ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  }
  generateBoard();
  // filter to keep or remove based on the keep variable.
    // charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    // // or 
    // charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const userGuess = confirm(`Are you sure you want to guess ${suspect}`);
  if (userGuess) {
    checkMyGuess(suspect);
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
    // 1. Check if the suspect is the same as the secret person's name
    if (suspect === secret.name) {
      winOrLoseText.innerText = "WOOP WOOP, that is correct!"
      let winOrLose = document.getElementById("winOrLose")   
      winOrLose.style.display = "block" 
    } else {
      winOrLoseText.innerText = "NOOOOO, that's wrong!"
      let winOrLose = document.getElementById("winOrLose")   
      winOrLose.style.display = "block" 
    }
    
    const playAgain = document.getElementById("playAgain")
      playAgain.addEventListener("click", () => {
      winOrLose.style.display = "none"
    });
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  }

// Invokes the start function when website is loaded´
start();

console.log(restartButton);
// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
filterBtn.addEventListener('click', checkQuestion);