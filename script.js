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
  
      data.myLinks.forEach(({ url, name, icon }) => {
        const li = document.createElement('li');
        li.className = 'link-item';

        const img = document.createElement('img');
        img.src = icon;
        img.alt = `${name} logo`;
        img.style.width = '24px';
        img.style.height = '24px';
        img.className = 'link-icon';

        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.textContent = name;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.className = 'link-content';

        li.appendChild(img);
        li.appendChild(anchor);

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

  document.addEventListener('DOMContentLoaded', function() {
    const helloText = document.getElementById('helloText');
    const languages = [
      { text: "Hola", font: "'Roboto', sans-serif" },
      { text: "Bonjour", font: "'Lobster', cursive" },
      { text: "Ciao", font: "'Dancing Script', cursive" },
      { text: "Hallo", font: "'Playwright', cursive" },
      { text: "こんにちは", font: "'Yu Gothic', sans-serif" },
      { text: "안녕하세요", font: "'Nanum Gothic', sans-serif" },
      { text: "Olá", font: "'Playfair Display', serif" },
      { text: "Привет", font: "'PT Sans', sans-serif" },
      { text: "你好", font: "'Microsoft YaHei', sans-serif" }
    ];

    let index = 0;
    setInterval(() => {
        const greeting = languages[index];
        helloText.innerText = greeting.text;

        //helloText.style.fontFamily = greeting.font;
        index = (index + 1) % languages.length; // Loop through languages
    }, 7000); // Change text every 2 seconds
});