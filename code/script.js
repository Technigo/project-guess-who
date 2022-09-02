// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById ('winOrLoseText')
const winOrLose = document.getElementById('winOrlose') // set new name?
const playAgain = document.getElementById('playAgain')


//New project

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    gender: 'female',
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    gender: 'male',
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    gender: 'male',
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    gender: 'male',
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    gender: 'male',
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    gender: 'male',
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    gender: 'female',
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    gender: 'female',
    other: ['hairBun']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewelries'],
    gender: 'female',
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    gender: 'female',
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    gender: 'male',
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    gender: 'female',
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat', 'beard'],
    gender: 'male',
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'jewelries'],
    gender: 'female',
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    gender: 'female',
    other: ['hairBun']
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    gender: 'male',
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    gender: 'female',
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'jewelries'],
    gender: 'female',
    other: ['hairBun']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    gender: 'male',
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', 'jewelries'],
    gender: 'male',
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelries'],
    gender: 'female',
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    gender: 'male',
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['beard'],
    gender: 'male',
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    gender: 'female',
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay





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
}
  
// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * (charactersInPlay.length - 1 - 0 + 1) + 0)];
  console.log('The secret person is', secret.name); 


};

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS // Here we're setting charactersInPlay array to be all the characters to start with
  generateBoard();
  setSecret();
  selectQuestion();
  //If i want a time function, set it here
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value   // This variable stores the acctual value of the question we've selected.
  //currentQuestion is "Does the person have "category, value"?"
  currentQuestion = {
    category: category, // Based on the optgroup
    value: value,       // Comes from the selected option
  }
}

questions.onChange = selectQuestion // From thursday lesson to make it possible to select..

// This was tricky to understand, but this site was helpful. https://stackoverflow.com/c/technigo/questions/2884
// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep // = false; //if keep is true in conditions below, only they will be filtered. https://stackoverflow.com/c/technigo/questions/3526?rq=1
  // Hair, eyes and gender are strings
  if (category === 'hair' || category === 'eyes'|| category === 'gender') {
    if (secret[category] === value) {
      keep = true
    } else {
      keep = false
    }
    // Accessories and other are arrays
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      keep = true
    } else {
      keep = false
    }
  }
  filterCharacters(keep);
  //console.log('Guess on',category, value);
  //console.log('This is', secret[category].includes(value)); // Let us know if true or false
}

// It'll filter the characters array and redraw the game board. 
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categoriess
  if (category === 'hair'|| category === 'eyes' || category === 'gender') {
    if (keep) {
      alert(
        `Yes, you are right! Keep all with ${value} ${category}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)      
    } else {
      alert(
        `No, try again! Remove all with ${value} ${category}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } 
  else if (category === 'accessories' || category === 'other') { // this filtering is not working
    if (keep) {
      alert(
      `Yes, you are right! Keep all ${value}s.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      
    } else {
      alert(
       `No, try again! Remove all ${value}s.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    } 
  } 
 // Invoke a function to redraw the board with the remaining people.
  generateBoard(); //Redraw board with filtered characters
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let userGuess = confirm(`Do you really think it's ${personToConfirm}?`) 
  if (userGuess) {
    let personToCheck = personToConfirm;
    checkMyGuess(personToCheck);
  } else {
    alert('OK, keep playing.')
  }
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToConfirm === secret.name) {
    alert('Correct, you win!')
  } else {
    alert('Wrong, you lost')
    playAgain();
  }
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion) // The questions is selected in the drop down menu. selectQuestion function is invoked and different answer change dependign on the selected item.
findOutButton.addEventListener('click', checkQuestion) // The checkQuestion function will be declared when clicking the find out button.
playAgain.addEventListener('click', reload) // Reloads the page (winOrLose wrapper)
 
