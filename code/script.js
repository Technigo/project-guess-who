// DEAR EVALUATOR! Please use the console in browser to check the current secret and some other console.logs.

"use strict";

// All the DOM selectors stored as short variables---------------------------------
const board = document.getElementById('board');
const questions = document.getElementById('questions');
// select element
const restartButton = document.getElementById('restart');
//Find button
const findoutButton = document.getElementById("filter");

// counter for attempts
const counterfield = document.getElementById("attempts");

// result screen after guessing a person
const resultscreen = document.getElementById("winOrLose");

// result text on result screen
const resultText = document.getElementById("winOrLoseText");

// restart button on result screen
const playagain = document.getElementById("playagain");

// Array CHARACTERS with all the characters as objects, keys: name/img/hair/eyes/accessories/other(only smoker)
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'code/images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'code/images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'code/images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'code/images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'code/images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'code/images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'code/images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'code/images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'code/images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'code/images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'code/images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'code/images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'code/images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'code/images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'code/images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'code/images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'code/images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'code/images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'code/images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'code/images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'code/images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'code/images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'code/images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'code/images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables ------------------------------------------
let secret
let currentQuestion
let charactersInPlay
// all filtered/leftover cards per turn/initially all
let counterGuesses = 0;

//functions
// create the game board
const generateBoard = () => {
  board.innerHTML = ''
  // bord is main/.game-board/always clear, then fill with card divs or remaning rest thru loops
  charactersInPlay.forEach((person) => {
    // person= 1 objekt
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="confirmguess('${person.name}')">Guess</button>
        </div >
      </div >
  `
    // div for span is pos: abs + d:none, only displayed on  hover->.card:hover .guess
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  counterGuesses = 0;
  counterfield.innerHTML = counterGuesses,
    // Here we're setting charactersInPlay array to be all the characters to start with, first turn all
    charactersInPlay = CHARACTERS
  // for a start all items in array
  generateBoard(charactersInPlay);
  setSecret();
  console.log(secret);
  // console.log(charactersInPlay);
}

// setting the currentQuestion/guess object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentElement.label
  // =select tag thru id/options/which is selected and from this their parent->Kategorie
  // optgroup in between dosnt matter
  // This variable stores what optgroup (category) the question belongs to.

  // We also need a variable that stores the actual value/option of the question we've selected.
  const questionValue = questions.options[questions.selectedIndex].value;
  console.log("guess: " + questionValue);

  currentQuestion = {
    category: category,
    questionValue: questionValue
    // creates local object/tuple with a pair->key/value
  }
  // console.log("guess " + currentQuestion);
}

// This function should be invoked when you click on 'Find Out' button-> send your guess
const checkQuestion = () => {
  const { category, questionValue } = currentQuestion
  let comparison;
  // new local object with varaibles, gets filled with object currenQuestion from above
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // check values in object with key/value pairs

  if (category === 'hair') {
    if (questionValue === secret[category]) {
      // secret is a DOM querey, then placeholder for cat=key
      comparison = true;
    } else {
      comparison = false;
    }
    console.log("comparison: " + comparison);
  } else if (category === "eyes") {
    if (questionValue === secret[category]) {
      comparison = true;
    } else {
      comparison = false;
    }
    console.log("comparison: " + comparison);
  } else if (category === 'accessories') {
    if (secret[category].includes(questionValue)) {
      comparison = true;
    } else {
      comparison = false;
    }
    console.log("comparison: " + comparison);
  } else if (category === "other") {
    if (questionValue === secret.other[0]) {
      comparison = true;
    } else {
      comparison = false;
    }
    console.log("comparison: " + comparison);
    filterCharacters(comparison);
  }

  // This given routine is so overcomplicated, that I discarded it. I took a nice plain "if/else if" above and this is much easier to read and understand. Basta. =]
  //   if (category === "hair" || category === "eyes"){
  //   if (questionValue === secret[category]) {
  //     comparison = true;
  //   } else {
  //     comparison = false;
  //   }
  //   // check nested arrays in object
  // } else if (category === 'accessories' || category === 'other') {
  //   if (category === "other") {
  //     if (questionValue === secret.other[0]) { comparison = true; }
  //   } else {
  //     comparison = false;
  //   }
  //   else if (questionValue === "accessories") {
  //   if (secret[category].includes(questionValue)) {
  //     comparison = true;
  //   } else {
  //     comparison = false;
  //   }
  //   console.log(comparison);
  // }
  filterCharacters(comparison);
}

// filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // gets true, false from checkQuestion above
  counterGuesses += 1;
  console.log("tries: ", counterGuesses);
  counterfield.innerHTML = counterGuesses;
  // update counter field in aside
  const { category, questionValue } = currentQuestion
  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person has ${questionValue} hair! Keep all people with ${questionValue} hair.`);
      charactersInPlay = charactersInPlay.filter((items) => items[category] === questionValue);
      // console.log(charactersInPlay);
    } else {
      alert(`No, the person does not have ${questionValue} hair!`)
    }
  } else if (category === 'eyes') {
    if (keep) {
      alert(`Yes, the person has ${questionValue} eyes.Keep all people with ${questionValue} eyes.`);
      charactersInPlay = charactersInPlay.filter((items) => items[category] === questionValue);
    } else {
      alert(`No, the person does not have ${questionValue} eyes! Remove all people that have ${questionValue} eyes.`)
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${questionValue} !Keep all people that wear ${questionValue} `);
      charactersInPlay = charactersInPlay.filter((items) => items[category].includes(questionValue));
    } else {
      alert(
        `No, the person doesn't wear ${questionValue}!`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is ${questionValue}! Keep all people who are ${questionValue}.`
      );
      charactersInPlay = charactersInPlay.filter((items) => items[category].includes(questionValue));
    } else {
      alert(
        `No, the person is not a ${questionValue}!`
      );
    }
  }
  // when clicking guess, the player first have to confirm that they want to make a guess. 

  generateBoard(charactersInPlay);
}

//called by event handler confirmguess to check guess of user
const checkguess = (guessToCheck) => {
  counterGuesses += 1;
  // because this is not a new question, so we take guesses so far +1 for this one
  const check = (secret.name === guessToCheck);
  if (check) {
    console.log("guess correct");
    resultText.innerHTML = `
    Yeah, your guess was right!
    You had ${counterGuesses} attempts.`;
    resultText.style.color = "yellow";
    document.getElementById("winOrLose").style.backgroundColor = "orange";
  } else {
    console.log("guess wrong");
    resultText.innerHTML = `
    Oops! Your guess was wrong.
    You had ${counterGuesses} attempts.
    Try again!`;
    resultText.style.color = "white";
    document.getElementById("winOrLose").style.backgroundColor = "darkblue";
  }
  resultscreen.style.display = "unset";
}
//event handler for guess button 
const confirmguess = (guess) => {
  const confirmation = window.confirm(`Make a guess on ${guess}?`);
  if (confirmation) {
    checkguess(guess);
  }
}

// All the event listeners------------------------------------
restartButton.addEventListener('click', start);

questions.addEventListener("change", selectQuestion);

findoutButton.addEventListener("click", checkQuestion);

// to restart game on click on restart button
restartButton.addEventListener("click", start);

// play again button on result screen
playagain.addEventListener("click", () => {
  resultscreen.style.display = "none";
  // unmask resultscreen for new game
  start();
});

// CODE STARTS HERE ----------------------------------------------------------------------

// Invokes the start function when website is loaded
start();

