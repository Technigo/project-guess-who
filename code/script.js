// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById("winOrLoseText")
const winOrLoseSection = document.getElementById("winOrLose")
const playAgainButton = document.getElementById("playAgain")


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    beard: 'brown',
    accessories: ['hat', 'parrot'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    beard: 'grey',
    accessories: ['hat'],
    other: ['smoker']
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
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses', 'jewellery'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewellery'],
    other: []
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
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    beard: 'orange',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'jewellery'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
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
    accessories: ['glasses', 'jewellery'],
    other: []
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
    accessories: ['glasses', 'hat', 'jewellery'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewellery'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    beard: 'black',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

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
  })
  
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret)
}
//This function is invoked when the play again button is pressed. The whole board is generated, with all the characters
const playAgain = () =>{
  winOrLoseSection.style.display = "none";
  board.style.display = "";
  charactersInPlay = CHARACTERS
  generateBoard();
  
  }

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  // Answer: we have to invoke the following functions
  playAgain();
  generateBoard();
  setSecret();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label 
  // This variable stores actual value from the dropdown selected
  const value = document.getElementById('questions').value

  currentQuestion = {
    category: category,
    value: value,
  }
}
//This function compares the details of the current question with the details of the secret person.

const checkQuestion = () => { 
  const { category, value } = currentQuestion
// If the current question is based on the hair or eye category, the values are strings and we can use the following conditional.
// Here we are saying if the category is hair/eyes AND the secret value matches the current value, we can use the filter method and return true
// If the current question is in the accessories or other category, their values are stored in arrays, so have to be handled differently: 
if (currentQuestion.category === 'hair' || currentQuestion.category === 'eyes'|| currentQuestion.category === 'beard') {
    if (secret[currentQuestion.category] === currentQuestion.value){
      filterCharacters(true)
    }else {
      filterCharacters(false)
    }
  
   } else if (currentQuestion.category === 'accessories' || currentQuestion.category === 'other'){
      if (secret[currentQuestion.category].includes(currentQuestion.value)){
        filterCharacters(true)
      }else {
       filterCharacters(false)
      }
    }

}

// This function filters the characters and the re-draws the board
const filterCharacters = (keep) => {
  const { category, value, secret } = currentQuestion
  // According to the category, a different alert needs to be outputted
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))// This is needed to keep everyone who matches the question
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))// This is needed to remove anyone who does not match with the question
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes the person is a ${value}! Keep all people who smoke`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
      `No the person is not a ${value}. Remove all people who smoke`
      );
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'hair'){
    if (keep) {
      alert(
      ` Yes, the person has ${value} hair. Keep all people with ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person does not have ${value} hair. Remove all people with ${value} hair.`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }  
    } else if (category === 'beard'){
      if (keep) {
        alert(
        ` Yes, the person has a ${value} beard. Keep all people with a ${value} beard`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        alert(
          `No, the person does not have a ${value} beard. Remove all people with a ${value} beard.`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
  } else {
    if (keep){
      alert(
        `Yes, the person does have ${value} eyes. Keep all people with ${value} eyes!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person does not have ${value} eyes. Remove all with ${value} eyes!`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
 // This function generates the board again     
generateBoard()
}


// This function confirms the players wants to guess
const guess = (personToConfirm) => {
  confirm('Do you really want to guess?')
  if (true){
    // This invokes the checkMyGuess function
    checkMyGuess(personToConfirm)
  } else{}
  
}

// Invoked when you confirm you want to guess
const checkMyGuess = (personToCheck) => {
  //This checks if the personToCheck has the same name as the secret
  if (personToCheck === secret.name){
  //Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerHTML ="Woohoo! You win!"
  } else{
    winOrLoseText.innerHTML ="Oh no! You have lost! Nevermind"
  }
  // Show the win or lose section
  winOrLoseSection.style.display = "block";
  // 4. Hide the game board
  board.style.display = "none";
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', playAgain)

