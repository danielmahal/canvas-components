import circle from './components/circle';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

function render(time = 0) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(circle({ radius: 20 }), 10, 10);
  context.drawImage(circle({ radius: 20 }), Math.sin(time / 1000) * 100, 30);
  requestAnimationFrame(render);
}

window.addEventListener('load', () => {
  document.body.appendChild(canvas);
  render();
});
