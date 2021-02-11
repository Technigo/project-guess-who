// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
//const guessButton = document.getElementById('guessBtn')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay

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
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret()
  console.log(secret);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const optionValue = questions.value;


  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: optionValue,
      // 👆 add the value from the input here
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
    attribute: 'eyeColor',
    value: optionValue,
    // 👆 add the value from the input here
    category: category,
    // Set this up your self
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: optionValue,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for example, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
      attribute: optionValue,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for example, so always true in the question.
      category: category,
  }
}
  console.log(currentQuestion);
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  const secretValue = secret[currentQuestion.attribute];
  if (secretValue === currentQuestion.value) {
      console.log('checkQuestion function works');
      filterCharacters(true);
  } else {
      console.log(`not included`)
      filterCharacters(false);
  }
  // Compare the currentQuestion (object) with the secret person (object). Is there a match between the question selected(category) and what property value the secret has is respective category? In that case filter. 
  // See if we should keep or remove people based on that (true or false)
  // Then invoke filterCharacters. 
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  // Show the correct alert message for different categories
  const group = currentQuestion.category;
  let attribute = currentQuestion.value;  //kan denna också vara const?
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
      `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
  } else if (group === 'other') { //smokers
      if (keep) {
        alert(
          `Yes, the person is a ${currentQuestion.attribute}! Keep all that are ${currentQuestion.attribute}s`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person is not a ${currentQuestion.attribute}! Remove all that are ${currentQuestion.attribute}s`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }
  } else if (group === 'hair color') {
    if (keep) {
      alert(
        `Yes the person has ${attribute} hair! Keep all that have ${attribute} hair!`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `No, the person does not have ${attribute} hair! Remove all that have ${attribute} hair`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
    
    } else if (group === 'eye color') {
      if (keep) {
        alert (
          `Yes the person has ${attribute} eyes! Keep all that have ${attribute} eyes!`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person does not have ${attribute} eyes! Remove all that have ${attribute} eyes`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }
    
    }
    generateBoard ()
}

  // filter to keep or remove based on the keep variable. //use generate board
  //const redrawBoard = (keep) => {
     // if (keep) {
    //  charactersInPlay = charactersInPlay.filter((person) => {(person[currentQuestion.attribute] === currentQuestion.value)
     // console.log("hej")
   // } else {
      //charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
   //   console.log("hej")
 // }
//}
  // Invoke a function to redraw the board with the remaining people. 
  //Use for each??
  //vad ska stoppas in i denna funktionen? särskilj på Key & value och vad är det jag vill titta på?


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  prompt(
    `Are you sure you want to guess on ${suspect}?`, `YES`
  )
  // store the interaction from the player in a variable.
  // remember the confirm() ?  // confirm () is a general function -> googla!
  // If the player wants to guess, invoke the checkMyGuess function.
  console.log ('you pressed the guessBtn');
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // is suspect === secret.name 
  //jämför de två objecten för att se om de är likadana
  //tex just compare if the names are identical? gives true or false
  // 1. Check if the suspect is the same as the secret person's name see line 242. Endast charachter name som skickas med
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  // finns redan en H1 section för detta längst.
}

// Invokes the start function when website is loaded
start()
// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterBtn.addEventListener('click', checkQuestion)
//guessButton.addEventListener('click', guess)
