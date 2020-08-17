import { createStore,applyMiddleware } from "redux";
import * as userAction from './action/usersAction';
import reducer from './reducer';
import logger from 'redux-logger';

const store = createStore(reducer,applyMiddleware(logger));


const unListen = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(userAction.createAddUserAction({
  id:3,
  name:'dog',
  age:3,
}))
// 取消监听
unListen();

store.dispatch(userAction.createAddUserAction({
  id:4,
  name:'cat',
  age:2,
}))
