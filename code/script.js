// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const playAgainButton = document.getElementById('playAgain')
const findOutButton = document.getElementById('filter')
const winOrLoseText = document.getElementById("winOrLoseText")
const winOrLoseSection = document.getElementById("winOrLose")

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hatColor: 'pink',
    shirtColor: 'checkered',
    glasses: true,
    moustache: true,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hatColor: 'pink',
    shirtColor: 'black',
    glasses: true,
    moustache: true,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hatColor: 'darkBlue',
    shirtColor: 'black',
    glasses: false,
    moustache: true,
    scarf: true,
    unibrow: false
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hatColor: 'black',
    shirtColor: 'yellow',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hatColor: 'ochre',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hatColor: 'beige',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hatColor: 'black',
    shirtColor: 'yellow',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hatColor: 'ochre',
    shirtColor: 'checkered',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hatColor: 'green',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hatColor: 'redAndWhite',
    shirtColor: 'checkered',
    glasses: true,
    moustache: true,
    scarf: true,
    unibrow: false
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hatColor: 'beige',
    shirtColor: 'black',
    glasses: true,
    moustache: true,
    scarf: true,
    unibrow: false
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hatColor: 'beige',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hatColor: 'green',
    shirtColor: 'white',
    glasses: true,
    moustache: true,
    scarf: true,
    unibrow: false
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hatColor: 'white',
    shirtColor: 'checkered',
    glasses: false,
    moustache: true,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hatColor: 'green',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hatColor: 'pink',
    shirtColor: 'black',
    glasses: false,
    moustache: true,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hatColor: 'black',
    shirtColor: 'black',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hatColor: 'black',
    shirtColor: 'yellow',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hatColor: 'beige',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hatColor: 'ochre',
    shirtColor: 'checkered',
    glasses: true,
    moustache: true,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hatColor: 'darkBlue',
    shirtColor: 'yellow',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hatColor: 'ochre',
    shirtColor: 'white',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hatColor: 'black',
    shirtColor: 'white',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hatColor: 'black',
    shirtColor: 'yellow',
    glasses: true,
    moustache: true,
    scarf: false,
    unibrow: false
  },
]

// Global variables

let currentQuestion 

let secret  

//let person = CHARACTERS.

// Draw the game board
function generateBoard() {
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

function playAgain() {
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
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  console.log(secret);
  // Wmoustache else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const chosenValue = questions.options[questions.selectedIndex].value
  console.log(chosenValue);
  // This variable stores wmoustache option group (category) the question belongs to.
  // We also need a variable tmoustache stores the actual value of the question we've selected.
  

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hatColor',
      value: chosenValue,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'shirtColor',
      value: chosenValue,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
    attribute: chosenValue,
      // 👆 this is the property of the booleans such as smoke, glasses and moustache. add the value from the input here
    value: true, // we're asking if this person wears a moustache for exaple, so always true in the question.
    category: category,
    }
  } else {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
    attribute: chosenValue,
    value: true, 
    category: category,
    }
  }

//For testing
  console.log(currentQuestion);
  console.log(currentQuestion.value);
 
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
if (currentQuestion.attribute === "hatColor") {
    if (currentQuestion.value === secret.hatColor) {
      keep = true;
      

      //Compare the currentQuestion with the secret person.
    //See if we should keep or remove people based on tmoustache
    //Then invoke filterCharacters
  } else {
    keep = false;
  }
}
else if (currentQuestion.attribute === "shirtColor") {
  if (currentQuestion.value === secret.shirtColor) {
    keep = true;
  } else {
    keep = false;
  }
}
else if (currentQuestion.attribute === "glasses") {
  if (currentQuestion.value === secret.glasses) {
    keep = true;
  } else {
    keep = false;
  }
}
else if (currentQuestion.attribute === "moustache") {
  if (currentQuestion.value === secret.moustache) {
    keep = true;
  } else {
    keep = false;
  }
} else {
  if (currentQuestion.value === secret.scarf) {
    keep = true;
  } else {
    keep = false;
  }
}
group = currentQuestion.category;
filterCharacters(keep, group);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep, group) => {
  console.log(group);
  
  // Show the correct alert message for different categories
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all tmoustache wears ${currentQuestion.attribute}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all tmoustache wears ${currentQuestion.attribute}!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
  } else if (group === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${currentQuestion.attribute}! Keep all tmoustache are ${currentQuestion.attribute}s!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `No, the person isn't a ${currentQuestion.attribute}! Remove all tmoustache are a ${currentQuestion.attribute}s!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
    // Similar to the one above
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${currentQuestion.value} ${currentQuestion.category}! Keep all tmoustache have ${currentQuestion.value} ${currentQuestion.category}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `No, the person doesn't have ${currentQuestion.value} ${currentQuestion.category}! Remove all tmoustache have ${currentQuestion.value} ${currentQuestion.category}!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
  }

  // filter to keep or remove based on the keep variable.
  
    
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm tmoustache they want to make a guess.
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
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = "You won, you genius you!"
  }

  else {
    winOrLoseText.innerHTML = "You lost!"
  }
  winOrLoseSection.style.display = "block";
  board.style.display = 'none';
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
playAgainButton.addEventListener('click', playAgain);
questions.addEventListener('change', selectQuestion );
findOutButton.addEventListener('click', checkQuestion);

