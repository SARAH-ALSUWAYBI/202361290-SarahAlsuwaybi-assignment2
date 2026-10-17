# Technical Documentation

## Overview

This is a one-page portfolio site made with HTML, CSS, and JavaScript. It has three sections: About, Projects, and Contact, and you can jump between them using the nav bar.

## Files

**index.html**
Has all the content. The nav bar links to each section using `#about`, `#projects`, `#contact`. Each project uses the same card layout (image, title, description) so it's easy to copy and add more later.

**css/styles.css**
Handles the look of the site. I used a dark theme with a purple accent color. Colors and fonts are stored as variables at the top of the file, so changing the theme later is easy. The layout uses Flexbox and Grid, and adjusts for mobile, tablet, and desktop using media queries.

**js/script.js**
Adds one feature: smooth scrolling. When you click a nav link, it scrolls smoothly to that section instead of jumping instantly.

## Why I Built It This Way

- One page instead of multiple pages, since the site is small and simple
- CSS variables so I can change colors/fonts in one place instead of everywhere
- No frameworks, to keep it simple and focus on real HTML/CSS/JS skills
- Comments added in the code to explain what each part does

## Possible Improvements Later

- Make the contact form actually show a message when submitted
- Add a light/dark mode toggle
- Add more projects as I build them