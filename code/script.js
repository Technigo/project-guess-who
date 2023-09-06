// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findoutBtn = document.getElementById("filter");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgainButton = document.getElementById('playAgain');
const winOrLose = document.getElementById("winOrLose")

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hiddenhair',
    eyes: 'hiddeneyes',
    accessories: ['glasses', 'hat'],
    other: [],
    dress: "greendress"
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hiddenhair',
    eyes: 'blueeyes',
    accessories: ['hat'],
    other: [],
    dress: "bluedress"
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'greyhair',
    eyes: 'blueeyes',
    accessories: ['hat'],
    other: ['smoker'],
    dress: "yellowdress"
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'blackhair',
    eyes: 'browneyes',
    accessories: ["tie"],
    other: [],
    dress: "bluedress"
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellowhair',
    eyes: 'greeneyes',
    accessories: ['glasses'],
    other: [],
    dress: "greendress"
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brownhair',
    eyes: 'greeneyes',
    accessories: ['glasses'],
    other: [],
    dress: "bluedress"
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'blackhair',
    eyes: 'hiddeneyes',
    accessories: ['glasses' , "necklace"],
    other: [],
    dress: "greendress"
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellowhair',
    eyes: 'hiddeneyes',
    accessories: ['glasses'],
    other: [],
    dress: "stripeddress"
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orangehair',
    eyes: 'greeneyes',
    accessories: ['glasses' , "necklace" , "earings"],
    other: [],
    dress: "greendress"
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purplehair',
    eyes: 'hiddeneyes',
    accessories: ['glasses'],
    other: ['smoker'],
    dress: "blackdress"
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brownhair',
    eyes: 'blueeyes',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
    dress: "bluedress"
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brownhair',
    eyes: 'greeneyes',
    accessories: ['glasses'],
    other: [],
    dress: "whitedress"
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orangehair',
    eyes: 'greeneyes',
    accessories: ['glasses', 'hat'],
    other: ['smoker'],
    dress: "whitedress"
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'whitehair',
    eyes: 'hiddeneyes',
    accessories: ['hat'],
    other: [],
    dress: "yellowdress"
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orangehair',
    eyes: 'greeneyes',
    accessories: ['glasses'],
    other: [],
    dress: "stripeddress"
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hiddenhair',
    eyes: 'blueeyes',
    accessories: ['hat'],
    other: [],
    dress: "pinkdress"
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'blackhair',
    eyes: 'blueeyes',
    accessories: ['glasses'],
    other: [],
    dress: "reddress"
    
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'blackhair',
    eyes: 'browneyes',
    accessories: ['glasses' , "earings"],
    other: [],
    dress: "greendress"
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brownhair',
    eyes: 'greeneyes',
    accessories: ['glasses'],
    other: [],
    dress: "bluedress"
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellowhair',
    eyes: 'hiddeneyes',
    accessories: ['glasses', 'hat' , "necklace"],
    other: [],
    dress: "bluedress"
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'greyhair',
    eyes: 'browneyes',
    accessories: ["earings"],
    other: [],
    dress: "bluedress"
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellowhair',
    eyes: 'greeneyes',
    accessories: [],
    other: [],
    dress: "whitedress"
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'blackhair',
    eyes: 'greeneyes',
    accessories: ["tie"],
    other: [],
    dress: "whitedress"
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'blackhair',
    eyes: 'browneyes',
    accessories: ['glasses', 'hat'],
    other: [],
    dress: "greendress"
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay



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
          <button class="filled-button small"  onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  });
};



// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  
  console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  // What else should happen when we start the game?
  currentQuestion = {};
  setSecret();
  generateBoard()
  
}




restartButton.addEventListener("click" , ()=>{
  start();
  setSecret();
  generateBoard();
})

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
 
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =
  
    const category = questions.options[questions.selectedIndex].parentNode.label;
    const value = questions.value;
    const dataCategory = questions.options[questions.selectedIndex].parentNode.dataset.category;
    const dataValue = questions.options[questions.selectedIndex].dataset.value;

    currentQuestion = {
      category: category,
      value: value,
      dataValue: dataValue,
      dataCategory: dataCategory
    };
    console.log(currentQuestion);
  
checkQuestion()
  
};
questions.addEventListener("change", selectQuestion);


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value, dataValue, dataCategory} = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'accessories' || category === 'other') {
    if(secret[category].includes(value)){
      filterCharacters(true);
      alert(`yes , the person wears ${dataValue} ${dataCategory} , keep all that wears ${dataValue} ${dataCategory}`)
    }else{
      filterCharacters(false);
      alert(`No the person doesn't wear ${dataValue} ${dataCategory} , remove all that wears ${dataValue} ${dataCategory}`)
    }
  } else {
    if(secret[category] === value){
      filterCharacters(true);
      alert(`yes , the person has ${dataValue} ${dataCategory} , keep all that has ${dataValue} ${dataCategory}`)
    }else{
      filterCharacters(false)
      alert(`No the person doesn't have ${dataValue} ${dataCategory} , remove all that has ${dataValue} ${dataCategory}`)
    }
  };
}
// findoutBtn.addEventListener("click" , ()=>{
//   checkQuestion()
// })

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  console.log(keep)

  if (category === 'accessories' || category === 'other') {
    charactersInPlay = charactersInPlay.filter((character)=>{
      if(keep){
        return character[category].includes(value)
      }else{
        return !character[category].includes(value)
      }

    })
  } else {
    charactersInPlay = charactersInPlay.filter((character)=>{
      if(keep){
        return character[category] === value
      }else{
        return character[category] !== value
      }

    })
  };
  currentQuestion = {}
  generateBoard();
}


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const confirmGuess = confirm(`Are you sure you want to guess ${personToConfirm} ?`) 
 if(confirmGuess){
  checkMyGuess(personToConfirm)
 }
  
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
 
};

const hiddenboard = ()=>{
  board.classList.add("hidden");

};
const showBoard = ()=>{
  board.classList.remove("hidden")
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  if (secret.name === personToCheck) {
    winOrLoseText.textContent = 'Congratulations, you win!';
    winOrLose.style.display = "flex"
  } else {
    winOrLoseText.textContent = 'Oops! You lose. You gussed wrong! Game ove!';
    winOrLose.style.display = "flex"
  }

  // Show the win or lose section
  document.getElementById('winOrLose').classList.remove('hidden');

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
  hiddenboard();
};

playAgainButton.addEventListener('click', () => {
  winOrLose.style.display = "none";
  start();
  showBoard()
});

// Invokes the start function when website is loaded


// All the event listeners
restartButton.addEventListener('click', start);







showBoard();
start();

