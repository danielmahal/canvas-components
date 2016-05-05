import viewport from '../viewport';
import ground from './ground';
import walls from './walls';
import editor from './editor';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

function render() {
  context.drawImage(ground, 0, 0);
  context.drawImage(walls.canvas, 0, 0);
  context.drawImage(editor, 0, 0);
}

viewport.onChange(({width, height}) => {
  canvas.width = width;
  canvas.height = height;
});

export default {
  canvas,
  render,
};
