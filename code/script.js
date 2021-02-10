// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const check = document.getElementById('filter')

// Array with all the characters, as objects
// KLART
const CHARACTERS = [{
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
let secret, currentQuestion, charactersInPlay, secretValue, keep //ska keep vara här?


// Draw the game board
// we're looking at the characters array and looping through that array,
//creating one 'card' for each person in that array. We're adding that as the innerHTML
//of the element with the id board
// KLART
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id='guess-who' onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
// KLART
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
// KLART
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  // variabeln charactersInPlay får värdet CHARACTERS som är arrayen med alla personer
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
  console.log(secret.name)
}

// setting the currentQuestion object when you select something in the dropdown
// ÄNDRA INTE NU - DEN FUNKAR
// HUR KOMMER DET SIG ATT 'SMOKER' BARA FUNKADE OM DEN LÅG FÖRST OCH INTE SIST?
const selectQuestion = (selected) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  if (category === 'other') {
    currentQuestion = {
      attribute: 'smoker',
      value: true,
      category: category,
    }
    console.log(currentQuestion)
  } else if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: selected,
      category: category,
    }
    console.log(currentQuestion)
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: selected,
      category: category,
    }
    console.log(currentQuestion)
  } else if (category === 'accessories') {
    if (selected === 'hat') {
      currentQuestion = {
        attribute: 'hat',
        value: true,
        category: category,
      }
      console.log(currentQuestion)
    } else if (selected === 'glasses') {
      currentQuestion = {
        attribute: 'glasses',
        value: true,
        category: category,
      }
      console.log(currentQuestion)
    }
  } 
}

    // This function should be invoked when you click on 'Find Out'.
    // Compare the currentQuestion with the secret person.
    // See if we should keep or remove people based on that
    // Then invoke filterCharacters

    // kommer den här funka??
    const checkQuestion = () => {
      
    const secretValue = secret[currentQuestion.attribute];
    if (secretValue === currentQuestion.value) {
      keep = true;
      console.log('true')
      filterCharacters(true, currentQuestion.attribute);
    } else {
      keep = false
      console.log('false')
      filterCharacters(false, currentQuestion.attribute);
    }
  }

    // It'll filter the characters array and redraw the game board.
    const filterCharacters = (keep, group) => {
      // Show the correct alert message for different categories
      if (group === 'glasses') {
        if (keep) {
          alert(
            `Yes, the person wears glasses! Keep all that wears glasses.`)
        } else {
            alert(
            `No, the person doesn't wear glasses! Remove all that wears glasses.`)
          }
      } else if (group === 'hat') {
        if (keep) {
          alert(
            `Yes, the person wears a hat! Keep all that wears a hat.`)
        } else {
            alert(
            `No, the person doesn't wear a hat! Remove all that wears a hat.`)
        }
      } else if (group === 'smoker') {
          if (keep) {
            alert(
              `Yes, the person is a smoker! Keep all that are smokers.`)
          } else {
              alert(
                `No, the person isn't a smoker! Remove all that are smokers.`)
          }
      } else if (group === 'hairColor') {
        if (keep) {
          alert(
            `Yes, the person has ${currentQuestion.value} hair! Keep all that have ${currentQuestion.value} hair.`)
        } else {
          alert(
            `No, the person doesn't have ${currentQuestion.value} hair! Remove all that have ${currentQuestion.value} hair.`)
        }
      } else if (group === 'eyeColor') {
        if (keep) {
          alert(
            `Yes, the person has ${currentQuestion.value} eyes! Keep all that have ${currentQuestion.value} eyes.`)
        } else {
          alert(
            `No, the person doesn't have ${currentQuestion.value} eyes! Remove all that have ${currentQuestion.value} eyes.`)
        }
      }
       // generateBoard()
      }
  
  

// filter to keep or remove based on the keep variable.
/* charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
  or 
  charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value) */

// Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)

//lagt till eventListener till questions som är sektionen i HTML med alla frågor
//tar med sig värdet som man väljer så när man sätter -ngt- som parameter i selectQuestions-
//funktionen och sedan använder den parametern som value så hamnar värdet där
//DEN HÄR FUNKAR
questions.addEventListener('change', () => {
  selectQuestion(questions.value)
})

check.addEventListener('click', () => {
  checkQuestion(currentQuestion)
})