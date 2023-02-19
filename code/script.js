// Ylva - All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('findOut')
const rightOrWrongText = document.getElementById('rightOrWrongText')
const rightOrWrongSection = document.getElementById('rightOrWrong')
const playAgainButton = document.getElementById('playAgain')
const secretImageAtCheck = document.getElementById('secretImage')
const nrOfQuestionsAllowed = document.getElementById('numberOfQuestions')
const gameTimer = document.getElementById('timer')

// Ylva - Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
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
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
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
    other: ['smoker']
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
    accessories: ['glasses'],
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
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
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

// Ylva - here are all the Global variables declared
let secret;
let currentQuestion;
let charactersInPlay;
let nrOfQuestionsAllowed;
let timeLeft;
let timerCountdown;
let playerName;

// Ylva - might add sound effects here if I have time later

// Ylva - Function for the timer function (to show double digits)
const paddedNumber = (number, length) => {
  let str = number + "";
  while (str.length < length) = "0" + str;
  return str;
};
// countdown- function and reset for the timer
const resetTimer = () => {
  timeLeft = 240; //4-minutes countdown for game - might make this longer

countDown = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(countDown);
    rightOrWrongText.innerHTML = "<p>Game Over</p>";
    rightOrWrong.style.display = "flex";
}
else {
  //showing the time left in minutes and seconds instead of default settings
let minutes = Math.floor(timeLeft / 60) % 60;
let seconds = timeLeft % 60;
gameTimer.innerHTML = paddedNumber(minutes, 4) + ":" + paddedNumber(seconds, 4) + " remaining";
}
timeLeft -= 1;
}, 1000);
};

// Draw the game board
const generateBoard = () => {
  board.innerHTML = '';
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
    `;
  });
};

// Ylva - Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
};

// Ylva - This function to start (and restart) the game - this also creates an array called charactersInPlay to be iterated
//through later, generates the cards of the characters and sets the secret character.
// This function also clears the RightOrWrongSection after right or wrong guess in the game
const start = () => {
  //This shows the first option as selected in the dropdown-menu
  questions.value = "";
  rightOrWrongSection.style.display = "none";
  secretImageAtCheck.innerHTML = "";
  nrOfQuestions = 5;
  resetTimer();
  questions.style.display = "block";
  document.getElementById('findOut').style.display = "block";
  document.getElementById('mainQuestion').innerText = "Does the person have...";
  document.getElemenetById('nameInput').value = "";
  
  // Ylva - Resets the counter of questions allowed
nrOfQuestionsAllowed.innerText = "You have 5 questions left";

//rightOrWrong.innerText += ` `;

  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
}

// This loads the board of the characters
generateBoard();

// Ylva - set secret person to be guessed by the user
setSecret();
console.log(secret);

// Ylva - setting the currentQuestion object when you select something in the dropdown - "Does the person have..."
const selectQuestion = () => {
  // The category variable is used to store what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // Ylva - this is a variable that stores the actual value of the question we've selected.
  const value = questions.value;
  // this above could also be written as:
  // const value = questions.options[questions.selectedIndex].value;

  // Ylva - This below is variables that stores the actual value of the current questions we've selected.
  currentQuestion = {
  category: category,
  value: value,
  };

 // Ylva - to check the values of the currentQuestion object
console.log(currentQuestion);
};

const playerNameSave = () => {
playerName = document.getElementById('nameInput').value;
console.log(playerName);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  if (nrOfQuestions > 1) {
    console.log(nrOfQuestions);
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that (true or false)
  // Then invoke filterCharacters
  if (secret[category] === 'hair' || category === 'eyes') {
    filterCharacters(true); //keep everyone with true according to hair/eye color
    
  } else if (category === 'accessories' || category === 'other') {
if (secret[category].includes(value)) === 'glasses') {

  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
    // Similar to the one above
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
  }

  // this line of code below is from Tuesdays Live Session - don't yet know where to put it or how to use it
  // this is an example of a callback function - ((function) => {})
  //const filteredCharacters = CHARACTERS.filter((singleCharacter) => {
    // if (singleCharacter.hair === "black") {
    // return singleCharacter;
// }
// });
// console.log(filteredCharacters);





  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
