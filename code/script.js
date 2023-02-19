// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const playAgainButton = document.getElementById('playAgain');
const playerLifes = document.getElementById("lifes");
const muteButton = document.getElementById("mute");
const aside = document.getElementById("aside");



//const playerTimer = document.getElementById('timer');

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Boh',
    img: 'images/boh.png',
    hair: 'yellow',
    clothes:"" ,
    accessories: [],
    other: []
  },
  {
    name: 'Boiler Geezer',
    img: 'images/boiler_geezer.png',
    hair: 'bald',
    clothes: 'red',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Calcifer',
    img: 'images/calcifer.png',
    hair: '',
    clothes: '',
    accessories: [],
    other: []
  },
  {
    name: 'Catbus',
    img: 'images/catbus.png',
    hair: 'mixed',
    clothes: '',
    accessories: [],
    other: ['teeth showing']
  },
  {
    name: 'chihiro',
    img: 'images/chihiro.png',
    hair: 'black',
    clothes: 'red',
    accessories: ['bow'],
    other: ['human']
  },
  {
    name: 'Haku',
    img: 'images/haku.png',
    hair: 'mixed',
    clothes: '',
   // accessories: [],
    other: []
  },
  {
    name: 'jiji',
    img: 'images/jiji.png',
    hair: 'black',
    clothes: '',
    accessories: [],
    other: []
  },
  {
    name: 'kiki',
    img: 'images/kiki.png',
    hair: 'black',
    clothes: 'blue',
    accessories: ['glasses'],
    other: ['human']
  },
  {
    name: 'kodama',
    img: 'images/kodama.png',
    hair: '',
    clothes: '',
    accessories: [],
    other: ['group']
  },

  {
    name: 'moro',
    img: 'images/moro.png',
    hair: 'white',
    clothes: '',
    accessories: [],
    other: ['teeth showing']
  },
  {
    name: 'No Face',
    img: 'images/no_face.png',
    hair: '',
    clothes: 'black',
    accessories: ['mask'],
    other: []
  },
  {
    name: 'San',
    img: 'images/san.png',
    hair: 'white',
    clothes: '',
    accessories: ['mask,earrings'],
    other: []
  },
  {
    name: 'Susuwatari',
    img: 'images/susuwatari.png',
    hair: 'black',
    clothes: '',
    accessories: ['stars'],
    other: ['group']
  },
  {
    name: 'Totoro',
    img: 'images/totoro.png',
    hair: 'mixed',
    clothes: 'hidden',
    accessories: ['hat'],
    other: ['teeth showing']
  },
  {
    name: 'Turnip Head',
    img: 'images/turnip_head.png',
    hair: '',
    clothes: 'blue',
    accessories: ['hat,pipe'],
    other: ['teeth showing']
  },
  {
    name: 'White & Blue totoros',
    img: 'images/white-blue_totoros.png',
    hair: 'mixed',
    clothes: '',
    accessories: ['leaf'],
    other: []
  },

]

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let keep;
let lifes;
let backGroundSound = new Audio("./audio/song_background.mp3")  //sound


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
          <button class="filled-button small" 
          onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
};

// This function to start (and restart) the game
const start = () => {
  // 3. Show the win or lose section
  winOrLose.style.display = "none"
  // 4. Hide the game board
  board.style.display = "flex"
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  // What else should happen when we start the game?
  generateBoard(); // the board shoud appear
  setSecret(); // invoke the funtion so the computer select the secretc character
  lifes = 4
  playerLifes.innerHTML = `LIFES: ${lifes}` // the player starts with 3 lifes
  //gamingTimer();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
   const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button. (step4)
const checkQuestion = () => {
  // Decrease user lifes.
  if (lifes > 0) {
    lifes --;
    playerLifes.innerHTML = `LIFES: ${lifes}`
  } else {
    alert("Oh no! You have ran out of questions :c ! Now you have a final turn of guessing by clicking the character card")
    return
  }

  selectQuestion();
  const { category, value } = currentQuestion
  // Compare the currentQuestion details with the secret person details in a 
  
 
  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      keep = true
      } else {
        keep = false
    }

  } else if (category === 'accessories' || category === 'other') {
     if (secret[category].includes(value)) {
      keep = true
      } else {
        keep = false
     }

    }
  
  filterCharacters(keep)
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {

  const { category, value } = currentQuestion
 
  // Show the correct alert message for different categories
  if (category === "accessories") {
    if (keep) {
     alert(
       `Yeees, the character wears ${value}! Keep all characters that wears${value}.`
       );
    } else  {
     alert(`oh no, the person doesn't wear ${value}! Remove all characters that wears. ${value}.`
     );
    }

} else if (category === "hair") {
    if (keep) {
      alert (`Yaay, the character has ${value} hair! Keep all characters with ${value} hair.`
      );
    } else  {
      alert (`oh no, the person doesnt have ${value} hair! Remove all characters with ${value} hair.`
      );
    }

} else if (category === "eyes") {
    if (keep) {
      alert (`Yeah, the character have ${value} eyes! Keep all characters with ${value} eyes.`
      );
    } else  {
      alert (`oh no, the character doesnt have ${value} eyes! Remove all characters with ${value} eyes.`
      );
    }

} else if (category === "other") {
    if (keep) {
     alert (`yuhuu, the character have ${value}! Keep all characters with ${value}.`
     );
    } else  {
      alert (`oh no, the character doesnt have ${value}! Remove all characters with ${value}.`
      );
    }
  }
  
   
  //for hair and eyes :
  if (category === "hair" || category === "eyes")
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }

    // for accessories and other
    if (category === "accessories"|| category === "other")
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }


    // Invoke a function to redraw the board with the remaining people.
    generateBoard();
   
  }

 

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {


  if (confirm (`Are you sure you want to make a guess on ${personToConfirm}?`)){
    const playerGuess = personToConfirm
    checkMyGuess(playerGuess)
  }

}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name
   if ( secret.name === personToConfirm) {
     winOrLoseText.innerHTML = `YOU WON is ${secret.name}!`
    }

  // 2. Set a Message to show in the win or lose section accordingly
  else {
    winOrLoseText.innerHTML = `GAME OVER!` 
   }
// 3. Show the win or lose section
   winOrLose.style.display = "flex"
// 4. Hide the game board
   board.style.display = "none"
   aside.style.display = "none"

  }

  

// timer

/*
function gamingTimer (time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours * 3600 - minutes * 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
  
function startTimer() {
    setInterval(() => {
      time++;
      timer.textContent = formatTime(time);
    }, 1000);
}
*/
  
 const muteSound = () => {
   if (backGroundSound.muted === true) {
     backGroundSound.muted = false
     backGroundSound.play()
     muteButton.innerHTML = "MUTE"
   } else {
     backGroundSound.muted = true
     muteButton.innerHTML = "UNMUTE"
   }
 }
  
  


// Invokes the start function when website is loaded
start();


// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)
muteButton.addEventListener("click", muteSound)

