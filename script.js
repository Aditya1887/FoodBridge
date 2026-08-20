/* ==========================================================================
   FoodBridge - Main JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const scrollArrowBtn = document.querySelector('.scroll-arrow-btn');
  const playBtn = document.querySelector('.play-btn');

  // --- 1. Theme Toggle (Light / Dark Mode) ---
  let isDarkMode = false;

  themeToggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);

    if (isDarkMode) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  });

  // --- 2. Smooth Scroll Action ---
  if (scrollArrowBtn) {
    scrollArrowBtn.addEventListener('click', () => {
      window.scrollBy({
        top: window.innerHeight * 0.8,
        behavior: 'smooth'
      });
    });
  }

  // --- 3. Video Play Modal / Handler ---
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      alert('FoodBridge Video: "Turning surplus into smiles"');
    });
  }

  // --- 4. Navigation Link Active State ---
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      navItems.forEach(i => i.classList.remove('active'));
      const activeDot = document.querySelector('.active-dot');
      if (activeDot) activeDot.remove();

      item.classList.add('active');
      const dot = document.createElement('span');
      dot.className = 'active-dot';
      item.appendChild(dot);
    });
  });
});
