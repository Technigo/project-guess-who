export const getCard = (person) => {
  //   let html = "";

  let html = `
    <div class="card">
        <div class="card__inner" id="${person.name}">
            <div class="card__front">
                <p class="card__name">${person.name}</p>
                <img class="card__image" src=${person.img} alt=${person.name}>
                <div class="guess">
                    <span class="guess__text">Guess on ${person.name}?</span>
                    <button class="button button__filled button__filled--small" id="guess" data-name="${person.name}">Guess</button>
                </div>
            </div>
            <div class="card__back">
                <img class="icon icon--card-back" src="images/guess-who-bubble.png" alt="Guess Who" />
            </div>
        </div>    
    </div>
    `;

  return html;
};
