// All the DOM selectors stored as short variables
const playerArea = document.getElementById('question-aside')
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const question = document.getElementById('question')
const themes = document.getElementById('theme')
const startBtn = document.getElementById('play')
const restartBtn = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
const playAgainBtn = document.getElementById('playAgain')
const playerValue = document.getElementById('playername')
const favicon = document.querySelector('[rel=icon]')
const soundsArea = document.getElementById('soundeffects')

// add DOM-selector for audio, and then write audio.play() where you want to find it

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses', 'a hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a hat', 'a parrot', 'an eyepatch'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['pipe','beard'],
    other: ['smoker' ]
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
    accessories: ['sunglasses', 'beard'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['3D-glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'necklace', 'earrings'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses', 'cigarette'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'a hat', 'cigarette', 'beard'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses','freckles'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'a hat', 'cigarette'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a hat', 'a phone'],
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
    accessories: ['a hat'],
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
    accessories: ['glasses', 'earrings'],
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
    accessories: ['sunglasses', 'a hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earrings'],
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
    accessories: ['beard'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'a hat'],
    other: []
  },
]

const CHARACTERS2 = [
  {
    name: 'Ahsoka',
    img: 'images/ahsoka.png',
    hair: 'blue and white',
    eyes: 'blue',
    color: 'orange',
    accessories: ['a lightsaber'],
    other: [],
    species: 'togruta'
  },
  {
    name: 'Chopper',
    img: 'images/chopper.jfif',
    hair: 'no',
    eyes: 'no',
    color: 'white',
    accessories: [],
    other: ['astromech droid'],
    species: 'droid'
  },
  {
    name: 'Rex',
    img: 'images/rex.jfif',
    hair: 'yellow',
    eyes: 'brown',
    color: 'light',
    accessories: [],
    other: ['clonetrooper'],
    species: 'human'
  },
  {
    name: 'Anakin Skywalker',
    img: 'images/anakin.jfif',
    hair: 'brown',
    eyes: 'blue',
    color: 'light',
    accessories: ['a lightsaber'],
    other: ['jedi', 'sithlord'],
    species: 'human'
  },
  {
    name: 'Maul',
    img: 'images/maul.jfif',
    hair: 'no',
    eyes: 'red',
    color: 'red',
    accessories: ['horns'],
    other: ['sithlord'],
    species: 'zabrak'
  },
  {
    name: 'Luke Skywalker',
    img: 'images/luke.jfif',
    hair: 'brown',
    eyes: 'blue',
    color: 'light',
    accessories: ['a lightsaber'],
    other: ['jedi', 'rebel'],
    species: 'human'
  },
  {
    name: 'Grogu',
    img: 'images/grogu.jfif',
    hair: 'white',
    eyes: 'brown',
    color: 'green',
    accessories: [],
    other: [],
    species: 'unknown'
  },
  {
    name: 'Cassian',
    img: 'images/cassian.jfif',
    hair: 'brown',
    eyes: 'brown',
    color: 'light',
    accessories: [],
    other: ['rebel'],
    species: 'human'
  },
  {
    name: 'Leia',
    img: 'images/leia.jfif',
    hair: 'brown',
    eyes: 'brown',
    color: 'light',
    accessories: ['a blaster', 'hairbuns'],
    other: ['rebel'],
    species: 'human'
  },
  {
    name: 'C-3PO',
    img: 'images/c-3po.jfif',
    hair: 'no',
    eyes: 'yellow',
    color: 'yellow',
    accessories: [],
    other: ['protocol droid'],
    species: 'droid'
  },
  {
    name: 'Chewbacca',
    img: 'images/chewbacca.jfif',
    hair: 'brown',
    eyes: 'blue',
    color: 'brown',
    accessories: [],
    other: ['rebel'],
    species: 'wookie'
  },
  {
    name: 'Han Solo',
    img: 'images/han-solo.jfif',
    hair: 'brown',
    eyes: 'green',
    color: 'light',
    accessories: ['a blaster'],
    other: ['rebel'],
    species: 'human'
  },
  {
    name: 'Thrawn',
    img: 'images/thrawn.jfif',
    hair: 'blue',
    eyes: 'red',
    color: 'blue',
    accessories: [],
    other: ['grand admiral'],
    species: 'chiss'
  },
  {
    name: 'R2-D2',
    img: 'images/r2-d2.jfif',
    hair: 'no',
    eyes: 'no',
    color: 'white',
    accessories: [],
    other: ['astromech droid'],
    species: 'droid'
  },
  {
    name: 'Yoda',
    img: 'images/yoda.jfif',
    hair: 'white',
    eyes: 'brown',
    color: 'green',
    accessories: [],
    other: ['jedi'],
    species: 'unknown'
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
   let allCharacteristics = {}

  const theme = themes.options[themes.selectedIndex].label

  if(theme === 'Star Wars'){
    charactersInPlay = CHARACTERS2
  }

  else{
    charactersInPlay = CHARACTERS
  }

  charactersInPlay.forEach((person) => {
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

  //add the properties of the characters as options
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
}

//generate the sections that displays player-info
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
}

// This function to start the game and set characters from choosen theme
const start = () => {
  startBtn.style.display = "none"
  restartBtn.style.display = "block"

  numberOfQuestions = 0
  document.getElementById('questions-asked').innerText = `Number of questions asked: ${numberOfQuestions}`

  document.getElementById("board").style.display = "flex"
  document.getElementById("winOrLose").style.display = "none"

  document.getElementById("start-aside").style.display = "none"
  document.getElementById("question-aside").style.display = "flex"

  const theme = themes.options[themes.selectedIndex].label

  if(theme === 'Star Wars'){
    charactersInPlay = CHARACTERS2
    document.documentElement.style.setProperty('--primary', '#d4c929')
    document.documentElement.style.setProperty('--secondary', 'black')

    soundsArea.innerHTML = /*html*/ `
      <audio autoplay>
        <source src="./sound/coolsaber.mp3" type="audio/wav">
      </audio>
    `
    favicon.href="./images/favicon-sw.png"
  }

  else{
    charactersInPlay = CHARACTERS
    document.documentElement.style.setProperty('--primary', '#a259ff')
    document.documentElement.style.setProperty('--secondary', '#b0a6ff')
  }
  
  setSecret()  
  generateBoard()
  startTimer()
}

//validate the name-input to make sure that a name is filled in and that a theme is choosen
const validate = () => {
  const theme = themes.options[themes.selectedIndex].label

  if (playerValue.value == "" && (theme==='Select Theme')) {
    alert("Name must be filled out and theme must be choosen")
  }
  else if(theme==='Select Theme'){
    alert("A theme must be choosen")
  }
  else if (playerValue.value == "") {
    alert("Name must be filled out")
  }
  else{
    generateQuestions()
    generatePlayerBoard()
    start()
  }
}

//returns time spent as HH:MM:SS
const timeToString = (time) =>{
  let diffInHrs = time / 3600000
  let hh = Math.floor(diffInHrs)

  let diffInMin = (diffInHrs - hh) * 60
  let mm = Math.floor(diffInMin)

  let diffInSec = (diffInMin - mm) * 60
  let ss = Math.floor(diffInSec)

  let formattedHH = hh.toString().padStart(2, "0")
  let formattedMM = mm.toString().padStart(2, "0")
  let formattedSS = ss.toString().padStart(2, "0")

  return `${formattedHH}:${formattedMM}:${formattedSS}`
}

//calculates the time spent playing and displays it every second
const startTimer = () => {
  startTime = Date.now()
  setInterval(function printTime() {
    elapsedTime = Date.now() - startTime
    document.getElementById("display").innerHTML = timeToString(elapsedTime)
  }, 1000)
}

// setting the currentQuestion object from what is selected in the dropdown
const selectQuestion = () => {
  // selectedIndex gives the choosen indexnumber of the array. https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  
  // We also need a variable that stores the actual value of the question we've selected.
  const label = questions.options[questions.selectedIndex].label
  const value = questions.options[questions.selectedIndex].value

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
  
  if(Array.isArray(secret[currentQuestion.category])){
    if (secret[currentQuestion.category].includes(currentQuestion.valueOfQuestion))
      filterCharacters(true)
    else {
      filterCharacters(false)
    }
  }
  else {
    if (currentQuestion.valueOfQuestion === secret[currentQuestion.category]){
    filterCharacters(true)
    }
    else {
      filterCharacters(false)
    }
  }
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, labelOfQuestion,valueOfQuestion } = currentQuestion
  // Show the correct alert message for different categories
  if (keep && category === 'hair' || keep && category === 'eyes' || keep && category === 'accessories') {
      alert(
        `Yes, the character has ${labelOfQuestion}! Keep all characters with ${labelOfQuestion}`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueOfQuestion))
  } 
  else if (!keep && category === 'hair' || !keep && category === 'eyes' || !keep && category === 'accessories') {
    alert(
      `No, the character does not have ${labelOfQuestion}! Remove all characters with ${labelOfQuestion}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(valueOfQuestion))
  } 
  else if (keep && category === 'species'|| keep && category === 'color'){
    alert(
      `Yes, the character is ${labelOfQuestion}! Keep all characters who are ${valueOfQuestion}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueOfQuestion))
  }
  else  if (!keep && category === 'species' || !keep && category === 'color'){
    alert(
      `No, the character is not ${labelOfQuestion}! Remove all characters who are ${valueOfQuestion}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(valueOfQuestion)) 
  }
  else if (keep && category === 'other'){
    alert(
      `Yes, the character is a ${labelOfQuestion}! Keep all characters who are ${valueOfQuestion}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(valueOfQuestion))
  }
  else  if (!keep && category === 'other'){
    alert(
      `No, the character is not a ${labelOfQuestion}! Remove all characters who are ${valueOfQuestion}`
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

// if guess is confirmed, this function is invoked
const checkMyGuess = (personToCheck) => {
  const {name} = secret
  document.getElementById("board").style.display = "none"
  document.getElementById("winOrLose").style.display = "flex"
  if(personToCheck === name){
    soundsArea.innerHTML = /*html*/ `
      <audio autoplay>
        <source src="./sound/right.wav" type="audio/wav">
      </audio>
    `
    document.getElementById("winOrLoseText").innerText = `Good work ${playerValue.value}, ${personToCheck} is the right answer! The time it took you to guess correct was ${timeToString(elapsedTime)}`
  }
  else{
    soundsArea.innerHTML = /*html*/ `
      <audio autoplay>
        <source src="./sound/wrong.wav" type="audio/wav">
      </audio>
    `
    document.getElementById("winOrLoseText").innerText = `Oh no ${playerValue.value}, ${personToCheck} is not the right answer! The time it took you to guess on the wrong character was ${timeToString(elapsedTime)}`
  }
}

// All the event listeners
startBtn.addEventListener('click', validate)
restartBtn.addEventListener('click', () => window.location.reload(false))
filterBtn.addEventListener('click', checkQuestion)
playAgainBtn.addEventListener('click', start)