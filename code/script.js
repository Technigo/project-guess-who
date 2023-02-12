// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filter = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')
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
    name: 'Amanda',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Carlos',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Clara',
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
    name: 'Koala',
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
    name: 'Teresa',
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
    name: 'Marta',
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
    name: 'Kaja',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon_Travolta',
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
    name: 'Joshua',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Judyta',
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
let secretPlayer
let currentQuestion
let charactersInPlay 
let personToCheck
// Draw the game board
const generateBoard = () => {
  CHARACTERS.map(charactersInPlay => {
    console.log(charactersInPlay)//to see if it works
  });
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
  
  //I am using .map so for is not necessery
  /*for (let i=0; i < CHARACTERS.length; i++ ) {
    console.log(CHARACTERS[i])
  }*/
};
 

// Randomly select a person from the characters array and set as the value of the variable called secret

const setSecretPlayer = () => {
  
  secretPlayer = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log('secret character is ready to play', secretPlayer)
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;

  // What else should happen when we start the game?
  generateBoard(); //calling in generateBoard function
  setSecretPlayer(); /*calling in setSecret function, 
                when  play with computer*/
  selectQuestion() // invoke function selectQuestion
  // checkQuestion();

}
  



// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value

  currentQuestion = {
    category: category,
    value: value,
  }

}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes' ) {
   // console.log(category,value) // checking if main if statement works
    if(secretPlayer[category] === value) {
      filterCharacters(true)
      console.log('if true', value)
      //console.log(`this person has ${value}`); checking if second if statement work,
      //only for dev purposes
    } else  {
      filterCharacters(false)
      console.log('false', value)
      //console.log(`this person does not have ${value} hair`); checking print if else statement works
    }

 } else if (category === 'accessories' || category === 'other') {
    if (secretPlayer[category].includes(value)) {
      filterCharacters(true)
    } else {
      filterCharacters(false)
    }

  }
  console.log('I am working');
  //filterCharacters()
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log('hello', keep);
 
  const { category, value, atribute } = currentQuestion // Determine what is the category
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      console.log('alert true');
    
    } else {
      
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if(category === 'hair') {
      if (keep) {
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      );
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
      alert(`No, the person doesnt have ${value} hair! Remove all people with ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }
 
  else if(category === "eyes") {
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
    
  }
  
  generateBoard()  // Invoke a function to redraw the board with the remaining people
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const playerGuess = confirm('Are you sure you want to make a guess?')  // storing the interaction from the player in a variable.
                                                                      //display window with question if player is ready to guess
  //console.log('players guess', personToConfirm);
  if (playerGuess) {
    checkMyGuess(personToConfirm)
  }// invoke the checkMyGuess function.
  //document.getElementById("guess").innerHTML = text;

  console.log('confirm works?') //concole log only for dev purposes 
  
 
  // remember the confirm() ?
  
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  //Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secretPlayer.name) {
    console.log('check my guess', winOrLose)
    winOrLose.style.display = 'flex',
    winOrLose.innerHTML = `Congratulation! You won!`
    board.style.display = 'none'
  } else {
    winOrLose.style.display = 'flex',
    winOrLose.innerHTML = `Oh no! It was not ${personToCheck}. The secret player is ${secretPlayer.name}`
    board.style.display = 'none'
  }
   console.log('secret ', secretPlayer.name)
   
  
  
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}
reload = () => {
  window.location.reload()
  
}

// Invokes the start function when website is loaded

start()

// All the event listeners
restartButton.addEventListener('click', start)
// filter.addEventListener("click", checkQuestion);//event listener for the Find Out button
filter.addEventListener("click", checkQuestion);//event listener for the Find Out button
questions.onchange = selectQuestion;
//guess.addEventListener('click', checkMyGuess)
//playAgain.addEventListener("click", start)