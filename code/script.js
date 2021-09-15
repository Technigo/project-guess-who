// All the DOM selectors stored as short variables
const playerArea = document.getElementById('question-aside')
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const question = document.getElementById('question')
const startBtn = document.getElementById('play')
const restartBtn = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
const playAgainBtn = document.getElementById('playAgain')
const playerValue = document.getElementById('playername')

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
let currentQuestions
let charactersInPlay
let numberOfQuestions


// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += /*html*/`
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

const generatePlayerBoard = () => {
  numberOfQuestions = 0
  question.insertAdjacentHTML('beforebegin', /*html*/`
    <div class='player-info'>
      <h2>Player: ${playerValue.value}</h1>
      <h2 id='questions-asked'>Number of questions asked: ${numberOfQuestions}</h1>
    </div>
    <div id="timer"></div>
  `)

  // playerArea.innerHTML.prepend(`<h3>Hellloo</h3>`)
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret)
}

const countTimer= () => {
  ++totalSeconds;
  var hour = Math.floor(totalSeconds/3600);
  var minute = Math.floor((totalSeconds - hour*3600)/60);
  var seconds = totalSeconds - (hour*3600 + minute*60);
  if(hour < 10)
    hour = "0"+hour;
  if(minute < 10)
    minute = "0"+minute;
  if(seconds < 10)
    seconds = "0"+seconds;
  document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

// let timerVar = setInterval(countTimer, 1000);
// let totalSeconds = 0;

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  startBtn.style.display = "none"
  restartBtn.style.display = "block"

  numberOfQuestions = 0
  document.getElementById('questions-asked').innerText = `Number of questions asked: ${numberOfQuestions}`

  document.getElementById("board").style.display = "flex";
  document.getElementById("winOrLose").style.display = "none";

  document.getElementById("start-aside").style.display = "none";
  document.getElementById("question-aside").style.display = "flex";

  charactersInPlay = CHARACTERS
  setSecret()  
  generateBoard()
}

const validate = () => {
  if (playerValue.value == "") {
    alert("Name must be filled out");
  }
  else
    generatePlayerBoard()
    start()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  console.log('selectQuestion works!')
  // selectedIndex gives the choosen indexnumber of the array. https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  
  // We also need a variable that stores the actual value of the question we've selected.
  const label = questions.options[questions.selectedIndex].label
  const value = questions.options[questions.selectedIndex].value

  //currentQuestion is a global variable
  currentQuestion = {
    category: category,
    labelOfQuestion: label,
    valueOfQuestion: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  numberOfQuestions += 1
  document.getElementById('questions-asked').innerText = `Number of questions asked: ${numberOfQuestions}`
  selectQuestion()
  const { category, labelOfQuestion,valueOfQuestion } = currentQuestion //what is guessed
  // const {name, img, hair, eyes, accessories, other} = secret //who is the secret person

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    //.includes searches for value in hair, and if hair contains value it is true.
    if (valueOfQuestion.includes(secret.hair) || valueOfQuestion.includes(secret.eyes))
      filterCharacters(true)
    else {
      filterCharacters(false)
    }
  } 
  
  else if (category === 'accessories') {
    //check which category it is
    //create a const of the list from the persons attributes
    //check if the choosen value exits within the secret persons attributes
    //want to comapre accesories or other with value
    //want to loop trough the secret persons attributes and others, and compare with value
    if(secret.accessories.length === 0){
      filterCharacters(false)
    }
    else { 
      if (secret.accessories.includes(valueOfQuestion)) 
          filterCharacters(true)
        else
          filterCharacters(false)
      }
  } 
  
  else if (category === 'other') {
    if(secret.other.length === 0){
      filterCharacters(false)
    }

    else { 
        if (secret.other.length.includes(valueOfQuestion)) 
          filterCharacters(true)
        else
          filterCharacters(false)
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, labelOfQuestion,valueOfQuestion } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${valueOfQuestion}! Keep all people that wears ${labelOfQuestion}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueOfQuestion))
    } else {
      alert(
        `No, the person doesn't wear ${valueOfQuestion}! Remove all people that wears ${labelOfQuestion}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(valueOfQuestion))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person wears ${valueOfQuestion}! Keep all people that wears ${labelOfQuestion}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueOfQuestion))
    } else {
      alert(
        `No, the person doesn't wear ${valueOfQuestion}! Remove all people that wears ${labelOfQuestion}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(valueOfQuestion))
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${valueOfQuestion}! Keep all people with ${labelOfQuestion}`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category] === valueOfQuestion)
    } else {
      alert(
        `No, the person does not have ${valueOfQuestion}! Remove all people with ${labelOfQuestion}`
        )
       charactersInPlay = charactersInPlay.filter((person) => person[category] !== valueOfQuestion) 
    }
  }
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  
  guessAnswer = confirm(`Do you want to guess on ${personToConfirm}?`)

  if (guessAnswer) {
    checkMyGuess(personToConfirm)
  }
  else {
    alert(`Okay then, think a bit more and guess again!`)
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  const {name} = secret
  document.getElementById("board").style.display = "none";
  document.getElementById("winOrLose").style.display = "flex";
  if(personToCheck === name){
    document.getElementById("winOrLoseText").innerText = `Yay, ${personToCheck} is the right answer!`;
  }
  else{
    document.getElementById("winOrLoseText").innerText = `Oh no, ${personToCheck} is not the right answer!`;
  }
}

// All the event listeners
startBtn.addEventListener('click', validate)
restartBtn.addEventListener('click', () => window.location.reload(false))
filterBtn.addEventListener('click', checkQuestion)
playAgainBtn.addEventListener('click', start)