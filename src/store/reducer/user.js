import * as usersAction from '../action/usersAction';

const initialState = [
  {
    id:1,
    name:'hkp',
    age:18
  },
  {
    id:2,
    name:'sjr',
    age:19,
  }
]

export default (state=initialState,{type,payload}) => {
  switch (type) {
    case usersAction.ADDUSER:
      return [...state,payload];
    default:
      return state;
  }
}
