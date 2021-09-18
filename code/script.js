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
const sheet = document.styleSheets[0];

// add DOM-selector for audio, and then write audio.play() where you want to find it

// Array with all the characters, as objects
// const CHARACTERS = [
//   {
//     name: 'Jabala',
//     img: 'images/jabala.svg',
//     hair: 'hidden',
//     eyes: 'hidden',
//     accessories: ['glasses', 'hat'],
//     other: []
//   },
//   {
//     name: 'Jack',
//     img: 'images/jack.svg',
//     hair: 'hidden',
//     eyes: 'blue',
//     accessories: ['hat'],
//     other: []
//   },
//   {
//     name: 'Jacques',
//     img: 'images/jacques.svg',
//     hair: 'grey',
//     eyes: 'blue',
//     accessories: ['hat'],
//     other: ['smoker', 'beard']
//   },
//   {
//     name: 'Jai',
//     img: 'images/jai.svg',
//     hair: 'black',
//     eyes: 'brown',
//     accessories: [],
//     other: []
//   },
//   {
//     name: 'Jake',
//     img: 'images/jake.svg',
//     hair: 'yellow',
//     eyes: 'green',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'James',
//     img: 'images/james.svg',
//     hair: 'brown',
//     eyes: 'green',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'Jana',
//     img: 'images/jana.svg',
//     hair: 'black',
//     eyes: 'hidden',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'Jane',
//     img: 'images/jane.svg',
//     hair: 'yellow',
//     eyes: 'hidden',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'Jaqueline',
//     img: 'images/jaqueline.svg',
//     hair: 'orange',
//     eyes: 'green',
//     accessories: ['glasses'],
//     other: []
//   },

//   {
//     name: 'Jazebelle',
//     img: 'images/jazebelle.svg',
//     hair: 'purple',
//     eyes: 'hidden',
//     accessories: ['glasses'],
//     other: ['smoker']
//   },
//   {
//     name: 'Jean',
//     img: 'images/jean.svg',
//     hair: 'brown',
//     eyes: 'blue',
//     accessories: ['glasses', 'hat'],
//     other: ['smoker']
//   },
//   {
//     name: 'Jeane',
//     img: 'images/jeane.svg',
//     hair: 'brown',
//     eyes: 'green',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'Jed',
//     img: 'images/jed.svg',
//     hair: 'orange',
//     eyes: 'green',
//     accessories: ['glasses', 'hat'],
//     other: ['smoker']
//   },
//   {
//     name: 'Jenni',
//     img: 'images/jenni.svg',
//     hair: 'white',
//     eyes: 'hidden',
//     accessories: ['hat'],
//     other: []
//   },
//   {
//     name: 'Jeri',
//     img: 'images/jeri.svg',
//     hair: 'orange',
//     eyes: 'green',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'Jerry',
//     img: 'images/jerry.svg',
//     hair: 'hidden',
//     eyes: 'blue',
//     accessories: ['hat'],
//     other: []
//   },
//   {
//     name: 'Jess',
//     img: 'images/jess.svg',
//     hair: 'black',
//     eyes: 'blue',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'Jocelyn',
//     img: 'images/jocelyn.svg',
//     hair: 'black',
//     eyes: 'brown',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'Jon',
//     img: 'images/jon.svg',
//     hair: 'brown',
//     eyes: 'green',
//     accessories: ['glasses'],
//     other: []
//   },
//   {
//     name: 'Jordan',
//     img: 'images/jordan.svg',
//     hair: 'yellow',
//     eyes: 'hidden',
//     accessories: ['glasses', 'hat'],
//     other: []
//   },
//   {
//     name: 'Josephine',
//     img: 'images/josephine.svg',
//     hair: 'grey',
//     eyes: 'brown',
//     accessories: [],
//     other: []
//   },
//   {
//     name: 'Josh',
//     img: 'images/josh.svg',
//     hair: 'yellow',
//     eyes: 'green',
//     accessories: [],
//     other: []
//   },
//   {
//     name: 'Jude',
//     img: 'images/jude.svg',
//     hair: 'black',
//     eyes: 'green',
//     accessories: [],
//     other: []
//   },
//   {
//     name: 'Julie',
//     img: 'images/julie.svg',
//     hair: 'black',
//     eyes: 'brown',
//     accessories: ['glasses', 'hat'],
//     other: []
//   },
// ]

const CHARACTERS = [
  {
    name: 'Ahsoka',
    img: 'images/ahsoka.png',
    hair: 'blue and white',
    eyes: 'blue',
    accessories: ['lightsaber'],
    other: ['jedi'],
    species: 'togruta',
    mood: 'angry'
  },
  {
    name: 'Chopper',
    img: 'images/chopper.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Rex',
    img: 'images/rex.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Anakin Skywalker',
    img: 'images/anakin.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Darth Maul',
    img: 'images/maul.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Luke Skywalker',
    img: 'images/luke.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Grogu',
    img: 'images/grogu.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Cassian',
    img: 'images/cassian.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Leia',
    img: 'images/leia.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'C-3PO',
    img: 'images/c-3po.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Chewbacca',
    img: 'images/chewbacca.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Han Solo',
    img: 'images/han-solo.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Thrawn',
    img: 'images/thrawn.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'R2-D2',
    img: 'images/r2-d2.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  },
  {
    name: 'Yoda',
    img: 'images/yoda.jfif',
    hair: 'no',
    eyes: 'no',
    accessories: [],
    other: ['Astromech droid'],
    species: 'droid',
    mood: 'sassy'
  }
]

// Global variables
let secret
let currentQuestions
let charactersInPlay
let numberOfQuestions
let startTime
let elapsedTime

//add the categories and values from the choosen characters at the beginning of the game
const generateQuestions = () => {
  //for every character
  //save name of property if it does not exist already
  //save value of property if it does not exist already
  //add name as category to the optionlist
  //add value as value to the optionlist, under the correct category and if hair or eyes, add name+category as name
  let allCharacteristics = {}

  charactersInPlay = CHARACTERS

  charactersInPlay.forEach((person) => {
    //creates array of keys in object (so for example hair and other)
    const values = Object.keys(person)

    //for every key in every person, check if it exist as a property in the object allCharacteristics
    for (let key in person) {
      if(!allCharacteristics.hasOwnProperty(key)){
      allCharacteristics[key] = []
      }
      if(Array.isArray(person[key])){
        person[key].forEach((value) => {
          if(!allCharacteristics[key].includes(value)){
            allCharacteristics[key].push(value)
          }
        })
      }
      else{
        if(!allCharacteristics[key].includes(person[key])){
          allCharacteristics[key].push(person[key])
        }
      }
    }
  })

  delete allCharacteristics.name
  delete allCharacteristics.img

  for (let key in allCharacteristics) {
    let optionsHTML

    if(!(key === 'accessories' || key === 'other'|| key === 'species')){
      allCharacteristics[key].forEach((value) => {
        optionsHTML += `
        <option value="${value}">${value} ${key}</option>`
      })
    }
    else{
      allCharacteristics[key].forEach((value) => {
        optionsHTML += `
        <option value="${value}">${value}</option>`
      })
    }
      
    questions.innerHTML += /*html*/` 
    <optgroup label="${key}">
      ${optionsHTML}
    </optgroup>
    `
      // questions.appendChild(optgroup)
  }
}

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
  document.documentElement.style.setProperty('--primary', '#d4c929');
  document.documentElement.style.setProperty('--secondary', 'black');

  document.documentElement.style.setProperty('--primary', '#a259ff');
  document.documentElement.style.setProperty('--secondary', '#b0a6ff');
}

const generatePlayerBoard = () => {
  numberOfQuestions = 0
  question.insertAdjacentHTML('beforebegin', /*html*/`
    <div class='player-info'>
      <h2>Player: ${playerValue.value}</h2>
      <h2 id='questions-asked'>Number of questions asked: ${numberOfQuestions}</h2>
      <h2>Time played: </h2>
      <span class="time" id="display">00:00:00</span>
    <div>
  `)
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret)
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
  startTimer()
}

const validate = () => {
  if (playerValue.value == "") {
    alert("Name must be filled out");
  }
  else{
    generateQuestions()
    generatePlayerBoard()
    start()
  }
}

const timeToString = (time) =>{
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let formattedHH = hh.toString().padStart(2, "0");
  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");

  return `${formattedHH}:${formattedMM}:${formattedSS}`;
}

const startTimer = () => {
  startTime = Date.now();
  setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").innerHTML = timeToString(elapsedTime);
  }, 1000);
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

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  
  if (currentQuestion.category === 'accessories') {
    //check which category it is
    //create a const of the list from the persons attributes
    //check if the choosen value exits within the secret persons attributes
    //want to comapre accesories or other with value
    //want to loop trough the secret persons attributes and others, and compare with value
    if(secret.accessories.length === 0){
      filterCharacters(false)
    }
    else { 
      if (secret.accessories.includes(currentQuestion.valueOfQuestion)) 
          filterCharacters(true)
        else
          filterCharacters(false)
      }
  } 
  
  else if (currentQuestion.category === 'other') {
    if(secret.other.length === 0){
      filterCharacters(false)
    }

    else { 
        if (secret.other.includes(currentQuestion.valueOfQuestion)) 
          filterCharacters(true)
        else
          filterCharacters(false)
    }
  }
  else{
    if (currentQuestion.valueOfQuestion === secret[currentQuestion.category])
      filterCharacters(true)
    else {
      filterCharacters(false)
    }
  }
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, labelOfQuestion,valueOfQuestion } = currentQuestion
  // Show the correct alert message for different categories
  if (keep) {
      alert(
        `Yes, the person has ${labelOfQuestion}! Keep all people with ${labelOfQuestion}`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueOfQuestion))
    } else {
      alert(
        `No, the person does not have ${labelOfQuestion}! Remove all people with ${labelOfQuestion}`
        )
       charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(valueOfQuestion)) 
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
    document.getElementById("winOrLoseText").innerText = `Yay, ${personToCheck} is the right answer! The time it took you to guess correct was ${timeToString(elapsedTime)}`;
  }
  else{
    document.getElementById("winOrLoseText").innerText = `Oh no, ${personToCheck} is not the right answer! The time it took you to guess on the wrong character was ${timeToString(elapsedTime)}`;
  }
}

// All the event listeners
startBtn.addEventListener('click', validate)
restartBtn.addEventListener('click', () => window.location.reload(false))
filterBtn.addEventListener('click', checkQuestion)
playAgainBtn.addEventListener('click', start)