# Project Name

Project brief: to build a digital "Guess Who" game with JavaScript. I made a game with animal theme.

## The problem

I started with looking and understanding the starter code for the project given to me by Technigo and reading the comments that was there to guide me towards the correct use of functions, objects, variables and arrays. It was easy to grasp and I was quickly filling in the needed eventHandlers and made the startfunction refer to the necessary functions to get the game going. Then I built up the question part of the game using switch statements, arrays and select.values. 

After that I added the code for comparassion between the players selected value and the secret characters specific attributes. This was done using if/else statements and implemented the function that filters the sets of game characters depending on that comparasion. The filter function for arrays was used and I decided to put the specific popup sentences for each question in an array that could be fetched and replace a filler-word with the actual value/attribute that the player had chosen. 

Based on the array.filter function I could call for the function that creates the gameboard and replace with the new filtered one. For the guess function that gets called when you click on guess on a character I added two buttons for confirming your guess - yes or no. On no the gameboard would be generated again, but for the yes button I made a function on win makes a winning string sentence and on lose another sentence. I divided up so that then calls another function that adds an active class to an position:absolute section that makes it get the display: flex (from: none) and therefore, lays over the whole screen showing a win/lose section and has a innerHTML building up the end screen.

Clicking play again calls the start function and the gameboard gets redrawn by setting the character array to all characters again and calling the function that sets a new secret character.

I also added some extra features: startscreen with nameinput, animation and sound on flipping cards, guess counts, win counts, result board, timer and styling with replacing all images and objects in arrays.

I did not really struggle, but did redo my code a lot to try to find the nicest structure and best methods which did take up some time and extra troubleshooting.
If I had more time I would add more functions, maybe a hint button, and style a bit more to get the game to be less like the original styling. But I do feel that I did have more than enough time to do this project.

Techniques: JS/CSS/HTML, arrays, objects, switch, if/else statements, array functions such as push & filter, loops, audio
Tools: VS code, codepen, StackOverflow, Slack, Zoom, JS Lint, Live Server

## View it live

https://animal-guess-who.netlify.app/
