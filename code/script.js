// Steps to folow
// 1. Display the game - draw game board  DONE
// 2. Set secret character by using Math.random() DONE
// 3. Get the value from selected question DONE
// 4. Check if the value is matched with the secret person
//   --> Yes: filter the characters and display only the one matched
//   --> No: Remove the ones which aren´t matched
// 5. Build function for Guess button  DONE



// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById("filter");
const winOrLoseWrapper = document.querySelector(".win-or-lose-wrapper");
const playAgainBtn = document.getElementById("playAgain");
const questionSection = document.querySelector(".question-section")
const winLose = document.querySelector(".secret-person");
const winOrLoseText = document.getElementById("winOrLoseText");
const inputWrapper = document.querySelector(".input-wrapper");
const guessMade = document.querySelector(".guess-made");
const audioBtn = document.querySelector(".audio-btn");
const music = document.querySelector(".music");



// Timing
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Sound effect for win or loose section
const magicSound = new Audio ("audio/magic-sound.wav");
// Mouse hover sound
const sound = new Audio("sound.mp3");

// Variable for name input
const form = document.getElementById("name-form");
const greeting = document.querySelector(".greeting");
const nameInput = document.getElementById("name-input")

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'image/character-1.png',
    hair: 'pink',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', "earing"],
    job: []
  },
  {
    name: 'Jack',
    img: 'image/character-2.png',
    hair: 'pink',
    eyes: 'hidden',
    accessories: ['hat'],
    job: ["stylist"]
  },
  {
    name: 'Jacques',
    img: 'image/character-3.png',
    hair: 'purple',
    eyes: 'blue',
    accessories: ['hat', "earing"],
    job: []
  },
  {
    name: 'Jai',
    img: 'image/character-4.png',
    hair: 'blue',
    eyes: 'brown',
    accessories: [],
    job: []
  },
  {
    name: 'Jake',
    img: 'image/character-5.png',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['earing'],
    job: []
  },
  {
    name: 'James',
    img: 'image/character-6.png',
    hair: 'black',
    eyes: 'green',
    accessories: [''],
    job: ["developer"]
  },
  {
    name: 'Jana',
    img: 'image/character-7.png',
    hair: 'black',
    eyes: 'hidden',
    accessories: [''],
    job: ["teacher"]
  },
  {
    name: 'Jane',
    img: 'image/character-8.png',
    hair: 'red',
    eyes: 'hidden',
    accessories: [''],
    job: ["teacher"]
  },
  {
    name: 'Jaqueline',
    img: 'image/character-9.png',
    hair: 'purple',
    eyes: 'green',
    accessories: [],
    job: ["developer"]
  },

  {
    name: 'Jazebelle',
    img: 'image/character-10.png',
    hair: 'black',
    eyes: 'hidden',
    accessories: ["hat],
    job: [ "nurse"]
  },
  {
    name: 'Jean',
    img: 'image/character-11.png',
    hair: 'yellow',
    eyes: 'blue',
    accessories: [],
    job: ['gamer']
  },
  {
    name: 'Jeane',
    img: 'image/character-12.png',
    hair: 'purple',
    eyes: 'green',
    accessories: ['hat'],
    job: ["artist"]
  },
  {
    name: 'Jed',
    img: 'image/character-13.png',
    hair: 'blue',
    eyes: 'green',
    accessories: ['earing'],
    job: ['stylist']
  },
  {
    name: 'Jenni',
    img: 'image/character-14.png',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: [],
    job: ["gamer"]
  },
  {
    name: 'Jeri',
    img: 'image/character-15.png',
    hair: 'black',
    eyes: 'green',
    accessories: ['hat'],
    job: ["chef"]
  },
  {
    name: 'Jerry',
    img: 'image/character-16.png',
    hair: 'red',
    eyes: 'blue',
    accessories: ['hair clip'],
    job: ["dancer"]
  },
  {
    name: 'Jess',
    img: 'image/character-17.png',
    hair: 'black',
    eyes: 'black',
    accessories: ['glasses'],
    job: ["teacher"]
  },
  {
    name: 'Jocelyn',
    img: 'image/character-18.png',
    hair: 'blue',
    eyes: 'black',
    accessories: [''],
    job: []
  },
  {
    name: 'Jon',
    img: 'image/character-19.png',
    hair: 'black',
    eyes: 'green',
    accessories: [''],
    job: ["gamer"]
  },
  {
    name: 'Jordan',
    img: 'image/character-20.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: [],
    job: ["nurse"]
  },
  {
    name: 'Josephine',
    img: 'image/character-21.png',
    hair: 'hidden',
    eyes: 'brown',
    accessories: ["glasses"],
    job: []
  },
  {
    name: 'Josh',
    img: 'image/character-22.png',
    hair: 'black',
    eyes: 'green',
    accessories: ["hairband"],
    job: []
  },
  {
    name: 'Jude',
    img: 'image/character-23.png',
    hair: 'red',
    eyes: 'green',
    accessories: [],
    job: ["singer"]
  },
  {
    name: 'Julie',
    img: 'image/character-24.png',
    hair: 'hidden',
    eyes: 'brown',
    accessories: [],
    job: ["gamer"]
  },
]

// Global variables
let secret;  // Secret person
let currentQuestion; 
let charactersInPlay; //charactersInPlay = CHARACTERS
let playerName;  // To store user's name


//1. Name Input Fotm
form.addEventListener("submit", (e) => {
  e.preventDefault();
  playerName = nameInput.value;
  greeting.textContent = `Hi ${playerName}, let's get started`
  magicSound.play();
  music.play()
  // To hide the name input form
  form.style.display = "none";

  // To start the game
  setTimeout(start,1000)
})




// 2. Create the timer
let totalSecond =0;
let numberOfGuess = 0;

// Create a function to store and display the time
function countTime() {

  // Get the total time in second
  totalSecond++;

  // Divide the total amount and grab the remainder
  // We don't want to show the whole time in second, only the one less than 60
  const sec = totalSecond % 60;

  // Divide the total amount to 60 to get the minute. Use Math.floor to ground the number
  const min = Math.floor((totalSecond/60));

  // Set up how to display second
  if (sec < 10) {
    second.textContent = `0${sec}`
  } else  {
  second.textContent = sec
  }
  
  // Set up how to display minute
  if (min < 10) {
    minute.textContent = `0${min} : `
  } else {
    minute.textContent = `${min} : `
  }
}

// Invoke the function after every 1 second

setInterval(countTime,1000)


// 3. Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card" onmouseover="playSound()">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small guess-btn" onclick="guess('${person.name}')" >Guess</button>
        </div>
      </div>
    `
  })
}

// 3. Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
}


// 4. This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // What else should happen when we start the game?
  winOrLose.style.display = "none"
  board.style.display = "flex"


  // To load the game interface
  generateBoard();

  // Get secret person
  setSecret()

  // To reset the time
  totalSecond =0;

  // To reset the number of guess an display it
  numberOfGuess = 0;
  guessMade.textContent = numberOfGuess;

  // To hide the greeting modal 
  inputWrapper.style.display = "none"
}



// 5. setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
   const value = questions.value;

   currentQuestion = {
    category: category,
    value: value
  }
}


// 6. This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  selectQuestion()
  const {category, value } = currentQuestion //User chooses question
  // Compare the currentQuestion details with the secret person details in a 
  // Different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  if (category === "hair" || category === "eyes" ) {

    // if the secret person's hair value matches with the question's value
    if (secret[category] === value)
      {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }
  } else if (category === "accessories" || category === "job") {    
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false)
    }
      
  }

}


// 7. It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}`
      )
      // Keep only the persons who has accessories value match with the current question
      // For example: selected accessory is earing => keep only the ones who have earing
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      )

       // Keep only the persons who doesn't have the accessory
      // For example: selected accessory is hat => keep only the ones who do not wear hat
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
    
   } else if ( category === "job") {

      if (keep) {
        alert(
          `Yes, the person is a ${value}! Keep all people that are ${value}`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } 
      else {
        alert(
          `No, the person isn't a ${value}! Remove all people that are ${value}`
        )
        //It will remove all persons who have the same value, and keep only the ones who don't
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
    } 
    else if (category === "hair" || category === "eyes") {

      if(keep) {
        alert (`Yes, the person has ${value}! Keep all people that have ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } 
      else {
        alert(`No, the person doesn't has ${value}! Remove all people that have ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }

  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard(keep)
  }

  // 8. when clicking guess, the player first have to confirm that they want to make a guess.
  const guess = (personToConfirm) => {

  // store the interaction from the player in a variable.
  let playerGuess = confirm (`Do you want to guess on ${personToConfirm}`)

  // remember the confirm() ?

  // If the player wants to guess, invoke the checkMyGuess function.
  if (playerGuess) {
    checkMyGuess(personToConfirm)
  } else {
    alert("Continue the game")
  }
  
}

// 9. If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 9a. Check if the personToCheck is the same as the secret person's name
     winOrLoseWrapper.style.display = "flex"

  // 9b. Hide the game board
    board.style.display = "none"
 
  // 9c. Add sound
    magicSound.play()

  // 9d. Set a Message to show in the win or lose section accordingly
      if (personToCheck === secret.name) {
        winLose.innerHTML = `
        <img class="secret-person-img" src=${secret.img} alt=${secret.name}>   
        `
        winOrLoseText.textContent = `you guess ${secret.name} and it's correct. You win 🥳`
      } else {
        winLose.innerHTML= `
        <img class="secret-person-img" src=${secret.img} alt=${secret.name}>   
        `
        winOrLoseText.textContent = `You guessed ${personToCheck}, but our secret person is ${secret.name} 😢`
      }
}


// 10.All the event listeners

// These buttons are to restart game or play again
  restartButton.addEventListener("click", start)
  playAgainBtn.addEventListener("click", start)

// This button is to check question
  findOutButton.addEventListener("click", () => {
    checkQuestion()
    numberOfGuess++;
    guessMade.textContent = numberOfGuess;
  })


//  This is to add sound to buttons and background music

function playSound () {
  sound.play()
}
findOutButton.addEventListener("mouseover", playSound);
restartButton.addEventListener("mouseover",playSound);

// Background music
audioBtn.addEventListener("click", function(){

  // To mute and unmute sounds and music
  audioBtn.classList.toggle("slide")
  if (audioBtn.classList.contains("slide")){
    music.pause()
   } 
  else {
   music.play()
  } 
})









