import { createAction } from 'redux-actions';

export const actionTypes = {
  increase: 'INCREASE',
  decrease: 'DECREASE',
  asyncIncrease: 'ASYNCINCREASE',
  asyncDecreaae: 'ASYNCDECREASE',
  add: 'ADD',
}

export const increase = createAction(actionTypes.increase);
export const decrease = createAction(actionTypes.decrease);
export const asyncIncrease = createAction(actionTypes.asyncIncrease);
export const asyncDecrease = createAction(actionTypes.asyncDecreaae);
export const add = createAction(actionTypes.add, number => number);