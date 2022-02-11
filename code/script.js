// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose');
const playAgain = document.getElementById('playAgain');
const winOrLoseText = document.getElementById('winOrLoseText')
// Array with all the characters, as objects
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

// Global variables
let secret
let currentQuestion
let charactersInPlay
 let winSound = new Audio('sounds/win.wav');
winSound.volume = 1
let loseSound = new Audio('sounds/lose.wav');
loseSound.volume = 1
let playAgainSound = new Audio('sounds/playgain.wav');
playAgainSound.volume = 1
let correctSound =  new Audio('sounds/correctanswer.wav');
correctSound.volume = 1
let wrongSound = new Audio('sounds/wronganswer.wav');
wrongSound.volume = 1 
// Draw the game board
const generateBoard =() => {
  board.innerHTML = '';
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')"> Guess </button>
        </div>
      </div>
    `;
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
  setSecret();
  generateBoard();
  winOrLose.style.display = 'none';
  board.style.display = 'flex';
 
}
// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  const value = questions.value;
  // We also need a variable that stores the actual value of the question we've selected.
    
    currentQuestion = {
      category: category,
      value: value,
  };

};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log('check')
  const { category, value } = currentQuestion;
  let keep = false;
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    keep = value === secret[category];
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value);
  }
  filterCharacters(keep);
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      correctSound.play()
      Swal.fire(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      
    } else {
      wrongSound.play()
      Swal.fire(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      correctSound.play()
      Swal.fire(`Yes, the person is a ${value}!`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      wrongSound.play()
      Swal.fire(`No, the person is not a ${value}!`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    } 
  } else if (category === 'hair') {
    if (keep) {
      correctSound.play()
      Swal.fire(`Yes, the person has ${value} hair! Keep all people that have ${value} hair `)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      wrongSound.play()
      Swal.fire(`No, the person does not have ${value} hair! Remove all people that have ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
     } else if (category === 'eyes') {
      if (keep) {
        correctSound.play()
        Swal.fire(`Yes, the person has ${value} eyes! keep all people that have ${value} eyes`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        wrongSound.play()
        Swal.fire(`No, the person does not have ${value} eyes! Remove all people that have ${value} eyes`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    }
      // Invokes the function to redraw the board with the remaining people.
    generateBoard();
  }

  


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (confirmPerson) => {
  console.log('Guess correct')
  let playerGuessConfirm = Swal.fire({  
   title: 'Do you want to confirm your choice or Try again?',
    showDenyButton: true,    
    confirmButtonText: `Confirm`,  
    denyButtonText: `Try Again`,
  })
  .then((result) => {  
    /* Read more about isConfirmed, isDenied below */  
      if ((result.isConfirmed)) {    
        checkMyGuess(confirmPerson);
      } else if (result.isDenied) {    
        Swal.fire('Good Luck! Keep guessing 🤔');
        setTimeout(() => playAgainSound.play(), 200);
     }
  });

}
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  


// If you confirm, this function is invoked
const checkMyGuess = (confirmPerson) => {
  //Check if the personToCheck is the same as the secret person's name
    // Set a Message to show in the win or lose section accordingly
  if (confirmPerson === secret.name) {
    winOrLoseText.innerHTML = `You guessed it right. ${confirmPerson} is the correct answer`
    winSound.play();
  }
  else {
  winOrLoseText.innerHTML = `You guessed it wrong 😫. ${confirmPerson} is the correct answer`
  loseSound.play();
  }
  winOrLose.style.display = 'flex';  // Show the win or lose section
  board.style.display = 'none';   //  Hide the game board 
  };

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click',() => {
  playAgainSound.play();
 start()
});
findOutButton.addEventListener('click', checkQuestion);
questions.addEventListener('change', selectQuestion);
playAgain.addEventListener('click',() =>{
  playAgainSound.play();
  setTimeout(() => start(), 500)
});
