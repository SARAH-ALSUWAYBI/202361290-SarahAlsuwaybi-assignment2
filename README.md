# 202361290-SarahAlsuwaybi-assignment2 — Interactive Portfolio

An interactive, responsive personal portfolio website built with HTML, CSS, and JavaScript.
This is Assignment 2 of SWE 363. It builds on the Assignment 1 portfolio and adds dynamic content, data handling, animations, and clear user feedback.

## Live Demo

🔗 [View the live site](https://sarah-alsuwaybi.github.io/202361290-SarahAlsuwaybi-assignment2/)

## What's New in Assignment 2

| Feature | Description |
|---|---|
| **Live project search** | A search box in the Projects section filters project cards instantly as you type. |
| **Empty state** | If no project matches the search, a "No projects found" message appears. |
| **Dark / light theme** | A ☀️ / 🌙 button in the navigation switches the theme. The choice is saved in `localStorage`, so it stays after refreshing. |
| **Form validation** | The contact form checks for an empty name, an invalid email, and a message shorter than 10 characters, and shows a clear error under each field. |
| **Confirmation message** | A successful submit shows a "Thank you, [name]!" message and clears the form. |
| **Animations** | Sections fade in on scroll, project cards lift on hover, buttons move slightly on hover, and messages slide in. |
| **Accessibility** | Animations turn off for users who prefer reduced motion, and the theme button has a clear label. |

## Features from Assignment 1

- **About Me**: introduction, tagline, and profile photo
- **Projects**: two projects with images and descriptions
- **Contact**: a form with Name, Email, and Message
- **Responsive design**: works on desktop, tablet, and mobile using Flexbox and Grid
- **Smooth scrolling**: navigation links scroll smoothly to each section

## How to Use the Site

1. Use the navigation links to move between **About**, **Projects**, and **Contact**.
2. Click the ☀️ / 🌙 button to switch between dark and light themes.
3. Type in the **Search projects** box to filter projects (try "bus" or "java").
4. Fill in the contact form and click **Send Message**. Errors will show if a field is missing or invalid.

## Setup Instructions (Run Locally)

No installation or build tools are needed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/SARAH-ALSUWAYBI/202361290-SarahAlsuwaybi-assignment2.git
   ```
2. **Open the folder**
   ```bash
   cd 202361290-SarahAlsuwaybi-assignment2
   ```
3. **Run the site** using one of these options:
   - Double-click `index.html` to open it in your browser, **or**
   - In VS Code, install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

Works in current versions of Chrome, Edge, Firefox, and Safari.

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, custom properties, transitions, keyframe animations)
- JavaScript (DOM events, `localStorage`, IntersectionObserver)

## Project Structure

```
202361290-SarahAlsuwaybi-assignment2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## AI Usage

I used Claude to help plan the new features, generate and explain code, and review my work. I tested every feature, edited the code and text to fit my portfolio, and made sure I understand how each part works.
Full details are in the [AI Usage Report](docs/ai-usage-report.md).

## Technical Documentation

For details on how each feature works and the main design decisions, see the [Technical Documentation](docs/technical-documentation.md).

## Author

**Sarah Alsuwaybi**
Student ID: 202361290