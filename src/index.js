import viewport from './viewport';
import map from './map';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

function render() {
  requestAnimationFrame(render);
  context.drawImage(map.canvas, 0, 0);
}

viewport.onChange(({ width, height }) => {
  canvas.width = width;
  canvas.height = height;
});

window.addEventListener('load', () => {
  document.body.appendChild(canvas);
  render();
});
