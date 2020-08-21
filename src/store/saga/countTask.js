import {take, takeEvery} from 'redux-saga/effects';
import {actionsType} from '../action/count'

/**
 * 监听某个action
 * @returns {Generator<*, void, *>}
 */
// export default function *() {
//   while (true) {
//     const action = yield take(actionsType['asyncIncrease']);
//     console.log('执行了异步increase',action);
//   }
// }


function* asyncIncrease() {
  console.log("触发了asyncIncrease")
}

function* asyncDecrease() {
  console.log("触发了asyncDecrease")
}

/**
 * 不断监听某个action
 * @returns {Generator<*, void, *>}
 */
export default function* () {
  yield takeEvery(actionsType.asyncIncrease, asyncIncrease)
  yield takeEvery(actionsType.asyncDecrease, asyncDecrease)
  console.log("正在监听asyncIncrease、asyncDecrease")
}
