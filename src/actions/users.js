export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_ANSWER_TO_USER = "SAVE_ANSWER_TO_USER";
export const SAVE_QUESTION_TO_USER = "SAVE_QUESTION_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveAnswerToUser(userId, questionId, answer) {
  return {
    type: SAVE_ANSWER_TO_USER,
    payload: {
      userId,
      questionId,
      answer,
    },
  };
}

export function saveQuestionToUser(id, author) {
  return {
    type: SAVE_QUESTION_TO_USER,
    payload: {
      id,
      author,
    },
  };
}
