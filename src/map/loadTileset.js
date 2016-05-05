import { times } from 'lodash';

const getImage = require.context('../assets/tilesets', true, /\.png$/);

export default function loadTileset(name, cols, rows) {
  const tiles = times(cols * rows, () => document.createElement('canvas'));
  const listeners = [];
  const texture = new Image();

  texture.src = getImage(`./${name}.png`);

  texture.addEventListener('load', () => {
    tiles.forEach((canvas, index) => {
      const context = canvas.getContext('2d');
      const col = index % cols;
      const row = Math.floor(index / rows);

      canvas.width = texture.width;
      canvas.height = texture.width;

      const src = {
        x: col * texture.width / cols,
        y: row * texture.height / rows,
        w: texture.width / cols,
        h: texture.height / rows,
      };

      const dest = {
        x: 0,
        y: 0,
        w: texture.width,
        h: texture.width,
      };

      context.drawImage(
        texture,
        src.x, src.y, src.w, src.h,
        dest.x, dest.y, dest.w, dest.h,
      );
    });

    listeners.forEach(listener => listener());
  });

  function onLoad(listener) {
    listeners.push(listener);
  }

  return {
    tiles,
    onLoad,
  };
}
