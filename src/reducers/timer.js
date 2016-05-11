const initialState = {
  time: Date.now(),
};

export default function timer(state = initialState, action) {
  if (action.type === 'TICK') {
    return {
      time: action.time,
    };
  }

  return state;
}
