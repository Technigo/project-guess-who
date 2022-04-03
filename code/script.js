// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const winOrLosePage = document.getElementById('winOrLose')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Descartes',
    img: 'images/descartes.jpg',
    era: '17th',
    school: 'rationalism',
    interests: ['mathematics', 'physics'],
    other: []
  },
  {
    name: 'Voltaire',
    img: 'images/voltaire.jpg',
    era: '18th',
    school: 'classical liberalism',
    interests: ['political philosophy', 'literature'],
    other: []
  },
  {
    name: 'Montesquieu',
    img: 'images/montesquieu.jpg',
    era: '18th',
    school: 'classical liberalism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Diderot',
    img: 'images/diderot.png',
    era: '18th',
    school: 'epicureanism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Rousseau',
    img: 'images/rousseau.jpg',
    era: '18th',
    school: 'romanticism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Proudhon',
    img: 'images/proudhon.jpg',
    era: '19th',
    school: 'socialism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Tocqueville',
    img: 'images/tocqueville.jpg',
    era: '19th',
    school: 'liberalism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Comte',
    img: 'images/comte.jpg',
    era: '19th',
    school: 'positivism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Fourier',
    img: 'images/fourier.jpg',
    era: '20th',
    school: 'socialism',
    interests: ['political philosophy'],
    other: []
  },
  {
    name: 'Sartre',
    img: 'images/sartre.jpg',
    era: '20th',
    school: 'existentialism',
    accessories: ['political philosophy', 'literature', 'ethics'],
    other: []
  },

  {
    name: 'Camus',
    img: 'images/camus.jpg',
    era: '20th',
    school: 'existentialism',
    interests: ['political philosophy', 'literature'],
    other: []
  },
  {
    name: 'De Beauvoir',
    img: 'images/beauvoir.jpg',
    era: '20th',
    school: 'feminism',
    interests: ['political philosophy', 'ethics'],
    other: []
  },
  {
    name: 'Deleuze',
    img: 'images/deleuze.jpg',
    era: '20th',
    school: 'post-structuralism',
    interests: ['semiotics', 'metaphysics', 'literary theory'],
    other: []
  },
  {
    name: 'Baudrillard',
    img: 'images/baudrillard.png',
    era: '20th',
    school: 'postmodernism',
    interests: ['semiotics'],
    other: ['smoker']
  },
  {
    name: 'Lyotard',
    img: 'images/lyotard.jpg',
    era: '20th',
    school: 'postmodernism',
    interests: ['semiotics', 'sociology'],
    other: []
  },
  {
    name: 'Lacan',
    img: 'images/lacan.jpg',
    era: '20th',
    school: 'psychoanalysis',
    interests: ['semiotics', 'literary theory'],
    other: []
  },
  {
    name: 'Foucault',
    img: 'images/foucault.jpg',
    era: '20th',
    school: 'postmodernism',
    interests: ['ethics', 'political philosophy'],
    other: []
  },
  {
    name: 'Derrida',
    img: 'images/derrida.png',
    era: '20th',
    school: 'deconstruction',
    interests: ['semiotics', 'deconstruction'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion = {
  category: 'era',
  value: '17th'
}
let charactersInPlay
let count = 0

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
    <div class="container">
    <p>${person.name}</p>
      <div class="card">
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
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
  <div>
    <h1> Welcome to Guess Who game: French philosophers edition!<h1>
    <p class="description"> Filter out philosophers based on their eras, schools and main interests.
      Have fun! </p>

    <button onclick="start()"> Play </button>
    </div>

  `
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  setSecret()
  generateBoard()
  count = 0
  document.getElementById('count').innerHTML = `${count}`
}


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
  count += 1
  document.getElementById('count').innerHTML = `${count}`
  const { category, value } = currentQuestion
  if (category === "era" || category === "school") {
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
        `Yes, one of my main interests is ${value}! Keep all philosophers who are interested in ${value}`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      alert(
        `${value} sounds interesting but that's not one of my top interests. Remove all philosophers whose main interest is not ${value}`
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
        `Yes, I'm from the ${value} century! Keep all philosophers who are from the ${value} century`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, I'm not from the ${value} century! Remove all philosophers who are not from the ${value} century`
      )
    }
  } else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      alert(
        `Yes, I'm best known as ${value}! Keep all philosophers in this category.`
      )
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      alert(
        `No, I'm not best known as ${value}! Remove all philosophers in this category`
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
    alert(`Yayyyyy the right person is ${secret.name}!`)
    board.innerHTML = ` 
      <div style="width:100%;height:0;padding-bottom:56%;margin-bottom:20px;position:relative;"><iframe src="https://giphy.com/embed/ToMjGpyO2OVfPLpoxu8" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/cartoonhangover-animated-artists-on-tumblr-illustration-ToMjGpyO2OVfPLpoxu8"></a></p>
      <button id="play-again">PLAY AGAIN</button>
      `
    document
      .getElementById('play-again')
      .addEventListener('click', () => {
        start()
      })



  } else {
    alert(`Oh noooooo!!! Today is just not your day! The right person is ${secret.name}!`)
    board.innerHTML = `
      <div style="width:100%;height:0;padding-bottom:75%;margin-bottom:20px;position:relative;"><iframe src="https://giphy.com/embed/3ofSB3aKv6CxUluyAw" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/spongebob-season-4-spongebob-squarepants-3ofSB3aKv6CxUluyAw"></a></p>
      <button id="play-again">PLAY AGAIN</button>
      `
    document
      .getElementById('play-again')
      .addEventListener('click', () => {
        start()
      })

  }
}

// Invokes the intro page
intro()


// All the event listeners
restartButton.addEventListener('click', intro)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
