import Observable from 'observable-state';
import grid from './grid';

const mouse = new Observable({
  col: 0,
  row: 0,
});

document.addEventListener('mousemove', event => {
  const { col, row } = mouse.get();
  const { width, height } = grid.get();

  const next = {
    col: Math.floor(event.clientX / width),
    row: Math.floor(event.clientY / height),
  };

  if (next.col !== col || next.row !== row) {
    mouse.set(next);
  }
});

export default mouse;
