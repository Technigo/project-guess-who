# Project Name

The task was to create digital version of the character guessing board game Guess Who? by focusing mainly on using JavaScript.

## The problem

I started the project with playing the actual game to get full understanding about the game logic.

The game contains the characters array and by using forEach() method it loops through that array and creates one 'card' for each person in that array. The game starts by self invoking start function that contains another two functions for generating the game board with all the characters and for selecting random secret character (by using Math.random() method) for user to guess. 

In the next step I have created the event listener which occurs when user selects a question to ask about a person in the drop down list. And then based on the answer to that question, I have created a function with if statement inside it to store the information about what attribute user is asking about and the value of that attribute. 

When the question is selected user clicks on the find out button and by using event listener the checkQuestion function is envoked that compares the properties of secret character with the properties chosen by user and returns true if matching, otherwise - false. checkQuestion function stores true or false result in variable "keep" and passes it along as an argument to the filterCharacters function to filter the characters array by using filter() method and to invoke a function to redraw the board with the remaining people. And also to show alert messages to give the user a feedback on the question selected.

At some point, the user wants to make a guess about who the secret person is. The cards have a "Guess" button which is connected to the guess function via the onclick attribute on the card element. The guess function contains confirm() method to make sure that the user really wants to make a guess, as this will end the game in one way or another. If the player confirms that they want to make a guess, the checkMyGuess function is invoked. The chechMyGuess function contains if statement to check if the suspect is the same as the secret person's name and to set a message to show in the win or lose section accordingly.

Finally, the event listener is added to restart button that invokes the start function if the user wants to start the game over again.

If I had more time I would have created a timer that measures how long time each game takes and a counter to keep track of how many guesses a player does.

## View it live

Link to published site: https://vigorous-tereshkova-7e5e52.netlify.app/
