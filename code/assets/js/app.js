import { CHARACTERS } from "./data.js";
import { capitalizeFirstLetter, selectSecretCharacter } from "./helper.js";

// All the DOM selectors stored as short variables
const pageContainer = document.getElementById("page-container");

let selectedSecretCharacter;
let guessLimit = 4;
let isFirstTimeRender = true;

document.querySelectorAll(".question .choice").forEach((choiceElement) =>
  choiceElement.addEventListener("click", (e) => {
    if (!e.target.classList.contains("disable")) {
      if (guessLimit >= 1) {
        const value = e.target.getAttribute("data-value");
        const type = e.target.parentNode.getAttribute("data-type");
        e.target.classList.add("disable");
        filterCharacters(value, type);
        guessLimit--;

        setRemainedGuess(guessLimit);
      } else {
        showMsg({ text: "You ran out of your choices. Guess one of them >:D" });
      }
    }
  })
);

const showMsg = ({
  text,
  confirmText = "OK",
  cancelText,
  onConfirm,
  onCancel,
}) => {
  const alertMsg = document.getElementById("alert");

  const hideModal = () => {
    alertMsg.classList.remove("block");
    pageContainer.classList.remove("disable");
  };

  const showModal = () => {
    alertMsg.classList.add("block");
    pageContainer.classList.add("disable");
  };

  showModal();

  alertMsg.innerHTML = `
      <div class="gradient-border alert-container">
        <p class="alert-text">${text}</p>
        <button id="confirm" class="alert-confirm">${confirmText}</button>
        ${
          cancelText
            ? `<button id="cancel" class="alert-confirm">${cancelText}</button>`
            : ``
        }
      </div>
    `;
  if (document.getElementById("confirm")) {
    document.getElementById("confirm").addEventListener("click", () => {
      if (onConfirm) {
        onConfirm();
      }
      hideModal();
    });
  }

  if (document.getElementById("cancel")) {
    document.getElementById("cancel").addEventListener("click", () => {
      if (onCancel) {
        onCancel();
      }
      hideModal();
    });
  }
};

const startTimer = (duration) => {
  const timer = setInterval(() => {
    duration--;
    document.querySelector("#time").textContent = duration;
    if (duration === 0) {
      clearInterval(timer);
      showMsg({
        text: "To late! Time is up!",
        confirmText: "Play Again",
        onConfirm: () => window.location.reload(),
      });
    }
  }, 1000);
};

const filterCharacters = (value, type) => {
  if (value == "true" || value == "false") {
    value = Boolean(value);
  }
  if (value === selectedSecretCharacter[type]) {
    showMsg({ text: "Super! Your guess is right!" });

    const removedCharacters = CHARACTERS.filter(
      (character) => character[type] !== selectedSecretCharacter[type]
    );

    removedCharacters.map((character) => {
      character.isRemoved = true;
    });
  } else if (value !== selectedSecretCharacter[type]) {
    showMsg({ text: "Your guess is wrong!" });

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
  let html = "";

  CHARACTERS.map(({ isRemoved, id, name, img }) => {
    html += `
        <div ${isFirstTimeRender ? "class='grid'" : ""}>
        <div class="character-wrapper ${
          isRemoved ? "disable" : ""
        }" data-id="${id}" data-name="${name}">
        <p>${name}</p>
        <img src=${img} alt=${name} class="character-img"/>
        </div>
        </div>
        `;
  });

  document.getElementById("board").innerHTML = html;

  document.querySelectorAll(".character-wrapper").forEach((character) =>
    character.addEventListener("click", () => {
      const name = character.getAttribute("data-name");
      const id = character.getAttribute("data-id");
      guess(id, name);
    })
  );

  isFirstTimeRender = false;
};

const guess = (id, name) => {
  showMsg({
    text: `${name}? Are you sure?`,
    confirmText: "Yes, Go ahead!",
    cancelText: "No, Cancel",
    onConfirm: () => {
      let messageText;
      if (Number(id) === selectedSecretCharacter.id) {
        messageText = "You win!";
      } else {
        messageText = "You lose, Game over!";
      }
      setTimeout(() => {
        showMsg({
          text: messageText,
          confirmText: "Play Again",
          onConfirm: () => window.location.reload(),
        });
      }, 0);
    },
  });
};

const renderPage = () => {
  const loading = document.getElementById("loading");

  loading.classList.add("none");
  pageContainer.classList.remove("none");
  pageContainer.classList.add("page-container");
};

const setPlayerName = () => {
  const player = document.getElementById("player");

  let playerName = capitalizeFirstLetter(localStorage.getItem("playerName"));
  player.innerText = playerName;
};

const setRemainedGuess = (remainedGuess) => {
  document.getElementById("remain-guess").innerText = remainedGuess;
};

startTimer(60);
setTimeout(renderPage, 3000);
setRemainedGuess(guessLimit);
selectedSecretCharacter = selectSecretCharacter(CHARACTERS);
renderCharacters();
setPlayerName();
