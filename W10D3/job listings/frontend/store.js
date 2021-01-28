import { createStore } from 'redux';
import reducer from './reducer.js'
import { selectLocation } from './actions.js';

const store = createStore(reducer);

export default store;