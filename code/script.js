// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const winOrLose = document.getElementById('winOrLose')

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
let secret //Will be the secret person object
let currentQuestion //Will be the current question object
let charactersInPlay //Will be an array of all people left in the game

// let keep ='';
// const characterAccessories = "accessories";

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
  console.log(secret);
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  generateBoard();
  setSecret();
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value // We also need a variable that stores the actual value of the question we've selected.
  console.log('questions has been selected')

  if (category === 'hair'){
    currentQuestion = {
      attribute: 'hair',
      value: value,
      category: category,
    }
    console.log('hair');
   
  } else if (category === 'eyes') {
    currentQuestion = {
      attribute: 'eyes',
      value: value,
      category: category,
    }
    console.log('eyes');
   
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: 'accessories',
      value: value,
      category: category,
    }
    console.log('accessories');
   
  } else if (category === 'other') {
    currentQuestion = {
      attribute: 'other',
      value: value,
      category: category,
    }
    console.log('other');
    }
  
  //   currentQuestion = {
  //   category: category,
  //   value: value
  // }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log('filter button')
  const { category, value} = currentQuestion

  // // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // // See if we should keep or remove people based on that
  // // Then invoke filterCharacters

  keep = false; // if this line of code is not included, then get wrong answers when selecting values from grouped categories. E.g. without keep = false, 
  // if a character has yellow hair and hidden eyes.  I ask about yellow hair, the alert says yes they have yellow hair. Then I ask if they have green eyes, alert will give me a false yes, 
  //because now keep has been changed to true for hair and eyes.

  if (category === 'hair' || category === 'eyes') {
    if (value === secret[category]) {
      keep = true
      console.log(`${secret[category]}`, 'hair and eyes is true');
    }
  } else if (category === 'accessories' || category === 'other') {  
    if (secret[category].includes(value)) {
      keep = true
      console.log(`${secret[category]}`, 'accessories and other is true');
    }
  }

  filterCharacters(keep);
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      )
    }
  } else if (category === 'other') {
    // Similar to the one above
  if (keep) {
    alert(
      `Yes, the person is a ${value}! Keep all people that are ${value}s.`
    )
  } else {
    alert(
      `No, the person is not a ${value}! Remove all people that are ${value}s.`
    )
  }
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    alert(
      `Yes, the person has ${value} ${category}! Keep all people that have ${value} ${category}.`
    )
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    alert(
      `No, the person does not have ${value} ${category}! Remove all people that have ${value} ${category}.`
    )
    }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
   
  if (category === 'hair' || category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      console.log(charactersInPlay);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      console.log(charactersInPlay)
    } 
  } else if (category === 'accessories' || category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      console.log(charactersInPlay);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      console.log(charactersInPlay)
    }
  }
  // Invoke a function to redraw the board with the remaining people.
  generateBoard(filterCharacters);
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ? NO BECAUSE WE HAVEN'T LEARNED IT YET. 
  // If the player wants to guess, invoke the checkMyGuess function.

  const makeAGuess = confirm(`Want to guess ${personToConfirm}?`)

  if(makeAGuess) {
    console.log ('making a guess');
  }
checkMyGuess(personToConfirm)
}

// If you confirm, this function is invoked
const checkMyGuess = (personToConfirm) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

  if (personToConfirm === secret.name) {
    console.log('you win')
    winOrLoseText.innerHTML = ''
    winOrLoseText.innerHTML += `
    you win`
  } else {
    console.log('you lose', `${personToConfirm}`)
    winOrLoseText.innerHTML = ''
    winOrLoseText.innerHTML += `
    you lose`
  }
  winOrLose.style.display = 'flex'
  board.style.display = 'none'
}

const playAgain = () => {
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  start();
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
filterButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', playAgain)




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
//     //console.log('secret hair:', secret.hair, 'value:', value, 'category:', category)
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
