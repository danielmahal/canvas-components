import viewport from '../viewport';
import grid from './grid';
import mouse from './mouse';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

function render() {
  const { col, row } = mouse.get();
  const { width, height } = grid.get();

  context.fillStyle = 'rgba(0, 255, 0, 0.5)';
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(col * width, row * height, width, height);
}

viewport.onChange(({ width, height }) => {
  canvas.width = width;
  canvas.height = height;
  render();
});

mouse.onChange(render);

export default canvas;
