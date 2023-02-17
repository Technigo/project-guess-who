// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const winOrLose = document.getElementById('winOrLose')
const questionSection = document.getElementById('question-section')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Zelda',
    img: 'zelda-images/zelda.webp',
    hair: 'yellow hair, fins, or feathers',
    eyes: 'blue eyes',
    accessories: ['a Sheikah slate', 'a belt'],
    other: ['Hylian']
  },
  {
    name: 'Link',
    img: 'zelda-images/link.webp',
    hair: 'yellow hair, fins, or feathers',
    eyes: 'blue eyes',
    accessories: ['a Sheikah slate', 'a bow', 'a shield', 'weapons'],
    other: ["Hylian"]
  },
  {
    name: 'Urbosa',
    img: 'zelda-images/urbosa.webp',
    hair: 'red hair, fins, or feathers',
    eyes: 'green eyes',
    accessories: ['a sword', 'a shield', 'weapons'],
    other: ['Gerudo']
  },
  {
    name: 'Mipha',
    img: 'zelda-images/mipha.webp',
    hair: 'red hair, fins, or feathers',
    eyes: 'gold eyes',
    accessories: ['weapons', 'a trident'],
    other: ['Zora']
  },
  {
    name: 'Daruk',
    img: 'zelda-images/daruk.webp',
    hair: 'white hair, fins, or feathers',
    eyes: 'blue eyes',
    accessories: ['a belt', 'a beard'],
    other: ['Goron']
  },
  {
    name: 'Revali',
    img: 'zelda-images/revali.webp',
    hair: 'blue hair, fins, or feathers',
    eyes: 'green eyes',
    accessories: ['weapons', 'a bow'],
    other: ['Rito']
  },
  {
    name: 'Riju',
    img: 'zelda-images/riju.webp',
    hair: 'red hair, fins, or feathers',
    eyes: 'green eyes',
    accessories: ['crown'],
    other: ['Gerudo']
  },
  {
    name: 'Sidon',
    img: 'zelda-images/sidon.webp',
    hair: 'red hair, fins, or feathers',
    eyes: 'gold eyes',
    accessories: ['a belt'],
    other: ['Zora']
  },
  {
    name: 'Yunobo',
    img: 'zelda-images/yunobo.webp',
    hair: 'white hair, fins, or feathers',
    eyes: 'blue eyes',
    accessories: ['a scarf','a flaming ham'],
    other: ['Goron']
  },

  {
    name: 'Teba',
    img: 'zelda-images/teba.png',
    hair: 'white hair, fins, or feathers',
    eyes: 'gold eyes',
    accessories: [],
    other: ['Rito']
  },
  {
    name: 'Dorephan',
    img: 'zelda-images/dorephan.jpg',
    hair: 'blue hair, fins, or feathers',
    eyes: 'gold eyes',
    accessories: ['a crown', 'a belt'],
    other: ['Zora']
  },
  {
    name: 'Bludo',
    img: 'zelda-images/bludo.webp',
    hair: 'white hair, fins, or feathers',
    eyes: 'black eyes',
    accessories: ['a beard', 'an eye-patch'],
    other: ['Goron']
  },
  {
    name: 'Kaneli',
    img: 'zelda-images/kaneli.webp',
    hair: 'white hair, fins, or feathers',
    eyes: 'gold eyes',
    accessories: ['a beard'],
    other: ['Rito']
  },
  {
    name: 'Rhoam',
    img: 'zelda-images/rhoam.webp',
    hair: 'white hair, fins, or feathers',
    eyes: 'blue eyes',
    accessories: ['a beard', 'weapons', 'a sword', 'a crown'],
    other: ['Hylian']
  },
  {
    name: 'Impa',
    img: 'zelda-images/impa.webp',
    hair: 'white hair, fins, or feathers',
    eyes: 'black eyes',
    accessories: ['a tattoo', 'hair chopsticks'],
    other: ['Sheikah']
  },
  {
    name: 'Purah',
    img: 'zelda-images/purah.png',
    hair: 'white hair, fins, or feathers',
    eyes: 'brown eyes',
    accessories: ['glasses', 'hair chopsticks'],
    other: ['Sheikah']
  },
  {
    name: 'Robbie',
    img: 'zelda-images/robbie.webp',
    hair: 'white hair, fins, or feathers',
    eyes: 'hidden eyes',
    accessories: ['glasses', 'hair chopsticks'],
    other: ['Sheikah']
  },
  {
    name: 'Hestu',
    img: 'zelda-images/hestu.webp',
    hair: 'green hair, fins, or feathers',
    eyes: 'hidden eyes',
    accessories: ['a musical instrument', 'maracas', 'a bag', 'a beard'],
    other: ['Korok']
  },
  {
    name: 'Kass',
    img: 'zelda-images/kass.webp',
    hair: 'blue hair, fins, or feathers',
    eyes: 'gold eyes',
    accessories: ['a musical instrument'],
    other: ['Rito']
  },
  {
    name: 'Chuchu',
    img: 'zelda-images/chuchu.webp',
    hair: 'no hair, fins, or feathers',
    eyes: 'yellow eyes',
    accessories: [],
    other: ['Monster']
  },
  {
    name: 'Bokoblin',
    img: 'zelda-images/bokoblin.png',
    hair: 'no hair, fins, or feathers',
    eyes: 'yellow eyes',
    accessories: ['horns'],
    other: ['Monster']
  },
  {
    name: 'Moblin',
    img: 'zelda-images/moblin.webp',
    hair: 'no hair, fins, or feathers',
    eyes: 'blue eyes',
    accessories: ['horns'],
    other: ['Monster']
  },
  {
    name: 'Hinox',
    img: 'zelda-images/hinox.webp',
    hair: 'white hair, fins, or feathers',
    eyes: 'yellow eyes',
    accessories: ['horns'],
    other: ['Monster']
  },
  {
    name: 'Lynel',
    img: 'zelda-images/lynel.webp',
    hair: 'red hair, fins, or feathers',
    eyes: 'green eyes',
    accessories: ['horns'],
    other: ['Monster']
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
  console.log('new dropdown item has been selected', `category: ${category}`, `value: ${value}`)

  currentQuestion = {
    category: category,
    value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  console.log('filter button')
  const {category, value} = currentQuestion

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
      // need to define differently than hair and eyes in order to access the values stored in the other and accessories
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
        `Yes, the person has ${value}! Keep all people that have ${value}.`
      )
    } else {
      alert(
        `No, the person doesn't have ${value}! Remove all people that have ${value}.`
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
      `Yes, the person has ${value}! Keep all people that have ${value}.`
    )
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
    alert(
      `No, the person does not have ${value}! Remove all people that have ${value}.`
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
  // remember the confirm() ? 
  // If the player wants to guess, invoke the checkMyGuess function.

  const makeAGuess = confirm(`Want to guess ${personToConfirm}?`)

  if(makeAGuess) {
    console.log ('making a guess');
    checkMyGuess(personToConfirm) //this must go inside of the if statement otherwise checkMyGuess is called regardless of whether or not user confirms
  }
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
  questionSection.style.display = 'none'
  
}

const playAgain = () => {
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  questionSection.style.display = 'flex'
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
