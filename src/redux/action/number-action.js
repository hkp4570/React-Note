// 使用函数创建action
import * as actionTypes from './action-type';

export function getIncreaseAction() {
    return {
        type: actionTypes.INCREASE
    }
}
export function getDecreaseAction() {
    return {
        type: actionTypes.DECREASE
    }
}
export function getSetAction() {
    return {
        type: actionTypes.SET
    }
}
