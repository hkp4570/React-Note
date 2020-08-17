import { createStore } from "redux";
import * as userAction from './action/usersAction';
import reducer from './reducer/index';

const store = createStore(reducer);

console.log(store.getState());

store.dispatch(userAction.createAddUserAction({
  id:3,
  name:'dog',
  age:3,
}))
//
console.log(store.getState());
