# Technical Documentation

## Overview

This is a one-page portfolio site made with HTML, CSS, and JavaScript. It has three sections: About, Projects, and Contact, and you can jump between them using the nav bar.

In Assignment 2, I made the site more interactive. I added a project search, a dark/light theme toggle, form validation with messages, and simple animations.

## Files

**index.html**
Has all the content. The nav bar links to each section using `#about`, `#projects`, `#contact`, and has a ☀️/🌙 button to switch the theme. The Projects section has a search box above the cards and a hidden "No projects found" message. The contact form has a small error message under each field.

**css/styles.css**
Handles the look of the site. Colors are stored as variables at the top of the file. For the light theme, I added a second set of colors that is used when the page has `data-theme="light"`. The layout uses Flexbox and Grid, and adjusts for mobile, tablet, and desktop using media queries. This file also has the hover effects and animations.

**js/script.js**
Each feature has its own function, and they all start when the page loads:

- `setupSmoothScroll()` scrolls smoothly to a section when you click a nav link
- `setupThemeToggle()` switches between dark and light and saves the choice
- `setupProjectSearch()` filters the projects while typing
- `setupContactForm()` checks the form and shows messages
- `setupFadeIn()` makes sections fade in when you scroll to them

## How the Features Work

**Theme toggle**
Clicking the button adds `data-theme="light"` (or switches it back to dark) on the page, and the CSS changes the colors. The choice is saved in `localStorage`, so the theme stays the same after refreshing.

**Project search**
Every time the user types, the code checks if each card's text includes the search word. Cards that don't match are hidden. If no cards match, the "No projects found" message shows.

**Form validation**
When the user clicks Send, the code checks that:
- the name is not empty
- the email is not empty and looks like a real email
- the message is at least 10 characters

If something is wrong, the field gets a red border and an error message. If everything is correct, a green thank-you message shows and the form clears. There is no backend, so the message is not actually sent.

**Animations**
- Project cards lift up slightly on hover, and buttons move a little
- Sections fade in when they appear on the screen (using `IntersectionObserver`)
- Error, success, and "No projects found" messages slide in
- Animations turn off for users who choose "reduce motion" in their device settings

## Why I Built It This Way

- One page instead of multiple pages, since the site is small and simple
- CSS variables made adding the light theme easy, since I only had to change the colors in one place
- Each feature is in its own function, so the code is easier to read and fix
- My own error messages instead of the browser's default popups, so they are clearer
- The page still shows everything even if JavaScript is off
- No frameworks, to keep it simple and focus on real HTML/CSS/JS skills
- Comments added in the code to explain what each part does

## Testing

I tested the site in the browser and with DevTools for mobile, tablet, and desktop sizes:
- Switched the theme and refreshed to check it was saved
- Searched for "bus", "java", and a word with no results
- Sent the form empty, with a wrong email, and filled in correctly

## Possible Improvements Later

- ~~Make the contact form show a message when submitted~~ (done in Assignment 2)
- ~~Add a light/dark mode toggle~~ (done in Assignment 2)
- Connect the contact form to a real service so messages are actually sent
- Add more projects as I build them, with filter buttons by type