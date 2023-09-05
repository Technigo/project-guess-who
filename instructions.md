## Step 1 - Loading the website

The first thing that happens when you load the website is that the game board should be rendered on the screen. We've set up the function `generateBoard` that you can invoke whenever you need it. Take a look at this function to **see that you understand what is happening in there**. Basically, we're looking at the characters array and looping through that array, creating one 'card' for each person in that array. We're adding that as the innerHTML of the element with the id `board`.

💡 You can also see that all the DOM selectors should be set up on the top of the file, just as we've done with a few of them.

Also, take a look at the huge CHARACTERS array that contains a bunch of objects with all the people and their characteristics. So you know how that data is structured.

The `generateBoard` function should be invoked when the website is loaded, but that's not the only thing that should happen at that point. That's why we've created a `start` function. The `start` function is invoked in the end of the Javascript file, that is when the website is loaded. But the `start` function itself is empty, so nothing happens when it's invoked. Make sure to fill up the board with characters here.

## Step 2 - What else should happen when we start the game?

We're playing against "the computer" so there's a need to have a secret person, randomly selected by the opponent. The one that we're guessing on. We need to set this secret when the game starts. We've created a randomizer function to randomly select one character item from the big array of characters. This is done in the `setSecret` function, where we randomly select a character and set that as the value of the global variable named `secret`. Make sure to set a secret person when the game starts.

💡 Read more about how to use `Math.random()` [here](https://www.w3schools.com/js/js_random.asp "here")

## Step 3 - How do we play the game?

First of all, we need to be able to select a question to ask about a person and then based on the answer to that question, filter out the people who match (or don't match) that answer.

For example, if our `secret` person is wearing glasses, and we make a guess that the character is wearing glasses, we want the game to filter out all characters who are _not wearing glasses._ We'll go further into how you might do the filtering in step 4.

There's a `selectQuestion` function declared, but you need to make it work. Also, you need to figure out when it should be invoked.

It's time to use an eventListener that listens to when the player interacts with your website.

All the `eventListeners` should be set up at the bottom of the file. We've set up the restart button there and made that button listen to a click event. When the click event is triggered, the start function is invoked. Do something similar with the `select` element.

💡 Read more about how to deal with events and selects [here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).

Also, make sure to set up the actual select element with all the options to ask about.

We want to store this question in the global variable `currentQuestion`, so that we then can compare the question with the secret person. We need to store the information about what **category** we're asking about and the actual **value** we've chosen. Such as `hair` (**category**) and `yellow` (**value**).

The `currentQuestion` variable should be an object, that you for example would set like this:

```jsx
currentQuestion = {
  category: "hair", // <-- Based on the optgroup
  value: "yellow", // <-- Comes from the selected option
};
```

We need to set this up with variables `category` and `value` instead of hardcoded values since the actual data will be available to detect thanks to `questions.options[questions.selectedIndex]`.

We've helped you to set up the `category` variable. Make sure to properly create `value` variable!

## Step 4 - Time to find out the answer to your questions!

When clicking on the `'Find out'` button, you should invoke the `checkQuestion` function (using an eventListener). //OK FRAM TILL HIT. In the `checkQuestion` function, we need to check if the attributes in the `currentQuestion` matches the attributes in the `secret` or not.

For example, if we're asking: "Does the person have yellow hair" and the person stored in the secret has yellow hair, we want to **keep** all with yellow hair. If not, we want to **remove** all with yellow hair.

When we've figured this out, we should call `filterCharacters` function with proper argument `keep` - it will either be equal `true`, or `false`.

For example, if we're asking: "Does the person have yellow hair" and the person stored in the secret has yellow hair, we want to call `filterCharacters(true)`.

## Step 5 - Giving the player some feedback and filter the board

So, in the `filterCharacters` function we first want to make sure to give the player some feedback on what's happening. We can do this with a built-in JavaScript method `alert()`. We want the text in the alert to be slightly different depending on if the question is about accessories, other or the color of hair or eyes. So the first step could be to check what category the question is in.

Then we also want to know If the text should say _Yes, the person smokes_ or _No, the person doesn't smoke_, for example. This we will check with the `keep` parameter passed in to the function.

Lastly we want to use the `filter()` method to filter out people from the `charactersInPlay` array. There's an example on how to structure this in the code.

💡 Remember that you also need to re render the game board so that only the people still in play is shown.

## Step 6 - Time to make a guess!

At some point, the player wants to make a guess about who the secret person is.

When you hover over the cards you'll see a `'Guess'` button. That button is already connected to the `guess` function via the `onclick` attribute on the card element. You can see this in the `generateBoard` function.

In the guess function you should use a built-in JavaScript method `confirm()` to make sure that the player really wants to make a guess, as this will end the game in one way or another...

If the player confirms that they want to make a guess, invoke the `checkMyGuess` function.

💡 Remember to pass along the person that are being guessed at as an argument to the checkMyGuess function!

Inside the `checkMyGuess` function you should;

- Check if the `personToCheck` is the same as the `secret` person's name
- Set a message to show in the win or lose section accordingly
- Show the win or lose section
- Hide the game board

## Bonus step - Want to restart?

To really finish this up you might want to make sure that the player can restart the game. The only thing you need to do then is to connect the `'Play again'` button (and maybe also the `'Restart'` button) with the `start` function. To start the game over again. You also need to make sure to not show the win/lose screen when the game starts and you want to make sure to actually set the game board to be shown when the game starts. (Since we just did the opposite in step 6)

## Requirements

- The board with characters should be generated when the website is loaded.
- A randomly selected person should be set as the secret when the game starts.
- You should be able to select questions to ask about the people and filter the board based on those questions.
- You should also give the player feedback with alerts
- You should be able to guess the secret person and get an answer if it's correct or not.

## Stretch goals

So you’ve completed the requirements? Great job! Make sure you've committed and pushed a version of your project before starting on the stretch goals. Remember that the stretch goals are optional.

### Intermediate stretch goals

- Check the bonus step
- Change the array of objects:
  - Add more information about the people, and with this add the possibility to ask questions and filter the board in regards to these addons.
  - Change the characters' info to be about your family, football club, colleagues, or cute dogs.
- Create a counter to keep track of how many guesses a player does.
- Change the styling to be as you want it!

### Advanced stretch goals

- Create a timer that measures how long time each game takes.
- Add sound effects and/or animations when flipping a card or winning the game.
- Create the possibility to add a player name when starting the game.
