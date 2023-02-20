# Guess Who?

## **Overview**

Guess Who? is a two-player board game where players each guess the identity of the other's chosen character. The game was first developed by Israeli game inventors Ora and Theo Coster, also known as Theora Design, and manufactured by Milton Bradley in 1979. Now in a digital version as a homage to the original game.

### **The challenge**

✓ How to use objects in JavaScript

✓ How to use arrays in JavaScript

✓ How to use array methods such as `forEach()` and `filter()`

✓ Knowledge about closures and scope in JavaScript

✓ More about manipulating the DOM using Javascript

✓ How to structure your code in functions

## Screenshot

![Skärmbild 2023-02-19 215936](https://user-images.githubusercontent.com/65211641/219975110-59296dc1-649e-484c-a583-89b425977b66.png)

## My process

As a kid of the 90'ths, this was a great nostalgic experience for me; so lovely to get a project that might be the first board game I played as a kid.

 First, I must admit this task seemed daunting..
So I split the more significant task into smaller pieces: Into the building blocks (aka the functions) and what they are supposed to do.

Splitting the project into these smaller bits was a great way to make sense of it all.

I especially liked the Timer function:

```javascript
let timer = setInterval(() => {
  ++seconds;
  let hour = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds - hour * 3600) / 60);
  let updSecond = seconds - (hour * 3600 + minute * 60);
  document.getElementById("timer").innerHTML =
    hour + ":" + minute + ":" + updSecond;
}, 1000);
```

It has a lot going on, but I got it easy to understand what everything is doing on each line.
Also, to but the whole function inside the setInterval was, to me, an excellent solution.

### Built with

- Semantic HTML5 markup
- Vanilla Javascript
- Flexbox

### Links

- GitHub URL: [Github](https://github.com/dannebrob/project-guess-who)
- Live Site URL: [Fantasy chat bot ](https://guess-who-app.netlify.app/)
