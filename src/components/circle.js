const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

export default function circle({ radius }) {
  const size = radius * 2 + 2;

  canvas.width = canvas.height = size;
  context.arc(size / 2, size / 2, radius, 0, Math.PI * 2);
  context.fill();

  console.log('Draw circle with radius', radius);

  return canvas;
}
