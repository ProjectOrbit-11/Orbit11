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

let downloadCount = localStorage.getItem('downloadCount') || 0;
document.getElementById('download-count').innerText = downloadCount;

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    downloadCount++;
    document.getElementById('download-count').innerText = downloadCount;
    localStorage.setItem('downloadCount', downloadCount);
    pulseCounter();
  });
});

function pulseCounter() {
  const counter = document.getElementById('download-count');
  counter.style.animation = 'pulse 0.5s';
  counter.addEventListener('animationend', () => {
    counter.style.animation = '';
  }, { once: true });
}
