// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    color: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['beard']
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker', 'beard']
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
    other: ['smoker', 'beard']
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


// Global variables
let secret //Will be the secret person object.
let currentQuestion //Will be the current question object.
let charactersInPlay //Will be an array of all the people left in the game.


//Behöver inte ändras.
// Draw the game board
const generateBoard = () => {
  board.innerHTML = '';
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
//Kolla om funktionen fungerar.
//Deras startkod: secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
const setSecret = () => {
secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}






//NEDAN KLAR.
// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  generateBoard();
  setSecret();
  console.log("The secret person is", secret.name);
}





//jo
/*
const increaseGuesses = () => guesses.innerHTML++;

const setHighscore = score => {
  if (score < highscore.innerHTML || highscore.innerHTML === '0') {
    highscore.innerHTML = score;
  }
};

const checkGameTime = finishTime => {
  const gameTime = (finishTime - startTime) / 1000;
  //jo

  //Tagit från SO.

  const secondsToHms = d => {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
    const mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
    const sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
    return hDisplay + mDisplay + sDisplay;
  };
  gameTimeParagraph.innerHTML += secondsToHms(gameTime);
};
*/

//Klar?
// setting the currentQuestion object when you select something in the dropdown

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label

    // We also need a variable that stores the actual value of the question we've selected.
    const value = questions.options[questions.selectedIndex].value;

  console.log(selectQuestion);
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  // const value =

  currentQuestion = {
    category: category,
    value: value
  }

  console.log(currentQuestion);
}

// This function should be invoked when you click on 'Find Out' button.
//Bör inte behöva ändras.


const checkQuestion = () => {
  const { category, value } = currentQuestion

  if (category === 'hair' || category === 'eyes') {
    if (secret[category] === value) {
      keep = true
      filterCharacters(true); 
    }
    else {
      keep = false
      filterCharacters(false); 
    }
  }
  if (category === 'accessories' || category === 'otherThanAccessories') {
    if (secret[category].includes(value)) {  
      keep = true
      filterCharacters(true); 
    }
    else {
      keep = false
      filterCharacters(false); 
    }
  }
}


// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion

  // Show the correct alert message for different categories
  //Börjat ändra denna. Kolla så allt stämmer.
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yay, the person wears ${value}! Keep all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      
    } else {
      alert(
        `Nope, the person doesn't wear ${value}! Remove all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      
    }
  } else if (category === 'otherThanAccessories') {
   if (keep) {
    alert(
      `Yay, the person wears ${value}! Keep all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    
  } else {
    alert(
      `Nope, the person doesn't wear ${value}! Remove all people that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    
  }
  } else {
    if (keep) {
      alert(`Yay, the person wears ${value}! Keep all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      

    } else {
      alert(
        `Nope, the person doesn't wear ${value}! Remove all people that wears ${value}`);
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      
      }
    }
    generateBoard();
}

//HÄR LIGGER FELET!!!



  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.
  
  //Nedan har jag skrivit om, kolla om det stämmer.


    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    };

  // Invoke a function to redraw the board with the remaining people.

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.

  const userGuess = window.confirm(`Are you sure about ${personToConfirm}...?`
  );
  if (userGuess) {
    checkMyGuess(personToConfirm);
  }
  }

  



// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start();


// All the event listeners
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', (event) => {
  start();
filterButton.addEventListener('click', checkQuestion)
 winOrLose.style.display = "none";
Questions.addEventListener('change', selectQuestion)

});






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

//Daniels lektion 16/02

/*

Most used array method is the .map function.
Similar to forEach.

ex. for Each:

const numbersArray = hardbracket1,2, 3harbracket;
numbersArray.forEach(singleNumber) => (singleNumber += 1));
console.log(numbersArray);

with map:

numbersArray.map((singleNumber) => singleNumber += 1));
console.log(numbersArray);

gör funktion av det (nu blir det skillnad, därför att map returnerar ny array som skapas.)
const mappedArray = numbersArray.map((singleNumber) => singleNumber += 1));
console.log(numbersArray);

gör man function med forEach blir det undefined. ForEach gör baraen function på varje array element. den returnerar inte en ny array när man assign to varibael.

skillnaden mellan de två är denna skillnad i funktionalitet. Detta frågas ofta om i intervjuer.
Om man vill skapa en ny variabel.

Om mna vill skapa en ny array baserad på en tidigare function använd map.

Javascript bryr sig inte om vad man benämnervariablerna, men gör det descriptive.

Map lägger till en siffra på varje specific siffra i arrayen. Lägger inte till på slutet.

There is another method. Var försiktig, den tar bara tillbaka ett elemtn.
.find()

const foundNumber = numbersArray.find((singleNumber)=> singleNumber === 2);
console.log(foundNumber);

find FIRST number that is even in the array.

const firstEvenNumber = numbersArray.find((singleNumber) => singleNumber % 2 === 0);
console.log(firstEvenNumber);

Hade 8 stått först i arrayen så hade svaret blivit 8. TÄNK PÅ att du får bara ett resultat med find och bara det som kommer först i arrayen.

callback functions är anonyma funktioner, fungerar som om du har en function som är deklarerad någon annanstans.
ex.
const checkIfEven = (number) => {
if (number % 2 === 0) {
  return true 
} else {
  return false
}

ovan samma som detta nedan.
  return number % 2 === 0;
}

const firstEvenNumber = numbersArray.find(checkIfEven);
console.log("first even number", firstEvenNumber);

//// dealing with named functions as arguments.
const firstEvenNumber2 = numbersArray.find((item) => checkIfEven(item));
console.log("second time first even number", firstEvenNumber2);

Googla callback functions.

()=>{} <- detta är redan en function och den är anonym.
console.log("hello there!");
}();
Används nästan aldrig eftersom man enbart kan använda den en gång. Den kan inte bli acessed av någon annan och kan inte bli repeated. Frågas om i intervjuer.

/////some (en väldigt nichad funktion)
some - kollar om åtminstone ett element meets the condition.
Skickar tillbaka true or false.
(()=>{}
const evenNumberPresent = numbersArray.some((item) => checkIfEven(item))
if (evenNumberPresent) {
  console.log("Yay, an even number is here!");
 } else {
console.log("Sorry, no even number here.");
  }
})();

//// every function - checks if all elements in the array meets the condition.

(()=>{}
const allAreEven = numbersArray.every((item) => checkIfEven(item))
if (allAreEven) {
  console.log("Yay, all numbers are even!");
 } else {
console.log("Sorry, there is at least 1 non even number.");
  }
})();
Ger error om åtminstone ett element är off.
Använd för att kolla om every object har en specific property.

////// reduce function
svår att förstå för att den tar in andra argument in i den. Är bra för att lägga till sum of all elemnts. Bra till accumulation, matte
const sum = numbersArray.reduce(hardbracketacc, singleNumberhardbracket => + singleNumber);
// start first element is 1
// acc i 0
// add first element to acc
// second element is 2
// acc is 1 
// add second element to acc
// third element is 3
// acc is 3 also
// add third element to acc = 3 + 3
console.log(sum);
frågas om i intervjuer för att den är svårast.

/////  sort - mestadels för siffror, skit i att göra det för strings.
const secondNumbersArray = hardbracket2, 34, 56, 0, 4, 7, 4, 43hardbracket;

//Ascending
secondNumbersArray.sort((firstItem, secondItem) => firstItem - secondItem);
console.log("sorted", secondNumbersArray);
//descending
secondNumbersArray.sort((firstItem, secondItem) => secondItem - firstItem);
console.log("sorted",secondNumbersArray);

sort ascending or descending. kan ge error, använd inte där man ska vara precis. T ex. räkna pengar.

w3 school är bra att kolla för array methods och mdn web docs är också bra.

lättast sätt att jämföra två personer är id, t ex namnen är unika.

(() => {
  console.log(person1.name === person2.name);
 ))();
}
svar blir true.

de visar i frågorna hur man gör för att jämföra innehållet i array och se om det finns ngt där. T edx om de har glasögon.

frågar också om hur man lägger till audio när man går in på sidan och hur man lägger till audio när man vinner.

Gör så katten jamar om man har rätt och fräser om man gissat på fel. Kolla i Daniels sista lektion så ser du hur han gör.

installera prettier extension.

Ta bort console.log när du deploy i netlify.
ES Lint kan man lägga till som extension.*/