// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const winOrLoseText = document.getElementById('winOrLoseText')
const winOrLoseWrapper = document.getElementById('winOrLose')
const playAgainButton = document.getElementById('playAgain')
const gussesMade= document.getElementById('counter')

// Array with all the characters, as objects
const CHARACTERS = [{
	name: 'Buffy',
	img: 'images/Buffy.jfif',
	fur: 'short',
	size: 'medium',
	accessories: [],
	other: []
}, {
	name: 'Henry',
	img: 'images/poodle.jfif',
	fur: 'curly',
	size: 'medium',
	accessories: ['floppy ears'],
	other: []
}, {
	name: 'Ralph',
	img: 'images/Ralph.jfif',
	fur: 'short',
	size: 'large',
	accessories: [],
	other: ['smelly']
}, {
	name: 'Tigo',
	img: 'images/Tigo.png',
	fur: 'long',
	size: 'large',
	accessories: ['floppy ears'],
	other: []
}, {
	name: 'Belle',
	img: 'images/Belle.jfif',
	fur: 'long',
	size: 'small',
	accessories: ['floppy ears'],
	other: []
}, {
	name: 'Dolly',
	img: 'images/Dolly.jfif',
	fur: 'short',
	size: 'medium',
	accessories: ['a collar'],
	other: []
}, {
	name: 'Don',
	img: 'images/Don.jfif',
	fur: 'short',
	size: 'large',
	accessories: [],
	other: []
}, {
	name: 'Doris',
	img: 'images/Doris.jfif',
	fur: 'short',
	size: 'small',
	accessories: ['a collar'],
	other: []
}, {
	name: 'Fiat',
	img: 'images/Fiat.png',
	fur: 'short',
	size: 'small',
	accessories: [],
	other: []
}, {
	name: 'Jason',
	img: 'images/jason.png',
	fur: 'long',
	size: 'large',
	accessories: ['floppy ears'],
	other: ['smelly']
}, {
	name: 'Lady',
	img: 'images/Lady.jfif',
	fur: 'curly',
	size: 'medium',
	accessories: [],
	other: ['smelly breath']
}, {
	name: 'Louie',
	img: 'images/Louie.jfif',
	fur: 'curly',
	size: 'medium',
	accessories: ['a collar', 'floppy ears'],
	other: []
}, {
	name: 'Lucky',
	img: 'images/Lucky.jfif',
	fur: 'short',
	size: 'large',
	accessories: ['a collar', 'floppy ears'],
	other: ['smelly breath']
}, {
	name: 'Pep',
	img: 'images/pep.jfif',
	fur: 'long',
	size: 'medium',
	accessories: ['floppy ears'],
	other: []
}, {
	name: 'Pixie',
	img: 'images/Pixie.jpg',
	fur: 'curly',
	size: 'small',
	accessories: ['floppy ears'],
	other: []
}, {
	name: 'Frank',
	img: 'images/Frank.png',
	fur: 'short',
	size: 'large',
	accessories: [],
	other: ['smelly breath']
}, {
	name: 'Bob',
	img: 'images/Bob.jpg',
	fur: 'short',
	size: 'medium',
	accessories: [],
	other: []
}, {
	name: 'Puck',
	img: 'images/puck.jfif',
	fur: 'long',
	size: 'small',
	accessories: ['floppy ears'],
	other: []
}, {
	name: 'Biggie',
	img: 'images/biggie.jfif',
	fur: 'long',
	size: 'small',
	accessories: ['floppy ears'],
	other: []
}, {
	name: 'Brody',
	img: 'images/Brody.jfif',
	fur: 'long',
	size: 'large',
	accessories: [],
	other: []
}, {
	name: 'Sara',
	img: 'images/Sara.jfif',
	fur: 'long',
	size: 'large',
	accessories: ['floppy ears'],
	other: []
}, {
	name: 'Steve',
	img: 'images/Shiba.jfif',
	fur: 'curly',
	size: 'small',
	accessories: [],
	other: []
}, {
	name: 'Sloppy',
	img: 'images/sloppy.png',
	fur: 'curly',
	size: 'medium',
	accessories: ['floppy ears', 'a collar'],
	other: ['smelly breath']
}, {
	name: 'Xola',
	img: 'images/Xola.png',
	fur: 'long',
	size: 'large',
	accessories: [],
	other: []
}, ]
// Global variables

let secret
let currentQuestion = { category: 'fur', value: 'long' }
let charactersInPlay
let counterVal = 0



// Draw the game board

const generateBoard = () => {
	board.innerHTML = ''
	charactersInPlay.forEach((person) => {
		board.innerHTML += 
    ` <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div> `
	})
}

// Randomly select a dog from the characters array and set as the value of the variable called secret
const setSecret = () => {
	secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

//function for counting questions, reseting them and updating the counter
function incrementClick() {
	updateDisplay(++counterVal)
  }
  
  function resetCounter() {
	counterVal = 0;
	updateDisplay(counterVal)
  }
  
  function updateDisplay(val) {
	gussesMade.innerHTML = val
  }

// This function to start (and restart) the game
const start = () => {
	console.log("start working")
	charactersInPlay = CHARACTERS;
	generateBoard(charactersInPlay);
	setSecret()
  //hides win or loose wrapper after restart
	winOrLose.style.display = 'none'
	board.style.display = 'flex'
	//soundfunction
	introsound()
	Swal.fire("Oh no!! <br> Yesterday someone left a Döner in the park, now it´s gone! Which dog ate it?")//customed alertbox from sweetalert
    // function to reset counter
	resetCounter()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
	console.log("selectworking")
	const category = questions.options[questions.selectedIndex].parentNode.label
	const value = questions.value


  currentQuestion = {
		category: category,
		value: value,
	}
}
// Function invoked when you click on 'Find Out' button.
const checkQuestion = () => {
	incrementClick()
	console.log("checkquestion working")

	const {
		category,
		value
	} = currentQuestion
	
	// Compares the currentQuestion details with the secret person details and keeps or removes dogs based on that

	if (category === 'fur' || category === 'size') {
		if (value === secret.fur || value === secret.size) {
			filterCharacters(true)
		} //compares string
		else {
			filterCharacters(false)
		}
	} else if (category === 'accessories' || category === 'other') {
		if (secret.accessories.includes(value) || secret.other.includes(value)) {
			filterCharacters(true)
		}//compares arrays
		
		else {
			filterCharacters(false)
		}
	}
	sound()
}

//Function to filter the answer
const filterCharacters = (keep) => {
	const {
		category,
		value
	} = currentQuestion
	// Showing thr alert message for different categories
	if (category === 'accessories') {
		if (keep) {
			Swal.fire(`Yes, the doggo has ${value}! Keep all doggos that have ${value}`)
		} else {
			Swal.fire(`No, the doggo doesn't have ${value}! Remove all doggos that have ${value}`)
		}
	} else if (category === 'other') {
		if (keep) {
			Swal.fire(`Yes, the doggo has a ${value}! Keep all doggos that have ${value}s`)
		} else {
			Swal.fire(`No, the doggo doesn´t have a ${value}! Remove all doggos that have ${value}s`)
		}
		// Similar to the one above
	} else if (category==='fur') {
		if (keep) {
			Swal.fire(`Yes, the doggo has ${value} ${category}! Keep all doggos with ${value} ${category}`)
			
		} else {
			Swal.fire(`No, the doggo doesn´t have ${value} ${category}! Remove all the doggos with ${value} ${category}`)
			
		}
	}

  else {
		if (keep) {
			Swal.fire(`Yes, the doggo is ${value} ${category}! Keep all doggos that are ${value} ${category}  `)
			
		} else {
			Swal.fire(`No, the doggo isnt´t ${value} ${category}! Remove all the doggos that are ${value} ${category} `)
			
		}
	}
	// Filtres the correct answer and calls function with new board
	if (category === 'fur' || category === 'size') {
		if (keep) {
			charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
		} else {
			charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
		}
		generateBoard(charactersInPlay)
		console.log("new board working")
	} else if (category === 'accessories' || category === 'other') {
		if (keep) {
			charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
		} else {
			charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
		}
		generateBoard(charactersInPlay)
		console.log("new board working")
	}

}
// Player asked to confirm
const guess = (personPicked) => {
	let answer = confirm("Are you sure? Press OK to confirm!")
	if (answer) {
		checkMyGuess(personPicked)
	} else {
		alert("Go on playing")
	}

}
// Checks the answer, sends a message to player 
const checkMyGuess = (answer) => {
	
	if (answer === secret.name) {
		winOrLoseText.innerHTML = `Correct! ${answer} ate the döner, You are a winner baby!`
		winningsound()
	} else {
		winOrLoseText.innerHTML = `Sorry, ${answer} is not the one. It was ${secret.name} who ate the Döner!!`
		loosingsound()
		
	}
	//shows winning message
	winOrLose.style.display = 'flex'
	//hides board
	board.style.display = 'none'
}

//soundeffect functions here
const sound = () => {
	let audio = new Audio('./blipp.mp3');
	audio.play();
}
const introsound = () => {
	let audio = new Audio('./introsound.mp3');
	audio.play();
}
const loosingsound = () => {
	let audio = new Audio('./loosingsound.mp3');
	audio.play();
}
const winningsound = () => {
	let audio = new Audio('./winningsound.mp3');
	audio.play();
}
// Invokes the start function when website is loaded
start()
// All the event listeners
restartButton.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOutButton.addEventListener('click', checkQuestion)
playAgainButton.addEventListener('click', start)
