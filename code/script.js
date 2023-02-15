const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restartBtn')

//Array with all the characters as objects
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

let secret // will be the secret person object
let currentQuestion // will be the current question object
let charactersInPlay //will be an array of all people left in the game

//Generates the board with all people, starts with reset to clear people
const generateBoard = () => {
    board.innerHTML = ''
    charactersInPlay.forEach((person) => {
        board.innerHTML += `
        <div class="card">
            <p>${person.name}</p>
            <img src=${person.img} alt=${person.name}/>
            <div class="guess">
            <span>Guess on ${person.name}?</span>
            <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
            </div>
        </div>
        `
    })
}

// The secret person
const setSecret = () => {
    secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

const start = () => {
    charactersInPlay = CHARACTERS; //everyone is in play at the beginning
    setSecret(); //Set secret person
    generateBoard(); //Draws the board
    }

//setting the current question in the dropdown
const selectQuestion = () => {
    const category = questions.options[questions.selectedIndex].parentNode.label
    const value = questions.options[questions.selectedIndex].value

    currentQuestion = {
        category: category, 
        value: value
    }
}

const checkQuestion = () => {
    const { category , value } = currentQuestion

if (category === 'hair' || category === 'eyes') {
    filterCharacters(true)
} else if (category === 'accessories') {
    filterCharacters(false)
}
}


const filterCharacters = (keep) => {
    const { category , value } = currentQuestion
    if (category === 'accessories') {
        if(keep) {
            alert(`Yes, the person is rocking ${value}! Keeping everyone wearing ${value}.`)
        } else {
            alert(`No, the person doesn't wear ${value}! Removing everyone wearing ${value}.`)
        }

    } else if (category === 'other') { 
        if (keep) {
            alert(`Yes, the person wears ${value}! Keeping everyone wearing ${value}.`)
        } else {
            alert(`No, the person doesn't wear ${value}! Removing everyone wearing ${value}.`)
        }
    }
    else { (category === 'hair' || category === 'eyes') 
        if (keep) {
            alert(`Yes, the person is rocking ${value}! Keeping everyone wearing ${value}.`)
        } else {
            alert(`No, the person doesn't wear ${value}! Removing everyone wearing ${value}.`)
        }
    }
}

const guess = (personToConfirm) => {

}

const checkMyGuess = (oersonToCheck) => {

}

//starts the game
start()

//Eventlisteners

restartButton.addEventListener('click', start)
