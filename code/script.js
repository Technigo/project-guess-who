// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const guessBtn = document.getElementById('filter')

// Global variables
let secret
let currentQuestion
let charactersInPlay
let personToGuess
let personToCheck
let personToConfirm

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Arya Stark',
    img: 'images/arya.png  width="141px"',
    hair: 'brown hair',
    eyes: 'grey eyes',
    accessories: 'a sword', 
    house: 'House Stark',
    species: 'human',
    home: 'Winterfell'
  },
  {
    name: 'Rob Stark',
    img: 'images/rob.png width="135px"',
    hair: 'brown hair',
    eyes: 'blue eyes',
    accessories: ['a sword', 'a crown at one point'], 
    house: 'House Stark',
    species: 'human',
    home: 'Winterfell'
  },
  {
    name: 'Sansa Stark',
    img: 'images/sansa.png width="135px"',
    hair: 'red hair',
    eyes: 'blue eyes',
    accessories: 'a crown at one point',
    house: 'House Stark',
    species: 'human',
    home: 'Winterfell'
  },
  {
    name: 'Jon Snow',
    img: 'images/jon.png width="135px"',
    hair: 'black hair',
    eyes: 'grey eyes',
    accessories: ['a sword', 'a crown at one point'],
    house: ['House stark', 'House Snow', 'House Targaryen'],
    species: 'human',
    home: ['Winterfell', 'The Wall']
  },
  {
    name: 'Daenerys Targaryen',
    img: 'images/dany2.jpg width="135px"',
    hair: 'white hair',
    eyes: 'purple eyes',
    accessories: 'none',
    house: 'House Targaryen',
    species: 'human',
    home: 'unknown'
  },
  {
    name: 'Tyrion Lannister',
    img: 'images/tyrion.png width="140px"',
    hair: 'golden hair',
    eyes: 'green eyes',
    accessories: ['books', 'knowledge'],
    house: 'House Lannister',
    species: 'human',
    home: ['kings Landning', 'Casterly Rock']
  },
  {
    name: 'Cercei Lannister',
    img: 'images/cerci.png width="135px"',
    hair: 'golden hair',
    eyes: 'green eyes',
    accessories: 'a crown at one point',
    house: 'House Lannister',
    species: 'human',
    home: ['kings Landning', 'Casterly Rock']
  },
  {
    name: 'Jamie Lannister',
    img: 'images/jamie.png width="135px"',
    hair: 'golden hair',
    eyes: 'green eyes',
    accessories: 'a sword',
    house: 'House Lannister',
    species: 'human',
    home: ['Kings Landing', 'Casterly Rock']
  },
  {
    name: 'Sandor Clegane',
    img: 'images/sandor.png width="140px"',
    hair: 'brown hair',
    eyes: 'grey eyes',
    accessories: 'a sword',
    house: 'House Clegane',
    species: 'human',
    home: 'unknown'
  },
  {
    name: 'Brandon Stark',
    img: 'images/bran.png width="140px"',
    hair: 'brown hair',
    eyes: 'blue eyes',
    accessories: ['a wheelchair', 'knowledge', 'magic'],
    house: 'House Stark',
    species: 'human',
    home: 'Winterfell'
  },

  {
    name: 'Gregor Clegane',
    img: 'images/gregor.png width="140px"',
    hair: 'hidden hair',
    eyes: 'hidden eyes',
    accessories:  'sword',
    house: 'House Clegange',
    species: 'human',
    home: 'unknown'
  },
  {
    name: 'Samwell Tarly',
    img: 'images/sam.png width="135px"',
    hair: 'black hair',
    eyes: 'brown eyes',
    accessories: ['books', 'knowledge'],
    house: 'House Tarly',
    species: 'human',
    home: ['The Wall', 'Horn Hill']
  },
  {
    name: 'Jorah Mormont',
    img: 'images/jorah.png width="138px"',
    hair: 'golden hair',
    eyes: 'blue eyes',
    accessories: 'a sword',
    house: 'House Mormont',
    species: 'human',
    home: 'Bear Island'
  },
  {
    name: 'Brienne Tarth',
    img: 'images/brienne.png width="135px"',
    hair: 'golden hair',
    eyes: 'blue eyes',
    accessories: 'a sword',
    house:'House Tarth',
    species: 'human',
    home: 'Evenfall Hall'
  },
  {
    name: 'Tormund Giantsbane',
    img: 'images/tormund.png width="135px"',
    hair: 'red hair',
    eyes: 'green eyes',
    accessories: 'a sword',
    house: 'the Free Folk',
    species: 'human',
    home: 'Beyond the Wall'
  },
  {
    name: 'Melisandre',
    img: 'images/melisandre.jpg width="135px"',
    hair: 'red hair',
    eyes: 'blue eyes',
    accessories: 'magic',
    house: 'unknown',
    species: 'human',
    home: 'Asshai'
  },
  {
    name: 'Ygritte',
    img: 'images/ygritte.jpg width="135px"',
    hair: 'red hair',
    eyes: 'blue eyes',
    accessories: 'a bow',
    house: 'the Free Folk',
    species: 'human',
    home: 'Beyond the Wall'
  },
  {
    name: 'Margaery Tyrell',
    img: 'images/margaery.jpg width="135px"',
    hair: 'brown hair',
    eyes: 'brown eyes',
    accessories: 'a crown at one point',
    house: 'House Tyrell',
    species: 'human',
    home: ['kings Landning', 'Highgarden']
  },
  {
    name: 'Olenna Tyrell',
    img: 'images/olenna.png width="135px"',
    hair: 'hidden hair',
    eyes: 'brown eyes',
    accessories: 'none',
    house: 'House Tyrell',
    species: 'human',
    home: 'Highgarden'
  },
  {
    name: 'Lyanna Mormont',
    img: 'images/lyanna.jpg width="135px"',
    hair: 'brown hair',
    eyes: 'brown eyes',
    accessories: 'a sword',
    house: 'House Mormont',
    species: 'human',
    home: 'Bear Island'
  },
  {
    name: 'Hodor',
    img: 'images/hodor.jpg width="135px"',
    hair: 'white hair',
    eyes: 'blue eyes',
    accessories: 'none',
    house: 'unknown',
    species: 'human',
    home: 'Winterfell'
  },
  {
    name: 'Night king',
    img: 'images/nightking.jpg width="135px"',
    hair: 'hidden hair',
    eyes: 'blue eyes',
    accessories:['magic', 'a spear'],
    house: 'unknown',
    species: 'White walker',
    home: 'Beyond the Wall'
  },
  {
    name: "Jaqen H'ghar",
    img: 'images/jaqen.jpg width="135px"',
    hair: ['red hair', 'white hair'],
    eyes: 'hidden eyes',
    accessories:['a sword', 'magic'],
    house: 'unknown',
    species: 'human',
    home: 'Braavos'
  },
  {
    name: 'Oberyn Martell',
    img: 'images/oberyn.jpg width="135px"',
    hair: 'black hair',
    eyes: 'black eyes',
    accessories: 'a spear',
    house: 'House Martell',
    species: 'human',
    home: 'Dorne'
  },
  {
    name: 'Nymeria',
    img: 'images/nymeria.png width="135px"',
    hair: ['grey hair', 'white hair'],
    eyes: 'hidden eyes',
    accessories: 'none',
    house: 'House Stark',
    species: 'direwolf',
    home: ['unknown', 'Winterfell']
  },
  {
    name: 'Ghost',
    img: 'images/ghost.png width="135px"',
    hair: 'white hair',
    eyes: 'red eyes',
    house: ['House Stark', 'House Snow'],
    species: 'direwolf',
    home: ['The Wall', 'Winterfell']
  },
  {
    name: 'Summer',
    img: 'images/summer.jpg width="135px"',
    hair: 'golden hair',
    eyes: 'hidden eyes',
    house: 'House Stark',
    species: 'direwolf',
    home: 'Winterfell'
  },
  {
    name: 'Drogon',
    img: 'images/drogon.png width="135px"',
    hair: 'black hair',
    eyes: 'hidden eyes',
    house: 'House Targaryen',
    species: 'dragon'
  },
  {
    name: 'Rhaegal',
    img: 'images/rhaegal.png width="135px"',
    hair: 'green hair',
    eyes: 'hidden eyes',
    house: 'House Targaryen',
    species: 'dragon'
  },
  {
    name: 'Viserion',
    img: 'images/viserion.png width="140px"',
    hair: 'golden hair',
    eyes: 'hidden eyes',
    house: 'House Targaryen',
    species: 'dragon'
  }
]



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
  generateBoard()
  setSecret()
  selectQuestion()
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.


const checkQuestion = () => {
  selectQuestion()
  const { category, value } = currentQuestion;
  
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'Hair') {
    if (value === secret.hair) {
      let keep = true
      filterCharacters(keep)
    } else {
     keep = false
      filterCharacters()
    }

  } else if (category === 'Eyes') {
    if (value === secret.eyes) {
      let keep = true
      filterCharacters(keep)
    } else {
      keep = false
      filterCharacters()
    }

  } else if (category === 'House') {
    if (value === secret.house) {
      let keep = true
      filterCharacters(keep)
    } else {
      keep = false
      filterCharacters()
    }
  } else if (category === 'Home') {
    if (value === secret.home) {
      let keep = true
      filterCharacters(keep)
    } else {
      keep = false
      filterCharacters()
    }
  } else if (category === 'Species') {
    if (value === secret.species) {
      let keep = true
      filterCharacters(keep)
    } else {
      keep = false
      filterCharacters()
    }
  } else if (category === 'Accessories') {
    if (value === secret.accessories) {
      let keep = true
      filterCharacters(keep)
    } else {
      keep = false
      filterCharacters()
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  
  const { category, value } = currentQuestion;
  // Show the correct alert message for different categories
  if (category === 'Hair') {
    if (keep) {
      alert(
        `Yes, the character has ${value}! Keep all that has ${value}`
      )
    } else {
      alert(
        `No, the character doesn't has ${value}. Remove all that has ${value}`
      )
    }
  } else if (category === 'Eyes') {
    if (keep) {
      alert(
        `Yes, the secret character has ${value}! Keep all that has ${value}`
      )
    } else {
      alert(
        `No, the secret character doesn't have ${value}. Remove all that has ${value}`
      )
    }
  } else if (category === 'Accessories') {
    if (keep) {
      alert(
        `Yes, the secret character has ${value}! Keep all with ${value}`
      )
    } else {
      alert(
        `No, the secret character does not have ${value}. Remove all with ${value}`
      )
    }
  } else if (category === 'House') {
    if (keep) {
      alert(
        `Yes the secret character is in ${value}! Keep all that is in ${value}`
      )
    } else {
      alert(
        `No, the secret character is in ${value}. Remove all that is in ${value}.`
      )
    }
  } else if (category === 'Species') {
    if (keep) {
      alert(
        `Yes, the secret character is a ${value}! Keep all ${value}s `
      )
    } else {
      alert(
        `No, the secret character is not a ${value}. Remove all ${value}s.`
      )
    }
  } else {
    if (keep) {
      alert(
        `Yes the secret characters home is ${value}! Keep all that has ${value} as a home`
      )
    } else {
      alert(
        `No, the secret characters home is not ${value}. Remove all that has ${value} as a home`
      )
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
    // for hair and eyes :
    //   charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    //   or
    //   charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    // for accessories and other
    //   charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    //   or
    //   charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  if (keep === true) {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] === value)
    CHARACTERS.shift()
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] !== value)
    CHARACTERS.shift()
  }

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let letsGuess = confirm(`Do you want to guess on ${personToConfirm}?`)
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  if (letsGuess) {
    checkMyGuess(personToConfirm)
  } else {
    alert('Make another guess!')
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    alert(
      `Congratulations! You guessed right, the secret character is ${personToCheck}!`
    )
    start()

  } else {
    alert(
      `Sorry, ${personToCheck} is not the secret character. Please guess again.`
    )
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
guessBtn.addEventListener('click', () => {
  checkQuestion()
})
