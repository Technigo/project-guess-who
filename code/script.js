// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const findOutButton = document.getElementById('filter')
const restartButton = document.getElementById('restart')





// Array with all the characters, as objects
const CHARACTERS = [
  {
    img: 'images/guesswho/1.png',
    pet: false,
    plants: '2-needs-water',
    accessories: 'mug',
    other: false,
    
  },
  {
    img: 'images/guesswho/19.png',
    /*pet: [],
    plants: ['1-plant'],
    accessories: ['mug'],
    other: ['party'],*/
  },
  {
    img: 'images/guesswho/3.png',
    /*pet: [],
    plants: [],
    accessories: ['lamp', 'curtain'],
    other: [],*/
  },
  {
    img: 'images/guesswho/4.png',
    /*pet: ['cat'],
    plants: ['2-plant'],
    accessories: [],
    other: ['not-home'],*/
  },
  {
    img: 'images/guesswho/5.png',
    /*pet: [],
    plants: ['1-plant'],
    accessories: ['watercane',]
    other: [],*/
  },
  {
    img: 'images/guesswho/6.png',
    /*pet: ['dog'],
    plants: ['1-plant'],
    accessories: ['lamp', 'curtain'],
    other: [],*/
  },
  {
    img: 'images/guesswho/7.png',
    /*pet: ['cat'],
    plants: ['1-plant'],
    accessories: [],
    other: [],*/
  },
  {
    img: 'images/guesswho/8.png',
    /*pet: [],
    plants: ['2-plant'],
    accessories: [],
    other: ['not-home'],*/
  },
  {
    img: 'images/guesswho/9.png',
    /*pet: [],
    plants: ['1-plant'],
    accessories: ['watercane'],
    other: [],*/
  },
  {
    img: 'images/guesswho/17.png',
    /*pet: [],
    plants: [],
    accessories: ['vase'],
    other: [],*/
  },
  {
    img: 'images/guesswho/11.png',
    /*pet: 'dog',
    plants: [],
    accessories: ['lamp', 'curtain'],
    other: [],*/
  },
  {
    img: 'images/guesswho/12.png',
    /*pet: 'cat',
    plants: [],
    accessories: ['curtain'],
    other: [],*/
  },
  {
    img: 'images/guesswho/15.png',
    /*pet: [],
    plants: '1-plant',
    accessories: ['watercane'],
    other: [],*/
  },
  {
    img: 'images/guesswho/14.png',
    /*pet: [],
    plants: '1-plant',
    accessories: ['vase'],
    other: [],*/
  },
  {
    img: 'images/guesswho/13.png',
    /*pet: 'cat,',
    plants: false,
    accessories: ['curtain'],
    other: [],*/
  },
  {
    img: 'images/guesswho/16.png',
    /*pet: 'cat',
    plants: false,
    accessories: ['vase'],
    other: [],*/
  },
  {
    img: 'images/guesswho/10.png',
    /*pet: false,
    plants: '2-plant',
    accessories: [],
    other: [],*/
  },
  {
    img: 'images/guesswho/18.png',
    /*pet: 'dog',
    plants: false,
    accessories: ['mug', 'vase'],
    other: [],*/
  },
  {
    img: 'images/guesswho/2.png',
    /*pet: false,
    plants: '1-plant',
    accessories: ['lamp'],
    other: [],*/
  },
  {
    img: 'images/guesswho/20.png',
    /*pet: false,
    plants: '5-plant',
    accessories: [],
    other: [],*/
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
        <img src=${person.img}>
        <div class="guess">
          <span>Guess on this home?</span>
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
  charactersInPlay = CHARACTERS //All caracters. later on filter characters
  generateBoard();
  setSecret();
  console.log(secret);

  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
//if else here.
  
  currentQuestion = {
    category: category,
    value: value,
  }

console.log(`new dropdown item has been selected`, `cateogory: ${category}`, `${value}`);
  };

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  keep = false;

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  //eys and hair = 
  //accessories and other = arrays

  if (category === 'pets') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category: category,
    }
  } else if (category === 'plants') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category, 
    }
  } else {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
}  


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'pet') {
    if (keep) {
      alert(
        `Yes, there is a ${value} in the window! Lets keep all windows where we can see a ${value}`
      )
    } else {
      alert(
        `Nope, no ${value} here! Lets remove all windows with a ${value}`
      )
    }
  } else if (category === 'plant') {
    // Similar to the one above
  } else {
    if (keep) {
      alert(
        `Yes, it's ${value} in the window! Keep all windows that has ${value}.`
      )
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    } else {
      alert(
        `No, no plants here! Remove all windows with plants.`
      )
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    }
  }

  //FILTERING the board below 
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
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
if (personToCheck === secret.name) {

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
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener('click', () => {
  filterCharacters();
    });

