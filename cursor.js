export function initCursor() {
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  let lastSpawn = 0;

  document.addEventListener('mousemove', (e) => {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    const now = performance.now();
    if (now - lastSpawn > 35) {
      spawnFlake(e.clientX, e.clientY);
      lastSpawn = now;
    }
  });
}

function spawnFlake(x, y) {
  const el = document.createElement('div');
  el.className = 'cursor-flake';
  el.textContent = '❄︎';

  const drift = (Math.random() - 0.5) * 48;
  const duration = 700 + Math.random() * 500;
  const size = 9 + Math.random() * 7;

  el.style.cssText = `
    left: ${x}px;
    top: ${y}px;
    font-size: ${size}px;
    --drift: ${drift}px;
    animation: flake-fall ${duration}ms ease-out forwards;
  `;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration);
}
