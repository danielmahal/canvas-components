import { times } from 'lodash';

const getImage = require.context('../assets/tiles/terrain', false, /\.png$/);

export default class Terrain {
  constructor(name) {
    this.tiles = times(16, () => document.createElement('canvas'));
    this.listeners = [];
    this.loaded = false;

    const texture = new Image();

    texture.src = getImage(`./${name}.png`);

    texture.addEventListener('load', () => {
      const size = {
        width: texture.width / 4,
        height: texture.height / 4,
      };

      this.tiles.forEach((canvas, index) => {
        const context = canvas.getContext('2d');
        const col = index % 4;
        const row = Math.floor(index / 4);

        canvas.width = size.width;
        canvas.height = size.height;

        const src = {
          x: col * size.width,
          y: row * size.height,
          w: size.width,
          h: size.height,
        };

        context.drawImage(
          texture,
          src.x, src.y, src.w, src.h,
          0, 0, size.width, size.height
        );
      });

      this.loaded = true;
      this.listeners.forEach(listener => listener());
    });
  }

  onLoad(listener) {
    this.listeners.push(listener);
  }
}
