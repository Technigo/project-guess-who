const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutBtn = document.getElementById("filter", (count = 0));
const winOrLoseText = document.getElementById("winOrLoseText");
const winOrLose = document.getElementById("winOrLose");
const playAgainButton = document.getElementById("playAgain");
const countGuess = document.getElementById("countGuess");




// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['mouth-open']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['multi-colored-shirt','mouth-open']
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
    other: ['mouth-open']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['multi-colored-shirt','mouth-open']
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
    other: ['multi-colored-shirt','mouth-open']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['mouth-open']
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
    other: ['mouth-open']
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
    other: ['mouth-open']
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['multi-colored-shirt','mouth-open']
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['multi-colored-shirt']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['mouth-open']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: ['multi-colored-shirt','mouth-open']
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['mouth-open']
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
    other: ['mouth-open']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['multi-colored-shirt','mouth-open']
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
    other: ['multi-colored-shirt','mouth-open']
  },
]

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let numberOfGuesses = 0;


// Draw the game board
const generateBoard = () => {
  board.innerHTML = "";
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
    `;
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};



// This function to start (and restart) the game
const start = () => {
  // sets charactersInPlay array to be all the characters to start with
  
  charactersInPlay = CHARACTERS;
  // show the board, activating the secret person and the selected question.
  countGuess.innerHTML = "Number of guesses : ";
  generateBoard();
  setSecret();
  selectQuestion();
  winOrLose.style.display = "none";
  board.style.display = "flex";
};


const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  
  const value = questions.value;
  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function invokes when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if(secret[category] === value) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } else if (category === 'accessories' || category === 'other') {
    if(secret[category].includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  
  const { category, value } = currentQuestion;
  
  if (category === "accessories") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );


      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );


      
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
    }
  } else if (category === "other") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
      alert(
        `Yes, the person has a ${value}! Keep all people that have ${value}'s`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}'s`
      );
    }
  } else if (category === "hair") {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair.`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`
      );
    }
  
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
      alert(
        `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes.`
      );
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`
      );
    }
  }
  generateBoard(keep);
};


const guess = (personToCheck) => {
  
  let playerGuess = confirm(`Do you want to guess on this fellow ${personToCheck}?`);
  
  if (playerGuess) {
    checkMyGuess(personToCheck);
  } else {
    alert("You can continue with the game!");
  }
};

// If the player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You won! You guessed on the correct person - ${personToCheck}!`;
  } else {
    winOrLoseText.innerHTML = ` Bad guess! this was not the right person. It was ${secret.name}.`;
  }
  // Shows the section of winner or looser 
  winOrLose.style.display = "flex";
  // Hides the game board
  board.style.display = "none";

};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", () => selectQuestion());

findOutBtn.addEventListener("click", () => {
  checkQuestion();
  //number of guesses made
  count += 1;
  countGuess.innerHTML = "Guess: " + count;
});


playAgainButton.addEventListener("click", start);