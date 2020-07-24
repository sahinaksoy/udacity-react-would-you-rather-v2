import { _getUsers } from "../_DATA.js";
import { receiveUsers } from "./users";

export function getInitialData() {
  return (dispatch) => {
    return _getUsers().then((users) => {
      return dispatch(receiveUsers(users));
    });
  };
}
