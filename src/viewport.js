import Observable from 'observable-state';

const state = new Observable();

const updateSize = () => state.set({
  width: window.innerWidth,
  height: window.innerHeight,
});

window.addEventListener('load', updateSize);
window.addEventListener('optimizedResize', updateSize);

export default state;

// Modified requestAnimationFrame throttle from MDN
// https://developer.mozilla.org/en-US/docs/Web/Events/resize
const throttle = (type, name, obj = window) => {
  let running = false;

  const func = () => {
    if (running) { return; }

    running = true;

    requestAnimationFrame(() => {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };

  obj.addEventListener(type, func);
};

throttle('resize', 'optimizedResize');
