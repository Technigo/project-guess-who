// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findoutButton = document.getElementById('filter')
const guessButton = document.querySelectorAll('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playagainButton = document.getElementById('playAgain')

console.log = () => {};


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Robin',
    img: 'images/Robin.png',
    relation: 'fboff',
    ghost: false,
    dog: true,
    music: false,
    tattoos: true,
    alc: true,
    nodad: true,
    emotion: false,
    interests: ['music', 'dog', 'gamer']

  },
  
  {
    name: 'Johan',
    img: 'images/Johan.png',
    relation: 'fwb',
    ghost: false,
    dog: false,
    music: true,
    tattoos: true,
    alc: false,
    nodad: false,
    emotion: false,
    interests: ['music', 'gamer']

  },
  {
    name: 'Oskar',
    img: 'images/Oskar.png',
    relation: 'fboff',
    ghost: true,
    dog: false,
    music: false,
    tattoos: true,
    alc: true,
    nodad: true,
    emotion: false,
    interests: ['gamer']

  },
  {
    name: 'Carl',
    img: 'images/Carl.svg',
    relation: 'sitch',
    ghost: false,
    dog: true,
    music: false,
    tattoos: false,
    alc: true,
    nodad: true,
    emotion: false,
    interests: ['dog', 'gamer']

  },
  {
    name: 'Svante',
    img: 'images/Svante.svg',
    relation: 'sitch',
    ghost: false,
    dog: false,
    music: false,
    tattoos: false,
    alc: false,
    nodad: false,
    emotion: false,
    interests: []

  },
  
  {
    name: 'Krister',
    img: 'images/Krister.svg',
    relation: 'sitch',
    ghost: false,
    dog: false,
    music: false,
    tattoos: true,
    alc: true,
    nodad: true,
    emotion: false,
    interests: ['gamer']

  },
  {
    name: 'OskarB',
    img: 'images/OskarB.png',
    relation: '',
    ghost: true,
    dog: false,
    music: true,
    tattoos: true,
    alc: false,
    nodad: false,
    emotion: false,
    interests: ['music', 'gamer']

  },
  {
    name: 'Simon',
    img: 'images/Simon.png',
    relation: 'sitch',
    ghost: true,
    dog: false,
    music: false,
    tattoos: true,
    alc: true,
    nodad: '',
    emotion: false,
    interests: []

  },
  {
    name: 'Rasmus',
    img: 'images/Rasmus.svg',
    relation: 'fwb',
    ghost: false,
    dog: false,
    music: true,
    tattoos: true,
    alc: true,
    nodad: false,
    emotion: false,
    interests: ['music']

  },
  {
    name: 'Axel',
    img: 'images/Axel.png',
    relation: 'fwb',
    ghost: false,
    dog: false,
    music: true,
    tattoos: false,
    alc: true,
    nodad: false,
    emotion: false,
    interests: ['music']

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
      <img src=${person.img} alt=${person.name}>
        <p>${person.name}</p>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="guess-button-small" onclick="guess('${person.name}')">Guess</button>
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

  window.onload = () => {
  generateBoard() 
  }

  setSecret()

  winOrLose.style.display = 'none'
  board.style.display = 'flex'

}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.options[questions.selectedIndex].value;

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  if (category === "Was the relationship...") {
    currentQuestion = {
      attribute: "relationStatus",
      value: value,
      category: category,
    };
  } else if (category === "---") {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    };

  }  
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const secretValue = secret[currentQuestion.attribute];
  
  if (secretValue === currentQuestion.value) {
    filterCharacters(true);
  } else {
    filterCharacters(false);
  }
};
   

  const filterCharacters = (keep) => {

    const { category, value, attribute } = currentQuestion


     if (attribute === "relationStatus"){
               if (keep) {alert(`Yes we were in a ${value}-relationship.`)
               charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
               } 
                else {alert(`No, we weren't in a ${value}-relationship. Remove?`)
                charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
                }
             }

      else if (attribute === value){  

                if (value === 'ghost'){
                        if (keep) {alert(`Yes he did, the bastard. Keep all ghosters.`);
                        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute].includes(value))
                        } else {alert(`No, this guy it went to shit with some other way. Filter out all ghosters.`)
                        charactersInPlay = charactersInPlay.filter((person) => !person[currentQuestion.attribute].includes(value))
                        }  
                }

                else if (value === 'tattoos') {

                        if (keep) {
                        alert(`Many tattoos, indeed. Keep!`);
                        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute].includes(value))
                        } else {
                        alert(`Nah this guy was too boring for that. Remove all with few/no tattoos`)
                        charactersInPlay = charactersInPlay.filter((person) => !person[currentQuestion.attribute].includes(value))
                        }
                }

                else if (currentQuestion.value === 'dog') {

                    if (keep) {
                        alert(`The dog was harder to leave than he was. Keep all dog-owners.`);
                        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute].includes(value))
                        } else {
                        alert(`No dog, just puppy eyes. Remove all dog-owners.`)
                        charactersInPlay = charactersInPlay.filter((person) => !person[currentQuestion.attribute].includes(value))
                        }
                }
            
                else if (currentQuestion.value === 'music') {

                    if (keep) {
                        alert(`Of course he did. Musicians are such stable, reliable lifepartners. Keep all musicians.`);
                        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute].includes(value))
                        } else {
                        alert(``)
                        charactersInPlay = charactersInPlay.filter((person) => !person[currentQuestion.attribute].includes(value))
                    
                    }
                }
                
                else if (currentQuestion.value === 'alc') {

                    if (keep) {
                        alert(`Yes, because why notice all the red flags when they're so fun at parties?`);
                        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute].includes(value))
                        } else {
                        alert(`Surprisingly, some of my exes weren't complete trainwrecks. Filter out all the heavy drinkers.`)
                        charactersInPlay = charactersInPlay.filter((person) => !person[currentQuestion.attribute].includes(value))
                    }
                }

                else if (currentQuestion.value === 'emotion') {
                    alert(`Ha! Trick question, - none of them were!`);
                    }     
            };

            generateBoard();
    }
      

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  const userConfirmation = confirm(`Are you sure to guess on ${personToConfirm}? You only get one guess.`);

  if (userConfirmation) {
    checkMyGuess(personToConfirm);
    };
   
}


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
    
    if (personToCheck === secret.name) {
        winOrLoseText.innerHTML = ` ${personToCheck} is correct!`;
    } else if (personToCheck.name !== secret.name) {
        winOrLoseText.innerHTML = ` ${personToCheck} is wrong!`;
    }

    winOrLose.style.display = 'flex'
    board.style.display = 'none'
  
}

// Invokes the start function when website is loaded

start()

const restart = () => {
    window.location.reload();
}


// All the event listeners
questions.addEventListener('change', selectQuestion)
findoutButton.addEventListener('click', checkQuestion)
playagainButton.addEventListener('click', start)
restartButton.addEventListener('click', restart)



