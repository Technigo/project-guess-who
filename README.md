# Guess Who game

The assignment was to create a classic Guess Who game as a website.
 
## The problem
 
I started by getting ahead of myself, creating a flowchart in drawio to visualize my program flow, but I then realized how much code we had been handed already, so I went along with the given code skeleton. Figured this could be seen as a lesson to adapt to existing code, not just being able to make my own structures. With this, I tried adhering as closely to the original structure as possible, but I did deviate where the functionality was held back by the given skeleton, in my opinion.
 
I expanded the currentQuestion objects to include a property named “label”, allowing me to easily write hair color and eye color as simply hair and eyes in the alerts, which looked less robotic. I also broke the object creation pattern when it came to the accessories, by assigning the “attribute” property the value of the selected option tag. This allowed me to separate accessories into hats and glasses, despite being within the same opt group in the dropdown menu. As such, I could give the user an alert that says "No, the person doesn't wear glasses" specifically, instead of the more broad "No, the person doesn't wear accessories", which felt odd to me.
 
Other tweaks I made:
> styled the page into a teal color using CSS. I used CSS variables to easily tweak multiple rules at once
> added the portrait of the secret person to the win/lose screen by adding a trimmed version of the generateBoard code (didn’t just call the function due to not wanting the “guess” button on the win/lose screen)
> renamed the character property “hat” to “headwear” to better include bandanas and hijabs
 
What I’d do if I had more time:
> Redo the theming altogether to be about my friends and/or internet memes :P
> center the remaining characters better when characters are filtered out
> add the timer and guess counter
 
## View it live
 
Netlify Link:
https://eloquent-bartik-0ea5ee.netlify.app/
