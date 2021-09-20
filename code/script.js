// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const secretPerson = document.getElementById('secretPerson')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const startButton = document.getElementById('start')
const startWindow = document.getElementById('start-window')


// when you open the page this is the first you see
window.onload = () => {
  startWindow.style.display = 'flex' // showing start window 
  start()
}

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Albin',
    img: 'images/albin.svg',
    skinColor: 'blue',
    skinTexture: 'spots',
    attributes: ['stand on two legs'], //Written with space to look good in modul answer window
    other: []
  },
  {
    name: 'Bonnie',
    img: 'images/bonnie.svg',
    skinColor: 'pink',
    skinTexture: 'stripes',
    attributes: ['stand on two legs'],
    other: []
  },
  {
    name: 'Cooper',
    img: 'images/cooper.svg',
    skinColor: 'green',
    skinTexture: 'spots',
    attributes: ['swim'],
    other: ['teeth'],
  },
  {
    name: 'Dani',
    img: 'images/dani.svg',
    skinColor: 'blue',
    skinTexture: 'spots',
    attributes: ['stand on four legs'],
    other: []
  },
  {
    name: 'Edward',
    img: 'images/edward.svg',
    skinColor: 'blue',
    skinTexture: 'plain',
    attributes: ['stand on four legs'],
    other: ['horn', 'spikes']
  },
  {
    name: 'Freyja',
    img: 'images/freyja.svg',
    skinColor: 'pink',
    skinTexture: 'stripes',
    attributes: ['stand on four legs'],
    other: []
  },
  {
    name: 'George',
    img: 'images/george.svg',
    skinColor: 'red',
    skinTexture: 'stripes',
    attributes: ['stand on four legs'],
    other: ['fins']
  },
  {
    name: 'Holly',
    img: 'images/holly.svg',
    skinColor: 'orange',
    skinTexture: 'spots',
    attributes: ['tstand on two legs'],
    other: []
  },
  {
    name: 'Idris',
    img: 'images/Idris.svg',
    skinColor: 'orange',
    skinTexture: 'plain',
    attributes: ['fly'],
    other: ['beak']
  },

  {
    name: 'Jasmine',
    img: 'images/jasmine.svg',
    skinColor: 'yellow',
    skinTexture: 'spots',
    attributes: ['stand on four legs'],
    other: ['spikes']
  },
  {
    name: 'Kurt',
    img: 'images/kurt.svg',
    skinColor: 'green',
    skinTexture: 'spots',
    attributes: ['stand on two legs'],
    other: ['teeth']
  },
  {
    name: 'Lilly',
    img: 'images/lilly.svg',
    skinColor: 'blue',
    skinTexture: 'stripes',
    attributes: ['swim'],
    other: []
  },
  {
    name: 'Marcus',
    img: 'images/marcus.svg',
    skinColor: 'green',
    skinTexture: 'spots',
    attributes: ['stand on four legs'],
    other: ['horn']
  },
  {
    name: 'Naomi',
    img: 'images/naomi.svg',
    skinColor: 'pink',
    skinTexture: 'spots',
    attributes: ['stand on two legs'],
    other: []
  },
  {
    name: 'Ollie',
    img: 'images/ollie.svg',
    skinColor: 'blue',
    skinTexture: 'plain',
    attributes: ['fly'],
    other: ['beak']
  },
  {
    name: 'Poppy',
    img: 'images/poppy.svg',
    skinColor: 'blue',
    skinTexture: 'stripes',
    attributes: ['stand on four legs'],
    other: ['spikes']
  },
  {
    name: 'Quentin',
    img: 'images/quentin.svg',
    skinColor: 'red',
    skinTexture: 'plain',
    attributes: ['swim'],
    other: ['teeth']
  },
  {
    name: 'Rosie',
    img: 'images/rosie.svg',
    skinColor: 'green',
    skinTexture: 'spots',
    attributes: ['stand on two legs'],
    other: ['teeth']
  },
  {
    name: 'Spencer',
    img: 'images/spencer.svg',
    skinColor: 'green',
    skinTexture: 'plain',
    attributes: ['twolegs'],
    other: ['spikes', 'teeth']
  },
  {
    name: 'Tina',
    img: 'images/tina.svg',
    skinColor: 'orange',
    skinTexture: 'stripes',
    attributes: ['stand on two legs'],
    other: ['fins']
  },
  {
    name: 'Umer',
    img: 'images/umer.svg',
    skinColor: 'red',
    skinTexture: 'plain',
    attributes: ['fly'],
    other: ['beak']
  },
  {
    name: 'Valerie',
    img: 'images/valerie.svg',
    skinColor: 'green',
    skinTexture: 'stripes',
    attributes: ['stand on four legs'],
    other: ['spikes']
  },
  {
    name: 'Walter',
    img: 'images/walter.svg',
    skinColor: 'yellow',
    skinTexture: 'spots',
    attributes: ['stand'],
    other: []
  },
  {
    name: 'Yolanda',
    img: 'images/yolanda.svg',
    skinColor: 'green',
    skinTexture: 'spots',
    attributes: ['stand on four legs'],
    other: ['fins']
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
  setSecret()
  generateBoard()
  selectQuestion()
}

// What else should happen when we start the game?
// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.value;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    value: value,
    // value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'Skin Color' || category === 'Skin/body texture') {
    if (category === 'Skin Color') {
      if (secret.skinColor === value) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }
    else {
      if (secret.skinTexture === value) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }

  } else if (category === 'Attributes' || category === 'Other attributes') {

    if (category === 'Attributes') {
      if (secret.attributes.includes(value)) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }
    else {
      if (secret.other.includes(value)) {
        filterCharacters(true)
      }
      else {
        filterCharacters(false)
      }
    }

  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  let stringPropertyName = ''  //Mappa (translate) Skin color och Skin texture
  let arrayPropertyName = '' //Mappa (translate) Attribute and Other attributes




  // Show the correct alert message for different categories
  if (category === 'Skin Color') {
    stringPropertyName = 'skinColor';
    if (keep) {
      alert(
        `Yes, the dinosaur have ${value} skin! Keep all dinosaurs that has ${value} skin`
      )
    } else {
      alert(
        `No, the dinosaur doesn't have ${value} skin! Remove all dinosaurs that has ${value} skin`
      )
    }

  }
  else if (category === 'Skin/body texture') {
    stringPropertyName = 'skinTexture'
    if (keep) {
      alert(
        `Yes, the dinosaur have ${value}! Keep all dinosaurs that has ${value}`
      )
    } else {
      alert(
        `No, the dinosaur doesn't have ${value}! Remove all dinosaurs that has ${value}`
      )
    }

  } else if (category === 'Attributes') {
    arrayPropertyName = 'attributes';
    if (keep) {
      alert(
        `Yes, the dinosaur ${value}! Keep all dinosaurs that ${value}`
      )
    } else {
      alert(
        `No, the dinosaur doesn't ${value}! Remove all dinosaurs that ${value}`
      )
    }
  }

  else if (category === 'Other attributes') {
    arrayPropertyName = 'other'
    if (keep) {
      alert(
        `Yes, the dinosaur has ${value}! Keep all dinosaurs that has ${value}`
      )
    } else {
      alert(
        `No, the dinosaur doesn't have ${value}! Remove all dinosaurs that has ${value}`
      )
    }

  }
  if (arrayPropertyName !== '') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((character) => {
        //expanded the filter to make the code readable for ME and code reviewer. Code down below does the same thing.
        if (character[arrayPropertyName].includes(value)) { 
          return true;
        }
        else {
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

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const isConfirmed = confirm(`Is ${personToConfirm} your answer?`)
  if (isConfirmed) {
    checkMyGuess(personToConfirm);
  }

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
const checkMyGuess = (personToCheck) => {
    if (personToCheck == secret.name) {
      document.getElementById('winOrLoseText').innerHTML="Yeah! You won! Up for another round?";
    }
    else{
      document.getElementById('winOrLoseText').innerHTML="Oh no! You lost, try again!";
    }

    document.getElementById('winOrLose').style.display='block'; //Show the win or lose section
    // document.getElementById('board').style.display='none'; //Hide the game board
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener("change", selectQuestion);
findOutButton.addEventListener('click', checkQuestion);
playAgainButton.addEventListener('click',() => {
  start()
  document.getElementById('winOrLose').style.display='none'; //This line invokes play again button and draws the board
});

startButton.addEventListener('click', () => {
  startWindow.style.display='none';
  board.style.display = 'flex'
})