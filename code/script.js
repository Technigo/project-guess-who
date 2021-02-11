// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findoutButton = document.getElementById('filter')
const winOrLoose = document.getElementById('winOrLose');
const winOrLooseText = document.getElementById('winOrLoseText');
const playAgainButton = document.getElementById('playAgain');

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
let secret, currentQuestion, charactersInPlay, numberOfGuesses;

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
          <button id=guessButton class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  });
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
  numberOfGuesses = 0;
  console.log(secret);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: questions.value,
      // 👆 add the value from the input here
      category: category,
    };
  } else if (category === 'eye color') {
    // Set this up your self
    currentQuestion = {
      attribute : 'eyeColor',
      value: questions.value,
      category: category,
    };
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: questions.value,  //Lagt till optionValue som attribute. 
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    };
  } else if (category === 'other') {
    currentQuestion = {
      attribute: questions.value,
      value: true, 
      category: category,
    };
    // Set this up your self (should be same structure as above)
  }
  console.log("current question:" + currentQuestion.attribute + " " + currentQuestion.value + " "+ currentQuestion.category);
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  selectQuestion();
  numberOfGuesses++;
  if (currentQuestion.value === secret[currentQuestion.attribute]) {
    filterCharacters(true); 
    console.log('this is true');
  } else {
    filterCharacters(false); 
    console.log('this is not true');
  } 
}

 
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Show the correct alert message for different categories
  const category = currentQuestion.category;
  const attribute = currentQuestion.attribute;
  const value = currentQuestion.value;
  console.log("filter question:" + category + " " + attribute + " "+ value);

  if (category === 'hair color'){
      if (keep) {
        alert( `Yes, the person has ${value} hair color ! Keep all with ${value} hair color`);
      } else {
        alert ( `No, the person has not ${value} hair color ! Remove all with ${value} hair color`);
      }
  } else if (category === 'eye color') {
      if (keep) {
        alert( `Yes, the person has ${value} eye color ! Keep all with ${value} eye color`);
      } else {
        alert ( `No, the person has not ${value} eye color ! Remove all with ${value} eye color`);
      }
  } else if (category === 'accessories') {
      if (keep) {
        alert( `Yes, the person wears ${attribute}! Keep all that wears ${attribute}`);
      } else {
        alert( `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}`);
      }
  } else if (category === 'other') {
      if (keep) {
        alert (`Yes, the person is ${attribute}, keep all that are ${attribute}.`);
      } else {
        alert (`No, the person is not a ${attribute}, remove all persons that are ${attribute}!`);
      }
  }  
  // filter to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value);
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value);
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let confirmAnswer = window.confirm(`Are you sure you want to guess on ${suspect}`);
  console.log("guess =" + suspect);
   // If the player wants to guess, invoke the checkMyGuess function.
  if (confirmAnswer) {
    checkMyGuess(suspect);
  } else {
    alert(`Ok. Keep guessing`);
   }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  //Checks if the suspect is the same as the secret person's name
  console.log("You guessed "+ numberOfGuesses + " times");
  if (suspect === secret.name) {
    //Shows the win or lose section, hides the game board
    board.classList.add("game-board-hidden");
    winOrLoose.style = "display:block;"
    winOrLooseText.innerText  = `You won. ${suspect} is the correct person. You got it after ${numberOfGuesses} filtrations.`;
  } else {
  /*  alert (`Sorry, ${suspect} is wrong`);
    restartGame(); */
    board.classList.add("game-board-hidden");
    winOrLoose.style = "display:block;";
    winOrLooseText.innerText  = `You failed. ${suspect} is the not the correct person ${secret.name} is the correct person.`;
  }
}

const restartGame =() => {
  console.log("restart game")
  winOrLoose.style = "display: none;"
  board.classList.remove("game-board-hidden");
  start();
}

// Invokes the start function when website is loaded
start();



// All the event listeners
restartButton.addEventListener('click', start);
findoutButton.addEventListener('click', () => checkQuestion());
playAgainButton.addEventListener('click', () => restartGame());





