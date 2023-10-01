const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const playAgainButton = document.getElementById('playAgain');

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


let secret;
let currentQuestion;
let charactersInPlay;


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

const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret);
}

const start = () => {
  charactersInPlay = CHARACTERS; 
  setSecret();
  generateBoard();
}

const selectQuestion = () => {
  const selectedOption = questions.options[questions.selectedIndex];
  const category = selectedOption.parentElement.label;
  const value = selectedOption.value;
  currentQuestion = {
    category: category,
    value: value,
  };
};

const checkQuestion = () => {
  const { category, value } = currentQuestion;
  let keep = false; 
  
  if (category === 'hair' || category === 'eyes') {
    keep = secret[category] === value;
  } else if (category === 'accessories' || category === 'other') {
    keep = secret[category].includes (value);
  }
filterCharacters(keep);
}
  const filterCharacters = (keep) => {
    const { category, value } = currentQuestion;
    if (category === 'accessories') {
      if (keep) {
        alert(
          `Yes, the person wears ${value}! Keep all people that wear ${value}`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)
        );      
      } else {
        alert(
          `No, the person doesn't wear ${value}! Remove all people that wear ${value}`
        );
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
        );
      }
    } else if (category === 'hair') {
      if (keep) {
        alert(
          `Yes, the person has ${value} hair! Keep all people that have ${value} hair`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)
        ); 
      } else {
        alert(
          `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair`
        );
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
        );
      }
    } else if (category === 'eyes') {
      if (keep) {
        alert(
          `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)
        );       
      } else {
        alert(
          `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes`
        );
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
        );
      }  
    } else if (category === 'other') {
      if (keep) {
        alert(
          `Yes, the person is a ${value}! Keep all people that are a ${value}`
        );
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value)
        );       
      } else {
        alert(
          `No, the person is not a ${value}! Remove everyone that is a ${value}`
        );
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value)
        );
      }
    } 
  
    generateBoard();   
  }

const guess = (personToConfirm) => {

  let userConfirm = confirm(
    `Do you guess that the secret person is ${personToConfirm}?`
    );
    if (userConfirm) {
      checkMyGuess(personToConfirm);
    }
}

const checkMyGuess = (personToCheck) => {
  if (personToCheck === secret.name) {
    winOrLoseText.innerHTML = `You got it right, the secret person is ${personToCheck}`;
  } else {
    winOrLoseText.innerHTML = `You got it wrong,${personToCheck} is not the secret person`;
  }
  winOrLose.style.display =`flex`;
}

start()

restartButton.addEventListener('click', () => {
  start();
});
questions.addEventListener('change', selectQuestion);
playAgainButton.addEventListener('click', () => {
  start();
  winOrLose.style.display = 'none';
});
findOutButton.addEventListener('click', () => {
  checkQuestion();
});

