document.addEventListener('DOMContentLoaded', () => {

// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutBtn = document.getElementById('filter');


// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: ['artsy']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat', 'face-hair'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'white',
    eyes: 'blue',
    accessories: ['hat', 'face-hair'],
    other: ['smoker', 'haddok']
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
    accessories: ['glasses', 'face-hair'],
    other: ['bad-day']
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['jewlery']
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['artsy']
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'jewlery'],
    other: ['artsy']
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker', 'artsy']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat', 'face-hair'],
    other: ['smoker', 'artsy', 'bad-day']
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
    accessories: ['glasses', 'hat', 'face-hair'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat', 'jewlery'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: ['artsy']
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
    accessories: ['glasses', 'jewlery'],
    other: ['bad-day', 'artsy']
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
    accessories: ['glasses', 'hat', 'jewlery'],
    other: ['artsy']
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'white',
    eyes: 'brown',
    accessories: ['jewlery'],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: ['bad-day']
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: ['face-hair'],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: ['bad-day']
  },
]

// Global variables
let secretPerson;
let currentQuestion;
let charactersInPlay;

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS;
  //Assign pre-selected value to make it possible to ask for brown haie without selecting another options first.
  currentQuestion = {
    category: 'hair',
    value: 'brown'
  };
  // What else should happen when we start the game?
}
start();

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
  })
}
generateBoard();

// 'Randomly' select a person from the characters array and set as the value of the variable called secret
const setSecretPerson = () => {
  secretPerson = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  console.log(secretPerson.name)
}
setSecretPerson();


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label;
  // This variable stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;
  
  currentQuestion = {
    category: category,
    value: value,
  }
}
//when question is changed, assign category and value to currentQuestion variable
questions.addEventListener('change', selectQuestion);


///////////////////TO DO!! Lägg till alert om huvuvida det man valt stämmer överens med hemlisen och vilka som plockas bort
// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
   if (currentQuestion.category === 'hair') {
    //if selected question has category hair, check if selected value is the same as secretPersons
    if (currentQuestion.value === secretPerson.hair) {
      //keep all characters matching currentQuestion.value
      charactersInPlay = charactersInPlay.filter(character => character.hair === secretPerson.hair)
    } else {
      //discard all characters matching currentQuestion.value 
      charactersInPlay = charactersInPlay.filter(character => character.hair !== currentQuestion.value);
    }
  } else if (currentQuestion.category === 'eyes') {
    if (currentQuestion.value === secretPerson.eyes) {
      charactersInPlay = charactersInPlay.filter(character => character.eyes === secretPerson.eyes);
    } else {
      charactersInPlay = charactersInPlay.filter(character => character.eyes !== currentQuestion.value);
    }
  } else if (currentQuestion.category === 'accessories') {
      //TO DO! tom array är samma som no accessories
    if (secretPerson.accessories.includes(currentQuestion.value)) {
      charactersInPlay = charactersInPlay.filter(character => character.accessories.includes(currentQuestion.value));
    } else {
      charactersInPlay = charactersInPlay.filter(character => !character.accessories.includes(currentQuestion.value));
    }
  } else {
    //TO DO! tom array är samma som no other
    if (secretPerson.other.includes(currentQuestion.value)) {
    charactersInPlay = charactersInPlay.filter(character => character.other.includes(currentQuestion.value));
    } else {
      charactersInPlay = charactersInPlay.filter(character => !character.other.includes(currentQuestion.value));
    }
  }
  // Call generateBoard again to show only characters that are till in play.
  generateBoard();
}

findOutBtn.addEventListener('click', checkQuestion);

///////////////////////////////BORDER TO THE UNKNOWN/////////////////////////////////////////////////////////

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// All the event listeners
restartButton.addEventListener('click', start)


/* FRÅN DANIELS FÖRELÄSNING
const tilesSheet = document.querySelector('.tilesSheet');
const counter = document.getElementById('counter');
const hairSelect = document.getElementById('hair-select');
const eyeSelect = document.getElementById('eye-select');
let displayedCharacters = characters;
let selectedCharacter;  
// let numberOfGuesses = 0;
let numberOfGuesses = 5;


hairSelect.onchange = () => {
    const newCharacters = displayedCharacters.filter(singleCharacter => {
        return singleCharacter.hair_color.includes(hairSelect.value);
    });
    displayedCharacters = newCharacters;
    generateTiles(displayedCharacters);
}
eyeSelect.onchange = () => {
    const newCharacters = displayedCharacters.filter(singleCharacter => {
        return singleCharacter.eye_color.includes(eyeSelect.value);
    });
    displayedCharacters = newCharacters;
    generateTiles(displayedCharacters);
}

const generateTiles = (arrayToMapThroughAndGenerateTiles) => {
    tilesSheet.innerHTML= '';
    arrayToMapThroughAndGenerateTiles.map(singleCharacter => {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.innerHTML = `<p>${singleCharacter.name}</p>`;
        tilesSheet.appendChild(tile);
        tile.addEventListener('click', () => {
            if (numberOfGuesses < 1) {
                window.alert('you lost, please refresh');
                return;
            }
            /// important can only compare object properties, not whole objects with themselves
            if (singleCharacter.name === selectedCharacter.name) {
                window.alert('Hurray!');
            } else {
                // numberOfGuesses++;
                // counter.innerText = numberOfGuesses;\
                // numberOfGuesses = numberOfGuesses - 1
                // numberOfGuesses -= 1 
                numberOfGuesses--;
                counter.innerText = numberOfGuesses;
                window.alert('try again');
            }
        });
        // tilesSheet.innerHTML += `
        // <div class="tile">
        //     <p>${singleCharacter.name}</p>
        // </div>
        // `;
    });
    // for(let i =0; i < characters.length; i++) {
    //     characters[i];
    // }
}

const selectRandomCharacter = () => {
    // min and max are the range of ints  
    // Math.floor(Math.random() * (max - min + 1) + min) 
    // []
    const randomNumber = Math.floor(Math.random() * (characters.length - 1 - 0 + 1) + 0);
    selectedCharacter = characters[randomNumber];
    console.log(selectedCharacter);
}

generateTiles(characters);
selectRandomCharacter();*/
})