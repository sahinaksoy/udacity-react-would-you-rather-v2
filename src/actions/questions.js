import { _saveQuestionAnswer } from "../_DATA.js";
import { saveAnswerToUser } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveAnswerToQuestion(userId, questionId, answer) {
  return {
    type: SAVE_ANSWER_TO_QUESTION,
    payload: {
      userId,
      questionId,
      answer,
    },
  };
}

export function handleSaveQuestionAnswer(userId, questionId, answer) {
  return (dispatch) => {
    dispatch(saveAnswerToUser(userId, questionId, answer));
    dispatch(saveAnswerToQuestion(userId, questionId, answer));
    return _saveQuestionAnswer(userId, questionId, answer);
  };
}
