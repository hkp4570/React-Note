import {fork, take, cancel,delay, put} from 'redux-saga/effects';
import {actionsType,createIncreaseAction} from "../action/count";

function* autoIncrease() {
    let task;
    while (true) {
        yield take(actionsType.autoIncrease)
        if(task){
            yield cancel(task);
        }
        task = yield fork(function* () {
            while (true) {
                yield delay(2000);
                yield put(createIncreaseAction());
            }
        })
    }
}

export default function *() {
    yield fork(autoIncrease);
    console.log('开始监听autoIncrease');
}
