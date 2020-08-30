import store from './store/index';

import {increase, decrease, asyncIncrease, asyncDecrease, add} from './store/action/counter/index';

window.add = function(n){
  store.dispatch(add(n));
}
window.increase = function(){
  store.dispatch(increase());
}
window.decrease = function () {
  store.dispatch(decrease());
}
window.asyncIncrease = function () {
  store.dispatch(asyncIncrease());
}
window.asyncDecrease = function () {
  store.dispatch(asyncDecrease());
}
