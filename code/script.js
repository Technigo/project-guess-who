// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter')
const guessButton = document.querySelector('.filled-button')
const winOrLose = document.querySelector('.win-or-lose-wrapper')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')
const correct = document.querySelector('.customAlertCorrect')
const incorrect = document.querySelector('.customAlertIncorrect')
const areYouSure = document.querySelector('.customConfirm')
const correctText = document.getElementById('correctText')
const incorrectText = document.getElementById('incorrectText')
const confirmText = document.getElementById('confirmText')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Octavian",
    animal: "octopus",
    gender: "boy",
    personality: "cranky",
    hobby: "play",
    zodiac: "Virgo",
    img: "images/octavian.png"
  },
  {
    name: "Marcel",
    animal: "dog",
    gender: "boy",
    personality: "lazy",
    hobby: "play",
    zodiac: "Capricorn",
    img: "images/marcel.png"
  },
  {
    name: "Bam",
    animal: "deer",
    gender: "boy",
    personality: "jock",
    hobby: "play",
    zodiac: "Scorpio",
    img: "images/bam.png"
  },
  {
    name: "Kiki",
    animal: "cat",
    gender: "girl",
    personality: "normal",
    hobby: "education",
    zodiac: "Libra",
    img: "images/kiki.png"
  },
  {
    name: "Shino",
    animal: "deer",
    gender: "girl",
    personality: "peppy",
    hobby: "education",
    zodiac: "Scorpio",
    img: "images/shino.png"
  },
  {
    name: "Olaf",
    animal: "anteater",
    gender: "boy",
    personality: "smug",
    hobby: "education",
    zodiac: "Taurus",
    img: "images/olaf.png"
  },
  {
    name: "Lobo",
    animal: "wolf",
    gender: "boy",
    personality: "cranky",
    hobby: "education",
    zodiac: "Scorpio",
    img: "images/lobo.png"
  },
  {
    name: "Coco",
    animal: "rabbit",
    gender: "girl",
    personality: "normal",
    hobby: "education",
    zodiac: "Pisces",
    img: "images/coco.png"
  },
  {
    name: "Tiffany",
    animal: "rabbit",
    gender: "girl",
    personality: "snooty",
    hobby: "fashion",
    zodiac: "Capricorn",
    img: "images/tiffany.png"
  },
  {
    name: "Sasha",
    animal: "rabbit",
    gender: "boy",
    personality: "lazy",
    hobby: "fashion",
    zodiac: "Taurus",
    img: "images/sasha.png"
  },
  {
    name: "Carmen",
    animal: "rabbit",
    gender: "girl",
    personality: "peppy",
    hobby: "fashion",
    zodiac: "Capricorn",
    img: "images/carmen.png"
  },
  {
    name: "Truffles",
    animal: "pig",
    gender: "girl",
    personality: "peppy",
    hobby: "fashion",
    zodiac: "Leo",
    img: "images/truffles.png"
  },
  {
    name: "Kyle",
    animal: "wolf",
    gender: "boy",
    personality: "smug",
    hobby: "music",
    zodiac: "Sagittarius",
    img: "images/kyle.png"
  },
  {
    name: "Pancetti",
    animal: "pig",
    gender: "girl",
    personality: "snooty",
    hobby: "music",
    zodiac: "Scorpio",
    img: "images/pancetti.png"
  },
  {
    name: "Pietro",
    animal: "sheep",
    gender: "boy",
    personality: "smug",
    hobby: "music",
    zodiac: "Aries",
    img: "images/pietro.png"
  },
  {
    name: "Camofrog",
    animal: "frog",
    gender: "boy",
    personality: "cranky",
    hobby: "music",
    zodiac: "Gemini",
    img: "images/camofrog.png"
  },
  {
    name: "Marina",
    animal: "octopus",
    gender: "girl",
    personality: "normal",
    hobby: "music",
    zodiac: "Cancer",
    img: "images/marina.png"
  },
  {
    name: "Muffy",
    animal: "sheep",
    gender: "girl",
    personality: "sisterly",
    hobby: "music",
    zodiac: "Aquarius",
    img: "images/muffy.png"
  },
  {
    name: "Cherry",
    animal: "dog",
    gender: "girl",
    personality: "sisterly",
    hobby: "music",
    zodiac: "Taurus",
    img: "images/cherry.png"
  },
  {
    name: "Diva",
    animal: "frog",
    gender: "girl",
    personality: "sisterly",
    hobby: "fitness",
    zodiac: "Libra",
    img: "images/diva.png"
  },
  {
    name: "Stinky",
    animal: "cat",
    gender: "boy",
    personality: "jock",
    hobby: "fitness",
    zodiac: "Leo",
    img: "images/stinky.png"
  },
  {
    name: "Antonio",
    animal: "anteater",
    gender: "boy",
    personality: "jock",
    hobby: "fitness",
    zodiac: "Libra",
    img: "images/antonio.png"
  },
  {
    name: "Zucker",
    animal: "octopus",
    gender: "boy",
    personality: "lazy",
    hobby: "nature",
    zodiac: "Pisces",
    img: "images/zucker.png"
  },
  {
    name: "Annalisa",
    animal: "anteater",
    gender: "girl",
    personality: "normal",
    hobby: "nature",
    zodiac: "Aquarius",
    img: "images/annalisa.png"
  },
  {
    name: "Ankha",
    animal: "cat",
    gender: "girl",
    personality: "snooty",
    hobby: "nature",
    zodiac: "Virgo",
    img: "images/ankha.png"
  }
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let finalGuess

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img class="villager-image" src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Custom Alert Correct
const alertCorrect = (message) => {
  correct.style.display = "grid";
  correctText.innerText = message;
  document.getElementById('correctButton').addEventListener('click', () => {
    correct.style.display = "none";
  })
}

// Custom Alert Incorrect
const alertIncorrect = (message) => {
  incorrect.style.display = "grid";
  incorrectText.innerText = message;
  document.getElementById('incorrectButton').addEventListener('click', () => {
    incorrect.style.display = "none";
  })
}

// Custom Confirm
const customConfirm = (message, personToConfirm) => {
  areYouSure.style.display = "grid";
  confirmText.innerText = message;
  document.getElementById('cancelButton').addEventListener('click', () => {
    areYouSure.style.display = "none";
  })
  document.getElementById('confirmButton').addEventListener('click', () => {
    areYouSure.style.display = "none";
    checkMyGuess(personToConfirm);
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
  generateBoard();
  setSecret();
  // console.log(secret);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
findOut.addEventListener('click', () => {
  selectQuestion();
  // console.log(currentQuestion);
  // console.log(secret.animal);
  checkQuestion();
})

// Check if answer is correct, then pass it to filterCharacters
const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (category === 'animal') {
    if (value === secret.animal) {
      let keep = true;
      filterCharacters(keep);
    } else {
      keep = false;
      filterCharacters();
    }
  } else if (category === 'personality') {
    if (value === secret.personality) {
      keep = true;
      filterCharacters(keep);
    } else {
      keep = false;
      filterCharacters();
    }
  } else if (category === 'hobby') {
    if (value === secret.hobby) {
      keep = true;
      filterCharacters(keep);
    } else {
      keep = false
      filterCharacters();
    }
  } else if (category === 'zodiac') {
    if (value === secret.zodiac) {
      keep = true;
      filterCharacters(keep);
    } else {
      keep = false;
      filterCharacters();
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'animal') {
    if (keep) {
      alertCorrect(
        `Yes, the villager is a ${value} 👏! Keep all the ${value} villagers.`
      )
    } else {
      alertIncorrect(
        `No, the villager is not a ${value} 👎! Remove all ${value} villagers.`
      )
    }
  } else if (category === 'personality') {
    if (keep) {
      alertCorrect(
        `Yes, the villager is ${value} type 👏! Keep all the ${value} type villagers.`
      )
    } else {
      alertIncorrect(
        `No, the villager is not ${value} type 👎! Remove all the ${value} type villagers.`
      )
    }
  } else if (category === 'hobby') {
    if (keep) {
      alertCorrect(
        `Yes, the villager likes ${value} 👏! Keep all the villagers that like ${value}`
      )
    } else {
      alertIncorrect(
        `No, the villager hates ${value} 👎! Remove all the villagers that like ${value}!`
      )
    }
  } else if (category === 'zodiac') {
    if (keep) {
      alertCorrect(
        `Yes, the villager is a ${value} 👏! Keep all the villagers that are ${value}.`
      )
    } else {
      alertIncorrect(
        `No, the villager obviously isn't a ${value} 👎! Remove all the villagers that are ${value}.`
      )
    }
  }

  // console.log(currentQuestion.category);
  // console.log(keep);
  // console.log(value);

  if (keep === true) {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] === value)
    // console.log(charactersInPlay);
    generateBoard();
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.category] !== value)
    // console.log("answer wrong");
    // console.log(charactersInPlay);
    generateBoard();
  }
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  customConfirm(`Are you sure you want to guess ${personToConfirm}?`, personToConfirm);
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    alertCorrect(`Congratulations! 🎉 ${secret.name} was the right villager. 🥳`);
    setTimeout(() => {
    winOrLose.style.display = "flex";
    winOrLoseText.innerText = "Yay!!! You won!"
  }, 3000)
  } else {
    alertIncorrect(`I'm sorry. ${personToCheck} was incorrect 😓. ${secret.name} was the right villager.`);
    setTimeout(() => {
    winOrLose.style.display = "flex";
    winOrLoseText.innerText = "Boo-hoo! You lost!!!"
  }, 3000)
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
playAgain.addEventListener('click', () => {
  start();
  winOrLose.style.display = "none";
})

restartButton.addEventListener('click', () => {
  start();
  winOrLose.style.display = "none";
})

// Media Query JavaScript for Custom Alert

// if (window.matchMedia("max-width: 768px")) {
//   const height = document.querySelector('body').scrollHeight;
//   console.log(height);
//   let confirmTopMargin = (height / 2);
//   console.log(confirmTopMargin);
//   areYouSure.style.position = "absolute";
//   areYouSure.style.marginTop = confirmTopMargin;
// }