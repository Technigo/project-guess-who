// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filter = document.getElementById('filter')
const playAgain = document.getElementById('playAgain')

// Array with all the characters, as objects
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
    charactersInPlay = CHARACTERS
    generateBoard()
    setSecret()
    console.log(secret)
}


// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
    const category = questions.options[questions.selectedIndex].parentNode.label
    const selectedValue = questions.options[questions.selectedIndex].value

    /* the variable currentQuestion is created as an object to use for comparison with the "secret"-person*/
    if (category === 'hair color') {
        currentQuestion = {
            attribute: 'hairColor',
            value: selectedValue,
            category: category,
        }
    } else if (category === 'eye color') {
        currentQuestion = {
            attribute: 'eyeColor',
            value: selectedValue,
            category: category,
        }
    } else if (category === 'accessories') {
        currentQuestion = {
            attribute: selectedValue,
            value: true,
            category: category,
        }
    } else if (category === 'other') {
        currentQuestion = {
            attribute: selectedValue,
            value: true,
            category: category,
        }
    }
}

const checkQuestion = () => {
    /*begin by running selectQuestion to define what object of currentQuestion we are working with*/
    selectQuestion()
        /*declaring the variable "keep"*/
    let keep
    console.log(currentQuestion) /*just for testing and to understand the code*/
        /*variable will be given the value true or false (boolean) based on whether the currentQuestions matches the "secret" or not. 
        If they are match the code will assign the value true. 
        No indication of what will happen if its not a match as the value will then automatially be assigned false*/
    if (currentQuestion.category === 'hair color') {
        keep = secret.hairColor === currentQuestion.value
        console.log(`${secret.hairColor} ${currentQuestion.value} ${keep}`) /*just for testing and to understand the code*/
    } else if (currentQuestion.category === 'eye color') {
        keep = secret.eyeColor === currentQuestion.value
    } else if (currentQuestion.category === 'accessories') {
        if (currentQuestion.attribute === 'glasses') {
            keep = secret.glasses === true
        } else {
            keep = secret.hat === true
        }
    } else {
        keep = secret.smoker === true
    }
    /*run filterCharacters based on the results of the above if-string (keep=true/false)*/
    filterCharacters(keep)
}

const filterCharacters = (keep) => {
    /*declaring the different variable from the checkQuestion function*/
    let attribute = currentQuestion.attribute
    let value = currentQuestion.value
    let group = currentQuestion.category

    /*generating the correct alert based on keep = true/false for the chosen property*/
    if (group === 'accessories') {
        if (keep) {
            alert(
                `Yes, the person wears ${attribute}! Keep all that wear ${attribute}`
            )
        } else {
            alert(
                `No, the person doesn't wear ${attribute}! Remove all that wear ${attribute}`
            )
        }
    } else if (group === 'other') {
        if (keep) {
            alert(
                `Yes, the person has a ${attribute}! Keep all that have a ${attribute}`
            )
        } else {
            alert(
                `No, the person doesn't have a ${attribute}! Remove all that have a ${attribute}`
            )
        }
    } else {
        if (keep) {
            alert(`Yes, the person has ${value}! Keep all persons with ${value}`)
        } else {
            alert(`No, the person doesnt have ${value}! Remove all persons with ${value}`)
        }
    }

    /*this function will create a new array with those that have the correct properties*/
    if (keep) {
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] === value)
    } else {
        charactersInPlay = charactersInPlay.filter((person) => person[attribute] !== value)
    }

    /*re-draw the board with the new array of correctly filtered CHARACTERS (now charactersInPlay)*/
    generateBoard(charactersInPlay)
}

/*the player confirms that they are making a finalGuess*/
const guess = (suspect) => { /*how does the code know that the "suspect" is the person we have clicked? (onclick=guess?)*/
    let finalGuess = confirm(`Are you sure you would like guess ${suspect}?`)
    if (finalGuess) {
        checkMyGuess(suspect)
    }
}

const checkMyGuess = (suspect) => {
    console.log(suspect)
    if (suspect === secret.name) { /*why is only the name generated for the suspect? Not the entire object?*/
        alert('YAY!that is correct!')
    } else {
        alert('Sorry,try again')
    }
    // 1. Check if the suspect is the same as the secret person's name
    // 2. Set a Message to show in the win or lose section accordingly
    // 3. Show the win or lose section
    // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
filter.addEventListener('click', checkQuestion)
playAgain.addEventListener('click', start)