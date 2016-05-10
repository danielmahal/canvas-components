const initialState = {
  time: Date.now(),
};

export default function viewport(state = initialState, action) {
  if (action.type === 'TICK') {
    return {
      time: action.time,
    };
  }

  return state;
}
