import { createStore, combineReducers } from 'redux';
import { reducer as todoReducer } from './pages/todos';
import { reducer as filterReducer } from './pages/filter';

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

export default createStore(reducer);