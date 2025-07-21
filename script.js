document.addEventListener('DOMContentLoaded', () => {
  const background = document.querySelector('.background');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${5 + Math.random() * 5}s`;
    background.appendChild(particle);
  }
});
