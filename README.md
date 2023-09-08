# Project Name

The task was to create a "Guess Who"-game using functions, array methods and objects. I later changed the design and characters of the game to function as a "Guess which Harry Potter-character"-game.

## The problem

I didn't really know how to solve the checkQuestion together with the filterQuestions function. I at first compared filterQuestion true or false inside nested if/else statements, which worked fine - but made the code longer than necessary. We where discussing the code in our team, which is where the thought of using the keep variable arose. By declaring keep within checkQuestion, that variable could instead be used to make the comparison. If the secret and value match that value is going to be assigned to "keep", so when the choice is "true" that alert will run from filterCharacters. I saved the function I made first inside the code as well. 

I wanted to add the new characters via an API, when I decided to try doing the stretch goals. I felt it would take more time to create my own new characters, than using an API and learning how to do that. I watched a video on FrontEnd Masters about it (Javascript First Steps with Anjana Vakil). But then, in the end, I still ended up putting the characters straight into the characters object to save time.

When changing the characters to others, and also their attributes, this led to many new problems! For once, this time I didn't have to use the (includes) because of arrays, but instead had to solve how to show an attribute that is a boolean. Lot's of Googling, but also a lot of help from ChatGPT finally made is clearer for me. 

## View it live

https://guess-the-hp-character.netlify.app/
