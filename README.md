# Project Name

The project was to build a Guess Who Game and to pratice using array methods, if/else statement, objects


## The problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

 - Through the project, I learned how to read, analyze and develop the code from Technigo's code template. The core challenge was to understand how to get a value from an array which is based inside an object. For example:
 
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

- Secondly, it was challenging to create the if/else statement to compare the the question with the secret person. I had to understand what to keep in game board every time we compare and filter the characters
 
- Next, I had not played the game before, I spent time on playing the game to understand how it structures, how the user interacts and how I can make the game more interesting.
   -- I managed to add the sound effect to all the buttons, and the character cards whenever the user hover the mouse on them. The solution for this was creating a      function which plays the sound and add it to the buttons and character cards.
   -- I added background music to the game and with the mute/unmute button for the users to control. During the process, I recognised that Safari does not support autoplay and require first interaction from the user to activate the sound. In the end, after I created a greeting modal to acquire user's name, the browser got the interaction from the user and enable the music to play. 
   -- I added sparkle animation, card hover effect to the game board
   -- I added time counter and guess-made counter 
   -- After the user guessed the character, it will show a modal to confirm if the user win or lose, together with the secret person's image.
## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
https://suki-guesswho.netlify.app
