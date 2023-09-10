# Qui est-ce? (Guess who game)

This project is all about building a digital version of the classic board game [Guess Who](https://en.wikipedia.org/wiki/Guess_Who%3F) using JavaScript, HTML, and CSS.

Concepts like DOM manipulation, event handling, function definitions, conditional statements, delayed execution, variable assignment, object and array manipulation are applied.


## Useful for this project

Have used:
- google
- w3schools.com
- geeksforgeeks.org
- https://mixkit.co for sound files
- https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86
- chatGPT

## The problem
Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

- https://stackoverflowteams.com/c/technigo/questions/2884 to understand the regrouping of categories

- error by default where newer versions of chrome require a favicon
https://stackoverflow.com/questions/39149846/why-am-i-seeing-a-404-not-found-error-failed-to-load-favicon-ico-when-not-usin
<link rel="shortcut icon" href="#">

- when selecting "brown hair" found at option [0], no change event is detected by the eventlistener -skipping the whole <selectQuestion> function, not passing the values <category> and <value> in <checkQuestion> (undefined) -<findOutbutton> does not react.
Also, an action on the board game predetermined by the option selected in the menu is activated only when the <findOutbutton> is clicked, and not the <change> event itself, thus making the eventlisterner <change> irrelevant if the <selectQuestion> is invoked directly in next <checkQuestion> function triggered by <findOutbutton> + erasing <questions.addEventListener('change', selectQuestion)>
- 2nd way to bypass the bug is to invoke the selectQuestion function using a second pathway by including it in the start function.

- Error msg in dev tools: 
```
Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first. https://goo.gl/xX8pDD
``` 
regarding autoplay policy in Chrome I do not master yet.  The 3rd sound file <shuffle.wav> works but with this error message.

- when adding possibility to display a player's name on the <aside>, had to delay the prompt using <setTimeout(addUserName, 1000)> when restarting in start as the prompt appeared immediately after 'click' event on <playAgainButton> before the <start> function is triggered (why?)

## View it live

Have you deployed your project somewhere? Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
