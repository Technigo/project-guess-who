// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutbtn = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText = document.getElementById('winOrLoseText')
const playAgainbtn = document.getElementById('playAgain')
const losingSound = document.getElementById('losingSound')
const winningSound = document.getElementById('winningSound')
const declinedSound = document.getElementById('declinedSound')
const confirmationSound = document.getElementById('confirmationSound')

// The array with all the characters in the gameboard as objects
const CHARACTERS = [{
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

// This function is drawing the game board
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

// This function randomly selects a person from the characters array, setting the value of the variable called secret
const setSecret = () => {
    secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function starts (and restart) the game
const start = () => {
    // Setting charactersInPlay array to be all the characters to start with
    charactersInPlay = CHARACTERS
    generateBoard()
    setSecret()
}

// This function is setting the currentQuestion object when the player selects something in the dropdown menu
const selectQuestion = () => {
    // This variable stores what option group (category) the question belongs to
    const category = questions.options[questions.selectedIndex].parentNode.label
        // This variable stores the actual value of the question selected
    const optionValue = questions.value

    if (category === 'hair color') {
        currentQuestion = {
            attribute: 'hairColor',
            value: optionValue,
            category: category,
        }
    } else if (category === 'eye color') {
        currentQuestion = {
            attribute: 'eyeColor',
            value: optionValue,
            category: category,
        }
    } else if (category === 'accessories') {
        currentQuestion = {
            attribute: optionValue,
            value: true,
            category: category,
        }
    } else if (category === 'other') {
        currentQuestion = {
            attribute: optionValue,
            value: true,
            category: category,
        }
    }
}

// This function is invoked when the player clicks the 'Find Out' button
const checkQuestion = () => {
    const secretValue = secret[currentQuestion.attribute]

    if (secretValue === currentQuestion.value) {
        filterCharacters(true)
    } else {
        filterCharacters(false)
    }
}

// This function will filter the characters array displaying messages accordingly 
const filterCharacters = (keep) => {
    const group = currentQuestion.category
    const attribute = currentQuestion.value

    if (group === 'accessories') {
        if (keep) {

            alert(
                `Yes, the person wears the accessory ${currentQuestion.attribute}! Keep all persons that wears the accessory ${currentQuestion.attribute}.`
            )
        } else {
            alert(
                `No, the person doesn't wear the accessory ${currentQuestion.attribute}! Remove all persons that wears the accessory ${currentQuestion.attribute}.`
            )
        }
    } else if (group === 'other') {
        if (keep) {
            alert(
                `Yes, the person is a ${currentQuestion.attribute}! Keep all persons that are ${currentQuestion.attribute}s.`
            )
        } else {
            alert(
                `No, the person isn´t a ${currentQuestion.attribute}! Remove all persons that are ${currentQuestion.attribute}s.`
            )
        }
    } else if (group === 'hair color') {
        if (keep) {
            alert(
                `Yes, the person has got ${currentQuestion.value} hair color! Keep all persons with ${currentQuestion.value} hair.`
            )
        } else {
            alert(
                `No, the person hasn´t got ${currentQuestion.value} hair! Remove all persons that have ${currentQuestion.value} hair.`
            )
        }
    } else if (group === 'eye color') {
        if (keep) {
            alert(
                `Yes, the person has got ${currentQuestion.value} eyes! Keep all persons with ${currentQuestion.value} eyes.`
            )
        } else {
            alert(
                `No, the person hasn´t got ${currentQuestion.value} eyes! Remove all persons that have ${currentQuestion.value} eyes.`
            )
        }
    }

    // Filtering the characters to be kept or removed (based on the "keep" variable)
    if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value)
        confirmationSound.play()
    } else {
        charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value)
        declinedSound.play()
    }

    // This function will redraw the board with the remaining people
    generateBoard()
}

// This function will be invoked when player clicks the "Guess" button on a card, making an alert for the player to confirm
const guess = (suspect) => {
    // Storing the interaction from the player in a variable)
    let confirmAnswer = confirm('Alright! Let´s do this - go head with your guess!')
    if (confirmAnswer === true) {
        checkMyGuess(suspect)
    } else {
        alert(
            'Alright! Abort mission - keep playing!'
        )
    }
}

// If you confirm, this function is invoked checking if the suspect is the same as the secret person's name
// and generating a win of looes display accordingly
const checkMyGuess = (suspect) => {
    if (suspect === secret.name) {
        winOrLose.style.display = "block"
        winOrLoseText.innerHTML = `WOHO! You got it right - well done!`
        winningSound.play();
    } else {
        winOrLose.style.display = "block"
        winOrLoseText.innerHTML = `FAIL! You got it wrong - better luck next time!`
        losingSound.play()
    }

    // board.innerHTML = '' HIDE THE GAME BOARD
}


// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutbtn.addEventListener('click', checkQuestion)
playAgainbtn.addEventListener('click', start)