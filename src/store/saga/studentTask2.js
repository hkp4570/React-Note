import {getUser} from '../../services/user'
import {takeEvery, put, select, call} from 'redux-saga/effects';
import {FETCHUSER, createSetLoadingAction, createSetUsersAction} from '../action/usersAction';

/**
 * 回调函数的方式处理异步
 * @param params
 * @param callback
 */
function mockUser (params,callback) {
  console.log(params)
  setTimeout(() => {
    if (Math.random() > 0.5) {
      //nodejs风格
      callback(null, {
        cont: 78,
        datas: [
          { id: 1, name: "abc" },
          { id: 2, name: "bcd" }
        ]
      })
    }
    else {
      callback(new Error("出错了！！！1"), null);
    }
  }, 3000);
}

function* fetchUsers () {
  yield put(createSetLoadingAction(true));
  const cache = yield select(state => state);
  const resp = yield call(mockUser, cache,function (data) {
    console.log(data)
  });
  console.log(resp);
  // yield put(createSetUsersAction(resp));
  // yield put(createSetLoadingAction(false))
}

export default function *() {
  yield takeEvery(FETCHUSER,fetchUsers);
  console.log('监听setUsers');
}
