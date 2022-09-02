

// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutBtn = document.getElementById('filter');
const winLoseScreen = document.getElementById('winOrLose');
const playAgainBtn = document.getElementById('playAgain');
const questionCounter = document.getElementById('number-of-questions');
//const guessButton = document.getElementById


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['artsy']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'white',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    other: ['smoker', 'haddok']
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
    accessories: ['glasses', 'beard'],
    other: ['bad-day']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'jewlery'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['artsy']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewlery'],
    other: ['artsy']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker', 'artsy']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat', 'beard'],
    other: ['smoker', 'artsy', 'bad-day']
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
    accessories: ['glasses', 'hat', 'beard'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'jewlery'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['artsy']
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
    accessories: ['glasses', 'jewlery'],
    other: ['bad-day', 'artsy']
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
    accessories: ['glasses', 'hat', 'jewlery'],
    other: ['artsy']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'white',
    eyes: 'brown',
    accessories: ['jewlery'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['bad-day']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['beard'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: ['bad-day']
  },
]

// Global variables
let secretPerson;
let currentQuestion;
let charactersInPlay;
let keep;
let questionsAsked;

// 'Randomly' select a person from the characters array and set as the value of the variable called secret
const setSecretPerson = () => {
  secretPerson = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secretPerson.name)
}


// Makes characters appear on the board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
    <div class="card">
    <img src=${person.img} alt=${person.name}>
    <p>${person.name}</p>
    <div class="guess">
    <span>Guess on ${person.name}?</span>
    <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
    </div>
    </div>
    `
  })
}

// This function will start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  //Assign pre-selected value to make it possible to ask for brown hair without selecting another options first.
  currentQuestion = {
    category: 'hair',
    value: 'brown'
  };
  setSecretPerson();
  generateBoard();
  //reset counter
  questionsAsked = 0;
  questionCounter.innerHTML = questionsAsked;
  
}
start();



// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  
  currentQuestion = {
    category: category,
    value: value,
  }
}

///////////////////TO DO!! Lägg till alert om huvuvida det man valt stämmer överens med hemlisen och vilka som plockas bort
// This function should be invoked when you click on 'Find Out' button.
/* const checkQuestion = () => {
   if (currentQuestion.category === 'hair') {
    //if selected question has category hair, check if selected value is the same as secretPersons
    if (currentQuestion.value === secretPerson.hair) {
      //keep all characters matching currentQuestion.value
      charactersInPlay = charactersInPlay.filter(character => character.hair === secretPerson.hair)
    } else {
      //discard all characters matching currentQuestion.value 
      charactersInPlay = charactersInPlay.filter(character => character.hair !== currentQuestion.value);
    }
  } else if (currentQuestion.category === 'eyes') {
    if (currentQuestion.value === secretPerson.eyes) {
      charactersInPlay = charactersInPlay.filter(character => character.eyes === secretPerson.eyes);
    } else {
      charactersInPlay = charactersInPlay.filter(character => character.eyes !== currentQuestion.value);
    }
  } else if (currentQuestion.category === 'accessories') {
      //TO DO! tom array är samma som no accessories
    if (secretPerson.accessories.includes(currentQuestion.value)) {
      charactersInPlay = charactersInPlay.filter(character => character.accessories.includes(currentQuestion.value));
    } else {
      charactersInPlay = charactersInPlay.filter(character => !character.accessories.includes(currentQuestion.value));
    }
  } else {
    //TO DO! tom array är samma som no other
    if (secretPerson.other.includes(currentQuestion.value)) {
    charactersInPlay = charactersInPlay.filter(character => character.other.includes(currentQuestion.value));
    } else {
      charactersInPlay = charactersInPlay.filter(character => !character.other.includes(currentQuestion.value));
    }
  }
  // Call generateBoard again to show only characters that are till in play.
  generateBoard();
} */


const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (category === 'hair'|| category === 'eyes') {
   //Per category, check if selected question has the same value as secretPersons. If so, variable keep gets the value of true
   if (secretPerson[category] === value) {
     keep = true;
   } else {
     keep = false;
   }
 } else {
     //TO DO! tom array är samma som no accessories
   if (secretPerson[category].includes(value)) {
     keep = true;
   } else {
     keep = false;
   }
 } 
 filterCharacters(keep);
}


const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (category === 'hair'|| category === 'eyes') {
    if (keep === true) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`
      );
      // If keep is true charactersInPlay are filtered so only characters who have the same value for current category are kept.
      charactersInPlay = charactersInPlay.filter(character => character[category] === value);
    }  else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`
      )
      // If keep is false charactersInPlay are filtered so all characters with the same value for selected category as the question asked are filterd from the array. 
      charactersInPlay = charactersInPlay.filter(character => character[category] !== value);
    }
  } else {
    if (keep === true) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      );
      charactersInPlay = charactersInPlay.filter(character => character[category].includes(value));
    }  else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      )
      charactersInPlay = charactersInPlay.filter(character => !character[category].includes(value));
    }
  } 
  // Run function to refresh board with removed characters
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  console.log(`guessing on ${personToConfirm}`); 
  if (confirm(`Do you want to confirm your guess?`) === true) {
    checkMyGuess(personToConfirm);
  } else {
    alert('Okay, guess again!')
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secretPerson.name) {
    alert(`You're right! ${personToCheck} is the secret person! You win!`)
    //clear the board
    board.innerHTML = ''
    // Changing winLoseScreens display attribute from none to flex, makes it visible, 
    winLoseScreen.style.display='flex';
  } else {
    alert(`Sorry, ${personToCheck} is not the secret person. You lose!`)
    board.innerHTML = ''
    winLoseScreen.style.display='flex';
  }
}

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutBtn.addEventListener('click', () => {
  questionsAsked++;
  checkQuestion();
  questionCounter.innerHTML = questionsAsked;
})
playAgainBtn.addEventListener('click', () => {
  winLoseScreen.style.display='none';
  start();
})