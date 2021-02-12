// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const winOrLoseText = document.getElementById("winOrLoseText")
const winOrLoseSection = document.getElementById("winOrLose")

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
];

// Global variables
let currentQuestion
let secret


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

function playAgain () {
  winOrLoseSection.style.display = "none";
  winOrLoseText.innerHTML = "";
  board.style.display = 'flex';
  start();
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
generateBoard()
setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  
  // We also need a variable that stores the actual value of the question we've selected.
const value = questions.value
console.log(value)
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      // 👆 add the value from the input here
      category: category,
    };

  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      category: category,
    };
    // Set this up your self
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    };

  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    };
    // Set this up your self (should be same structure as above)
  };
  console.log(currentQuestion)
  };
  
// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
if (currentQuestion.attribute === "haircolor") {
  if (currentQuestion.value === secret.hairColor) {
      keep = true;
    

  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  } else {
    keep = false;
}

} else if (currentQuestion.attribute === "eyecolor") {
  if (currentQuestion.value === secret.eyeColor) {
    keep = true
  } else {
    keep = false;
  }
} else if (currentQuestion.attribute === "hat") {
  if (currentQuestion.value === secret.hat) {
    keep = true
  } else {
    keep = false;
  }
} else if (currentQuestion.attribute === "glasses") {
  if (currentQuestion.value === secret.glasses) {
    keep = true
  } else {
    keep = false;
  }
 } else {
  if (currentQuestion.value === secret.smoker) {
    keep = true
  } else {
    keep = false;
  }
}
group = currentQuestion.category;
filterCharacters(keep, group);
console.log(keep);
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep, group) => {
  // Show the correct alert message for different categories

  if (group === 'accessories') {
    if (keep) { 
      alert(
        `Oh yes, the person wears ${currentQuestion.attribute}! Keeping all persons that wears ${currentQuestion.attribute}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
    } else {
      alert(
        `Oh no, the person doesn't wear ${currentQuestion.attribute}! Removing all persons that wears ${currentQuestion.attribute}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
    }
  } else if (group === 'hair color') {
    // Similar to the one above
    if (keep) {
      alert(
      `Oh yes, the person has ${currentQuestion.value} hair! Keeping all persons with ${currentQuestion.value} hair.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
    } else {
      alert(
      `Oh no, the person doesn't have ${currentQuestion.value} hair! Removing all persons with ${currentQuestion.value} hair.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
    }
  }

  else if (group === 'eye color') {
    // Similar to the one above
    if (keep) {
      alert(
      `Oh yes, the person has ${currentQuestion.value} eyes! Keeping all persons with ${currentQuestion.value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
    } else {
      alert(
      `Oh no, the person doesn't have ${currentQuestion.value} eyes! Removing all persons with ${currentQuestion.value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
    }
  }
   else if (group === 'other') {
    // Similar to the one above
    if (keep) {
      alert(
      `Oh yes, the person is a ${currentQuestion.attribute}! Keeping all persons who's not a ${currentQuestion.attribute}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
    } else {
      alert(
      `Oh no, the person isn't a ${currentQuestion.attribute}! Removing all persons who are a ${currentQuestion.attribute}.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
    }
  }

  // filter to keep or remove based on the keep variable.
  generateBoard()
  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const isConfirmed = confirm(`Is ${suspect} your answer?`)

  if (isConfirmed) {
    checkMyGuess(suspect);
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect == secret.name) {
    winOrLoseText.innerHTML = "You won!"
  }

  else {
    winOrLoseText.innerHTML = "You lost!"
  }

  winOrLoseSection.style.display = "block";
  board.style.display = "none";
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
playAgainButton.addEventListener('click', playAgain);