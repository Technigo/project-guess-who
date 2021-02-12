// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const filter = document.getElementById('filter')
const restartButton = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('play-again')
const feedback = document.getElementById('feedback')
const feedbackSection = document.getElementById('feedback-section')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Quokka',
    img: 'images/quokka.jpg',
    color: 'brun',
    numberOfLegs: 'två',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Leopard',
    img: 'images/leopard.jpg',
    color: 'fläckig',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Katt',
    img: 'images/kitten.jpg',
    color: 'grå',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Björn',
    img: 'images/bear.jpg',
    color: 'brun',
    numberOfLegs: 'fyra',
    simma: true,
    vifta: false,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Lamm',
    img: 'images/lamb.jpg',
    color: 'vit',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Hök',
    img: 'images/hawk.jpg',
    color: 'orange',
    numberOfLegs: 'två',
    simma: false,
    vifta: false,  
    flyga: true,
    ruva: true,
  },
  {
    name: 'Elefant',
    img: 'images/elephant.jpg',
    color: 'grå',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Kalv',
    img: 'images/cow.jpg',
    color: 'vit',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Orm',
    img: 'images/snake.jpg',
    color: 'grå',
    numberOfLegs: 'inga ben',
    simma: true,
    vifta: false,  
    flyga: false,
    ruva: true,
  },

  {
    name: 'Älg',
    img: 'images/moose.jpg',
    color: 'brun',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: false,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Anka',
    img: 'images/duck.jpg',
    color: 'orange',
    numberOfLegs: 'två',
    simma: true,
    vifta: false,  
    flyga: true,
    ruva: true,
  },
  {
    name: 'Häst',
    img: 'images/horse.jpg',
    color: 'brun',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Giraff',
    img: 'images/giraffe.jpg',
    color: 'fläckig',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Gris',
    img: 'images/pig.jpg',
    color: 'rosa',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Apa',
    img: 'images/monkey.jpg',
    color: 'brun',
    numberOfLegs: 'två',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Räv',
    img: 'images/fox.jpg',
    color: 'orange',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Igelkott',
    img: 'images/hedgehog.jpg',
    color: 'brun',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: false,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Tvättbjörn',
    img: 'images/racoon.jpg',
    color: 'brun',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Gås',
    img: 'images/goose.jpg',
    color: 'gul',
    numberOfLegs: 'två',
    simma: true,
    vifta: false,  
    flyga: true,
    ruva: true,
  },
  {
    name: 'Koala',
    img: 'images/koala.jpg',
    color: 'grå',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: false,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Tiger',
    img: 'images/tiger.jpg',
    color: 'orange',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Bäver',
    img: 'images/beaver.jpg',
    color: 'brun',
    numberOfLegs: 'fyra',
    simma: true,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
  {
    name: 'Groda',
    img: 'images/frog.jpg',
    color: 'gul',
    numberOfLegs: 'fyra',
    simma: true,
    vifta: false,  
    flyga: false,
    ruva: true,
  },
  {
    name: 'Hund',
    img: 'images/puppy.png',
    color: 'fläckig',
    numberOfLegs: 'fyra',
    simma: false,
    vifta: true,  
    flyga: false,
    ruva: false,
  },
]

// Global variables
let secret, currentQuestion, message
let charactersFiltered = CHARACTERS
let counter = 0

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersFiltered.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img class="animal-img" src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Gissa på ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Gissa</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
  console.log("secret", secret)
}

// This function to start (and restart) the game
const start = () => {
  charactersFiltered = CHARACTERS
  questions.selectedIndex = defaultStatus
  counter = 0
  document.getElementById("counter").innerHTML = "0" 
  console.log(counter)
  feedbackSection.classList.remove("visible")
  generateBoard()
  setSecret()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
  if (category === 'Färg') {
    currentQuestion = {
      attribute: 'color',
      value,
      category,
    }
  } else if (category === 'Antal ben') {
    currentQuestion = {
      attribute: 'numberOfLegs',
      value,
      category
    }
  } else if (category === 'Vad den gör') {
    currentQuestion = {
      attribute: value,
      value: true, 
      category
    }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  numberOfCounts()
  selectQuestion()
  const secretValue = secret[currentQuestion.attribute]
  if (secretValue === currentQuestion.value) {
    filterCharacters(true)
  } else {
    filterCharacters(false)
  }
}

const numberOfCounts = () => {
  counter += 1
  document.getElementById("counter").innerHTML = counter
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const group = currentQuestion.category
  const value = currentQuestion.value
  const attribute = currentQuestion.attribute
  message = ""
  if (group === 'Färg') {
    if (keep) {
      message = `<div class="answer-yes">STÄMMER</div><strong>Djuret har ${value} päls!</strong> <div>Behåller alla djur med ${value} päls.</div>`
    } else {
      message = `<div class="answer-no">TYVÄRR</div><strong>Djuret har inte ${value} päls!</strong> <div>Tar bort alla djur med ${value} päls...</div>`
    }
  } else if (group === 'Antal ben') {
      if (keep) {
        message = `<div class="answer-yes">STÄMMER</div><strong>Djuret har ${value} ben!</strong> <div>Behåller alla djur med ${value} ben.</div>`
      } else {
        message = `<div class="answer-no">TYVÄRR</div><strong>Djuret har inte ${value} ben!</strong> <div>Tar bort alla djur med ${value} ben...</div>`
      }
  } else if (group === 'Vad den gör') {
      if (keep) {
        message = `<div class="answer-yes">STÄMMER</div><strong>Djuret kan ${attribute}!</strong> <div>Behåller alla djur som kan ${attribute}.</div>`
      } else {
        message = `<div class="answer-no">TYVÄRR</div><strong>Djuret kan inte ${attribute}!</strong> <div>Tar bort alla djur som inte kan ${attribute}...</div>`
      }
  } 

  charactersFiltered = charactersFiltered.filter(animal => {
        if (secret[attribute] === value) {
            return animal[attribute] === value;
        } else {
            return animal[attribute] !== value;
        }
    });
  feedbackMessage(message)
  //charactersFiltered = charactersFiltered.filter((animal) => keep? animal[attribute] === value:animal[attribute] !== value)
  generateBoard()
}

const feedbackMessage = (message) => {
  feedbackSection.classList.add("visible")
  feedback.innerHTML = `${message}`
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  let myGuess = suspect
  if (confirm("Är du säker?")) {
    checkMyGuess(myGuess)
  } else {
    alert("Okej, försök igen!")
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (myGuess) => {
  if (myGuess === secret.name) {
    winOrLoseText.innerHTML = `${myGuess} är rätt, du vann!`
  } else {
    winOrLoseText.innerHTML = `${myGuess} är fel, game over!`
  }
  board.innerHTML = ''
  winOrLose.classList.add("show")
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', () => {feedbackSection.classList.remove("visible"); start()})
filter.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', () => {winOrLose.classList.remove("show"); start()})