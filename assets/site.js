// Click-to-play videos: hide the play button and show native controls once started.
document.querySelectorAll('.video').forEach(box => {
  const v = box.querySelector('video');
  box.querySelector('.play').addEventListener('click', () => {
    box.classList.add('playing');
    v.controls = true;
    v.play();
  });
});

// Image carousel (Graphics & Design "Modeling Plan").
document.querySelectorAll('.slider').forEach(s => {
  const imgs = [...s.querySelectorAll('img')];
  let i = 0;
  const show = n => {
    imgs[i].classList.remove('on');
    i = (n + imgs.length) % imgs.length;
    imgs[i].classList.add('on');
  };
  s.querySelector('.prev').addEventListener('click', () => show(i - 1));
  s.querySelector('.next').addEventListener('click', () => show(i + 1));
});
