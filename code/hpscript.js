// All the DOM selectors stored as short variables
const board = document.querySelector('.game-board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const playAgainButton = document.getElementById('playAgain');
const winOrLose = document.querySelector('.win-or-lose-wrapper');
const winOrLoseText = document.getElementById('winOrLoseText');

// Was going to bring in the characters with an API but time ran out.
// async function fetchData() {
//   // Make a fetch and save it in a variable. Await means Javascript is going to stop here and get the item, instead of calling the rest of the code before. 
//   let response = await fetch("https://hp-api.onrender.com/api/characters");
//   // Render into a JSON format, save into a variable. Again, await means it will do it now instead of just giving us a promise. 
//   let body = await response.json();
//   console.log(body);
// } fetchData()

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Harry Potter',
    img: 'https://ik.imagekit.io/hpapi/harry.jpg',
    house: 'gryffindor',
    hair: 'black',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Hermione Granger',
    img: 'https://ik.imagekit.io/hpapi/hermione.jpeg',
    house: 'gryffindor',
    hair: 'brown',
    type: 'witch',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Ron Weasly',
    img: 'https://ik.imagekit.io/hpapi/ron.jpg',
    house: 'gryffindor',
    hair: 'red',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Minerva McGonagall',
    img: 'https://ik.imagekit.io/hpapi/mcgonagall.jpg',
    house: 'gryffindor',
    hair: 'black',
    type: 'witch',
    species: 'human',
    isTeacher: true
  },
  {
    name: 'Draco Malfoy',
    img: 'https://ik.imagekit.io/hpapi/draco.jpg',
    house: 'slytherin',
    hair: 'white',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Severus Snape',
    img: 'https://ik.imagekit.io/hpapi/snape.jpg',
    house: 'slytherin',
    hair: 'black',
    type: 'wizard',
    species: 'human',
    isTeacher: true
  },
  {
    name: 'Rubeus Hagrid',
    img: 'https://ik.imagekit.io/hpapi/hagrid.png',
    house: 'gryffindor',
    hair: 'brown',
    type: 'wizard',
    species: 'half-giant',
    isTeacher: true
  },
  {
    name: 'Luna Lovegood',
    img: 'https://ik.imagekit.io/hpapi/luna.jpg',
    house: 'ravenclaw',
    hair: 'white',
    type: 'witch',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Mrs Norris',
    img: 'https://ik.imagekit.io/hpapi/norris.JPG',
    house: '',
    hair: 'brown',
    type: '',
    species: 'cat',
    isTeacher: false
  },

  {
    name: 'Remus Lupin',
    img: 'https://ik.imagekit.io/hpapi/lupin.jpg',
    house: 'gryffindor',
    hair: 'brown',
    type: 'wizard',
    species: 'werewolf',
    isTeacher: true
  },
  {
    name: 'Ginny Weasly',
    img: 'https://ik.imagekit.io/hpapi/ginny.jpg',
    house: 'gryffindor',
    hair: 'red',
    type: 'witch',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Lord Voldemort',
    img: 'https://ik.imagekit.io/hpapi/voldemort.jpg',
    house: 'slytherin',
    hair: 'bald',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Dolores Umbridge',
    img: 'https://ik.imagekit.io/hpapi/umbridge.jpg',
    house: 'slytherin',
    hair: 'grey',
    type: 'witch',
    species: 'human',
    isTeacher: true
  },
  {
    name: 'Cedric Diggory',
    img: 'https://ik.imagekit.io/hpapi/cedric.png',
    house: 'hufflepuff',
    hair: 'brown',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Cho Chang',
    img: 'https://ik.imagekit.io/hpapi/cho.jpg',
    house: 'ravenclaw',
    hair: 'black',
    type: 'witch',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Neville Longbottom',
    img: 'https://ik.imagekit.io/hpapi/neville.jpg',
    house: 'gryffindor',
    hair: 'brown',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Sirius black',
    img: 'https://ik.imagekit.io/hpapi/sirius.JPG',
    house: 'gryffindor',
    hair: 'black',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Arthur Weasley',
    img: 'https://ik.imagekit.io/hpapi/arthur.jpg',
    house: 'gryffindor',
    hair: 'red',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Bellatrix Lestrange',
    img: 'https://ik.imagekit.io/hpapi/bellatrix.jpg',
    house: 'slytherin',
    hair: 'black',
    type: 'witch',
    species: 'human',
    isTeacher: false
  },
  {
    name: 'Lucius Malfoy',
    img: 'https://ik.imagekit.io/hpapi/lucius.jpg',
    house: 'slytherin',
    hair: 'white',
    type: 'wizard',
    species: 'human',
    isTeacher: false
  },
]

// Global variables
let secret;
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
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
  console.log(secret.name);
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value
  };
};

// This function is invoked when user clicks the 'Find Out' button.
const checkQuestion = () => {
  // Have removed the category from the destructioning of currentQuestion here since it isn't used below
  const { value } = currentQuestion;

  // Here we take in and define keep so that it the checkQuestion function knows if we should save or not when the value is equal to the properties of the secret.
  let keep;

  // Comparing if the secret persons property-value is the same as the chosen value. All these can be on the same line with logical operator || between them since the all would return keep = true
  if (secret.house === value || secret.hair === value || secret.species === value || secret.type === value || secret.isTeacher === true) {
    keep = true;
  } else {
    keep = false;
  }

  // Passing on the keep value to the filterCharacters function
  filterCharacters(keep);

}// Here the characters array is filtered and game board is redrawn
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  if (category === 'house' || category === 'hair' || category === 'type' || category === 'species') {
    // Saves the filtered characters in the variable filtered
    filtered = person => person[category] === value;
  } else if (category === 'teacher') {
    filtered = person => person.isTeacher;
  }

  // Here two new arrays are created, with the filtered characters in them
  const positiveCharacters = charactersInPlay.filter(filtered);
  const negativeCharacters = charactersInPlay.filter(person => !filtered(person));

  if (keep) {
    if (category === 'teacher') {
      alert(
        `Yes, the character is a ${value}. Keep all matching characters.`
      );
      // Teacher is the first, because all options after teacher can be written in the similar syntax.
    } else {
      alert(
        `Yes, the character has ${value} ${category}! Keep all matching characters.`
      );
    }
    charactersInPlay = positiveCharacters;
  } else {
    if (category === 'teacher') {
      alert(
        `No, the character isn't a ${value}. Remove all matching characters`
      );
    } else {
      alert(
        `No, the character doesn't have ${value} ${category}! Remove all matching characters.`
      );
    }
    charactersInPlay = negativeCharacters;
  }
  // Regenerates the board with the filtered characters - those left after the question has been checked. 
  generateBoard();
};

// Function to make a guess at the character of choice and then to confirm that choice.
const guess = (personToConfirm) => {
  // Saves the parameter personToConfirm in a variable called playerGuess
  const playerGuess = personToConfirm;

  // If player presses OK - in other words confirms === true - then checkMyGuess is invoked. I'm passing in playerGuess as an argument so that we can use that value in the checkMyGuess function.
  if (confirm(`Are you sure you want to guess on ${playerGuess}?`)) {
    checkMyGuess(playerGuess);
  } else {
    // If they choose cancel they'll end up in the same situation as before the guess button was clicked.
    return false
  }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // The section with the class winOrLose is hidden in CSS, this line makes it visible again.
  winOrLose.style.display = "flex";
  board.style.display = "none"; // Without setting board to display: none, some of the characters where visible on scroll

  if (personToCheck === secret.name) {
    winOrLoseText.textContent = `Yay - ${personToCheck} was correct! Congrats – you won! 🙌`;
  } else {
    winOrLoseText.textContent = `I'm sorry - ${personToCheck} was incorrect! 😥 Wanna go again?`;
  }
};

// Count is set to zero here, if this value is inside the function it doesn't increment.
let count = 1;
// Counter function, increments via using the same eventListener as for the checkQuestion.
const counter = () => {
  let counterSection = document.querySelector('.counter');
  let finalCount = count++

  counterSection.innerHTML =
    `<p>Guesses made: 
    <span style="font-weight: bolder; color: #5a52b4;">${finalCount}</span>
    </p>`
}

//timer


// Function to restart the game after the guess has been checked. We first need to set the winOrLose section to display: none again, otherwise we can't see that the board has been reset. Then the start-function gets invoked. We don't have to generate the board again here, since that happens in the start function, same with the secret. 
const restartGame = () => {
  winOrLose.style.display = "none";
  board.style.display = "flex";
  start();
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
playAgainButton.addEventListener('click', restartGame);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', counter, checkQuestion);