// Check JS is Connected
console.log('Okie Dokey');

// get JSON data
// create anchor link for each item
document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      
      const myLinks = document.getElementById('myLinks');
      const fragment = document.createDocumentFragment();
  
      data.myLinks.forEach(({ url, name }) => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
        fragment.appendChild(li);
      });
  
      myLinks.appendChild(fragment);
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  });

  document.addEventListener('scroll', () => {
    const buttons = document.querySelectorAll('.btn.codepen');
    const scrollPosition = window.scrollY;
  
    buttons.forEach((button, index) => {
      // Adjust the parallax effect factor as needed (e.g., 0.5 for subtle effect)
      const parallaxFactor = 0.5 + index * 0.1;
      button.style.transform = `translateY(${scrollPosition * parallaxFactor}px)`;
    });
  });