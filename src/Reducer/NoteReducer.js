import { ACTION_TYPE } from "./service";

const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.GET_NOTES:
      return {
        ...state,
        notes: payload,
      };

    default:
      break;
  }
};
export { noteReducer };
