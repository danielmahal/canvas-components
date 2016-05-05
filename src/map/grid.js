import Observable from 'observable-state';

import viewport from '../viewport';

const grid = new Observable({
  cols: 0,
  rows: 0,
  width: 32,
  height: 20,
});

viewport.onChange((dimensions) => {
  const { cols, rows, width, height } = grid.get();

  const next = {
    cols: Math.ceil(dimensions.width / width),
    rows: Math.ceil(dimensions.height / height),
  };

  if (cols !== next.cols || rows !== next.rows) {
    grid.set({
      ...grid.get(),
      ...next,
    });
  }
});

export default grid;
