// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const playAgainButton = document.getElementById('playAgain')
const startButton = document.getElementById('start')
const filter = document.getElementById('filter')
const startWindow = document.getElementById('start-window')

const startAudio = document.getElementById('audio')
const winningAudio = document.getElementById('audio-winning')
const lostAudio = document.getElementById('audio-lost')

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// when you open the page this is the first you see
window.onload = () => {

  startWindow.style.display = 'flex' // showing start window 
  document.getElementsByClassName('question-section')[0].style.display = 'none'
  start()

}


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

  charactersInPlay = CHARACTERS
  generateBoard() // showint the board with characters 
  setSecret() // randomly setting a secret person 
}


const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  
// this variable stores the value of the question user selected. 
  const value = questions.value 

  // at this point the currentQuestion object is created, before it was just a variable that we declared
  currentQuestion = {
    category: category, 
    value: value
  }
}


const checkQuestion = () => {
  const { category, value } = currentQuestion
 
  let keep // declaring a variable keep 

  // if currentQuestion has category with ex hair AND currentQuestion value from the same category is the same as secret 
  // comparing currentQuestion object with secret random object 
  if (currentQuestion.category === 'hair' && currentQuestion.value === secret.hair) {
    keep = true
  } else if (currentQuestion.category === "eyes" && currentQuestion.value === secret.eyes) {
    keep = true
  } else if (currentQuestion.category === "accessories" && secret.accessories.includes(currentQuestion.value)) {
    keep = true
  } else if (currentQuestion.category === "other" && secret.other.includes(currentQuestion.value)) {
    keep = true
  } else {
    keep = false
  }

  filterCharacters(keep) // sending keep as a paramater to the filterCharacters function
  
}

const modalWindow = (category, value, keep) => {
      if(category === 'accessories') {
        if(keep) {
          modal.style.display = "block"; // showing modal window to the user
          document.getElementById('modal-text').innerHTML = `Yes, this person wears ${value}` // changing text in the paragraph and showing user
          charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) // keeping all characters that has that value
        } else {
          modal.style.display = "block";
          document.getElementById('modal-text').innerHTML = `No, this person doesnt wears ${value}`
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) // removing all characters that has not the value
        }
      } 
      else if(category === 'other') {
        if(keep) {
          modal.style.display = "block"; // showing modal window to the user
          document.getElementById('modal-text').innerHTML = `Yes, this person does ${value}` // changing text in the paragraph and showing user
          charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
        } else {
          modal.style.display = "block";
          document.getElementById('modal-text').innerHTML = `No, this person doesn't ${value}`
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
        }
      }
      else if(category === 'hair' || category === 'eyes') {
        if(keep) {
          modal.style.display = "block"; // showing modal window to the user
          document.getElementById('modal-text').innerHTML = `Yes, this person has ${value} ${category}` // changing text in the paragraph and showing user
          charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
        } else {
          modal.style.display = "block";
          document.getElementById('modal-text').innerHTML = `No, this person hasn't ${value} ${category}`
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
        }
      }

  // "close" (x) button that user can use to close the modal window
  span.addEventListener('click', () => {
    modal.style.display = "none";
  })

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {

  const { category, value } = currentQuestion // taking value from category and value
  modalWindow(category, value, keep) // calling this function and passing 3 paramenters, this function filter and showing message to the user
  generateBoard() // invoking generateBoard() to show the user the filtered version of the characters based on questions that the user asked
}
  
// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  let person = personToConfirm
  let letsGuess = confirm(`Do you want to guess on ${personToConfirm}?`)
  if(letsGuess) {
    checkMyGuess(person)
  } else {
    alert("Okay, try again!")
  }
}

// 
const checkMyGuess = (personToCheck) => {

  if(personToCheck === secret.name) {
    document.getElementById('winOrLoseText').innerHTML="YEAH! You won. Want to play again?";
    startAudio.pause()   
    winningAudio.play()
  } else{
    document.getElementById('winOrLoseText').innerHTML="Oh no! You lost, try again!";
    startAudio.pause()
    lostAudio.play()
    }

  document.getElementById('winOrLose').style.display='flex'; 
  board.style.display = 'none'
  playAgainButton.addEventListener('click',() => {
    document.getElementById('winOrLose').style.display='none';
    board.style.display = 'flex'
    startAudio.play() 
    start()
    })
}




// EVENT LISTINERS
questions.addEventListener('change', selectQuestion)
filter.addEventListener('click', checkQuestion)
startButton.addEventListener('click', () => {
  startAudio.play();
  startWindow.style.display='none';
  board.style.display = 'flex'
})


// confetti.start()








