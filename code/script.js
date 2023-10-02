// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
//CHANGES: from createElement to getElementById, because created them in HTML instead.
const winnerLoserImg = document.getElementById('winner-loser-img');
const winnerLoserP = document.getElementById('winner-loser-p');
const startBox = document.getElementById('startBox');
const startButton = document.getElementById('startButton');
const timerElement = document.getElementById('timer')
const winOrLoseTimer = document.getElementById('winOrLoseTimer')

//TOOK THESE OUT TO CREATE THEM DIRECTYLY IN HTML INSTEAD
// //Adding classes to the DOM variables
// winnerLoserImg.className = 'winner-loser-img';
// winnerLoserP.className = 'winner-loser-p';
// //Setting children to the winOrLose element
// winOrLose.appendChild(winnerLoserImg);
// winOrLose.appendChild(winnerLoserP);


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Barbie',
    img: 'imagesnew/barbie.png',
    hair: 'blonde',
    eyes: 'blue',
    accessories: ['jewelry'],
    other: ['a fashion habit']
  },
  {
    name: 'Count Orlok',
    img: 'imagesnew/countOrlok.png',
    hair: 'no',
    eyes: 'haunting',
    accessories: [],
    other: ['elf ears', 'a magical habit', 'a striking complexion']
  },
  {
    name: 'Cruella De Vil',
    img: 'imagesnew/cruellaDeVil.png',
    hair: 'very specific',
    eyes: 'blue',
    accessories: [],
    other: ['a smoking habit', 'a fashion habit']
  },
  {
    name: 'Deloris',
    img: 'imagesnew/deloris.png',
    hair: 'black',
    eyes: 'brown',
    accessories: ['sunglasses', 'a headpiece'],
    other: []
  },
  {
    name: 'Dobby',
    img: 'imagesnew/dobby.png',
    hair: 'no',
    eyes: 'blue',
    accessories: [],
    other: ['elf ears', 'a magical habit']
  },
  {
    name: 'Dorothy',
    img: 'imagesnew/dorothyGale.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['a dog'],
    other: ['braids', 'a magical habit']
  },
  {
    name: 'mr Corleone',
    img: 'imagesnew/donVitoCorleone.png',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: ['a mustache']
  },
  {
    name: 'Professor',
    img: 'imagesnew/drEmmettBrown.png',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Dre Parker',
    img: 'imagesnew/dreParker.png',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['braids']
  },

  {
    name: 'Elle Woods',
    img: 'imagesnew/elleWoods.png',
    hair: 'blonde',
    eyes: 'blue',
    accessories: ['sunglasses', 'a dog'],
    other: ['a fashion habit']
  },
  {
    name: 'Galadriel',
    img: 'imagesnew/galadriel.png',
    hair: 'blonde',
    eyes: 'blue',
    accessories: ['jewelry', 'a headpiece'],
    other: ['elf ears', 'a magical habit']
  },
  {
    name: 'Genie',
    img: 'imagesnew/genie.png',
    hair: 'black',
    eyes: 'green',
    accessories: ['jewelry'],
    other: ['braids', 'a beard', 'a magical habit', 'a striking complexion', 'a mustache']
  },
  {
    name: 'Gimli',
    img: 'imagesnew/gimli.png',
    hair: 'red',
    eyes: 'green',
    accessories: ['a headpiece'],
    other: ['braids', 'a beard']
  },
  {
    name: 'Harry Potter',
    img: 'imagesnew/harryPotter.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses',],
    other: ['a magical habit']
  },
  {
    name: 'Indiana Jones',
    img: 'imagesnew/indieanaJones.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['a headpiece'],
    other: ['a mustache']
  },
  {
    name: 'John Coffey',
    img: 'imagesnew/johnCoffey.png',
    hair: 'no',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jules Winnfield',
    img: 'imagesnew/julesWinnfield.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['a weapon'],
    other: ['a mustache']
  },
  {
    name: 'Katniss Everdeen',
    img: 'imagesnew/katnissEverdeen.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['a weapon'],
    other: []
  },
  {
    name: 'Lobby Boy',
    img: 'imagesnew/lobbyBoy.png',
    hair: 'black',
    eyes: 'brown',
    accessories: ['a headpiece'],
    other: ['a mustache']
  },
  {
    name: 'Maleficent',
    img: 'imagesnew/malificent.png',
    hair: 'black',
    eyes: 'blue',
    accessories: ['a headpiece'],
    other: ['a magical habit']
  },
  {
    name: 'Mary Poppins',
    img: 'imagesnew/maryPoppins.png',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['a headpiece'],
    other: ['a magical habit']
  },
  {
    name: 'Miranda Priestly',
    img: 'imagesnew/mirandaPriestly.png',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['sunglasses', 'jewelry'],
    other: ['a fashion habit']
  },
  {
    name: 'Queen of Hearts',
    img: 'imagesnew/queenOfHearts.png',
    hair: 'red',
    eyes: 'haunting',
    accessories: ['a headpiece'],
    other: ['a striking complexion']
  },
  {
    name: 'Red',
    img: 'imagesnew/red.png',
    hair: 'black',
    eyes: 'brown',
    accessories: [ 'a headpiece'],
    other: []
  },
  {
    name: 'Spock',
    img: 'imagesnew/spock.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: [],
    other: ['elf ears']
  },
  {
    name: 'Storm',
    img: 'imagesnew/storm.png',
    hair: 'white',
    eyes: 'haunting',
    accessories: [],
    other: ['a magical habit']
  },
  {
    name: 'the Joker',
    img: 'imagesnew/theJoker.png',
    hair: 'very specific',
    eyes: 'haunting',
    accessories: ['cards'],
    other: ['a magical habit', 'a striking complexion']
  },
  {
    name: 'the Mask',
    img: 'imagesnew/theMask.png',
    hair: 'no',
    eyes: 'brown',
    accessories: ['dollars', 'a headpiece'],
    other: ['a magical habit','a striking complexion']
  },
  {
    name: 'William Somerset',
    img: 'imagesnew/williamSomerset.png',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['a plan'],
    other: ['a mustache']
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let guessCount = 0 //counts guesses(questions!), starting at 0
let timerInterval;
let seconds = 0;

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card" style="background-image: url('${person.img}'); background-image: linear-gradient(transparent.rgba(0,0,0,10.6));">
        <p>${person.name}</p>
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
  console.log(`secret character is ${secret.name}`)
}
//This function shows the number of guesses (later invokes in filter button event listener)
//Also the DOM selectors inside function because i want it to retrieve the updated count!
const guessCountDisplay = () => {
  const guessCountBox = document.getElementById('guess-container');
  const winOrLoseGuessContainer = document.getElementById('win-or-lose-guess-container');

  guessCountBox.innerText = `${guessCount}`;
  winOrLoseGuessContainer.innerText = `${guessCount}`;
}

//This function starts the timer!
const startTimer = () => {
  timerInterval = setInterval(() => {
    seconds++;
    timerElement.innerText = seconds; 
  }, 1000); // updates the timer every second!
}
//This function stops the timer! And gives the elapsed time!
const stopTimer = () => {
  clearInterval(timerInterval);
  return seconds;
}


// This function to start (and restart) the game
const start = () => {

  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecret(); // secret character is set
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value

  //Saving the values from above for next function
  currentQuestion = {
    category: category,
    value: value,
  }
  console.log("question selected", currentQuestion);
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
 
  if (category === 'hair' || category === 'eyes') {
    //to see that value is the same, then keep is loaded with true, invoke next func  :)
   if (secret[category] === value) { 
    keep = true
    filterCharacters(true);
   } //to see that value is NOT same, then keep is loaded with false, invoke next func  :)
   else {
    keep = false
    filterCharacters(false);
   }
  } else if (category === 'accessories' || category === 'other') {
    //to se if object has any value set at all for that question, true of false. 
    if (secret[category].includes(value)) {
      keep = true
      filterCharacters(true);
    } else {
      keep = false
      filterCharacters(false);
    }
  }
}

// Filter the characters array, give user response, redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } 
    else {
      alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } 
  else if (category === 'other') {
    if (keep) {alert(`Yes, the person has ${value}! Keep all people that have ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the person doesn't have ${value}! Remove all people that have ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else {
    if (keep) {
      alert(`Yes, the person has ${value} ${category}! Keep all the people with ${value} ${category}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all the people with ${value} ${category}.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
  generateBoard(); //invoke new board with the new filters!
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const userGuess = confirm(`Are you sure it's ...${personToConfirm}?`);
  if (userGuess){
    const elapsedTime = stopTimer(); // Stop timer
    checkMyGuess(personToConfirm, elapsedTime); //If user guess, checkMyGuess is invoked
  }
 console.log(personToConfirm); 
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck, elapsedTime) => {
  board.innerHTML = '' //hide the game board
  winOrLose.style.display = 'flex'; //show win or lose section
  if (personToCheck === secret.name) {
    console.log(`WINNER BABY!`)
    winOrLoseText.innerHTML = `YOU'RE A WINNER BABY!`;
    /* THIS CODE DID NOT WORK, it blocked the playAgainButton somehow?
    winOrLose.innerHTML +=`
    <img class="win-or-lose-card" src=${secret.img} alt=${secret.name}</img>
    <p class="win-or-lose-p"> ${secret.name} was the person we were looking for!</p>`;
    */
    winnerLoserImg.src = secret.img
    winnerLoserImg.alt = secret.name
    winnerLoserP.innerHTML = `${secret.name} was the person we were looking for!`
    winOrLoseTimer.innerHTML = `It took you ${elapsedTime} seconds!`;
  }
  else {
    console.log(`LOSER BABY!`)
    winOrLoseText.innerHTML = `YOU'RE A LOSER BABY!`;
    winnerLoserImg.src = secret.img
    winnerLoserImg.alt = secret.name
    winnerLoserP.innerHTML = `Your guess was ${personToCheck}... <strong> ${secret.name} </strong> was the person we were looking for!`
    winOrLoseTimer.innerHTML = `It took you ${elapsedTime} seconds!`;
  }
}

// Invokes the start function when website is loaded


// All the event listeners
startButton.addEventListener('click', () => {
  startBox.style.display = 'none'; // Hide the start box
  startTimer();
  start(); // Call the function to start the game
});
restartButton.addEventListener('click', () => {
  window.location.reload(); //reloads the page if user clicks restart
} );
filterButton.addEventListener('click', () => {
  checkQuestion();
  guessCount += 1; //Count is increased by 1
  guessCountDisplay(); //Updates the actual count!
})
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', () => {
  window.location.reload(); //reloads the page if user clicks play again
} );








