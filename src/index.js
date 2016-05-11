import app from './components/app';
import store from './store';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(app(store.getState()), 0, 0);
}

store.subscribe(render);

function tick() {
  requestAnimationFrame(tick);
  store.dispatch({
    type: 'TICK',
    time: Date.now(),
  });
}

window.addEventListener('resize', () => {
  store.dispatch({
    type: 'VIEWPORT_SIZE',
    width: window.innerWidth,
    height: window.innerHeight,
  });
});

window.addEventListener('load', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  tick();
});
