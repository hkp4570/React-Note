import {getUser} from '../../services/user';

export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATEUSER = Symbol('update-user');
export const SETUSERS = Symbol('set-users');
export const SETLOADING = Symbol('set-loading');

export const createAddUserAction = (user) => {
  return {
    type:ADDUSER,
    payload:user,
  }
}

export const createDeleteUserAction = (id) => {
  return {
    type:DELETEUSER,
    payload:id,
  }
}

export const createUpdateUserAction = (id,newUser) => {
  return {
    type:UPDATEUSER,
    payload:{
      ...newUser,
      id,
    },
  }
}

export const createSetLoadingAction = (loading) => ({
  type:SETLOADING,
  payload:loading,
})

export const createSetUsersAction = (user) => ({
  type:SETUSERS,
  payload:user,
})

export function fetchUser () {
  //由于thunk的存在，允许action是一个带有副作用的函数
  return async function(dispatch,getState) {
    dispatch(createSetLoadingAction(true));
    const result = await getUser();
    const action = createSetUsersAction(result);
    dispatch(action);
    dispatch(createSetLoadingAction(false));
  }
}
