// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutBtn = document.getElementById('filter');
const winOrLoseText = document.getElementById('winOrLoseText');
const winOrLoseSection = document.getElementById('winOrLose');
const playAgainBtn = document.getElementById('playAgain');
const displaySecret = document.getElementById('secret-mushroom')
const secretText = document.getElementById('secret-text')

// Array with all the characters, as objects
const MUSHROOMS = [
  {
    name: 'Chanterelle',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2007-07-14_Cantharellus_cibarius_Detail.jpg/440px-2007-07-14_Cantharellus_cibarius_Detail.jpg',
    sporeDispersal: 'primative gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['yellow', 'a funnel'],
    stalkProperties: ['bare'],
    swedishName: 'Kantarell',
    latinName: 'Cantharellus cibarius'
  },
  {
    name: 'Trumpet Chanterelle',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Craterellus_tubaeformis_LC0374.jpg/440px-Craterellus_tubaeformis_LC0374.jpg',
    sporeDispersal: 'primative gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['brown', 'a funnel'],
    stalkProperties: ['yellow', 'bare'],
    swedishName: 'Tratt Kantarell',
    latinName: 'Cantharellus tubaeformis'
  },
  {
    name: 'Shaggy Inkcap',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Coprinus_comatus_G4.JPG/440px-Coprinus_comatus_G4.JPG',
    sporeDispersal: 'gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['white', 'conical'],
    stalkProperties: ['white', 'a ring'],
    swedishName: 'Fjällig bläcksvamp',
    latinName: 'Coprinus comatus'
  },
  {
    name: 'Saffron Milkcap',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Lactarius_deliciosus.jpg/440px-Lactarius_deliciosus.jpg',
    sporeDispersal: 'gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['orange', 'depressed'],
    stalkProperties: ['orange', 'bare'],
    swedishName: 'Tallblodriska',
    latinName: 'Lactarius deliciosus'
  },
  {
    name: 'Charcoal Burner',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Russula_cyanoxantha.JPG/440px-Russula_cyanoxantha.JPG',
    sporeDispersal: 'gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['purple', 'green', 'brown', 'flat', 'convex'],
    stalkProperties: ['white', 'bare'],
    swedishName: 'Brokkremla',
    latinName: 'Russula cyanoxantha'
  },
  {
    name: 'Oyster',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pleurotus_ostreatus_JPG7.jpg/470px-Pleurotus_ostreatus_JPG7.jpg',
    sporeDispersal: 'gills',
    growsOnTrees: 'on a tree',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['grey', 'cream', 'brown', 'offset'],
    stalkProperties: ['white'],
    swedishName: 'Ostronmussling',
    latinName: 'Pleurotus ostreatus'
  },
  {
    name: 'The Sickener',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Russula_emetica_in_Poland.jpg/440px-Russula_emetica_in_Poland.jpg',
    sporeDispersal: 'gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['red', 'convex', 'flat'],
    stalkProperties: ['white', 'bare'],
    swedishName: 'Giftkremla',
    latinName: 'Russula emetica'
  },
  {
    name: 'Fly Agaric',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg/440px-Amanita_muscaria_3_vliegenzwammen_op_rij.jpg',
    sporeDispersal: 'gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['red', 'white', 'convex', 'flat'],
    stalkProperties: ['white', 'a ring', 'a volva (foot)'],
    swedishName: 'Röd flugsvamp',
    latinName: 'Amanita muscaria'
  },
  {
    name: 'Deathcap',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Amanita_phalloides_1.JPG/440px-Amanita_phalloides_1.JPG',
    sporeDispersal: 'gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['green', 'convex', 'flat'],
    stalkProperties: ['white', 'a ring', 'a volva (foot)'],
    swedishName: 'Lömsk flugsvamp',
    latinName: 'Amanita phalloides'
  },
  {
    name: 'Destroying Angel',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Destroying_Angel.jpg/440px-Destroying_Angel.jpg',
    sporeDispersal: 'gills',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['white', 'convex', 'flat'],
    stalkProperties: ['white', 'a ring', 'a volva (foot)'],
    swedishName: 'Vit flugsvamp',
    latinName: 'Amanita virosa'
  },
  {
    name: 'Jelly Ear',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Auricularia_auricula-judae_64485.JPG/470px-Auricularia_auricula-judae_64485.JPG',
    sporeDispersal: 'none of these',
    growsOnTrees: 'on a tree',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['orange', 'cream', 'brown'],
    stalkProperties: [],
    swedishName: 'Judasöra',
    latinName: 'Auricularia auricula-judae'
  },
  {
    name: 'Yellow Stagshorn',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cviscosa_wiki.jpg/440px-Cviscosa_wiki.jpg',
    sporeDispersal: 'none of these',
    growsOnTrees: 'on a tree',
    poisonousOrEdible: 'inedible',
    capOrBracketProperties: ['yellow'],
    stalkProperties: [],
    swedishName: 'Gullhorn',
    latinName: 'Calocera viscosa'
  },
  {
    name: 'Velvet Bolete',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Suill.var.jpg/440px-Suill.var.jpg',
    sporeDispersal: 'pores',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['yellow', 'cream', 'convex'],
    stalkProperties: ['yellow', 'bare'],
    swedishName: 'Sandsopp',
    latinName: 'Suillus variegatus'
  },
  {
    name: 'Orange Birch Bolette',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Spinus-orange-birch-bolete-2014-10-n014756-w.jpg/440px-Spinus-orange-birch-bolete-2014-10-n014756-w.jpg',
    sporeDispersal: 'pores',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['orange', 'red', 'convex'],
    stalkProperties: ['white', 'black/brown speckles'],
    swedishName: 'Tegelsopp',
    latinName: 'Leccinum versipelle'
  },
  {
    name: 'Dryads Saddle',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Polyporus_squamosus_Molter.jpg/470px-Polyporus_squamosus_Molter.jpg',
    sporeDispersal: 'pores',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['cream', 'yellow', 'depressed', 'offset'],
    stalkProperties: ['bare'],
    swedishName: 'Fjällticka',
    latinName: 'Cerioporus squamosus'
  },
  {
    name: 'Chicken of the woods',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Laetiporus_sulphureus_JPG01.jpg/470px-Laetiporus_sulphureus_JPG01.jpg',
    sporeDispersal: 'pores',
    growsOnTrees: 'on a tree',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['yellow', 'flat'],
    stalkProperties: [],
    swedishName: 'Svavelticka',
    latinName: 'Laetiporus sulphureus'
  },
  {
    name: 'Birch Polypore',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Piptoporus_betulinus_55.jpg/440px-Piptoporus_betulinus_55.jpg',
    sporeDispersal: 'pores',
    growsOnTrees: 'on a tree',
    poisonousOrEdible: 'inedible',
    capOrBracketProperties: ['grey', 'brown', 'hoof-shaped'],
    stalkProperties: [],
    swedishName: 'Björkticka',
    latinName: 'Fomitopsis betulina'
  },
  {
    name: 'Tinder fungus',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Fomes_fomentarius_2010_G2.jpg/440px-Fomes_fomentarius_2010_G2.jpg',
    sporeDispersal: 'pores',
    growsOnTrees: 'on a tree',
    poisonousOrEdible: 'inedible',
    capOrBracketProperties: ['grey', 'hoof-shaped'],
    stalkProperties: [],
    swedishName: 'Fnöskticka',
    latinName: 'Fomes fomentarius'
  },
  // {
  //   name: 'Giant puffball',
  //   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Giant_Puffball.jpg/400px-Giant_Puffball.jpg',
  //   sporeDispersal: 'puffs',
  //   growsOnTrees: 'in the ground',
  //   poisonousOrEdible: 'edible',
  //   capOrBracketProperties: ['white', 'round'],
  //   stalkProperties: ['white'],
  //   swedishName: 'Jätteröksvamp',
  //   latinName: 'Calvatia gigantea'
  // },
  {
    name: 'Common puffball',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Single_lycoperdon_perlatum.jpg/468px-Single_lycoperdon_perlatum.jpg',
    sporeDispersal: 'puffs',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['white', 'round'],
    stalkProperties: ['white'],
    swedishName: 'Vårtig röksvamp',
    latinName: 'Lycoperdon perlatum'
  },
  {
    name: 'Wood Hedgehog',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Hedgehog_fungi2.jpg/440px-Hedgehog_fungi2.jpg',
    sporeDispersal: 'teeth',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['orange', 'yellow', 'depressed'],
    stalkProperties: ['white', 'bare'],
    swedishName: 'Blek taggsvamp',
    latinName: 'Hydnum repandum'
  },
  {
    name: 'Scaly Tooth',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Habichtspilz-Sarcodon-imbricatus.jpg/468px-Habichtspilz-Sarcodon-imbricatus.jpg',
    sporeDispersal: 'teeth',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['brown', 'depressed', 'flat'],
    stalkProperties: ['brown', 'white', 'bare'],
    swedishName: 'Fjällig taggsvamp',
    latinName: 'Sarcodon imbricatus'
  },
  {
    name: 'Lions Mane',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Igelstachelbart_Nov_06.jpg/440px-Igelstachelbart_Nov_06.jpg',
    sporeDispersal: 'teeth',
    growsOnTrees: 'on a tree',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['white', 'cream'],
    stalkProperties: ['white', 'cream'],
    swedishName: 'Igelkottstaggsvamp',
    latinName: 'Hericium erinaceus'
  },
  {
    name: 'Common Earthball',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Scleroderma_citrinum.jpg/400px-Scleroderma_citrinum.jpg',
    sporeDispersal: 'puffs',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'poisonous',
    capOrBracketProperties: ['white', 'cream', 'round'],
    stalkProperties: ['white', 'cream'],
    swedishName: 'Gul rottryffel',
    latinName: 'Scleroderma citrinum'
  },
  {
    name: 'Penny Bun',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg/440px-Boletus_edulis_EtgHollande_041031_091.jpg',
    sporeDispersal: 'pores',
    growsOnTrees: 'in the ground',
    poisonousOrEdible: 'edible',
    capOrBracketProperties: ['brown', 'convex'],
    stalkProperties: ['brown', 'cream', 'bare'],
    swedishName: 'Karljohanssvamp',
    latinName: 'Boletus edulis'
  }
]

// Global variables
let secret
let currentQuestion
let charactersInPlay

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

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = MUSHROOMS
  board.style.display = 'flex';
  generateBoard()
  setSecret()
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.dataset.category

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.value
  console.log(value)

  currentQuestion = {
    category: category,
    value: value
    
  };
};

// Checks if the secret character has the chosen characteristic
const checkQuestion = () => {
  const { category, value } = currentQuestion
  console.log(currentQuestion)
  let keep = false
// checks if the values are the same but in a different way depending on whether the object value is a string or array 
  if (typeof secret[category] === 'string'){
    keep = (secret[category] === value)
    }

  else if (Array.isArray(secret[category])){
    keep = (secret[category].includes(value))
  }

  else {
    console.log("a problem occured")
  }
  alertUserOfAnswer(keep)
  filterCharacters(keep)
};

const alertUserOfAnswer = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
    if (keep) {
      if (category === 'sporeDispersal'){
        alert(
        `Yes, the mushroom has ${value}! Keep all the mushrooms with ${value}`
      )}
      else if (category === 'growsOnTrees') {
        alert(
          `Yes, the mushroom grows ${value}! Keep all the mushrooms that grow ${value}`
        )}
      else if (category === 'poisonousOrEdible') {
        alert(
          `Yes, the mushroom is ${value}! Keep all the mushrooms that are ${value}`
        )}
      else if (category === 'capOrBracketProperties'){
        alert(
          `Yes, the cap can be ${value}! Keep all the mushrooms with caps that can be ${value}`
        )}
      else if (category === 'stalkProperties'){
        alert(
          `Yes, the stalk can be/has ${value}! Keep all the mushrooms that can be/have ${value}`
        )}
    } else {
      if (category === 'sporeDispersal'){
        alert(`No, the mushroom doesn't have ${value}! Remove all mushrooms with ${value}`
      )}
      else if (category === 'growsOnTrees') {
        alert(`No, the mushroom doesn't grow ${value}! Remove all mushrooms that grow ${value}`
        )
      }
      else if (category === 'poisonousOrEdible') {
        alert(`No, the mushroom isn't ${value}! Remove all mushrooms that are ${value}`
        )
      }
      else if (category === 'capOrBracketProperties'){
        alert(`No, the cap isn't ${value}! Remove all mushrooms that are ${value}`
        )
      }
      else if (category === 'stalkProperties'){
        alert(`No, the stalk doesn't have/isn't ${value}! Remove all mushrooms that have/are ${value}`
        )
      }
    };
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  if (Array.isArray(secret[category])) {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    };
  } 
   else {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    };
  };
  generateBoard()
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  let personToCheck = personToConfirm
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  let userConfirmed = window.confirm(`Do you want to guess ${personToConfirm}?`)
  // If the player wants to guess, invoke the checkMyGuess function.
  if (userConfirmed) {
    checkMyGuess(personToCheck)
  }
  else {
    alert("Guess cancelled")
  };
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  const userHasGuessedCorrectly = (secret.name === personToCheck);
  displaySecret.src = secret.img
  secretText.innerHTML = `The mushroom you were identifing was ${secret.name}. Its Swedish name is ${secret.swedishName} and its Latin name is <em>${secret.latinName}</em>. It's easy to find mushrooms in the Swedish forests, but when you identify one you must be sure to look at all its different characteristics, as there are many lookalikes. Don't eat anything if you're not sure!`

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  if (userHasGuessedCorrectly) {
    winOrLoseText.innerHTML = `Well Done! You guessed correctly and identified ${secret.name}!`
  }
  else {
    winOrLoseText.innerHTML = `Oh no! You didn't manage to correctly identify your mushroom today so don't eat it! It was ${secret.name}. Click below to take another walk!`
  };
  // 3. Show the win or lose section
  winOrLoseSection.style.display = 'flex';
  board.style.display = 'none';



  // 4. Hide the game board
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
questions.addEventListener('change', selectQuestion);
findOutBtn.addEventListener('click', checkQuestion);
playAgainBtn.addEventListener('click', () => {
   winOrLoseSection.style.display = 'none';
  start()
});
