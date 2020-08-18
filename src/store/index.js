import { createStore,applyMiddleware } from "redux";
import reducer from './reducer';
import logger from 'redux-logger';
import promise from 'redux-promise';

export default createStore(reducer,applyMiddleware(
  promise,
  logger
  ));
