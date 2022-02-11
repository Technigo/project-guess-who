// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const guessBtn = document.getElementById('filter')
const winOrLose = document.querySelector('.win-or-lose-wrapper')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')
const guessWhoIcon = document.getElementsByClassName('guess-who-icon')
const myAudio = document.getElementById('my-audio')


// Global variables
let secret
let currentQuestion
let charactersInPlay
let personToGuess
let personToCheck
let personToConfirm

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Arya Stark',
    img: 'images/arya.png  width="141px"',
    hair: ['brown hair'],
    eyes: 'grey eyes',
    accessories: ['a sword'], 
    house: ['House Stark'],
    species: 'human',
    home: ['Winterfell']
  },
  {
    name: 'Rob Stark',
    img: 'images/rob.png width="135px"',
    hair: ['brown hair'],
    eyes: 'blue eyes',
    accessories: ['a sword', 'a crown at one point'], 
    house: ['House Stark'],
    species: 'human',
    home: ['Winterfell']
  },
  {
    name: 'Sansa Stark',
    img: 'images/sansa.png width="135px"',
    hair: ['red hair'],
    eyes: 'blue eyes',
    accessories: ['a crown at one point'],
    house: ['House Stark'],
    species: 'human',
    home: ['Winterfell']
  },
  {
    name: 'Jon Snow',
    img: 'images/jon.png width="135px"',
    hair: ['black hair'],
    eyes: 'grey eyes',
    accessories: ['a sword', 'a crown at one point'],
    house: ['House Stark', 'House Snow', 'House Targaryen'],
    species: 'human',
    home: ['Winterfell', 'The Wall']
  },
  {
    name: 'Daenerys Targaryen',
    img: 'images/dany2.jpg width="135px"',
    hair: ['white hair'],
    eyes: 'purple eyes',
    accessories: ['none'],
    house: ['House Targaryen'],
    species: 'human',
    home: ['unknown']
  },
  {
    name: 'Tyrion Lannister',
    img: 'images/tyrion.png width="140px"',
    hair: ['golden hair'],
    eyes: 'green eyes',
    accessories: ['books', 'knowledge'],
    house: ['House Lannister'],
    species: 'human',
    home: ['kings Landning', 'Casterly Rock']
  },
  {
    name: 'Cercei Lannister',
    img: 'images/cerci.png width="135px"',
    hair: ['golden hair'],
    eyes: 'green eyes',
    accessories: ['a crown at one point'],
    house: ['House Lannister'],
    species: 'human',
    home: ['kings Landning', 'Casterly Rock']
  },
  {
    name: 'Jamie Lannister',
    img: 'images/jamie.png width="135px"',
    hair: ['golden hair'],
    eyes: 'green eyes',
    accessories: ['a sword'],
    house: ['House Lannister'],
    species: 'human',
    home: ['Kings Landing', 'Casterly Rock']
  },
  {
    name: 'Sandor Clegane',
    img: 'images/sandor.png width="140px"',
    hair: ['brown hair'],
    eyes: 'grey eyes',
    accessories: ['a sword'],
    house: ['House Clegane'],
    species: 'human',
    home: ['unknown']
  },
  {
    name: 'Brandon Stark',
    img: 'images/bran.png width="140px"',
    hair: ['brown hair'],
    eyes: 'blue eyes',
    accessories: ['a wheelchair', 'knowledge', 'magic'],
    house: ['House Stark'],
    species: 'human',
    home: ['Winterfell']
  },

  {
    name: 'Gregor Clegane',
    img: 'images/gregor.png width="140px"',
    hair: ['hidden hair'],
    eyes: 'hidden eyes',
    accessories:  ['sword'],
    house: ['House Clegange'],
    species: 'human',
    home: ['unknown']
  },
  {
    name: 'Samwell Tarly',
    img: 'images/sam.png width="135px"',
    hair: ['black hair'],
    eyes: 'brown eyes',
    accessories: ['books', 'knowledge'],
    house: ['House Tarly'],
    species: 'human',
    home: ['The Wall', 'Horn Hill']
  },
  {
    name: 'Jorah Mormont',
    img: 'images/jorah.png width="138px"',
    hair: ['golden hair'],
    eyes: 'blue eyes',
    accessories: ['a sword'],
    house: ['House Mormont'],
    species: 'human',
    home: ['Bear Island']
  },
  {
    name: 'Brienne Tarth',
    img: 'images/brienne.png width="135px"',
    hair: ['golden hair'],
    eyes: 'blue eyes',
    accessories: ['a sword'],
    house:['House Tarth'],
    species: 'human',
    home: ['Evenfall Hall']
  },
  {
    name: 'Tormund Giantsbane',
    img: 'images/tormund.png width="135px"',
    hair: ['red hair'],
    eyes: 'green eyes',
    accessories: ['a sword'],
    house: ['the Free folk'],
    species: 'human',
    home: ['Beyond the Wall']
  },
  {
    name: 'Melisandre',
    img: 'images/melisandre.jpg width="135px"',
    hair: ['red hair'],
    eyes: 'blue eyes',
    accessories: ['magic'],
    house: ['unknown'],
    species: 'human',
    home: ['Asshai']
  },
  {
    name: 'Ygritte',
    img: 'images/ygritte.jpg width="135px"',
    hair: ['red hair'],
    eyes: 'blue eyes',
    accessories: ['a bow'],
    house: ['the Free folk'],
    species: 'human',
    home: ['Beyond the Wall']
  },
  {
    name: 'Margaery Tyrell',
    img: 'images/margaery.jpg width="135px"',
    hair: ['brown hair'],
    eyes: 'brown eyes',
    accessories: ['a crown at one point'],
    house: ['House Tyrell'],
    species: 'human',
    home: ['kings Landning', 'Highgarden']
  },
  {
    name: 'Olenna Tyrell',
    img: 'images/olenna.png width="135px"',
    hair: ['hidden hair'],
    eyes: 'brown eyes',
    accessories: ['none'],
    house: ['House Tyrell'],
    species: 'human',
    home: ['Highgarden']
  },
  {
    name: 'Lyanna Mormont',
    img: 'images/lyanna.jpg width="135px"',
    hair: ['brown hair'],
    eyes: 'brown eyes',
    accessories: ['a sword'],
    house: ['House Mormont'],
    species: 'human',
    home: ['Bear Island']
  },
  {
    name: 'Hodor',
    img: 'images/hodor.jpg width="135px"',
    hair: ['white hair'],
    eyes: 'blue eyes',
    accessories: ['none'],
    house: ['unknown'],
    species: 'human',
    home: ['Winterfell']
  },
  {
    name: 'Night king',
    img: 'images/nightking.jpg width="135px"',
    hair: ['hidden hair'],
    eyes: 'blue eyes',
    accessories:['magic', 'a spear'],
    house: ['unknown'],
    species: 'White walker',
    home: ['Beyond the Wall']
  },
  {
    name: 'Jaqen Haghar',
    img: 'images/jaqen.jpg width="135px"',
    hair: ['red hair', 'white hair'],
    eyes: 'hidden eyes',
    accessories:['a sword', 'magic'],
    house: ['unknown'],
    species: 'human',
    home: ['Braavos']
  },
  {
    name: 'Oberyn Martell',
    img: 'images/oberyn.jpg width="135px"',
    hair: ['black hair'],
    eyes: 'black eyes',
    accessories: ['a spear'],
    house: ['House Martell'],
    species: 'human',
    home: ['Dorne']
  },
  {
    name: 'Nymeria',
    img: 'images/nymeria.png width="135px"',
    hair: ['grey hair', 'white hair'],
    eyes: 'hidden eyes',
    accessories: ['none'],
    house: ['House Stark'],
    species: 'direwolf',
    home: ['unknown', 'Winterfell']
  },
  {
    name: 'Ghost',
    img: 'images/ghost.png width="135px"',
    hair: ['white hair'],
    eyes: 'red eyes',
    accessories: ['none'],
    house: ['House Stark', 'House Snow'],
    species: 'direwolf',
    home: ['The Wall', 'Winterfell']
  },
  {
    name: 'Summer',
    img: 'images/summer.jpg width="135px"',
    hair: ['golden hair'],
    eyes: 'hidden eyes',
    accessories: ['none'],
    house: ['House Stark'],
    species: 'direwolf',
    home: ['Winterfell'],
  },
  {
    name: 'Drogon',
    img: 'images/drogon.png width="135px"',
    hair: ['black hair'],
    eyes: 'hidden eyes',
    accessories: ['none'],
    house: ['House Targaryen'],
    species: 'dragon',
    home: ['unknown'],
  },
  {
    name: 'Rhaegal',
    img: 'images/rhaegal.png width="135px"',
    hair: ['green hair'],
    eyes: 'hidden eyes',
    accessories: ['none'],
    house: ['House Targaryen'],
    species: 'dragon',
    home: ['unknown'],
  },
  {
    name: 'Viserion',
    img: 'images/viserion.png width="140px"',
    hair: ['golden hair'],
    eyes: 'hidden eyes',
    accessories: ['none'],
    house: ['House Targaryen'],
    species: 'dragon',
    home: ['unknown'],
  }
]

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
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecret()
  selectQuestion()
  document.getElementById('my-audio').innerHTML = `
    <audio src="./images/music.mp3" type="audio/mpeg" autoplay loop></audio>
    `
  
  }


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  const value = questions.options[questions.selectedIndex].value


  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.


const checkQuestion = () => {
  selectQuestion()
  const { category, value } = currentQuestion;
  
  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  let keep;
  if (category === 'Hair' && value === secret.hair.find(element => element === value)) {
    keep = true;
  } else if (category === 'Eyes' && value === secret.eyes) {
    keep = true
  } else if (category === 'House' && value === secret.house.find(element => element === value)) {
    keep = true
  } else if (category === 'Home' && value === secret.home.find(element => element === value)) {
    keep = true
  } else if (category === 'Species' && value === secret.species) {
    keep = true
  } else if (category === 'Accessories' && value === secret.accessories.find(element => element === value)) {
    keep = true
  } else {
    keep = false
  }
  filterCharacters(keep);
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  
  const { category, value } = currentQuestion;
 
  if (category === 'Hair') {
    if (keep) {
      Swal.fire(
        `Yes! The character have ${value}!`,
        `Keeping all with ${value}.`,
        'success'
      )
      charactersInPlay = charactersInPlay.filter((person) => person.hair.includes(value))
    } else {
      
      Swal.fire(
        `No, the character doesn't has ${value}.`,
        `Let's remove all that has ${value}.`,
        'error'
      )
      charactersInPlay = charactersInPlay.filter((person) => !person.hair.includes(value)) 
    }
  } else if (category === 'Eyes') {
    if (keep) {
      Swal.fire(
        `Yes, the secret character has ${value}!`,
        `Let's keep all that has ${value}`,
        'success'
      )
      charactersInPlay = charactersInPlay.filter((person) => person.eyes === value);
    } else {
      Swal.fire(
        `No, the secret character doesn't have ${value}.`,
        `Let's remove all that has ${value}`,
        'error'
      )
      charactersInPlay = charactersInPlay.filter((person) => person.eyes !== value);
    }
  } else if (category === 'Accessories') {
    if (keep === true) {
      Swal.fire(
        `Yes, the secret character has ${value}!`,
        `Let's keep all with ${value}`,
        'success'
      )
      charactersInPlay = charactersInPlay.filter((person) => person.accessories.includes(value))
    } else {
      Swal.fire(
        `No, the secret character does not have ${value}`,
        `Let's remove all with ${value}`,
        'error'
      )
      charactersInPlay = charactersInPlay.filter((person) => !person.accessories.includes(value)) 

 
    }
  } else if (category === 'House') {
    if (keep) {
      Swal.fire(
        `Yes the secret character is in ${value}!`,
        `Let's keep all that is in ${value}`,
        'success'
      )
      
      charactersInPlay = charactersInPlay.filter((person) => person.house.includes(value))
      


    } else {
      Swal.fire(
        `No, the secret character is in ${value}`,
        `Let's remove all that is in ${value}.`,
        'error'
      )
      charactersInPlay = charactersInPlay.filter((person) => !person.house.includes(value)) 


    }
  } else if (category === 'Species') {
    if (keep) {
      Swal.fire(
        `Yes, the secret character is a ${value}!`,
        `Let's Keep all ${value}s.`,
        'success'
      )
      charactersInPlay = charactersInPlay.filter((person) => person.species === value);

    } else {
      Swal.fire(
        `No, the secret character is not a ${value}.`,
        `Let's remove all ${value}s.`,
        'error'
      )
      charactersInPlay = charactersInPlay.filter((person) => person.species !== value);

    }
  } else {
    if (keep) {
      Swal.fire(
        `Yes the secret characters home is ${value}!`,
        `Let's keep all that has ${value} as a home.`,
        'success'
      )
      charactersInPlay = charactersInPlay.filter((person) => person.home.includes(value))


    } else {
      Swal.fire(
        `No, the secret characters home is not ${value}`,
        `Let's remove all that has ${value} as a home`,
        'error'
      )
      
      charactersInPlay = charactersInPlay.filter((person) => !person.home.includes(value)) 

    }
  }

  
  if (keep === true) {
    generateBoard(charactersInPlay)
  } else {
    generateBoard(charactersInPlay)

  }
}



  


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // let letsGuess = confirm(`Do you want to guess on ${personToConfirm}?`)
  let letGuess = Swal.fire({
    title: 'Are you sure?',
    text: `Do you want to guess on ${personToConfirm}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      checkMyGuess(personToConfirm)
    }
  })
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  // if (letsGuess) {
  //   checkMyGuess(personToConfirm)
  // } else {
  //   alert('Make another guess!') 
  // }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  if (personToCheck === secret.name) {
    winOrLose.style.display = "flex"
    winOrLoseText.style.display = "flex"
    winOrLoseText.innerHTML = `Congratulations! <br><br> You guessed right, the secret character was ${personToCheck}!`

    // alert(
    //   `Congratulations! You guessed right, the secret character is ${personToCheck}!`
    // )
    playAgain.addEventListener('click', () => {
      console.log('Clicked')
      start()
      winOrLose.style.display = "none"
    } )


  } else {
   
    Swal.fire(
      `Sorry, ${personToCheck} is not the secret character.`,
      `Please guess again.`,
      'error'
    )
    

    
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
guessBtn.addEventListener('click', () => {
  checkQuestion()
})


