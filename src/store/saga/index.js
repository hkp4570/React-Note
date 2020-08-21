import {all} from 'redux-saga/effects';
import {actionsType} from '../action/count';
import countTask from './countTask'
import studentTask from './studentTask'

/**
 * 监听一个任务变化
 * @returns {Generator<*, void, *>}
 */
// export default function *() {
//   while (true) {
//     const action = yield take(actionsType['async-increase']);
//     console.log('触发了异步的increase', action);
//   }
// }

/**
 * 监听多个任务
 * @returns {Generator<*, void, *>}
 */
export default function *() {
  yield all([countTask(), studentTask()]);
  console.log('saga 完成');
}
