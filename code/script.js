// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const namePlaceholder = document.getElementById('player-name');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutBtn = document.getElementById('filter');
const winLoseScreen = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainBtn = document.getElementById('playAgain');
const questionCounter = document.getElementById('number-of-questions');
let addMinutes = document.getElementById('minutes');
let addSeconds = document.getElementById('seconds');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['artsy']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    other: ['parrot']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'white',
    eyes: 'blue',
    accessories: ['hat', 'beard'],
    other: ['smoker', 'haddok']
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
    accessories: ['glasses', 'beard'],
    other: ['bad-day']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'jewlery'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['artsy']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewlery'],
    other: ['artsy']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker', 'artsy', 'bad-day']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat', 'beard'],
    other: ['smoker', 'artsy', 'bad-day']
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
    accessories: ['glasses', 'hat', 'beard'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'jewlery'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['artsy']
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
    accessories: ['glasses', 'jewlery'],
    other: ['bad-day', 'artsy']
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
    accessories: ['glasses', 'hat', 'jewlery'],
    other: ['artsy']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'white',
    eyes: 'brown',
    accessories: ['jewlery'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['bad-day']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['beard'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: ['bad-day']
  },
]

// Global variables
let secretPerson;
let currentQuestion;
let charactersInPlay;
let keep;
let questionsAsked;
let minutes;
let seconds; 
let playerName;
let interval;

//'Randomly' select a person from the characters array and set as the value of the variable called secret
const setSecretPerson = () => {
  secretPerson = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
}

// Makes characters appear on the board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
    <div class="card">
    <img src=${person.img} alt=${person.name}>
    <p>${person.name}</p>
    <div class="guess">
    <span>Guess on ${person.name}?</span>
    <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
    </div>
    </div>
    `
  })
}

//Timer function
window.onload = () => {
  minutes = 00;
  seconds = 00; 
  const timerFunction = () => {
    seconds++; 
    if(seconds <= 9){
      addSeconds.innerHTML = "0" + seconds;
    } else if (seconds > 9 && seconds <= 59){
      addSeconds.innerHTML = seconds;
    } else if (seconds > 59) {
      minutes++;
      addMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      addSeconds.innerHTML = "0" + 0;
    } else if (minutes > 9){
      addMinutes.innerHTML = minutes;
    }
  }
  interval = setInterval(timerFunction, 1000);
}

//player is prompted to enter name
const setName = () => {
playerName = prompt(`Lets play a game of Guess who! Who is guessing, whom is Who? (What is your name?)`);
namePlaceholder.innerHTML = playerName;}

// This function will start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  //Assign pre-selected value to make it possible to ask for brown hair without selecting another options first.
  currentQuestion = {
    category: 'hair',
    value: 'brown'
  };
  setSecretPerson();
  generateBoard();
  //reset counter
  questionsAsked = 5;
  questionCounter.innerHTML = questionsAsked;
  setTimeout(setName, 500);
}
start();

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  }
}

const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (category === 'hair'|| category === 'eyes') {
    //Per category, check if selected question has the same value as secretPersons. If so, variable keep gets the value of true
    if (secretPerson[category] === value) {
      keep = true;
    } else {
      keep = false;
    }
  } else {
    if (value === 'no-accessories' || value === 'no-other') {
      // Check if secretPerson has no length to category array, ie accessories. If so, keep is true.
      if (!secretPerson[category].length) {
        keep = true;
      } else {
        keep = false;
      }
    } else if (secretPerson[category].includes(value)) {
      keep = true;
    } else {
      keep = false;
    }
  } 
  filterCharacters(keep);
}


const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  if (category === 'hair'|| category === 'eyes') {
    if (keep === true) {
      Swal.fire({
        title: 'YES!',
        text: `The person has ${value} ${category}! Characters without ${value} ${category} will be removed.`,
        icon: 'success',
        confirmButtonText: 'Continue',
        confirmButtonColor: 'var(--secondary)',
      })
      // If keep is true charactersInPlay are filtered so only characters who have the same value for current category are kept.
      charactersInPlay = charactersInPlay.filter(character => character[category] === value);
    } else {
      Swal.fire({
        title: `No!`,
        text: `The person doesn't have ${value} ${category}! Characters with ${value} ${category} will be removed.`,
        icon: 'error',
        confirmButtonText: 'Continue',
        confirmButtonColor: 'var(--secondary)'
      })
      // If keep is false charactersInPlay are filtered so all characters with the same value for selected category as the question asked are filterd from the array. 
      charactersInPlay = charactersInPlay.filter(character => character[category] !== value);
    }
  } else if (category === 'accessories') {
    if (keep === true) {
      Swal.fire({
        title: 'YES!',
        text: `The person wears ${value}! Characters without ${value} will be removed.`,
        icon: 'success',
        confirmButtonText: 'Continue',
        confirmButtonColor: 'var(--secondary)'
      })
      if (value === 'no-accessories') {
        charactersInPlay = charactersInPlay.filter(character => !character[category].length);
      } else if (value !== 'no-accessories') {
        charactersInPlay = charactersInPlay.filter(character => character[category].includes(value))
      }
    } else {
      if (value === 'no-accessories') {
        //SecretPerson has some accessories and question has value "no-accessories". 
        Swal.fire({
          title: `No!`,
          text: `The person does wear some accessories! Remove all people without accessories`,
          icon: 'error',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
        charactersInPlay = charactersInPlay.filter(character => character[category].length)
      } else if (value !== 'no-accessories') {
        charactersInPlay = charactersInPlay.filter(character => !character[category].includes(value));
        Swal.fire({
          title: `No!`,
          text: `The person doesn't wear ${value}! Remove all people with ${value}.`,
          icon: 'error',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
        }
    }
  } else {
    if (keep === true) {
      //Here I use individual statements for each value to make the alert text more grammatically accurate.
      if (value === 'no-other') {
        Swal.fire({
          title: 'Yes!',
          text: `The person has no "other" attributes. Characters with "other" attributes will be removed..`,
          icon: 'success',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
        charactersInPlay = charactersInPlay.filter(character => !character[category].length);
      } else {
      if (value === 'smoker') {
        Swal.fire({
          title: 'YES!',
          text: `The person has a smoking habit. Characters without a smoking habit will be removed.`,
          icon: 'success',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
      } else if (value === 'haddok') {
        Swal.fire({
          title: 'YES!',
          text: `The person looks a bit like Captain Haddok. Characters that does not look like him will be removed.`,
          icon: 'success',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
      } else if (value === 'artsy') {
        Swal.fire({
          title: 'YES!',
          text: `Based on the creators prejudices, the person probably likes art. Characters that does not look like they have an interest in art will be removed.`,
          icon: 'success',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
      } else if (value === 'parrot') {
        Swal.fire({
          title: 'YES!',
          text: `The person has a parrot. Characters without a parrot will be removed.`,
          icon: 'success',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
      } else {
        Swal.fire({
          title: 'YES!',
          text: `It looks like the person is having a bad day. Characters that seems to have an okay day will be removed.`,
          icon: 'success',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
      } 
      charactersInPlay = charactersInPlay.filter(character => character[category].includes(value));
      }
    } else {
      if (value === 'no-other') {
        //SecretPerson has some "other" attributes and question has value "no-other". 
        // If value is 'no-other', alert special messages and keep all characters with no lenght on other-array.
        Swal.fire({
          title: `No!`,
          text: `The person does have other attrbutes! Characters with no "other" attributes will be removed.`,
          icon: 'error',
          confirmButtonText: 'Continue',
          confirmButtonColor: 'var(--secondary)'
        })
        charactersInPlay = charactersInPlay.filter(character => character[category].length)
      } else {  
        if (value === 'smoker') {
          Swal.fire({
            title: `No!`,
            text: `The person does not have a smoking habit. Characters with a smoking habit will be removed.`,
            icon: 'error',
            confirmButtonText: 'Continue',
            confirmButtonColor: 'var(--secondary)'
          })
        } else if( value === 'haddok') {
          Swal.fire({
            title: `No!`,
            text: `The person does not look like Captain Haddok. Characters that looks like him will be removed.`,
            icon: 'error',
            confirmButtonText: 'Continue',
            confirmButtonColor: 'var(--secondary)'
          })
        } else if (value === 'artsy') {
          Swal.fire({
            title: `No!`,
            text: `Based on the creators prejudices, the person is probably not that into art. Characters that looks like they are interested in art will be removed.`,
            icon: 'error',
            confirmButtonText: 'Continue',
            confirmButtonColor: 'var(--secondary)'
          })
        } else if (value === 'parrot') {
          Swal.fire({
            title: `No!`,
            text: `The person does not have a parrot. Characters with a parrot will be removed.`,
            icon: 'error',
            confirmButtonText: 'Continue',
            confirmButtonColor: 'var(--secondary)'
          })
        } else {
          Swal.fire({
            title: `No!`,
            text: `The person seems to be having a pretty okay day. Characters that seems to have a bad day will be removed.`,
            icon: 'error',
            confirmButtonText: 'Continue',
            confirmButtonColor: 'var(--secondary)'
          })
        } 
      charactersInPlay = charactersInPlay.filter(character => !character[category].includes(value));
      }
    }
  }
  // For all cases, run function to refresh board with filtered characters
  generateBoard();
  // Check is player has any cuestions left to use, otherwise prevent further guesses by removing question-wrapper
  if (questionsAsked === 0) {
    Swal.fire({
      title: `You're out of guesses!`,
      text: `That was you last question. Guess now or forfeit the game!`,
      icon: 'info',
      confirmButtonText: 'Continue'
    })
  document.getElementById('question-wrapper').style.display='none';
  }
}

// when clicking guess, the player first have to confirm that they want to make a guess. If so, run checkMyGuess
const guess = (personToConfirm) => {
  Swal.fire({
      title: "Confirm your guess?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      confirmButtonColor: 'var(--secondary)',
      cancelButtonColor: 'var(--primary)'
  }).then((result) => {
    if (result.isConfirmed) {
    checkMyGuess(personToConfirm)  
    }
  })
}

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secretPerson.name) {
    Swal.fire({
      title: `Correct!`,
      text: `${personToCheck} is the secret person!`,
      icon: 'success',
      confirmButtonText: 'Continue',
      confirmButtonColor: 'var(--secondary)'
    })
    //clear the board
    board.innerHTML = ''
    // Changing winLoseScreens display attribute from none to flex, making it visible.
    winLoseScreen.style.display='flex';
    winOrLoseText.innerHTML = `You win, ${playerName}! In ${minutes} minutes and ${seconds} seconds, with ${questionsAsked} questions remaining, you guessed Who!`;

  } else {
    Swal.fire({
      title: `Wrong!`,
      text: `Too bad! ${personToCheck} is not the secret person!`,
      icon: 'error',
      confirmButtonText: 'Continue',
      confirmButtonColor: 'var(--secondary)'
    })
    board.innerHTML = ''
    winLoseScreen.style.display='flex';
    winOrLoseText.innerHTML = `You lose, ${playerName}! In ${minutes} minutes and ${seconds} seconds, with ${questionsAsked} questions remaining, you couldn't guess Who!`;
  }
}

// All the event listeners
restartButton.addEventListener('click', () => {
  clearInterval(interval);
  location.reload();
  start();
});
questions.addEventListener('change', selectQuestion);
findOutBtn.addEventListener('click', () => {
  questionsAsked--;
  checkQuestion();
  questionCounter.innerHTML = questionsAsked;
})
playAgainBtn.addEventListener('click', () => {
  location.reload();
  start();
})