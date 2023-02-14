// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Whiskers',
    img: 'images/cat1.png',
    color: 'hidden',
    eyes: 'hidden',
    stature: ['sitting', 'standing'],
    age: ['adult', 'kitten']
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]
//Behöver inte göra något med nedan.
// Global variables
let secret
let currentQuestion
let charactersInPlay


//Behöver inte göra något med nedan.
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
// Nedan gjord men inte som på deras. Kolla om funktionen fungerar.
//Deras startkod: secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
const setSecret = () => {

  const randomIndex = Math.floor(Math.random() * arr.charactersInPlay);

  const item = charactersInPlay[randomIndex];

  return item;
}

const result = setSecret(array);
console.log(result);




//NEDAN KLAR.
// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS //reset
  setSecret ()
  generateBoard ()
  winOrLose.style.display = 'none';
  board.style.display = 'flex';
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    // value: value
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {

  } else if (category === 'accessories' || category === 'other') {

  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
      )
    }
  } else if (category === 'other') {
   if (keep) {
    alert(
      `Yes, the person wears ${value}! Keep all people that wears ${value}`
    )
  } else {
    alert(
      `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
    )
  }
  } else {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value}`
      )
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value}`
   )
  }
  }

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  /* 
    for hair and eyes :
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      or
      charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

    for accessories and other
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      or
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
  */

  // Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)

//Daniels lektion

/* Arraays can be inside objects.

const yellow = "yellow"; 

const exampleObject = {
  name: "Jabala"
  accessories: Hard bracket
  {hat: true, color: yellow},
  {cap: false, color: blue}
hardbracket,
};

console.log(exampleObject.name);

För att access property.

Det finns ett annat sätt att göra det. Används när man har t ex. en variabel.
T ex.
Access property, t ex. exampleObject.name
Access property while having the name of the property inside a variable, t ex. exampleObject.name
ex: exampleObjectsquareObjectpersonsImgsquarebracket == exampleObjecthardbrackets"img"hardbracket.
const personsImage = inside squarebrackets"img"inside square brackets; 

I variabel eller string ska du ha hard brackets.

const personsName = "name";

exampleObject.name = "Hannah";
console.log(exampleObject.name);

console.log(exampleObject.squarebracketsnamesquarebrackets)
// inside the square brackets there must be a string or a vraiable that has a string value.

console.log(exampleObjectsquarebrackets"name"swuarebrackets
console.log(exampleObjectsquarebracketspersonsNamesquarebrackets)

Java går från topp till bottom. Efter rad 354 kommer objektets namn vara Hannah, om man inte reasign längre ner.

exampleObject.age = 14;
console.log(exampleObject.age);

Kan användas när man ska dölja dem antar jag?

Använd squarebrackets för att komma åt namnen inuti en array?

Arrays.

const myArray = squarebrackets"Hello", "wonderful", "students hardbrackets;
console.log(myArraysquarebrackets0squarebrackets);
console.log(myArraysquarebrackets0squarebrackets, myArraysquarebrackets1squarebrackets, myArraysquarebrackets2squarebrackets);

Loopa 
for (let i = 0;) 
då är noll startindex.
for (let i = 0; i< ) 
as long as i is less than, we will keep doing another and another.
i++ === i+1
for (let i = 0; i< myArray.length; i++) {
console.log(i);
} 
// create variable i, set it's value to 0; 
// as long as i will be less than myArray.length repeat iteration
// after each iteration increase i by one
console.log i, increase i, check if i is  still less than myArray.length, if yes
console log i and so on and so forth.
Använd alltid i, för det gör alla.

inuti i loopen kan vi komma åt vår array

for (let i=0; < myArray.length; i ++) {
  console.log(myArrayhardbracketihardbracket);
}

using continue;
om man vill hoppa över wonderful, dvs 1.
for (let i=0; < myArray.length; i ++) {
if (i == 1) {
  continue;
}
  console.log(myArrayhardbracketihardbracket);
}

kan också göra:

for (let i=0; < myArray.length; i ++) {
if (i != 1) {
  continue;
}
  console.log(myArrayhardbracketihardbracket);
}

While loop
// inte så mkt med arrays, oftast andra conditions. Ni måste kanske inte använda

let whileIterator = 0;
while (whileIterator < 10) {
  console.log(whileIterator);
  whileIteratior += 1;      //Skriv denna rad för att inte spåra ur.
}
// AVOID having while (true) - infinite loop
det är lätt att skapa en infinite loop med denna while funktionen så passa dig.

for loop is used to access different elements for the arrays.

while loop kan användas när man vill att något ska hända konstant. 
kan användas när man t ex. säger till en datoranvändare att de måste röra musen för att datorn inte ska somna.

Funkar för alla arrays, always accessing elements of our array from the end. 
for (let i = myArray.length; < -1; i >=0, i--) {
if (i != 1) {
  console.log(myArrayhardbracketihardbracket);
}

Array Methods;

Göra actions med de olika elementen i arrays utan hela for loop.

const numbersArray = hardbracket1, 2, 3 , 4, 5hardbracket;
//filter so we only have divisable by 2. (2&4 är svaret)
const filtered = numbersArray.filter((banana)=> {
  return banana % 2 === 0;
})
console.log(filtered);
Borde bli 2 & 4.
Filter funkar med allt man vill testa på.
// % - modulo. Bra att veta om någon frågar vid rekrytering.
// 4 % 2 = 0, because 4/2 = 2
// 5 % 2 = 1, because it's 4 divided by 2 and the we have 1  that can not be divided by 2. funkar itne med fraktions
// 8 % 3 = 2, because 8 = 3 * 2 + (2) <= this two is the modulo.
const filteredCharacters = CHARACTERS.filter((singleCharacter)=> {
if (singleCharacter.hair === "black") {
  return singleCharacter;
}
});
console.log(filteredCharacter);
återvänder med alla som har svart hår.

forEach

acces and modify and element in the array. use for each loop.
basic

filteredCharacters.forEach((singleCharacter) => {
  singleCharacter.hair = "green";
}
console.log(filteredCharacters);
console.log(CHARACTERS);

kolla skillnad forEach & filter.

Fokusera på foreach & filter. Men om man föredrar for functions loop är det OK.
Filtret är en benefit. Rekommenderas för att slippa skriva sjukt mkt kod.*/