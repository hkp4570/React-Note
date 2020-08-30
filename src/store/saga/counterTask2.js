import {take,fork,delay,put,cancelled,cancel} from 'redux-saga/effects';
import {actionsType, createIncreaseAction} from "../action/count";

function * autoTak() {
    while (true){
        yield take(actionsType.autoIncrease);
        const task = yield fork(function *() {
            try{
                while(true){
                    yield delay(2000);
                    yield put(createIncreaseAction())
                }
            }
            finally {
                if(yield cancelled()){
                    console.log('任务被取消了');
                }
            }
        })
        yield take(actionsType.stopAutoIncrease);
        yield cancel(task);
    }
}

export default function *() {
    yield fork(autoTak);
    console.log('开始监听异步任务');
}
