// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'headgear'],
    other: [''],
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: '',
    eyes: 'blue',
    accessories: ['headgear'],
    other: ['moody','bearded'],
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['headgear'],
    other: ['smoking','moody','bearded'],
    
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['tie'],
    other: [''],
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: [''],
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['moody'],
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses','jewelry'],
    other: [''],
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['moody'],
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'redish',
    eyes: 'green',
    accessories: ['glasses','jewelry'],
    other: ['moody'],
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: 'glasses',
    other: ['smoking','influencing','moody'],
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses','headgear'],
    other: ['smoking','bearded','moody'],
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['freckled'],
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'redish',
    eyes: 'green',
    accessories: ['glasses','headgear',],
    other: ['smoking','moody'],
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['headgear','jewelry'],
    other: ['influencing','moody' ],
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'redish',
    eyes: 'green',
    accessories: 'glasses',
    other: 'moody',
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: [],
    eyes: 'blue',
    accessories: ['headgear'],
    other: [''],
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: [''],
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses','jewelry'],
    other: ['moody'],
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [''],
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses','headgear','jewelry'],
    other: [''],
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: ['moody'],
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [''],
    other: [''],
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['tie'],
    other: ['bearded'],
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses','headgear'],
    other: ['moody'],
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
}


// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  generateBoard()
  setSecret()
console.log(secret)
  // Here we're setting charactersInPlay array to be all the characters to start with
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  console.log(category)

  const value = questions.options[questions.selectedIndex].value
  console.log(value)
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    value: value,
  }
  
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = (keep) => {
  const { category, value } = currentQuestion; //deconstructed version of the two underneah
  
  
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
 if (category === 'hair' || category === 'eyes') {
    if (value === secret.hair || value === secret.eyes) {
    let keep = true
      filterCharacters(keep)
    } else { 
      
      filterCharacters(false)
    }
  } else if (category === 'accessories' || category === 'other') {
    if (secret.accessories.includes(value) || secret.other.includes(value)) 
      keep = true
      filterCharacters(keep)
    } else { 
      
      filterCharacters(false)
      // (value === secret.accessories || value === secret.other)
    }
  }


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['accessories'].includes(value))  
        alert(`Oh yes, the person absolutely wears ${value}. Keep'em all!'`);
          
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person['accessories'].includes(value))
        alert(`Nah, the person doesn't wear ${value}. Get'em outta here!`);
          
    }

  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['other'].includes(value))
        alert(`Actually, the person IS ${value}. Never let them go!`);
          
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person['other'].includes(value))
        alert(`Seriously? No, the person aint ${value}! Go away!`);
          
    }

  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] === value)
        alert(`Mhm, the person has got fancy ${value} hair! Keep them ${value} haired!`);
          
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] !== value)
        alert(`pfft, no ${value} hair on my person! Delete all ${value} hair`);
          
    }

  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] === value)
        alert(`Yes! the person has eyes and they're ${value}! Don't lose ones with ${value} eyes`);
          
      
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] !== value)
        alert(`Haha! ${value} eyes? That's incorrect my dear, get rid off all ${value} eyes`);
          
      
    }
    
  }
  
  // Invoke a function to redraw the board with the remaining people.
  generateBoard()



   // currentQuestion = currentQuestion.category; 
  // currentQuestion = currentQuestion.value;

  // if (keep===true) {
  //   charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] === value)
  //   generateBoard()
  // } else {
  //   charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] !== value)
  //   generateBoard()
  // }
  
  // if (keep === true) {
  //   charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
  
  
  // } else {
  //   charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    
  // }
  // generateBoard()
  
  
  // if (keep === true) {
  //   charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
  
  
  // } else {
  //  charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
   
  // }
  
  
  
  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
  for hair and eyes :
  
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    or
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
  
  
  for accessories and other
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    or
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const clickGuess = confirm(`Do you really want to guess on ${personToConfirm}`);
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  if (clickGuess) {
    checkMyGuess(personToConfirm)
  } else {
    alert(`alright never mind, keep on guessing`)
  }
  // If the player wants to guess, invoke the checkMyGuess function.
  // checkQuestion()
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {

  if (personToCheck === secret.name) {
    // alert(`YOU SURE ARE RIGHT!`) 
  winOrLoseText.innerHTML = `Sweet as! Your guess was right!` 
  } else {
    alert(`Eh no.`)
    winOrLoseText.innerHTML = `Haha loser, try again!`
  }


  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // alert(
  //   `Yes it was §{}! Congratulations!`
  // )
  // alert(
  //   `No, sorry. Your guess was wrong. Try again"`
  // )
  
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex'
  // 4. Hide the game board
  board.style.display = 'none'
}

// Invokes the start function when website is loaded
start ()
  

// All the event listeners
restartButton.addEventListener('click', start);
findOut.addEventListener('click', () => {
  selectQuestion()
  checkQuestion()
});
playAgain.addEventListener('click', start)







// if (keep===true) {
//     charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] === value)
//     generateBoard()
//   } else {
//     charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] !== value)
//     generateBoard()
//   }


