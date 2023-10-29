import { createStore } from 'redux';
import quotesReducer from './quotesReducer';

const store = createStore(quotesReducer);

export default store;
