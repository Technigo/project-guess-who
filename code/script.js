// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

//Store the players name
let player;



// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Snoop Dogg',
    img: 'images/snoop-dogg.jpeg',
    hair: ['locs'],
    accessories: ['necklace', 'ring'],
    clothes: ['shirt'],
    other: ['mustache', 'smoker']
  },
  {
    name: 'Dr. Dre',
    img: 'images/dr-dre.jpeg',
    hair: ['hidden'],
    accessories: ['hat', 'watch', 'earrings'],
    clothes: [],
    other: []
  },
  {
    name: 'Eminem',
    img: 'images/eminem.jpeg',
    hair: ['short'],
    accessories: ['earrings'],
    clothes: [],
    other: ['tattoo']
  },
  {
    name: 'Sir Mix A Lot',
    img: 'images/sir-mix-alot.jpeg',
    hair: ['hidden'],
    accessories: ['hat', 'ring', 'glasses'],
    clothes: [],
    other: ['mouth open']
  },
  {
    name: 'Shock G',
    img: 'images/shock-g.jpeg',
    hair: ['big'],
    accessories: ['glasses'],
    clothes: [],
    other: ['mustache']
  },
  {
    name: 'Tupac',
    img: 'images/tupac.jpeg',
    hair: ['bold'],
    accessories: ['earrings', 'necklace', 'bandana'],
    clothes: ['jeans shirt'],
    other: ['mustache', 'plays in a band']
  },
  {
    name: 'Andre 3000',
    img: 'images/andre-3000.jpeg',
    hair: ['long'],
    accessories: ['necklace', 'bandana', 'ring'],
    clothes: ['leather pants'],
    other: ['tattoo', 'band member']
  },
  {
    name: 'Notorious B.I.G.',
    img: 'images/notorious-big.jpeg',
    hair: ['short'],
    accessories: ['ring', 'watch', 'necklace'],
    clothes: ['colorful'],
    other: ['fat']
  },
  {
    name: 'Busta Rhymes',
    img: 'images/busta-rhymes.jpg',
    hair: ['locs'],
    accessories: ['necklace', 'watch', 'ring'],
    clothes: ['jump suit'],
    other: ['mustache']
  },

  {
    name: 'Jay Z',
    img: 'images/jay-z.jpeg',
    hair: ['short'],
    accessories: ['earrings', 'necklace'],
    clothes: ['Popeye'],
    other: ['married', 'kids']
  },
  {
    name: 'Lauryn Hill',
    img: 'images/lauryn-hill.jpeg',
    hair: ['locs'],
    accessories: ['glasses', 'hat'],
    clothes: ['duffle'],
    other: []
  },
  {
    name: 'Lil Kim',
    img: 'images/lil-kim.jpeg',
    hair: ['purple'],
    accessories: ['lashes'],
    clothes: ['purple'],
    other: []
  },
  {
    name: 'Eve',
    img: 'images/eve.jpeg',
    hair: ['red'],
    accessories: ['earrings', 'necklace', 'bracelet'],
    clothes: ['fur'],
    other: []
  },
  {
    name: 'Erykah Badu',
    img: 'images/erykah-badu.jpeg',
    hair: ['hidden'],
    accessories: ['hat', 'necklace', 'ring', 'bracelet'],
    clothes: ['colorful'],
    other: []
  },
  {
    name: 'Chili',
    img: 'images/chili.jpeg',
    hair: ['long'],
    accessories: ['shells', 'necklace'],
    clothes: ['black'],
    other: ['band member']
  },
  {
    name: 'Wu Tang Clan',
    img: 'images/wu-tang-clan.jpeg',
    hair: ['hidden', 'locs'],
    accessories: ['hat', 'ring', 'glasses', 'tooth pick', 'necklace', 'bandanda'],
    clothes: ['colorful', 'sweater', 't-shirt', 'shirt'],
    other: ['is a band']
  },
  {
    name: 'Queen Latifah',
    img: 'images/queen-latifah.jpeg',
    hair: ['straight'],
    accessories: ['bracelet', 'hat'],
    clothes: ['t-shirt'],
    other: ['band member']
  },
  {
    name: 'Salt-N-Pepa',
    img: 'images/salt-n-pepa.jpeg',
    hair: ['hidden'],
    accessories: ['earrings', 'hat', 'necklace', 'ring'],
    clothes: ['colorful'],
    other: ['is a band']
  },
  {
    name: 'LL Cool J',
    img: 'images/ll-cool-j.jpeg',
    hair: 'hidden',
    accessories: ['hat', 'watch', 'necklace', 'ring'],
    clothes: ['jacket'],
    other: []
  },
  {
    name: 'A Tribe Called Quest',
    img: 'images/a-tribe-called-quest.jpeg',
    hair: ['hidden'],
    accessories: ['hat'],
    clothes: ['shirt', 'sweater'],
    other: ['is a band']
  },
  {
    name: 'Missy Elliot',
    img: 'images/missy-elliot.png',
    hair: ['big'],
    accessories: ['hat', 'earrings', 'necklace'],
    clothes: ['t-shirt'],
    other: []
  },
  {
    name: 'DMX',
    img: 'images/dmx.jpeg',
    hair: ['bold'],
    accessories: ['necklace', 'bracelet', 'watch'],
    clothes: [],
    other: ['tattoo', 'mustache']
  },
  {
    name: 'Redman',
    img: 'images/redman.jpeg',
    hair: ['hidden'],
    accessories: ['hat'],
    clothes: ['shirt'],
    other: ['mustache']
  },
  {
    name: 'Big Punisher',
    img: 'images/big-punisher.jpeg',
    hair: ['hidden'],
    accessories: ['necklace', 'hat'],
    clothes: ['striped'],
    other: ['fat']
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
  charactersInPlay = CHARACTERS;
  generateBoard(); // This line generates the board when the website loads
  setSecret(); // Sets a random character as the secret
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  currentQuestion = { category, value };

  currentQuestion = {
    category: category,
    // value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {

  } else if (category === 'accessories' || category === 'other') {

  }
}

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
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
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
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
