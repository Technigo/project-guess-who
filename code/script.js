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
    name: 'Lars',
    img: 'images2/Lars.jpg',
    hatColor: 'darkBlue',
    shirtColor: 'black',
    glasses: false,
    moustache: true,
    scarf: true,
    unibrow: false
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
    name: 'Liam',
    img: 'images2/Liam.jpg',
    hatColor: 'ochre',
    shirtColor: 'white',
    glasses: true,
    moustache: false,
    scarf: false,
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
    hatColor: 'ochre',
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
    hatColor: 'redAndWhite',
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
    name: 'Linnéa',
    img: 'images2/Linnea.jpg',
    hatColor: 'none',
    shirtColor: 'white',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Logan',
    img: 'images2/Logan.jpg',
    hatColor: 'whiteAndBlack',
    shirtColor: 'checkered',
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
    hatColor: 'ochre',
    shirtColor: 'checkered',
    glasses: true,
    moustache: true,
    scarf: false,
    unibrow: true
  },
  {
    name: 'Lynn',
    img: 'images2/Lynn.jpg',
    hatColor: 'darkBlue',
    shirtColor: 'yellow',
    glasses: false,
    moustache: false,
    scarf: false,
    unibrow: false
  },
  {
    name: 'Lola',
    img: 'images2/Lola.jpg',
    hatColor: 'ochre',
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
        <p>${person.name}</p>
        <img class="person-image" src=${person.img} alt=${person.name}>
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

