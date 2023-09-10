// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const filterButton = document.getElementById('filter')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'a hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat'],
    other: ['100k followers on TikTok']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['a hat'],
    other: ['a smoking habit']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['a tie'],
    other: ['a french accent']
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
    accessories: ['glasses', 'a wristwatch'],
    other: ['a smoking habit']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'a hat'],
    other: ['a smoking habit']
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
    accessories: ['glasses', 'a hat'],
    other: ['a smoking habit']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a hat'],
    other: ['a french accent']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'a wristwatch'],
    other: ['a fear of heights']
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat'],
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
    other: ['a fear of heights']
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
    accessories: ['glasses', 'a hat'],
    other: ['a fear of heights']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['a wristwatch'],
    other: ['a french accent', '100k followers on TikTok']
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
    accessories: ['a tie'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'a hat'],
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
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // Get the selected category and value from the dropdown
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  // Check if a category and value are selected
  if (category && value) {
    // Create the currentQuestion object based on the selected category and value
    if (category === "hair" || category === "eyes") {
      currentQuestion = {
        category: category,
        value: value,
      };
    } else if (category === "accessories" || category === "other") {
      currentQuestion = {
        category: category,
        value: value,
      };
    }

    // For debugging purposes, log the selected category and value to the console
    console.log(`Category: ${category}, Value: ${value}`);
  } else {
    // Handle the case where a category or value is not selected
    alert("Please select an option before clicking 'Find Out'.");
  }
};



  // This function should be invoked when you click on 'Find Out' button.
  const checkQuestion = () => {
    const { category, value } = currentQuestion;
    let keep = false;
  

    if (category === 'hair' || category === 'eyes') {
      keep = value === secret[category];
    } else if (category === 'accessories' || category === 'other') {
      if (category === 'other') {
        // Check for "smoker" attribute directly
        keep = secret['other'].includes(value);
      } else {
        keep = secret[category].includes(value);
      }
    }
  
    // Invoke the filter characters and update the game board.
    filterCharacters(keep);
  };
  
  // It'll filter the characters array and redraw the game board.
  const filterCharacters = (keep) => {
    const { category, value } = currentQuestion;
  
    // Filter characters based on the current question's characteristics
    if(keep){
      if (category === 'hair' || category === 'eyes') {
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      } else if (category === 'accessories' || category === 'other') {
        if (category === 'other') {
          // Check for "smoker" attribute directly
          charactersInPlay = charactersInPlay.filter((person) => person['other'].includes(value));
        } else {
          charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
        }
      }
    }else{
      if (category === 'hair' || category === 'eyes') {
        charactersInPlay = charactersInPlay.filter((person) => person[category] != value);
      } else if (category === 'accessories' || category === 'other') {
        if (category === 'other') {
          // Check for "smoker" attribute directly
          charactersInPlay = charactersInPlay.filter((person) => !person['other'].includes(value));
        } else {
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));

        }
        }
    }

    // Show the correct alert message for different categories
    if (category === 'accessories') {
      if (keep) {
        alert(`Yes, the person wears ${value}! Keep all people that wear ${value}`);
      } else {
        alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}`);
      }
    } else if (category === 'other') {
      if (keep) {
        alert(`Yes, the person has ${value}! Keep all people that have ${value}`);
      } else {
        alert(`No, the person doesn't have ${value}! Remove all people that have ${value}`);
      }
    } else {
      if (keep) {
        alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`);
      } else {
        alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`);
      }
    }
  
    // After filtering, redraw the game board
    generateBoard();
  };
  

// ---------------

// when clicking guess, the player first have to confirm that they want to make a guess.
// const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
// }

const guess = (personToConfirm) => {
  const makeAGuess = confirm(`Do you want to take a guess at ${personToConfirm}?`)

  if (makeAGuess) {
    checkMyGuess(personToConfirm)
  }
}

// If you confirm, this function is invoked
// const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
//}

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You Won!`
  } else {
    winOrLoseText.innerHTML = `Loser!`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
filterButton.addEventListener('click', () => {
  selectQuestion(); // Set the current question based on dropdowns
  checkQuestion(); // Filter characters based on the question
  resetDropdowns(); // Reset the dropdown to default values
});
playAgainButton.addEventListener('click', start);




const resetDropdowns = () => {
  questions.selectedIndex = 0;
};
