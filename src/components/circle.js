import component from '../component';

export default component(({ radius }, context) => {
  context.canvas.width = context.canvas.height = radius * 2;
  context.arc(radius, radius, radius, 0, Math.PI * 2);
  context.fill();
});
