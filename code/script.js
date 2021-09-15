// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgain')


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Ahri',
    img: 'champs/Ahri.jpg',
    hair: 'black',
    costume: 'red',
    abilities: ['ability power'],
    crowdcontrol: ['charm']
  },
  {
    name: 'Anivia',
    img: 'champs/Anivia.jpg',
    hair: 'none',
    costume: 'blue',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['stunn']
  },
  {
    name: 'Cassiopeia',
    img: 'champs/Cassiopeia.jpg',
    hair: 'hidden',
    costume: 'green',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['grounded', 'stunn']
  },
  {
    name: 'Galio',
    img: 'champs/Galio.jpg',
    hair: 'none',
    costume: 'white',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['taunt', 'knock up']
  },
  {
    name: 'Gragas',
    img: 'champs/Gragas.jpg',
    hair: 'red',
    costume: 'brown',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['stunn', 'knock back']
  },
  {
    name: 'Karma',
    img: 'champs/Karma.jpg',
    hair: 'brown',
    costume: 'purple',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['root']
  },
  {
    name: 'LeBlanc',
    img: 'champs/LeBlanc.jpg',
    hair: 'black',
    costume: 'purple',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['root']
  },
  {
    name: 'Malzahar',
    img: 'champs/Malzahar.jpg',
    hair: 'hidden',
    costume: 'purple',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['silence', 'suppress']
  },
  {
    name: 'Neeko',
    img: 'champs/Neeko.jpg',
    hair: 'purple',
    costume: 'brown',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['root', 'stunn']
  },

  {
    name: 'Fizz',
    img: 'champs/Fizz.jpg',
    hair: 'none',
    costume: 'blue',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['knock up', 'slow']
  },
  {
    name: 'Riven',
    img: 'champs/Riven.jpg',
    hair: 'white',
    costume: 'white',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['knock back', 'stunn']
  },
  {
    name: 'Kayn',
    img: 'champs/Kayn.jpg',
    hair: 'black',
    costume: 'black',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['slow']
  },
  {
    name: 'Graves',
    img: 'champs/Graves.jpg',
    hair: 'brown',
    costume: 'red',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['slow', 'knock back', 'blind']
  },
  {
    name: 'Katarina',
    img: 'champs/Katarina.jpg',
    hair: 'red',
    costume: 'black',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: []
  },
  {
    name: 'Shaco',
    img: 'champs/Shaco.jpg',
    hair: 'hidden',
    costume: 'red',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['fear', 'slow']
  },
  {
    name: 'Tristana',
    img: 'champs/Tristana.jpg',
    hair: 'red',
    costume: 'green',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['slow', 'knock back']
  },
  {
    name: 'Warwick',
    img: 'champs/Warwick.jpg',
    hair: 'none',
    costume: 'brown',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['fear', 'suppress']
  },
  {
    name: 'Darius',
    img: 'champs/Darius.jpg',
    hair: 'brown',
    costume: 'red',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['slow', 'hook']
  },
  {
    name: 'Thresh',
    img: 'champs/Thresh.jpg',
    hair: 'none',
    costume: 'green',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['knock back', 'hook', 'slow']
  },
  {
    name: 'Poppy',
    img: 'champs/Poppy.jpg',
    hair: 'white',
    costume: 'brown',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['knock back', 'grounded', 'slow', 'stunn']
  },
  {
    name: 'Rakan',
    img: 'champs/Rakan.jpg',
    hair: 'white',
    costume: 'red',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['knock up', 'charm']
  },
  {
    name: 'Teemo',
    img: 'champs/Teemo.jpg',
    hair: 'purple',
    costume: 'brown',
    abilities: ['attack damage', 'ability power', 'passive'],
    crowdcontrol: ['blind', 'slow']
  },
  {
    name: 'Nidalee',
    img: 'champs/Nidalee.jpg',
    hair: 'brown',
    costume: 'brown',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['root']
  },
  {
    name: 'Mordekaiser',
    img: 'champs/Mordekaiser.jpg',
    hair: 'hidden',
    costume: 'black',
    abilities: ['attack damage', 'ability power', 'passive'],
    crowdcontrol: ['hook']
  },
  {
    name: 'Caitlyn',
    img: 'champs/Caitlyn.jpg',
    hair: 'black',
    costume: 'purple',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['root', 'slow']
  },
  {
    name: 'Lulu',
    img: 'champs/Lulu.jpg',
    hair: 'purple',
    costume: 'red',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['knock up', 'slow']
  },
  {
    name: 'Qiyana',
    img: 'champs/Qiyana.jpg',
    hair: 'white',
    costume: 'blue',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['stunn']
  },
  {
    name: 'Garen',
    img: 'champs/Garen.jpg',
    hair: 'brown',
    costume: 'blue',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['silence']
  },
  {
    name: 'Miss Fortune',
    img: 'champs/MissFortune.jpg',
    hair: 'red',
    costume: 'white',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['slow']
  },
  {
    name: 'Akali',
    img: 'champs/Akali.jpg',
    hair: 'black',
    costume: 'green',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: []
  },
  {
    name: 'Gwen',
    img: 'champs/Gwen.jpg',
    hair: 'blue',
    costume: 'white',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['slow']
  },
  {
    name: 'Singed',
    img: 'champs/Singed.jpg',
    hair: 'none',
    costume: 'pink',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['grounded', 'slow', 'root']
  },
  {
    name: 'Jinx',
    img: 'champs/Jinx.jpg',
    hair: 'blue',
    costume: 'pink',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['slow', 'root']
  },
  {
    name: 'Shen',
    img: 'champs/Shen.jpg',
    hair: 'hidden',
    costume: 'purple',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['taunt', 'slow']
  },
  {
    name: 'Jarvan',
    img: 'champs/Jarvan.jpg',
    hair: 'hidden',
    costume: 'gold',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['knock up']
  },
  {
    name: 'Seraphine',
    img: 'champs/Seraphine.jpg',
    hair: 'pink',
    costume: 'purple',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['charm']
  },
  {
    name: 'Rammus',
    img: 'champs/Rammus.jpg',
    hair: 'hidden',
    costume: 'green',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['knock up', 'taunt', 'slow']
  },
  {
    name: 'Sona',
    img: 'champs/Sona.jpg',
    hair: 'blue',
    costume: 'blue',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['stunn']
  },
  {
    name: 'Sett',
    img: 'champs/Sett.jpg',
    hair: 'pink',
    costume: 'white',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: ['stunn', 'slow', 'suppress']
  },
  {
    name: 'Sivir',
    img: 'champs/Sivir.jpg',
    hair: 'brown',
    costume: 'gold',
    abilities: ['attack damage', 'passive'],
    crowdcontrol: [ ]
  },
  {
    name: 'Zyra',
    img: 'champs/Zyra.jpg',
    hair: 'pink',
    costume: 'green',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['knock up', 'root']
  },
  {
    name: 'Blitzcrank',
    img: 'champs/Blitzcrank.jpg',
    hair: 'none',
    costume: 'gold',
    abilities: ['ability power', 'passive'],
    crowdcontrol: ['knock up', 'hook', 'silence']
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

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
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  console.log(category)

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value
  console.log(value)
  currentQuestion = {
    category: category,
    value: value
  }
  console.log(currentQuestion)
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion
  console.log(currentQuestion)
  console.log(category)
  console.log(value)
  let keep = false

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair') {
  keep = (secret.hair === value)
  
  } else if (category === 'costume') {
  keep = (secret.costume === value)

  } else if (category === 'abilities') {
    keep = (secret.abilities.includes(value))

  } else if (category === 'crowdcontrol') {
    keep = (secret.crowdcontrol.includes(value))
  }

  filterCharacters(keep)
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'abilities') {
    if (keep) {
      alert(`Yes, the champion have ${value} abilities! Keep all champion that have ${value} abilities.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the champion doesn't have ${value} abilities! Remove all champions that have ${value} abilities`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'crowdcontrol') {
    if (keep) {
      alert(`Yes, the champion have ${value} as crowd control! Keep all champions that have ${value} as crowd control.`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(`No, the champion doesn't have ${value} as crowd control! Remove all champions that have ${value} as crowd control`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }

  } else if (category === 'hair') {
    if (keep) {
      alert(`Yes, the champion has ${value} hair! Keep all champions with ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(`No, the champion doesn't have ${value} hair! Remove all champions that have ${value} hair`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
     } else if(category === 'costume') {
      if (keep) {
        alert(`Yes, the champion has ${value} costume! Keep all champions with ${value} costume`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        alert(`No, the champion doesn't have ${value} costume! Remove all champions that have ${value} costume`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    }

    //Makes the bord redraw with remaining champions
    generateBoard()
  }


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspectCharacter) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(`Is this champion your guess?`)
  if (confirmGuess)
  checkMyGuess(suspectCharacter)
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (suspectCharacter) => {

  if (suspectCharacter === secret.name) {
  winOrLoseText.innerHTML = `Victory! You guessed on ${suspectCharacter} which is the right champion!`
} else {
  winOrLoseText.innerHTML = `Defeat! The right champion was ${secret.name}...`
}
  
  winOrLose.style.display = 'flex';
  
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', () => {
  start()
  winOrLose.style.display = 'none';
}) 

