# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

- [Desktop version.](./screenshots/desktop.png)
- [Mobile version.](./screenshots/mobile.png)

### Links

- Solution URL: [Click here.](https://github.com/arudiansaha/intro-section-with-dropdown-navigation)
- Live Site URL: [Click here.](https://arudiansaha.github.io/intro-section-with-dropdown-navigation)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- HTML DOM

### What I learned

More HTML DOM uses, more knowledged I learned.

Here some code of mine:

```html
<div class="sidebar__button-wrapper">
  <button class="button color__gray">Login</button>
  <button class="button button__secondary color__gray">Register</button>
</div
```
```css
.button {
    padding-block: 0.85rem;
    padding-inline: 1.125rem;
    border-radius: 1.125rem;
}
```
```js
function showItemFeaturesSidebar() {
  let element = document.getElementById('sidebarDropdownItemFeatures');
  const dropdownItem = element.style.display;

  if (dropdownItem === 'none') {
    element.style.display = 'flex';
  }

  if (dropdownItem === 'flex') {
    element.style.display = 'none';
  }
}
```

### Continued development

Adding transition to feel more live.

### Useful resources

- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) - It's helped me a lot, when using HTML DOM.

## Author

- Website - [Personal blog.](htts://blog-arudiansaha.vercel.app)
- Frontend Mentor - [@arudiansaha](https://www.frontendmentor.io/profile/arudiansaha)
- Twitter - [@arudiansaha](https://www.twitter.com/arudiansaha)
- LinkedIn - [Rizky Ardiansyah](https://www.linkedin.com/in/ky-ardiansyah/)

## Acknowledgments

### Big Thanks

- [W3Schools](https://www.w3schools.com)