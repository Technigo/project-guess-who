**Start game**
_-Eventlistener on click for restartButton that starts the game e.i. calls function start()_
_-function start() must randomly pick function setSecret()_
_-Generate board_

**How to play**
_-Select an option from the list and save it to global variable currentQuestion_
_-Save the category and value to checkQuestion_
_-options in select will compare options with setSecret() using if-else statements_ 
_-If option is true, show alert and remove all characters that not is having the option_
_-Else show alert and remove the characters who has the option_ 
_-Select new option_

**Guess character**
_-Eventlistener that takes the index of person that the button was clicked for and compare that person with secret_
_-Check if secret has selected option, if so call filterCharacters(keep) and save all that has value_
_-Check if secret does not has selected option, if so call filterCharacters()_

**Filter guess**
_-FilterCharacters according to guess_
_-If guess is matching secret, filter out all with guess in array charactersInPlay_
_-If guess is not matching secret, filter and save all without guess detail to charactersInPlay_


_-Alert if correct, do you want to remo "yes correct" else, you are wrong_
_-Game is over, press start new game to restart_

**Add ons**
_-Count how many times a person has been guessing_
_-Sound effects_

