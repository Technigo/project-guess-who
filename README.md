# Project Name

The project was to build a Guess Who Game and to pratice using array methods, if/else statement, objects


## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

 Throughout the project, I learn how to read, analyze and develop the code from Technigo's code template. The core challenge was to understand how to get a value from an array which is based inside an object. For example:
 
 const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'image/character-1.png',
    hair: 'pink',
    eyes: 'hidden',
    accessories: ['glasses', 'hat', "earing"],
    job: []
  }
 
 We need to get the value from accessories array and compare that value with the secret person. In this case, I chose the .include() method to solve this problem.
 
 Next, I had not played the game before, I spent time on playing the game to understand how it structures, how the user interacts and how I can make the game more interesting.
 - I managed to add the sound effect to all the buttons, and the character cards whenever the user hover the mouse on them. The solution for this was to use the mouseover for the restart-button, findOut-button's eventListener, and add onhover 
## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
