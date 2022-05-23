import { ACTION_TYPE } from "./service";

const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.GET_NOTES:
      return {
        ...state,
        notes: payload,
      };
    case ACTION_TYPE.CREATED_NOTES:
      return {
        ...state,
        notes: payload,
      };
    default:
      return state;
  }
};
export { noteReducer };
