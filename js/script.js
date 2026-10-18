// Smooth Scrolling for Navigation Links
// Mark that JavaScript is running (used by CSS for the fade-in effect)
document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  setupThemeToggle();
  setupProjectSearch();
  setupContactForm();
  setupFadeIn();
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href'); // e.g. "#about"
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        event.preventDefault();
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
            
        });
      }
    });
  });
});

/* =========================================================
   Dark / light theme toggle saved in localStorage
   ========================================================= */
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');

  // Load the saved theme (default is dark)
  let savedTheme = 'dark';
  try {
    savedTheme = localStorage.getItem('theme') || 'dark';
  } catch (error) {
    console.warn('Could not read saved theme:', error);
  }
  applyTheme(savedTheme);

  // Switch theme on click and save it
  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);

    try {
      localStorage.setItem('theme', next);
    } catch (error) {
      console.warn('Could not save theme:', error);
    }
  });

  // Updates the page colors and the button icon
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isLight = theme === 'light';
    toggleBtn.textContent = isLight ? '🌙' : '☀️';
    toggleBtn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  }
}

/* =========================================================
   Live project search (dynamic content + empty state)
   ========================================================= */
function setupProjectSearch() {
  const searchInput = document.getElementById('project-search');
  const cards = document.querySelectorAll('.project-card');
  const noResults = document.getElementById('no-results');

  // Runs every time the user types
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      // Check if the card's text contains what the user typed
      const matches = card.textContent.toLowerCase().includes(query);
      card.hidden = !matches;
      if (matches) visibleCount++;
    });

    // Show "No projects found" only when nothing matches
    noResults.hidden = visibleCount > 0;
  });
}

/* =========================================================
   Contact form validation + confirmation message
   ========================================================= */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  const fields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    message: document.getElementById('message')
  };

  // Simple email pattern: something@something.something
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // no backend, so stay on the page

    const name = fields.name.value.trim();
    const email = fields.email.value.trim();
    const message = fields.message.value.trim();

    let isValid = true;

    // Name: must not be empty
    if (name === '') {
      showError('name', 'Please enter your name.');
      isValid = false;
    } else {
      clearError('name');
    }

    // Email: must not be empty and must look like an email
    if (email === '') {
      showError('email', 'Please enter your email.');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      showError('email', 'Please enter a valid email, like name@example.com.');
      isValid = false;
    } else {
      clearError('email');
    }

    // Message: at least 10 characters
    if (message.length < 10) {
      showError('message', 'Your message should be at least 10 characters.');
      isValid = false;
    } else {
      clearError('message');
    }

    if (!isValid) {
      showStatus('Please fix the highlighted fields and try again.', 'fail');
      return;
    }

    // All good: confirm and reset the form
    showStatus(`Thank you, ${name}! Your message has been sent.`, 'success');
    form.reset();
  });

  // Remove a field's error as soon as the user starts fixing it
  Object.keys(fields).forEach((key) => {
    fields[key].addEventListener('input', () => clearError(key));
  });

  function showError(key, text) {
    fields[key].classList.add('invalid');
    document.getElementById(`${key}-error`).textContent = text;
  }

  function clearError(key) {
    fields[key].classList.remove('invalid');
    document.getElementById(`${key}-error`).textContent = '';
  }

   function showStatus(text, type) {
    status.className = '';    // reset so the animation can replay
    void status.offsetWidth;  // forces the browser to restart the animation
    status.textContent = text;
    status.className = type;
  }
}

/* =========================================================
   Fade-in sections when they scroll into view
   ========================================================= */
function setupFadeIn() {
  const sections = document.querySelectorAll('.fade-in');

  // Older browsers without IntersectionObserver: just show everything
  if (!('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('visible'));
    return;
  }

  // Watches sections and adds "visible" when they appear on screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.15 });

  sections.forEach((section) => observer.observe(section));
}