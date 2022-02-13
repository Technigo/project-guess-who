// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const filterButton = document.getElementById('filter');
const playAgain = document.getElementById('playAgain');
const winOrLose = document.querySelector('.win-or-lose-wrapper');
const winOrLoseText = document.getElementById('winOrLoseText');


// Array with all the characters, as objects
const CHARACTERS = [
  
  {
    name: 'Fishermens friend',
    img: 'images/fish_1.svg',
    hair: "hidden",
		eyes: "hidden",
		accessories: ["glasses", "hat"],
		other: ["teeth"],

  },
  {
    name: 'Billie EiFish',
    img: 'images/fish_2.svg',
    color: 'black',
    hair: "hidden",
		eyes: "blue",
		accessories: ["hat"],
		other: ["teeth", "facialHair"],
  },
  {
    name: 'Leonardo Di carp rio',
    img: 'images/fish_3.svg',
    hair: "grey",
		eyes: "blue",
		accessories: ["hat"],
		other: ["smoker", "teeth", "facialHair"],
  },
  {
    name: 'The Legend',
    img: 'images/fish_4.svg',
    hair: "black",
		eyes: "brown",
		accessories: [],
		other: ["teeth"],
  },
  {
    name: 'Grandpa Jr',
    img: 'images/fish_5.svg',
    hair: "yellow",
		eyes: "green",
		accessories: ["glasses"],
		other: ["teeth"],
  },
  {
    name: 'Flounder',
    img: 'images/fish_6.svg',
    hair: "brown",
		eyes: "green",
		accessories: ["glasses"],
		other: ["facialHair"],
  },
  {
    name: 'Sashimi  ',
    img: 'images/fish_7.svg',
    color: 'red',
    fishmood: 'astonished',
    dorsalfin: ['yes'], 
    shape: 'average',
    age: 'old',
  },
  {
    name: 'Sushi',
    img: 'images/fish_8.svg',
    hair: "black",
		eyes: "hidden",
		accessories: ["glasses", "jewelry"],
		other: [],
  },
  {
    name: 'Skippy',
    img: 'images/fish_9.svg',
    hair: "yellow",
		eyes: "hidden",
		accessories: ["glasses"],
		other: ["teeth"],
  },

  {
    name: 'SeaBastian',
    img: 'images/fish_10.svg',
    hair: "orange",
		eyes: "green",
		accessories: ["glasses", "jewelry"],
		other: ["teeth"],
  },
  {
    name: 'Bingo',
    img: 'images/fish_11.svg',
    hair: "orange",
		eyes: "green",
		accessories: ["glasses", "jewelry"],
		other: ["teeth"],
  },
  {
    name: 'Gradient',
    img: 'images/fish_12.svg',
    hair: "purple",
		eyes: "hidden",
		accessories: ["glasses"],
		other: ["smoker"],
  },
  {
    name: 'Balloon',
    img: 'images/fish_13.svg',
    hair: "brown",
		eyes: "blue",
		accessories: ["glasses", "hat"],
		other: ["smoker", "facialHair"],
  },
  {
    name: 'Master Chef',
    img: 'images/fish_14.svg',
    hair: "brown",
		eyes: "green",
		accessories: ["glasses"],
		other: ["teeth"],
  },
  {
    name: 'Pixelfish',
    img: 'images/fish_15.svg',
    hair: "orange",
		eyes: "green",
		accessories: ["glasses", "hat"],
		other: ["smoker", "facialHair"],
  },
  {
    name: 'Legfish',
    img: 'images/fish_16.svg',
    hair: "white",
		eyes: "hidden",
		accessories: ["hat", "jewelry"],
		other: ["teeth"],
  },
  {
    name: 'Bubble bob',
    img: 'images/fish_17.svg',
    hair: "orange",
		eyes: "green",
		accessories: ["glasses"],
		other: ["teeth"],
  },
  {
    name: 'Deb',
    img: 'images/fish_18.svg',
    hair: "hidden",
		eyes: "blue",
		accessories: ["hat"],
		other: [],
  },
  {
    name: 'Lurk',
    img: 'images/fish_19.svg',
    hair: "black",
		eyes: "blue",
		accessories: ["glasses"],
		other: ["teeth"],
  },
  {
    name: 'Tuna Turner',
    img: 'images/fish_20.svg',
    hair: "black",
		eyes: "brown",
		accessories: ["glasses", "jewelry"],
		other: ["teeth"],
  },
  {
    name: 'Grandpa',  
    img: 'images/fish_21.svg',
    hair: "brown",
		eyes: "green",
		accessories: ["glasses"],
		other: ["teeth"],
  },
  {
    name: 'Mega Pirana',
    img: 'images/fish_22.svg',
    hair: "yellow",
		eyes: "hidden",
		accessories: ["glasses", "hat", "jewelry"],
		other: [],
  },
  {
    name: 'Orangina',
    img: 'images/fish_23.svg',
    hair: "grey",
		eyes: "brown",
		accessories: ["jewelry"],
		other: ["teeth"],
  },
  {
    name: 'Nemo',
    img: 'images/fish_24.svg',
    hair: "grey",
		eyes: "brown",
		accessories: ["jewelry"],
		other: ["teeth"],
  },
];

// Global variables (Variable that is declared in the global scope)
let secret;
let currentQuestion;
let charactersInPlay;

// Draw the game board
const generateBoard = () => { board.innerHTML = ''; charactersInPlay.forEach((person) => { board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button id="guess" class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `;
  });
};

// Randomly select a person from the characters array and set as the value of the variable called secret
  const setSecret = () => { secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secret);
}

// ------- START & RESTART the game -------

  const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  generateBoard();
  setSecret();
  selectQuestion();
  winOrLose.style.display = "none";
	winOrLoseText.innerText = "";



  // What else should happen when we start the game?
};

// setting the currentQuestion object when you select something in the dropdown
  const selectQuestion = () => {
  
    const category = questions.options[questions.selectedIndex].parentNode.label; //Variable that stores what option group (category) the question belongs to.
    const value = questions.options[questions.selectedIndex].value;  //Variable that stores the value of the question we've selected.
	  const label = questions.options[questions.selectedIndex].label; //Variable that stores the label of the question we've selected.

  
    currentQuestion = {
    category: category,
    value: value,
    label: label,
  };
  
};



// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
	const { category, value, label } = currentQuestion;

	// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
	// See if we should keep or remove people based on that and then invokes filterCharacters
	if (category === "hair" || category === "eyes") {
		if (secret[currentQuestion.category] === currentQuestion.value) {
			//true
			filterCharacters(true);
		} else {
			//false
			filterCharacters(false);
		}
	} else if (category === "accessories" || category === "other") {
		if (secret[currentQuestion.category].includes(currentQuestion.value)) {
			// true
			filterCharacters(true);
		} else {
			//false
			filterCharacters(false);
		}
	}
};



// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => { 
  const { category, value, label } = currentQuestion;
  // Show the correct alert message for different categories
  
  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the main color of the fish is ${label}! Keep all fish that has ${label}`
      );
    } else {
      alert(
        `No, the fish doesn't have ${label} as main color! Remove all fish that has ${label} as main color`
      );
    }

  } else if (category === "other") {
    // Similar to the one above
    if (keep) {
			alert(`Yes, the fish is ${label}! Keep all fish that is ${label}`);

			charactersInPlay = charactersInPlay.filter((person) =>
				person[category].includes(value)
			);
  } else {
    alert(`No, the fish isn't ${label}! Remove all fish that are ${label}`);
			charactersInPlay = charactersInPlay.filter(
				(person) => !person[category].includes(value)
			);
    }


  } else if (category === "hair"){
      if (keep) {
      alert(`Yes, the fish has ${label}! Keep all fish that has ${label}`);
			charactersInPlay = charactersInPlay.filter((person) =>
				person[category].includes(value)
			)
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    
    } else {
      alert(
				`No, the fish doesn't have ${label}! Keep all fish that has ${label}`
			);
			charactersInPlay = charactersInPlay.filter(
				(person) => !person[category].includes(value)
			);

    }
  } else if (category === "eyes") {
		if (keep) {
			alert(`Yes, the fish is ${label}! Keep all fish that is ${label}`);
			charactersInPlay = charactersInPlay.filter((person) =>
				person[category].includes(value)
			);
		
    } else {
			alert(
				`No, the persons doesn't have ${label}! Remove all people that has ${label}`
			);
			charactersInPlay = charactersInPlay.filter(
				(person) => !person[category].includes(value)
			);
    }
  }
  // Invokes the function to redraw the board with the remaining people.

	generateBoard(keep);
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

// when clicking guess, the player first have to confirm that they want to make a guess.

const guess = (personToCheck) => {  
  let playerGuess = confirm(`Do you want to guess on this fish ${personToCheck}?`);
  
  if (playerGuess) {
    checkMyGuess(personToCheck);
  } else {
    alert("You can continue with the game!");
  }
  guessConfirmation.style.display = "flex";
  board.style.display = "none";
};

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You won! You guessed on the correct fish - ${personToCheck}!`;
  } else {
    winOrLoseText.innerHTML = ` Bad guess! this was not the right fish. It was ${secret.name}.`;
  }
  // Shows the section of winner or looser 
  winOrLose.style.display = "flex";
  // Hides the game board
  board.style.display = "none";
};

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start => location.reload());
questions.addEventListener("change", selectQuestion);
filterButton.addEventListener('click', checkQuestion);
playAgain.addEventListener("click", start);

