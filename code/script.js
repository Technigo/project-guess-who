// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filledButton = document.getElementById('filter')
const winOrLoseWrapper = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
//the only one I did not put as a DOM selector now was <h1 line 59 HTML "winOrLoseText" 
let guessMore = document.getElementById('guess') //Eller ska det vara bara guessButton? ///????????????

//////// kom ihåg att lägga till <div class=guess> och evt evt ta bort DOM selector om jag väljer min version. // //////////
// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay
let question

 //THIS ONE NOW DRAWS THE BOARD
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess" id="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" id="guessButton" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  //returns secret person in Console and I can acess it by typing secret (global variable)
  console.log(`"Find out who the secret person is:"`, secret);  //TAKE AWAY secret later
  return secret // is this redundant?
} 

// Start (and restart) the game + Make sure to set a secret person when the game starts.
  let start = () => {
    charactersInPlay = CHARACTERS
    document.getElementById('winOrLose').style.display = "none";
    document.getElementById('board').style.display = "flex"
// https://stackoverflow.com/questions/6095530/maximum-call-stack-size-exceeded-error javascript Uncaught RangeError: Maximum call stack size exceeded
/*    const cardHeader = () => {
      board.innerHTML += `
      <div id=cardHeader class=cardHeader>
      <h2>"These are your cards, enjoy the game!"
      </h2>
    </div>`
    return cardHeader
    } 
      let cardHead = start = start();
      console.log(cardHead);
      */

    // HEre I COULD HAVE JUSt CALLED the GENERATEBOARD instead probably??
    // callback is invoked med 3 argument: the value of the element, the index of the element, and the array object being mapped.
    setSecret(); 

    let board = generateBoard(charactersInPlay);
    console.log("These are your cards, enjoy the game!")
    return board
  }
//NEW this one offers the filteredArray? 
/*
const offerCharacters = () => {
    board.innerHTML = ''
    charactersInPlay.forEach(person => {
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
    })
}
*/

// setting the currentQuestion object when you select something in the dropdown 
function selectQuestion() {
  const category = questions.options[questions.selectedIndex].parentNode.label
 // let currentQuestion = questions.options[questions.selectedIndex].value
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected. DONE avkommentera!!
  currentQuestion = {
    attribute: questions.options[questions.selectedIndex].value,
    category
  } 
  /*
  if (category === 'hair color') {
    currentQuestion = {
      attribute: questions.options[questions.selectedIndex].value,
      category: 'hair color',
    }
  } else if (category === 'eye color') {
    currentQuestion = {
      attribute: questions.options[questions.selectedIndex].value,
      category: 'eye color', 
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: questions.options[questions.selectedIndex].value,
      category: 'accessories',
    }
  } else if (category === 'other') {
    currentQuestion = {
      attribute: questions.options[questions.selectedIndex].value,
      category: 'other',
    }
  } */
  console.log('You chose:', currentQuestion, 'Now click on the Find Out button!')
}



// This function should be invoked when you click on 'Find Out'. TODO***
const checkQuestion = () => {
  selectQuestion() //Den startar på brown, vilket gör att en inte kan välja brown som val 1. DÄrför att 'change' not triggas.  
  let attribute = currentQuestion.attribute //questions.options[questions.selectedIndex] //SPARA: Gets the currentQuestion value // It says that this is undefined
  let category = questions.options[questions.selectedIndex].parentNode.label //SPARA: gets the tag <optgroup label> - obs! Detta är en dublett av 293 men med LET
//det är någonting med det här!!!! 
  //hur ska jag veta vad secrets attribut är? 
  //rätt värde i secret
  
  //question borde heta mer guess eller något liknande?
  if (category === 'hair color') { 
    question = {
        category: 'hairColor',
        attribute
    } 
    category = 'hairColor'
  } else if (category === 'eye color') { 
    question = {
      category: 'eyeColor',
      attribute 
    }
    category = 'eyeColor'
  } else if (category === 'accessories') {
      if ('glasses' === attribute) {
        question = {
          category: 'glasses',
          attribute: true
        }
      }
      else if ('hat' === attribute) {
        question = {
          category: 'hat',
          attribute: true
      }
    }
  } else if (category === 'other') {
      question = {
        category: 'smoker',
        attribute: true
      } 
    }
    console.log(question);
    currentQuestion = question //assigns global variable currentQuestion = question

  //if else satsen här nere. GÖR EN NY SECRET VALUE********* mata in med currentType?? eller gör en ny secretType
  //I want to do a variable/function that stores the secret value from start perhaps it should not be nested inside of this function

  /*
  const secretValue = () => { //const or let?
  //This is something that can be used for the end. IF a user guesses correct on both boolean and string values??
  let match = secret[question.currentType]
  let matchTwo = secret[question.currentType] === currentValue

/*
   if (matchTwo ) { //is this correct? 
    return true 
    } else if (match ) {
      return true
    }
*/ /*
  }
*/
//secretValue(); 
// ÄR DET OK ATTA DEN ENA INTE KÖRS???????
//Writing OK?, but I did not yet figure out how to filter between these two.****
//dessa två i en if else statement?? Run den ena om user chose '' value, och run den andra om user chose a Boolean value. HOW WOULD I WRITE THAT? 
const keep = secret[category] === attribute // without currentValue it says in itself If it is T/F for glasses etc. BUT comes out as undefined for hair color and eye color AND WITH currentValue it comes out as undefined our false when I choose hat for example. 
//const secretValue2 = secret[question.currentType] //This one does now show undefined which is corret. Noops. 
console.log('You are one step closer to finding out who the secret person is!', keep)

// OM den hemliga personen är samma som nuv. label och är samma som nuv. valt värde filtrera Sant else returnera falskt. 
    if (keep === true) {
      console.log('You matched') //works until here  
      filterCharacters(keep, question.category, question.attribute)
    } else {
      console.log('You guess is not right this time, please try again!') //ändra?
      filterCharacters(keep, question.category, question.attribute)
    }
  }
    
  // Compare the currentQuestion with the secret person.
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters ***DONE***


const filterCharacters = (keep, group, attribute) => { //question.category is now group, and question.attribute i now attribute
  if (keep != true) { 
    let charactersFiltered = charactersInPlay.filter(name => {
      if (name[group] === attribute) { 
        return false
      } else {
        return true
      }
    });
    charactersInPlay = charactersFiltered
  }

  if (group === 'glasses') {
    if (keep) {
      alert(
        `Yes, the person wears ${questions.options[questions.selectedIndex].value}! Keep all that wears ${group}`//they have also written attribute here
      )
    } else {
      alert(
        `No, the person doesn't wear ${questions.options[questions.selectedIndex].value}! Remove all that wears ${group}`
      )
    }
  } else if (group === 'hat') {
    if (keep) {
      alert(
        `Yes, the person wears ${questions.options[questions.selectedIndex].value}! Keep all that wears ${group}`//they have also written attribute here
      )
    } else {
      alert(
        `No, the person doesn't wear ${questions.options[questions.selectedIndex].value}! Remove all that wears ${group}`
      )
    } 
  } else if (group === 'smoker') {
    //not sure about this first if here on 351
    if (keep) {
      alert(
        `Yes, the person is a ${questions.options[questions.selectedIndex].value}! Keep all ${group}`
      )
  } else {
    alert(
      `No, the person is not a ${questions.options[questions.selectedIndex].value}! Remove all ${group}`
      )
    } 
  } else if (group === 'hairColor') {
    if (keep) { 
    alert(
      `Yes, the person has ${questions.options[questions.selectedIndex].value} hair! Keep all persons with ${attribute} hair`
    )
    }
    else {
    alert(
      `No, the person doesn't have ${questions.options[questions.selectedIndex].value} hair! Remove all persons with ${attribute} hair`
    )
    }
    } else if (group === 'eyeColor') {
      if (keep) { 
      alert(
        `Yes, the person has eyecolor ${questions.options[questions.selectedIndex].value}! Keep all persons with eyecolor ${attribute}`
      )
      }
    } else {
      alert(
        `No, the person doesn't have eyecolor ${questions.options[questions.selectedIndex].value}! Remove all persons with eyecolor ${attribute} `
      )
  }
  //charactersInPlay = charactersFiltered ---> ligger nu här ovanför! 
  //offerCharacters();
  generateBoard(); //-----> alt. behåll min nya variant ovan??
}


  // Invoke a function to redraw the board with the remaining people.


// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  if (confirm('Are you sure you want to guess?')) {
    console.log('User wnat to make a guess!');
    checkMyGuess(suspect)
  } else {
    console.log('The game continues!');
  }
//  const confirm = authenticate
  // store the interaction from the player in a variable. ********
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => { //name kan nås globalt, secret också. suspect är i det här fallet endast ett namn. 
  if (secret.name === suspect) {
    let showWinOrLose = () => {
      document.getElementById('winOrLose').style.display = "block";
      winOrLoseWrapper.innerHTML += `
        <div class="message">
          <h1>Congrats! You won the game!</h1>
        </div>`
        ;
    } 
    showWinOrLose()
    console.log('you won')
  } else {
      let showWinOrLose = () => {
        document.getElementById('winOrLose').style.display = "block";
        winOrLoseWrapper.innerHTML += `
        <div class="message">
          <h2>Sorry, that was a wrong guess! You lost!</h2>
        </div>`
        ;
      } 
      showWinOrLose()
      console.log('you lost')
    }
    document.getElementById('board').style.display = "none"; //hides board
}
//522:   // store the interaction from the player in a variable. ********


//Play again button does not yet work
//Ändra färg på h2 i winOrLose

// Invokes the start function when website is loaded
start()

// All the event listeners
playAgainButton.addEventListener('click', start)
restartButton.addEventListener('click', start)
filledButton.addEventListener('click', checkQuestion)
questions.addEventListener('change', selectQuestion) //is not used. 
//guess.addEventListener('click', checkMyGuess) // ligger i 'genereateBoard' onclick

/*
= () => {
  setTimeout(()=>{location.reload();},2000) }
*/

/*
//I added restart function ---> should go higher up and check the syntax*
const restart = () => {
  document.location.href = "";
};

// All the event listeners
restartButton.addEventListener('click', start)
playAgainButton.addEventListener('click', restart) //can do a set timeout här! 
*/