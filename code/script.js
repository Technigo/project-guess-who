// All the DOM selectors stored as short variables

const board = document.getElementById('board')
//in html: populates the board
const questions = document.getElementById('questions')
//DROPDOWN SELECT ELEMENTS "question" (value and label html)
const restartButton = document.getElementById('restart')
//Reach the restart button
const findOutBtn = document.getElementById("filter");
const playAgainButton = document.getElementById("playAgain");
const winOrLoseText = document.getElementById("winOrLoseText");


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smile']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: [],
    other: ['smoker', 'beard']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: ['smile']
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'blonde',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['smile']
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
    other: ['smile']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'blonde',
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
    other: ['smile']
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
    other: ['smile']
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'red',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker', 'beard']
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
    hair: 'red',
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
    other: ['smile']
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: ['smile']
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'earrings'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['smile']
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'blonde',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['smile']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['earings'],
    other: ['smile']
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'blonde',
    eyes: 'green',
    accessories: [],
    other: ['smile']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['smile', 'beard']
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
let secret //Will be the secret person object (Stores secret person selected in setSecret func.)
let currentQuestion //Will be the current question object 
let charactersInPlay //Will be an array of all the people left in the game 
let personToConfirm;

// Draw the game board 
const generateBoard = () => {

  board.innerHTML = '' //code will also filter the boards (safetyline?)
  charactersInPlay.forEach((person) => {
    //+ adds to the html, does not overwrite it. 
    //it "Grabs" the board element and changing the inner html
    board.innerHTML +=
      //use the information in the array (charactersInPlay) to shoe information about people.
      //${person.name} the value of all the names in array (CHARACTERS)
      `
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
//Math built in js methods (so that we will get a random person every time, if we use 0 it will always be the first person)
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret); //SB
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all of the characters to start with
  charactersInPlay = CHARACTERS
  // Here I can add if anything else should happen when we start the game?


  generateBoard();// Board made visible. 
  setSecret(); //Secret person selected (let secret, const setSecret = () => {)
  console.log("Start function called");
}




// Setting the currentQuestion object when selecting something in the dropdown?
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable (catagory) stores what option group (category) the question belongs to.
  // Variable that stores the actual value of the question we've selected.-->
  const value = questions.options[questions.selectedIndex].value;
  //Careful to not mistake value attribute of the <option> element with text content (or label) of the <option> element on const CHARACTERS.

  currentQuestion = {
    category: category,
    value: value,
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {

  // Check if currentQuestion is defined before destructuring it. WHY did I add this?
  if (!currentQuestion) {
    alert("Please select a question before checking.");
    return;
  }

  const { category, value } = currentQuestion

  keep = true;

  if (category === 'hair' || category === 'eyes') {
    console.log(category, value);
    if (secret[category] === value) //I think this condition checks if the value is exactly the same as secret catergory
    {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
  else if (category === 'accessories' || category === 'other') {
    console.log(category, value);
    if (secret[category].includes(value)) ////I think this condition checks if the value is sone of the elements inside the array i think?
    {
      filterCharacters(true);
    }
    else {
      filterCharacters(false);
    }
  }
}

//Logic: Checks for hair or eyes. If yes then true, if not moves on to accessories and other and checks them. 

/* If I want to add on categorys:
 else if (category === 'accessories' || category === 'other' || category === 'clothes' || category === 'hairtype') 
 
 would it be better to write like this again:
 {
    console.log(category, value);
    if (secret[category].includes(value)) {
      keep = true;
    } else {
      keep = false;
    }
  }
  filterCharacters(keep);

*/



// this should filter the characters and redraw the game board?
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  let message;

  // alert message for different categories.  
  //I originally wanted different messages for each category (its the same now) that is why the code isn't more comact. Not sure if I'll keep it like this.
  if (category === 'accessories') {
    message = keep
      ? `Yes, the person wears ${value}! Keep all people that wear ${value}`
      : `No, the person doesn't wear ${value}! Remove all people that wear ${value}`;
  } else if (category === 'other') {
    message = keep
      ? `Yes, the person wears ${value}! Keep all people that wear ${value}`
      : `No, the person doesn't wear ${value}! Remove all people that wear ${value}`;
  } else if (category === 'hair') {
    message = keep
      ? `Yes, the person has ${value} hair! Keep all people with ${value} hair`
      : `No, the person doesn't have ${value} hair! Remove all people with ${value} hair`;
  } else if (category === 'eyes') {
    message = keep
      ? `Yes, the person has ${value} eyes! Keep all people with ${value} eyes`
      : `No, the person doesn't have ${value} eyes! Remove all people with ${value} eyes`;
  } else {
    message = keep
      ? `Yes, the person has ${value}! Keep all people with ${value}`
      : `No, the person doesn't have ${value}! Remove all people with ${value}`;
  }

  alert(message);

  // Filtering the characters based on the category and value. 
  //I struggeled with the logic of this part, and where to put it. I think there should be a way to write it to make to code more comact?
  if (category === 'accessories') {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value) === keep);
  } else if (category === 'other') {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value) === keep);
  } else if (category === 'hair' || category === 'eyes') {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value === keep);
  } else {
    // Handle other categories here
  }

  generateBoard(); // Updates the game-board with filtered characters. I couln't make it work without this. 
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  const confirmGuess = confirm(`Are you sure you want to guess ${personToConfirm}?`);
  if (confirmGuess) checkMyGuess(personToConfirm);
  //else ? Should something else happen if they do not confirm?
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `That's correct!!! You won! Congratulations!`;
  } else {
    personToConfirm !== secret.name;
    winOrLoseText.innerHTML = `Sorry, thats wrong! You lost...`;
  }
  winOrLose.style.display = "flex";
  //textMessage ='';   winOrLoseText.textMessage =
  //instead?

}



/*const playAgainHandler = () => {
  console.log("Play again button clicked");
  // Add logic to this function to perform any actions needed to start a new game (start()) or other actions.
  start();
};*/
// DOES NOT WORK, BUT NO ERROR IN CONSOLE LOG

// All the event listeners
//playAgainButton.addEventListener("click", start);
//DOES NOT WORK YET
playAgainButton.addEventListener('click', start => {
  console.log("Restart button clicked");
  start(); // Call the start function
});
//DOES NOT WORK

questions.addEventListener("change", selectQuestion); //?
//play again? why did I put this here? selects element dropdown??
findOutBtn.addEventListener("click", checkQuestion);
//checkQuestion function should now be invoked, checs if guess is correct
window.addEventListener('load', start);
//tells browser to wait for the entire web page, including all its resources, is loaded? not sure if i need this but board would not load
restartButton.addEventListener('click', () => {
  console.log("Restart button clicked");
  start(); // Call the start function
});
