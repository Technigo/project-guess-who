# Project Name

The task was to create a Guess Who-game where the goal is to find the secret person among a game board of characters. The computer displays a set of options/attributes from which the player can choose. The computer will show if the attribute matches the attributes of the secret person or not and thereafter redraw the game board until the player makes a guess on the right (or wrong) person. 

## The problem

I have solved the project by 
1. storing a set of DOM selectors as variables that fetches HTML elements with the method getElementsByID.
2. created som global variables to use in several functions. 
3. created a series of functions: randomly set one person as the secret person when the game is started, set an object when the player chooses one attribute in the dropdown menu, compare if the attribute matches the attributes of the secret person and depending on that select which characters to keep or remove using the filter method. 
4. set up eventListeners to fetch the player's input and invoking functions. 
If I had more time I would look into the intermediary and/or advanced goals aswell. I would like to know how to keep track of how many guesses the player does and create a timer that measures the time of the game.  

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
