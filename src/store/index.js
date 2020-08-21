import { createStore,applyMiddleware } from "redux";
import reducer from './reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMid  = createSagaMiddleware(); // 创建一个saga中间件

const store = createStore(reducer,applyMiddleware(
  sagaMid,
  logger
));

sagaMid.run(rootSaga);

export default store;

