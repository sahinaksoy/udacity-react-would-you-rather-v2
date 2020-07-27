import {
  RECEIVE_QUESTIONS,
  SAVE_ANSWER_TO_QUESTION,
  SAVE_QUESTION,
} from "../actions/questions";

const initialState = {};
export default function questions(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_ANSWER_TO_QUESTION: {
      const { userId, questionId, answer } = action.payload;
      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [answer]: {
            ...state[questionId][answer],
            votes: state[questionId][answer].votes.concat(userId),
          },
        },
      };
    }
    case SAVE_QUESTION:
      const { question } = action.payload;
      return {
        ...state,
        [question.id]: question,
      };
    default:
      return state;
  }
}
