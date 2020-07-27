import { _saveQuestionAnswer, _saveQuestion } from "../_DATA.js";
import { saveAnswerToUser, saveQuestionToUser } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER_TO_QUESTION = "SAVE_ANSWER_TO_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

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

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    payload: { question },
  };
}

export function handleSaveQuestion(optionOne, optionTwo, author) {
  const question = {
    optionOneText: optionOne,
    optionTwoText: optionTwo,
    author,
  };
  return (dispatch) => {
    return _saveQuestion(question).then((q) => {
      dispatch(saveQuestion(q));
      dispatch(saveQuestionToUser(q.id, author));
    });
  };
}
