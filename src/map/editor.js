import viewport from '../viewport';
import grid from './grid';
import mouse from './mouse';
import walls from './walls';

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

function modifyWall(col, row, state) {
  const modified = walls.walls.get();

  if (!modified[col]) {
    modified[col] = [];
  }

  modified[col][row] = state;

  walls.walls.set(modified);
}

document.addEventListener('mousedown', () => {
  let pos = mouse.get();

  const modified = walls.walls.get();
  const state = !(modified[pos.col] && modified[pos.col][pos.row]);

  modifyWall(pos.col, pos.row, state);

  function onMouseMove() {
    const move = mouse.get();

    if (move.col !== pos.col || move.row !== pos.row) {
      modifyWall(move.col, move.row, state);
      pos = move;
    }
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

export default canvas;
