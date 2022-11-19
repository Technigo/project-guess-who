// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const winOrLose = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sun glasses', 'hat'],
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
    accessories: ['tie'],
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
    accessories: ['sun glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sun glasses'],
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
    accessories: ['sun glasses'],
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
    accessories: ['sun glasses', 'hat'],
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
    accessories: ['tie'],
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
let secretPerson;
let currentQuestion;
let charactersInPlay;

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
  });
  // Here we're setting charactersInPlay array to be all the characters to start with
 /* charactersInPlay.forEach((person) => {  
   const name = person.name;
      document.getElementById(`${name}Btn`).addEventListener('click', () => {
          guess(name);
      });
    }); */
  };
    // What else should happen when we start the game? 


// Randomly select a person from the characters array and set as the value of the variable called secretPerson
const setsecretPerson = () => {
  secretPerson = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log('secretPerson person', secretPerson);
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  setsecretPerson();
  selectQuestion();
  generateBoard()
  console.log('Generating Board')
  console.log('setting secretPerson character')
};
  // setting the currentQuestion object when you select something in the dropdown
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;
  console.log('this is a test for category and value')
  
  currentQuestion = {
    category: category,
    value: value
  }
  //checkQuestion();
  };

  // This function should be invoked when you click on 'Find Out' button.
  // Compare the currentQuestion details with the secretPerson person details 
  // in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  const checkQuestion = () => {
    const { category, value } = currentQuestion;
  
    if (category === 'hair' || category === 'eyes') {
      if (value === secretPerson.hair || value === secretPerson.eyes) {
        console.log('correct')
        filterCharacters(true)
      } else {
        console.log('false')
        filterCharacters(false)
      }
    } else if (category === 'accessories' || category === 'other') {
      if (secretPerson[category].includes(value)) {
        console.log('correct')
        filterCharacters(true)
      } else {
        console.log('false')
        filterCharacters(false)
      }
    } else {
      filterCharacters(false)
    };
  };

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log('test filter out persons to keep')
  const { category, value } = currentQuestion;
   // Show the correct alert message for different categories
   if (category === 'hair') {
    if (keep) {
      alert(`Oh yeah, the person has ${value} hair! Keep all people that has ${value} hair.`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)); 
    } else {
      alert(`Oh no, the person doesn’t have ${value} hair! Remove all people that have ${value} hair.`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  } else if (category === 'eyes') {
    if (keep) {
        alert(`Wohoo, the person has ${value} eyes! Keep all people that has ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === (value)) 
    } else {
        alert(`Nope, the person doesn’t have ${value} eyes! Remove all people that have ${value} eyes.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== (value))
      }
  } else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person ${value}! Keep all people that is ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't ${value}! Remove all people that is ${value}`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
   };
   
   if (category === 'hair' || category ==='eyes') {
    if (keep){
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else /* (category === 'accessories' || category === 'other') */ {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))      }
  }
 generateBoard();
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`); 
  if (confirmGuess) {
    checkMyGuess(personToConfirm)
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secretPerson.name) {
    winOrLoseText.innerHTML= (`Whoop whoop, that is correct!`)
    winOrLose.style.display= 'flex';
  } else {
    alert(`Nope, that is not the correct answe`)
  }
}

// Invokes the start function when website is loaded
start ();

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)