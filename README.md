# Guess Who? 🤔 

In this project I've built the digital version of the old character guessing game called "Guess Who". 

Most of the HTML structure and styling, as well as some functions in JavaScript, was already in place from the start so that I could focus more on the JavaScript part. 


## The problem

The main task was to build a guessing game using primarily JavaScript. 

The first thing I did was to to think about the game "Guess Who" itself, i.e. the different parts and steps of the game. After that I proceeded to look at the starter code to get a feel for the structure of it and what needed to be done and in what order etc. 

I then proceeded to build functions for the different steps of the game, which mainly contained to set a secret person, setting up an object for the user's selection (a property) in the drop down menu and then to compare this with the the secret person. Depending on the result of the comparison, a filtering method was applied to generate the board anew with the correct persons to remain. The user is also alerted with a message of the results of this filtering. This process continued until the user is ready to make a guess on the secret person, leading the game to end either on a win or a lose for the user depending on if the guess was correct or not.

For the abovementioned functions I generally used if statements and eventlisteners, but also the filter method. The main part to get the filter method to work was to have an object containing the user's selection in the drop down menu and then compare this property with the secret person's.  

I also wanted to try and write less code if possible, which I think I've accomplished quite well considering the level I'm currently at. 

When the JavaScript functionality was in place, I proceeded to style the webpage a bit with CSS and added a color theme that I liked.

I'm happy about how the project turned out and that I got the basic requirements for the functionality in place. If I had more time, I would add a couple functionalities such as a timer that measures how long time each game takes, sound effects on different kinds of actions, a user input field for the user's name and a highscore board. Also I would've liked to change the characters completely to be about animals (either cats or dogs) and a styling to match!


## View it live

To view the site I've created, check it here: https://amazing-mccarthy-a42098.netlify.app/ 

