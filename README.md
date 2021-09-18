# Guess Who Game

This project follows the usual rules of the traditional Guess Who game. The user is presented with a board featuring a set of characters. 

The computer picks a secret character. The user must guess who it is by selecting questions about the character's traits (from a drop-down menu). 

The non-matching characters are filtered after each question. At any moment, the user has the chance to make a guess on the secret character. If the guess is wrong, the computer wins. 

This game is composed of 60% Javascript. It was made to practice objects, arrays, functions and loops. 

## Features

- Array of objects containing the characters, featuring several traits
- A board that gets generated as soon as the page loads
- A filtering function that discards the characters in different ways (depending on whether the values are strings or arrays)
- Alerts responding to the user's questions 
- An additional screen the user gets sent to after making a final guess 

## Production process

- Initially attempted to make the project from scratch without using the clues on the project brief. Started by writing the pseudocode. 

- Decided to follow the project brief in the end. 

- Struggled with certain items due to lack of attention to detail, like: 

1. A typo on the "accessories" category
2. Not realizing that the user needs to click on an option in the drop-down menu in order to initiate the game
3. Misplacing the generateBoard( ) function

A big shout out to my bootcamp classmates, who with their fresh pair of eyes helped me find these small details.

## View it live

https://isabel-gonzalez-guess-who.netlify.app/
