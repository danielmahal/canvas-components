import circle from './circle';
import square from './square';
import cache from '../cache';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

export default function app({ viewport, timer }) {
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

  context.save();
  context.translate(50, 50);
  context.rotate(Math.sin(time / 1000));
  context.drawImage(cache(square, { size: 50 }), -25, -25);
  context.restore();

  return canvas;
}
