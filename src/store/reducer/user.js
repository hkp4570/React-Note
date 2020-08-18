import * as usersAction from '../action/usersAction';

const initialState = {
  loading: false,
  users: [],
};

export default (state=initialState,{type,payload}) => {
  switch (type) {
    case usersAction.ADDUSER:
      return [...state,payload];
    case usersAction.SETUSERS:
      return {
        ...state,
        users: payload
      };
    case usersAction.SETLOADING:
      return {
        ...state,
        loading:payload
      }
    default:
      return state;
  }
}
