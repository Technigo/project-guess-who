// All the DOM selectors stored as short variables
// targets html <main> to display cards:
const board = document.getElementById('board')
// targets html <select> including all options:
const questions = document.getElementById('questions')
// targets "restart" <button> on <aside> to reload the whole board:
const restartButton = document.getElementById('restart')
// targets "Find out" <button> to compare user's card with secret's:
const findOutButton = document.getElementById('filter')
// targets <aside> for display purposes:
const asideQuestionSection = document.getElementById('question-section')
// targets board <section> for display purposes:
const boardWrapper = document.getElementById('board-wrapper')
// targets win/lose <section> for display purposes:
const winOrLoseWrapper = document.getElementById('winOrLose')
// targets <p> for win/lose message:
const winOrLoseText = document.getElementById('winOrLoseText')
//targets playagain <button> to reload page after guess reveal:
const playAgainButton = document.getElementById('play-again')

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
let secret; //randomly selected person card to be guessed by user
let currentQuestion; //stores user's selected option and corresponding category
let displayedCharacters; // characters displayed on the board

/* ----------------------Step 1-----------------------*/
// Drawing of the game board (generated under main #board)

const generateBoard = () => {
    board.innerHTML = ''
    const shuffle = new Audio('./assets/shuffle.wav');
    shuffle.play();
    displayedCharacters.forEach((person) => {
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
    });
};
/* div.guess is on display:none -> display:flex on hover,
onclick method already in html, no use for AddEventListener, passing the variable person.name to function guess.  No need for id as multiple examples of it will be created( or add a personalised id to be generated several times)*/

/*-----------------------Step2----------------------------*/
// Function for randomly selecting the secret person from the characters array and setting it as the value of the variable "secret"
const setSecretCard = () => {
    secret = displayedCharacters[Math.floor(Math.random() * displayedCharacters.length)];
};

// Function for starting (and restarting) the game
const start = () => {
    // Here we're setting displayedCharacters array to be ALL the characters to start with
    displayedCharacters = CHARACTERS;
    // What else should happen when we start the game?
    generateBoard();
    setSecretCard();
    selectQuestion();//2nd way of invoking this function to bypass bug for "brown hair" option without any change event caught by the eventlistener change

};

/*-------------------------Step3-------------------------*/
// setting the currentQuestion object when you select something in the dropdown

const selectQuestion = () => {

    // Variable storing what option group (category) the question belongs to.
    const category = questions.options[questions.selectedIndex].parentNode.label;
    /* targets the html select through DOM with "questions" and depending on the selected option "options[questions.selectedIndex]", targets in return the label of the parentNode (parentNode.label) i.e. optgroup
    */

    // Variable storing the actual value of the question we've selected.
    const value = questions.options[questions.selectedIndex].value;

    // currentQuestion is a destructured object variable storing values "category" and"value"
    currentQuestion = {
        category: category,
        value: value
    };
};

/*---------------------------Step4----------------------*/
// Invoked function when'Find Out' button is clicked 
const checkQuestion = () => {

    const { category, value } = currentQuestion;

    // Comparing the currentQuestion details with the secret person details in a 2 different ways based on category (i.e. hair/eyes or accessories/others).
    // Determines whether to keep or remove people based on that
    //Determines when we need to keep the cards with selected option
    let keepingCards;
    if (category === 'hair' || category === 'eyes') {// here, both literal values can be accessed with bracket or dot notation
        if (secret[category] === currentQuestion.value) {
            keepingCards = true //when the secret's value matches the player's selected value
        } else {
            keepingsCards = false//when the secret's value doesn't match the player's
        }
    } else if (category === 'accessories' || category === 'other') {//the key's values are stored in an array thus accessed through array method includes() which has a Boolean value
        if (secret[category].includes(currentQuestion.value)) {
            keepingCards = true // when the secret's value matches the selected value
        } else {
            keepingCards = false // when the secret's value doesn't match the selected one
        }
    }
    // Invoking filterCharacters
    filterCharacters(keepingCards);

};
/*---------------------------step 5-------------------------*/
// Function filtering the characters array and redrawing the game board.
const filterCharacters = (keepingCards) => {
    const { category, value } = currentQuestion
    // Show the correct alert message for different categories
    //if the category selected is accessories
    if (category === 'accessories') {
        //the secret's value matches the player's- message to keep the cards
        if (keepingsCards) {
            alert(
                `Yes, the person wears ${value}! Keep all people that wear ${value}`
            );

            //loops through the people in the array in search for corresponding selected category and checks if its value is included (Boolean:true) to keep it creating a new filtered array
            displayedCharacters = displayedCharacters.filter((person) =>
                person[category].includes(value));

        } else {//message to discard the cards as accessories do not match
            alert(
                `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
            );
            //loops through the people in the array in search for corresponding selected category and checks if its value is excluded (Boolean=false)
            displayedCharacters = displayedCharacters.filter((person) =>
                !person[category].includes(value));
        }
        //if category regards smoking habits
    } else if (category === 'other') {
        if (keepingCards) { //message to keep cards as secret's value matches user's value
            alert(
                `Yes, the person is a ${value}! Keep all people that are a ${value}`
            );
            displayedCharacters = displayedCharacters.filter((person) =>
                person[category].includes(value));//loops through the people in the array in search for corresponding selected category and checks if its value is included to keep it creating a new filtered array
        } else { //message to discard cards as secret's value doesn't match user's
            alert(
                `No, the person is not a ${value}! Remove all people that are not a ${value}`
            );
            displayedCharacters = displayedCharacters.filter((person) =>
                !person[category].includes(value));
        }
        //if category selected is either hair or eye colour
    } else {
        if (keepingCards) { //msg to keep cards as secret's value matches user's value
            alert(
                `Yes, the person has ${value} ${category}! Keep all people that have ${value} ${category}`
            );
            displayedCharacters = displayedCharacters.filter((person) =>
                person[category] === value);// loops through the people in the array in search for corresponding selected category and checks its value to keep it only if it matches the user's selected value creating a new filtered array
        } else {// msg to discard cards as secret's value doesn't match user's
            alert(
                `No, the person doesn't have ${value} ${category}! Remove all people that have ${value} ${category}`
            );
            displayedCharacters = displayedCharacters.filter((person) =>
                person[category] !== value); //loops through the people in the array in search for corresponding selected category and checks its value to keep it only if its value DOES NOT match the user's selected value creating a new array (if it matches, it is discarded)
        };
    };

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
    generateBoard();
}
/* --------------------------step 6--------------------------*/
// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
    // store the interaction from the player in a variable.
    // remember the confirm() ?
    // confirm() method is boolean and comes with 2 buttons in prompt
    const guessForward = confirm(`Are you sure you want to take a guess on ${personToConfirm}?`)
    // If the player wants to guess, invoke the checkMyGuess function.
    if (guessForward) {
        checkMyGuess(personToConfirm);
    } else {
        alert(`Cancelled guess move.`)
    };
};


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
    // 1. Check if the personToCheck is the same as the secret person's name
    if (personToCheck === secret.name) {
        winOrLoseText.innerHTML = `
    Yipee!  Congratulations! 🎊 You have won!
    `
        const winSound = new Audio('./assets/win.wav');
        winSound.play();
    } else {
        winOrLoseText.innerHTML = `
    Nopes!  Wrong guess! The secret card was ${secret.name}. 😒 Game Over!
      `
        const loseSound = new Audio('./assets/lose.wav')
        loseSound.play();
    }
    // 2. Set a Message to show in the win or lose section accordingly
    // 3. Show the win or lose section
    winOrLoseWrapper.style.display = "flex";
    // 4. Hide the game board
    asideQuestionSection.style.display = "none";
    boardWrapper.style.display = "none";
};

/*-----------------Bonus Step-----------------------*/
//Restarting function to play again
const restartGame = () => {
    // Hide win or lose section
    winOrLoseWrapper.style.display = "none";
    // Restore the game board
    asideQuestionSection.style.display = "flex";
    boardWrapper.style.display = "flex";
    start();
}

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion);
playAgainButton.addEventListener('click', restartGame)

