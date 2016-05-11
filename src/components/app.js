import circle from './circle';
import cache from '../cache';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

export default function game({ viewport, timer }) {
  const { width, height } = viewport;
  const { time } = timer;

  canvas.width = width;
  canvas.height = height;

  const radius = Math.round(width / 10);

  context.save();
  context.translate(width / 2, height / 2);
  context.translate(-radius, -radius);
  context.save();
  context.translate(Math.sin(time / 1000) * 100, 0);
  context.drawImage(cache(circle, { radius }), 0, 0);
  context.restore();
  context.translate(Math.cos(time / 1000) * 100, 0);
  context.drawImage(cache(circle, { radius }), 0, 0);
  context.restore();

  return canvas;
}
