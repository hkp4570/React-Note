import { fork, take, delay, put, race, call } from "redux-saga/effects"
import { actionsType, createIncreaseAction } from "../action/count"

/**
 * 自动增加和停止的流程控制
 * 流程：自动增加 -> 停止 -> 自动增加 -> 停止
 */
function* autoTask() {
    while (true) {
        yield take(actionsType.autoIncrease); //只监听autoIncrease
        yield race({
            autoIncrease: call(function* () {
                while (true) {
                    yield delay(2000);
                    yield put(createIncreaseAction());
                }
            }),
            cancel: take(actionsType.stopAutoIncrease)
        })
    }
}

export default function* () {
    yield fork(autoTask);
    console.log("正在监听autoIncrease")
}
