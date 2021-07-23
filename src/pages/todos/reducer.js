import { TODO_ADD, TODO_REMOVE, TODO_TOGGLE } from './actionTypes';
import cuid from "cuid";

const initState = [
  {
    id: cuid(),
    text: 'first',
    complete: true,
  },
  {
    id: cuid(),
    text: 'second',
    complete: false,
  },
  {
    id: cuid(),
    text: 'third',
    complete: true,
  },
]

export default (state= initState, action) => {
  switch (action.type){
    case TODO_ADD:
      return [...state, ...action.payload]
    case TODO_TOGGLE:
      return state.map(e => {
        if(e.id === action.id){
          return {...e, complete: !e.complete};
        }else{
          return e;
        }
      })
    case TODO_REMOVE:
      return state.filter(e => { return e.id !== action.id })
    default:
      return state;
  }
}