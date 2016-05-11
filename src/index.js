import app from './components/app';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

function render(time = 0) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.drawImage(app({
    width: window.innerWidth,
    height: window.innerHeight,
    time,
  }), 0, 0);

  requestAnimationFrame(render);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.addEventListener('load', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  render();
});
