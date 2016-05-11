const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

export default function square({ size }) {
  canvas.width = canvas.height = size;
  context.fillRect(0, 0, size, size);

  console.log('Draw square with size', size);

  return canvas;
}
