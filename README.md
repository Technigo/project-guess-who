<b>About</b><br>
Creating a 'guess-who' game which filters and renders out images and array information based on the user choices in input fields.

<b>Problem approach</b><br>
The code works as this. It matches the input value with the value of a from the computer randomly selected character (with image and information stored in key-value pairs in an array) - and then subsequently filters the game board. The user can then choose to make a final guess on a character and has to confirm through a dial pop-up made by confirm(), which returns a true or false. While debugging I found that the user were able to click on the 'restart'-button several times while playing, making the time counter get buggy. The time counter is made through implementing setInterval(), and my solution was thus to add a property to the stopTimer function (the stopTimer function clears the setInterval). The property is to control the status of whether stopTimer has been invoked or not. By then using an if-statement to check for the stopTimer function being invoked or not, I could control when the user was able to press the restart button. Which, is first after you made a guess.

Possible improvements could be to refactor the code further.

<b>Live demo:</b> https://tender-johnson-4c3670.netlify.app
