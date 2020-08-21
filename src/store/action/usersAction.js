import {getUser} from '../../services/user';

export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATEUSER = Symbol('update-user');
// export const SETUSERS = Symbol('set-users');
export const SETUSERS = 'set-users';
export const SETLOADING = Symbol('set-loading');
export const FETCHUSER = Symbol('fetch-user');

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

export const fetchUser = (user) => ({
  type:FETCHUSER,
  payload:user,
})


//由于使用了redux-promise中间件，因此，允许action是一个promise，
// 在promise中，如果要触发action，则使用resolve
// export const fetchUser = () => {
//   return new Promise(resolve => {
//     getUser().then(res => {
//       resolve(createSetUsersAction(res));
//     });
//   })
// }

// export async function fetchUser() {
//   const result = await getUser();
//   return createSetUsersAction(result);
// }

//单独把payload设置为promise   type如果是Symbol的话logger显示的是promise，而不是数据
// 如果用此方法需要把此类型改为字符串类型
// export function fetchUser() {
//   return {
//     type: SETUSERS,
//     payload: getUser().then(res => ({res}))
//   }
// }
