// DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')

const CHARACTERS = [
  {
    name: 'Antman',
    img: 'images/antman.png',
    hairColor: 'hidden',
    whatSpecies: 'human',
    accessories: ['helmet'],
    abilities: ['change']
  },
  {
    name: 'Black Panther',
    img: 'images/blackpanther.png',
    hairColor: 'hidden',
    whatSpecies: 'human',
    accessories: ['helmet'],
    abilities: ['strong']
  },
  {
    name: 'Black Widow',
    img: 'images/blackwidow.png',
    hairColor: 'yellow',
    whatSpecies: 'human',
    accessories: ['weapon'],
    abilities: ['awesome']
  },
  {
    name: 'Captain America',
    img: 'images/captainamerica.png',
    hairColor: 'beige',
    whatSpecies: 'human',
    accessories: [],
    abilities: ['strong', 'awesome']
  },
  {
    name: 'Captain Marvel',
    img: 'images/captainmarvel.png',
    hairColor: 'yellow',
    whatSpecies: 'human',
    accessories: [],
    abilities: ['fly', 'strong']
  },
  {
    name: 'dr Strange',
    img: 'images/drstrange.png',
    hairColor: 'black',
    whatSpecies: 'human',
    accessories: ['cape'],
    abilities: ['awesome']
  },
  {
    name: 'Falcon',
    img: 'images/falcon.png',
    hairColor: 'brown',
    whatSpecies: 'human',
    accessories: [],
    abilities: ['fly']
  },
  {
    name: 'Fury',
    img: 'images/fury.png',
    hairColor: 'none',
    whatSpecies: 'human',
    accessories: [],
    abilities: ['awesome']
  },
  {
    name: 'Gamora',
    img: 'images/gamora.png',
    hairColor: 'brown',
    whatSpecies: 'alien',
    accessories: ['cape', 'weapon'],
    abilities: ['awesome']
  },
  {
    name: 'Groot',
    img: 'images/groot.png',
    hairColor: 'moss',
    whatSpecies: 'tree',
    accessories: [],
    abilities: ['change', 'strong']
  },
  {
    name: 'Hawkeye',
    img: 'images/hawkeye.png',
    hairColor: 'brown',
    whatSpecies: 'human',
    accessories: ['weapon'],
    abilities: ['awesome']
  },
  {
    name: 'Hulk',
    img: 'images/hulk.png',
    hairColor: 'black',
    whatSpecies: 'human',
    accessories: [],
    abilities: ['strong', 'change']
  },
  {
    name: 'Iron Man',
    img: 'images/ironman.png',
    hairColor: 'hidden',
    whatSpecies: 'human',
    accessories: ['helmet'],
    abilities: ['fly', 'awesome']
  },
  {
    name: 'Loki',
    img: 'images/loki.png',
    hairColor: 'hidden',
    whatSpecies: 'god',
    accessories: ['cape', 'weapon', 'helmet'],
    abilities: ['cange']
  },
  {
    name: 'Mantis',
    img: 'images/mantis.png',
    hairColor: 'black',
    whatSpecies: 'alien',
    accessories: [],
    abilities: ['awesome']
  },
  {
    name: 'Nebula',
    img: 'images/nebula.png',
    hairColor: 'none',
    whatSpecies: 'robot',
    accessories: ['weapon'],
    abilities: ['awesome']
  },
  {
    name: 'Rocket',
    img: 'images/rocket.png',
    hairColor: 'fur',
    whatSpecies: 'animal',
    accessories: [],
    abilities: ['awesome']
  },
  {
    name: 'Spiderman',
    img: 'images/spiderman.png',
    hairColor: 'hidden',
    whatSpecies: 'human',
    accessories: [],
    abilities: ['awesome']
  },
  {
    name: 'Star Lord',
    img: 'images/starlord.png',
    hairColor: 'hidden',
    whatSpecies: 'human',
    accessories: ['weapon', 'helmet'],
    abilities: ['awesome']
  },
  {
    name: 'Thanos',
    img: 'images/thanos.png',
    hairColor: 'none',
    whatSpecies: 'alien',
    accessories: [],
    abilities: ['strong']
  },
  {
    name: 'Thor',
    img: 'images/thor.png',
    hairColor: 'yellow',
    whatSpecies: 'god',
    accessories: ['cape'],
    abilities: ['strong', 'awesome']
  },
  {
    name: 'Vision',
    img: 'images/vision.png',
    hairColor: 'none',
    whatSpecies: 'robot',
    accessories: ['cape'],
    abilities: ['awesome']
  },
  {
    name: 'Wanda',
    img: 'images/wanda.png',
    hairColor: 'beige',
    whatSpecies: 'human',
    accessories: ['weapon'],
    abilities: ['awesome']
  },
  {
    name: 'Winter Soldier',
    img: 'images/wintersoldier.png',
    hairColor: 'brown',
    whatSpecies: 'human',
    accessories: ['weapon'],
    abilities: ['awesome']
  },
];

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
  setSecret()
  generateBoard()
  selectQuestion()

}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value;

  
// This variable stores what option group (category) the question belongs to.
  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function is invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion



  // This invoke filterCharacters
  if (category === 'hair color' || category === 'what species') {
    if (category === 'hair color') {
      if (secret.hairColor === value) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }
    else {
      if (secret.whatSpecies === value) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }
  
  } else if (category === 'accessories' || category === 'abilities') {

    if (category === 'accessories') {
      if (secret.accessories.includes(value)) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }
    else {
      if (secret.abilities.includes(value)) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }
  }
}

// It will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  let stringPropertyName = '' 
  let arrayPropertyName = '' 




// Show the correct alert message for different categories
  if (category === 'hair color') {
    stringPropertyName = 'hairColor';
    if (keep) {
      alert(
        `Yes, the Avenger have ${value} hair! Keep all Avengers that have ${value} hair`
      )
    } else {
      alert(
        `No, the Avenger doesn't have ${value} hair! Remove all Avengers that have ${value} hair`
      )
    }
  }
  else if (category === 'what species') {
    stringPropertyName = 'whatSpecies'
    if (keep) {
      alert(
        `Yes, the Avenger is a ${value}! Keep all Avengers that is a ${value}`
      )
    } else {
      alert(
        `No, the Avenger isn´t a ${value}! Remove all Avenger that isn´t a ${value}`
      )
    }
  } else if (category === 'accessories') {
    arrayPropertyName = 'accessories';
    if (keep) {
      alert(
        `Yes, the Avenger have a ${value}! Keep all Avengers that have a ${value}`
      )
    } else {
      alert(
        `No, the Avenger doesn't have a ${value}! Remove all Avengers that have a ${value}`
      )
    }
  }

  else if (category === 'abilities') {
    arrayPropertyName = 'abilities'
    if (keep) {
      alert(
        `Yes, the Avenger is ${value}! Keep all Avengers that is ${value}`
      )
    } else {
      alert(
        `No, the Avenger isn´t ${value}! Remove all Avengers that isn´t ${value}`
      )
    }
    generateBoard()
  }
  if (arrayPropertyName !== '') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((character) => {

        if (character[arrayPropertyName].includes(value)) { 
          return true;
        } else {
          return false;
        }
      });
    } else {
      charactersInPlay = charactersInPlay.filter((character) => !character[arrayPropertyName].includes(value))
    }
  }
  else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((character) => character[stringPropertyName] === value)
    }
    else {
      charactersInPlay = charactersInPlay.filter((character) => character[stringPropertyName] !== value)
    }
  }
  
    generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const isConfirmed = confirm(`Is ${personToConfirm} your answer?`)
  if (isConfirmed) {
    checkMyGuess(personToConfirm);
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
    if (personToCheck == secret.name) {
      document.getElementById('winOrLoseText').innerHTML="WOW! You just saved the world!";
    }
    else{
      document.getElementById('winOrLoseText').innerHTML="Call for back-up and get back out there!";
    }

    document.getElementById('winOrLose').style.display='block'; //Show the win or lose section
    // document.getElementById('board').style.display='none'; //Hide the game board
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener('click', checkQuestion);
playAgainButton.addEventListener('click',() => { 
  start()
document.getElementById('winOrLose').style.display='none'; //This line ivokes play again button and draws the board
});