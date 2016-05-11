const store = {};

export default function cache(fn, state) {
  const key = [fn.name || fn.toString(), JSON.stringify(state)].join('-');

  if (store[key]) {
    return store[key];
  }

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const result = fn(state);

  canvas.width = result.width;
  canvas.height = result.height;

  context.drawImage(result, 0, 0);

  store[key] = canvas;

  console.log(key, 'cached!');

  return store[key];
}
