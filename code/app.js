// All the DOM selectors stored as short variables
const characterWrapper = document.getElementById("board");
const charactersControls = document.getElementById("character-controls");
const choiceElements = document.querySelectorAll(".question .choice");
const remainGuessElement = document.getElementById("remain-guess");
const pageContainer = document.getElementById("page-container");
const loading = document.getElementById("loading");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    id: 1,
    name: "Jabala",
    img: "./assets/images/jabala.svg",
    hairColor: "hidden",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 2,
    name: "Jack",
    img: "./assets/images/jack.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 3,
    name: "Jacques",
    img: "./assets/images/jacques.svg",
    hairColor: "grey",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: true,
    isRemoved: false,
  },
  {
    id: 4,
    name: "Jai",
    img: "./assets/images/jai.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 5,
    name: "Jake",
    img: "./assets/images/jake.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 6,
    name: "James",
    img: "./assets/images/james.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 7,
    name: "Jana",
    img: "./assets/images/jana.svg",
    hairColor: "black",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 8,
    name: "Jane",
    img: "./assets/images/jane.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 9,
    name: "Jaqueline",
    img: "./assets/images/jaqueline.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },

  {
    id: 10,
    name: "Jazebelle",
    img: "./assets/images/jazebelle.svg",
    hairColor: "purple",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: true,
    isRemoved: false,
  },
  {
    id: 11,
    name: "Jean",
    img: "./assets/images/jean.svg",
    hairColor: "brown",
    eyeColor: "blue",
    glasses: true,
    hat: true,
    smoker: true,
    isRemoved: false,
  },
  {
    id: 12,
    name: "Jeane",
    img: "./assets/images/jeane.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 13,
    name: "Jed",
    img: "./assets/images/jed.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: true,
    smoker: true,
    isRemoved: false,
  },
  {
    id: 14,
    name: "Jenni",
    img: "./assets/images/jenni.svg",
    hairColor: "white",
    eyeColor: "hidden",
    glasses: false,
    hat: true,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 15,
    name: "Jeri",
    img: "./assets/images/jeri.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 16,
    name: "Jerry",
    img: "./assets/images/jerry.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 17,
    name: "Jess",
    img: "./assets/images/jess.svg",
    hairColor: "black",
    eyeColor: "blue",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 18,
    name: "Jocelyn",
    img: "./assets/images/jocelyn.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 19,
    name: "Jon",
    img: "./assets/images/jon.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 20,
    name: "Jordan",
    img: "./assets/images/jordan.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 21,
    name: "Josephine",
    img: "./assets/images/josephine.svg",
    hairColor: "grey",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 22,
    name: "Josh",
    img: "./assets/images/josh.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: false,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 23,
    name: "Jude",
    img: "./assets/images/jude.svg",
    hairColor: "black",
    eyeColor: "green",
    glasses: false,
    hat: false,
    smoker: false,
    isRemoved: false,
  },
  {
    id: 24,
    name: "Julie",
    img: "./assets/images/julie.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: true,
    smoker: false,
    isRemoved: false,
  },
];

let guessLimit = 4;
let firstTimeRender = true;

choiceElements.forEach((choiceElement) =>
  choiceElement.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    if (!e.target.classList.contains("disable")) {
      if (guessLimit >= 1) {
        const value = e.target.getAttribute("data-value");
        const type = e.target.parentNode.getAttribute("data-type");
        e.target.classList.add("disable");
        // console.log(value, type);
        filterCharacters(value, type);
        guessLimit--;
        remainGuessElement.innerText = guessLimit;
      } else {
        alert("You ran out of your choices. Guess one of them >:D");
      }
    }
  })
);

const selectSecretCharacter = () => {
  const random = Math.floor(Math.random() * CHARACTERS.length);
  selectedSecretCharacter = CHARACTERS[random];
};

const filterCharacters = (value, type) => {
  // console.log(value, type);
  if (value == "true" || value == "false") {
    value = Boolean(value);
  }
  // console.log("selectedSecretCharacter[type]", selectedSecretCharacter[type]);
  // console.log("value", value);
  if (value === selectedSecretCharacter[type]) {
    document.getElementById("right-guess").innerHTML =
      "Super! Your guess is right!";

    setTimeout(function () {
      document.getElementById("right-guess").innerHTML = "";
    }, 3000);

    const removedCharacters = CHARACTERS.filter(
      (character) => character[type] !== selectedSecretCharacter[type]
    );

    removedCharacters.map((character) => {
      character.isRemoved = true;
    });
  } else if (value !== selectedSecretCharacter[type]) {
    document.getElementById("wrong-guess").innerHTML = `Your guess is wrong!`;

    setTimeout(function () {
      document.getElementById("wrong-guess").innerHTML = "";
    }, 3000);

    const removedCharacters = CHARACTERS.filter(
      (character) => character[type] === value
    );

    removedCharacters.map((character) => {
      character.isRemoved = true;
    });
  }
  renderCharacters();
};

const renderCharacters = () => {
  characterWrapper.innerHTML = "";
  if (firstTimeRender === true) {
    CHARACTERS.map((character) => {
      characterWrapper.innerHTML += `
      <div class="grid">
        <div class="character-wrapper ${
          character.isRemoved ? "disable" : ""
        }" onclick="guess(${character.id}, '${character.name}')">
          <p>${character.name}</p>
          <img src=${character.img} alt=${
        character.name
      } class="character-img"/>
        </div>
      </div>
      `;
    });
    firstTimeRender = false;
  } else {
    CHARACTERS.map((character) => {
      characterWrapper.innerHTML += `
        <div class="character-wrapper ${
          character.isRemoved ? "disable" : ""
        }" onclick="guess(${character.id}, '${character.name}')">
          <p>${character.name}</p>
          <img src=${character.img} alt=${
        character.name
      } class="character-img"/>
        </div>
      `;
    });
  }
};

const guess = (id, name) => {
  if (confirm(`${name}? Are you sure?`)) {
    if (id === selectedSecretCharacter.id) {
      alert("You win");
    } else if (id !== selectedSecretCharacter.id) {
      alert("Game over");
    }
    window.location.reload();
  }
};

const renderPage = () => {
  loading.classList.add("none");
  pageContainer.classList.remove("none");
  pageContainer.classList.add("page-container");
};

const initialize = (() => {
  setTimeout(renderPage, 4000);
  remainGuessElement.innerText = guessLimit;
  selectSecretCharacter();
  renderCharacters();
})();
