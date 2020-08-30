import store from './store/index';

import {createIncreaseAction, createDecreaseAction, createAsyncIncreaseAction, createAsyncDecreaseAction, autoIncrease, stopAutoIncrease} from './store/action/count'
import {fetchUser} from './store/action/usersAction'

window.autoIncrease = function(){
  store.dispatch(autoIncrease());
}
window.stopAutoIncrease = function(){
  store.dispatch(stopAutoIncrease());
}

window.fetchUser = function () {
  store.dispatch(fetchUser());
}

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
