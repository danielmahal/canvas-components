import { times } from 'lodash';

import grid from './grid';
import Terrain from './Terrain';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const grass = new Terrain('grass');

function render() {
  const { cols, rows, width, height } = grid.get();
  const tile = grass.tiles[0];

  times(cols, col => {
    times(rows, row => {
      context.drawImage(tile, col * width, row * height);
    });
  });
}

grass.onLoad(render);

grid.onChange(({cols, rows, width, height}) => {
  canvas.width = cols * width;
  canvas.height = rows * height;
  render();
});

export default {
  canvas,
};
