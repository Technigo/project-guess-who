// Andreas Axelsson - Project - Guess Who
////////////////////////////DOM SELECTORS////////////////////////////////////////////

  // All the DOM selectors stored as short variables.  
  // This is what connects ex buttons and dropdown to the html.

const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter')
const questionCounter = document.getElementById('questionsAsked')
const playAgain = document.getElementById('playAgain')

////////////////////////////CHARACTERS OBJECTS///////////////////////////////

  // This is an Array containing all the objects and their properties (name accecories etc)

const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala-andreasaxelssontechnigo.png',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack-andreasaxelssontechnigo.png',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques-andreasaxelssontechnigo.png',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai-andreasaxelssontechnigo.png',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake-andreasaxelssontechnigo.png',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james-andreasaxelssontechnigo.png',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana-andreasaxelssontechnigo.png',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane-andreasaxelssontechnigo.png',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline-andreasaxelssontechnigo.png',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle-andreasaxelssontechnigo.png',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean-andreasaxelssontechnigo.png',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane-andreasaxelssontechnigo.png',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed-andreasaxelssontechnigo.png',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni-andreasaxelssontechnigo.png',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri-andreasaxelssontechnigo.png',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry-andreasaxelssontechnigo.png',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess-andreasaxelssontechnigo.png',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn-andreasaxelssontechnigo.png',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon-andreasaxelssontechnigo.png',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan-andreasaxelssontechnigo.png',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine-andreasaxelssontechnigo.png',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh-andreasaxelssontechnigo.png',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude-andreasaxelssontechnigo.png',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie-andreasaxelssontechnigo.png',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

////////////////////////////GLOBAL VARIABLES///////////////////////////////////////////

  //Creates the variables to use later on

let secret // The secrete person variable that is chosen by the math.random math.flor method
let currentQuestion // Current question object. The question that we are asking.
let charactersInPlay // This is an array that is the same as CHARACTERS when the game starts and then changes when the filer compares the secret person with the category and value.

////////////////////////////THIS IS THE GAMEBOARD///////////////////////////////////////

const generateBoard = () => { // Here this function is created and called.
  board.innerHTML = ''// Every time we start the game this code makes the board fresh
  charactersInPlay.forEach((person) => { // The forEach loops trough all objects and shows the cards
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
//////////////////////////////////SOUND/////////////////////////////////////////////////

const cardFlipTrack = new Audio('./assets/flipcard.mp3');
const makesound = () => {
      cardFlipTrack.play();
};

////////////////////////////THIS RANDOMLY SELECT A SECRET PERSON/////////////////////////
 
  // Math.random method gives you random number between 1 and 0 multiplied with the lenght (items in the array) of the array caractersInPlay
  // Math.floor method pics the item closest to the correct value.

const setSecret = () => { // The function is created and called. The global variable secret is given a value.
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

////////////////////////////THIS IS THE START AND RESTART FUNCTION//////////////////////

const start = () => { // The function is created and then
  charactersInPlay = CHARACTERS   // Here we're setting charactersInPlay array to be all the characters to start with
  winOrLose.style.display = 'none' // WinOrLose connected to the HTML Make the page on the end of the game, but on the start we want display none.
  board.style.display = 'flex' // This is helps the display be more responsive in say mobiles
  generateBoard() // Make the board visible
  setSecret() // Calls and selects the secret person.
}

///////////////////////THIS IS SETTING THE currentQuestion IN THE DROPDOWN/////////////

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value // This variable stores the value ex green orange black...

  currentQuestion = { // Here we create an object named currentQuestion that contains the values that we are going to take with us
    category: category, // Property and value
    value: value, // Propert and value
  }
}

//////////////////////////////////////CHECK QUESTION - KEEP VALUE//////////////////////////////////////////////////

// This function should be invoked when you click on 'Find Out' button.

const checkQuestion = () => {
  const { category, value } = currentQuestion // Insted of writing let category = currentQuestion and let value = currentquestion. Creating a this line so that we can use it in this function.
  let keep = false // Creating the variable keep to be false. As they go trough the if statements and comes out as true (KEEP)

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that

  // This compares the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  if (category === 'hair' || category === 'eyes') {
    keep = value === secret[category]; 
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes(value);
  }
  // Then invoke filterCharacters. This is why we want to filter the characters array and redraw the game board with the "new" array.
  filterCharacters(keep); // (holds the Boolean value True). The  value goes trough the IF statement and stops at True. 
}

////////////////////////////FILTER////////////////////////////////////////////

const filterCharacters = (keep) => { // Keep holds the value true
  const { category, value } = currentQuestion // We declare these variables to use in the if statements inside this scope (ithink? :))
 //-------//////////ACESSORIES////////////
  if (category === 'accessories') {
    if (keep) { // If true then show the alert. Yes, the person wears ${value}! Keep all people that wear ${value}
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)) //person is a parameter - filter is a method and we want i delete the items that not contains the category or value. the result is a new array thets meets the criteria of the filermethod.
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value} `
      )
    } else { // IF false than show: No, the person doesn't wear ${value}! Remove all people that wear ${value}

      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)) // It does not inklude a hat.
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
      )
    }

     //-------//////////OTHER////////////

  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category].includes(value)
      )
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}s`
      )
    }

    //-------//////////HAIR////////////

  } else if (category === 'hair') { //for other categories: hair
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      alert(
        `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, the person doesnt have ${value} hair! Remove all people with ${value} hair`
      )
    }

    //-------//////////EYES////////////

  } else { // for eyes 
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value); // compares if the value is the same
      alert(
        `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value) // or not the same
      alert(
        `No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes`
      )
    }
  }
////////////////////////////REDRAW THE BOARD///////////////////////////////////////////

    // Invoke a function to redraw the board with the remaining people.

  generateBoard() // Showing the new board. We creating a new array with the persons that meet the criteria of category and value
}

///////////////////////////////////GUESS///////////////////////////////////////////////

  // when clicking guess, the player first have to confirm that they want to make a guess.

const guess = (personToConfirm) => { // This is linked in the board and the cards.
  let userGuess = confirm(`Do you want to make a guess ${personToConfirm}?`) // Interaction stored in a variable. Confirm opens the alert window and asks if you want to confirm. personToConfirm is just a placeholder of the person when we click)

  if (userGuess) {
    checkMyGuess(personToConfirm) // RIGHT ANSWER - Sends you to the next step, the check. This invoke the checkMyGuess function.

  }
  else {
    alert("Make more guesses if you want!") // WRONG ANSWER -You can continue playing
  }
}

//////////////////////////////////////CHECK THE GUESS///////////////////////////////////

const checkMyGuess = (personToCheck) => { // Here we bring in the stored interation/value (personToCheck is just a name could be banana).
if (personToCheck === secret.name) { // This compares if the players guess (personeToCheck) is the same as the persons name in the object array then show this message.
  winOrLoseText.innerHTML = `Sorry its not ${personToCheck} the correct answer is ${secret.name}!` // This shows the win or loose page. Secret is a global variable that we declared in the global scopes and can therfore be used here..
} else {
  winOrLoseText.innerHTML = `Sorry its not ${personToCheck} the correct answer is ${secret.name}!`
  winOrLose.style.display = 'flex'
  board.style.display = 'none' // This hides the gameboard when winOrLose-page is shown.
}
}

///////////////////////////////////////START FUNCTION EVOKED////////////////////////////////////////

  // Invokes the start function when website is loaded

start()

///////////////////////////////////////////EVENTLISTENERS/////////////////////////////////////////////

  // All the event listeners

questions.addEventListener('change', selectQuestion) // connected to the dropdown menue
findOutBtn.addEventListener('click', checkQuestion) // connected to the find out button
restartButton.addEventListener('click', start) // connected to the restart button
playAgain.addEventListener('click', start) // connected to the play again button


