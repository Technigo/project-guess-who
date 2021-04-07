// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const filterButton = document.getElementById('filter');
const filterCounter = document.getElementById('filterCounter');
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
];

// Global variables
let secret; 
let currentQuestion; 
let charactersInPlay; 
let countUserFiltering = 0;

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
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// Start (and restart) the game
const start = () => {
  winOrLose.style.display = 'none';            
  board.style.display = 'flex';
  countUserFiltering = 0;            
  filterCounter.innerHTML = `NUMBER OF QUESTIONS ASKED: ${countUserFiltering}`;
  charactersInPlay = CHARACTERS;         
  generateBoard();                         
  setSecret();
  selectQuestion();
};

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;    
  const selectedValue = questions.options[questions.selectedIndex].value;   
  
  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: selectedValue, 
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
    const singular = selectedValue === 'pet' || selectedValue === 'hat';    
    currentQuestion = {
      attribute: selectedValue,   
      value: true,            
      category: category,
      text: `${singular ? 'a ' : ''}${selectedValue}`, 
    }
  } 
};

// Invoked when you click on 'Find Out'.
const checkQuestion = () => {
  let keep;
  if (currentQuestion.value === secret[currentQuestion.attribute]) {      
    keep = true;       
  } else {
    keep = false;
  }

  filterCharacters(keep);      
  incrementCount();
};

// It'll show an alert message to the user, filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  if (keep) {
    alert(                                                                                                
      `Yes, the person has ${currentQuestion.text}! Keep all that have ${currentQuestion.text}.`  
    );
    charactersInPlay = charactersInPlay.filter(
      (person) => person[currentQuestion.attribute] === currentQuestion.value
    );
  } else {
    alert(
      `No, the person doesn't have ${currentQuestion.text}! Remove all that have ${currentQuestion.text}.`  
    );
    charactersInPlay = charactersInPlay.filter(
      (person) => person[currentQuestion.attribute] !== currentQuestion.value
    );
  }

  generateBoard();   
};

// Keeps track of how many times the user clicks the "Find out"-button, i.e. filtering
const incrementCount = () => {
  countUserFiltering += 1;
  filterCounter.innerHTML = `NUMBER OF QUESTIONS ASKED: ${countUserFiltering}`;
};

// When clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const confirmGuess = confirm(`Are you sure you want to make a guess on ${suspect}?`);        
  if (confirmGuess == true) {
    checkMyGuess(suspect);     
  } 
};

// Invokes if the user confirms guess
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {                                                          
    winOrLoseText.innerHTML = `You guessed correctly! 🤩 🎉 It is ${suspect}!`;           
  } else {
    winOrLoseText.innerHTML = `You guessed incorrectly on ${suspect}! 🤔 It was ${secret.name}!`;
  }
  
  winOrLose.style.display = 'flex';      
  board.style.display = 'none';          
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
playAgain.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
filterButton.addEventListener('click', checkQuestion);