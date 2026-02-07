(() => {
  const container = document.querySelector('.scroll-container');
  if (!container) return;

  const panels = container.querySelectorAll('.scroll-panel');
  if (!panels.length) return;

  let current = 0;
  let isScrolling = false;

  window.addEventListener(
    'wheel',
    (e) => {
      if (isScrolling) return;

      if (e.deltaY > 0 && current < panels.length - 1) {
        current++;
      } else if (e.deltaY < 0 && current > 0) {
        current--;
      } else {
        return;
      }

      e.preventDefault();
      isScrolling = true;

      panels[current].scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        isScrolling = false;
      }, 700);
    },
    { passive: false }
  );

  window.addEventListener('keydown', (e) => {
  if (isScrolling) return;

  if (e.key === 'ArrowDown' && current < panels.length - 1) {
    current++;
  } else if (e.key === 'ArrowUp' && current > 0) {
    current--;
  } else {
    return;
  }

  isScrolling = true;
  panels[current].scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    isScrolling = false;
  }, 700);
  });
})();
