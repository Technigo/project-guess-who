// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter') // ???
const playAgainButton = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Doris',
    img: 'images/doris.jpg',
    fur: ['grey', 'beige'],
    skin: 'white',
    claws: 'no',
    special: ['stripes', 'bicoloured']
  },
  {
    name: 'Simba',
    img: 'images/simba.jpg',
    fur: ['beige', 'brown'],
    skin: 'pink',
    claws: 'no',
    special: ['spots', 'bicoloured']
  },
  {
    name: 'Luna',
    img: 'images/luna.jpg',
    fur: 'beige',
    skin: 'pink',
    claws: 'no',
    special: ['fuzzy']
  },
  {
    name: 'Sigge',
    img: 'images/sigge.jpg',
    fur: ['white', 'blue'],
    skin: 'brown',
    claws: 'yes',
    special: ['fuzzy', 'bicoloured']
  },
  {
    name: 'Elsa',
    img: 'images/elsa.jpg',
    fur: ['yellow', 'brown'],
    skin: 'brown',
    claws: 'yes',
    special: ['spots', 'bicoloured']
  },
  {
    name: 'Bosse',
    img: 'images/bosse.jpg',
    fur: ['brown', 'orange'],
    skin: 'white',
    claws: 'no',
    special: ['stripes']
  },
  {
    name: 'Zelda',
    img: 'images/zelda.jpg',
    fur: ['orange', 'yellow'],
    skin: 'brown',
    claws: 'no',
    special: ['bicoloured']
  },
  {
    name: 'Morris',
    img: 'images/morris.jpg',
    fur: ['beige', 'white'],
    skin: 'brown',
    claws: 'no',
    special: ['bicoloured', 'fuzzy']
  },
  {
    name: 'Selma',
    img: 'images/selma.jpg',
    fur: ['orange', 'brown'],
    skin: 'pink',
    claws: 'yes',
    special: ['bicoloured']
  },

  {
    name: 'Sixten',
    img: 'images/sixten.jpg',
    fur: ['black', 'white'],
    skin: 'white',
    claws: 'no',
    special: ['bicoloured']
  },
  {
    name: 'Sally',
    img: 'images/sally.jpg',
    fur: ['yellow', 'beige'],
    skin: 'brown',
    claws: 'no',
    special: ['stripes', 'bicoloured']
  },
  {
    name: 'Findus',
    img: 'images/findus.jpg',
    fur: ['beige', 'white'],
    skin: 'pink',
    claws: 'yes',
    special: ['bicoloured']
  },
  {
    name: 'Smulan',
    img: 'images/smulan.jpg',
    fur: ['black', 'grey'],
    skin: 'pink',
    claws: 'no',
    special: ['bicoloured']
  },
  {
    name: 'Harry',
    img: 'images/harry.jpg',
    fur: ['white', 'brown', 'orange', 'beige'],
    skin: 'brown',
    claws: 'no',
    special: ['multicoloured']
  },
  {
    name: 'Maja',
    img: 'images/maja.jpg',
    fur: ['brown', 'beige'],
    skin: 'pink',
    claws: 'yes',
    special: ['bicoloured']
  },
  {
    name: 'Nisse',
    img: 'images/nisse.jpg',
    fur: ['black'],
    skin: 'grey',
    claws: 'no',
    special: []
  },
  {
    name: 'Nala',
    img: 'images/nala.jpg',
    fur: ['orange', 'white'],
    skin: 'beige',
    claws: 'yes',
    special: ['fuzzy']
  },
  {
    name: 'Frasse',
    img: 'images/frasse.jpg',
    fur: ['blue'],
    skin: 'pink',
    claws: 'yes',
    special: ['fuzzy']
  },
  {
    name: 'Siri',
    img: 'images/siri.jpg',
    fur: ['black', 'grey'],
    skin: 'black',
    claws: 'yes',
    special: ['bicoloured']
  },
  {
    name: 'Sune',
    img: 'images/sune.jpg',
    fur: ['orange', 'brown'],
    skin: 'black',
    claws: 'yes',
    special: ['spots', 'bicoloured']
  },
  {
    name: 'Iris',
    img: 'images/iris.jpg',
    fur: ['orange'],
    skin: 'orange',
    claws: 'no',
    special: ['stripes']
  },
  {
    name: 'Leo',
    img: 'images/leo.jpg',
    fur: ['grey'],
    skin: 'pink',
    claws: 'no',
    special: []
  },
  {
    name: 'Mollie',
    img: 'images/mollie.jpg',
    fur: ['brown'],
    skin: 'beige',
    claws: 'yes',
    special: []
  },
  {
    name: 'Tusse',
    img: 'images/tusse.jpg',
    fur: ['orange'],
    skin: 'brown',
    claws: 'yes',
    special: ['hairy']
  },
]
// Global variables
let secret
let currentQuestion
let charactersInPlay

// for counter
let counterDisplay = document.getElementById('counterDisplay')
let count = 0

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
  console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard()
  setSecret() // ???
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
  const value = questions.value // ???
  console.log('The selected category is', category, 'with this value:', value)


  currentQuestion = {
    category: category,
    value: value // ???
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  // for counter
  count++
  counterDisplay.innerHTML = count

  // Compare the currentQuestion details with the secret person details in a different manner based on category (skin/claws or fur/special).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'skin' || category === 'claws') {
    // juste 'égal' ou non
    if (value === secret.skin || value === secret.claws) {
      filterCharacters(true)
      console.log('skin/claws is right')
    } else {
      filterCharacters(false)
      console.log('skin/claws is wrong')
    }

  } else if (category === 'fur' || category === 'special') {
    // peut avoir plusieurs accessoires/autres en même temps (donc 'contient', pas 'égal à')
    if (secret.fur.includes(value) || secret.special.includes(value)) {
      filterCharacters(true)
      console.log('fur/special is right')
    } else {
      filterCharacters(false)
      console.log('fur/special is wrong')
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'fur') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'special') {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people with ${value}`
      )
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people with ${value}`
      )
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people with ${value}`
      )

    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people with ${value}`
      )

      // Swal.fire(`No, the person doesn't have ${value}! Remove all people with ${value}`)
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  if (category === 'skin' || category === 'claws') {
    if (value === secret.skin || value === secret.claws) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      generateBoard()
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      generateBoard()
    }
  } else if (category === 'fur' || category === 'special') {
    if (secret.fur.includes(value) || secret.special.includes(value)) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      generateBoard()
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      generateBoard()
    }
  }

  // if (secret.special.includes(value)) {
  //   charactersInPlay = charactersInPlay.filter((person) => person[special].includes(value))
  //   generateBoard()
  // } else {
  //   charactersInPlay = charactersInPlay.filter((person) => !person[special].includes(value))
  //   generateBoard()
  // }

  /* 
    for skin and claws :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for fur and special
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable. // qu'est-ce que ca veut dire????
  // remember the confirm() ?
  if (confirm(`Do you really want to make a guess on ${personToConfirm}?`) == true) {
    // If the player wants to guess, invoke the checkMyGuess function.
    checkMyGuess(personToConfirm) // à mettre dans le 'if confirm true' ou à la fin de la fonction?
  } else { // utile ou non?
    false
  }
  console.log(secret.name)
  console.log(personToConfirm)

}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  console.log(personToCheck)

  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    // 2. Set a Message to show in the win or lose section accordingly
    document.getElementById('winOrLoseText').innerText = 'You won!'
    // 3. Show the win or lose section
    document.getElementById('winOrLose').style.display = 'flex'
    // 4. Hide the game board
    board.style.display = 'none'
  } else {
    // 2. Set a Message to show in the win or lose section accordingly
    document.getElementById('winOrLoseText').innerText = 'You lost!'
    // 3. Show the win or lose section
    document.getElementById('winOrLose').style.display = 'flex'
    // 4. Hide the game board
    board.style.display = 'none'
  }
}

const playAgain = () => {
  start()
  document.getElementById('winOrLose').style.display = 'none'
  board.style.display = 'flex'
}

// Invokes the start function when website is loaded
start()

// CHARACTERS.forEach(({ name, skin, claws }) => {
//   console.log(name)
//   console.log(skin)
//   console.log(claws)
// })

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', playAgain)