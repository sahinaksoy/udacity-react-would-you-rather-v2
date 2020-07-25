import { SET_AUTH_USER, LOGOUT_USER } from "../actions/authUser";
const initialState = null;
export default function authUser(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.id;
    case LOGOUT_USER: {
      return initialState;
    }
    default:
      return state;
  }
}
