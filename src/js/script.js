const glow = document.getElementById('glow');

// Seguidor de mouse suave para o brilho de fundo
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Move o círculo de brilho suavemente
  document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

});

// Revelação suave no scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)";
  observer.observe(card);
});

// Detecta toque em mobile para o brilho
document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  glow.style.left = touch.clientX + 'px';
  glow.style.top = touch.clientY + 'px';
});

const cursor = document.querySelector('.custom-cursor');

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });

  const hoverElements = document.querySelectorAll(
    'a, button, .project-card'
  );

  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
    });

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });
}
