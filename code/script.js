

// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

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
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
  const value = questions.value;

  currentQuestion = {
    category: category,
    // value: value
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  // if (category === 'hair' || category === 'eyes') {
  //   charactersInPlay = charactersInPlay.filter((person) => person[category] === value);

  // } else if (category === 'accessories' || category === 'other') {
  //   charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));

  // }
  // if (category === 'hair' || category === 'eyes') {
  //   charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
  // } else if (category === 'accessories') {
  //   if (value === 'glasses') {
  //     charactersInPlay = charactersInPlay.filter((person) => person[category].includes('glasses'));
  //   } else if (value === 'hat') {
  //     charactersInPlay = charactersInPlay.filter((person) => person[category].includes('hat'));
  //   }
  // } else if (category === 'other') {
  //   if (value === 'smoker') {
  //     charactersInPlay = charactersInPlay.filter((person) => person[category].includes('smoker'));
  //   } else {
  //     // Handle other "other" category values here if needed
  //   }
  // }

  // generateBoard();
  if (category === 'hair') {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    document.getElementById('winOrLoseText').textContent = `Step 1: Keep only the people with ${value} hair.`;
  } else if (category === 'eyes') {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    document.getElementById('winOrLoseText').textContent = `Step 2: Keep only the people with ${value} eyes.`;
  } else if (category === 'accessories') {
    if (value === 'glasses') {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes('glasses'));
      document.getElementById('winOrLoseText').textContent = 'Step 3: Keep only the people who wear glasses.';
    } else if (value === 'hat') {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes('hat'));
      document.getElementById('winOrLoseText').textContent = 'Step 3: Keep only the people who wear a hat.';
    }
  } else if (category === 'other') {
    if (value === 'smoker') {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes('smoker'));
      document.getElementById('winOrLoseText').textContent = 'Step 4: Keep only the people who have a smoking habit.';
    } else {
      // Handle other "other" category values here if needed
    }
  }

  generateBoard();

  // Display step-by-step instructions based on the question
  if (category === 'hair') {
    document.getElementById('winOrLoseText').textContent = `Step 1: Keep only the people with ${value} hair.`;
  } else if (category === 'eyes') {
    document.getElementById('winOrLoseText').textContent = `Step 2: Keep only the people with ${value} eyes.`;
  } else if (category === 'accessories') {
    if (value === 'glasses') {
      document.getElementById('winOrLoseText').textContent = 'Step 3: Keep only the people who wear glasses.';
    } else if (value === 'hat') {
      document.getElementById('winOrLoseText').textContent = 'Step 3: Keep only the people who wear a hat.';
    }
  } else if (category === 'other') {
    if (value === 'smoker') {
      document.getElementById('winOrLoseText').textContent = 'Step 4: Keep only the people who have a smoking habit.';
    } else {
      // Provide instructions for other "other" category values if needed
    }
  }
};


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
    // Similar to the one above
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      )
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(
        `No, the person doesn't have ${value} hair! Remove all people with ${value} hair`
      )
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

  // Invoke a function to redraw the board with the remaining people.
  // if (category === 'hair' || category === 'eyes') {
  //   charactersInPlay = charactersInPlay.filter((person) => (keep ? person[category] === value : person[category] !== value));
  // } else if (category === 'accessories' || category === 'other') {
  //   charactersInPlay = charactersInPlay.filter((person) => (keep ? person[category].includes(value) : !person[category].includes(value)));
  // }

  if (category === 'hair' || category === 'eyes') {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
  } else if (category === 'accessories') {
    if (value === 'glasses') {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes('glasses'));
    } else if (value === 'hat') {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes('hat'));
    }
  } else if (category === 'other') {
    if (value === 'smoker') {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes('smoker'));
    } else {
      // Handle other "other" category values here if needed
    }
  }

  generateBoard()
  // Display step-by-step instructions based on the question
  if (category === 'hair') {
    alert(`Step 1: Keep only the people with ${value} hair.`);
  } else if (category === 'eyes') {
    alert(`Step 2: Keep only the people with ${value} eyes.`);
  } else if (category === 'accessories') {
    if (value === 'glasses') {
      alert('Step 3: Keep only the people who wear glasses.');
    } else if (value === 'hat') {
      alert('Step 3: Keep only the people who wear a hat.');
    }
  } else if (category === 'other') {
    if (value === 'smoker') {
      alert('Step 4: Keep only the people who have a smoking habit.');
    } else {
      // Provide instructions for other "other" category values if needed
    }
  }
};




// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const confirmGuess = confirm(`Are you sure you want to guess ${personToConfirm}?`);
  if (confirmGuess) {
    checkMyGuess(personToConfirm);
  }
};


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    document.getElementById('winOrLoseText').textContent = 'Congratulations! You won!';
  } else {
    document.getElementById('winOrLoseText').textContent = `Sorry, you lost 😤! The secret person was ${secret.name}.`;
  }

  // Show the win or lose section and hide the game board
  document.getElementById('winOrLose').style.display = 'block';
  document.querySelector('.board-wrapper').style.display = 'none';
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion);
// document.getElementById('filter').addEventListener('click', checkQuestion);
document.getElementById('filter').addEventListener('click', () => {
  selectQuestion(); // Make sure the current question is selected
  checkQuestion(); // Call the checkQuestion function
});

document.getElementById('playAgain').addEventListener('click', () => {
  document.getElementById('winOrLose').style.display = 'none';
  document.querySelector('.board-wrapper').style.display = 'block';
  start();
});
