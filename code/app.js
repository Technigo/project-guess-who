// All the DOM selectors stored as short variables
const characterWrapper = document.getElementById("board");
const guessBtn = document.getElementById("guess");
const charactersControls = document.getElementById("character-controls");
const revealButton = document.getElementById("reveal-button");

// Array with all the characters, as objects
const CHARACTERS = [
  {
    id: 1,
    name: "Jabala",
    img: "images/jabala.svg",
    hairColor: "hidden",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    smoker: false,
    removed: false,
  },
  {
    id: 2,
    name: "Jack",
    img: "images/jack.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: false,
    removed: false,
  },
  {
    id: 3,
    name: "Jacques",
    img: "images/jacques.svg",
    hairColor: "grey",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: true,
    removed: false,
  },
  {
    id: 4,
    name: "Jai",
    img: "images/jai.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 5,
    name: "Jake",
    img: "images/jake.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 6,
    name: "James",
    img: "images/james.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 7,
    name: "Jana",
    img: "images/jana.svg",
    hairColor: "black",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 8,
    name: "Jane",
    img: "images/jane.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 9,
    name: "Jaqueline",
    img: "images/jaqueline.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },

  {
    id: 10,
    name: "Jazebelle",
    img: "images/jazebelle.svg",
    hairColor: "purple",
    eyeColor: "hidden",
    glasses: true,
    hat: false,
    smoker: true,
    removed: false,
  },
  {
    id: 11,
    name: "Jean",
    img: "images/jean.svg",
    hairColor: "brown",
    eyeColor: "blue",
    glasses: true,
    hat: true,
    smoker: true,
    removed: false,
  },
  {
    id: 12,
    name: "Jeane",
    img: "images/jeane.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 13,
    name: "Jed",
    img: "images/jed.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: true,
    smoker: true,
    removed: false,
  },
  {
    id: 14,
    name: "Jenni",
    img: "images/jenni.svg",
    hairColor: "white",
    eyeColor: "hidden",
    glasses: false,
    hat: true,
    smoker: false,
    removed: false,
  },
  {
    id: 15,
    name: "Jeri",
    img: "images/jeri.svg",
    hairColor: "orange",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 16,
    name: "Jerry",
    img: "images/jerry.svg",
    hairColor: "hidden",
    eyeColor: "blue",
    glasses: false,
    hat: true,
    smoker: false,
    removed: false,
  },
  {
    id: 17,
    name: "Jess",
    img: "images/jess.svg",
    hairColor: "black",
    eyeColor: "blue",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 18,
    name: "Jocelyn",
    img: "images/jocelyn.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 19,
    name: "Jon",
    img: "images/jon.svg",
    hairColor: "brown",
    eyeColor: "green",
    glasses: true,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 20,
    name: "Jordan",
    img: "images/jordan.svg",
    hairColor: "yellow",
    eyeColor: "hidden",
    glasses: true,
    hat: true,
    smoker: false,
    removed: false,
  },
  {
    id: 21,
    name: "Josephine",
    img: "images/josephine.svg",
    hairColor: "grey",
    eyeColor: "brown",
    glasses: false,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 22,
    name: "Josh",
    img: "images/josh.svg",
    hairColor: "yellow",
    eyeColor: "green",
    glasses: false,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 23,
    name: "Jude",
    img: "images/jude.svg",
    hairColor: "black",
    eyeColor: "green",
    glasses: false,
    hat: false,
    smoker: false,
    removed: false,
  },
  {
    id: 24,
    name: "Julie",
    img: "images/julie.svg",
    hairColor: "black",
    eyeColor: "brown",
    glasses: true,
    hat: true,
    smoker: false,
    removed: false,
  },
];

// Function to update current question
const updateQuestion = () => {
  const { options, selectedIndex } = charactersControls;
  const type = options[selectedIndex].parentNode.label;
  const value = options[selectedIndex].value;

  question = {
    type,
    value,
  };
};

const renderCharacters = () => {
  characterWrapper.innerHTML = "";
  CHARACTERS.map((character) => {
    characterWrapper.innerHTML += `
      <div class="character-wrapper ${
        character.removed ? "disable" : ""
      }" onclick="guess(${character.id}, '${character.name}')">
        <p>${character.name}</p>
        <img src=${character.img} alt=${character.name} class="character-img"/>
      </div>
    `;
  });
};

const selectCharacter = () => {
  const random = Math.floor(Math.random() * (CHARACTERS.length + 1));
  selectedCharacter = CHARACTERS[random];
};

const filterCharacters = () => {
  let { value, type } = question;

  if (value == "true" || value == "false") {
    value = Boolean(value);
  }

  if (value === selectedCharacter[type]) {
    const removedCharacters = CHARACTERS.filter(
      (character) => character[type] !== selectedCharacter[type]
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
  } else if (value !== selectedCharacter[type]) {
    const removedCharacters = CHARACTERS.filter(
      (character) => character[type] === value
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
  }
  renderCharacters();
};

const guess = (id, name) => {
  if (confirm(`${name}? Are you sure?`)) {
    if (id === selectedCharacter.id) {
      alert("You win");
    } else if (id !== selectedCharacter.id) {
      alert("Game over");
    }
  }
};

const initialize = (() => {
  selectCharacter();
  updateQuestion();
  setTimeout(renderCharacters, 1000);
})();
