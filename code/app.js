// All the DOM selectors stored as short variables
const characterWrapper = document.getElementById("board");
const guessBtn = document.getElementById("guess");
const userHairQuestion = document.getElementById("hairQuestions");
const userEyeQuestion = document.getElementById("eyeQuestions");
const userGlassesQuestion = document.getElementById("glassesQuestion");
const userHatQuestion = document.getElementById("hatQuestion");
const userSmokerQuestion = document.getElementById("smokerQuestion");

// Array with all the characters, as objects
const CHARACTERS = [
  {
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

const loadCharacters = () => {
  characterWrapper.innerHTML = "";
  CHARACTERS.map((character) => {
    characterWrapper.innerHTML += `
      <div class="character-wrapper ${character.removed ? "disable" : ""}">
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
selectCharacter();

const userChoice = () => {
  if (userHairQuestion.value === selectedCharacter.hairColor) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.hairColor === selectedCharacter.hairColor
    );

    const removedCharacters = CHARACTERS.filter(
      (character) => character.hairColor !== selectedCharacter.hairColor
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }
  if (userHairQuestion.value !== selectedCharacter.hairColor) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.hairColor !== userHairQuestion.value
    );

    const removedCharacters = CHARACTERS.filter(
      (character) => character.hairColor === userHairQuestion.value
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }
};

const userEyeChoice = () => {
  if (userEyeQuestion.value === selectedCharacter.eyeColor) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.eyeColor === selectedCharacter.eyeColor
    );
    const removedCharacters = CHARACTERS.filter(
      (character) => character.eyeColor !== selectedCharacter.eyeColor
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }
  if (userEyeQuestion.value !== selectedCharacter.eyeColor) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.eyeColor !== userEyeQuestion.value
    );

    const removedCharacters = CHARACTERS.filter(
      (character) => character.eyeColor === userEyeQuestion.value
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }
};

const userGlassesChoice = () => {
  if (Boolean(userGlassesQuestion.value) == selectedCharacter.glasses) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.glasses === selectedCharacter.glasses
    );
    const removedCharacters = CHARACTERS.filter(
      (character) => character.glasses !== selectedCharacter.glasses
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }

  if (Boolean(userGlassesQuestion.value) !== selectedCharacter.glasses) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.glasses !== Boolean(userGlassesQuestion.value)
    );

    const removedCharacters = CHARACTERS.filter(
      (character) => character.glasses === Boolean(userGlassesQuestion.value)
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }
};

const userHatChoice = () => {
  if (Boolean(userHatQuestion.value) == selectedCharacter.hat) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.hat === selectedCharacter.hat
    );
    const removedCharacters = CHARACTERS.filter(
      (character) => character.hat !== selectedCharacter.hat
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }

  if (Boolean(userHatQuestion.value) !== selectedCharacter.hat) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.hat !== Boolean(userHatQuestion.value)
    );

    const removedCharacters = CHARACTERS.filter(
      (character) => character.hat === Boolean(userHatQuestion.value)
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }
};

const userSmokerChoice = () => {
  if (Boolean(userSmokerQuestion.value) == selectedCharacter.smoker) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.smoker === selectedCharacter.smoker
    );
    const removedCharacters = CHARACTERS.filter(
      (character) => character.smoker !== selectedCharacter.smoker
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }

  if (Boolean(userSmokerQuestion.value) !== selectedCharacter.smoker) {
    const restCharacters = CHARACTERS.filter(
      (character) => character.smoker !== Boolean(userSmokerQuestion.value)
    );

    const removedCharacters = CHARACTERS.filter(
      (character) => character.smoker === Boolean(userSmokerQuestion.value)
    );
    removedCharacters.map((character) => {
      character.removed = true;
    });
    loadCharacters();
  }
};

// const userChoice = {
//   name: undefined,
//   img: undefined,
//   hairColor: undefined,
//   eyeColor: undefined,
//   glasses: undefined,
//   hat: undefined,
//   smoker: undefined,
// };

const guess = () => {
  let userAnswer = prompt("Please guess").toLowerCase();
  if (userAnswer === selectedCharacter.name.toLowerCase()) {
    alert("You win")

  } else if (userAnswer !== selectedCharacter.name.toLowerCase()) {
    alert("Game over")
  }

}

setTimeout(loadCharacters, 1000);