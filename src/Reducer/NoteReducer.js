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
    case ACTION_TYPE.REMOVE_NOTE:
      return {
        ...state,
        notes: payload,
      };
    case ACTION_TYPE.NOTE_MESSAGE:
      return {
        ...state,
        individualNote: { ...state.individualNote, noteMessage: payload },
      };
    case ACTION_TYPE.ADD_TAG:
      return {
        ...state,
        individualNote: {
          ...state.individualNote,
          tags: [...state.individualNote.tags, payload],
        },
      };
    case ACTION_TYPE.ADD_PREFRENCE:
      return {
        ...state,
        individualNote: {
          ...state.individualNote,
          preference: payload,
        },
      };
    case ACTION_TYPE.ADD_COLOR:
      return {
        ...state,
        individualNote: {
          ...state.individualNote,
          color: payload,
        },
      };
    default:
      return state;
  }
};
export { noteReducer };
