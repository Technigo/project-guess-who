// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

// This is h3 for displaying name in aside
const NameContainer = document.getElementById("display-name");

// this is where counter will be displayed.
const counterDisplay = document.getElementById("counter-display");

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let playerName = null; //Store the players name
let timer;
let startTime;
let guessCounter = 0;
let playCount = 0;

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Snoop Dogg',
    img: 'images/snoop-dogg.jpeg',
    hair: ['locs'],
    accessories: ['necklace', 'ring'],
    clothes: ['shirt'],
    other: ['mustache', 'smoker'],
    videoUrl: ''
  },
  {
    name: 'Queen Latifah',
    img: 'images/queen-latifah.jpeg',
    hair: ['straight'],
    accessories: ['bracelet', 'hat'],
    clothes: ['t-shirt'],
    other: ['band member'],
    videoUrl: ''
  },
  {
    name: 'Dr. Dre',
    img: 'images/dr-dre.jpeg',
    hair: ['hidden'],
    accessories: ['hat', 'watch', 'earrings'],
    clothes: [],
    other: [],
    videoUrl: ''
  },
  {
    name: 'Eminem',
    img: 'images/eminem.jpeg',
    hair: ['short'],
    accessories: ['earrings'],
    clothes: [],
    other: ['tattoo'],
    videoUrl: ''
  },
  {
    name: 'Sir Mix A Lot',
    img: 'images/sir-mix-alot.jpeg',
    hair: ['hidden'],
    accessories: ['hat', 'ring', 'glasses'],
    clothes: [],
    other: ['mouth open', 'fat'],
    videoUrl: ''
  },
  {
    name: 'Shock G',
    img: 'images/shock-g.jpeg',
    hair: ['big'],
    accessories: ['glasses'],
    clothes: [],
    other: ['mustache'],
    videoUrl: ''
  },
  {
    name: 'Tupac',
    img: 'images/tupac.jpeg',
    hair: ['bold'],
    accessories: ['earrings', 'necklace', 'bandana'],
    clothes: ['jeans shirt'],
    other: ['mustache', 'band member'],
    videoUrl: ''
  },
  {
    name: 'Andre 3000',
    img: 'images/andre-3000.jpeg',
    hair: ['long'],
    accessories: ['necklace', 'bandana', 'ring'],
    clothes: [],
    other: ['tattoo', 'band member'],
    videoUrl: ''
  },
  {
    name: 'Lauryn Hill',
    img: 'images/lauryn-hill.jpeg',
    hair: ['locs'],
    accessories: ['glasses', 'hat'],
    clothes: ['jacket'],
    other: [],
    videoUrl: ''
  },
  {
    name: 'Notorious B.I.G.',
    img: 'images/notorious-big.jpeg',
    hair: ['short'],
    accessories: ['ring', 'watch', 'necklace'],
    clothes: ['colorful'],
    other: ['fat'],
    videoUrl: ''
  },
  {
    name: 'Busta Rhymes',
    img: 'images/busta-rhymes.jpg',
    hair: ['locs'],
    accessories: ['necklace', 'watch', 'ring'],
    clothes: ['jump suit'],
    other: ['mustache'],
    videoUrl: ''
  },
  {
    name: 'Jay Z',
    img: 'images/jay-z.jpeg',
    hair: ['short'],
    accessories: ['earrings', 'necklace'],
    clothes: ['Popeye'],
    other: ['married', 'kids'],
    videoUrl: ''
  },
  {
    name: 'Lil Kim',
    img: 'images/lil-kim.jpeg',
    hair: ['purple'],
    accessories: ['lashes'],
    clothes: ['colorful'],
    other: [],
    videoUrl: ''
  },
  {
    name: 'Eve',
    img: 'images/eve.jpeg',
    hair: ['red'],
    accessories: ['earrings', 'necklace', 'bracelet'],
    clothes: ['fur'],
    other: [],
    videoUrl: ''
  },
  {
    name: 'Erykah Badu',
    img: 'images/erykah-badu.jpeg',
    hair: ['hidden'],
    accessories: ['hat', 'necklace', 'ring', 'bracelet'],
    clothes: ['colorful'],
    other: [],
    videoUrl: ''
  },
  {
    name: 'Chili',
    img: 'images/chili.jpeg',
    hair: ['long'],
    accessories: ['shells', 'necklace'],
    clothes: ['black'],
    other: ['band member'],
    videoUrl: ''
  },
  {
    name: 'Wu Tang Clan',
    img: 'images/wu-tang-clan.jpeg',
    hair: ['hidden', 'locs'],
    accessories: ['hat', 'ring', 'glasses', 'tooth pick', 'necklace', 'bandanda'],
    clothes: ['colorful', 'sweater', 't-shirt', 'shirt'],
    other: ['is a band'],
    videoUrl: ''
  },
  {
    name: 'Salt-N-Pepa',
    img: 'images/salt-n-pepa.jpeg',
    hair: ['hidden'],
    accessories: ['earrings', 'hat', 'necklace', 'ring'],
    clothes: ['colorful'],
    other: ['is a band'],
    videoUrl: ''
  },
  {
    name: 'LL Cool J',
    img: 'images/ll-cool-j.jpeg',
    hair: 'hidden',
    accessories: ['hat', 'watch', 'necklace', 'ring'],
    clothes: ['jacket'],
    other: [],
    videoUrl: ''
  },
  {
    name: 'A Tribe Called Quest',
    img: 'images/a-tribe-called-quest.jpeg',
    hair: ['hidden'],
    accessories: ['hat'],
    clothes: ['shirt', 'sweater'],
    other: ['is a band'],
    videoUrl: ''
  },
  {
    name: 'Missy Elliot',
    img: 'images/missy-elliot.png',
    hair: ['big'],
    accessories: ['hat', 'earrings', 'necklace'],
    clothes: ['t-shirt'],
    other: [],
    videoUrl: ''
  },
  {
    name: 'DMX',
    img: 'images/dmx.jpeg',
    hair: ['bold'],
    accessories: ['necklace', 'bracelet', 'watch'],
    clothes: [],
    other: ['tattoo', 'mustache'],
    videoUrl: ''
  },
  {
    name: 'Redman',
    img: 'images/redman.jpeg',
    hair: ['hidden'],
    accessories: ['hat'],
    clothes: ['shirt'],
    other: ['mustache'],
    videoUrl: ''
  },
  {
    name: 'Big Punisher',
    img: 'images/big-punisher.jpeg',
    hair: ['hidden'],
    accessories: ['necklace', 'hat'],
    clothes: ['striped'],
    other: ['fat'],
    videoUrl: ''
  },
]

// ********** DECLARE FUNCTIONS ********** //

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
  })
}

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log("Secret set to:", secret.name); // This line will log the name of the secret person
}

// MP3 files
const songs = [
  './assets/aurora-jeff-kaale-main-version-27251-02-30.mp3',
  './assets/jazz-and-hop-kidcut-main-version-02-09-12098.mp3',
  './assets/street-knowledge-bosnow-main-version-02-23-3183.mp3'
];

let currentSongIndex = 0;

// Audio element
let audio = new Audio();
audio.loop = true; // Enable looping

let victorySound = new Audio('./assets/crowdhomerunapplause.mp3');

// ********** START THE GAME ********* //

// This function to start (and restart) the game
const start = () => {
  // Hide the landing page
  document.getElementById('landing-page').classList.add('hidden');

  // Show the game board and question section
  document.querySelector('.question-section').classList.remove('hidden');
  document.querySelector('.board-wrapper').classList.remove('hidden');
  document.querySelector('.credits').classList.remove('hidden');
  document.querySelector('.board-wrapper').classList.remove('hidden');

  playCount++;
  document.getElementById("play-count-display").innerText = `You played this game ${playCount} times in a row`;

  charactersInPlay = shuffleArray(CHARACTERS);
  generateBoard();
  setSecret();
  guessCounter = 0;
  updateGuessCounter();
  startTimer();

  // Play a random song if music choice was 'yes'
  if (document.getElementById('musicChoice').value === 'yes') {
    playRandomSong();
  }
}

// Function to play a random song
const playRandomSong = (next = false) => {
  if (!audio.paused) {
    audio.pause(); // Pause current song if playing
  }
  if (next) {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Move to next song, loop back if at the end
  } else {
    currentSongIndex = Math.floor(Math.random() * songs.length); // Select a random song
  }
  audio.src = songs[currentSongIndex];
  audio.play().catch(e => console.log("Failed to play audio:", e)); // Handle any play errors
}

// Toggle sound on or off
const toggleSound = () => {
  const soundIcon = document.getElementById('soundIcon');
  if (audio.src) { 
    if (audio.paused) {
      audio.play();
      soundIcon.src = './assets/pause.svg'; // Switch to pause icon
    } else {
      audio.pause();
      soundIcon.src = './assets/play.svg'; // Switch to play icon
    }
  } else {
    // If audio source is not set, start playing a random song
    playRandomSong();
    soundIcon.src = './assets/pause.svg'; // Switch to pause icon
  }
}

// TIMER Start and Stop 
const startTimer = () => {
  startTime = new Date();
  timer = setInterval(() => {
    const currentTime = new Date();
    const elapsedTime = currentTime - startTime;
    // Format and update timer display
    document.getElementById("timer").innerText = formatTime(elapsedTime);
  }, 1000);
};

const formatTime = (ms) => {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
};

const stopTimer = () => {
  clearInterval(timer);
  const endTime = new Date();
  const totalTime = endTime - startTime;
  // Display total time
}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value;

  currentQuestion = {
    category: category,
    value: value,
  };
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  let keep; //Take in keep to define wether we should keep or not to the filteredCharacters

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  if (category === 'hair' || category === 'accessories' || category === 'clothes' || category === 'other') {
    keep = secret[category].includes(value);
  } else {
    keep = secret[category] === value;
  }

  // Then invoke filterCharacters
  // Passing on the keep value to the filterCharacters function
  filterCharacters(keep);

  guessCounter++; // Increment counter on each question
  updateGuessCounter(); // Update the display
};

// Function to filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  console.log("Current secret after filtering:", secret.name);
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'hair') {
    if (keep) {
      alert(`Yes, the person's hair style is ${value}! Keep all people with the hair style ${value}`);
    } else {
      alert(`No, the person's hair style isn't ${value}! Remove all people with a ${value} hair style`);
    }
  } else if (category === 'accessories') {
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all people who wear ${value}`);
    } else {
      alert(`No, the person doesn't wear ${value}! Remove all people who wear ${value}`);
    }
  } else if (category === 'clothes') {
    if (keep) {
      alert(`Yes, the person is wearing ${value}! Keep all people who are wearing ${value}`);
    } else {
      alert(`No, the person is not wearing ${value}! Remove all people who are wearing ${value}`);
    }
  } else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person has ${value}! Keep all people with ${value}`);
    } else {
      alert(`No, the person doesn't have ${value}! Remove all people with ${value}`);
    }
  }

  // filter by category to keep or remove based on the keep variable.
  if (keep) {
    charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
  } else {
    charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let confirmGuess = confirm(`Are you sure you want to guess on ${personToConfirm}?`);
  console.log("Guessing on:", personToConfirm); // Log the person being guessed
  if (confirmGuess) {
    // If the player wants to guess, invoke the checkMyGuess function.
    checkMyGuess(personToConfirm);
  }
  guessCounter++; // Increment counter on each guess
  updateGuessCounter(); // Update the display
};

const updateGuessCounter = () => {
  counterDisplay.innerText = `You've made ${guessCounter} guesses`;
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  stopTimer();  // Stop the timer

  const winOrLoseText = document.getElementById("winOrLoseText");
  const winOrLoseSection = document.getElementById("winOrLose");

  // 1. Check if the personToCheck is the same as the secret person's name
  if (personToCheck === secret.name) {
    // Play victory sound
    victorySound.play();
    // 2. Set a Message to show in the win or lose section accordingly
    winOrLoseText.innerText = `✨🎉Congratulations!✨🎉 ${secret.name} is the secret artist!`;
  } else {
    // 3. Show the win or lose section
    winOrLoseText.innerText = `Ooops! ${personToCheck} is not the secret artist!😱 Try again!`;
  }

  // 4. Display the win/lose section and hide the game board
  winOrLoseSection.classList.remove('hidden');
  winOrLoseSection.style.display = 'flex';
  board.style.display = 'none';
};

// Setup the play again button
document.getElementById('playAgain').addEventListener('click', () => {
  const winOrLoseSection = document.getElementById("winOrLose");

  // Hide the win/lose section and show the game board
  winOrLoseSection.classList.add('hidden');
  winOrLoseSection.style.display = 'none';
  board.style.display = 'flex';

  // Restart the game
  start();
});

// Invokes the start function when website is loaded
//start()

// All the event listeners
restartButton.addEventListener('click', start)
document.getElementById('questions').addEventListener('change', selectQuestion);
document.getElementById('filter').addEventListener('click', checkQuestion);
document.getElementById('restart').addEventListener('click', start);
document.getElementById('soundButton').addEventListener('click', toggleSound);
document.getElementById('nextSongButton').addEventListener('click', () => {
  playRandomSong(true); // Call with 'true' to play the next song
});
document.getElementById('startGame').addEventListener('click', function () {
  playerName = document.getElementById('playerNameInput').value;
  if (!playerName || playerName.trim() === "") {
    alert("Please enter your name");
    return;
  }
  NameContainer.innerText = `Player: ${playerName}`;

  const musicChoice = document.getElementById('musicChoice').value;
  if (musicChoice === 'yes') {
    playRandomSong();
  }

  start(); // Start the game
});