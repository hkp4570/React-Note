export const SETLOGINUSERTYPE = Symbol('set-login-user');

export function createSetLoginUserAction(user) {
  return {
    type: SETLOGINUSERTYPE,
    payload: user
  }
}
