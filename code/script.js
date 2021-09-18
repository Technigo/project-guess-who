// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLoose = document.getElementById('winOrLose')
const winOrLooseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const modal = document.getElementById('myModal')
const modalText = document.getElementById('modal-text')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    outfit: ['hijab'],
    accessories: ['glasses', 'hijab'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    outfit: ['jacket'],
    accessories: ['hat', 'parrot'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    outfit: ['jacket'],
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    outfit: ['pullover'],
    accessories: ['tie'],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    outfit: ['shirt'],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    outfit: ['pullover'],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    outfit: ['shirt'],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    outfit: ['pullover'],
    accessories: ['glasses', 'necklace'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    outfit: ['dress'],
    accessories: ['glasses', 'necklace'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    outfit: ['pullover'],
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    outfit: ['jacket'],
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    outfit: ['pullover'],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    outfit: ['pullover'],
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    outfit: ['dress'],
    accessories: ['hat', 'mobile'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    outfit: ['pullover'],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    outfit: ['jacket'],
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    outfit: ['pullover'],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    outfit: ['pullover'],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    outfit: ['shirt'],
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    outfit: ['shirt'],
    accessories: ['glasses', 'hat', 'necklace'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    outfit: ['dress'],
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    outfit: ['pullover', 'shirt'],
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    outfit: ['shirt'],
    accessories: ['tie'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    outfit: ['pullover'],
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let counter
let startTime
let stopTime

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
          <button class="filled-button small" onclick="guess('${person.name}')" onclick="counterUp()">Guess</button>
        </div>
      </div>
    `
  })
}


// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]

}


// This function to start (and restart) the game
const start = () => {
  //Hide the win or lose section
  winOrLoose.style.display = "none"
  //Show the game board
  board.style.display = "flex"
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game? 
  //All pictures should be shown
  generateBoard();
  // the secret person needs to be set
  setSecret();
  console.log(secret)
  //the counter is set to one, because the player will have at least one guess. Every guess he has on top will be counted by pressing "FindOutBtn"
  counter = 1;
}

//raising the counter by one
const countPoints = () => {
  counter++
}

// setting the currentQuestion object when you select something in the dropdown
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

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  let keep
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (value === secret[currentQuestion.category]) {
      keep = true;
    } else {
      keep = false;
    }
  } 
  //the character properties for accessories and other are stored in arrays, but the values to compare with are strings and that's why the comparisson only works with .includes
    else if (category === 'accessories' || category === 'other' || category === 'outfit') {
    if (secret[currentQuestion.category].includes(currentQuestion.value)) {    
      keep = true;
    } else {
      keep = false;
    }
  }
  
  filterCharacters(keep); 
}

// filterCharacters filters the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  modal.style.display = "block";

  // filter by category to keep or remove based on the keep variable and show alert messages in a modal
 
  if (category === 'accessories') {
    if (value === 'glasses') {
      if (keep) {
        modalText.innerHTML = `Damn right, the person wears ${value}! Keep all people with ${value}`
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
          modalText.innerHTML =  `So sorry, but the person doesn't wear ${value}! Let's remove all people with ${value}` 
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
    } else {
      if (keep) {
        modalText.innerHTML = `Yes, the person has a ${value}! Keep all people with a ${value}`
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
          modalText.innerHTML =  `No, the person doesn't have a ${value}! Remove all people with a ${value}` 
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
    }
  } else if (category === 'other') {
    if (keep) {
      modalText.innerHTML = `Yes, the person is a ${value}! Keep all ${value}s`
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
        modalText.innerHTML =  `No, the person isn't a ${value}! Better remove the ${value}s`
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      } 
  } else if (category === 'outfit') {
    if (keep) {
      modalText.innerHTML = `Yes, the person is wearing a ${value}! Keep all people with a ${value}`
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
        modalText.innerHTML =  `No, unfortunately the person isn't wearing a ${value}! Let's remove everyone with a ${value}`
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      } 
  } 
  
  
  else if (category === 'hair') {
    if (keep) {
      modalText.innerHTML = `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      modalText.innerHTML =`No, the person doesn't have ${value} hair! Remove all people with ${value} hair`
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
  } else {
    if (keep) {
      modalText.innerHTML =`Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      modalText.innerHTML = `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    }
  


 
  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // If the player wants to guess, invoke the checkMyGuess function.
  const confirmed = confirm("Are you sure that you want to guess? This will end the game");
  if (confirmed) {
    checkMyGuess(personToConfirm)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  //in case the user hasn't closed the modal by himself, it will be forced closed at this step
  closeAllModals()
  // Check if the personToCheck is the same as the secret person's name
  // Set a Message to show in the win or lose section accordingly
  if (personToCheck === secret.name) {
    //applause if winning
    let audio = document.createElement("audio");
    audio.src = "./assets/applause.wav";
    audio.play();
  
    if (counter === 1) {
    winOrLooseText.innerHTML = `OMG! Are you a psychic? <br>Get yourself a ticket for the lottery!`
    } else if (counter < 4) {
      winOrLooseText.innerHTML = `Yay, you won with just ${counter} guesses. 🎉<br>I bow down, you mastermind! <br>Play another round?`
    } else { 
      winOrLooseText.innerHTML = `Congrats, that's a solid win with ${counter} guesses. <br>Shall I shuffle the cards again?`
    }
  } else {
    //sound if loosing
    let audio = document.createElement("audio");
    audio.src = "./assets/game_lost.wav";
    audio.play();
    winOrLooseText.innerHTML = `Sorry, you lost! <br>The secret person was ${secret.name}. <br>Wanna try again?`
  }
    
  // Show the win or lose section
  winOrLoose.style.display = "flex"

  // Hide the game board
  board.style.display = "none"

  console.log(counter)
}

// Function to close the modal
const closeAllModals = () => {
  modal.style.display = "none";
}


// Invokes the start function when website is loaded
start()

// All the event listeners
//restarts the game
restartButton.addEventListener('click', start)
//invokes selectQuestion (creates the currentQuestion-Object)
findOutButton.addEventListener('click', selectQuestion)
//the findoutButton also invokes checkQuestion (compares the currentQuestio-Object with the secret Person)
findOutButton.addEventListener('click', checkQuestion)
//every time the findoutButton or the guessWhoButton get clicked, the counter goes one up
findOutButton.addEventListener('click', countPoints)
//restarts the game
playAgainButton.addEventListener('click', start)
//Close the modal on click
modal.addEventListener('click', closeAllModals)


