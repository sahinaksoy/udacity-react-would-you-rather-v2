import { RECEIVE_USERS, SAVE_ANSWER_TO_USER } from "../actions/users";
const initialState = {};

export default function users(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER_TO_USER: {
      const { userId, questionId, answer } = action.payload;
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: {
            ...state[userId].answers,
            [questionId]: answer,
          },
        },
      };
    }
    default:
      return state;
  }
}
