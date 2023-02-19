// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLoseSection = document.getElementById('winOrLose')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')
const questionsAskedDisplay = document.getElementById('questionsAsked')
const timer = document.getElementById('timer')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Amy Stake',
    img: 'images/amy.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: ['neckwear'],
    other: []
  },
  {
    name: 'Doug Graves',
    img: 'images/doug.png',
    hair: 'black',
    eyes: 'brown',
    accessories: ['hat', 'neckwear'],
    other: []
  },
  {
    name: 'Ella Vader',
    img: 'images/ella.png',
    hair: 'orange',
    eyes: 'blue',
    accessories: ['glasses','neckwear'],
    other: ['smoker']
  },
  {
    name: 'Revered Green',
    img: 'images/green.png',
    hair: 'brown',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jay Walker',
    img: 'images/jay.png',
    hair: 'orange',
    eyes: 'brown',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Justin Tyme',
    img: 'images/justin.png',
    hair: 'black',
    eyes: 'grey',
    accessories: ['hat', 'neckwear'],
    other: []
  },
  {
    name: 'Kandy Kane',
    img: 'images/kandy.png',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses','neckwear'],
    other: []
  },
  {
    name: 'Luke Atmey',
    img: 'images/luke.png',
    hair: 'hidden',
    eyes: 'grey',
    accessories: ['glasses', 'neckwear'],
    other: []
  },

  {
    name: 'Maple Searup',
    img: 'images/maple.png',
    hair: 'orange',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Colonel Mustard',
    img: 'images/mustard.png',
    hair: 'black',
    eyes: 'brown',
    accessories: ['hat', 'neckwear'],
    other: ['smoker']
  },
  {
    name: 'Paige Turner',
    img: 'images/paige.png',
    hair: 'white',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Mrs. Peacock',
    img: 'images/peacock.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: [],
    other: []
  },
  {
    name: 'Philipa Bucket',
    img: 'images/philipa.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['neckwear'],
    other: []
  },
  {
    name: 'Professor Plum',
    img: 'images/plum.png',
    hair: 'yellow',
    eyes: 'brown',
    accessories: ['glasses', 'neckwear'],
    other: []
  },
  {
    name: 'Redd Vyne',
    img: 'images/redd.png',
    hair: 'black',
    eyes: 'brown',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Robyn Banks',
    img: 'images/robyn.png',
    hair: 'hidden',
    eyes: 'brown',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Ms. Scarlett',
    img: 'images/scarlett.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['neckwear'],
    other: []
  },
  {
    name: 'Sue Flay',
    img: 'images/sue.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'notepad'],
    other: []
  },
  {
    name: 'Tim Burr',
    img: 'images/tim.png',
    hair: 'brown',
    eyes: 'grey',
    accessories: ['hat', 'neckwear'],
    other: []
  },

  {
    name: 'Ty Prater',
    img: 'images/ty.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['hat', 'notepad'],
    other: []
  },
  {
    name: 'Violet Rose',
    img: 'images/violet.png',
    hair: 'purple',
    eyes: 'blue',
    accessories: ['neckwear'],
    other: []
  },
  {
    name: 'Mrs. White',
    img: 'images/white.png',
    hair: 'white',
    eyes: 'grey',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Zoltan Pepper',
    img: 'images/zoltan.png',
    hair: 'hidden',
    eyes: 'brown',
    accessories: ['hat', 'neckwear'],
    other: []
  }
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let countQuestionsAsked = 0
const questionsAllowed = 4
let gameName = "Murder on the Vasa Express"
let playerName = "Holmes"
let gameWonSound = new Audio("assets/win-audio.mp3")
let gameLostSound = new Audio("assets/lost-audio.mp3")
let gameBackgroundSound = new Audio("assets/game-bg-audio.mp3")
let timerStart = Date.now();



// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  CHARACTERS.forEach((person) => {
    if (charactersInPlay.includes(person)) {
    board.innerHTML += `
      <div class="card">
        <p class = "person-name-class">${person.name}</p>
        <div class = "person-image-class">
          <img src=${person.img} alt=${person.name}>
        </div>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
    } else if (!(charactersInPlay.includes(person))) {
      board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <div class = "person-image-class">
          <img src=${person.img} alt=${person.name}>
        </div>
        <div class = "card-back-class">
         <img class = "card-back" src="images/not-guilty-black.png" alt = "Suspect is not guilty">
        </div>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
    }
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
  generateBoard();
  setSecret();
  askName();
  gameBackgroundSound.play();
  countQuestionsAsked = 0 //reset counter for new game
  questionsAskedDisplay.innerText = 0
  
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label //variable for the category of the dropdown option group

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value //variable for the option value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  selectQuestion() //To avoid the error of this function not being called if user selects the default from questions dropdown

 const {category, value} = currentQuestion
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || (secret.other.includes(value))) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  }
}

// Filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  countQuestionsAsked++
  const { category, value } = currentQuestion
 
  // Show the correct alert message for different categories
  if (countQuestionsAsked > questionsAllowed) {
    alertify.alert(gameName, "You've run out of questions to ask. </br> Time to make an accusation!");
  
  } else {
    questionsAskedDisplay.innerText = countQuestionsAsked

    if (category === 'hair') {
      if (keep) {
        alertify.alert(gameName,
          `Yes, the suspect has ${value} hair! Keep all suspects that have ${value} hair.`
        )
      } else {
        alertify.alert(gameName,
          `No, the suspect doesn't have ${value} hair! Remove all suspects that have ${value} hair.`
        )
      }
    } else if (category === 'eyes') {
      if (keep) {
        alertify.alert(gameName,
          `Yes the suspect has ${value} eyes! Keep all suspects with ${value} eyes.`
        )
      } else[
        alertify.alert(gameName,
          `No, the suspect doesn't have ${value} eyes! Remove all suspects with ${value} eyes.`
        )
      ]
    } else if (category === 'accessories') {
      if (keep) {
        alertify.alert(gameName,
          `Yes, the suspect has ${value}! Keep all suspects that have ${value}.`
        )
      } else {
        alertify.alert(gameName,
          `No, the suspect doesn't have ${value}! Remove all suspects that have ${value}.`
        )
      }
    } else if (category === 'other') {
      if (keep) {
        alertify.alert(gameName,
          `Yes, the suspect is a ${value}! Keep all suspects that are ${value}s.`
        )
      } else {
        alertify.alert(gameName,
          `No, the suspect isn't a ${value}! Remove all suspects that are ${value}s.`
        )
      }
    }
  }

  // Determine what is the category
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  }
  generateBoard();
}


// when clicking guess, the player first has to confirm that they want to make a guess.
const guess = (suspect) => {
  const makeAGuess = 
    alertify.confirm(gameName, `Are you sure you want to accuse ${suspect}?`,
    function(){
      //alertify.success('Ok');
      checkMyGuess(suspect);
    },
    function(){
      //alertify.error('Cancel');
    });
}


// If you confirm, this function is invoked
const checkMyGuess = (suspectToCheck) => {
 //Check if the suspectToCheck is the same as the secret person's name
  if(suspectToCheck === secret.name) {
    winOrLoseText.innerHTML = `YOU WON ${playerName}! </br> ${secret.name} was the murderer!`
    gameWonSound.play();
  } else {
    winOrLoseText.innerHTML = `YOU LOST ${playerName}! </br> ${suspectToCheck} is innocent.</br> ${secret.name} was the murderer!`
    gameLostSound.play();
  }
  winOrLoseSection.style.display = 'flex';
  board.style.display = 'none';
}

const playAgain = () => {
  start()
  winOrLoseSection.style.display = 'none'
  board.style.display = 'flex'
  countQuestionsAsked = 0 // resets counter to 0 
  questionsAskedDisplay.innerText = countQuestionsAsked //and displays it
}

const askName = () => {
  alertify.prompt(gameName, "Enter player name: ", "Holmes",
  function(evt, value ){
    playerName = value,
    alertify.success;
    alertify.alert(gameName,
      `Welcome Detective ${playerName}!
       </br> Dr. Black has been murdered on the Vasa & it's up to you to solve the mystery. `
    )
  },
  function(){
    alertify.error;
  });
  startTimer();
} 

// Timer
const startTimer = () =>{
  setInterval(function() {
      let millisecondsElapsed = Date.now() - timerStart; // milliseconds elapsed since start
      let secondsElapsed = Math.floor(millisecondsElapsed / 1000);
      let minutes = Math.floor(secondsElapsed / 60);
      let seconds = secondsElapsed % 60
      let formattedTimeElapsed = (`${(minutes > 9 ? minutes : `0${minutes}`)}:${(seconds > 9 ? seconds : `0${seconds}`)}`);
      timer.innerHTML = formattedTimeElapsed;
  }, 1000); 
  }
// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', playAgain)


