import { _getUsers, _getQuestions } from "../_DATA.js";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(function ([
    users,
    questions,
  ]) {
    return {
      users,
      questions,
    };
  });
}

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
