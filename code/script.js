// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const playAgainButton= document.getElementById ('playAgain')
const winOrLoseText = document.getElementById ('winOrLoseText')
const winOrLose = document.getElementById ('winOrLose')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    vices: 'a toilet seat terrorist',
    odors: 'having a really bad breath',
    traits: ['a paranoid hipster', 'a greedy grandma'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    vices: 'a toilet seat terrorist',
    odors: 'reeking of poo',
    traits: ['a greedy grandma'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    vices: 'laughing loudly at everything',
    odors: 'reeking of poo',
    traits: ['a greedy grandma'],
    other: ['a bad friend']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    vices: 'a freeloader',
    odors: 'nose picker',
    traits: ['a crazy frog'],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    vices: 'a binge drinker',
    odors: 'reeking of sweat',
    traits: ['a paranoid hipster'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    vices: 'a nose picker',
    odors: 'reeking of sweat',
    traits: ['a vindictive dork'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    vices: 'a freeloader',
    odors: 'having a really bad breath',
    traits: ['a paranoid hipster', 'a narcissistic aspiring model'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    vices: 'a binge drinker',
    odors: 'reeking of burp',
    traits: ['an arrogant a-hole'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    vices: 'a litterer',
    odors: 'reeking of sweat',
    traits: ['an egocentric douchebag', 'a narcissistic aspiring model'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    vices: 'a whiner',
    odors: 'reeking of loo',
    traits: ['a crazy frog'],
    other: ['a bad friend']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    vices: 'a nose picker',
    odors: 'reeking of poo',
    traits: ['a pessimistic smock', 'a greedy grandma'],
    other: ['a bad friend']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    vices: 'a nose picker',
    odors: 'reeking of sweat',
    traits: ['a vindictive dork'],
    other: ['a cheater']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    vices: 'a litterer',
    odors: 'reeking of sweat',
    traits: ['a paranoid hipster', 'a greedy grandma'],
    other: ['a bad friend']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    vices: 'talking in baby voice',
    odors: 'reeking of burp',
    traits: ['a greedy grandma', 'a pessimistic smock'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    vices: 'a litterer',
    odors: 'reeking of sweat',
    traits: ['a paranoid hipster'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    vices: 'a toilet seat terrorist',
    odors: 'reeking of poo',
    traits: ['a greedy grandma'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    vices: 'a freeloader',
    odors: 'reeking of poo',
    traits: ['an arrogant a-hole', 'a lazy lunatic'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    vices: 'a freeloader',
    odors: 'reeking of rotten eggs',
    traits: ['a lazy lunatic', 'a narcissistic aspiring model'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    vices: 'a nose picker',
    odors: 'reeking of sweat',
    traits: ['a lazy lunatic'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    vices: 'a binge drinker',
    odors: 'reeking of rotten eggs',
    traits: ['a paranoid hipster', 'a greedy grandma', 'a narcissistic aspiring model'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    vices: 'laughing loudly at everything',
    odors: 'reeking of reeking of loo',
    traits: ['a narcissistic aspiring model', 'an egocentric douchebag'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    vices: 'a binge drinker',
    odors: 'reeking of sweat',
    traits: ['a lazy lunatic'],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    vices: 'a freeloader',
    odors: 'reeking of sweat',
    traits: ['an arrogant a-hole'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    vices: 'a freeloader',
    odors: 'reeking of fart',
    traits: ['a paranoid hipster', 'a greedy grandma'],
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

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  winOrLose.style.display = 'none'
  board.style.display = 'flex' 
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label; 
  const value = questions.options[questions.selectedIndex].value;  

  
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =


  if (category === 'vices') {
    currentQuestion = {
      attribute: 'vices', 
      value: value, 
      category: category, 
      }
  } else if (category === 'odors') {
      currentQuestion = {
        attribute: 'odors', 
        value: value, 
        category: category,
      }
  } else if (category === 'traits'){
      currentQuestion = {
        attribute: 'traits', 
        value: value, 
        category: category,
  } } else {
    currentQuestion = {
      attribute: value, 
      value: true, 
      category: category,
    }
   }
  }


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  
  const {category, value} = currentQuestion; 
  
  //keep = currentQuestion.value === secret[currentQuestion.attribute]


  // Compare the currentQuestion details with the secret person details in a different manner based on category (vices/odors or traits/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  if (category === 'vices'|| category === 'odors') {
    if (secret[category] === value) {
      filterCharacters(true); //This one keeps everyone who has that vice or odor. 
    }
    else {
    filterCharacters(false); //This one removes everyone who has that vice or odor.. 
  }
} else if (category === 'traits' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true); //Keeps everyone with a specific personality trait or other. 
    }
    else {
    filterCharacters(false); 
  }
}
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { attribute, category, value } = currentQuestion; 
  // Show the correct alert message for different categories
  if (category === 'traits') {
     if (keep) {
      alert(
        `Yes, the person is definitely ${value}! Keep all people who are ${value}s.`); 
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)); 
 
    } else {
      alert(
        `No, the person is not ${value}, thank god! Remove all people who are ${value}s.`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) ;  
    }
  } else if (category === 'other') {
      if (keep) {
      alert(
        `Yes, the person is ${attribute} and if you haven't already, you should break up. Keep all people who are ${attribute}s.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)); 

      } else {
      alert(
        `No, the person has made better life choices and isn't ${attribute} anymore. Remove all people who aren't ${attribute}s.`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)); 

      }
  } else {
      if (keep) {
      alert(
        `Yes, this person is ${value}. Annoying, right? Keep all people who are ${value}".`)
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value); 
    } else {
      alert (
        `No, this person isn't ${value}, at least not to our knowledge! Remove all people who claim that they're not ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value); 

   } 
  }

 

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  

  // Invoke a function to redraw the board with the remaining people.
generateBoard ()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const playersGuess = confirm (`Do you really think it's ${personToConfirm}?`); 
   // remember the confirm() ?
  
   // If the player wants to guess, invoke the checkMyGuess function.
   // If you confirm, this function is invoked
   if (playersGuess) {
    checkMyGuess (personToConfirm); 
   }
}

  const checkMyGuess = (personToCheck) => {

// 1. Check if the personToCheck is the same as the secret person's name
// 2. Set a Message to show in the win or lose section accordingly  
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You're absolutely right! ${personToCheck} is the one!`; 
  }
  else {
    winOrLoseText.innerHTML = `Gaaah! Wrong guess! It wasn't ${personToCheck}.`; 
  
}
// 3. Show the win or lose section
 winOrLose.style.display = 'flex'

// 4. Hide the game board
 board.style.display = 'none'
}


// Invokes the start function when website is loaded
start()


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener ('change', selectQuestion)
filterButton.addEventListener ('click', checkQuestion)
playAgainButton.addEventListener ('click', start)
