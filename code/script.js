const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLosePage = document.getElementById('winOrLose')

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

let secret, currentQuestion, charactersInPlay

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

const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

const start = () => {
  charactersInPlay = CHARACTERS
  setSecret();
  generateBoard();
  winOrLosePage.classList.toggle("hidden");
}

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const selectedElementValue = questions.options[questions.selectedIndex].value;
  const selectedElementInnerText = questions.options[questions.selectedIndex].innerText;

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: selectedElementValue,
      innerText: selectedElementInnerText,
      category: category,
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: 'eyeColor',
      value: selectedElementValue,
      innerText: selectedElementInnerText,
      category: category,
    }

  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: selectedElementValue,
      innerText: selectedElementInnerText,
      value: true,
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: selectedElementValue,
      innerText: selectedElementInnerText,
      value: true,
      category: category,
    }
  }
}

const checkQuestion = () => {
  const secretValue = secret[currentQuestion.attribute];
  if (secretValue === currentQuestion.value) {
    filterCharacters(true, currentQuestion);
    } else {
    filterCharacters(false, currentQuestion);
  }
}

const filterCharacters = (keep, { attribute, innerText, value, category }) => {
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${innerText}! Keeping all that wears ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the person doesn't wear ${innerText}! Removing all that wears ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person has a ${innerText}! Keeping all that has a ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the person doesn't have a ${innerText}! Removing all that has a ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${innerText}! Keeping all that has ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
      alert(
        `No, the person doesn't have ${innerText}! Removing all that has ${innerText}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }
  }
  generateBoard();
}

const guess = (suspect) => {
  const userGuess = confirm(`Are you sure you want to guess ${suspect}`);
  if (userGuess) {
    checkMyGuess(suspect);
  }
};

const checkMyGuess = (suspect) => {
    if (suspect === secret.name) {
      winOrLoseText.innerText = "WOOP WOOP, that is correct!"
      let winOrLose = document.getElementById("winOrLose")   
      winOrLose.style.display = "block" 
    } else {
      winOrLoseText.innerText = "NOOOOO, that's wrong!"
      let winOrLose = document.getElementById("winOrLose")   
      winOrLose.style.display = "block" 
    }
    
    const playAgain = document.getElementById("playAgain")
      playAgain.addEventListener("click", () => {
      winOrLose.style.display = "none"
      start();
    });
}

start();

restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
filterBtn.addEventListener('click', checkQuestion);
