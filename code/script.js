// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const filterButton = document.getElementById('filter');
const winOrLoseText = document.getElementById('winOrLoseText');
const winOrLose = document.getElementById('winOrLose');
const playAgain = document.getElementById('playAgain');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    clothesColor: 'green',
    glasses: true,
    hat: true,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    clothesColor: 'black',
    glasses: false,
    hat: true,
    jewelry: false,
    pet: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    clothesColor: 'yellow',
    glasses: false,
    hat: true,
    jewelry: false,
    pet: false,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    clothesColor: 'blue',
    glasses: false,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    clothesColor: 'green',
    glasses: true,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    clothesColor: 'black',
    glasses: true,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    clothesColor: 'green',
    glasses: true,
    hat: false,
    jewelry: true,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    clothesColor: 'striped',
    glasses: true,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    clothesColor: 'green',
    glasses: true,
    hat: false,
    jewelry: true,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    clothesColor: 'black',
    glasses: true,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    clothesColor: 'blue',
    glasses: true,
    hat: true,
    jewelry: false,
    pet: false,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    clothesColor: 'white',
    glasses: true,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    clothesColor: 'white',
    glasses: true,
    hat: true,
    jewelry: false,
    pet: false,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    clothesColor: 'yellow',
    glasses: false,
    hat: true,
    jewelry: true,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    clothesColor: 'striped',
    glasses: true,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    clothesColor: 'pink',
    glasses: false,
    hat: true,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    clothesColor: 'red',
    glasses: true,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    clothesColor: 'green',
    glasses: true,
    hat: false,
    jewelry: true,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    clothesColor: 'black',
    glasses: true,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    clothesColor: 'blue',
    glasses: true,
    hat: true,
    jewelry: true,
    pet: false,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    clothesColor: 'blue',
    glasses: false,
    hat: false,
    jewelry: true,
    pet: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    clothesColor: 'white',
    glasses: false,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    clothesColor: 'white',
    glasses: false,
    hat: false,
    jewelry: false,
    pet: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    clothesColor: 'green',
    glasses: true,
    hat: true,
    jewelry: false,
    pet: false,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay;

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
  });
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
}

// This function is to start (and restart) the game
const start = () => {
  winOrLose.style.display = 'none';        //Hide the winOrLose section on restart      
  board.style.display = 'flex';            //On restart, show the board again
  charactersInPlay = CHARACTERS;          // Here we're setting charactersInPlay array to be all the characters to start with
  generateBoard();                         // What else should happen when we start the game?
  setSecret();
  selectQuestion();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label    // This variable stores what option group (category) the question belongs to.
  const selectedValue = questions.options[questions.selectedIndex].value   // A variable that stores the actual value of the question we've selected.
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: selectedValue, // added the value from the input here
      category: category,
      text: `${selectedValue} hair`,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: selectedValue,
      category: category,
      text: `${selectedValue} eyes`,
    }
  } else if (category === 'color of clothes') {
    currentQuestion = {
      attribute: 'clothesColor',
      value: selectedValue,
      category: category,
      text: `${selectedValue} clothes`,
    }
  } else if (category === 'accessories' || category === 'other') {
    currentQuestion = {
      attribute: selectedValue,   // this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true,            // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
      text: `${selectedValue}`, 
    }
  } 
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  let keep;
  if (currentQuestion.value === secret[currentQuestion.attribute]) {      // Compare the currentQuestion with the secret person.
    keep = true;       // See if we should keep or remove people based on that
  } else {
    keep = false;
  }

  filterCharacters(keep);      // Then invoke filterCharacters
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Show an alert message for different categories and filter to keep or remove based on the keep variable.
  if (keep) {
    alert(
      `Yes, the person has ${currentQuestion.text}! Keep all that have ${currentQuestion.text}.`  //Se över texten här + lägg till .text efter varje currentQuestion
    );
    charactersInPlay = charactersInPlay.filter(
      (person) => person[currentQuestion.attribute] === currentQuestion.value
    );
  } else {
    alert(
      `No, the person doesn't have ${currentQuestion.text}! Remove all that have ${currentQuestion.text}.`  //Se över texten här + lägg till .text efter varje currentQuestion
    );
    charactersInPlay = charactersInPlay.filter(
      (person) => person[currentQuestion.attribute] !== currentQuestion.value
    );
  }

  generateBoard();   // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const confirmGuess = confirm(`Are you sure you want to make a guess on ${suspect}?`);        // store the interaction from the player in a variable in a confirm() 
  if (confirmGuess == true) {
    checkMyGuess(suspect)     // If the player wants to guess, invoke the checkMyGuess function.
  } 
}

// If user confirms guess, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {                                                          // 1. Check if the suspect is the same as the secret person's name
    winOrLoseText.innerHTML = `You guessed correctly! 🤩 🎉 It is ${suspect}!`           // 2. Set a Message to show in the win or lose section accordingly
  } else {
    winOrLoseText.innerHTML = `You guessed incorrectly on ${suspect}! 🤔 It was ${secret.name}!`
  }
  
  winOrLose.style.display = 'flex';      // 3. Show the win or lose section
  board.style.display = 'none';          // 4. Hide the game board
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
playAgain.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
filterButton.addEventListener('click', checkQuestion);