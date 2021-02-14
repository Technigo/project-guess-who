// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const countQuestion = document.getElementById('countQuestion')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    clothing: 'single',
    glasses: true,
    headCover: true,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    clothing: 'multi',
    glasses: false,
    headCover: true,
    smoker: false,
    facialHair: true,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    clothing: 'multi',
    glasses: false,
    headCover: true,
    smoker: true,
    facialHair: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    clothing: 'multi',
    glasses: false,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    clothing: 'multi',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    clothing: 'single',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: true,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    clothing: 'single',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    clothing: 'multi',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    clothing: 'single',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    clothing: 'single',
    glasses: true,
    headCover: false,
    smoker: true,
    facialHair: false,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    clothing: 'multi',
    glasses: true,
    headCover: true,
    smoker: true,
    facialHair: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    clothing: 'single',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    clothing: 'multi',
    glasses: true,
    headCover: true,
    smoker: true,
    facialHair: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    clothing: 'single',
    glasses: false,
    headCover: true,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    clothing: 'multi',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    clothing: 'multi',
    glasses: false,
    headCover: true,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    clothing: 'single',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    clothing: 'multi',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    clothing: 'single',
    glasses: true,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    clothing: 'single',
    glasses: true,
    headCover: true,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    clothing: 'single',
    glasses: false,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    clothing: 'multi',
    glasses: false,
    headCover: false,
    smoker: false,
    facialHair: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    clothing: 'multi',
    glasses: false,
    headCover: false,
    smoker: false,
    facialHair: true,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    clothing: 'multi',
    glasses: true,
    headCover: true,
    smoker: false,
    facialHair: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay, keep, count = 0

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
  //console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard();
  setSecret();
  board.style.display = "flex";
  winOrLose.style.display = "none";

}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const optionValue = questions.options[questions.selectedIndex].value

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: optionValue,
      category: category
    }
  } else if (category === 'eye color') {
      currentQuestion = {
        attribute: 'eyeColor',
        value: optionValue,
        category: category
      }
  } else if (category === 'facial hair') {
    currentQuestion = {
      attribute: 'facialHair',
      value: true,
      category: category
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: optionValue,
      value: true,
      category: category
    }
  } else if (category === 'head covering') {
    currentQuestion = {
      attribute: 'headCover',
      value: true,
      category: category
    }
  } else if (category === 'clothing') {
    currentQuestion = {
      attribute: 'clothing',
      value: optionValue,
      category: category
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: 'smoker',
      value: true,
      category: category
    }
  }
  return currentQuestion
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  selectQuestion()
  if (currentQuestion["value"] === secret[currentQuestion["attribute"]]) {
    keep = true;
  } else {
    keep = false;
  }


  filterCharacters(keep)
  count += 1;
  console.log(count)
  countQuestion.innerHTML = `${count}`
}

// This will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  if (currentQuestion.category === 'accessories') {
    if (keep === true) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}!`
        )
        charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}!`
      )
      charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
    }
  } else if (currentQuestion.category === 'other') {
      if (keep === true) {
        alert(
          `Yes, the person is a ${currentQuestion.attribute}!`
          )
          charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person isn't a ${currentQuestion.attribute}!`
        )
        charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }
    } else if (currentQuestion.category === 'facial hair') {
      if (keep === true) {
        alert(
          `Yes, the person has ${currentQuestion.category}!`
          )
          charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person doesn't have ${currentQuestion.category}!`
        )
        charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }
    } else if (currentQuestion.category === 'head covering') {
      if (keep === true) {
        alert(
          `Yes, the person has a ${currentQuestion.category}!`
          )
          charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person doesn't have a ${currentQuestion.category}!`
        )
        charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }
    } else if (currentQuestion.category === 'clothing') {
      if (keep === true) {
        alert(
          `Yes, the person has a ${currentQuestion.value} colored shirt!`
          )
          charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person doesn't have a ${currentQuestion.value} colored shirt!`
        )
        charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }  
    } else {
      if (keep === true) {
        alert(
          `Yes, the person has ${currentQuestion.value} ${currentQuestion.category}!`
        )
        charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value);
      } else {
        alert(
          `No, the person doesn't have ${currentQuestion.value} ${currentQuestion.category}!`
        )
        charactersInPlay= charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value);
      }
  }
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  let confirmation = confirm("Are you sure you want to make a guess?");
  if (confirmation === true) {
    checkMyGuess(suspect)
  }
};

const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
    winOrLoseText.innerHTML = "You won!!! Congrats!"
    winOrLose.style.display = "flex";
  } else {
    winOrLose.style.display = "flex";
    winOrLoseText.innerHTML = "Game over... Better luck next time."
  }

}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
filterButton.addEventListener('click',checkQuestion)
