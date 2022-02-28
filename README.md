# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![desktop-version](https://user-images.githubusercontent.com/77099631/156025869-c4966cea-e1ec-45fb-805a-0ac04ea7ad48.PNG)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```javascript
function getAdvice() {

    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObject = adviceData.slip;
        adviceContainer.innerHTML = adviceObject.advice;    
    }).catch(err => {
        adviceContainer.innerHTML = "Error ⛔";
    })
}
```

## Author

- LinkedIn - [Mohamed Dwedar](https://www.linkedin.com/in/mohamed-dwedar)
- Frontend Mentor - [@mohameddwedar689](https://www.frontendmentor.io/profile/mohameddwedar689)
- Twitter - [@Mohamed72812181](https://twitter.com/Mohamed72812181?s=09)
