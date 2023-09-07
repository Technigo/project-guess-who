
// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
/* const guessBtn = document.querySelector(".guess") */
const refreshBtn = document.getElementById('refreshBtn')



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
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret); //Writes out the randomly selected secret person in the console for test
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  //1. The Board is loaded when site is loaded/reloaded. 
  generateBoard(); // shows the playing board
  setSecret();// chose a random character and set as secret
  selectQuestion(); //this will save the selected values into variables in the next function.

;}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // These variables stores what option group/category (hair, eyes, accessories, other) the question belongs to
  // and the actual value of the question selected.
  let category = questions.options[questions.selectedIndex].parentNode.label;
  console.log(category);
  let value = questions.options[questions.selectedIndex].value;
  console.log(value);

  currentQuestion = {
    category: category,
    value: value,
  };
  console.log(currentQuestion);
  //writes out the selcted category and value in console just for test
};


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  // Compares the currentQuestion details with the secret person details
  // in a different manner based on category (hair/eyes or accessories/others) since they are of different data types. 

  // After that we see if a charcter should be kept or removed.
  if (
    category === 'hair' ||
    category === 'eyes'
  ) {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
};
  
// This will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // This "if-statement" shows the correct alert message for different categories of questions. 
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))

    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s.`
      )
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))

      
    } else {
      alert(
        `No, the person isn't a ${value}! Remove all people that are ${value}s.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))

    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category} Keep all people with ${value} ${category}.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)    
    }
  }
    //This function invokes the board toreload with the filtered result from above. 
    generateBoard();
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  //if played clicks yes
  let guessed = confirm(`Are you sure you want to guess on ${personToConfirm}?`)
  if (guessed){
    let personToCheck = personToConfirm; //variable that saves the character the player has guessed on. 
    checkMyGuess(personToCheck);
  }
  //if player clicks cancel
  else {
    alert("Ok, not sure yet? Let's continue playing!")

  }


}

// If you confirm the guess, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name){
    winOrLoseText.innerHTML = `${secret.name}  was totally correct! 😃 <br>Well done! <br><img class="secret-revealed-img" src="${secret.img}"/>`;
    // Show the win or lose section
    winOrLose.style.display = 'flex'
    //  Hide the game board
    board.style.display = 'none'
  }
  
  else {
  winOrLoseText.innerHTML = `Sorry, wrong guess!! 😣 Right answer was ${secret.name}.<br><img id="revelation-bubble-img" src="images/secretRevealed_img.png"><img class="secret-revealed-img" src="${secret.img}"/>
  <br>
   Better luck next time! `;
  // Show the win or lose section
  winOrLose.style.display = 'flex'
  //  Hide the game board
  board.style.display = 'none';

}  

}

// Invokes the start function when website is loaded
start()


//This makes the site reload when player clicks on "try again" 
const refreshPage = () => {
  //Hide the winOrLose and show generate board... 
  winOrLose.style.display = 'none';
  //  Hide the game board
  board.style.display = 'flex';
  start();
} 

// All the event listeners
restartButton.addEventListener('click', start);
refreshBtn.addEventListener('click', refreshPage);
questions.addEventListener('change', selectQuestion); //this calls the selectQuestion function as soon as the player changes option in dropdown.
findOutBtn.addEventListener('click', () => {
  checkQuestion()
});
