import {takeEvery,put,delay} from 'redux-saga/effects';
import {actionsType,createIncreaseAction,createDecreaseAction} from '../action/count'


function* asyncIncrease() {
  yield delay(2000);
  yield put(createIncreaseAction());
  console.log("触发了asyncIncrease")
}

function* asyncDecrease() {
  yield delay(2000);
  yield put(createDecreaseAction());
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
