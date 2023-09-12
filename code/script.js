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
    versions: 'owned',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['heartbreak'],
    other: []
  },
  {
    name: 'Mean',
    img: 'images/mean.jpg',
    versions: ['taylorsV', 'owned'],
    erastour: 'surprise',
    cinematic: 'musicvid',
    songtheme: ['heartbreak', 'breakup'],
    other: []
  },
  {
    name: 'Cornelia street',
    img: 'images/corneliastreet.png',
    versions: 'owned',
    erastour: 'surprise',
    cinematic: 'musicvid',
    songtheme: ['heartbreak', 'breakup'],
    other: []
  },
  {
    name: 'The Man',
    img: 'images/THEMAN.png',
    versions: 'owned',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['heartbreak', 'breakup'],
    other: []
  },
  {
    name: 'Look what you made me do',
    img: 'images/LWYMMD.jpg',
    versions: 'stolen',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['heartbreak', 'breakup'],
    other: []
  },
  {
    name: 'Delicate',
    img: 'images/Delicate.png',
    versions: 'stolen',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['heartbreak', 'breakup'],
    other: []
  },
  {
    name: 'Ready for it',
    img: 'images/readyforit.png',
    versions: 'stolen',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['heartbreak', 'breakup'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'Anti-hero',
    img: 'images/antihero.jpg',
    versions: 'owned',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['heartbreak', 'breakup'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'Cruel summer',
    img: 'images/cruelsummer.jpg',
    versions: 'owned',
    erastour: 'setlist',
    cinematic: 'noMusicvideo',
    songtheme: ['heartbreak', 'breakup'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'WANEGBT',
    img: 'images/WANEGBT.jpg',
    versions: 'taylorsV',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['heartbreak', 'breakup'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'You’re on your own kid',
    img: 'images/YOYOK.jpg',
    versions: 'owned',
    erastour: 'surpTwice',
    cinematic: 'noMusicvideo',
    songtheme: ['heartbreak', 'breakup'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'All too well',
    img: 'images/alltoowell.jpg',
    versions: 'taylorsV',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['lifelessons', 'relationship'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'Midnight rain',
    img: 'images/midnightrain.jpg',
    versions: 'owned',
    erastour: 'setlist',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'I bet you think about me ',
    img: 'images/IBYTAM.jpg',
    versions: 'taylorsV',
    erastour: 'surprise',
    cinematic: 'musicvid',
    songtheme: ['lifelessons', 'relationship'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'Fearless',
    img: 'images/fearless.png',
    versions: 'taylorsV',
    erastour: 'setlist',
    cinematic: 'noMusicvideo',
    songtheme: 'relationship',
    other: []
  },
  {
    name: 'Should’ve said no',
    img: 'images/shouldvesaidno.png',
    versions: 'stolen',
    erastour: 'surprise',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Right where you left me',
    img: 'images/RWYLM.jpg',
    versions: 'owned',
    erastour: 'surprise',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Cowboy like me',
    img: 'images/cowboylikeme.jpg',
    versions: 'owned',
    erastour: 'surprise',
    cinematic: 'noMusicvideo',
    songtheme: 'relationship',
    other: []
  },
  {
    name: 'Tolerate it',//!!
    img: 'images/tolerateit.jpg',
    versions: 'owned',
    erastour: 'setlist',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Blank space',
    img: 'images/blankspace.png',
    versions: 'stolen',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Bad blood',
    img: 'images/badblood.jpg',
    versions: 'stolen',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Mirrorball',
    img: 'images/mirrorball.jpg',
    versions: 'owned',
    erastour: 'surprise',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'I know places',
    img: 'images/iknowplaces.jpg',
    versions: 'stolen',
    erastour: 'surprise',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Love story',
    img: 'images/lovestory.png',
    versions: 'taylorsV',
    erastour: 'setlist',
    cinematic: 'musicvid',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Electric touch',
    img: 'images/eletrictouch.jpg',
    versions: 'taylorsV',
    erastour: [],
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: ['fromTheV', 'collaboration']
  },
  {
    name: 'Mad woman',
    img: 'images/madwoman.png',
    versions: 'owned',
    erastour: 'surprise',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Illicit affairs',
    img: 'images/illicitaffair.jpg',
    versions: 'owned',
    erastour: 'setlist',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Maroon',
    img: 'images/maroon.jpg',
    versions: 'owned',
    erastour: 'surpTwice',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Long live',
    img: 'images/longlive.jpg',
    versions: 'taylorsV',
    erastour: ['surprise', 'setlist'],
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
  },
  {
    name: 'Champagne problems',//!!
    img: 'images/champagneproblems.png',
    versions: 'owned',
    erastour: 'setlist',
    cinematic: 'noMusicvideo',
    songtheme: ['lifelessons', 'relationship'],
    other: []
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

//Sakura Tanaka helped me figure out the textForAlert. I couldn't figure it out, but she looked over my code and gave me theese suggestions. I wanted to have the option text appear in the alert and not the option value

// This function should be invoked when you click on 'Find Out' button.


const checkQuestion = () => {
  const { category, value } = currentQuestion
  // Check if currentQuestion is defined before destructuring it. WHY did I add this?
  if (!currentQuestion) {
    alert("Please select a question before checking.");
    return;
  }

  let keep;

  if (category === 'versions' || category === 'erastour') {
    keep = secret && secret[category] === value;
  }
  else if (category === 'other' || category === 'songtheme' || category === 'cinematic') {
    keep = secret && secret[category] && secret[category].includes(value);
  }

  filterCharacters(keep);

  console.log("Category:", category);
  console.log("Secret Object:", secret);
  console.log("Value:", value);
  console.log("Secret[category]:", secret[category]);
}
/*CODE TRIED
  if (category === 'versions' || category === 'erastour') {
    console.log(category, value);
    if (secret[category] === value) //I think this condition checks if the value is exactly the same as secret catergory
    {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
  else if (category === 'cinematic' || category === 'songtheme' || category === 'other') {
    console.log(category, value);
    if (secret[category].includes(value)) ////I think this condition checks if the value is sone of the elements inside the array i think?
    {
      filterCharacters(true);
    }
    else {
      filterCharacters(false);
    }
  }*/

/* THOUGHTS
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
      ? `Correct, the song ${textForAlert}! All songs that fit categoy "${textForAlert}" will be kept.`
      : `Wrong, the song ${textForAlert}. All songs that fit categoy "${textForAlert}" will be removed.`;
  } else if (category === 'songtheme') {
    message = keep
      ? `That's right, the song is about ${textForAlert}! All songs that are about ${textForAlert} will be kept.`
      : `That's wrong, the song is not about ${textForAlert}! All songs that are not about ${textForAlert} will be removed.`;
  } else if (category === 'other') {
    message = keep
      ? `That's right, the song is ${textForAlert}! All songs that fit this category will be kept.`
      : `That's wrong, the song is not ${textForAlert}. All songs that fit this category will be removed.`;
  } else if (category === 'versions') {
    message = keep
      ? `Yes! The song ${textForAlert}! All songs that fit category ${textForAlert} will be kept.`
      : `No! The song is not ${textForAlert}. All songs that are ${textForAlert} will be removed.`;
  } else if (category === 'erastour') {
    message = keep
      ? `Yes! "${textForAlert}" is a correct guess! All songs that fit this category will be kept.`
      : `No! "${textForAlert}" is a wrong guess. All songs that fit this category will be removed.`;
  } else {
    message = keep
      ? `Yes, ${textForAlert} is correct! All ${textForAlert} will be kept.`
      : `No, ${textForAlert} is wrong. All ${textForAlert} will be removed`;
  }

  alert(message);

  // Filtering the characters based on the category and value. 
  //I struggeled with the logic of this part, and where to put it. I think there should be a way to write it to make to code more comact?
  if (category === 'cinematic') {
    charactersInPlay = charactersInPlay.filter((person) => {
      if (person[category]) {
        return person[category].includes(value) === keep;
      }
      return !keep; // Remove characters without the 'cinematic' property if keep is false
    });
  } else if (category === 'songtheme' || category === 'erastour') {
    charactersInPlay = charactersInPlay.filter((person) => (person[category].includes(value) === keep));
  } else if (category === 'versions') {
    charactersInPlay = charactersInPlay.filter((person) => {
      if (person[category]) {
        return person[category] === value === keep;
      }
      return !keep; // Remove characters without the 'versions' property if keep is false
    });
  } else if (category === 'other') {
    charactersInPlay = charactersInPlay.filter((person) => {
      if (person[category]) {
        return person[category].includes(value) === keep;
      }
      return !keep; // Remove characters without the 'other' property if keep is false
    });
  } else {
    // Handle other categories here
  }


  /*CODE TRIED
  if (category === 'cinematic') {
    charactersInPlay = charactersInPlay.filter((person) => (person[category].includes(value) === keep));
  } else if (category === 'songtheme' || category === 'erastour') {
    charactersInPlay = charactersInPlay.filter((person) => (person[category].includes(value) === keep));
  } else if (category === 'versions' || category === 'other') {
    charactersInPlay = charactersInPlay.filter((person) => (person[category] === value) === keep);
  } else {
    // Handle other categories here

  }*/
  console.log("Debugging: 'other' category");
  console.log("Value:", value);
  console.log("Keep:", keep);

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