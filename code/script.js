// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartBtn = document.getElementById('restart')
const playAgain = document.getElementById('playAgain')
const letSee = document.getElementById('filter')

// Array with all the characters, as objects -    can I also work with true or false?
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
    accessories: ['glasses', 'necklace'],
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
    accessories: ['glasses', 'necklace'],
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
    accessories: ['glasses', 'hat', 'necklace'],
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

// Global variables
let secret
let currentQuestion
let charactersInPlay

// Game board
const generateBoard = () => {
  board.innerHTML = '';
  charactersInPlay.forEach(person => {
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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function starts and restart the game.
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  
  //What else should happen when we start the game? 
  //   Clears the game board fron the letSee-page
  winOrLose.style.display = 'none';
  board.style.display = "flex";

  generateBoard();
  setSecret();
  console.log(secret.name);
}

// this sets the currentQuestion objects when selecting object in meny
const selectQuestion = () => {
    // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  // Varible with actual value of the question selected.
  const value = questions.options[questions.selectedIndex].value

  // const value
  currentQuestion = {
    category: category.toLowerCase(),
    value: value.toLowerCase(),
  }
}

// This function is invoked when you click on the 'Find Out' button.
const checkQuestion = () => {
  // Compare the urrentQuestion  details ->  secret person details (hair/eyes etc)
  const { category, value } = currentQuestion
  
// Saves value varible -> keep varible
  let keep 
  if (category === 'eyes' || category === 'hair') {
    keep = value === secret[category];
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value); 
  }
  // Invoking the function filterCharacters with the varible keep
  filterCharacters(keep);
}
// It´ll filter the characters array and redraw the game board.
// Alert popup that tells if´s: yes - else: no
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

    if (category === 'accessories') {
      if (keep) {
        alert(`Yessss, that person wears ${value}! save all that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      } else {
        alert(`Nooo, that person doesn't wear ${value}! Remove all people who wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      }
   }
    else if (category === 'other') {
      if (keep) {
        alert(`Yeeeep! That´s right, the person is a ${value}! Keep all ${value}s here!`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      } else {
        alert(`Nope! The person is not a ${value}! Remove all of the ${value}s`);
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      }
    }

    else {
      if (keep) {
        alert(`Yes, the person have ${value} ${category}! Keep all people that have ${value} ${category}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      } else {
        alert(`Noo! The person do not not have ${value} ${category}. Remove all the ones with ${value} ${category}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      }
    }
   
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
  //generetes the board 
  generateBoard();  
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  //Confirms!
  const confirmGuess = confirm(`Are you really sure about this? ${personToConfirm}?`);
  // If the player wants to guess, invoke the checkMyGuess function.   
  if (confirmGuess) { //confirms  = true if user click yes
       checkMyGuess(personToConfirm); 
    }
} 

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {      
  // 2. Set a Message to show in the win or lose section accordingly
  winOrLose
  Text.innerHTML = `WOHOO! that´s right 🎈🎈🎈😃`; 
  } else {
    winOrLoseText.innerHTML = `BUHUU, YOU LOSE! 😢!`;
  }
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'; 
  // 4. Hide the game board
  board.style.display = 'none';   // hides the gameboard.
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartBtn.addEventListener('click', start) // restart button
letSee.addEventListener('click', checkQuestion) // found out button
questions.addEventListener('change', selectQuestion) // select dropdown
playAgain.addEventListener('click', start) // start over