/*Array with all the characters, as objects*/
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
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'beard']
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
    accessories: ['sunglasses'],
    other: ['beard']
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
    other: ['hat']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['earing']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
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
    accessories: ['glasses', 'earing'],
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
    accessories: ['sunglasses', 'hat'],
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


/* All the DOM selectors stored as short variables*/
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartBtn = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const playAgainBtn = document.getElementById('playAgain');
const winerOrloserText = document.getElementById('winOrLoseText');
const winerOrLoserDiv = document.getElementById('winOrLose')
const counter = document.getElementById('counter')
const nrOfTryBtn= document.getElementById('nrOfTry')


/*Global variables*/
let secret
let currentQuestion
let charactersInPlay
let secretValue
let numberOfGuess = 0;

charactersInPlay = CHARACTERS

/*Draw the game board*/
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
    numberOfGuess=0;
  })
}

/* Randomly select a person from the characters array and set as the value of the variable called secret*/
const setSecret = () => {
   secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log('The secret person is: ', secret);
};


/* This function to start (and restart) the game*/
const start = () => {
  /* Here we're setting charactersInPlay array to be all the characters to start with*/

  /*Fetch Rendom character*/
  setSecret()
  /*Calls for the board to be generated*/
  generateBoard();
  // selectQuestion()

}

/* setting the currentQuestion object when you select something in the dropdown*/
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

/*This variable stores what option group (category) the question belongs to.*/
  currentQuestion = {
    category: category,
    value: value
  };
  console.log('Current Question is :', currentQuestion);
}

/*This function invoked on 'Find Out' button.*/

/* Compare the currentQuestion details with the secret person details based on category (hair/eyes or accessories/others), to see if we should keep or remove people based on that
Then invoke filterCharacters*/
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep = true
    if (category === "hair" || category === "eyes") {
      if(value === secret[category]) {
       filterCharacters(true);
    } else {
       filterCharacters(false);
    }
  }

  else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
     filterCharacters(true);
    } else{
      filterCharacters(false);
  }
}
}

/* It'll filter the characters array and rearrange the game board.*/
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
    console.log("filterCharacters", category, value);
  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${value} hair! Keep all people that have ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}` )
        
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`)
      charactersInPlay = charactersInPlay.filter((person) =>!person[category].includes(value))

    }
  } else if (category === 'other') {
      if (keep) {
      alert(
        `Yes, the person have ${value}! Keep all people that have ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No,the person does not have ${value}! Remove all people have ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  }
  }
  
  /* Invoke a function to redraw the board with the remaining people. */
  generateBoard()
}

/* when clicking guess, the player first have to confirm that they want to make a guess.*/
const guess = (personToConfirm) => {
  const confirm= charactersInPlay.filter(guesscharacter=>
  guesscharacter.name=== personToConfirm 
  )[0]
  checkMyGuess(confirm)
}

 /*Show the win or lose section & Hide the game board
 If the player confirm, this function will invoked */
const checkMyGuess = (personToCheck) => {
/* Check if the personToCheck is the same as the secret person's name */

  numberOfGuess++;

if(personToCheck.name === secret.name) {
  window.alert('Yes! YOu Won 😊!!! ' );
  winOrLose.style.display='block'
  winerOrloserText.innerHTML = 'Yes! YOu Won 😊!!! ' ;
  board.style.display='none'
 
}else{
  personToCheck.name !== secret.name
  window.alert("No! Guess anothe Person... ");
  winOrLose.style.display = 'none'
  winerOrloserText.innerHTML = " ";
  board.style.display = 'flex';

  if (numberOfGuess > 5) {
    window.alert('You LOST! Refresh the browser and try again. ')
    return start();
  }
  else{
    counter.innerText = numberOfGuess;
  }
}
}

/* Invokes the start function when website is loaded */
start()

/* All event listeners */
restartBtn.addEventListener('click', start);
findOutBtn.addEventListener('click', () => {
  selectQuestion()
  checkQuestion()
})

nrOfTryBtn.addEventListener('click', start);

playAgainBtn.addEventListener('click', () => {
  location.reload()
  return false
})