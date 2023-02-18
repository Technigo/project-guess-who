// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const winorlose = document.getElementById('winOrLose')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const dropdownQuestion = document.getElementById("questions")
const findOutButton = document.getElementById("filter")


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
let dptype

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
}

// This function to start (and restart) the game

const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  // Answer: to call the generateBoard and setSecret function to show all the characters and set a secret character.
  generateBoard();
  setSecret();
  selectQuestion(); //fix bug " default brown hair color"
}


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
//alert("selectquestion")
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
      let keepItem = true
      filterCharacters(keepItem)
    } else {
      keepItem = false
      filterCharacters(keepItem)
    }

  } else if (category === 'accessories' || category === 'other') {
  
    if (((secret.accessories).includes(value) ) ||  ((secret.other).includes(value) )) {
      alert("rihgt??")
      keepItem = true
      filterCharacters(keepItem)
    } else {
      alert("worng??")
      keepItem = false
      filterCharacters(keepItem)
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
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people are ${value}s `
      )
    } else {
      alert(
        `No, the people isn't a ${value} ! Remove all people are ${value}s`
      )
    }


  } else if (category === 'eyes') {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes`
      )
    } else {
      alert(
        `No, the people doesn't have ${value} eyes! Remove all people that has ${value} eyes`
      )
    }

  } else if (category === 'hair') {
    if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people that has ${value}`
      )
    } else {
      alert(
        `No, the people doesn't have ${value} hair! Remove all people that has ${value}`
      )
    }
  }


  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

  //for hair and eyes :
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) =>  person[category] === value) // to keep

    } else {
     
      charactersInPlay = charactersInPlay.filter((person) =>  person[category] !== value) // to remove

    }
  //for accessories and other
  } else if (category === 'accessories' || category === 'other') {
   
    if (keep) {
      
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      

    } else {
      
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      
    }
  }
  generateBoard();
  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  const confirmAction =  confirm(`Are you sure you want to guess ${personToConfirm}`)

 if(confirmAction){

  checkMyGuess(personToConfirm);

 }
// If the player wants to guess, invoke the checkMyGuess function.
 
}
// If you confirm, this function is invoked

const checkMyGuess = (personToCheck) => {
 
  // 1. Check if the personToCheck is the same as the secret person's name
  if(personToCheck===secret.name){
    winorlose.innerHTML = `  <div class="inw-or-lose">
                                <img
                                  class="guess-who-icon"
                                  src="images/guess-who-bubble.png"
                                  alt="Guess Who"
                                />
                                <h1 id="winOrLoseText">YAY! Congrats! <br> - you win <span role="img" aria-label="cheer">🙌</span> </h1>
                                <button type="button" id="playAgain" class="filled-button">PLAY AGAIN</button>
                              </div>`
                  // <p>YAY! Congrats - you win</p>


  }else{
    winorlose.innerHTML = `  <div class="inw-or-lose">
                                <img
                                  class="guess-who-icon"
                                  src="images/guess-who-bubble.png"
                                  alt="Guess Who"
                                />
                                <h1 id="winOrLoseText">Oh No! you guess wrong, <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Game Over! <span role="img" aria-label="angry">😤</span> </h1>
                                <button type="button" id="playAgain" class="filled-button">PLAY AGAIN</button>
                              </div>`

  }
  dptype= board.style.display
  board.style.display = "none"
  winorlose.style.display = "block"
  
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  let playAgain = document.getElementById("playAgain")
  playAgain.addEventListener("click", startOver)
}
const startOver = () =>{
  winorlose.style.display = "none"
  board.style.display = dptype
  start();
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
dropdownQuestion.addEventListener("change", selectQuestion)
findOutButton.addEventListener("click", checkQuestion)


