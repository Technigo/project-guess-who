// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filledButton = document.getElementById('filter')
const winOrLoseWrapper = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const showWinOrLose = document.getElementById('showWinOrLose')

// Array with all characters
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    earrings: false,
    beard: true
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
    earrings: false,
    beard: true
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: true,
    beard: false
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
    earrings: false,
    beard: false
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
    earrings: false,
    beard: false
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
    earrings: false,
    beard: true
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: true,
    beard: false
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
    earrings: true,
    beard: false
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    earrings: false,
    beard: false
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
    earrings: false,
    beard: true
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
    earrings: false,
    beard: false
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess" id="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id="guessButton" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  }) 
  console.dir(generateBoard); //take away later
}

// Randomly select a person from CHARACTERS array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(`"Find out who the secret person is:"`, secret);  //TAKE AWAY secret later
  return secret // is this redundant?
} 

// Start (and restart) the game
  let start = () => {
    charactersInPlay = CHARACTERS
    document.getElementById('winOrLose').style.display = "none";
    document.getElementById('board').style.display = "flex"
    document.getElementById('showWinOrLose').style.display = "none"

// callback is invoked med 3 argument: the value of the element, the index of the element, and the array object being mapped.
    setSecret(); 

    let board = generateBoard(charactersInPlay);
    console.log("These are your cards, enjoy the game!")
    return board
  }

// setting the currentQuestion object when you select something in the dropdown 
function selectQuestion() {
  const category = questions.options[questions.selectedIndex].parentNode.label
  //--> This variable stores what option group (category) "".parentNode.label"  the question belongs to.


  //Variable that stores the actual value of the question we've selected.
  currentQuestion = {
    attribute: questions.options[questions.selectedIndex].value,
    category
  } 
  console.log('You chose:', currentQuestion, 'Now click on the Find Out button!')
}

// This function should be invoked when you click on 'Find Out'. TODO***
const checkQuestion = () => {
  selectQuestion() //Den startar på brown, vilket gör att en inte kan välja brown som val nummer 1. Därfar att 'change' inte triggas, därför behövs denna
  let attribute = currentQuestion.attribute //Gets the currentQuestion value
  let category = questions.options[questions.selectedIndex].parentNode.label //SPARA: gets the tag <optgroup label> - obs! Detta är en dublett av 293 men med LET
  let question
  //det är någonting med det här!!!! 
  //hur ska jag veta vad secrets attribut är? 
  //rätt värde i secret
  //question borde heta mer guess eller något liknande?
  if (category === 'hair color') { 
    question = {
        category: 'hairColor',
        attribute
    } 
    category = 'hairColor'
  } else if (category === 'eye color') { 
    question = {
      category: 'eyeColor',
      attribute 
    }
    category = 'eyeColor'
  } else if (category === 'accessories') {
      if ('glasses' === attribute) {
        question = {
          category: 'glasses',
          attribute: true
        }
      }
      else if ('hat' === attribute) {
        question = {
          category: 'hat',
          attribute: true
        }
      } else if ('earrings' === attribute) {
        question = {
          category: 'earrings',
          attribute: true
      }
    }
  } else if (category === 'other') {
      if ('smoker' === attribute) {
      question = {
        category: 'smoker',
        attribute: true
      } 
    } else if ('beard' === attribute) {
      question = {
        category: 'beard',
        attribute: true
      } 
    }
  }
    console.log(question);
    currentQuestion = question //assigns global variable currentQuestion = question som också är en global variabel där uppe*

  //I want to do a variable/function that stores the secret value from start perhaps it should not be nested inside of this function

  /*
  const secretValue = () => { //const or let?
  //This is something that can be used for the end. IF a user guesses correct on both boolean and string values??
  let match = secret[question.currentType]
  let matchTwo = secret[question.currentType] === currentValue

/*
   if (matchTwo ) { //is this correct? 
    return true 
    } else if (match ) {
      return true
    }
*/ /*
  }
*/
//secretValue(); 

//dessa två i en if else statement?? Run den ena om user chose '' value, och run den andra om user chose a Boolean value. HOW WOULD I WRITE THAT? 
const keep = secret[question.category] === question.attribute 
console.log('sdfsd', secret[question.category], secret) //ta bort denna console.log eller beskriv vad den gör så att jag ser det???********
console.log('You are one step closer to finding out who the secret person is!', keep)

// Om den hemliga personen är samma som nuv. kategori och är densamma som nuv. valt värde filtrera Sant, else filtrera Falskt. 
    if (keep === true) {
      console.log('You matched')
      filterCharacters(keep, question.category, question.attribute)
    } else {
      console.log('You guess is not right this time, please try again!') 
      filterCharacters(keep, question.category, question.attribute) //pass by value
    }
  }

  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters 

const filterCharacters = (keep, group, attribute) => { //question.category is now group, and question.attribute i now attribute
  console.log(keep, group, attribute);
  if (keep != true) { 
    let charactersFiltered = charactersInPlay.filter(name => {
      if (name[group] === attribute) { 
        return false
      } else {
        return true
      }
    });
    charactersInPlay = charactersFiltered
  }

  if (group === 'glasses') {
    if (keep) {
      alert(
        `Yes, the person wears ${questions.options[questions.selectedIndex].value}! Keep all that wears ${group}`//they have also written attribute here
      )
    } else {
      alert(
        `No, the person doesn't wear ${questions.options[questions.selectedIndex].value}! Remove all that wears ${group}`
      )
    }
  } else if (group === 'hat') {
      if (keep) {
      alert(
        `Yes, the person wears ${questions.options[questions.selectedIndex].value}! Keep all that wears ${group}`//they have also written attribute here
      )
    } else {
      alert(
        `No, the person doesn't wear ${questions.options[questions.selectedIndex].value}! Remove all that wears ${group}`
      )
    } 
  } else if (group === 'smoker') {
      if (keep) {
      alert(
        `Yes, the person is a ${questions.options[questions.selectedIndex].value}! Keep all ${group}`
      )
    } else {
    alert(
      `No, the person is not a ${questions.options[questions.selectedIndex].value}! Remove all ${group}`
      )
    } 
  }
  else if (group === 'hairColor') {
    if (keep) { 
      alert(
        `Yes, the person has ${questions.options[questions.selectedIndex].value} hair! Keep all persons with ${attribute} hair`
      )
    } else {
      alert(
        `No, the person doesn't have ${questions.options[questions.selectedIndex].value} hair! Remove all persons with ${attribute} hair`
      )
    }
  } 
  else if (group === 'eyeColor') {
    if (keep) { 
      alert(
        `Yes, the person has eyecolor ${questions.options[questions.selectedIndex].value}! Keep all persons with eyecolor ${attribute}`
      )
    } else {
      alert(
        `No, the person doesn't have eyecolor ${questions.options[questions.selectedIndex].value}! Remove all persons with eyecolor ${attribute} `
      )
    } 
  } 
  else if (group === 'earrings' || group === 'beard') {
    if (keep) { 
      alert(
        `Yes, the person wears ${questions.options[questions.selectedIndex].value}! Keep all persons with ${group}`
        )
    } else {
      alert(
        `No, the person doesn't wear ${questions.options[questions.selectedIndex].value}! Remove all persons with ${group} `
      )
    } 
  } 
  generateBoard(); 
}

  // filter to keep or remove based on the keep variable.


  /* charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    or 
    charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value) 
  */

  // Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess. confirm() window method
const guess = (suspect) => {
  if (confirm('Are you sure you want to guess?')) {
    console.log('User want to make a guess!');
    checkMyGuess(suspect)
  } else {
    console.log('The game continues!');
  }
}

// store the interaction from the player in a variable. * What would that do? *
//userGuess = guess

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => { //name kan nås globalt, secret också. suspect är i det här fallet endast ett namn. 
  console.log(suspect);
  if (secret.name === suspect) {
    let showWinner = () => { 
      document.getElementById('winOrLose').style.display = "block";
      document.getElementById('showWinOrLose').style.display = "block"
      winOrLoseText.innerHTML = `Congrats! You won the game!`;
    } 
    showWinner()
    console.log('you won')
    console.dir(showWinner) //take away later
  } else {
      let showLoser = () => {
        document.getElementById('winOrLose').style.display = "block";
        document.getElementById('showWinOrLose').style.display = "block"
        winOrLoseText.innerHTML = `Sorry, that was a wrong guess! You lost!`;
      } 
      showLoser()
      console.log('you lost')
      console.dir(showLoser) //take away later
    }
    document.getElementById('board').style.display = "none"; //hides board
}
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

start()

//Event listeners
playAgainButton.addEventListener('click', start)
restartButton.addEventListener('click', start)
filledButton.addEventListener('click', checkQuestion)
//questions.addEventListener('change', selectQuestion) //is not used. 