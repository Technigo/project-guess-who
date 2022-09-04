// All the DOM selectors stored as short variables
const restartBtn = document.getElementById('restart');
const questions = document.getElementById('questions');
const findOutBtn = document.getElementById("filter");
const board = document.getElementById("board");
const winOrLoseWrapper = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgainBtn = document.getElementById("playAgain");
const count = document.getElementById('count');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    occupation: ["developer", "student"]
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    occupation: ["teacher"]
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    occupation: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    occupation: ["student"]
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    occupation: ["barista"]
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    occupation: ["artist"]
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    occupation: ["hairdresser"]
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    occupation: ["developer"]
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    occupation: ["artist"]
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    occupation: ["retired"]
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    occupation: ["barista"]
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    occupation: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    occupation: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    occupation: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    occupation: ["developer"]
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    occupation: ["hairdresser"]
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    occupation: ["artist"]
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    occupation: ["teacher"]
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    occupation: ["developer"]
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    occupation: ["artist"]
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    occupation: ["retired"]
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    occupation: ["artist"]
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    occupation: ["student"]
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    occupation: ["developer"]
  },
]

// Global variables
let secret;
let currentQuestion;
let charactersInPlay; 
//slet numberOfGuesses = 5;

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
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secret);
}  

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be All the characters to start with
  charactersInPlay = CHARACTERS;
  winOrLoseWrapper.style.display = "none";
  board.style.display = "flex";

  // What else should happen when we start the game?
  setSecret(); // select the person to guess
  generateBoard(); //generate all cards
  selectQuestion();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  console.log(value);

  currentQuestion = {
    category: category,
    value: value
  }
  console.log(currentQuestion);
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  selectQuestion();
  const {category, value} = currentQuestion 
  let keep;

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  if (category === "hair" || category === "eyes" ) {
    // if the secret person's hair value matches with the question's value
    if (secret[category] === value){
      //filterCharacters(true);
      keep = true;
    } else {
      //filterCharacters(false);
      keep = false;
    }
  } else if (category === "accessories" || category === "occupation") {    
    if (secret[category].includes(value)) {
      //filterCharacters(true);
      keep = true;
    } else {
      //filterCharacters(false);
      keep = false;
    } 
  }

  filterCharacters(keep);
}


// It'll filter the characters array AND redraw the game board.
const filterCharacters = (keep) => {
  //selectQuestion();
  const {category, value} = currentQuestion;

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  // Show the correct alert message for different categories
  if (category === "accessories" ) {
    if (keep) { 
      alert (`Great 😎 This person wears ${value}! Keeping everyone wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert (`Oh no 😫 The person doesn't wear ${value}! We will remove everyone that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === "occupation") {
    if (keep) {
      alert (`Great 😎 This person is a ${value}! Keeping everyone that work as a ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      alert (`Oh no 😫 The person isn't a ${value}! We will remove everyone that work as a ${value}`)
    }
  } else if (category === "hair" || category === "eyes") {
    if (keep) {
      alert(`Great 😎 The person has ${value}! Keeping everyone that have ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      console.log(value);
      console.log(charactersInPlay);
    } else {
      alert(`Oh no 😫 The person doesn't have ${value}! We will remove everyone that has ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  } 

  // Invoke a function to redraw the board with the remaining people.
  generateBoard( );
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let playerGuessing = confirm(`Taking your guess on ${personToConfirm}?`);
  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuessing === true){
    checkMyGuess(personToConfirm);
  } else {
    alert ("Keep Rolling!");
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  winOrLoseWrapper.style.display = "flex";
  board.style.display = "none";

  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You got that right 😎`;
  } else {
    winOrLoseText.innerHTML = `Helaas pindakaas 🤪 The person is ${secret.name}`;
  }
  
}

// Invokes the start function when website is loaded
start();
generateBoard();
setSecret();

// All the event listeners
restartBtn.addEventListener('click', start);
playAgainBtn.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutBtn.addEventListener("click", checkQuestion,filterCharacters);


//which number did we pick 
//const selectedQuestionIndex = questions.selectedIndex;
// below value that's attached to the selected index. index 1 under this parent node is Yellow Hair 
// const selectedOption = questions.options.[question.selectedIndex]

