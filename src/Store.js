import { createStore } from 'redux';
import { reducer as todoReducer } from './pages/todos';

export default createStore(todoReducer);