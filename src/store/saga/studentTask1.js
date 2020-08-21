import {getUser} from '../../services/user'
import {takeEvery, put, select, call} from 'redux-saga/effects';
import {FETCHUSER, createSetLoadingAction, createSetUsersAction} from '../action/usersAction';

function* fetchUsers () {
  yield put(createSetLoadingAction(true));
  const cache = yield select(state => state);
  const resp = yield call(getUser);
  console.log(resp);
  yield put(createSetUsersAction(resp));
  yield put(createSetLoadingAction(false))
}

export default function *() {
  yield takeEvery(FETCHUSER,fetchUsers);
  console.log('监听setUsers');
}
