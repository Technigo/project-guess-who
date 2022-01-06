// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const findOutButton = document.getElementById('filter');
const playAgainButton = document.getElementById('playAgain');
const winOrLoseWrapper = document.getElementById('winOrLose');
const winOrLoseText = document.getElementById('winOrLoseText');
const winnerSound = document.getElementById('winnerSound');
const loserSound = document.getElementById('loserSound');

// Array with all the characters, as objects
const CHARACTERS = [
	{
		name: 'Jabala',
		img: 'images/jabala.svg',
		hair: 'hidden',
		eyes: 'hidden',
		accessories: ['glasses', 'hat'],
		other: [],
	},
	{
		name: 'Jack',
		img: 'images/jack.svg',
		hair: 'hidden',
		eyes: 'blue',
		accessories: ['hat'],
		other: [],
	},
	{
		name: 'Jacques',
		img: 'images/jacques.svg',
		hair: 'grey',
		eyes: 'blue',
		accessories: ['hat'],
		other: ['smoker'],
	},
	{
		name: 'Jai',
		img: 'images/jai.svg',
		hair: 'black',
		eyes: 'brown',
		accessories: [],
		other: [],
	},
	{
		name: 'Jake',
		img: 'images/jake.svg',
		hair: 'yellow',
		eyes: 'green',
		accessories: ['glasses'],
		other: [],
	},
	{
		name: 'James',
		img: 'images/james.svg',
		hair: 'brown',
		eyes: 'green',
		accessories: ['glasses'],
		other: [],
	},
	{
		name: 'Jana',
		img: 'images/jana.svg',
		hair: 'black',
		eyes: 'hidden',
		accessories: ['glasses', 'jewellery'],
		other: [],
	},
	{
		name: 'Jane',
		img: 'images/jane.svg',
		hair: 'yellow',
		eyes: 'hidden',
		accessories: ['glasses'],
		other: [],
	},
	{
		name: 'Jaqueline',
		img: 'images/jaqueline.svg',
		hair: 'orange',
		eyes: 'green',
		accessories: ['glasses', 'jewellery '],
		other: [],
	},

	{
		name: 'Jazebelle',
		img: 'images/jazebelle.svg',
		hair: 'purple',
		eyes: 'hidden',
		accessories: ['glasses'],
		other: ['smoker'],
	},
	{
		name: 'Jean',
		img: 'images/jean.svg',
		hair: 'brown',
		eyes: 'blue',
		accessories: ['glasses', 'hat'],
		other: ['smoker'],
	},
	{
		name: 'Jeane',
		img: 'images/jeane.svg',
		hair: 'brown',
		eyes: 'green',
		accessories: ['glasses'],
		other: [],
	},
	{
		name: 'Jed',
		img: 'images/jed.svg',
		hair: 'orange',
		eyes: 'green',
		accessories: ['glasses', 'hat'],
		other: ['smoker'],
	},
	{
		name: 'Jenni',
		img: 'images/jenni.svg',
		hair: 'white',
		eyes: 'hidden',
		accessories: ['hat', 'jewellery'],
		other: [],
	},
	{
		name: 'Jeri',
		img: 'images/jeri.svg',
		hair: 'orange',
		eyes: 'green',
		accessories: ['glasses'],
		other: [],
	},
	{
		name: 'Jerry',
		img: 'images/jerry.svg',
		hair: 'hidden',
		eyes: 'blue',
		accessories: ['hat'],
		other: [],
	},
	{
		name: 'Jess',
		img: 'images/jess.svg',
		hair: 'black',
		eyes: 'blue',
		accessories: ['glasses'],
		other: [],
	},
	{
		name: 'Jocelyn',
		img: 'images/jocelyn.svg',
		hair: 'black',
		eyes: 'brown',
		accessories: ['glasses', 'jewellery'],
		other: [],
	},
	{
		name: 'Jon',
		img: 'images/jon.svg',
		hair: 'brown',
		eyes: 'green',
		accessories: ['glasses'],
		other: [],
	},
	{
		name: 'Jordan',
		img: 'images/jordan.svg',
		hair: 'yellow',
		eyes: 'hidden',
		accessories: ['glasses', 'hat', 'jewellery'],
		other: [],
	},
	{
		name: 'Josephine',
		img: 'images/josephine.svg',
		hair: 'grey',
		eyes: 'brown',
		accessories: ['jewellery '],
		other: [],
	},
	{
		name: 'Josh',
		img: 'images/josh.svg',
		hair: 'yellow',
		eyes: 'green',
		accessories: [],
		other: [],
	},
	{
		name: 'Jude',
		img: 'images/jude.svg',
		hair: 'black',
		eyes: 'green',
		accessories: [],
		other: [],
	},
	{
		name: 'Julie',
		img: 'images/julie.svg',
		hair: 'black',
		eyes: 'brown',
		accessories: ['glasses', 'hat'],
		other: [],
	},
];

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;

// Draw the game board (This function generates all the cards)
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
    `;
	});
};

const playAgain = () => {
	charactersInPlay = CHARACTERS;
	board.style.display = '';
	winOrLoseWrapper.style.display = 'none';
	setTimeout(() => generateBoard(), 1000);
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
	secret =
		charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
	console.log(secret);
};

// This function to start (and restart) the game
const start = () => {
	// Here we're setting charactersInPlay array to be all the characters to start with
	charactersInPlay = CHARACTERS;
	//This invokes the function to generate the board.
	generateBoard();
	//Randomly selects a secret person
	setSecret();
	//Calls the function play again
	playAgain();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
	// This variable stores what option group (category) the question belongs to.
	const category = questions.options[questions.selectedIndex].parentNode.label;
	// A variable that stores the actual value of the question we've selected.
	const value = questions.value;
	currentQuestion = {
		category: category,
		value: value,
	};
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
	const { category, value } = currentQuestion;
	let keep;
	// check if the attributes in the currentQuestion matches the attributes in the secret or not
	if (category === 'hair' || category === 'eyes') {
		keep = secret[category] === value;
	} else if (category === 'accessories' || category === 'other') {
		keep = secret[category].includes(value); //the include determines if the (array) secret person has a certain value
	}
	//Invokes filterCharacters
	filterCharacters(keep);
};

// Filters the characters array and redraw the game board
const filterCharacters = (keep) => {
	// Destructuring assignment = this allows us to unpack the values saved from check question
	const { category, value } = currentQuestion;
	// Shows the correct alert message for different categories
	if (category === 'accessories') {
		if (keep) {
			alert(`Yes, the person wears ${value}! Keep all that wears ${value}!`);
		} else {
			alert(
				`No, the person doesn't wear ${value}! Remove all that wears ${value}!`
			);
		}
	} else if (category === 'other') {
		if (keep) {
			alert(
				`Yes, the person is a ${value}! Keep all persons who are ${value}!`
			);
		} else {
			alert(
				`No, the person is not a ${value}! Remove all persons who are not a ${value}!`
			);
		}
	} else if (category === 'hair') {
		if (keep) {
			alert(
				`Yes, the person has ${value} hair color! Keep all persons who has ${value} hair color!`
			);
		} else {
			alert(
				`No, the person does not have ${value} hair color! Remove all persons who does not have ${value} hair color!`
			);
		}
	} else {
		if (keep) {
			alert(
				`Yes, the person has ${value} eye color! Keep all persons who has ${value} eye color!`
			);
		} else {
			alert(
				`No, the person does not have ${value} eye color! Remove all persons who does not have ${value} eye color!`
			);
		}
	}

	// Filter by category to keep or remove based on the keep variable.
	if ((keep && category === 'hair') || (keep && category === 'eyes')) {
		charactersInPlay = charactersInPlay.filter(
			(person) => person[category] === value
		);
	} else if ((!keep && category === 'hair') || (!keep && category === 'eyes')) {
		charactersInPlay = charactersInPlay.filter(
			(person) => person[category] !== value
		);
	} else if (
		(keep && category === 'other') ||
		(keep && category === 'accessories')
	) {
		charactersInPlay = charactersInPlay.filter((person) =>
			person[category].includes(value)
		);
	} else if (
		(!keep && category === 'other') ||
		(!keep && category === 'accessories')
	) {
		charactersInPlay = charactersInPlay.filter(
			(person) => !person[category].includes(value)
		);
	}
	// Invoke a function to redraw the board with the remaining people.
	generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
	// store the interaction from the player in a variable.
	const playerGuess = confirm(
		`Are you sure you want to guess on ${personToConfirm}?`
	);
	if (playerGuess) {
		// If the player wants to guess, invoke the checkMyGuess function.
		checkMyGuess(personToConfirm);
	}
};

// If player confirms, this function is invoked
const checkMyGuess = (personToConfirm) => {
	// 1. Check if the personToCheck is the same as the secret person's name
	if (personToConfirm === secret.name) {
		// 2. Gives a message to show in the win or lose section accordingly
		winnerSound.play(); //winner sound
		winOrLoseText.innerHTML = `You guessed right, ${personToConfirm} is the secret person!`;
	} else {
		loserSound.play(); //loser sound
		winOrLoseText.innerHTML = `You are wrong, ${personToConfirm} is not the secret person!`;
	}
	// 3. Show the win or lose section
	winOrLoseWrapper.style.display = 'flex';
	// 4. Hide the game board
	board.style.display = 'none';
};

// Invokes the start function when website is loaded
start();

// All the event listeners
//when clicked the game restarts
restartButton.addEventListener('click', start);
//when a question is picked in the dropdown menu it activates the select question
questions.addEventListener('change', selectQuestion);
//when clicked it invokes the checkQuestion function
findOutButton.addEventListener('click', checkQuestion);
//when clicked the game restarts
playAgainButton.addEventListener('click', start);
