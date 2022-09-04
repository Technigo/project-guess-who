
  // All the DOM selectors stored as short variables
  const board = document.getElementById('board')
  const questions = document.getElementById('questions')
  const restartButton = document.getElementById('restart')
  const findOutButton = document.getElementById('filter')
  const winOrLose = document.getElementById('winOrLose')
  const playAgainButton = document.getElementById('playAgain')
  const winOrLoseText = document.getElementById('winOrLoseText')

  // Array with all the characters, as objects
  const CHARACTERS = [
    {
      name: 'Jabala',
      img: 'images/jabala.svg',
      hair: 'hidden',
      eyes: 'hidden',
      accessories: ['glasses', 'hat'],
      other: []
    },
    {
      name: 'Jack',
      img: 'images/jack.svg',
      hair: 'hidden',
      eyes: 'blue',
      accessories: ['hat'],
      other: []
    },
    {
      name: 'Jacques',
      img: 'images/jacques.svg',
      hair: 'grey',
      eyes: 'blue',
      accessories: ['hat'],
      other: ['smoker']
    },
    {
      name: 'Jai',
      img: 'images/jai.svg',
      hair: 'black',
      eyes: 'brown',
      accessories: [],
      other: []
    },
    {
      name: 'Jake',
      img: 'images/jake.svg',
      hair: 'yellow',
      eyes: 'green',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'James',
      img: 'images/james.svg',
      hair: 'brown',
      eyes: 'green',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'Jana',
      img: 'images/jana.svg',
      hair: 'black',
      eyes: 'hidden',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'Jane',
      img: 'images/jane.svg',
      hair: 'yellow',
      eyes: 'hidden',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'Jaqueline',
      img: 'images/jaqueline.svg',
      hair: 'orange',
      eyes: 'green',
      accessories: ['glasses'],
      other: []
    },

    {
      name: 'Jazebelle',
      img: 'images/jazebelle.svg',
      hair: 'purple',
      eyes: 'hidden',
      accessories: ['glasses'],
      other: ['smoker']
    },
    {
      name: 'Jean',
      img: 'images/jean.svg',
      hair: 'brown',
      eyes: 'blue',
      accessories: ['glasses', 'hat'],
      other: ['smoker']
    },
    {
      name: 'Jeane',
      img: 'images/jeane.svg',
      hair: 'brown',
      eyes: 'green',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'Jed',
      img: 'images/jed.svg',
      hair: 'orange',
      eyes: 'green',
      accessories: ['glasses', 'hat'],
      other: ['smoker']
    },
    {
      name: 'Jenni',
      img: 'images/jenni.svg',
      hair: 'white',
      eyes: 'hidden',
      accessories: ['hat'],
      other: []
    },
    {
      name: 'Jeri',
      img: 'images/jeri.svg',
      hair: 'orange',
      eyes: 'green',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'Jerry',
      img: 'images/jerry.svg',
      hair: 'hidden',
      eyes: 'blue',
      accessories: ['hat'],
      other: []
    },
    {
      name: 'Jess',
      img: 'images/jess.svg',
      hair: 'black',
      eyes: 'blue',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'Jocelyn',
      img: 'images/jocelyn.svg',
      hair: 'black',
      eyes: 'brown',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'Jon',
      img: 'images/jon.svg',
      hair: 'brown',
      eyes: 'green',
      accessories: ['glasses'],
      other: []
    },
    {
      name: 'Jordan',
      img: 'images/jordan.svg',
      hair: 'yellow',
      eyes: 'hidden',
      accessories: ['glasses', 'hat'],
      other: []
    },
    {
      name: 'Josephine',
      img: 'images/josephine.svg',
      hair: 'grey',
      eyes: 'brown',
      accessories: [],
      other: []
    },
    {
      name: 'Josh',
      img: 'images/josh.svg',
      hair: 'yellow',
      eyes: 'green',
      accessories: [],
      other: []
    },
    {
      name: 'Jude',
      img: 'images/jude.svg',
      hair: 'black',
      eyes: 'green',
      accessories: [],
      other: []
    },
    {
      name: 'Julie',
      img: 'images/julie.svg',
      hair: 'black',
      eyes: 'brown',
      accessories: ['glasses', 'hat'],
      other: []
    },
  ]

  // Global variables
  let secret
  let currentQuestion
  let charactersInPlay
  let keep
  
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

  // Randomly select a person from the characters array 
  const setSecretCharacter = () => {
    secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  }

  // This function to start (and restart) the game
  const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecretCharacter()
  selectQuestion() 
  console.log(secret)
  }

  // setting the currentQuestion object when you select something in the dropdown
  const selectQuestion = () => {
    // This variable stores what option group (category) the question belongs to.
    const category = questions.options[questions.selectedIndex].parentNode.label
    // We also need a variable that stores the actual value of the question we've selected.
    const value = questions.options[questions.selectedIndex].value

    currentQuestion = {
      category: category,
      value: value
    }
  }

  // This function is invoked when 'Find Out' button is clicked.
  const checkQuestion = () => {
    const { category, value } = currentQuestion;
   
    // Compares the currentQuestion details
   if (category === 'hair' || category === 'eyes') {
      if (secret.hair === value || secret.eyes === value) {
        keep = true
    } else {
        keep = false
    }
    } else if (category === 'accessories' || category === 'other') {
      if (secret.accessories.includes(value) || secret.other.includes(value)) {
        keep = true 
      } else {
        keep = false
      }
    }
    filterCharacters(keep)
  }
  
    // Filters the characters array
  const filterCharacters = (keep) => {
    const { category, value } = currentQuestion
    // Shows the correct alert message for different categories
    if (category === 'hair') {
      if (keep) {
        alert(`Yes, the person has ${value} hair! Keep all people that has ${value} hair!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        alert(`No, the person doesn't have ${value} hair! Remove all people that has ${value} hair!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    } else if (category === 'eyes') {
      if (keep) {
        alert( `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        alert(`No, the person doesn't have ${value} eyes! Remove all people that has ${value} eyes!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    } else if (category === 'accessories') {
      if (keep) {
        alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
        alert(`No, the person does not wear ${value}! Keep all people that does not wear ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
    } else if (category === 'other') {
      if (keep) {
        alert(`Yes, the person is a ${value}! Keep all people that is a ${value}!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
        alert(`No, the person is not a ${value}! Keep all people that is a ${value}!`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
    }
    //Redraw the game board.
    generateBoard()
  }

    //When clicking guess, the player has to confirm that they want to make a guess.
    const guess = (personToConfirm) => {
    let confirmPerson = confirm(`Do you really want to make a guess on ${personToConfirm}?`);
    if (confirmPerson === true) {
      checkMyGuess (personToConfirm)
    } else {
      alert('Ok, no problem! Keep on guessing!')
    }
  }

  // If player confirms, this function is invoked
  const checkMyGuess = (personToCheck) => {
    board.style.display = 'none'
    winOrLose.style.display = 'flex'

    if (personToCheck === secret.name) {
      winOrLoseText.innerHTML = `
        Congratulations, You won! ${secret.name} is the person we were looking for. `
    } else {
      winOrLoseText.innerHTML = `
        Unfortunately, that is the wrong answer. It is ${secret.name} 
        that we were looking for. Please try again!`
    }    
  };

  // Invokes the start function when website is loaded
  start()

  // All the event listeners
  restartButton.addEventListener('click', start);
  findOutButton.addEventListener('click', checkQuestion)
  questions.addEventListener('change', selectQuestion)
  playAgainButton.addEventListener('click', () => {
  winOrLose.style.display = 'none';
  board.style.display = 'flex'
  location.reload();
  })