document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 🔥 snap initial position so it doesn't start top-left
    if (currentX === 0 && currentY === 0) {
      currentX = mouseX;
      currentY = mouseY;
    }
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;

    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';

    requestAnimationFrame(animate);
  }

  animate();
});
