import {getUser} from '../../services/user'
import {takeEvery, put, select, call} from 'redux-saga/effects';
import {FETCHUSER, createSetLoadingAction, createSetUsersAction} from '../action/usersAction';

function* fetchUsers () {
  yield put(createSetLoadingAction(true));
  //当saga发现得到的结果是一个Promise对象，它会自动等待该Promise完成
  //完成之后，会把完成的结果作为值传递到下一次next
  //如果Promise对象被拒绝，saga会使用generator.throw抛出一个错误
  const resp = yield getUser();
  yield put(createSetUsersAction(resp));
  yield put(createSetLoadingAction(false))
}

export default function *() {
  yield takeEvery(FETCHUSER,fetchUsers);
  console.log('监听setUsers');
}
