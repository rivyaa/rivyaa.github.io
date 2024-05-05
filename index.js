// JavaScript for generating stars
function generateStars() {
    const numStars = 100; // Number of stars to generate
    const starsContainer = document.querySelector('.stars');
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
      star.style.top = Math.random() * 100 + 'vh'; // Random vertical position
      star.style.animationDelay = Math.random() * 10 + 's'; // Random animation delay for twinkling effect
      starsContainer.appendChild(star);
    }
  }
  
  generateStars(); // Call the function to generate stars when the page loads
  