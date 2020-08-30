import {take,fork,cancel,takeEvery,delay,put} from 'redux-saga/effects';
import {actionsType, createIncreaseAction} from "../action/count";

function* stopTask(){
    if(task){
        yield cancel();
    }
}

let task;
function* autoIncrease() {
    while(true){
        yield take(actionsType.autoIncrease);
        yield* stopTask();
        task = yield fork(function *() {
            yield delay(2000);
            yield put(createIncreaseAction());
        })
    }
}

function* stopAutoIncrease() {
    yield* stopTask();
}

export default function *() {
    yield fork(autoIncrease);
    yield takeEvery(actionsType.stopAutoIncrease,stopAutoIncrease);
    console.log('正在监听autoIncrease');
}
