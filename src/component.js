const cache = {};

export default function component(fn) {
  const id = Date.now(); // UID
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  return state => {
    const hash = `${id}-${JSON.stringify(state)}`;

    if (cache[hash]) {
      return cache[hash];
    }

    fn(state, context);

    const image = new Image();

    image.src = canvas.toDataURL();

    cache[hash] = image;

    return image;
  };
}
