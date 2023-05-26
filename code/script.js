// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const refreshButon = document.getElementById('refreshBtn')
const playAgainButton = document.getElementById('playAgain')

const guessButton = document.querySelector(".guess")



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
    accessories: ['hat'],
    other: []
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
    accessories: ['glasses'],
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
    accessories: ['glasses'],
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
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
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
    accessories: ['glasses'],
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
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
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
  console.log("Generating game board with " + charactersInPlay.length + " characters")
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



}

// This function to start (and restart) the game
const start = () => {
  console.log(CHARACTERS.length)
  console.log({charactersInPlay, secret, currentQuestion})
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  setSecret();
  generateBoard();
  selectQuestion();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  //used this from another code 
  let value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  }
 
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // This part compares the currentQuestion  with the secret person details 
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  //
  if (category === 'hair' || 
  category === 'eyes') 
  {
    if (secret [category]=== value) {
      filterCharacters(true);
    } else{
      filterCharacters(false);
    }
} else if (category === 'accessories' 
|| category === 'other') 
{
  if (secret [category]=== value){
    filterCharacters(true);
  } else{
    filterCharacters(false);
  }

  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Siiii you got it, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `Oh nooooo, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))

    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Siiii eso es!!, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  
    
    } else {
      alert(
        `Ay no!, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      
    }  

  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category} Keep all people with ${value} ${category}.`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)    
    }
  }
 
  generateBoard();

}

// when clicking guess, the player first have to confirm that they want to make a guess.
// store the interaction from the player in a variable.
  // If the player wants to guess, invoke the checkMyGuess function.
const guess = (personToConfirm) => {
  let guessed = confirm (`hmmmm are you sure?, really really sure that ${personToConfirm} is your guess?`)
  if(guessed){
    let personToCheck = personToConfirm; //variable that saves the character the player has shosen
checkMyGuess(personToCheck)

  }
  //if no
  else {
    alert (' when in doubt... Lets continue instead')
  }
 
}

// If you confirm, this function is invoked

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name){
    
    winOrLoseText.innerHTML = `${secret.name} Que vivaaaaaa, arribaaaa hurraaaay its totaly correct!
  }<br>Well done! <br><img class="secret-revealed-img" src="${secret.img}"/>`;

  // Show the win or lose section
  winOrLose.style.display = 'flex'
  //  Hide the game board
  board.style.display = 'none'
 
}
else {
  winOrLoseText.innerHTML = `Ay nooooo, Im sorry better luck next time 😣. 
  <br> Right answer was ${secret.name}.<br>
  
  `;
  // Show the win or lose section
  winOrLose.style.display = 'flex'
  //  Hide the game board
  board.style.display = 'none';
  
}
}

// Invokes the start function when website is loaded
start()

//This makes the site reload when player clicks on "try again" 
const refreshPage = () => {
  //Hide the winOrLose and show generate board... 
  winOrLose.style.display = 'none';
  //  Hide the game board
  board.style.display = 'flex';
  start();
}
const playAgain = () => {
  start(); 
  winOrLose.style.display = 'none';
  board.style.display = 'flex';
}


restartButton.addEventListener('click', start);

questions.addEventListener('change', selectQuestion); //this calls the selectQuestion function as soon as the player changes option in dropdown.
findOutButton.addEventListener('click', () => {
  checkQuestion()
});//Is there another way to do this??

playAgainButton.addEventListener('click', playAgain);
 //seems like this wont work for me!

