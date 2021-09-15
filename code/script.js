// All the DOM selectors stored as short variables
const board = document.getElementById("board");
const questions = document.getElementById("questions");
const restartButton = document.getElementById("restart");
const findOutButton = document.getElementById("filter");
const winOrLoseSection = document.getElementById("winOrLose");
const winOrLoseText = document.getElementById("winOrLoseText");
const playAgainButton = document.getElementById("playAgain");

// Array with all the characters, as objects
// An Array named CHARACTERS has several objects {} inside which has many key/properties for it.
// each keys has strings(name) of value. When value is just a name (not number or boolean) it is inside "".
const CHARACTERS = [
  {
    name: "Jabala",
    img: "images/jabala.svg",
    hair: "hidden",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: [],
  },
  {
    name: "Jack",
    img: "images/jack.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jacques",
    img: "images/jacques.svg",
    hair: "grey",
    eyes: "blue",
    accessories: ["hat"],
    other: ["smoker"],
  },
  {
    name: "Jai",
    img: "images/jai.svg",
    hair: "black",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Jake",
    img: "images/jake.svg",
    hair: "yellow",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "James",
    img: "images/james.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jana",
    img: "images/jana.svg",
    hair: "black",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jane",
    img: "images/jane.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },

  {
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hair: "purple",
    eyes: "hidden",
    accessories: ["glasses"],
    other: ["smoker"],
  },
  {
    name: "Jean",
    img: "images/jean.svg",
    hair: "brown",
    eyes: "blue",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jeane",
    img: "images/jeane.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jed",
    img: "images/jed.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses", "hat"],
    other: ["smoker"],
  },
  {
    name: "Jenni",
    img: "images/jenni.svg",
    hair: "white",
    eyes: "hidden",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jeri",
    img: "images/jeri.svg",
    hair: "orange",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jerry",
    img: "images/jerry.svg",
    hair: "hidden",
    eyes: "blue",
    accessories: ["hat"],
    other: [],
  },
  {
    name: "Jess",
    img: "images/jess.svg",
    hair: "black",
    eyes: "blue",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jon",
    img: "images/jon.svg",
    hair: "brown",
    eyes: "green",
    accessories: ["glasses"],
    other: [],
  },
  {
    name: "Jordan",
    img: "images/jordan.svg",
    hair: "yellow",
    eyes: "hidden",
    accessories: ["glasses", "hat"],
    other: [],
  },
  {
    name: "Josephine",
    img: "images/josephine.svg",
    hair: "grey",
    eyes: "brown",
    accessories: [],
    other: [],
  },
  {
    name: "Josh",
    img: "images/josh.svg",
    hair: "yellow",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Jude",
    img: "images/jude.svg",
    hair: "black",
    eyes: "green",
    accessories: [],
    other: [],
  },
  {
    name: "Julie",
    img: "images/julie.svg",
    hair: "black",
    eyes: "brown",
    accessories: ["glasses", "hat"],
    other: [],
  },
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay = CHARACTERS;

// Draws the game board
const generateBoard = () => {
  board.innerHTML = "";
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
    `;
  });
};

// Randomly selects a person from the characters array and sets the value of the variable secret.
const setSecret = () => {
  secret =
  // charactersInPlay[index number of a secret person]
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// This function starts (and restarts) the game
const start = () => {
  charactersInPlay = CHARACTERS; // why repeated here? WHyb can't I use just charactersInPlay (already defined as global variable above)?? //Sets the charactersInPlay array to be all the characters to start with.
  generateBoard();
  setSecret();
  //console.log(secret);
};

// Sets the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;

  const value = questions.value; // This variable stores what option group (category) the question belongs to.

  currentQuestion = {
    category: category,
    value: value, // This variable stores the actual value of the question selected.
  };
};

// This function will be invoked when you click on the 'Find Out' button.
const checkQuestion = () => {
  // line 260 is what line 252-257 defined
  const { category, value } = currentQuestion;
  let keep = false; // Creates a default boolean value for the variable keep. Later on the variable will be reassigned a new boolean value (depending on if the secret matches the selected value).

  // Compares the currentQuestion details with the secret person details based on category (hair, eyes, accessories or others).
  if (category === "hair") {
    // if secret person's hair value matches with currentQuestion's value, keep is true. Otherwise keep is false
    keep = secret.hair === value;
    // "===" means both sides has identical types and values
    //"true" === true / false
    //'3' === 3 / false
    //'false' !== false / true
  } else if (category === "eyes") {
    //if secret person's eyes value matches with currentQuestion's value, keep is true. Otherwise keep is false
    keep = secret.eyes === value;
    // 'else if' means 'if the category is not hair nor eyes'
  } else if (category === "accessories") {
    keep = secret.accessories.includes(value);
  } else if (category === "other") {
    keep = secret.other.includes(value);
  }

  //calling the function of filterCharacters, using the boolean value (true or false? we need that info)
  filterCharacters(keep); // Invokes filterCharacters
};

// Filters the characters array and redraws the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
  // Displays an alert message for different categories and filters by category to keep or remove based on the keep variable.
  // if category is accessories, proceed to line 292. if not, skip the whole {}. If it is true, ignore the other else if{}
  if (category === "accessories") {
    //if (keep) value turns out as true, proceed with its {}. If it is false, skip the whole {} and move on to else {}
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}.`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else if (category === "other") {
    if (keep) {
      alert(
        `Yes, the person is a ${value}! Keep all people that are ${value}s.`
      );
      charactersInPlay = charactersInPlay.filter((person) =>
        person[category].includes(value)
      );
    } else {
      alert(
        `No, the person is not a ${value}! Remove all people that are ${value}s.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => !person[category].includes(value)
      );
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] === value
      );
    } else {
      alert(
        `No, the person doesnt have ${value} ${category}! Remove all people with ${value} ${category}.`
      );
      charactersInPlay = charactersInPlay.filter(
        (person) => person[category] !== value
      );
    }
  }

  // Invokes the function to redraw the board with the remaining people.
  generateBoard();
};

// When clicking on guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  //let으로 해놓은 이유: 고르는 사람은 계속 바뀔테니까 바꿀 수 있도록 유연하게 지정
  let personToCheck = personToConfirm;
  // confirm 이라는 기능 자체는 boolean value: Are you sure 이라는 질문에 Yes : true, Cancel: false
  let userConfirmed = confirm("Are you sure?"); // Displays a confirm-window
  //userConfirmed 는 true 일 수도 있고 false도 있는 boolean value (depends on if user pushes yes or cancel)
  if (userConfirmed) {
    // 만일 user가 yes(take a guess) 버튼을 누르면 체크로 넘어감 (persontocheck라는 variable 가지고)
    checkMyGuess(personToCheck); // If the player wants to guess, checkMyGuess function is invoked.
  }
};

// If user confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // if a secret person's name matches persontocheck, it is "correctGuess"
  const correctGuess = secret.name === personToCheck;
  // Checks if the personToCheck is the same as the secret person's name and displays a message accordingly.
  if (correctGuess) {
    winOrLoseText.innerHTML = `${personToCheck} is correct, you are a winner!`;
  } else {
    winOrLoseText.innerHTML = `${personToCheck} is not the one, you lose!`;
  }
  // Toggles the classlist that make the win or lose section appear
  //틀리고 맞고에 따라 졌거나 이겼다는 메세지로 변하길 원함: eventLister 걸고 미리 만들어놓은 html 페이지 불러오기
  winOrLoseSection.classList.toggle("display");
};
//EventLister은 페이지에서 사용자가 페이지와 interact할때 생기는 모든 변화 (ex/ 스크롤할때나 버튼 누를시 어떤 변화를 원하면 스크롤이나 버튼에 eventlistener을 거는것)

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
// dropdown 메뉴애서 하나를 고를때마다 change event가 일어나고, event가 일어나면 selectQuestion이 invoke 됨
findOutButton.addEventListener("click", checkQuestion);

playAgainButton.addEventListener("click", () => {
  winOrLoseSection.classList.toggle("display");
  start();
});