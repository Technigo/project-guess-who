// All the DOM selectors stored as short variables
const board = document.getElementById("board")
const questions = document.getElementById("questions")
const restartButton = document.getElementById("restart")
const countUp = document.getElementById("timer")
const findOut = document.getElementById("filter")

// Array with all the characters, as objects
const CHARACTERS = [{
    name: "Rufus",
    img: "./images/rufus.svg",
    furColor: "beige",
    furPattern: "patchy",
    animal: "dog",
    bad: true,
    collar: false,
    bling: false,
  },
  {
    name: "Sandy",
    img: "./images/sandy.svg",
    furColor: "yellow",
    furPattern: "patchy",
    animal: "cat",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Tony",
    img: "./images/tony.svg",
    furColor: "brown",
    furPattern: "patchy",
    animal: "dog",
    bad: true,
    collar: true,
    bling: false,
  },
  {
    name: "Bernie",
    img: "./images/bernie.svg",
    furColor: "black",
    furPattern: "plain",
    animal: "sheep",
    bad: true,
    collar: false,
    bling: false,
  },
  {
    name: "Lucifer",
    img: "./images/lucifer.svg",
    furColor: "black",
    furPattern: "patchy",
    animal: "cat",
    bad: true,
    collar: false,
    bling: false,
  },
  {
    name: "Lady",
    img: "./images/lady.svg",
    furColor: "fantasy",
    furPattern: "stripey",
    animal: "cat",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Silly",
    img: "./images/silly.svg",
    furColor: "brown",
    furPattern: "plain",
    animal: "mouse",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Gordon",
    img: "./images/gordon.svg",
    furColor: "fantasy",
    furPattern: "patchy",
    animal: "dog",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Simba",
    img: "./images/simba.svg",
    furColor: "yellow",
    furPattern: "spotty",
    animal: "cat",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Jazebelle",
    img: "./images/jazebelle.svg",
    furColor: "fantasy",
    furPattern: "plain",
    animal: "cat",
    bad: false,
    collar: false,
    bling: true
  },
  {
    name: "Rocky",
    img: "./images/rocky.svg",
    furColor: "white",
    furPattern: "spotty",
    animal: "dog",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Bob",
    img: "./images/bob.svg",
    furColor: "brown",
    furPattern: "plain",
    animal: "dog",
    bad: false,
    collar: false,
    bling: true
  },
  {
    name: "Jed",
    img: "./images/jed.svg",
    furColor: "beige",
    furPattern: "plain",
    animal: "dog",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Jenni",
    img: "./images/jenni.svg",
    furColor: "white",
    furPattern: "patchy",
    animal: "dog",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Lars",
    img: "./images/lars.svg",
    furColor: "beige",
    furPattern: "plain",
    animal: "dog",
    bad: false,
    collar: true,
    bling: false,
  },
  {
    name: "Jerry",
    img: "./images/jerry.svg",
    furColor: "brown",
    furPattern: "plain",
    animal: "dog",
    bad: true,
    collar: false,
    bling: false,
  },
  {
    name: "Pip",
    img: "./images/pip.svg",
    furColor: "white",
    furPattern: "plain",
    animal: "mouse",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Rawr",
    img: "./images/rawr.svg",
    furColor: "orange",
    furPattern: "stripey",
    animal: "cat",
    bad: true,
    collar: false,
    bling: false,
  },
  {
    name: "Maggie",
    img: "./images/maggie.svg",
    furColor: "black",
    furPattern: "spotty",
    animal: "cat",
    bad: true,
    collar: false,
    bling: false,
  },
  {
    name: "Sofie",
    img: "./images/sofie.svg",
    furColor: "orange",
    furPattern: "plain",
    animal: "cat",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Josephine",
    img: "./images/josephine.svg",
    furColor: "beige",
    furPattern: "plain",
    animal: "dog",
    bad: true,
    collar: false,
    bling: false,
  },
  {
    name: "Kahn",
    img: "./images/kahn.svg",
    furColor: "yellow",
    furPattern: "spotty",
    animal: "cat",
    bad: false,
    collar: false,
    bling: false
  },
  {
    name: "Missy",
    img: "./images/missy.svg",
    furColor: "brown",
    furPattern: "plain",
    animal: "cat",
    bad: false,
    collar: false,
    bling: false,
  },
  {
    name: "Scratch",
    img: "./images/scratch.svg",
    furColor: "white",
    furPattern: "plain",
    animal: "cat",
    bad: true,
    collar: true,
    bling: false,
  },
]

//array of sentences as answer depending on what question the  player chooses
const sentences = [{
    furColor: `Yes, the animal is x! Keep all x animals.`,
    furPattern: `Yes, the animal has x fur! Keep all animals that have x fur.`,
    animal: `Yes, it is a x! Keep all animals that are a x.`,
    collar: `Yes, the animal wears a x! Keep all the x wearers.`,
    bling: `Yes, the animal wears x! Keep all the xy animals.`,
    bad: `Yes, it is a x boy/girl! Keep all the x ones.`,
  },
  {
    furColor: `No, the animal is not x. Remove all x animals!`,
    furPattern: `No, the animal don't got x fur. Remove all animals that have x fur!`,
    animal: `No, it's not a x. Remove all animals that are a x!`,
    collar: `No, the animal doesn't wear x. Remove all the x wearers!`,
    bling: `No, the animal does not wear x! Remove all the xy animals.`,
    bad: `No, it is not a x boy/girl. Remove all the x ones!`,
  }
]

// Global variables
let secret, currentQuestion, charactersInPlay, player,
  questionsAsked = 0,
  totalSeconds = 0,
  rightGuesses = 0,
  wrongGuesses = 0,
  summaryArray = []

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ""
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div id="card" class="card">
        <div class="card-inner">
          <div class="card-front">
            <p>${person.name}</p>
            <div class="card-img">
              <img src=${person.img} alt=${person.name} />
            </div>
          </div>
          <div class="card-back">
            <div class="guess">
              <span>
                Guess on ${person.name}?
              </span>
              <button id ="guess-btn" class="filled-button small" onclick="guess('${person.name}')">
                Guess
              </button>
            </div>
          </div>
        </div>
      </div>
    `
  })

  const counter = document.getElementById("counter")
  const card = document.querySelectorAll(".card-front")
  counter.innerHTML = `Questions asked: ${questionsAsked}` //displays how many questions a player asked
  cardFlipAudio(card) //sound on hover when cards are flipped
}

//adds sound to element
const cardFlipAudio = (card) => {
  const audio = document.getElementById("card-sound")
  card.forEach(card => card.addEventListener("mouseenter", () => audio.play()))
  card.forEach(card => card.addEventListener("mouseout", () => audio.play()))
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

//timer showing the passing minutes/seconds in the game
const timer = (x) => {
  if (x === "restart") {
    totalSeconds = 0;
  }
  totalSeconds++
  let minute = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - (minute * 60);
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  countUp.innerHTML = `Time passed: ${minute}:${seconds}`;
}

//stops the timer and resets time to 0
const stopTimer = () => {
  var setTimer = setInterval(timer, 1000);
  clearInterval(setTimer)
  timer("restart")
}

//make it possible for the player to add name before starting the game
const preGame = () => {
  const form = document.getElementById("form");
  form.classList.add("active") //shows the form section

  board.innerHTML = ""
  form.innerHTML += `
    <label for="name-input">
      Insert your name:
    </label>
    <input id="name-input" name="name-input" type="text"/>
    <button id="name-Btn" class="filled-button">
      Let's play!
    </button>
  `
  const nameBtn = document.getElementById("name-Btn");
  const userName = document.getElementById("name-input")
  nameBtn.addEventListener("click", () => {
    player = userName.value; //stores nameinput
    form.innerHTML = ""
    form.classList.remove("active") //hides form with nameinput
    start() //runs start
  })
}

// This function to start (and restart) the game
// sets the gameboard, all the characters in play, secret character and timer
const start = () => {
  charactersInPlay = CHARACTERS
  questions.selectedIndex = defaultStatus;
  generateBoard()
  setSecret()
  stopTimer()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (handleOption) => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  switch (category) {
    case "fur color":
      currentQuestion = {
        attribute: "furColor",
        value: handleOption, //value is set to the option playes selects
        category: category,
      };
      break;
    case "fur pattern":
      currentQuestion = {
        attribute: "furPattern",
        value: handleOption,
        category: category,
      }
      break;
    case "animal":
      currentQuestion = {
        attribute: "animal",
        value: handleOption,
        category: category,
      }
      break
    default:
      currentQuestion = {
        attribute: handleOption, //attribute is set to the option playes selects
        value: true,
        category: category,
      };
  };
  questionsAsked++
}

//This function is invoked when you click Find Out. 
//Puts forward values needed for the sentences and filtering in filter function 
const checkQuestion = () => {
  let group;

  currentQuestion.category === "accessories" || currentQuestion.category === "behaviour" ? (
    group = currentQuestion.attribute
  ) : (
    group = currentQuestion.value
  );

  currentQuestion.value === secret[currentQuestion.attribute] ? (
    filterCharacters(true, group)
  ) : (
    filterCharacters(false, group)
  );
}

// Alerts if the currentQuestion option was correct or not using sentences stored in an array 
// Filters chars on boolean by keep with array.filter to return an array to generate a new gameboard
const filterCharacters = (keep, group) => {
  keep === true ? (
    alert(sentences[0][currentQuestion.attribute].replaceAll("x", group)),
    charactersInPlay = charactersInPlay.filter(char => char[currentQuestion.attribute] === currentQuestion.value)
  ) : (
    alert(sentences[1][currentQuestion.attribute].replaceAll("x", group)),
    charactersInPlay = charactersInPlay.filter(char => char[currentQuestion.attribute] !== currentQuestion.value)
  );
  generateBoard(charactersInPlay)
}

// when the player clicks guess they need to confirm with yes or no. 
//On yes checkMyGuess is invoked, on no the gameboard is showed again
const guess = (suspect) => {
  board.innerHTML = `
    <div class="guess-confirmation">
      <h2> 
        Are you sure you want to guess on ${suspect}? 
      </h2>
      <button id="yes-btn" class="filled-button">
        YES
      </button> 
      <button id="no-btn" class="filled-button">
        NO
      </button>
    </div>
  `
  const yesBtn = document.getElementById("yes-btn")
  const noBtn = document.getElementById("no-btn")
  yesBtn.addEventListener("click", () => {
    checkMyGuess(suspect)
  })
  noBtn.addEventListener("click", () => {
    generateBoard(charactersInPlay)
  })
}

// If you confirm, this function is invoked which says if you won or lose
const checkMyGuess = (suspect) => {
  let win, lose
  suspect === secret.name ? (
    rightGuesses++,
    win = `Yes, ${suspect} was the secret character! Well done ${player}!`,
    endGame(win)  
  ) : (
    wrongGuesses++,
    lose = `No, that was not the right answer, but ${suspect}. Better luck next time ${player}!`,
    endGame(lose)
  );
}

//prints out the win/lose screen 
const endGame = (result) => {
  const winOrLose = document.getElementById("winOrLose")
  winOrLose.classList.add("active")

  winOrLose.innerHTML = `
  <div class="win-or-lose">
    <div class="guess-who-icon">
      <img src="./images/print.png" alt="Guess Who" />
    </div>
    <h1 id="winOrLoseText">${result}</h1>
    <div class="card-img-wrap">
      <div class="card-img">
        <img src=${secret.img} 
        alt=${secret.name}/>
      </div>
    </div>
    <h1>${countUp.innerHTML} and ${questionsAsked} questions asked for this round</h1>
    <button id="playAgain" class="filled-button">
      PLAY AGAIN
    </button>
    <h2> You have a total of 
      <span class="wrong">${wrongGuesses}</span> 
      incorrect guesses and 
      <span class="right">${rightGuesses}</span> 
      correct guesses!
    </h2>
    <h2>Results previous games:</h2>
  </div>
  </div>
`
  //keeps the results from previous games & displays it
  summaryArray.push(`Questions: ${questionsAsked}, ${countUp.innerHTML}`)
  summaryArray.forEach(sum => winOrLose.innerHTML += `
    <div class="win-or-lose">
      <div class="summary" id="summary">
        ${sum}
      </div>
    </div>
  `)
  if (summaryArray.length > 5) {
    summaryArray = [] //clears the resultlist when it gets to long
  }
  const playAgain = document.getElementById("playAgain")
  restart(playAgain)
}

//play again? click and winOrLose section will be hidden and start() will run
const restart = (button) => {
  button.addEventListener("click", () => {
    winOrLose.classList.remove("active")
    questionsAsked = 0;
    preGame()
  })
}

// Invokes the pre start function when website is loaded & sets timer
preGame()
setInterval(timer, 1000)

restartButton.addEventListener("click", preGame)

findOut.addEventListener("click", () => checkQuestion());

//when the player chooses a question in the scroll down menu change is invoked
//passes the select value to selctedQuestion
questions.addEventListener("change", () => selectQuestion(questions.value))