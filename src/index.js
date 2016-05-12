import app from './components/app';
import store from './store';

const render = () => app(store.getState());

const tick = () => {
  requestAnimationFrame(tick);
  store.dispatch({
    type: 'TICK',
    time: Date.now(),
  });
};

window.addEventListener('resize', () => store.dispatch({
  type: 'RESIZE',
  width: window.innerWidth,
  height: window.innerHeight,
}));

window.addEventListener('load', () => {
  document.body.appendChild(render());
  tick();
});

store.subscribe(render);
