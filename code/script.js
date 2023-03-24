// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const findOutBtn = document.getElementById('filter')
const restartButton = document.getElementById('restart')
const winOrLoseText = document.getElementById('winOrLoseText')




// Array with all the characters
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
    pet: false,
    plants: '1-plant',
    accessories: 'mug',
    other: 'party'
  },
  {
    img: 'images/guesswho/3.png',
    pet: false,
    plants: false,
    accessories: 'lamp', /*'curtain',*/
    other: false,
  },
  {
    img: 'images/guesswho/4.png',
    pet: 'cat',
    plants: '2-plant',
    accessories: false,
    other: 'not-home',
  },
  {
    img: 'images/guesswho/5.png',
    pet: false,
    plants: '1-plant',
    accessories: 'watercane',
    other: false,
  },
  {
    img: 'images/guesswho/6.png',
    pet: 'dog',
    plants: '1-plant',
    accessories: 'lamp', /*'curtain',*/
    other: false,
  },
  {
    img: 'images/guesswho/7.png',
    pet: 'cat',
    plants: '1-plant',
    accessories: false,
    other: false,
  },
  {
    img: 'images/guesswho/8.png',
    pet: false,
    plants: '2-plant',
    accessories: false,
    other: 'not-home',
  },
  {
    img: 'images/guesswho/9.png',
    pet: false,
    plants: '1-plant',
    accessories: 'watercane',
    other: false,
  },
  {
    img: 'images/guesswho/17.png',
    pet: false,
    plants: false,
    accessories: 'vase',
    other: false,
  },
  {
    img: 'images/guesswho/11.png',
    pet: 'dog',
    plants: false,
    accessories: 'lamp', /*'curtain',*/
    other: false,
  },
  {
    img: 'images/guesswho/12.png',
    pet: 'cat',
    plants: false,
    accessories: 'curtain',
    other: false,
  },
  {
    img: 'images/guesswho/15.png',
    pet: false,
    plants: '1-plant',
    accessories: 'watercane',
    other: false,
  },
  {
    img: 'images/guesswho/14.png',
    pet: false,
    plants: '1-plant',
    accessories: 'vase',
    other: false,
  },
  {
    img: 'images/guesswho/13.png',
    pet: 'cat,',
    plants: false,
    accessories: 'curtain',
    other: false,
  },
  {
    img: 'images/guesswho/16.png',
    pet: 'cat',
    plants: false,
    accessories: 'vase',
    other: false,
  },
  {
    img: 'images/guesswho/10.png',
    pet: false,
    plants: '2-plant',
    accessories: false,
    other: false,
  },
  {
    img: 'images/guesswho/18.png',
    pet: 'dog',
    plants: false,
    accessories: 'mug',/*'vase',*/
    other: false,
  },
  {
    img: 'images/guesswho/2.png',
    pet: false,
    plants: '1-plant',
    accessories: 'lamp',
    other: false,
  },
  {
    img: 'images/guesswho/20.png',
    pet: false,
    plants: '5-plant',
    accessories: false,
    other: false,
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

  if (category === 'pet') {
    currentQuestion = {
      category: 'pet',
      value: 'value'
    }
  } else if (category === 'plants') {
    currentQuestion = {
      category: 'plants',
      value: 'value'
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      category: 'accessories',
      value: 'value'
    }
  } else {
    currentQuestion = {
      category: 'other',
      value: 'value'
    }
  
}
 


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
const  { category, value } = currentQuestion;

 if (category === 'pet') {
  if (secret.category.includes(value)) {
    filterCharacters(keep);
  } else {
    filterCharacters();
  }
  } else if (category === 'plants') {
    if (secret.category.includes(value)) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
  } else if (category === 'accessories') {
    if (secret[category].includes(value)) {
      filterCharacters(keep);
    } else {
      filterCharacters();
    }
} else {
  if (secret[category].includes(value)) {
    filterCharacters(keep);
  } else {
    filterCharacters();
  }
}
};
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  // Show the correct alert message for different categories
  if (category === 'pet') {
    if (keep) {
      alert(
        `Yes, there is a ${value} in this home! Lets keep all windows where we can see a ${value}`
      )
    } else {
      alert(
        `Nope, no ${value} here! Lets remove all homes with a ${value}`
      )
    }
  } else if (category === 'plant') {
    if (keep) {
      alert(
        `Yes, it's ${value} in the window! Keep all windows that has ${value}.`
      )
    } else {
      alert(
        `No, no plants in this home! Remove all homes with plants.`
      )
    }
  }
   else if (category === 'accesories') {
    if (keep) {
      alert(
        `Yes, it's ${value} in this window! Keep all windows that has 
        ${value}.`
      )
    } else {
      alert(
        `Nope, no ${value} here. Lets remove all windows with ${value}`
      )
    } 
  }
    else if (category === 'other') {
      if (keep) {
        alert(
          `Yes, it's ${value} in this window! Keep all windows that has 
          ${value}.`
        )
      } else {
        alert(
          `Nope, no ${value} here. Lets remove all windows with ${value}`
        )
      } } 
      generateBoard();
      }
    
      

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const makeAGuess = confirm(`Are you sure you want to guess on this home?`)
  if(makeAGuess === true) {
    checkMyGuess(personToConfirm)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  winOrLose.style.display = 'flex'
  board.style.display = 'none'

if (personToCheck === secret.name) {
  WinOrLoseText.innerHTML = `YES! You won, it's the right home!`;
} else {
  WinOrLoseText.innerHTML = `No sorry, wrong answer! The secret home was `
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
questions.addEventListener('change', selectQuestion)
findOutBtn.addEventListener('click', checkQuestion)