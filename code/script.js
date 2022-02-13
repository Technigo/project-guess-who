// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const filterButton = document.getElementById('filter');
const playAgain = document.getElementById('playAgain');


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/fish1.svg',
    scale: 'greens',
    mood: 'expressionless',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Billie EiFish',
    img: 'images/fish2.svg',
    mood: 'sad',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Leonardi Di carp rio',
    img: 'images/fish3.svg',
    scale: 'blue',
    mood: 'sad',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Legend',
    img: 'images/fish4.svg',
    scale: 'grey',
    mood: 'expressionless',
    accessories: [],
    other: []
  },
  {
    name: 'Gammelgäddan Jr',
    img: 'images/fish5.svg',
    scale: 'green',
    mood: 'sneaky',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Flounder',
    img: 'images/fish6.svg',
    scale: 'yellow',
    mood: 'happy',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/fish7.svg',
    scale: 'red',
    mood: 'astonished',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/fish8.svg',
    scale: 'yellow',
    mood: 'sad',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/fish9.svg',
    scale: 'black',
    mood: 'expressionless',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/fish10.svg',
    scale: 'green',
    mood: 'expressionless',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/fish11.svg',
    scale: 'yellow',
    mood: 'happy',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/fish12.svg',
    scale: 'red',
    mood: 'happy',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/fish13.svg',
    scale: 'blue',
    mood: 'expressionless',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/fish14.svg',
    scale: 'yellow',
    mood: 'sad',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/fish15.svg',
    scale: 'orange',
    mood: 'experssionless',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/fish16.svg',
    scale: 'yellow',
    mood: 'experssionless',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/fish17.svg',
    scale: 'blue',
    mood: 'sneaky',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/fish18.svg',
    scale: 'black',
    mood: 'expressionless',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/fish19.svg',
    scale: 'green',
    mood: 'astonished',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Tuna Turner',
    img: 'images/fish20.svg',
    scale: 'blue',
    mood: 'expresionless',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Gammelgäddan',
    img: 'images/fish21.svg',
    scale: 'green',
    mood: 'sneaky',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/fish22.svg',
    scale: 'blue',
    mood: 'sneaky',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/fish23.svg',
    scale: 'orange',
    mood: 'astonished',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/fish24.svg',
    scale: 'orange',
    mood: 'sad',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

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
  winOrLose.style.display = "none";
  winOrLoseText.innerText = "";

};

// setting the currentQuestion object when you select something in the dropdown
  const selectQuestion = () => {
  
    const category = questions.options[questions.selectedIndex].parentNode.label; //Variable that stores what option group (category) the question belongs to.

    const value = questions.options[questions.selectedIndex].value;  //Variable that stores the value of the question we've selected.
	  const label = questions.options[questions.selectedIndex].label; //Variable that stores the label of the question we've selected.

  
    currentQuestion = {

        category: category,
        value: value,
        label: label
  };
  
};



// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
	const { category, value, label } = currentQuestion;

	// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
	// See if we should keep or remove people based on that and then invokes filterCharacters
	if (category === "scale" || "mood" || "accessories" || "other") {
		if (secret[currentQuestion.category].includes(currentQuestion.value)) {
			//true
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
        );charactersInPlay = charactersInPlay.filter((person) =>
				person[category].includes(value)
        );

        
    } else {
      alert(
        `No, the fish doesn't have ${label} as main color! Remove all fish that has ${label} as main color`
      )
      charactersInPlay = charactersInPlay.filter(
				(person) => !person[category].includes(value)
      )
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


  } else if (category === "scale"){
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
  } else if (category === "mood") {
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

	generateBoard()
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
playAgain.addEventListener("click", start => location.reload() );
