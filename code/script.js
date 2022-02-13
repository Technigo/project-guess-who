// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const filterButton = document.getElementById('filter');
const playAgain = document.getElementById('playAgain');


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Fish of the day',
    img: 'images/fish1.svg',
    scale: 'black',
    expression: ['expressionless'],
    shape: 'average',
    age: 'middleage',
  },
  {
    name: 'Billie EiFish',
    img: 'images/fish2.svg',
    scale: 'greens',
    expression: 'sad',
    shape: 'average',
    accessories: ['hat'],
    age: 'young',
  },
  {
    name: 'Leonardo Di carp rio',
    img: 'images/fish3.svg',
    scale: 'blue',
    expression: 'sad',
    shape: 'average',
    age: 'middleage',
  },
  {
    name: 'Legend',
    img: 'images/fish4.svg',
    scale: 'grey',
    expression: 'expressionless',
    shape: 'long',
    age: 'old',
  },
  {
    name: 'Gammelgäddan Jr',
    img: 'images/fish5.svg',
    scale: 'green',
    expression: 'sneaky',
    shape: 'long',
    age: 'middleage',
  },
  {
    name: 'Flounder',
    img: 'images/fish6.svg',
    scale: 'yellow',
    expression: 'happy',
    shape: 'round',
    age: 'young',
  },
  {
    name: 'Rust',
    img: 'images/fish7.svg',
    scale: 'red',
    expression: 'astonished',
    shape: 'average',
    age: 'old',
  },
  {
    name: 'Berra',
    img: 'images/fish8.svg',
    scale: 'yellow',
    expression: 'sad',
    shape: 'round',
    age: 'middleage',
  },
  {
    name: 'Skippy',
    img: 'images/fish9.svg',
    scale: 'black',
    expression: 'expressionless',
    shape: 'average',
    age: 'middleage',
  },

  {
    name: 'SeaBastian',
    img: 'images/fish10.svg',
    scale: 'green',
    expression: 'expressionless',
    shape: 'averages',
    age: 'middleage',
  },
  {
    name: 'Bingo',
    img: 'images/fish11.svg',
    scale: 'yellow',
    expression: 'happy',
    shape: 'round',
    age: 'middleage',
  },
  {
    name: 'Gradient',
    img: 'images/fish12.svg',
    scale: 'red',
    expression: 'happy',
    shape: 'average',
    age: 'middleage',
  },
  {
    name: 'Balloon',
    img: 'images/fish13.svg',
    scale: 'blue',
    expression: 'expressionless',
    shape: 'round',
    age: 'middleage',
  },
  {
    name: 'Gordon',
    img: 'images/fish14.svg',
    scale: 'yellow',
    expression: 'sad',
    shape: 'average',
    age: 'middleage',
  },
  {
    name: 'Pixelfish',
    img: 'images/fish15.svg',
    scale: 'orange',
    expression: 'experssionless',
    shape: 'average',
    age: 'old',
  },
  {
    name: 'Legfish',
    img: 'images/fish16.svg',
    scale: 'yellow',
    expression: 'experssionless',
    shape: 'long',
    age: 'middleage',
  },
  {
    name: 'Bubble Bob',
    img: 'images/fish17.svg',
    scale: 'blue',
    expression: 'sneaky',
    shape: 'round',
    age: 'middleage',
  },
  {
    name: 'Seabra',
    img: 'images/fish18.svg',
    scale: 'black',
    expression: 'expressionless',
    shape: 'average',
    age: 'middleage',
  },
  {
    name: 'Lurk',
    img: 'images/fish19.svg',
    scale: 'green',
    expression: 'astonished',
    shape: 'round',
    age: 'old',
  },
  {
    name: 'Tuna Turner',
    img: 'images/fish20.svg',
    scale: 'blue',
    expression: 'expresionless',
    shape: 'long',
    age: 'old',
  },
  {
    name: 'Gammelgäddan',
    img: 'images/fish21.svg',
    scale: 'green',
    expression: 'sneaky',
    shape: 'long',
    age: 'old',
  },
  {
    name: 'Mega Pirana',
    img: 'images/fish22.svg',
    scale: 'blue',
    expression: 'sneaky',
    shape: ['round'],
    age: 'old',
  },
  {
    name: 'Orangina',
    img: 'images/fish23.svg',
    scale: 'orange',
    expression: 'astonished',
    shape: ['round'],
    age: 'young',
  },
  {
    name: 'Nemo',
    img: 'images/fish24.svg',
    scale: 'orange',
    expression: 'sad',
    shape: 'average',
    age: 'young',
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
  }
  
}



// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
	const { category, value, label } = currentQuestion;

	// Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
	// See if we should keep or remove people based on that and then invokes filterCharacters
	if (category === "scale" || "expression" || "shape" || "age") {
		if (secret[currentQuestion.category].includes(currentQuestion.value)) {
			//true
			filterCharacters(true);
		} else {
			//false
			filterCharacters(false);
		}
	}
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => { 
  const { category, value, label } = currentQuestion;
  // Show the correct alert message for different categories
  
  if (category === "shape") {

    if (keep) {
      alert(
        `Yes, the shape of the fish is ${label}! Keep all fish that has ${label} shape.`
        );charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)
        );

        
    } else {
      alert(
        `No, the fish doesn't have ${label} shape! Remove all fish that has ${label} shape.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
      )
    }

    
  } else if (category === "age") {
    // Similar to the one above
    if (keep) {
			alert(`Yes, the fish is ${label}! Keep all fish that is ${label}`);

			charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
  
    } else {
    alert(`No, the fish isn't ${label}! Remove all fish that are ${label}`);
			charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
			)
    }


  } else if (category === "scale"){
      if (keep) {
      alert(`Yes, the fish has ${label} scale! Keep all fish that has ${label} scale`);
			charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)
			)
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
    
    } else {
      alert(
				`No, the fish doesn't have ${label} scale! Remove all fish that has ${label} scale`);
			charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
			)

    }
  } else if (category === "expression") {
		if (keep) {
			alert(`Yes, the fish is ${label}! Keep all fish that are ${label}`);
			charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)
			);
		
    } else {
			alert(
				`No, the fish is not ${label}! Remove all fish that are ${label}`
			)
			charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
			)
    }
  }
  // Invokes the function to redraw the board with the remaining people.

	generateBoard();
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
}

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You won! You guessed on the correct fish <br> - ${personToCheck}!`;
  } else {
    winOrLoseText.innerHTML = ` Bad guess! this was not the right fish. It was ${secret.name}.`;
  }
  // Shows the section of winner or looser 
  winOrLose.style.display = "flex";
  // Hides the game board
  board.style.display = "none";
}

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start => location.reload());
playAgain.addEventListener("click", start => location.reload() );

questions.addEventListener("change", selectQuestion);
filterButton.addEventListener('click', checkQuestion);

