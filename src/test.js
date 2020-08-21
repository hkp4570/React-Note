import store from './store/index';

import {createIncreaseAction, createDecreaseAction, createAsyncIncreaseAction, createAsyncDecreaseAction} from './store/action/count'

window.increase = function () {
  store.dispatch(createIncreaseAction());
}
window.decrease = function () {
  store.dispatch(createDecreaseAction());
}
window.asyncIncrease = function () {
  store.dispatch(createAsyncIncreaseAction());
}
window.asyncDecrease = function () {
  store.dispatch(createAsyncDecreaseAction());
}
