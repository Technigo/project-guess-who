// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winText = document.getElementById('winText')
const loseText = document.getElementById('loseText')
const playAgainAfterWin = document.getElementById('playAgainAfterWin')
const playAgainAfterLoss = document.getElementById('playAgainAfterLoss')
const winWrapper = document.getElementById('win-wrapper')
const loseWrapper = document.getElementById('lose-wrapper')
const questionSection = document.getElementById('question-section')
const guessCounter = document.getElementById('guess-counter')
let timer = document.getElementById('timer')
let footer = document.querySelector('footer')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Zelda',
    img: 'zelda-images/zelda.webp',
    features: 'yellow',
    eyes: 'blue',
    accessories: ['a Sheikah slate', 'a belt'],
    other: ['Hylian'], 
    weapons: []
  },
  {
    name: 'Link',
    img: 'zelda-images/link.webp',
    features: 'yellow',
    eyes: 'blue',
    accessories: ['a Sheikah slate','weapons'],
    other: ["Hylian"], 
    weapons: ['a bow', 'a shield']
  },
  {
    name: 'Urbosa',
    img: 'zelda-images/urbosa.webp',
    features: 'red',
    eyes: 'green',
    accessories: ['a sword', 'weapons'],
    other: ['Gerudo'],
    weapons: ['a sword', 'a shield']
  },
  {
    name: 'Mipha',
    img: 'zelda-images/mipha.webp',
    features: 'red',
    eyes: 'gold',
    accessories: ['weapons'],
    other: ['Zora'], 
    weapons: ['a trident']
  },
  {
    name: 'Daruk',
    img: 'zelda-images/daruk.webp',
    features: 'white',
    eyes: 'blue',
    accessories: ['a belt', 'a beard'],
    other: ['Goron'], 
    weapons: []
  },
  {
    name: 'Revali',
    img: 'zelda-images/revali.webp',
    features: 'blue',
    eyes: 'green',
    accessories: ['weapons'],
    other: ['Rito'], 
    weapons: ['a bow']
  },
  {
    name: 'Riju',
    img: 'zelda-images/riju.webp',
    features: 'red',
    eyes: 'green',
    accessories: ['crown'],
    other: ['Gerudo'], 
    weapons: []
  },
  {
    name: 'Sidon',
    img: 'zelda-images/sidon.webp',
    features: 'red',
    eyes: 'gold',
    accessories: ['a belt'],
    other: ['Zora'],
    weapons: []
  },
  {
    name: 'Yunobo',
    img: 'zelda-images/yunobo.webp',
    features: 'white',
    eyes: 'blue',
    accessories: ['a scarf'],
    other: ['Goron'],
    weapons: ['a flaming ham']
  },

  {
    name: 'Teba',
    img: 'zelda-images/teba.png',
    features: 'white',
    eyes: 'gold',
    accessories: [],
    other: ['Rito'], 
    weapons: []
  },
  {
    name: 'Dorephan',
    img: 'zelda-images/dorephan.jpg',
    features: 'blue',
    eyes: 'gold',
    accessories: ['a crown', 'a belt'],
    other: ['Zora'],
    weapons: []
  },
  {
    name: 'Bludo',
    img: 'zelda-images/bludo.webp',
    features: 'white',
    eyes: 'black',
    accessories: ['a beard', 'an eye-patch'],
    other: ['Goron'],
    weapons: []
  },
  {
    name: 'Kaneli',
    img: 'zelda-images/kaneli.webp',
    features: 'white',
    eyes: 'gold',
    accessories: ['a beard'],
    other: ['Rito'],
    weapons: []
  },
  {
    name: 'Rhoam',
    img: 'zelda-images/rhoam.webp',
    features: 'white',
    eyes: 'blue',
    accessories: ['a beard', 'weapons', 'a crown'],
    other: ['Hylian'],
    weapons: ['a sword']
  },
  {
    name: 'Impa',
    img: 'zelda-images/impa.webp',
    features: 'white',
    eyes: 'black',
    accessories: ['a tattoo', 'hair chopsticks'],
    other: ['Sheikah'], 
    weapons: []
  },
  {
    name: 'Purah',
    img: 'zelda-images/purah.png',
    features: 'white',
    eyes: 'brown',
    accessories: ['glasses', 'hair chopsticks'],
    other: ['Sheikah'],
    weapons: []
  },
  {
    name: 'Robbie',
    img: 'zelda-images/robbie.webp',
    features: 'white',
    eyes: 'hidden',
    accessories: ['glasses', 'hair chopsticks'],
    other: ['Sheikah'],
    weapons: []
  },
  {
    name: 'Hestu',
    img: 'zelda-images/hestu.webp',
    features: 'green',
    eyes: 'hidden',
    accessories: ['a musical instrument', 'maracas', 'a bag', 'a beard'],
    other: ['Korok'],
    weapons: []
  },
  {
    name: 'Kass',
    img: 'zelda-images/kass.webp',
    features: 'blue',
    eyes: 'gold',
    accessories: ['a musical instrument'],
    other: ['Rito'],
    weapons: []
  },
  {
    name: 'Chuchu',
    img: 'zelda-images/chuchu.webp',
    features: '',
    eyes: 'yellow',
    accessories: [],
    other: ['Monster'],
    weapons: []
  },
  {
    name: 'Bokoblin',
    img: 'zelda-images/bokoblin.png',
    features: '',
    eyes: 'yellow',
    accessories: ['horns'],
    other: ['Monster'],
    weapons: []
  },
  {
    name: 'Moblin',
    img: 'zelda-images/moblin.webp',
    features: '',
    eyes: 'blue',
    accessories: ['horns'],
    other: ['Monster'],
    weapons: []
  },
  {
    name: 'Hinox',
    img: 'zelda-images/hinox.webp',
    features: 'white',
    eyes: 'yellow',
    accessories: ['horns'],
    other: ['Monster'],
    weapons: []
  },
  {
    name: 'Lynel',
    img: 'zelda-images/lynel.webp',
    features: 'red',
    eyes: 'green',
    accessories: ['horns'],
    other: ['Monster'],
    weapons: []
  },
]

// Global variables
let secret //Will be the secret person object
let currentQuestion //Will be the current question object
let charactersInPlay //Will be an array of all people left in the game
let count = 0
let timerIntervalId

// Draw the game board
const generateBoard = () => {
  board.innerHTML = '' //clears the board before it is repopulated by HTML below
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

const clickCounter = () => {
  count++;
  guessCounter.innerHTML = `${count}`;
}

const startTimer = () => { // defining startTimer
  clearInterval(timerIntervalId); // clears the interval before starting to count, in case of restarts
  let second = 01,
      minute = 10;

  timerIntervalId = setInterval(() => {
    timer.innerHTML = 
    (minute < 10 ? "0" + minute + ":" : minute + ":") +  // if there are less then 10 minutes, add a 0 in front of the minute, else show the minutes
    (second < 10 ? "0" + second + " remaining" : second + " remaining");  

    second --;  //subtracts a second every second

    if (second == 00){ //if seconds gets to 00, decrease minutes by one and return seconds to 59
      minute--;
      second = 59;
    }
    
    if (minute == 0){
      loseText.innerHTML = ''
      loseText.innerHTML += `
      GAME OVER.`
      loseWrapper.style.display = 'flex'
      board.style.display = 'none'
      questionSection.style.display = 'none'
      footer.style.display = 'none'
    }

  }, 1000);//for this function, it runs ever 1 second
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  // What else should happen when we start the game?
  generateBoard();
  setSecret(CHARACTERS);
  startTimer();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value // We also need a variable that stores the actual value of the question we've selected.
  
  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const {category, value} = currentQuestion

  keep = false; // if this line of code is not included, then get wrong answers when selecting values from grouped categories. E.g. without keep = false, 
  // if a character has yellow hair and hidden eyes.  I ask about yellow hair, the alert says yes they have yellow hair. Then I ask if they have green eyes, alert will give me a false yes, 
  //because now keep has been changed to true for hair and eyes.

  if (category === 'features' || category === 'eyes') {
    if (value === secret[category]) {
      keep = true
    }
  } else if (category === 'accessories' || category === 'other' || category === 'weapons') {  //these categories are compared differently than features and eyes because these categories contain arrays
    if (secret[category].includes(value)) {
      keep = true
    }
  }

  filterCharacters(keep);
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
//shows the alert messages
  if (category === 'accessories' || category === 'weapons') {
    if (keep) {
      alert(
        `Yes, the character has ${value}! Keep all characters that have ${value}.`
      )
    } else {
      alert(
        `No, the character doesn't have ${value}! Remove all characters that have ${value}.`
      )
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the character is a ${value}! Keep all characters that are ${value}s.`
      )
    } else {
      alert(
        `No, the character is not a ${value}! Remove all characters that are ${value}s.`
      )
    }
    } else {
      if (keep) {
      alert(
        `Yes, the character has ${value} ${category}! Keep all characters that have ${value} ${category}.`
      )
      } else {
      alert(
        `No, the character does not have ${value} ${category}! Remove all characters that have ${value} ${category}.`
      )
      }
  }

  // filters by category then puts the new array on the game board - looks like it's removing characters, but it's replacing the original CHARACTERs array (or previous array) with a new one according to filters
   
  if (category === 'features' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    } 
  } else if (category === 'accessories' || category === 'other' || category === 'weapons') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  }
  // Invokes the function to redraw the board with the remaining people.
  generateBoard(filterCharacters);
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const makeAGuess = confirm(`Want to guess ${personToConfirm}?`)

  if(makeAGuess) {
    checkMyGuess(personToConfirm) //this must go inside of the if statement otherwise checkMyGuess is called regardless of whether or not user confirms
  }
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {





  if (personToConfirm === secret.name) {   // 1. Check if the personToCheck is the same as the secret person's name
    winText.innerHTML = ''
    winText.innerHTML += `
    You are a Champion!`   // 2. Set a Message to show in the win or lose section accordingly   // 3. Show the win or lose section
    winWrapper.style.display = 'flex'
    board.style.display = 'none'   // 4. Hide the game board
    questionSection.style.display = 'none'
    footer.style.display = 'none'
  } else {
    loseText.innerHTML = ''
    loseText.innerHTML += `
    GAME OVER.`   // 2. Set a Message to show in the win or lose section accordingly   // 3. Show the win or lose section
    loseWrapper.style.display = 'flex'
    board.style.display = 'none'   // 4. Hide the game board
    questionSection.style.display = 'none'
    footer.style.display = 'none'
  }
  
}

const playAgain = () => {
  winWrapper.style.display = 'none'
  loseWrapper.style.display = 'none'
  board.style.display = 'flex'
  questionSection.style.display = 'flex'
  guessCounter.innerHTML = `0`;
  footer.style.display = 'block'
  count = 0
  start();
}



// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
filterButton.addEventListener('click',clickCounter)
playAgainAfterWin.addEventListener('click', playAgain)
playAgainAfterLoss.addEventListener('click', playAgain)




// This is how I originally was working through checkQuestion.  Object.is was helpful in trying to compare the secret person's attributes with the selected attribute.
// However, I think I was trying to pack too much into one function.  And, instead of comparing only hair to hair (for example), it was comparing all attributes of secret to the selected value.
// So, it wasn't actually returning the correct console.log.  I think I could get it to work, but it would be a LOT of repetitive code.
// After looking at the code in the Technigo example game, I have a better idea of how to push forward.
// I just didn't want to delete this since I spent hours on it and learned some good stuff from it.  I know it's not best practice, and I'll have to delete code mistakes in future projects.  Just not yet. 

// const checkQuestion = () => { 
//   console.log('filter button')
//   const { category, value } = currentQuestion

//   // // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
//   // // See if we should keep or remove people based on that
//   // // Then invoke filterCharacters
//   if (category === 'hair' || category === 'eyes') 
//    {
//   //   if(Object.is(secret.hair, value) === true){
//   //     console.log('hair is true');
//   //     keep = CHARACTERS.filter((keepMatches) => {
//   //       if(keepMatches.hair === value) {
//   //         return keepMatches;
//   //       }
//   //       });
//   //      console.log(keep);
//   //   } else if (Object.is(secret.hair, value) === false) {
//   //     console.log('hair is false');
//   //     remove = CHARACTERS.filter((toRemove) => {
//   //       if(toRemove.hair !== value) {
//   //         return toRemove;
//   //       }
//   //       });
//   //     console.log(remove);

//   //   } else if (Object.is(secret.eyes, value) === true) {
//   //     console.log('eyes is true');
//   //     // keep = CHARACTERS.filter((keepMatches) => {
//   //     //   if(keepMatches.eyes === value) {
//   //     //     return keepMatches;
//   //     //   }
//   //     //   });
//   //     // console.log(keep);

//   //   } else if (Object.is(secret.eyes, value) === false) {
//   //     console.log('eyes is false');
//   //     // remove = CHARACTERS.filter((toRemove) => {
//   //     //   if(toRemove.eyes !== value) {
//   //     //     return toRemove;
//   //     //   }
//   //     //   });
//   //     // console.log(remove);
//   //   }

//   }
//    else if (category === 'accessories' || category === 'other') {
//     // if(Object.is(secret.accessories, value) === true){
//     //   console.log('accessories is true');
//     // } else if (Object.is(secret.accessories, value) === false) {
//     //   console.log('accessories is false');
//     // } else if (Object.is(secret.other, value) === true) {
//     //   console.log('other is true');
//     // } else if (Object.is(secret.other, value) === false) {
//     //   console.log('other is false');
//     // }
//     // }
//   }
// }


//This is the second attempt at this function. I'm struggling to understand the purpose of this function and keep trying to assign it too much meaning.
// const checkQuestion = () => {
//   console.log('filter button')
//   const { category, value} = currentQuestion

//   // // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
//   // // See if we should keep or remove people based on that
//   // // Then invoke filterCharacters
 
//   if (category === 'hair' || category === 'eyes') {
//     //console.log('secret features:', secret.hair, 'value:', value, 'category:', category)
//     if (Object.is(secret.hair, currentQuestion.value) === true){
//       keep = CHARACTERS.hair === currentQuestion.value;//if the question value = the secret person's value, keep all characters with the question value
//       console.log('keep hair true')
//     } else if (Object.is(secret.eyes, currentQuestion.value) === true){
//       keep = CHARACTERS.eyes === currentQuestion.value;//if the question value = the secret person's value, keep all characters with the question value
//       console.log('keep eyes true')
//     } else {console.log('keep false')} 

//   } else if (category === 'accessories' || category === 'other') {  
//     keep = CHARACTERS.forEach(() => CHARACTERS['accessories'].some(currentQuestion.value));
//     console.log(keep);
   
// }
// }
