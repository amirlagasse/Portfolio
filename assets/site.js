// Copyright year follows the visitor's clock, so it never goes stale between builds.
document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });

// Click-to-play videos: hide the play button and show native controls once started.
document.querySelectorAll('.video').forEach(box => {
  const v = box.querySelector('video');
  box.querySelector('.play').addEventListener('click', () => {
    box.classList.add('playing');
    v.controls = true;
    v.play();
  });
});

// Image slider (Graphics & Design "Modeling Plan"): arrows on hover, blue dots under it.
document.querySelectorAll('.slider').forEach(s => {
  const imgs = [...s.querySelectorAll('img')];
  const dots = document.createElement('div');
  dots.className = 'dots';
  s.after(dots);
  let i = 0;
  const show = n => {
    i = (n + imgs.length) % imgs.length;
    imgs.forEach((im, k) => im.classList.toggle('on', k === i));
    [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
  };
  imgs.forEach((_, n) => {
    const d = document.createElement('button');
    d.setAttribute('aria-label', `Image ${n + 1} of ${imgs.length}`);
    d.addEventListener('click', () => show(n));
    dots.appendChild(d);
  });
  s.querySelector('.prev').addEventListener('click', () => show(i - 1));
  s.querySelector('.next').addEventListener('click', () => show(i + 1));
  show(0);
});

// Home photo carousel: arrows, dots, arrow keys and swipe.
document.querySelectorAll('.carousel').forEach(c => {
  const slides = [...c.querySelectorAll('figure')];
  const dots = c.querySelector('.dots');
  let i = 0;
  slides.forEach((_, n) => {
    const d = document.createElement('button');
    d.setAttribute('aria-label', `Photo ${n + 1} of ${slides.length}`);
    d.addEventListener('click', () => show(n));
    dots.appendChild(d);
  });
  const show = n => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('on', k === i));
    [...dots.children].forEach((d, k) => d.classList.toggle('on', k === i));
  };
  c.querySelector('.prev').addEventListener('click', () => show(i - 1));
  c.querySelector('.next').addEventListener('click', () => show(i + 1));
  c.tabIndex = 0;
  c.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  let x0 = null;
  c.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  c.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1));
    x0 = null;
  });
  show(0);
});
