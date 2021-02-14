# Guess Who Game

This weeks project was to create a Guess Who game, where the player can choose various attributes and filter characters based on what has been set up for the objects. After narrowing down the amount of characters left in the game, the player can place a guess and be told whether it's correct or not. 

## The problem

Since we received a base to stand on, with some code already in the files, I started with looking into what was already there. By doing that, I could get a grip of how the HTML file was connected with the JS file, and also in which order things were supposed to happen. I started to follow the steps where the first step was to start the game and the second to have the secret person set. The upcoming steps contained some requests to  set up a function to compare the attributes selected with the one of the secret person, and based on what was selected, filter the board. I used if and else statements for this, and added alerts to give feedback to the player. The if and else statements worked well, and the alerts came as supposed. I did, however struggle for a while with the filter function, but reached out for help on Stack Overflow, and made sure to follow the discussions on Slack, which also gave some great advice to keep in mind for the rest of the project. I also tried to apply the learnings from this weeks lectures about objects, filtering etc. Of course the game also had to contain a function for the player to make a guess and to confirm the selection. After receiving the confirmation from player, the guess is now compared with the secret person, and the player receives feedback on whether the choice was correct or not. I have also added functions that makes the play again button work, as well as the restart button. This was done with help from event listeners. 

I also changed the styling a little bit, by changing the colors to give the game my own touch. If I had more time I would try to create a game based on famous characters from a TV show.

## View it live

My game can be watched and played at https://therese-guess-who-game.netlify.app/

