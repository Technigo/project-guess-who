// All the DOM selectors stored as short variables
const startPage = document.getElementById('startPage')
const boardWrapper = document.getElementById('boardWrapper')
const questionWrapper = document.getElementById('questionWrapper')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLoseImg = document.getElementById('winOrLoseImg')
const questions = document.getElementById('questions')

//Button DOM selectors
const beginBtn = document.getElementById('beginBtn');
const filterBtn = document.getElementById('filterBtn');
const restartBtn = document.getElementById('restartBtn');
const playAgainBtn = document.getElementById('playAgainBtn');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
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
    accessories: [],
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
    accessories: ['glasses'],
    other: []
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
    accessories: ['glasses'],
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
    accessories: ['glasses', 'hat'],
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
let secret
let currentQuestion
let charactersInPlay

// Draw the game board
const generateBoard = () => {
  boardWrapper.innerHTML = '';
  charactersInPlay.forEach((person) => {
    boardWrapper.innerHTML += `
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
}



// Randomly select a person from the characters array and set as secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(`secret person:`, secret);
}

// This function to start (and restart) the game
const startGame = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  console.log(`No of characters available`, CHARACTERS.length);
  //We select the secret person
  setSecret();
  //We want to hide the start page, and instead show the question and board sections.
  startPage.style.display = 'none';
  questionWrapper.style.display = 'flex';
  boardWrapper.style.display = 'flex';
  //The win-lose is already hidden for now.
  generateBoard();
}

const upStartGame = () => {
  // We get to the start page
  startPage.style.display = 'flex';
  questionWrapper.style.display = 'none';
  boardWrapper.style.display = 'none';
  winOrLose.style.display = 'none';
}

// With this function, which is envoked whenever we change the value of the dropdown menu, we store those values (category (i.e. hair color) and actual value (i.e. brown) in variables. These variables we also put into an object called currentQuestion):
const selectQuestion = (event) => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  
  console.log(`category:`, category, `value:`, value);
  //console.log(`event:`, event);
  
  if (category === "hair color") {
    currentQuestion = {
      attribute: 'hairColor',
      category: category,
      value: value };
    console.log(currentQuestion)
  } else if (category === "eye color") {
    currentQuestion = {
      attribute: 'eyeColor',
      category: category,
      value: value };
    console.log(currentQuestion)
  } else {
    console.log(`Nooo something is not right...`)
  }
  
};

// This function is invoked when we click "find out". Then the user has selected the values they would like to filter on, and now we will apply this filtering.
const checkQuestion = () => {
  console.log(`Tjoho now we run checkQuestion`);
  
  //Compare the user selected property to the secret person property. Keep will be a boolean.
  let keep = currentQuestion.value === secret[currentQuestion.attribute];
  
  //For checking that we get the correct comparisons:
  //console.log(`keep:`, keep);   //Should return a boolean, true or false.
  //console.log(`currentQuestion.value:`, currentQuestion.value);
  //console.log(`secret[currentQuestion.attribute]:`, secret[currentQuestion.attribute]);
  
  //We send the keep variable into the next function and run it, where we will use filter:
  filterCharacters(keep);
  }
// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log("filterCharacters is now running tjoho yippie")
  const { attribute, category, value } = currentQuestion;


  console.log("filterCharacters:", category, value);
  console.log(`keep:`, keep)
  console.log(`charactersInPlay before if else:`, charactersInPlay)
  
  // filter to keep or remove
  // If keep = true (i.e. the secret person does have what the user asked about, we apply a filter and store inside array charactersInPlay => we store all characters that have said properties in it.)
  // If keep = false (else), (i.e. the secret person does not have what we asked about, we filter the array and store all characters left that also does not have said property in it.)
  //In O.G code we just say if (keep) - why??
  if (keep === true) {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[attribute] === value
    );
    console.log(`yes box, keep is true, remove all people who does not have this property.`);
  } else {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[attribute] !== value
    )
    console.log(`nope, keep is NOT. Remove all people with this property.`)
  }
  
  console.log(`How many characters do we have left?`, charactersInPlay.length);
  console.log(`Filtered array:`, charactersInPlay);
  
  // Show the correct alert message (ADJUST LATER)
  if (category === 'hair color') {
    if (keep === true) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all that has ${value} ${category}`
      )
    } else {
      alert(
       `No, the person doesn't have ${value} ${category}! Remove all that has ${value} ${category}`
      )
    }
  } else if (category === 'eye color') {
    if (keep === true) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all that has ${value} ${category}`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all that has ${value} ${category}`
      )
    }
  } else {
    if (keep === true) {
      alert(
        `Something is not right...`
      )
    } else {
      alert(
        `Something is not right at all...`
      )
    }
  }
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you sure you want to guess on ${suspect}?`)

  if (makeAGuess) {
    checkMyGuess(suspect)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = `YAY! Winner winner chicken dinner!`;
    winOrLoseImg.innerHTML = `<img
                                class="win-img"
                                src="images/Winner_Monochromatic2.png"
                                alt="Winner"
                              />`;
  } else {
    winOrLoseText.innerHTML = `WRONG! You suck.`;
    winOrLoseImg.innerHTML = `<img
                                class="lose-img"
                                src="images/Explosion_TwoColor4.png"
                                alt="Loser"
                              />`;
  }
  winOrLose.style.display = 'flex'
  boardWrapper.style.display = 'none'
  questionWrapper.style.display = 'none'
}

// Invokes the start function when website is loaded
upStartGame();

// All the event listeners
restartBtn.addEventListener('click', upStartGame);
beginBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', upStartGame);

filterBtn.addEventListener('click', checkQuestion);
questions.addEventListener('change', selectQuestion);