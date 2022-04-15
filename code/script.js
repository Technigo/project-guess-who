// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLosePage = document.getElementById('winOrLose')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Descartes',
    fullname: 'René Descartes',
    img: 'images/descartes.jpg',
    era: '17th',
    school: 'rationalism',
    interests: ['mathematics', 'physics'],
    other: []
  },
  {
    name: 'Voltaire',
    fullname: 'Voltaire',
    img: 'images/voltaire.jpg',
    era: '18th',
    school: 'classical liberalism',
    interests: ['political philosophy', 'literature'],
    other: []
  },
  {
    name: 'Montesquieu',
    fullname: 'Montesquieu',
    img: 'images/montesquieu.jpg',
    era: '18th',
    school: 'classical liberalism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Diderot',
    fullname: 'Denis Diderot',
    img: 'images/diderot.png',
    era: '18th',
    school: 'epicureanism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Rousseau',
    fullname: 'Jean-Jacques Rousseau',
    img: 'images/rousseau.jpg',
    era: '18th',
    school: 'romanticism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Proudhon',
    fullname: 'Pierre-Joseph Proudhon',
    img: 'images/proudhon.jpg',
    era: '19th',
    school: 'socialism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Tocqueville',
    fullname: 'Alexis de Tocqueville',
    img: 'images/tocqueville.jpg',
    era: '19th',
    school: 'liberalism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Comte',
    fullname: 'Auguste Comte',
    img: 'images/comte.jpg',
    era: '19th',
    school: 'positivism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Fourier',
    fullname: 'Charles Fourier',
    img: 'images/fourier.jpg',
    era: '20th',
    school: 'socialism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Sartre',
    fullname: 'Jean-Paul Sartre',
    img: 'images/sartre.jpg',
    era: '20th',
    school: 'existentialism',
    interests: ['political philosophy', 'literature', 'ethics'],
    other: []
  },
  {
    name: 'Camus',
    fullname: 'Albert Camus',
    img: 'images/camus.jpg',
    era: '20th',
    school: 'existentialism',
    interests: ['political philosophy', 'literature'],
    other: []
  },
  {
    name: 'De Beauvoir',
    fullname: 'Simone De Beauvoir',
    img: 'images/beauvoir.jpg',
    era: '20th',
    school: 'feminism',
    interests: ['political philosophy', 'ethics'],
    other: []
  },
  {
    name: 'Deleuze',
    fullname: 'Gilles Deleuze',
    img: 'images/deleuze.jpg',
    era: '20th',
    school: 'post-structuralism',
    interests: ['semiotics', 'metaphysics', 'literary theory'],
    other: []
  },
  {
    name: 'Lyotard',
    fullname: 'Jean-François Lyotard',
    img: 'images/lyotard.jpg',
    era: '20th',
    school: 'postmodernism',
    interests: ['semiotics', 'sociology'],
    other: []
  },
  {
    name: 'Foucault',
    fullname: 'Michel Foucault',
    img: 'images/foucault.jpg',
    era: '20th',
    school: 'postmodernism',
    interests: ['ethics', 'political philosophy'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion = {
  category: 'era',
  value: ''
}
let charactersInPlay
let count = 0

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <img src=${person.img} alt=${person.name}>
        <p>${person.name}</p>
        <div class="guess">
          <span>Guess on ${person.fullname}?</span>
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

//introduction page

const intro = () => {
  board.innerHTML = `
  <div class="intro">
    <p class="welcome-text"> Welcome to Guess Who game: French philosophers edition!<p>
    <p class="description"> You have 5 chances to ask questions and filter out philosophers based on their eras, schools and main interests.
     Click "play" to start the game and  bonne chance! </p>

    <button onclick="start()" class="outlined-button filled-button"> Play </button>
    </div>
  `
  count = 5
  document.getElementById('count').innerHTML = `${count}`
  findOutButton.disabled = true
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
  findOutButton.disabled = false
}

console.log(count)

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value
  currentQuestion = {
    category: category,
    value: value
  }
}


const checkQuestion = () => {
  count -= 1
  document.getElementById('count').innerHTML = `${count}`
  const { category, value } = currentQuestion
  if (count === -1) {
    findOutButton.disabled = true
    document.getElementById('count').innerHTML = `No questions left. Time to make a guess! Bonne chance!`
  }
  else if (category === "era" || category === "school") {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === "interests" || category === "other") {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (category === 'interests') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Correct! Keep all philosophers who are interested in ${value}`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `${value} sounds interesting but that's not one of the philosopher's top interests. Remove all philosophers whose main interest is not ${value}`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      alert(
        `Yes, the person is a ${value}! Keep all people who are a ${value}`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `No, the person is not a ${value}! Remove all people who are not a ${value}`
      )
    }
  } else if (category === 'era') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Yes, you're on the right track! Keep all philosophers who are from the ${value} century`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, sorry! Remove all philosophers who are not from the ${value} century`
      )
    }
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Yes you're on the right track! Keep all philosophers in this category.`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, sorry! Remove all philosophers in this category`
      )
    }
  }
  generateBoard()
}
// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  if (confirm('Are you sure you want to guess this person?')) {
    checkMyGuess(personToConfirm)
  } else {
    generateBoard()
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (secret.name === personToCheck) {
    alert(`Bravo! The right philosopher is ${secret.fullname}!`)
    board.innerHTML = ` 
      <p class="result-text"> Félicitations! </p>
      <button onclick="intro()" class="outlined-button filled-button"> Play again </button>
      `

  } else {
    alert(`Today is just not your day! The right philsopher is ${secret.fullname}!`)
    board.innerHTML = `
      <p class="result-text"> Come back and try again next time!</p>
      <button onclick="intro()" class="outlined-button filled-button"> Play again</button>
      `
  }
}

// Invokes the intro page
intro()


// All the event listeners
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
