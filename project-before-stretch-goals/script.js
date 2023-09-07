// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const playAgainButton = document.getElementById('playAgain');
const winOrLose = document.querySelector('.win-or-lose-wrapper');
const winOrLoseText = document.getElementById('winOrLoseText');

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
let secret;
let currentQuestion;
let charactersInPlay;

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
    });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
    secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function to start (and restart) the game
const start = () => {
    // Here we're setting charactersInPlay array to be all the characters to start with
    charactersInPlay = CHARACTERS;
    // What else should happen when we start the game?
    generateBoard();
    setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
    // This variable stores what option group (category) the question belongs to.
    const category = questions.options[questions.selectedIndex].parentNode.label;
    // We also need a variable that stores the actual value of the question we've selected.
    const value = questions.options[questions.selectedIndex].value;

    currentQuestion = {
        category: category,
        value: value
    };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
    const { category, value } = currentQuestion

    // Comparing if the category and value chosen (aka currentQuestion) is hair or eyes. 
    // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
    // Within this if/else, there are two nested if/else statements, that check if the current value chosen is the same as the on of the "secret person"
    // If it's the same then it will return filterCharacters true, otherwise false.
    if (category === 'hair' || category === 'eyes') {
        // Comparing the secret persons "category" to the value, since the properties are single values in the object CHARACTERS
        // Category is inside brackets, because it compares both categories from above against the value
        if (secret[category] === value) {
            filterCharacters(true);
        } else {
            filterCharacters(false);
        }
        // Comparing if the category and value chosen (aka currentQuestion) is accessories or other. 
    } else if (category === 'accessories' || category === 'other') {
        // Checking if the secret category is included in the value, since the values of accessories and other are contained within arrays
        if (secret[category].includes(value)) {
            filterCharacters(true);
        } else {
            filterCharacters(false);
        }
    }
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
    const { category, value } = currentQuestion;
    // Declaring variables for the filter-methods, for a cleaner code.
    const positiveAccOther = charactersInPlay.filter((person) => person[category].includes(value));
    const negativeAccOther = charactersInPlay.filter((person) => !person[category].includes(value));
    const positiveHairEyes = charactersInPlay.filter(person => person[category] === value);
    const negativeHairEyes = charactersInPlay.filter(person => person[category] !== value);

    // Show the correct alert message for different categories
    // ------- category is accessories -------
    if (category === 'accessories') {
        if (keep) {
            alert(
                `Yes, the person wears ${value}! Keep all people that wears ${value}`
            )
            charactersInPlay = positiveAccOther;
        } else {
            alert(
                `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
            )
            charactersInPlay = negativeAccOther;
        };
        // ------- category is other -------
    } else if (category === 'other') {
        if (keep) {
            alert(
                `Yes, the person is a ${value}! Keep all people that are ${value}s`
            )
            charactersInPlay = positiveAccOther;
        } else {
            alert(
                `No, the person isn't a ${value}! Remove all people that are ${value}s`
            )
            charactersInPlay = negativeAccOther;
        };
        // ------- category is hair -------
    } else if (category === 'hair') {
        if (keep) {
            alert(
                `Yes, the person has ${value} hair! Keep all people that have ${value} hair`
            )
            charactersInPlay = positiveHairEyes;
        } else {
            alert(
                `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`
            )
            charactersInPlay = negativeHairEyes;
        };
        // ------- category is eyes -------
    } else if (category === 'eyes') {
        if (keep) {
            alert(
                `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`
            )
            charactersInPlay = positiveHairEyes;
        } else {
            alert(
                `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`
            )
            charactersInPlay = negativeHairEyes;
        };
    };
    // Regenerates the board with the filtered characters - those left after the question has been checked. 
    generateBoard();
};

// Function to make a guess at the character of choice and then to confirm that choice.
const guess = (personToConfirm) => {
    // Saves the parameter personToConfirm in a variable called playerGuess
    const playerGuess = personToConfirm;

    // If player presses OK - in other words confirms === true - then checkMyGuess is invoked. I'm passing in playerGuess as an argument so that we can use that value in the checkMyGuess function.
    if (confirm(`Are you sure you want to guess on ${playerGuess}?`)) {
        checkMyGuess(playerGuess);
    } else {
        // If they choose cancel they'll end up in the same situation as before the guess button was clicked.
        return false
    }
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
    // The section with the class winOrLose is hidden in CSS, this line makes it visible again.
    winOrLose.style.display = "flex";

    if (personToCheck === secret.name) {
        winOrLoseText.textContent = `Yay - that was correct! Congrats – you won! 🙌`;
    } else {
        winOrLoseText.textContent = `I'm sorry - that was incorrect!😥 Wanna go again?`;
    }
};

// Function to restart the game after the guess has been checked. We first need to set the winOrLose section to display: none again, otherwise we can't see that the board has been reset. Then the start-function gets invoked. We don't have to generate the board again here, since that happens in the start function, same with the secret. 
const restartGame = () => {
    winOrLose.style.display = "none";
    start();
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
playAgainButton.addEventListener('click', restartGame);
questions.addEventListener('change', selectQuestion);
findOutButton.addEventListener('click', checkQuestion);