// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findBtn = document.getElementById('filter') 


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Darth Vader',
    img : 'images/darthvader.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: ['weapon', 'cape'],
    other: ['villan']
  },
  {
    name: 'Dumbledore',
    img: 'images/dumbledore.jpg',
    hair: 'white',
    headpiece: 'hat',
    accessories: ['weapon', 'pet'],
    other: ['wizard']
  },
  {
    name: 'Black Widow',
    img: 'images/blackwidow.jpg',
    hair: 'brown',
    headpiece: 'no headpice',
    accessories: [],
    other: ['superhero']
  },
  {
    name: 'Voldemort',
    img: 'images/voldemort.jpg',
    hair: 'bald',
    headpiece: 'no headpice',
    accessories: ['weapon', 'pet'],
    other: ['villan']
  },
  {
    name: 'Gandalf',
    img: 'images/gandalf.jpg',
    hair: 'hidden',
    headpiece: 'hat',
    accessories: ['weapon', 'cape'],
    other: ['wizard']
  },
  {
    name: 'Harley Quinn',
    img: 'images/harleyquinn.jpg',
    hair: 'white',
    headpiece: 'no headpice',
    accessories: [],
    other: ['villan']
  },
  {
    name: 'Thanos',
    img: 'images/thanos.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: [],
    other: ['villan']
  },
  {
    name: 'Hermione',
    img: 'images/hermione.png',
    hair: 'brown',
    headpiece: 'no headpice',
    accessories: [],
    other: ['wizard']
  },
  {
    name: 'Superman',
    img: 'images/superman.jpg',
    hair: 'black',
    headpiece: 'no headpice',
    accessories: ['cape'],
    other: ['superhero']
  },

  {
    name: 'Luke Skywalker',
    img: 'images/luke.jpg',
    hair: 'blond',
    headpiece: 'no headpice',
    accessories: ['weapon'],
    other: ['superhero']
  },
  {
    name: 'M. McGonagall',
    img: 'images/minerva.jpg',
    hair: 'gray',
    headpiece: 'hat',
    accessories: ['glasses'],
    other: ['wizard']
  },
  {
    name: 'Storm Tropper',
    img: 'images/stormtropper.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: ['weapon'],
    other: ['villan']
  },
  {
    name: 'Indiana Jones',
    img: 'images/indianajones.jpg',
    hair: 'hidden',
    headpiece: 'hat',
    accessories: ['weapon'],
    other: ['superhero']
  },
  {
    name: 'Harry Potter',
    img: 'images/harry.jpg',
    hair: 'black',
    headpiece: 'no headpice',
    accessories: ['weapon', 'pet'],
    other: ['wizard']
  },
  {
    name: 'Loki',
    img: 'images/loki.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: ['cape'],
    other: ['villan']
  },
  {
    name: 'Yoda',
    img: 'images/yoda.jpg',
    hair: 'bald',
    headpiece: 'no headpice',
    accessories: ['weapon'],
    other: ['superhero']
  },
  {
    name: 'Bellatrix L',
    img: 'images/belatrix.jpg',
    hair: 'black',
    headpiece: 'no headpice',
    accessories: [],
    other: ['villan']
  },
  {
    name: 'Catwoman',
    img: 'images/catwoman.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: ['glasses'],
    other: ['villan']
  },
  {
    name: 'Bobba Fett',
    img: 'images/bobbafett.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: ['weapon'],
    other: ['villan']
  },
  {
    name: 'Batman',
    img: 'images/batman.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: ['cape', 'weapon'],
    other: ['superhero']
  },
  {
    name: 'Smeagle',
    img: 'images/smeagle.jpg',
    hair: 'bald',
    headpiece: 'no headpice',
    accessories: [],
    other: ['villan']
  },
  {
    name: 'Captain America',
    img: 'images/captain.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: ['weapon'],
    other: ['superhero']
  },
  {
    name: 'Wolerine',
    img: 'images/wolverine.jpg',
    hair: 'black',
    headpiece: 'no headpice',
    accessories: ['weapon'],
    other: ['superhero']
  },
  {
    name: 'Thor',
    img: 'images/thor.jpg',
    hair: 'hidden',
    headpiece: 'helmet',
    accessories: ['cape'],
    other: ['superhero']
  },
  {
    name: 'Leia',
    img: 'images/leia.jpg',
    hair: 'brown',
    headpiece: 'no headpice',
    accessories: [],
    other: ['superhero']
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
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  console.log(secret) // remove later
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // A variable that stores the actual value of the question
  const value = questions.value;

  // This variable stores what option group (category) the question belongs to.
  currentQuestion = {
    category: category,
    value: value, // We also need a variable that stores the actual value of the question we've selected.
  }
  console.log(currentQuestion)
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters

//   if (
//     category === "hair" ||
//     category === "headpiece" ||
//     category === "other"
//   ) {
//     if(secret[category] === value){
//       filterCharacters(true)
//     }
//     if (category === "hair" && value === secret.hair){
//       filterCharacters(true)
//     } else if (category === "headpiece" && value === secret.headpiece){
//       filterCharacters(true)
//     } else if (category === "other" && value === secret.other){
//       filterCharacters(true)
//     } else {
//       filterCharacters(false)
//     }
//   } else if (category === "accessories") {
//     if (secret.accessories.includes(value)) {
//       filterCharacters(true)
//     } else {
//       filterCharacters(false)
//   }
//   }
// }

  if (category === 'hair' || category === 'headpiece') {
    if (secret[category] === value){
filterCharacters(true) 
}
  else {filterCharacters()
  }
  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)){
      filterCharacters(true) 
}
  else {filterCharacters()
  }
}
}



// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  //if i change the value to actualValue, the alert doesnt apear
  
  // Show the correct alert message for different categories
  if (category === "hair") {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people that have ${value}`);
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that has ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "headpiece") {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people that has ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that has ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  } else if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(`Yes the person is a ${value}! Keep all the ${value}`);
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(`No the person is not a ${value}! Remove all the ${value}`);
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  }


  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
    // for hair and eyes :
      // charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      // or
      // charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)

    // for accessories and other
      // charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      // or
      // charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))


  // Invoke a function to redraw the board with the remaining people.
setTimeout(() => generateBoard(), 500)
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findBtn.addEventListener('click', checkQuestion)
