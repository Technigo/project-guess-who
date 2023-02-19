//******************************************** */
//******************************************** */



//This code declares and initializes several variables using the getElementById 
//method of the document object in JavaScript.

//document represents the web page as a document object model (DOM), 
//and the getElementById method is used to access an HTML element on the page using its unique identifier (ID).

//The variables declared are:

//board: This variable is assigned the HTML element with an ID of "board".
//questions: This variable is assigned the HTML element with an ID of "questions".
//restartButton: This variable is assigned the HTML element with an ID of "restart".
//winOrLose: This variable is assigned the HTML element with an ID of "winOrLose".
//winOrLoseText: This variable is assigned the HTML element with an ID of "winOrLoseText".
//playAgainButton: This variable is assigned the HTML element with an ID of "playAgain".
//filterButton: This variable is assigned the HTML element with an ID of "filter".
//Once these variables are assigned, they can be used to manipulate or access the corresponding HTML elements on the page. For example, if we wanted to add an event listener to the restartButton element, we could do so using restartButton.addEventListener().


// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainButton = document.getElementById('playAgain')
const filterButton = document.getElementById('filter')


//******************************* */
//******************************************** */



// CHARACTERS CHARACTERS CHARACTERS
// Array with all the characters, as objects
const CHARACTERS = [

  {
    name: 'PRTHMU',
    img: 'images/prthmu.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: false,
    hat: false,
    "green skin": true,
  },

  {
    name: 'Fuki',
    img: 'images/fuki.png',
    eyes: 'two eyes',
    teeth: 'many teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Neuro',
    img: 'images/neuro.png',
    eyes: 'two eyes',
    teeth: 'many teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Killi',
    img: 'images/killi.png',
    eyes: 'no eyes',
    teeth: 'less than five teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Kyklo',
    img: 'images/kyklo.png',
    eyes: 'one eye',
    teeth: 'less than five teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Polo',
    img: 'images/polo.png',
    eyes: 'one eye',
    teeth: 'no teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Meta',
    img: 'images/meta.png',
    eyes: 'two eyes',
    teeth: 'many teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'El Hefe',
    img: 'images/elhefe.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: false,
    hat: true,
    "green skin": true,
  },

  {
    name: 'Plöppö',
    img: 'images/ploppo.png',
    eyes: 'one eye',
    teeth: 'less than five teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },

  {
    name: 'Melo',
    img: 'images/melo.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: false,
    hat: true,
    "green skin": true,
  },
  {
    name: 'Sielu',
    img: 'images/sielu.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: false,
    hat: false,
    "green skin": true,
  },

  {
    name: 'Maibeline',
    img: 'images/maibeline.png',
    eyes: 'two eyes',
    teeth: 'many teeth',
    mouth: true,
    hat: true,
    "green skin": true,
  },

  {
    name: 'Seppo',
    img: 'images/seppo.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Haamu',
    img: 'images/haamu.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: false,
    hat: false,
    "green skin": false,
  },
  {
    name: 'Mute',
    img: 'images/mute.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: false,
    hat: false,
    "green skin": true,
  },

  {
    name: 'Esso',
    img: 'images/esso.png',
    eyes: 'two eyes',
    teeth: 'many teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Sugar',
    img: 'images/sugar.png',
    eyes: 'two eyes',
    teeth: 'less than five teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Paavo',
    img: 'images/paavo.png',
    eyes: 'two eyes',
    teeth: 'many teeth',
    mouth: true,
    hat: true,
    "green skin": true,
  },

  {
    name: 'Kyylä',
    img: 'images/kyyla.png',
    eyes: 'many eyes',
    teeth: 'many teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },

  {
    name: 'Doom',
    img: 'images/doom.png',
    eyes: 'two eyes',
    teeth: 'less than five teeth',
    mouth: false,
    hat: true,
    "green skin": false,
  },

  {
    name: 'America',
    img: 'images/america.png',
    eyes: 'two eyes',
    teeth: 'many teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  {
    name: 'Häppi',
    img: 'images/happi.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },



  {
    name: 'Hilma',
    img: 'images/hilma.png',
    eyes: 'two eyes',
    teeth: 'less than five teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },

  {
    name: 'Pii Paa',
    img: 'images/piipaa.png',
    eyes: 'one eye',
    teeth: 'no teeth',
    mouth: true,
    hat: false,
    "green skin": true,
  },
  
  {
    name: 'Pikku',
    img: 'images/pikku.png',
    eyes: 'two eyes',
    teeth: 'no teeth',
    mouth: false,
    hat: false,
    "green skin": false,
  },

]







//OWN NOTES: CHARACTERS.forEach(test => console.log(test));  


//********************** */
//******************************************** */

// GLOBAL VARIABLES GLOBAL VARIABLES
//For examplle secret is the person we are guessing. It's declared here, 
// but we are giving a random value for it everytime we run the code with const setSecret...
//currentQuestion linked with const checkQuestion
//charactersInPlay declared later like this  charactersInPlay = CHARACTERS
// let secret  // Will be the secret person object
// let currentQuestion  // Will be current question object
//let charactersInPlay // Will be an array of all the characters still left in the game.
let secret, currentQuestion, charactersInPlay


//****************************************** */
//******************************************** */


// CHARACTER IN PLAY TO THE BOARD   CHARACTER IN PLAY TO THE BOARD
//go through every charactesInPlay and place them on board via innerHTML property (<-- is property right word?)
   //section in below explains how to place them


   //This is a function named generateBoard, which generates the game board 
   //based on the current charactersInPlay array.

   //The function starts by clearing the content of the board element using board.
   //innerHTML = ''. This ensures that any previously generated cards are removed before the new ones are added.
   
   //Next, the function iterates over each object in the charactersInPlay array using the forEach method.
   //For each object, the function creates a new HTML element with the class card and populates it with 
   //an image of the character and a button to make a guess.
   
   //The HTML elements are created using template literals, which allow the dynamic insertion of variable values 
   //into a string. The person object properties (img and name) are inserted using ${} syntax.
   
   //The onclick attribute of the button element calls a function named guess, passing the character's name as a parameter.
   
   //Finally, the new HTML element is added to the board element using the += operator to append the generated HTML to the existing content of board.innerHTML.
   
  
   


  //******************************************** */
  //******************************************** */




   
   
//The generateBoard function generates a set of HTML elements for each 
//character in charactersInPlay and adds them to the board element on the web page.  


const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML +=  `
     <div class="card"> 
     <img src=${person.img} alt=${person.name}>
     <div class="guess">
       <span>${person.name}?</span>
       <button class="filled-button-guess small" onclick="guess('${person.name}')">CATCH IT</button>
     </div>
   </div>
 `
})
}

//******************************************** */
//******************************************** */


// place characters via css styled (card) html:
//<p> text is using name onject from the CHARACTERS array

// NOTE TO SELF: Addition assignment (+=) for example let a = 'hello';
// NOTE TO SELF: console.log(a += ' world');  --> Expected output: "hello world"




//css class "card" is about style of every single card in the game"
//board --> css game board describes how wide the game board should be
// forEach going through every characters in play.
// and with the help of board.innerHTML determines
// to show name and image for every person
// <span> part showing a overlay text/button menu where you can click to guess a player lelft in game.
 
//************************
//******************************************** */


// SECRET SECRET SECRET

// Randomly set a secret person
// Select a person (randomly) from the characters array 
//...and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}
// Math.random giving random numbers between 0 and 1.
// The random number will be multiplied by the ammount of the characters in play --> charactersInPlay.length, [] "to reach" the index of the array.
// Math.floor rounds desimals to whole numbers
//************************ */



//******************************************** */
//************************************* */


//GUESS GUESS GUESS//


// when clicking guess, you first have to confirm that you want to make a guess
const guess = (suspect) => {
  const makeAGuess = confirm(`Are you sure ${suspect} ate my cookies?`)

  if (makeAGuess) {
    checkMyGuess(suspect)
  }
}

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.





//******************************************** */
//******************************************** */




//CHECK MY GUESS     CHECK MY GUESS   CHECK MY GUESS


// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name) {
   winOrLoseText.innerHTML = `WOW!<br>You catched the cookie monster!!!` 
  } else {
    winOrLoseText.innerHTML = `Oh no!<br>You guessed wrong.<br>Game over! <span role="img" aria-label="angry">😤</span>`
    }
    winOrLose.style.display = 'flex'
    board.style.display = 'none'
  }



//******************************************** */
//******************************************** */


 // SELECT QUESTION FROM THE DROPDOWN MENU 

// setting the currentQuestion object when you select something in the dropdown
// Notice that questions is a DOM selector, declared in the beginning of the code


//the selectQuestion function retrieves the selected question and category from the dropdown menu,
//and creates a new currentQuestion object based on the selected values. 
//The currentQuestion object is used later in the game to filter the characters based on their attributes.

const selectQuestion = () => {
  const value = questions.value
  const category = questions.options[questions.selectedIndex].parentNode.label

  if (category === 'eyes') {
    currentQuestion = {
      attribute: 'eyes',
      value: value,
      category: category,
    }
  } else if (category === 'teeth') {
    currentQuestion = {
      attribute: 'teeth',
      value: value,
      category: category,
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  } else {
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
}


//This is a function named selectQuestion that is called 
//when the user selects a question from the dropdown menu with an ID of "questions".

// The function retrieves the selected value from the dropdown menu 
//using questions.value, which returns the value attribute of the selected option.

//The function also retrieves the label of the option group that contains 
//the selected option using questions.options[questions.selectedIndex].parentNode.label.

//The function then uses a series of conditional statements (if-else) to create 
//a new currentQuestion object based on the selected category and value. 
//The currentQuestion object has three properties: attribute, value, and category.




//******************************************** */
//******************************************** */




// This function should be invoked when you click on 'Find Out'.
//checkQuestion function determines whether the current question helps eliminate
// some of the characters in the game by comparing the selected value to 
//the secret attribute of the secret character. 
//It then calls the filterCharacters function to update the charactersInPlay array
//based on the result of the comparison.




const checkQuestion = () => {
  const keep = currentQuestion.value === secret[currentQuestion.attribute]

  filterCharacters(keep)


}


//This is a function named checkQuestion that is called when the user clicks 
//the "Find Out" button to check if their selected question helps eliminate some of the characters from the game.

//The function first compares the value of the current question (as set by the selectQuestion function)
// to the secret attribute of the secret character. If the values match, 
//the keep variable is set to true; otherwise, keep is set to false.

//The filterCharacters function is then called with the keep value as an argument. 
//The filterCharacters function updates the charactersInPlay array 
//based on the keep value, eliminating characters that do not match 
//the current question and keeping those that do.


//******************************************** */
//******************************************** */



// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { attribute, category, value } = currentQuestion

  // Show the correct alert message
  if (category === 'other') {
    if (keep) {
      alert(
        `Yes, that mofo has ${attribute}! Keep all that have ${attribute}.`
      )
    } else {
      alert(
        `No, that mofo doesn't have ${attribute}! Remove all that have ${attribute}.`
      )
    }
  } else if (category === 'teeth') {
    if (keep) {
      alert(
        `Yes, that mofo has ${value}! Keep all that have ${value}.`
      )
    } else {
      alert(
        `Nope! Remove all that have ${value}.`
      )
    }
  } else {
    if (keep) {
      alert(
        `That mofo has ${value}! Keep all that have ${value}.`
      )
    } else {
      alert(
        `Nope! Remove all that have ${value}.`
      )
    }
  }


  //******************************************** */
  //******************************************** */




 //***** FILTER *****************//

// Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  // for accessories and other
  //NOTE TO SELF: IF I WOUDLD HAVE KEPT THE CHARACTER OBJECTS LIKE THIS: accessories:
  //NOTE TO SELF: ['glasses', 'hat'],other: ['smoker'], THEN I WOULLD HAVE USED THING BELOW:
  //NOTE TO SELF: charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  

  // Invoke a function to redraw the board with the remaining people.
  // Notice that board is a DOM selector, declared in the beginning of the code

    // filter to keep or remove
    if (keep) {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] === value
      )
    } else {
      charactersInPlay = charactersInPlay.filter(
        (person) => person[attribute] !== value
      )
    }

    charactersInPlay
    generateBoard()
  }


  //This function called filterCharacters takes a boolean parameter called keep.
  //It also references a variable called currentQuestion that presumably contains 
  //information about the current question being asked in the game.

  //The purpose of the filterCharacters function is to filter an array of characters
  //based on the information in currentQuestion and the value of the keep parameter.
  //If keep is true, the function will keep only the characters that match the specified 
  //attribute or value, and if keep is false, it will remove 
  //all characters that match the specified attribute or value.
  
  //The function also displays an alert message depending on the category of the current 
  //question and the value of keep. If the category is "other", the alert will mention 
  //the attribute that should be kept or removed. 
  //If the category is "teeth", the alert will mention the specific value of teeth that should be kept or removed. 
  //If the category is anything else, the alert will mention the specific value that should be kept or removed.



//*********************************** */
//************************************* */



// This is the function to start/restart the game
//the start function ensures that the game board is set up correctly and ready for the user to play.

const start = () => {
  charactersInPlay = CHARACTERS // all the original characters appears
  winOrLose.style.display = 'none' // hide win/lose screen
  board.style.display = 'flex' // to make game board visible, order with flex. 
  setSecret() // set new secret, aka secret person, we are guessing.
  generateBoard() // make new game board with all the people.
}


//This function called start that initializes the game board and starts a new game round.
//The function performs several tasks:

//1. It sets the global variable charactersInPlay to the original CHARACTERS array.
//This array contains information about all the characters that can appear in the game.

// 2. It hides the win/lose screen by setting its display property to 'none'.
//This allows the game board to be visible to the user.

// 3. It shows the game board by setting its display property to 'flex'.
//This ensures that the game board will be visible and the user can interact with it.

// 4. It calls the setSecret function, which sets a new secret person that the user will try to guess.

// 5. It calls the generateBoard function, which creates a new game board with all the people in the charactersInPlay array.
//This game board will display images and names of the characters that the user can interact with and use to make their guess.



//************************************* */
//************************************* */



// Invokes the start function when website is loaded
start()

// All the event listeners
// Notice that restartButton is a DOM selector, declared in the beginning of the code
restartButton.addEventListener('click', start)
//NOTE TO SELF: This part is not written like this restartButton.addEventListener('click', start())
// NOTE TO SELF: Because start() would execute the code right away.
playAgainButton.addEventListener('click', start)
filterButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion)



//************************************* */
//************************************* */
//peki//

