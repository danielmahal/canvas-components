import Observable from 'observable-state';
import { reduce } from 'lodash';

import grid from './grid';
import loadTileset from './loadTileset';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const walls = new Observable([]);
const grass = loadTileset('terrain/grass', 4, 4);

function isWallAt(col, row) {
  return walls.get()[col] && walls.get()[col][row] || false;
}

function getTile(col, row) {
  const neighborsStates = {
    1: isWallAt(col, row - 1),
    2: isWallAt(col - 1, row),
    4: isWallAt(col + 1, row),
    8: isWallAt(col, row + 1),
  };

  const index = reduce(neighborsStates, (result, state, bit) => (
    result + state * bit
  ), 0);

  return grass.tiles[index];
}

function renderTile(col, row) {
  const { width, height } = grid.get();
  context.clearRect(col * width, row * height, width, height);

  if (isWallAt(col, row)) {
    const tile = getTile(col, row);

    context.save();
    context.translate(col * width, row * height);
    context.drawImage(tile, 0, 0, width, height);
    context.translate(width / 2, height / 2);

    context.restore();
  }
}

function render() {
  walls.get().forEach((rows, col) => {
    rows.forEach((state, row) => {
      renderTile(col, row);
    });
  });
}

grass.onLoad(render);
walls.onChange(render);

grid.onChange(({cols, rows, width, height}) => {
  canvas.width = cols * width;
  canvas.height = rows * height;
  render();
});

export default {
  canvas,
  walls,
};
