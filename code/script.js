
// Well, I hade troubble whith the board dissappering, 
// so I hade to work from bottom and up to see what the problem was.
// A lot of text is commented out to keep the board visual. 
// I did not at all comprihend everything but learnd a lot in the process. 
// Putted a little effort into the CSS and made some extra buttons for fun. 
// #micdrop  



// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('findout')
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

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
  //  Here we're setting charactersInPlay array to be all the characters to start with
   charactersInPlay = CHARACTERS
   winOrLose.style.display ='none'
   board.style.display = 'flex'
   setSecret ()
   generateBoard ()

  // What else should happen when we start the game?
  // How to play? Rules? 
}

const selectQuestion = () => {  // setting the currentQuestion object when you select something in the dropdown
   const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
   const value = questions.value
 
//   currentQuestion = {
//   category: category,
//   value: value,
// }
 }


    /* if (category === 'hair') {
        currentQuestion = {
        category: category,
        value: value,
          attribute: 'hair',
       }

   } 
   
     else if (category === 'eyes') {
         currentQuestion = {
         category: category,
         value: value,
           attribute: 'eyes',
       }
     } 
   
      else if (category === 'accessories') {
           currentQuestion = {
           category: category,
           value: true,
             attribute: value,
       } }
     
   
     else  {  //(category === 'other') 
      currentQuestion = {
           category: category,
           value: true,
           attribute: value,
        }
     }
*/
  









 // This function should be invoked when you click on 'Find Out' button.
 const checkQuestion = () => {
   const { category, value } = currentQuestion;
   let keep = true

   // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
   // See if we should keep or remove people based on that
   // Then invoke filterCharacters
   if (category === 'hair' || category === 'eyes') {
keep = value === secret [category];
      } 
   else if (category === 'accessories' || category === 'other') {
    keep = secret [category].includes (value);

      }
filterCharacters (keep);
     }






 // It'll filter the characters array and redraw the game board.
//  This is filter

const filterCharacters = (keep) => {
    const { category, value } = currentQuestion
    // Show the correct alert message for different categories
    if (category === 'accessories') {
          if (keep) {
            charactersInPlay = charactersInPlay.filter ((person) => person [category].includes (value))
              alert(
             `Yes, the person wears ${value}! Keep all people that wears ${value}`
             )
          }else {
            charactersInPlay = charactersInPlay.filter ((person) => !person [category].includes (value))
             alert(
             `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
              )
             }
  
   }  else if (category === 'other') {
           if (keep) {
            charactersInPlay = charactersInPlay.filter ((person) => person [category].includes (value))
              alert (
             `Yes, the person is a smoker! Keep all smokers` ) }
           else {
            charactersInPlay = charactersInPlay.filter ((person) => !person [category].includes (value))
              alert (
             `No, the person is not a smoker! Remove all smokers`
              )}       // Similar to the one above
             } 
    
  
  
    else if (category === 'hair') {
      if (keep) {
        charactersInPlay = charactersInPlay.filter ((person) => person [category] === value)
        alert (
          `Yes, the persons hair is ${value} `
        )
        // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      } else {
        charactersInPlay = charactersInPlay.filter ((person) => person [category] !== (value))
        alert (
          ` No, the persons hair is not ${value}`
        ) }
        // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      } else {
        if (keep) {
        charactersInPlay = charactersInPlay.filter ((person) => person [category] === value)
        alert (
          ` Yes! The persons eyes are ${value} `
        )
      } else {
        charactersInPlay = charactersInPlay.filter ((person) => person [category] === value)
        alert (
          ` No, the person doesn't have ${value} eyes`
        )
      }
    }

  }



  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.
 

 const filteredCharacters = CHARACTERS.filter( (singleCharacter) => {
 if (singleCharacter.hair === 'black') {
   return singleCharacter;
 }  
});

filteredCharacters.forEach((charachter)=>  {
charachter.hair = 'yellow'  
})


// when clicking guess, the player first have to confirm that they want to make a guess.


const guess = (personToConfirm) => {      // store the interaction from the player in a variable.

  let confirmation = confirm (`Are you sure that ${personToConfirm} is the secret person? `) // remember the confirm() ?
  if (confirmation === true)
{
  checkMyGuess (personToConfirm)
}   
}
// If the player wants to guess, invoke the checkMyGuess function.
// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {

  if (personToCheck === secret.name) {    // 1. Check if the personToCheck is the same as the secret person's name
    winOrLoseText.innerHTML (`You are a WINNER!`)
 } else {
    winOrLoseText.innerHTML (`I'm sorry! The secret person is ${secret.name}`)// 2. Set a Message to show in the win or lose section accordingly
 }
  
  
  winOrLose.style.display = 'flex' // 3. Show the win or lose section
  board.style.display = 'none' // 4. Hide the game board
}







// How many questions did you need until you guessed right? Click up. 
// Save yore score. Play again. Click up or down to register yor new score.  



//  let saveEl = document.getElementById("save-el")
//  let countEl = document.getElementById("count-el")



 let count=0
 function increment()
 {
 count+=1
 countEl.innerText = count
 }

 function decrement()
 {
     count=count-1
     countEl.innerText=count
 }

 function save()
 {
 let countStr = count + " - "
     saveEl.innerText += countStr
 }


// Invokes the start function when website is loaded
 start()

// All the event listeners
restartButton.addEventListener('click', start)
 questions.addEventListener('change', selectQuestion)
 board.addEventListener('click')
 filterBtn.addEventListener('click', filterCharacters)
