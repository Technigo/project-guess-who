// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const playAgainButton = document.getElementById('playAgainButton')

// Array with all the characters in the game, as objects
const CITIES = [
  {
    name: 'Paris',
    img: 'images/pexels-photo-460740.jpeg',
    continent: 'europe',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: ['capital']
  },
  {
    name: 'Bangkok',
    img: 'images/bangkok.png',
    continent: 'asia',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: ['capital']
  },
  {
    name: 'Washington DC',
    img: 'images/washingtonDC.png',
    continent: 'north-america',
    hemisphere: ['northern', 'western'],
    language: ['english'],
    other: ['capital']
  },
  {
    name: 'Berlin',
    img: 'images/berlin.png',
    continent: 'europe',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: ['capital']
  },
  {
    name: 'Pretoria',
    img: 'images/pretoria.png',
    continent: 'africa',
    hemisphere: ['southern', 'eastern'],
    language: ['english'],
    other: ['capital']
  },
  {
    name: 'Buenos Aires',
    img: 'images/buenosaires.png',
    continent: 'south-america',
    hemisphere: ['northern', 'western'],
    language: ['spanish'],
    other: ['capital']
  },
  {
    name: 'Rome',
    img: 'images/rome.png',
    continent: 'europe',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: ['capital']
  },
  {
    name: 'Jerusalem',
    img: 'images/jerusalem.png',
    continent: 'asia',
    hemisphere: ['northern', 'eastern'],
    language: ['arabic'],
    other: ['capital']
  },
  {
    name: 'Lima',
    img: 'images/lima.png',
    continent: 'south-america',
    hemisphere: ['southern', 'western'],
    language: ['spanish'],
    other: ['capital']
  },

  {
    name: 'Canberra',
    img: 'images/canberra.png',
    continent: 'oceania',
    hemisphere: ['southern', 'eastern'],
    language: ['english'],
    other: ['capital']
  },
  {
    name: 'Copenhagen',
    img: 'images/copenhagen.png',
    continent: 'europe',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: ['capital']
  },
  {
    name: 'Dubai',
    img: 'images/dubai.png',
    continent: 'asia',
    hemisphere: ['northern', 'eastern'],
    language: ['arabic'],
    other: ['capital']
  },
  {
    name: 'Jakarta',
    img: 'images/jakarta.png',
    continent: 'asia',
    hemisphere: ['southern', 'eastern'],
    language: [],
    other: ['capital']
  },
  {
    name: 'New York',
    img: 'images/newyork.png',
    continent: 'north-america',
    hemisphere: ['northern', 'western'],
    language: ['english'],
    other: []
  },
  {
    name: 'Vancouver',
    img: 'images/vancouver.png',
    continent: 'north-america',
    hemisphere: ['northern', 'western'],
    language: ['english'],
    other: []
  },
  {
    name: 'Cancun',
    img: 'images/cancun.png',
    continent: 'north-america',
    hemisphere: ['northern', 'western'],
    language: ['spanish'],
    other: []
  },
  {
    name: 'Kyoto',
    img: 'images/kyoto.png',
    continent: 'asia',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: []
  },
  {
    name: 'Nairobi',
    img: 'images/nairobi.png',
    continent: 'africa',
    hemisphere: ['southern', 'eastern'],
    language: [],
    other: ['capital']
  },
  {
    name: 'Amsterdam',
    img: 'images/amsterdam.png',
    continent: 'europe',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: []
  },
  {
    name: 'Addis Ababa',
    img: 'images/addisababa.png',
    continent: 'africa',
    hemisphere: ['southern', 'eastern'],
    language: [],
    other: ['capital']
  },
  {
    name: 'Delhi',
    img: 'images/delhi.png',
    continent: 'asia',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: []
  },
  {
    name: 'Barcelona',
    img: 'images/barcelona.png',
    continent: 'europe',
    hemisphere: ['northern', 'eastern'],
    language: ['spanish'],
    other: []
  },
  {
    name: 'Lahore',
    img: 'images/lahore.png',
    continent: 'asia',
    hemisphere: ['northern', 'eastern'],
    language: [],
    other: []
  },
  {
    name: 'Auckland',
    img: 'images/auckland.png',
    continent: 'oceania',
    hemisphere: ['southern', 'eastern'],
    language: ['english'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let citiesInPlay
let keep

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  citiesInPlay.forEach((city) => {
    board.innerHTML += `
      <div class="card">
        <p>${city.name}</p>
        <img src=${city.img} alt=${city.name}>
        <div class="guess">
          <span>Guess on ${city.name}?</span>
          <button class="filled-button small" onclick="guess('${city.name}')">Guess</button>
        </div>
      </div>
    `
  })
}


// Randomly select a city from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = citiesInPlay[Math.floor(Math.random() * citiesInPlay.length)]
  console.log(secret); //REMOVE - Only to see that a new secret character is selected each time
}
//WORKING




// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label // This variable stores what option group (category) the question belongs to.
  const value = questions.value // A variable that stores the actual value of the question we've selected ("blue", "brown")

  currentQuestion = {
    category: category,
    value: value
  }
  console.log("Selected value", currentQuestion)//REMOVE - WORKING!
};


// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const {category, value} = currentQuestion;
  

  // Compare the currentQuestion details with the secret city details in a different manner based on category (continent/hemisphere or language/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'continent') {
    if (secret[category] === value) {
      keep = true
      filterCharacters(true);
    } else {
      keep = false
      filterCharacters(false);
    }
  } else if (category === 'hemisphere' || category === 'other' || category === 'language') {
    if (secret[category].includes(value)) {
      keep = true
      filterCharacters(true);
    } else {
      keep = false
      filterCharacters(false);
    }
  }
};



// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  const uppercaseValue = value.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());

  if (category === 'language') {
    if (keep) {
      alert(`Yes, ${uppercaseValue} is an official language! Keep all the cities that have ${uppercaseValue} as an official language`);
      citiesInPlay = citiesInPlay.filter((city) => city[category].includes(value));

    } else {
      alert(`No, ${uppercaseValue} is not an official language! Remove all the cities that have ${uppercaseValue} as an official language`);
      citiesInPlay = citiesInPlay.filter((city) => !city[category].includes(value));
    }


  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the city is a ${Value}! Keep all the cities that are a ${Value}`);
      citiesInPlay = citiesInPlay.filter((city) => city[category].includes(value));

    } else {
      alert(`No, the city is not a ${Value}! Remove all the cities that are a ${Value}`);
      citiesInPlay = citiesInPlay.filter((city) => !city[category].includes(value));
    }

  } else if (category === 'hemisphere') {
    if (keep) {
      alert(`Yes, the city is in the ${value} hemisphere! Keep all the cities that are in the ${value} hemisphere`);
      citiesInPlay = citiesInPlay.filter((city) => city[category].includes(value));

    } else {
      alert(`No, the city is not in the ${value} hemisphere! Remove all the cities that are in the ${value} hemisphere`);
      citiesInPlay = citiesInPlay.filter((city) => !city[category].includes(value));
    }

  } else {
    if (keep) {
      alert(`Yes, the city is in ${uppercaseValue}! Keep all the cities in ${uppercaseValue}`);
      citiesInPlay = citiesInPlay.filter((city) => city[category] === value);

    } else {
      alert(`No, the city is not in ${uppercaseValue}! Remove all the cities in ${uppercaseValue}`);
      citiesInPlay = citiesInPlay.filter((city) => city[category] !== value);
    }
    
  }
  generateBoard();
};


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (cityToConfirm) => {
  const confirmGuess = confirm(`Are you sure you want to guess on ${cityToConfirm}?`)
  if (confirmGuess === true) {
  checkMyGuess(cityToConfirm) //Should probably be invoked here?
  }
};


// If you confirm, this function is invoked
const checkMyGuess = (cityToCheck) => {
  if (cityToCheck === secret.name) {
  winOrLose.style.display = 'flex';
  board.style.display = 'none';
  winOrLose.innerHTML += `
        <h1>YOU WIN! ${cityToCheck} was the secret city</h1>
    `;
  } else {
    winOrLose.style.display = 'flex'
    board.style.display = 'none'
    winOrLose.innerHTML += `
        <h1>You lost! ${cityToCheck} was not the secret city, it was ${secret.name}!</h1>
      `;
  }
};


const start = () => {
  citiesInPlay = CITIES // reset characters to the initial array
  winOrLose.style.display = 'none' // don't show the win/lose screen
  board.style.display = 'flex' // show the game board again
  setSecret() // set a new secret city
  generateBoard() // draw the board with all the cities
} 


// Invokes the start function when website is loaded
start()


// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener("click", start)



