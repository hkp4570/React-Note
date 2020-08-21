import {getUser} from '../../services/user'
import {takeEvery, put, select, call, cps} from 'redux-saga/effects';
import {FETCHUSER, createSetLoadingAction, createSetUsersAction} from '../action/usersAction';

/**
 * 传统回调模式使用cps
 * @param condition
 * @param callback
 */
function mockStudents(condition, callback) {
  console.log("mockStudents", condition);
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
  }, 1000);
}

function* fetchUsers() {
  //设置为正在加载中
  yield put(createSetLoadingAction(true))
  const condition = yield select(state => state);
  //使用call指令，按照当前仓库中的条件
  try {
    const resp = yield cps(mockStudents, condition, function (data) {
      return data;
    })
    yield put(createSetUsersAction(resp))
  }
  catch (err) {
    console.log(err.message);
  }
  finally {
    yield put(createSetLoadingAction(false));
  }
}

export default function *() {
  yield takeEvery(FETCHUSER,fetchUsers);
  console.log('监听setUsers');
}
