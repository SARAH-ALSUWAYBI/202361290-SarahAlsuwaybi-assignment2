// Smooth Scrolling for Navigation Links

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  setupThemeToggle();
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