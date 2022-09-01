document.addEventListener('DOMContentLoaded', () => {

  // All the DOM selectors stored as short variables
  const board = document.getElementById('board');
  const questions = document.getElementById('questions');
  const restartButton = document.getElementById('restart');
  const filterButton = document.getElementById('filter');
  const playAgainBtn = document.getElementById('playAgain');

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
  let randomCharacter;
  let currentQuestion;
  let charactersInPlay;

  // Draw the game board
  const generateBoard = () => {
    board.innerHTML = '';    
    charactersInPlay.forEach((person) => {      
      board.innerHTML += `
        <div class="card">
          <p>${person.name}</p>
          <img src=${person.img} alt=${person.name}>
          <div class="guess">
            <span>Guess on ${person.name}?</span>
            <button class="filled-button small" id="${person.name}Btn">Guess</button>
          </div>
        </div>
      `;
    });

    charactersInPlay.forEach((person) => {      
        const name = person.name;
        document.getElementById(`${name}Btn`).addEventListener('click', () => {
            guess(name);
        });
    });
  }

  // Randomly select a person from the characters array and set as the value of the variable called secret
  const setRandomCharacter = () => {
    randomCharacter = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
    console.log('chosen:', randomCharacter);
  }

  // This function to start (and restart) the game
  const start = () => {
    charactersInPlay = CHARACTERS;    
    setRandomCharacter();             // Invokes the function that randomly selects the secret character that the user are looking for
    generateBoard(charactersInPlay);  // Invokes the function that sets the bord with the character-cards
    selectQuestion();                 // Invokes the function 
  }

  // setting the currentQuestion object when you select something in the dropdown
  const selectQuestion = () => {
    const category = questions.options[questions.selectedIndex].parentNode.label;
    const value= questions.options[questions.selectedIndex].value;

    currentQuestion = {
      category: category,
      value: value
    }
    checkQuestion();
  }

  // questions.onchange = checkQuestion

  // This function should be invoked when you click on 'Find Out' button.
  const checkQuestion = () => {
    const { category, value } = currentQuestion;

    // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
    // See if we should keep or remove people based on that
    // Then invoke filterCharacters
    if (category === 'hair' || category === 'eyes') {
      // randomCharacter.hair === value ? window.alert('Secret has this hair(it is true'):
    } else if (category === 'accessories' || category === 'other') {

    }
    filterCharacters();
  }

  // It'll filter the characters array and redraw the game board.
  const filterCharacters = (keep) => {
    const { category, value } = currentQuestion;

    // Show the correct alert message for different categories
    if (category === 'accessories') {
      if (keep) {
        alert(
          `Yes, the person wears ${value}! Keep all people that wears ${value}`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      } else {
        alert(
          `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      }
    } else if (category === 'hair') {
      if (keep) {
        alert(
          `Yes, the person has ${value} hair! Keep all people with ${value} hair`
          );
          charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      } else {
        alert(
          `No, the person doesnt have ${value} hair! Remove all people with ${value} hair`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      }
    } else if (category === 'eyes') {
      if (keep) {
        alert(
          `Yes, the person has ${value} eyes! Keep all people with ${value} eye`
          );
          charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      } else {
        alert(
          `No, the person doesnt have ${value} eyes! Remove all people with ${value} eyes`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      }  
    } else {
      if (keep) {
        alert(
          `Yes, the person is a ${value}! Keep all people that's a ${value}`
          );
          charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
      } else {
        alert(
          `No, the person isn't a ${value}! Remove all people that's a ${value}`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
      }

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
  }

  // when clicking guess, the player first have to confirm that they want to make a guess.
  const guess = (personToCheck) => {
    const confirmGuess = confirm(`Do you want to guess on ${personToCheck}?`);
    if (confirmGuess) checkMyGuess(personToCheck);
  }

  // If you confirm, this function is invoked
  const checkMyGuess = (personToCheck) => {
    if (personToCheck === randomCharacter.name) {
      alert(`Yaaay, you got it!`);
    } else {
      alert(`Naaaw, the correct answer was ${randomCharacter.name}. Please try again!`);
    }
    // 1. Check if the personToCheck is the same as the secret person's name
    // 2. Set a Message to show in the win or lose section accordingly
    // 3. Show the win or lose section
    // 4. Hide the game board
  }

  // Invokes the start function when website is loaded
  start();

  // All the event listeners
  restartButton.addEventListener('click', start);

  filterButton.addEventListener('click', filterCharacters);

  playAgainBtn.addEventListener('click', location.reload);

});  
