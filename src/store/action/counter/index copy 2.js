import { createActions } from 'redux-actions';

export const actionTypes = {
  increase: 'INCREASE',
  decrease: 'DECREASE',
  asyncIncrease: 'ASYNC_INCREASE',
  asyncDecreaae: 'ASYNC_DECREASE',
  add: 'ADD',
}

export const { increase, decrease, asyncIncrease, asyncDecrease, add } = createActions({
  INCREASE: null,
  DECREASE: null,
  ASYNC_INCREASE: null,
  ASYNC_DECREASE: null,
  ADD: number => number,
})