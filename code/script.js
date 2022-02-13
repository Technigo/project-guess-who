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
    hair: '',
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
    eyes: 'browny',
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
    other: ['smoking','moody','bearded'],
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
    hair: '',
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
    eyes: 'browny',
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
    eyes: 'browny',
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
    eyes: 'browny',
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
          <span>Dare to guess on ${person.name}?</span>
          <button class="filled-button-small" onclick="guess('${person.name}')">Yeah!</button>
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
  winOrLose.style.display = 'none' //hiding the winOrLose when game starts restarts
  board.style.display = 'flex' //shows the game board when game starts or restarts
  generateBoard() // starting up the game with all the characters visible
  setSecret() //sets the secret person
  questions.selectedIndex = 0 //sets the selection to default whe game starts and restarts
// console.log(secret)
 
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  console.log(category)

  const value = questions.options[questions.selectedIndex].value
  console.log(value)

  // This variable stores what option groups the question belongs to.

  currentQuestion = {
    category: category,
    value: value,
  } 
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = (keep) => {
   const { category, value } = currentQuestion; 
  
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
 if (category === 'hair' || category === 'eyes') {
      if (value === secret.hair || value === secret.eyes) {
      let keep = true  //deciding keep is true
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
        alert(`Nah, the person doesn't wear ${value}. Remove please.`);
          
    }

  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['other'].includes(value))
        alert(`Actually, the person IS ${value}. Keepers!`);
          
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person['other'].includes(value))
        alert(`Hm nope, the person aint ${value}! Remove thanks.`);
          
    }

  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] === value)
        alert(`Mhm, the person has got fancy ${value} hair. Keepers!`);
          
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person['hair'] !== value)
        alert(`Pfft, no ${value} hair on this person. Delete now.`);
          
    }

  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] === value)
        alert(`Yes! the person has eyes and they're ${value}! Don't lose them.`);
          
      
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person['eyes'] !== value)
        alert(`${value} eyes? That's incorrect my dear. Just remove them please.`);

    }
    
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()

}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const clickGuess = confirm(`Do you really want to guess on ${personToConfirm}`);

  if (clickGuess) {
    checkMyGuess(personToConfirm)
  } else {
    alert(`alright never mind, keep on guessing`) //if the player changes their mind
  }

}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {

   // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly

  if (personToCheck === secret.name) { 
  winOrLoseText.innerHTML = `You're perfect. It was ${personToCheck}!
  <audio autoplay>
  <source src="media/win.mp3" type="audio/mp3">  
  looks like your browser doesnt support audio
  </audio>`
  //plays a little tune when you guess is right
  } else {
    winOrLoseText.innerHTML = `Rain and tears. It was actually ${secret.name}. Try again!
    <audio autoplay>
  <source src="media/lose2.mp3" type="audio/mp3">
  looks like your browser doesnt support audio
  </audio>`
  //plays a little tune when your guess is wrong
  }
  
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









