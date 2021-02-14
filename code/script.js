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
    name: 'Lydia',
    img: 'images2/Lydia.jpg',
    hatColor: 'beige',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Lyndon',
    img: 'images2/Lyndon.jpg',
    hatColor: 'pink',
    shirtColor: 'black',
    glasses: true,
    moustache: true,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Louis',
    img: 'images2/Louis.jpg',
    hatColor: 'black',
    shirtColor: 'yellow',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Lars',
    img: 'images2/Lars.jpg',
    hatColor: 'dark blue',
    shirtColor: 'black',
    glasses: false,
    moustache: true,
    scarf: true,
    unibrow: false
  },
  {
    name: 'Liam',
    img: 'images2/Liam.jpg',
    hatColor: 'yellow',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Luke',
    img: 'images2/Luke.jpg',
    hatColor: 'pink',
    shirtColor: 'checkered',
    glasses: true,
    moustache: true,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Lana',
    img: 'images2/Lana.jpg',
    hatColor: 'black',
    shirtColor: 'yellow',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Linda',
    img: 'images2/Linda.jpg',
    hatColor: 'yellow',
    shirtColor: 'checkered',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Livia',
    img: 'images2/Livia.jpg',
    hatColor: 'green',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Leland',
    img: 'images2/Leland.jpg',
    hatColor: 'santa',
    shirtColor: 'checkered',
    glasses: true,
    moustache: true,
    scarf: true,
    unibrow: false
  },
  {
    name: 'Léon',
    img: 'images2/Leon.jpg',
    hatColor: 'beige',
    shirtColor: 'black',
    glasses: true,
    moustache: true,
    scarf: true,
    unibrow: false
  },
  { 
    name: 'Livingstone',
    img: 'images2/Livingstone.jpg',
    hatColor: 'beige',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Linnéa',
    img: 'images2/Linnea.jpg',
    hatColor: 'invisible',
    shirtColor: 'white',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'London',
    img: 'images2/London.jpg',
    hatColor: 'black',
    shirtColor: 'yellow',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Legolas',
    img: 'images2/Legolas.jpg',
    hatColor: 'black',
    shirtColor: 'black',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Lola',
    img: 'images2/Lola.jpg',
    hatColor: 'yellow',
    shirtColor: 'white',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Lee',
    img: 'images2/Lee.jpg',
    hatColor: 'black',
    shirtColor: 'white',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Logan',
    img: 'images2/Logan.jpg',
    hatColor: 'captains',
    shirtColor: 'checkered',
    glasses: false,
    moustache: true,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Lucie',
    img: 'images2/Lucie.jpg',
    hatColor: 'beige',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Lennon',
    img: 'images2/Lennon.jpg',
    hatColor: 'yellow',
    shirtColor: 'checkered',
    glasses: true,
    moustache: true,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Lynn',
    img: 'images2/Lynn.jpg',
    hatColor: 'dark blue',
    shirtColor: 'yellow',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Larry',
    img: 'images2/Larry.jpg',
    hatColor: 'pink',
    shirtColor: 'black',
    glasses: false,
    moustache: true,
    scarf: false,
    unibrow: false 
  },
  { 
    name: 'Lindsey',
    img: 'images2/Lindsey.jpg',
    hatColor: 'green',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Lenwood',
    img: 'images2/Lenwood.jpg',
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
        <img class="person-image" src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="small" onclick="guess('${person.name}')">Guess</button>
        </div>
        <p>${person.name}</p>
        <button class="small-mobile" onclick="guess('${person.name}')">Guess</button>
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
  // what else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const chosenValue = questions.options[questions.selectedIndex].value
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  

  if (category === 'hat') {
    currentQuestion = {
      attribute: 'hatColor',
      value: chosenValue,
      category: category,
    }
  } else if (category === 'shirt') {
    currentQuestion = {
      attribute: 'shirtColor',
      value: chosenValue,
      category: category,
    }
  } else if (category === 'other accessories') {
    currentQuestion = {
    attribute: chosenValue,
    value: true, 
    category: category,
    }
  } else if (category === 'facial hair') {
    currentQuestion = {
    attribute: chosenValue,
      // 👆 this is the property of the booleans such as smoke, glasses and moustache. add the value from the input here
    value: true, // we're asking if this person wears a moustache for exaple, so always true in the question.
    category: category,
    }
  } else {
    currentQuestion = {
    attribute: chosenValue,
    value: true, 
    category: category,
    }
  }
 
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  console.log(currentQuestion.attribute);
if (currentQuestion.attribute === "hatColor") {
  
    if (currentQuestion.value === secret.hatColor) {
      keep = true;
    //Compare the currentQuestion with the secret person.
    //See if we should keep or remove people based on that
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
else if (currentQuestion.attribute === "unibrow") {
  if (currentQuestion.value === secret.unibrow) {
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
} else if (currentQuestion.attribute === "glasses") {
  if (currentQuestion.value === secret.glasses) {
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
  
  // Show the correct alert message for different categories
  if (group === 'other accessories') {
    if (keep) {
      alert(
        `You said ${currentQuestion.attribute}?! Yes that's what the thief was wearing... Keep all suspects that wear ${currentQuestion.attribute}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `You said ${currentQuestion.attribute}?! No, that's not what I saw. Remove all suspects that wear ${currentQuestion.attribute}!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
  } else if (group === 'hat') {
    if (keep) {
      alert(
        `Yes, the hat I saw was ${currentQuestion.value}! Keep all suspects whose head wears some ${currentQuestion.value} hat!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `No, not ${currentQuestion.value}! Remove all suspects whose head wears some ${currentQuestion.value} hat!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
    
  } else if (group === 'shirt') {
    if (keep) {
      alert(
        `Yes, the car thief was wearing a ${currentQuestion.value} shirt! Keep all suspects that wear a ${currentQuestion.value} shirt!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `No, the car thief wasn't wearing a ${currentQuestion.value} shirt! Remove all suspects that wear a  ${currentQuestion.value} shirt!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
    
  } else {
    if (keep) {
      alert(
        `You said ${currentQuestion.attribute}?! Yes that's what the thief had... Keep all suspects that have a ${currentQuestion.attribute}!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `You said ${currentQuestion.attribute}?! No, that's not what I saw. Remove all suspects that have a ${currentQuestion.attribute}!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
  }

  // filter to keep or remove based on the keep variable.
  
    
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
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
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = "You caught the car thief! You get a free ride in your neighbour's 740!"
  }

  else {
    winOrLoseText.innerHTML = "The car thief is still running free! I guess no Volvo will be safe until there is a real detective in town..."
  }
  winOrLoseSection.style.display = "flex";
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

