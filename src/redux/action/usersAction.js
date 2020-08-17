export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATEUSER = Symbol('update-user');

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
