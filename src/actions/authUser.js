export const SET_AUTH_USER = "SET_AUTH_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}

export function logOut() {
  return {
    type: LOGOUT_USER,
  };
}
