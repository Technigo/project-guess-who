// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Octavian",
    animal: "octopus",
    gender: "boy",
    personality: "cranky",
    hobby: "play",
    zodiac: "Virgo",
    img: "images/octavian.png"
  },
  {
    name: "Marcel",
    animal: "dog",
    gender: "boy",
    personality: "lazy",
    hobby: "play",
    zodiac: "Capricorn",
    img: "images/marcel.png"
  },
  {
    name: "Bam",
    animal: "deer",
    gender: "boy",
    personality: "jock",
    hobby: "play",
    zodiac: "Scorpio",
    img: "images/bam.png"
  },
  {
    name: "Kiki",
    animal: "cat",
    gender: "girl",
    personality: "normal",
    hobby: "education",
    zodiac: "Libra",
    img: "images/kiki.png"
  },
  {
    name: "Shino",
    animal: "deer",
    gender: "girl",
    personality: "peppy",
    hobby: "education",
    zodiac: "Scorpio",
    img: "images/shino.png"
  },
  {
    name: "Olaf",
    animal: "anteater",
    gender: "boy",
    personality: "smug",
    hobby: "education",
    zodiac: "Taurus",
    img: "images/olaf.png"
  },
  {
    name: "Lobo",
    animal: "wolf",
    gender: "boy",
    personality: "cranky",
    hobby: "education",
    zodiac: "Scorpio",
    img: "images/lobo.png"
  },
  {
    name: "Coco",
    animal: "rabbit",
    gender: "girl",
    personality: "normal",
    hobby: "education",
    zodiac: "Pisces",
    img: "images/coco.png"
  },
  {
    name: "Tiffany",
    animal: "rabbit",
    gender: "girl",
    personality: "snooty",
    hobby: "fashion",
    zodiac: "Capricorn",
    img: "images/tiffany.png"
  },
  {
    name: "Sasha",
    animal: "rabbit",
    gender: "boy",
    personality: "lazy",
    hobby: "fashion",
    zodiac: "Taurus",
    img: "images/sasha.png"
  },
  {
    name: "Carmen",
    animal: "rabbit",
    gender: "girl",
    personality: "peppy",
    hobby: "fashion",
    zodiac: "Capricorn",
    img: "images/carmen.png"
  },
  {
    name: "Truffles",
    animal: "pig",
    gender: "girl",
    personality: "peppy",
    hobby: "fashion",
    zodiac: "Leo",
    img: "images/truffles.png"
  },
  {
    name: "Kyle",
    animal: "wolf",
    gender: "boy",
    personality: "smug",
    hobby: "music",
    zodiac: "Sagittarius",
    img: "images/kyle.png"
  },
  {
    name: "Pancetti",
    animal: "pig",
    gender: "girl",
    personality: "snooty",
    hobby: "music",
    zodiac: "Scorpio",
    img: "images/pancetti.png"
  },
  {
    name: "Pietro",
    animal: "sheep",
    gender: "boy",
    personality: "smug",
    hobby: "music",
    zodiac: "Aries",
    img: "images/pietro.png"
  },
  {
    name: "Camofrog",
    animal: "frog",
    gender: "boy",
    personality: "cranky",
    hobby: "music",
    zodiac: "Gemini",
    img: "images/camofrog.png"
  },
  {
    name: "Marina",
    animal: "octopus",
    gender: "girl",
    personality: "normal",
    hobby: "music",
    zodiac: "Cancer",
    img: "images/marina.png"
  },
  {
    name: "Muffy",
    animal: "sheep",
    gender: "girl",
    personality: "sisterly",
    hobby: "music",
    zodiac: "Aquarius",
    img: "images/muffy.png"
  },
  {
    name: "Cherry",
    animal: "dog",
    gender: "girl",
    personality: "sisterly",
    hobby: "music",
    zodiac: "Taurus",
    img: "images/cherry.png"
  },
  {
    name: "Diva",
    animal: "frog",
    gender: "girl",
    personality: "sisterly",
    hobby: "fitness",
    zodiac: "Libra",
    img: "images/diva.png"
  },
  {
    name: "Stinky",
    animal: "cat",
    gender: "boy",
    personality: "jock",
    hobby: "fitness",
    zodiac: "Leo",
    img: "images/stinky.png"
  },
  {
    name: "Antonio",
    animal: "anteater",
    gender: "boy",
    personality: "jock",
    hobby: "fitness",
    zodiac: "Libra",
    img: "images/antonio.png"
  },
  {
    name: "Zucker",
    animal: "octopus",
    gender: "boy",
    personality: "lazy",
    hobby: "nature",
    zodiac: "Pisces",
    img: "images/zucker.png"
  },
  {
    name: "Annalisa",
    animal: "anteater",
    gender: "girl",
    personality: "normal",
    hobby: "nature",
    zodiac: "Aquarius",
    img: "images/annalisa.png"
  },
  {
    name: "Ankha",
    animal: "cat",
    gender: "girl",
    personality: "snooty",
    hobby: "nature",
    zodiac: "Virgo",
    img: "images/ankha.png"
  }
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
        <img class="villager-image" src=${person.img} alt=${person.name}>
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
  generateBoard();
  setSecret();
  console.log(secret);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
findOut.addEventListener('click', () => {
  console.log('this works');
  selectQuestion();
  console.log(currentQuestion);
  console.log(secret.animal);
  checkQuestion();
})

const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (category === 'animal') {
    if (value === secret.animal) {
      let keep = true;
      filterCharacters(keep);
    } else {
      keep = false;
      filterCharacters();
    }
  } else if (category === 'personality') {
    if (value === secret.personality) {
      keep = true;
      filterCharacters(keep);
    } else {
      keep = false;
      filterCharacters();
    }
  } else if (category === 'hobby') {
    if (value === secret.hobby) {
      keep = true;
      filterCharacters(keep);
    } else {
      keep = false
      filterCharacters();
    }
  } else if (category === 'zodiac') {
    if (value === secret.zodiac) {
      keep = true;
      filterCharacters(keep);
    } else {
      keep = false;
      filterCharacters();
    }
  }


  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  // if (category === 'animal' || category === 'personality') {

  // } else if (category === 'hobby' || category === 'zodiac') {

  // }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'animal') {
    if (keep) {
      alert(
        `Yes, the villager is a ${value}! Keep all the villagers that are ${value}`
      )
    } else {
      alert(
        `No, the villager is not a ${value}! Remove all villagers that are ${value}`
      )
    }
  } else if (category === 'personality') {
    if (keep) {
      alert(
        `Yes, the villager is a ${value}! Keep all the villagers that are ${value}`
      )
    } else {
      alert(
        `No, the villager is not a ${value}! Remove all villagers that are ${value}`
      )
    }
    // Similar to the one above
  } else if (category === 'hobby') {
    if (keep) {
      alert(
        `Yes, the villager likes ${value}! Keep all the villagers that like ${value}`
      )
    } else {
      alert(
        `No, the villager hates ${value}! Remove all the villagers that like ${value}!`
      )
    }
  } else if (category === 'zodiac') {
    if (keep) {
      alert(
        `Yes, the villager is a ${value}! Keep all the villagers that are ${value}.`
      )
    } else {
      alert(
        `No, the villager obviously isn't a ${value}! Remove all the villagers that are ${value}`
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
