// All the DOM selectors stored as short variables
const board = document.getElementById('board');
const questions = document.getElementById('questions');
const restartButton = document.getElementById('restart');
const filterButton = document.getElementById('filter');

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
		accessories: ['glasses'],
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
		accessories: ['glasses'],
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
		accessories: ['hat'],
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
		accessories: ['glasses'],
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
		accessories: ['glasses', 'hat'],
		other: [],
	},
	{
		name: 'Josephine',
		img: 'images/josephine.svg',
		hair: 'grey',
		eyes: 'brown',
		accessories: [],
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
let numberOfGuesses = 0;
let optionGroups = '';

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
    `;
	});
};

// Populate the select options dynmically from the CHARACTERS array
const generateQuestions = () => {
	const categories = {
		hair: { value: [], type: '' },
		eyes: { value: [], type: '' },
		accessories: { value: [], type: '' },
		other: { value: [], type: '' },
	};

	CHARACTERS.forEach((person) => {
		// for each person in the array of characters do:
		for (const category in person) {
			// for each category in each person img, eyes. hair etc.. do:
			if (category !== 'img' && category !== 'name') {
				// if category is not equal to img and name do:
				if (Array.isArray(person[category])) {
					// if the category is an array spread the values of the array
					// and push them in to the appropriate array in the categories object
					categories[category].value.push(...person[category]);
					categories[category].type = 'array';
				} else {
					// if the category is not an array push them in to the appropriate array in the categories object
					categories[category].value.push(person[category]);
					categories[category].type = 'string';
				}
			}
		}
	});

	// loop through all keys in categories object
	for (const category in categories) {
		// Filter each category array so it has no duplicates
		// the filter function goes through each value in the category array and
		// checks if the value has the same index as the first occurance of the value
		// in the original array in this case the category array
		categories[category].value = categories[category].value.filter((value, index, arr) => arr.indexOf(value) === index);
		// sort values alphbetically
		categories[category].value.sort();
		// build the select element options as html tags
		optionGroups += `<optgroup label='${category}' id='${category}'>`;
		categories[category].value.forEach((option) => {
			optionGroups += `<option value='${option}'>${option} ${categories[category].type === 'array' ? '' : category}</option>`;
		});
		optionGroups += `</optgroup>`;
	}
	questions.innerHTML = '';
	questions.innerHTML += optionGroups;
};

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
	secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]; //
	// console.log(`The secret person is ${secret.name}`, secret);
};

// This function to start (and restart) the game
const start = () => {
	// Here we're setting charactersInPlay array to be all the characters to start with
	charactersInPlay = CHARACTERS;
	// What else should happen when we start the game?
	generateBoard();
	generateQuestions();
	setSecret();
};

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = (guess, name) => {
	numberOfGuesses++;
	console.log(numberOfGuesses);
	let category = '';
	let value = '';
	if (guess) {
		category = 'name';
		value = name;
	} else {
		category = questions.options[questions.selectedIndex].parentNode.label;
		value = questions.value;
	}
	currentQuestion = {
		category: category,
		value: value,
	};

	console.log(`the current guess is ${currentQuestion.category} ${currentQuestion.value}`);
};

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
	const { category, value } = currentQuestion;

	if (secret[category].includes(value)) {
		filterCharacters(true);
	} else {
		filterCharacters(false);
	}
};

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
	const { category, value } = currentQuestion;
	if (keep) {
		alert(`Yes, the person has ${value} ${category}! Keep all people that has ${value} ${category}`);
		charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
	} else {
		alert(`No, the person doesn't have ${value} ${category}! Remove all people that have ${value} ${category}`);
		charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
	}

	// Invoke a function to redraw the board with the remaining people.
	generateBoard();
};

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
	const confirmGuess = confirm(`Are you sure you want to guess on ${personToConfirm}`);
	if (confirmGuess) {
		selectQuestion(true, personToConfirm);
		checkMyGuess(personToConfirm);
	} else {
		alert(`Ok, try again later`);
	}
};

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
	if (personToCheck === secret.name) {
		alert(`Yay! You guessed right, ${personToCheck} is the secret person`);
		filterCharacters(true);
	} else {
		alert(`Darn! ${personToCheck} is not secret person`);
		filterCharacters(false);
	}
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartButton.addEventListener('click', start);
// questions.addEventListener('change', selectQuestion);
filterButton.addEventListener('click', () => {
	selectQuestion();
	checkQuestion();
});
