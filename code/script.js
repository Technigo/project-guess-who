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
    name: 'Harald-Leif',
    img: 'images/person1.png',
    vices: 'toilet seat terrorist',
    musictaste: 'a fan of Sven-Ingvars',
    traits: ['paranoid', 'greedy'],
    other: []
  },
  {
    name: 'Bent-Are',
    img: 'images/person2.png',
    vices: 'toilet seat terrorist',
    musictaste: 'a fan of Anna Book',
    traits: ['greedy'],
    other: []
  },
  {
    name: 'Livunn',
    img: 'images/person3.png',
    vices: 'laughing loudly at everything',
    musictaste: 'a fan of Anna Book',
    traits: ['greedy'],
    other: ['a bad friend']
  },
  {
    name: 'Signe',
    img: 'images/person4.png',
    vices: 'freeloader',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['crazy'],
    other: []
  },
  {
    name: 'Gunnbjørn',
    img: 'images/person7.png',
    vices: 'binge drinker',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['paranoid'],
    other: []
  },
  {
    name: 'Ole-Ronny',
    img: 'images/person6.png',
    vices: 'nose picker',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['vindictive'],
    other: []
  },
  {
    name: 'Britt-Olga',
    img: 'images/person5.png',
    vices: 'freeloader',
    musictaste: 'a fan of Sven-Ingvars',
    traits: ['paranoid', 'narsissistic'],
    other: []
  },
  {
    name: 'Dagny',
    img: 'images/person8.png',
    vices: 'binge drinker',
    musictaste: 'a fan of A-ha',
    traits: ['arrogant'],
    other: []
  },
  {
    name: 'Målfrid',
    img: 'images/person9.png',
    vices: 'litterer',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['egocentric', 'narsissistic'],
    other: []
  },

  {
    name: 'Harry-Jan',
    img: 'images/person10.png',
    vices: 'whiner',
    musictaste: 'a fan of Vengaboys',
    traits: ['crazy'],
    other: ['a bad friend']
  },
  {
    name: 'Knut-Sverre',
    img: 'images/person24.png',
    vices: 'nose picker',
    musictaste: 'a fan of Anna Book',
    traits: ['pessimistic', 'greedy'],
    other: ['a bad friend']
  },
  {
    name: 'Gunn-Elin',
    img: 'images/person11.png',
    vices: 'nose picker',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['vindictive'],
    other: ['a cheater']
  },
  {
    name: 'Snorre',
    img: 'images/Person20.png',
    vices: 'litterer',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['paranoid', 'greedy'],
    other: ['a bad friend']
  },
  {
    name: 'Frøydis',
    img: 'images/Person16.png',
    vices: 'talking in baby voice',
    musictaste: 'a fan of A-ha',
    traits: ['greedy', 'pessimistic'],
    other: []
  },
  {
    name: 'Eldbjørg',
    img: 'images/person14.png',
    vices: 'litterer',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['paranoid'],
    other: []
  },
  {
    name: 'Roy-Petter',
    img: 'images/person15.png',
    vices: 'toilet seat terrorist',
    musictaste: 'a fan of Anna Book',
    traits: ['greedy'],
    other: []
  },
  {
    name: 'Norbert',
    img: 'images/person13.png',
    vices: 'freeloader',
    musictaste: 'a fan of Anna Book',
    traits: ['arrogant', 'lazy'],
    other: []
  },
  {
    name: 'Torleif',
    img: 'images/person17.png',
    vices: 'freeloader',
    musictaste: 'a fan of Carola',
    traits: ['lazy', 'narsissistic'],
    other: []
  },
  {
    name: 'Geir-Arne',
    img: 'images/person25.png',
    vices: 'nose picker',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['lazy'],
    other: []
  },
  {
    name: 'Kevin-André',
    img: 'images/person19.png',
    vices: 'binge drinker',
    musictaste: 'a fan of Carola',
    traits: ['paranoid', 'greedy', 'narsissistic'],
    other: []
  },
  {
    name: 'Vigdis',
    img: 'images/person18.png',
    vices: 'laughing loudly at everything',
    musictaste: 'a fan of Vengaboys',
    traits: ['narsissistic', 'egocentric'],
    other: []
  },
  {
    name: 'Alf-Kåre',
    img: 'images/person21.png',
    vices: 'binge drinker',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['lazy'],
    other: []
  },
  {
    name: 'Aslaug',
    img: 'images/person22.png',
    vices: 'freeloader',
    musictaste: 'a fan of Onkel Kånkel',
    traits: ['arrogant'],
    other: []
  },
  {
    name: 'Gizabellah',
    img: 'images/person23.png',
    vices: 'freeloader',
    musictaste: 'a fan of Vengaboys',
    traits: ['paranoid', 'narsissistic'],
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
  } else if (category === 'musictaste') {
      currentQuestion = {
        attribute: 'musictaste', 
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


  // Compare the currentQuestion details with the secret person details in a different manner based on category (vices/musictaste or traits/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

  if (category === 'vices'|| category === 'musictaste') {
    if (secret[category] === value) {
      filterCharacters(true); //This one keeps everyone who has that vice or musictaste taste. 
    }
    else {
    filterCharacters(false); //This one removes everyone who has that vice or musictaste taste.. 
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
        `Yes, the person is definitely ${value}! Keep all people who are ${value}.`); 
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)); 
 
    } else {
      alert(
        `No, the person is not ${value}, thank god! Remove all people who are ${value}.`)
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
        `Yes, this person is a ${value}. Annoying, right? Keep all people who are ${value}s.`)
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value); 
    } else {
      alert (
        `No, this person isn't a ${value}, at least not to our knowledge! Remove all people who claim that they're not ${value}s.`)
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
