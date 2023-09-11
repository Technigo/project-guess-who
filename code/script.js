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
const winOrLose = document.getElementById('winOrLose');


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'You need to calm down',
    img: 'images/YNTCD.jpeg',
    versions: 'new',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'Mean',
    img: 'images/mean.jpg',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'Cornelia street',
    img: 'images/corneliastreet.png',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'The Man',
    img: 'images/THEMAN.png',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'Look what you made me do',
    img: 'images/LWYMMD.jpg',
    versions: 'taylors',
    erastour: 'setlist',
    cinematic: 'musicviideo',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'Delicate',
    img: 'images/Delicate.png',
    versions: 'stolen',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'Ready for it',
    img: 'images/readyforit.png',
    versions: 'new',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'Anti-hero',
    img: 'images/antihero.jpg',
    versions: 'taylors',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'Cruel summer',
    img: 'images/cruelsummer.jpg',
    versions: 'orange',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'WANEGBT',
    img: 'images/WANEGBT.jpg',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'You’re on your own kid',
    img: 'images/YOYOK.jpg',
    versions: 'stolen',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['hearthbreak', 'breakup']
  },
  {
    name: 'All too well',
    img: 'images/alltoowell.jpg',
    versions: 'stolen',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship'],
  },
  {
    name: 'Midnight rain',
    img: 'images/midnightrain.jpg',
    versions: 'stolen',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'I bet you think about me ',
    img: 'images/IBYTAM.jpg',
    versions: 'new',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Fearless',
    img: 'images/fearless.png',
    versions: 'stolen',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Should’ve said no',
    img: 'images/shouldvesaidno.png',
    versions: 'new',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Right where you left me',
    img: 'images/RWYLM.jpg',
    versions: 'new',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Cowboy like me',
    img: 'images/cowboylikeme.jpg',
    versions: 'new',
    erastour: 'setlist',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Tolerate it',//!!
    img: 'images/tolerateit.jpg',
    versions: 'stolen',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Blank space',
    img: 'images/blankspace.png',
    versions: 'taylors',
    erastour: 'surprise',
    cinematic: 'music video',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Bad blood',
    img: 'images/badblood.jpg',
    versions: 'taylors',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Mirrorball',
    img: 'images/mirrorball.jpg',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'I know places',
    img: 'images/iknowplaces.jpg',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Love story',
    img: 'images/lovestory.png',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Electric touch',
    img: 'images/eletrictouch.jpg',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Mad woman',
    img: 'images/madwoman.png',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Illicit affairs',
    img: 'images/illicitaffair.jpg',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Maroon',
    img: 'images/maroon.jpg',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Long live',
    img: 'images/longlive.jpg',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
  {
    name: 'Champagne problems',//!!
    img: 'images/champagneproblems.png',
    versions: 'new',
    erastour: 'surprise',
    cinematic: 'no musicvideo',
    songtheme: ['lifelessons', 'relationship']
  },
]

// Global variables
let secret //Will be the secret person object (Stores secret person selected in setSecret func.)
let currentQuestion //Will be the current question object 
let charactersInPlay //Will be an array of all the people left in the game 
let personToConfirm;
let textForAlert//S

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
  console.log(secret);
}


// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all of the characters to start with
  charactersInPlay = CHARACTERS
  // Here I can add if anything else should happen when we start the game?
  winOrLose.style.display = 'none'; //Got help with this during demo from the strawberry team :)
  setSecret(); //Secret person selected (let secret, const setSecret = () => {)
  generateBoard();// Board made visible. 
  console.log("Start function called");
}


// This variable (catagory) stores what option group (category) the question belongs to.
// Variable that stores the actual value of the question we've selected.-->
//Careful to not mistake value attribute of the <option> element with text content (or label) of the <option> element on const CHARACTERS.
// Setting the currentQuestion object when selecting something in the dropdown?
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const value = questions.options[questions.selectedIndex].value//S
  textForAlert = questions.options[questions.selectedIndex].text;//S


  currentQuestion = {
    category: category,
    value: value,
    textForAlert: textForAlert, //S
  }
}

//Sakura Tanaka helped me figure out the textForAlert. I couldn't figure it out, but she looked over my code and gave me theese suggestions. 

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {

  // Check if currentQuestion is defined before destructuring it. WHY did I add this?
  if (!currentQuestion) {
    alert("Please select a question before checking.");
    return;
  }

  const { category, value } = currentQuestion

  keep = true;

  if (category === 'versions' || category === 'erastour') {
    console.log(category, value);
    if (secret[category] === value) //I think this condition checks if the value is exactly the same as secret catergory
    {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
  else if (category === 'cinematic' || category === 'songtheme') {
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
 
 would it be better to write like this again, easier for me to understand?:
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
  const { category, value, textForAlert } = currentQuestion;//S
  //const { category, value } = currentQuestion;
  let message;



  // alert message for different categories.  
  //I originally wanted different messages for each category (its the same now) that is why the code isn't more comact. Not sure if I'll keep it like this.
  if (category === 'cinematic') {
    message = keep
      ? `Yes, the person wears ${textForAlert}! Keep all people that wear ${textForAlert}`
      : `No, the person doesn't wear ${textForAlert}! Remove all people that wear ${textForAlert}`;
  } else if (category === 'songtheme') {
    message = keep
      ? `Yes, the person wears ${textForAlert}! Keep all people that wear ${textForAlert}`
      : `No, the person doesn't wear ${textForAlert}! Remove all people that wear ${textForAlert}`;
  } else if (category === 'versions') {
    message = keep
      ? `Yes, the person has ${textForAlert} hair! Keep all people with ${textForAlert} hair`
      : `No, the person doesn't have ${textForAlert} hair! Remove all people with ${textForAlert} hair`;
  } else if (category === 'erastour') {
    message = keep
      ? `Yes, the person has ${textForAlert} eyes! Keep all people with ${textForAlert} eyes`
      : `No, the person doesn't have ${textForAlert} eyes! Remove all people with ${textForAlert} eyes`;
  } else {
    message = keep
      ? `Yes, the person has ${textForAlert}! Keep all people with ${textForAlert}`
      : `No, the person doesn't have ${textForAlert}! Remove all people with ${textForAlert}`;
  }

  alert(message);

  // Filtering the characters based on the category and value. 
  //I struggeled with the logic of this part, and where to put it. I think there should be a way to write it to make to code more comact?
  if (category === 'cinematic') {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value) === keep);
  } else if (category === 'songtheme') {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value) === keep);
  } else if (category === 'versions' || category === 'erastour') {
    charactersInPlay = charactersInPlay.filter((person) => person[category] === value === keep);
  } else {
    // Handle other categories here
  }

  generateBoard();  //Updates the game-board with filtered characters. I couln't make it work without this. 
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
playAgainButton.addEventListener('click', () => {
  console.log("Restart button clicked");
  start(); // Call the start function //showboard function. 
});