import ground from './ground';
import grid from './grid';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

function render() {
  context.drawImage(ground.canvas, 0, 0);
}

grid.onChange(({cols, rows, width, height}) => {
  canvas.width = cols * width;
  canvas.height = rows * height;
  render();
});

export default {
  canvas,
};
