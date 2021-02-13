# Guess Who

**Mission:** 
- *Create a Guess Who game using arrays, objects and loops*

**Requirements:**

🔵 Blue level
- [x] *The board with characters generated on game start*
- [x] *Random character is set as secret on game start*
- [x] *Select a question and filter board based on that*
- [x] *Give player feedback with alerts and confirm*
- [x] *Guess secret character and check if it is correct*

🔴 Red level
- [x] Add a restart function
- [x] Add more attributes and questions to check on the characters
- [x] Create a counter to keep track of how many questions a player does.
- [x] Change the styling

⚫ Black level
- [x] Create a timer that measures how long time each game takes.
- [x] Animations when flipping a card.
- [x] Create the possibility to add a player name when starting the game.


***

## Workflow

### The steps
I began by reading through the steps defined in the project brief. I then used those descriptions in conjunction with the listed blue requirements to create a todo list of functions to add. I worked through the list and added functionality accordingly. 

### Make it BEM
Like I've done in almost all my projects so far I go through all the html elements and existing style sheets. I then change and apply the BEM methodology to that. 

Expample implementation of BEM in this project:
```html
<!-- A Button is a class .button -->
<!-- but it can also be either filled or outlined -->
<button class="button button__filled">Start Game</button>
<button class="button button__outlined">RESTART</button>
```
Then in the stylesheet for buttons I specify the style for these classes:
```css
.button {
  border: 2px solid var(--primary);
  border-radius: 50px;
  padding: 17px 50px;
  margin: 10px 0;
  cursor: pointer;
}
.button__outlined {
  background-color: transparent;
  color: var(--primary);
}
.button__filled {
  background-color: var(--primary);
  color: white;
}
```
It is an elegant way of making sure that all buttons have a base style (applied by the **.button** class).
Then the element has another class on it to make sure it has a unique style to it (in this case applied by the **.button__outlined** and **.button__filled**)

I used this site to implement the methodology: http://getbem.com/naming/

### Adding intermediate and advanced features

I then continued on my work path to complete all requirement levels.

> ❗ I made some personal adjustments to the descriptions of the advanced features (see list below)

Honerable mentions of features added:
- The *counter* requirement was described to be counting the amount of guesses. However I decided to change it into amount of questions asked, since it made more sense to me to display to the user how many questions it took for them to make a guess.
- To change the style; I liked the already set colors so I focused on making minor tweaks to the style and make it more responsive.
- When adding the possibility to add a player name, this included a new feature where the first thing to appear on the game is a start new game screen; where the user sets their name and then can start the game.
- Flipping cards was made possible by following this site description: [How to Flip a Card](https://www.w3schools.com/howto/howto_css_flip_card.asp)   
  - The main thing learned from this was that I needed an inner wrapper for the two sides of the cards.
  - Also that I managed to flip a card by just adding a css class to it. VERY DYNAMIC! 😃
  
  ```css
  /* Whenever this class is added to a card it flips!! */
  .card__inner--flipped {
    transform: rotateY(180deg);
    border: 2px dotted var(--secondary) !important;
  }
  ```

### The Code clean-up
As a last step I went through the code file by file and added descriptive comments and removed any debug comments.
Like I did in the last project I used comment blocks to describe each function. I made a template for this last project and used that in this one as well.

Template:
```js
/** <insert general function description>
 * Logic:
 * 1. <first logical step>
 * 2. <second logical step>
 * ... etc.
 */
```
I do this mainly for my own learning purpose. By decribing a function I made using logic steps I learn alot about what I have done.
<br>
Also this helps any code reviewers follow along with my code, and maybe even teach the reviewer something 😃

***

## Reflections
All in all this project was not filled with any major issues. I worked through the requirements with ease. However, no project is without issues...
<br>
- I struggled a bit in the beginning trying to follow along in the already set up code. Especially since I found some bugs in that code. So the preparation phase on day 1 did take longer than I had planned. But after chaging the structure to be more easy to read it went smoothly.
- Since I decided to make the cards flippable (and CSS is not my strong suit), that process did take longer than any javascript process. But when I found an instructional I wanted to follow and get inspired by, I learned from that and found a dynamic way to apply the functionality into my project. 
<br>

If I were to continue on this project / start over I would:
- I would add a custom confirm alert (since I already made a custom normal alert, I would probably add the same type of thing for the confirm action)
- I would also probably work more on the style for the question selection.
  - Maybe even make so that you can't guess the same thing twice.
<br>

***

## View it live
https://guess-who-flips.netlify.app/

