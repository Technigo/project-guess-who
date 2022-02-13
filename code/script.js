// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const winOrLoseSection = document.getElementById('winOrLose')
const winOrLoseText= document.getElementById('winOrLoseText')


// Array with all the characters avaible, structured as objects with properties 
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: [],
    other: ['a smoking habit', 'beard']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['tie'],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'blonde',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['sunglasses'],
    other: ['beard']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['jewelleries']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'blonde',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'ginger',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['jewelleries']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'different',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['a smoking habit']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
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
    hair: 'ginger',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['a smoking habit', 'beard']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'different',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'ginger',
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
    other: ['jewelleries']
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
    hair: 'blonde',
    eyes: 'hidden',
    accessories: ['sunglasses', 'hat'],
    other: ['jewelleries']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'different',
    eyes: 'brown',
    accessories: [],
    other: ['jewelleries']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'blonde',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['tie'],
    other: ['beard']
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
let secret;
let currentQuestion;
let charactersInPlay;

// Draw the game board (invoked on row 255)
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

// A person is randomly selected a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
};

// This function starts (and restarts) the game
const start = () => {

  // By invoking below functions, a new board of characters is generated and a secret person selected. 
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecret() ;
};

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
const category = questions.options[questions.selectedIndex].parentNode.label
const value = questions.value; // This variable stores what option group (category) the question belongs to.

  // Each question is related to category and values,
  currentQuestion = {
    category: category,
    value: value
    // value: value
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = false

  // Invoking filterCharacters
  if (category === "hair") {
    keep = secret.hair === value;
  } else if (category === "eyes") {
    keep = secret.eyes === value;
  } else if (category === "accessories") {
    keep = secret.accessories.includes(value);
  } else if (category === "other") {
    keep = secret.other.includes(value);
  }
  filterCharacters(keep); // Invokes filterCharacters

}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
 
  // Show the correct alert message for different categories dependent if they match the value of the secret person

  if (category === 'accessories') {
    if (keep) {
      alert(
        `Correctomundo, the person wears ${value}! KEEP all people who wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person does NOT wear ${value}! REMOVE all people who wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Correctomundo, the person has ${value}! KEEP all people who have ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else if (keep) {
    } else {
      alert(
        `No, the person does NOT have ${value}! REMOVE all people who have ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } if (category === 'hair') {
    if (keep) {
      alert(
        `Correctomundo, the person has ${value} hair! KEEP all people with ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person does NOT have ${value} hair! REMOVE all people with ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value);
    }
  } if (category === 'eyes') {
    if (keep) {
      alert(
        `Correctomundo, the person has ${value} eyes! KEEP all people with ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person does NOT have ${value} eyes! REMOVE all people with ${value} eyes.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value);
    }
  }
  generateBoard()
  }

// Player has to confirm before guessing whom the secret person is
  const guess = (suspectCharacter) => {
    const confirmGuess = confirm(`Are you REALLY sure you want to guess?`)
    if (confirmGuess)
      checkMyGuess(suspectCharacter)
  }
  
  // If you confirm, this function is invoked and different text is shown dependent of guess is right or wrong
  const checkMyGuess = (suspectCharacter) => {
    if (suspectCharacter === secret.name) {
      winOrLoseText.innerHTML = `WELL DONE, you did it! Congratulations!`
    } else {
      winOrLoseText.innerHTML = `Oh no, you lost...it was ${secret.name}!`
    }
    winOrLose.style.display = 'flex'
  }  

  // Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start) ;
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', () => {
start ()
window.location.reload(); 
});

