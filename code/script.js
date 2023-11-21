//All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById("filter")
const playAgainButton = document.getElementById("playAgain")
const winOrLoseSection = document.getElementById("winOrLose")
const winOrLoseText = document.getElementById("winOrLoseText")
const winningSound = document.getElementById("winner")
const losingSound = document.getElementById("loser")

// Pause the audio elements initially
winningSound.pause();
losingSound.pause();

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Pete the Parrot',
    img: 'assets/images/pete.jpg',
    legs: 'two',
    ability: 'fly',
    feathers: ['blue', 'grey'],
    fur: [],
    scales: [],
    other: ['a beak']
  },
  {
    name: 'Terry the Terrier',
    img: 'assets/images/terry.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['orange', 'white'],
    scales: [],
    other: ['a collar', 'a smile']
  },
  {
    name: 'Shawn the Shepherd',
    img: 'assets/images/shawn.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['brown', 'black'],
    scales: [],
    other: []
  },
  {
    name: 'Gary the Goldfish',
    img: 'assets/images/gary.jpg',
    legs: 'zero',
    ability: 'breathe underwater',
    feathers: [],
    fur: [],
    scales: ['orange', 'white'],
    other: ['a tendency to forget things']
  },
  {
    name: 'Greg the Greyhound',
    img: 'assets/images/greg.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['brown', 'black'],
    scales: [],
    other: ['a wish to run faster than the speed of light']
  },
  {
    name: 'Gavin the Guinea Pig',
    img: 'assets/images/gavin.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['black', 'white', 'orange'],
    scales: [],
    other: ['a great sense of smell and hearing']
  },
  {
    name: 'Milo the Mouse',
    img: 'assets/images/milo.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['black', 'grey', 'white'],
    scales: [],
    other: ['a snack', 'a big appetite']
  },
  {
    name: 'Walker the Wolf',
    img: 'assets/images/walker.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['white', 'grey'],
    scales: [],
    other: ['an urge to howl at the moon']
  },
  {
    name: 'Chris the Cat',
    img: 'assets/images/chris.jpg',
    legs: 'four',
    ability: 'purr',
    feathers: [],
    fur: ['orange', 'brown', 'white'],
    scales: [],
    other: []
  },
 
  {
    name: 'Owen the Owl',
    img: 'assets/images/owen.jpg',
    legs: 'two',
    ability: 'fly',
    feathers: ['brown', 'white'],
    fur: [],
    scales: [],
    other: ['a beak', 'an ability to see at night']
  },
  {
    name: 'Clem the Cat',
    img: 'assets/images/clem.jpg',
    legs: 'four',
    ability: 'purr',
    feathers: [],
    fur: ['white', 'grey'],
    scales: [],
    other: ['a tongue that sticks out']
  },
  {
    name: 'Phoenix the Pigeon',
    img: 'assets/images/phoenix.jpg',
    legs: 'two',
    ability: 'fly',
    feathers: ['brown', 'grey'],
    fur: [],
    scales: [],
    other: ['a beak']
  },
  {
    name: 'Paul the Poodle',
    img: 'assets/images/paul.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['white'],
    scales: [],
    other: ['a smile']
  },
  {
    name: 'Preston the Pug',
    img: 'assets/images/preston.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['brown'],
    scales: [],
    other: []
  },
  {
    name: 'Rob the Rabbit',
    img: 'assets/images/rob.jpg',
    legs: 'two',
    ability: 'run',
    feathers: [],
    fur: ['white'],
    scales: [],
    other: ['a smile']
  },
  {
    name: 'Leonard the Lab',
    img: 'assets/images/leonard.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['brown', 'black'],
    scales: [],
    other: []
  },
  {
    name: 'Roan the Robin',
    img: 'assets/images/roan.jpg',
    legs: 'two',
    ability: 'fly',
    feathers: ['white', 'brown', 'orange'],
    fur: [],
    scales: [],
    other: ['a beak']
  },
  {
    name: 'Carlos the Cat',
    img: 'assets/images/carlos.jpg',
    legs: 'four',
    ability: 'purr',
    feathers: [],
    fur: ['grey'],
    scales: [],
    other: []
  },
  {
    name: 'Dick the Dachshund',
    img: 'assets/images/dick.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['brown', 'black'],
    scales: [],
    other: ['a collar', 'a smile']
  },
  {
    name: 'Fred the Fox',
    img: 'assets/images/fred.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: ['orange', 'white'],
    scales: [],
    other: ['a smile']
  },
  {
    name: 'Jazz the Cat',
    img: 'assets/images/jazz.jpg',
    legs: 'four',
    ability: 'purr',
    feathers: [],
    fur: ['beige', 'brown'],
    scales: [],
    other: []
  },
  {
    name: 'Stella the Snake',
    img: 'assets/images/stella.jpg',
    legs: 'zero',
    ability: 'hiss',
    feathers: [],
    fur: [],
    scales: ['white', 'black'],
    other: ['a tongue that sticks out']
  },
  {
    name: 'Cameron the Cat',
    img: 'assets/images/cameron.jpg',
    legs: 'four',
    ability: 'purr',
    feathers: [],
    fur: ['red', 'orange', 'white'],
    scales: [],
    other: [' a smile']
  },
  {
    name: 'Camille the Cat',
    img: 'assets/images/camille.jpg',
    legs: 'four',
    ability: 'purr',
    feathers: [],
    fur: ['beige'],
    scales: [],
    other: []
  },
  {
    name: 'Teo the Turtle',
    img: 'assets/images/teo.jpg',
    legs: 'four',
    ability: 'run',
    feathers: [],
    fur: [],
    scales: ['green'],
    other: ['a smile']
  }
 ]
 

// Global variables
let secret
let currentQuestion
let charactersInPlay = CHARACTERS

// Drawing the game board
const generateBoard = () => {
  board.innerHTML = '' //sets inner HTML to an empty string
  charactersInPlay.forEach((person) => { 
    board.innerHTML += ` 
      <div class="card">
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called 'secret'
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}
// Setting what happens when we start the game
const start = () => {
  questions.value=''
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  setTimeout(() => {
    namePrompt();
  }, 1000);
}

// Setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
// The 'category' variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
// 'questions' is the global variable for the drop-down menu
// 'Options[questions.selectedIndex]' is the selected option
// 'parentNode.label' is the optgroup labels e.g "hair"

// We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value
  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
/*Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false*/
const checkQuestion = () => {
  questionCounter++;
  console.log(questionCounter);
  updateCounter();
  const { category, value } = currentQuestion 
// Invoking filterCharacters
  if (category === 'fur' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true); 
    } else {
      filterCharacters(); 
    }
  } else if (category === 'legs' || category === 'ability') {
    if (secret[category] === value) {
      filterCharacters(true); 
    } else {
      filterCharacters() 
    }
  } else if (category === 'scales' || category === 'feathers') {
    if (secret[category].includes(value)) {
      filterCharacters(true); 
    } else {
      filterCharacters(); 
    }
  } 
}

// Create a counter to keep track of how many questions a player asks
let questionCounter = 0;
const countValue = document.getElementById('countValue');
const updateCounter = () => {
  countValue.innerHTML = questionCounter.toString();
}




// This function will filter the characters array and regenerate the board.
const filterCharacters = (keep) => {
  const {category, value} = currentQuestion
  if (category === 'fur') {
    if (keep) {
      alert(
        `Yes, the animal has ${value} fur! Keep everyone with ${value} fur.`)
      charactersInPlay = charactersInPlay.filter((person) =>
      person[category].includes(value))
    } else {
      alert(
        `No, the animal does not have ${value} fur! Remove everyone with ${value} fur.`)
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
      if (keep) {
        alert(
          `Yes! The animal has ${value}! Keep everyone who has ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      }
      else {
        alert(
        `No! The animal does not have ${value}! Remove everyone who has ${value}.`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
  } else if (category === "legs") {
      if (keep) {
        alert(
          `Yes the animal has ${value} ${category}! Keep everyone with ${value} ${category}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        alert(
          `No, the animal does not have ${value} ${category}. Remove everyone with ${value} ${category}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      } 
    } else if (category === "feathers" || category === "scales") {
      if (keep) {
        alert(
          `Yes the animal has ${value} ${category}! Keep everyone with ${value} ${category}.`)
          charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
        alert(
          `No, the animal does not have ${value} ${category}. Remove everyone with ${value} ${category}.`)
          charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      } 
    } else if (category === "ability") {
      if (keep) {
        alert(
          `Yes the animal has ${value}! Keep everyone with ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
        alert(
          `No, the animal does not have ${value}. Remove everyone with ${value}.`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      } 
  // Invoke a function to redraw the board with the remaining people.
    } generateBoard()
  }

// Prompt user to confirm they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(`Are you sure you want to guess?`)
  // remember the confirm() ?
  if (confirmGuess) {
    checkMyGuess(personToConfirm);
   }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  clearInterval(timerInterval); // Stop the timer interval
  if (personToConfirm === secret.name) {
    winningSound.play();
    winOrLoseText.innerHTML = `Congratulations! 👑 It was ${secret.name}. It only took you ${questionCounter} question(s) and ${elapsedTime}s to find out.`
  } else {
    losingSound.play();
    winOrLoseText.innerHTML = `Wrong guess 🥴 The secret animal was ${secret.name}. It only took you ${questionCounter} question(s) and ${elapsedTime}s to find out.`
  }
  winOrLose.style.display = "flex"
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Prompt user for name
const namePrompt = () => {
  let userName;
  let user = prompt("Welcome! Please enter a username to start the game.", "Player 1");
  if (user == null || user == "") {
    userName = "Player 1";
  } else {
    userName = user
  } document.getElementById("playerName").innerHTML = userName;
  startTime = new Date(); // Record the start time
  timerInterval = setInterval(updateTimer, 1000); // Update timer every second
}


// Set up a timer to measure the length of each game
let timerInterval; // To store the setInterval reference
let startTime;     // To store the start time
let endTime;       // To store the end time
let elapsedTime;   // To store the elapsed time

const updateTimer = () => {
  endTime = new Date(); // Record the current time
  elapsedTime = Math.floor((endTime - startTime) / 1000); // Calculate elapsed time in seconds
  document.getElementById('timerValue').innerHTML = elapsedTime;
};





// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start)
findOutButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)
playAgainButton.addEventListener('click', () => {
  start()
  window.location.reload()
})
