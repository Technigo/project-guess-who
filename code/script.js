document.addEventListener("DOMContentLoaded", () => {

  // All the DOM selectors stored as short variables
  const board = document.getElementById('board')
  const questions = document.getElementById('questions')
  const restartButton = document.getElementById('restart')
  const findOutButton = document.getElementById('filter')
  


  // Array with all the characters, as objects
  const CHARACTERS = [
    {
      name: 'Jabala',
      img: 'images/jabala.svg',
      hair: 'hidden',
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
  const setSecretCharacter = () => {
    secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  }

  // This function to start (and restart) the game
  const start = () => {
  charactersInPlay = CHARACTERS
  generateBoard()
  setSecretCharacter()
  selectQuestion()
  console.log("Our secret person is:", secret)
  
  }

  // setting the currentQuestion object when you select something in the dropdown
  const selectQuestion = () => {
    console.log('test')

    const category = questions.options[questions.selectedIndex].parentNode.label
    //category = varable (which attribute - hair, eyes..)
    //questions = refers to the question-select in the html
    //.options[questions.selectedIndex] = whict option in the questions-select
    //the user chooses 
    //.parentNode.label = a way to reach the inner element 
    // This variable stores what option group (category) the question belongs to.


    // We also need a variable that stores the actual value of the question we've selected.
    const value = questions.options[questions.selectedIndex].value
    //questions.value is enough 


    currentQuestion = {
      category: category,
      value: value
    }
  }



  // This function should be invoked when you click on 'Find Out' button.
  const checkQuestion = () => {
    const { category, value } = currentQuestion;
    console.log('find out-button clicked')

    // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
    // See if we should keep or remove people based on that
    // Then invoke filterCharacters
   let keep
   if (category === 'hair') {
      if (secret.hair === value) {
        keep = true
        console.log('person has this hair')
      } else {
        console.log('person does not have this hair')
      }
    } else if (category === 'eyes') {
      if (secret.eyes === value) {
        keep = true
        console.log('person has these eyes')
      } else {
        console.log('person does not have these eyes')
      }
    } else if (category === 'accessories') {
      if (secret.accessories.includes(value)) {
        keep = true
        console.log('person has these accessories')
      } else {
        console.log('person does not have these accessories')
      }
    } else {
      if (secret.other.includes(value)) {
        keep = true
        console.log('person has a smoking habit')
      } else {
        console.log('person does not have a smoking habit')
      }
    }
  filterCharacters(keep)
  }
  
  // It'll filter the characters array and redraw the game board.

  const filterCharacters = (keep) => {

    console.log('filtering')
    const { category, value } = currentQuestion
    // Show the correct alert message for different categories
    if (category === 'hair') {
      if (keep) {
        console.log('YES HAIR')
        alert(`Yes, the person has ${value} hair! Keep all people that has ${value} hair!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        console.log('NO HAIR')
        alert(`No, the person doesn't have ${value} hair! Remove all people that has ${value} hair!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    } else if (category === 'eyes') {
      if (keep) {
        alert( `Yes, the person has ${value} eyes! Keep all people that has ${value} eyes!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
      } else {
        alert(`No, the person doesn't have ${value} eyes! Remove all people that has ${value} eyes!`)
        charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
      }
    } else if (category === 'accessories') {
      if (keep) {
        alert(`Yes, the person wears ${value}! Keep all people that wears ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
        alert(`No, the person does not ${value}! Keep all people that does not wear ${value}`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
    } else {
      if (keep) {
      alert (`Yes, the person is a ${value}! Keep all people that is a ${value}!`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      } else {
        (`No, the person is not a ${value}! Keep all people that is a ${value}!`)
        charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
      }
    }

    generateBoard()
  }
 

  // when clicking guess, the player first have to confirm that they want to make a guess.
  const guess = (personToConfirm) => {
    console.log('trying to confirm')
    let confirmPerson = confirm(`Do you really want to make a guess on ${personToConfirm}?`);
    if (confirmPerson === true) {
      checkMyGuess(personToConfirm)
 
    }
    // store the interaction from the player in a variable.
    // remember the confirm() ?
    // If the player wants to guess, invoke the checkMyGuess function.

  }
  // If you confirm, this function is invoked
  const checkMyGuess = (personToCheck) => {

    if (personToCheck === secret.name) {
      alert(`You're right!`);
      board.innerHTML = winLose.classList.add("active");
      winLoseText.innerHTML = `
      <h5>You're a WINNER!!</h5> 
      <h6>You completed the game in ${counterValue} attempts and ${totalSeconds} seconds. Do you wanna play again?</h6>`;
    } else {
      alert(`Sorry, this is not your character. It is ${secret.name}.`);
      board.innerHTML = "";
      winLose.classList.add("active");
      winLoseText.innerHTML = `
      <h5>Better luck next time!</h5> 
      <h6>Would you like to try again?</h6>`;
    }
    
    // 1. Check if the personToCheck is the same as the secret person's name
    // 2. Set a Message to show in the win or lose section accordingly
    // 3. Show the win or lose section
    // 4. Hide the game board
  }

  // Invokes the start function when website is loaded
  start()



  // All the event listeners
  restartButton.addEventListener('click', start);
  findOutButton.addEventListener('click', checkQuestion)
  questions.addEventListener('change', selectQuestion)
  
  


  
 

});




          //THIS IS FROM CONST CURRENT QUESTION
        //   //|| category === 'eyes') {
        //     console.log('hair or eyes')
        //     if(value === secret.hair || value === secret.eyes){
        //       keep = true; //updated from let keep =true to keep = true
        //       filterCharacters(keep)
        //     } 
        // /* here you can add 'else' condiion as you did on 'accessories' and 'other' if statement */
        //    else{
        //       keep = false
        //       filterCharacters(keep)
        //     }
        
        //   } else if (category === 'accessories' || category === 'other') {
        //     console.log('accessories or other')
        //       if (value === secret.accessories || value === secret.other){
        //       keep = true 
        //       filterCharacters(keep)
        //     }else{
        //       keep = false
        //       filterCharacters(keep) // keep parameter is missing, but it will porbably work because '' is falsy! 
        //     }
            
          

          //   console.log('hair or eyes')
          //   if (secret[category].includes(value)) {
          //     filterCharacters(true);
          //   } else {
          //     filterCharacters(false);
          // }

          // } else if (category === 'accessories' || category === 'other') {
          //   console.log('accessories or other')
          //   if (secret[category].includes(value)) {
          //     filterCharacters(true);
          //   } else {
          //     filterCharacters(false);
          //   }





// FROM FILTER CHARACTERS
      // //for hair and eyes :
      //   charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
      //   or
      //   charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)

      // //for accessories and other
      //   charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
      //   or
      //   charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    
    
  