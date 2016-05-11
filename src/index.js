import app from './components/app';
import store from './store';

function render() {
  const state = store.getState();
  const canvas = app(state);

  if (!canvas.parentNode) {
    document.body.appendChild(canvas);
  }
}

store.subscribe(render);

function update() {
  requestAnimationFrame(update);
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

window.addEventListener('load', update);
