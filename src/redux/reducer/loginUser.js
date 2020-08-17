import * as loginUserAction from '../action/loginUserAction';
const initialState = null;

export default (state=initialState,{type,payload}) =>{
  switch (type) {
    case loginUserAction.SETLOGINUSERTYPE:
      return payload;
    default:
      return state;
  }
}
