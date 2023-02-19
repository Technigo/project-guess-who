// All the DOM selectors stored as short variables
const startPage = document.getElementById('startPage')
const boardWrapper = document.getElementById('boardWrapper')
const questionWrapper = document.getElementById('questionWrapper')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseTexth1 = document.getElementById('winOrLoseText-h1')
const winOrLoseTexth2 = document.getElementById('winOrLoseText-h2')
const winOrLoseImg = document.getElementById('winOrLoseImg')
const questions = document.getElementById('questions')
const qtyGuesses = document.getElementById('qtyGuesses')

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
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    jewellery: false,
    smoker: false,
    beard: true
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: false,
    jewellery: false,
    smoker: true,
    beard: true
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    jewellery: true,
    smoker: false,
    beard: false
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    jewellery: true,
    smoker: false,
    beard: false
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    jewellery: false,
    smoker: true,
    beard: false
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    jewellery: false,
    smoker: true,
    beard: false
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    jewellery: false,
    smoker: true,
    beard: true
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    jewellery: true,
    smoker: false,
    beard: false
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    jewellery: true,
    smoker: false,
    beard: false
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: true,
    jewellery: true,
    smoker: false,
    beard: false
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    jewellery: false,
    smoker: false,
    beard: true
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    jewellery: false,
    smoker: false,
    beard: false
  },
]

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let counter;


// Draw the game board with the current contents of charactersInPlay
const generateBoard = () => {
  boardWrapper.innerHTML = '';
  charactersInPlay.forEach((person) => {
    boardWrapper.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="guessButton" onclick="guess('${person.name}')">Guess</button>
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



// This function is used to start (and restart) the game
const startGame = () => {
  //We reset some of the elements, e.g. the counter to 0 again:
  counter = 0;
  qtyGuesses.innerHTML=`<h3>Question counter:</h3>
                        <p id="counterNumber">${counter}</p>`
  questions.value = "";
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  //We select the secret person
  setSecret();
  //We want to hide the start page, and instead show the question and board sections.
  startPage.style.display = 'none';
  questionWrapper.style.display = 'flex';
  boardWrapper.style.display = 'flex';
  //The win-lose is already hidden for now.
  //We want to generate the board with charactersInPlay, which we already set to all characters to start with.
  generateBoard();
}



const upStartGame = () => {
  // We get to the start page
  startPage.style.display = 'flex';
  questionWrapper.style.display = 'none';
  boardWrapper.style.display = 'none';
  winOrLose.style.display = 'none';
}


// With this function, which is envoked whenever we change the value of the dropdown menu, we store those values (category (i.e. hairColor color) and actual value (i.e. brown) in variables. 
// These variables we also put into an object called currentQuestion):
const selectQuestion = (event) => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  
  //Logs to use if you need to check the output of each:
  //console.log(`category:`, category, `value:`, value);
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
  } else if (category === "accessories") {
    currentQuestion = {
      attribute: value,
      category: category,
      value: true };
    console.log(currentQuestion)
  } else {
    currentQuestion = {
      attribute: value,
      category: category,
      value: true };
    console.log(currentQuestion)
  }
};


// This function is invoked when we click "find out". Then the user has selected the values they would like to filter on, and now we will apply this filtering.
// We also iterate and both store and view the number of "guesses" here.
const checkQuestion = () => {
  //Compare the user selected property to the secret person property. Keep will be a boolean.
  let keep = currentQuestion.value === secret[currentQuestion.attribute];
  
  //Logs for checking that we get the correct comparisons:
  //console.log(`keep:`, keep);   //Should return a boolean, true or false.
  //console.log(`currentQuestion.value:`, currentQuestion.value);
  //console.log(`secret[currentQuestion.attribute]:`, secret[currentQuestion.attribute]);
  
  //We send the keep variable into the next function and run it, where we will apply the filter:
  filterCharacters(keep);

  counter++;
  qtyGuesses.innerHTML=`<h3>Question counter:</h3>
                        <p id="counterNumber">${counter}</p>`
  }



// It'll filter the characters array and redraw the game board, with our "new" charactersInPlay.
// It will also give the user correct alerts with anserts to their questions
const filterCharacters = (keep) => {
  const { attribute, category, value } = currentQuestion;
  
  // filter to keep or remove
  // If keep = true (i.e. the secret person does have what the user asked about, we apply a filter and store inside array charactersInPlay => we store all characters that have said properties in it.)
  // If keep = false (else), (i.e. the secret person does not have what we asked about, we filter the array and store all characters left that also does not have said property in it.)
  if (keep === true) {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[attribute] === value
    );
  } else {
    charactersInPlay = charactersInPlay.filter(
      (person) => person[attribute] !== value
    )
  }
  
  //Logs if you nwant to check how many are left:
  //console.log(`How many characters do we have left?`, charactersInPlay.length);
  //console.log(`Filtered array:`, charactersInPlay);
  
  // Show the correct alert message (messy nested if-loops due to solving grammar issues, sorry!!)
  if (category === 'hair color') {
    if (keep === true) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all that has ${value} ${category}.`
      )
    } else {
      alert(
       `No, the person doesn't have ${value} ${category}! Remove all that has ${value} ${category}.`
      )
    }
  } else if (category === 'eye color') {
    if (keep === true) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all that has ${value} ${category}.`
      )
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all that has ${value} ${category}.`
      )
    }
  } else if (category === 'accessories') {
    if (keep === true) {
      if (attribute === "hat") {
        alert(
          `Yes, the person does wear a ${attribute}! Remove all that does not wear a ${attribute}.`
        )
      } else {      //glasses or jewellery
      alert(
        `Yes, the person does wear ${attribute}! Remove all that does not wear ${attribute}.`
      )
      }
      } else {
        if (attribute === "hat") {
      alert(
        `No, the person doesn't wear a ${attribute}! Remove all that wears a ${attribute}.`
      )
      } else {      //glasses or jewellery
        alert(
          `No, the person doesn't wear ${attribute}! Remove all that wears ${attribute}.`
        )
      }
      }
  } else {
    if (keep === true) {
      if (attribute === "smoker") {
      alert(
        `Yes, the person is a ${attribute}! Keep all ${attribute}s.`
      )
      } else {        //beard
      alert(
        `Yes, the person has a ${attribute}! Keep all who has a ${attribute}.`
      )
      }
    } else {
      if (attribute === "smoker") {
        alert(
          `No, the person is not a ${attribute}. Remove all ${attribute}s.`
        )
        } else {        //beard
        alert(
          `No, the person does not have a ${attribute}. Remove all persons with a ${attribute}.`
          )
        }
    }
  }
  generateBoard();
}



// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you sure you want to guess on ${suspect}? There's no going back...`)

  if (makeAGuess) {
    checkMyGuess(suspect)
  }
}



// If you confirm, this function is invoked. It will show the Win/Lose page, and its content (depending on the result).
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseTexth1.innerHTML = `YAY!`;
    winOrLoseTexth2.innerHTML = `You solved it in ${counter} tries! The secret person was indeed ${secret.name}.`;
    winOrLoseImg.innerHTML = `<img
                                class="win-img"
                                src="images/Winner_Monochromatic2.png"
                                alt="Winner"
                              />`;
  } else {
    winOrLoseTexth1.innerHTML = `WRONG!`;
    winOrLoseTexth2.innerHTML = `The secret person was ${secret.name}. <br> ${counter} tries and still no success... Better luck next time!`;
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



// Invokes the start function when website is loaded (we get to the start page)
upStartGame();



// All the event listeners connected to start/restart:
restartBtn.addEventListener('click', upStartGame);
beginBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', upStartGame);

// All the event listeners connected to filtering and guessing:
filterBtn.addEventListener('click', checkQuestion);
questions.addEventListener('change', selectQuestion);
