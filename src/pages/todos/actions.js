import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE } from './actionTypes';
import cuid from "cuid";

export const addTodo = (text) => {
  const item = [{id: cuid(), text, complete: false}];
  return {
    type: TODO_ADD,
    payload: item,
  }
}
export const toggleTodo = id => {
  return {
    type: TODO_TOGGLE,
    id,
  }
}
export const removeTodo = id => {
  return {
    type: TODO_REMOVE,
    id,
  }
}