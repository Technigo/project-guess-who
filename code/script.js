// All the DOM selectors stored as short variables
const board = document.getElementById("board")
const questions = document.getElementById("questions")
const restartButton = document.getElementById("restart")
const userName = document.getElementById("name-input")

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
    accessories: `Yes, the animal wears x! Keep all the x wearers.`,
    behaviour: `Yes, it is a x boy/girl! Keep all the x ones.`,
  },
  {
    furColor: `No, the animal is not x. Remove all x animals!`,
    furPattern: `No, the animal don"t got x fur. Remove all animals that have x fur!`,
    animal: `No, it"s not a x. Remove all animals that are a x!`,
    accessories: `No, the animal doesn"t wear x. Remove all the x wearers!`,
    behaviour: `No, it is not a x boy/girl. Remove all the x ones!`,
  }
]

// Global variables
let secret, currentQuestion, charactersInPlay, startTime, endTime, questionsAsked = 0,
  totalSeconds = 0, player

// Draw the game board
const generateBoard = () => {
  board.innerHTML = `<audio id="card-sound" src="./audio/card-flip.mp3">
  </audio>`
  
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
  const audio = document.getElementById("card-sound")
  const card = document.querySelectorAll(".card-front")
  
  //sound on hover when cards are flipped
  card.forEach(card => card.addEventListener("mouseenter", () => audio.play()))
  card.forEach(card => card.addEventListener("mouseout", () => audio.play()))
     
  //displays how many questions a player asked
  counter.innerHTML = `Questions asked: ${questionsAsked}`
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

//timer showing the passing seconds in the game
const timer = (x) => {
  if (x === "restart") {
    totalSeconds = 0;
  }
  totalSeconds++
  let minute = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds - (minute * 60);
  if (minute < 10){
    minute = "0" + minute;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  document.getElementById("timer").innerHTML = `Time passed: ${minute}:${seconds}`;
}

// This function to start (and restart) the game
// sets the gameboard, all the characters in play, secret character and timer
const start = () => {
  const qSection = document.getElementById("question-section");
  charactersInPlay = CHARACTERS
  qSection.innerHTML += `<form id="form" class="form">
  <label for="name-input">
  Insert your name:</label>
  <input id="name-input" name="name-input" type="text"/>
  <button id="name-Btn" class="filled-button" type="submit">Let's play!</submit>
  </form>`
  const nameBtn = document.getElementById("name-Btn");
  const form = document.getElementById("form");
  form.style.display="flex";
 
  nameBtn.addEventListener("click", (event) => {
    event.preventDefault();
    form.style.display = "none";
    player = userName.value;
  })
  generateBoard()
  setSecret()
  totalSeconds = 0;
  timer("restart")
  setInterval(timer, 1000)
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (handleOption) => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  const findOut = document.getElementById("filter")
  questionsAsked++
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
  findOut.addEventListener("click", stopPropergate);
}

//the stored data for the current quess is passed as an argument to checkQuestion 
//repetition of the exact same function on click is hindered
const stopPropergate = (event) => {
  event.stopImmediatePropagation();
  checkQuestion(currentQuestion)
}

//This function is innvoked when you click FindOut. It compares the secret characters properties with the players options and answer with a sentence
const checkQuestion = (currentQ) => {
  let userValue = currentQ.value
  let userAttr = currentQ.attribute
  let userCat = currentQ.category

  //using set up sentences from an array
  if (userCat === "accessories" || userCat === "behaviour") {
    if (userValue === secret[userAttr]) {
      alert(sentences[0][userCat].replaceAll("x", userAttr))
    } else {
      alert(sentences[1][userCat].replaceAll("x", userAttr))
    }
  } else {
    if (userValue === secret[userAttr]) {
      alert(sentences[0][userAttr].replaceAll("x", userValue))
    } else {
      alert(sentences[1][userAttr].replaceAll("x", userValue))
    }
  }
  filterCharacters(userValue, userAttr)//passes parameters to a filter function
}


// Filters the characters on properties of keep(depending on option chosen of player) and alerts the response. Then uses array.filter to return an array of characters based on that
const filterCharacters = (keep, group) => {
  if (keep === secret[group]) {
    charactersInPlay = charactersInPlay.filter(char => char[group] === keep)
  } else {
    charactersInPlay = charactersInPlay.filter(char => char[group] !== keep)
  }
  //generates a new board depending on the filtered array
  generateBoard(charactersInPlay)
}

// when the player clicks guess they need to confirm with yes or no. On yes checkMyGuess is invoked, on no the gameboard is showed again
const guess = (suspect) => {
  board.innerHTML = `
    <div class="guess-confirmation">
      Are you sure you want to guess on ${suspect}? 
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
  let winOrLose = document.getElementById("winOrLose")
  winOrLose.style.display = "block" //shows winOrLose section

  if (suspect === secret.name) {
    winOrLose.innerHTML = `
      <div class="win-or-lose">
        <img
          class="guess-who-icon"
          src="images/print.png"
          alt="Guess Who"/>
        <h1 id="winOrLoseText">
          Yes, ${suspect} was the secret character! Well done!
        </h1>
        <div class="card-img-wrap">
          <div class="card-img">
            <img src=${secret.img} 
            alt=${secret.name}/>
          </div>
        </div>
        <h1> Your total time was ${Math.round((totalSeconds/60)*100)/100} minutes for this round</h1>
        <button id="playAgain" class="filled-button">
          PLAY AGAIN
        </button>
      </div>
    `
  } else {
    winOrLose.innerHTML = `
      <div class="win-or-lose">
        <img
          class="guess-who-icon"
          src="images/print.png"
          alt="Guess Who"/>
        <h1 id="winOrLoseText">
          Sorry, ${suspect} was the not the secret character, but ${secret.name}! Better luck next time.
        </h1>
        <div class="card-img-wrap">
          <div class="card-img">
            <img 
            src=${secret.img} 
            alt=${secret.name}/>
          </div>
        </div>
        <h1> Your total time was ${Math.round((totalSeconds/60)*100)/100} minutes for this round</h1>
        <button id="playAgain" class="filled-button">
          PLAY AGAIN
        </button>
      </div>
    `
  }
  questionsAsked = 0;
  //play again? click and winOrLose section will be hidden and start() will run
  const playAgain = document.getElementById("playAgain")
  playAgain.addEventListener("click", () => {
    winOrLose.style.display = "none"
    start()
  })
}

// Invokes the start function when website is loaded
start()

restartButton.addEventListener("click", start)

questions.addEventListener("change", () => {
  selectQuestion(questions.value)
})