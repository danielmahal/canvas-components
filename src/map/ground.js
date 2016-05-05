import { times } from 'lodash';

import grid from './grid';
import loadTileset from './loadTileset';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const grass = loadTileset('terrain/grass', 4, 4);

function render() {
  const { cols, rows, width, height } = grid.get();
  const tile = grass.tiles[15];

  times(cols, col => {
    times(rows, row => {
      context.drawImage(tile, col * width, row * height, width, height);
    });
  });
}

grass.onLoad(render);

grid.onChange(({cols, rows, width, height}) => {
  canvas.width = cols * width;
  canvas.height = rows * height;
  render();
});

export default canvas;
