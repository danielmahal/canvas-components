import { combineReducers, createStore } from 'redux';

import viewport from './reducers/viewport';
import timer from './reducers/timer';

export default createStore(combineReducers({
  viewport,
  timer,
}));
