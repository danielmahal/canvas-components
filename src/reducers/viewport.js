const initialState = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default function viewport(state = initialState, action) {
  if (action.type === 'SET_VIEWPORT_SIZE') {
    return {
      ...state,
      width: action.width,
      height: action.height,
    };
  }

  return state;
}
