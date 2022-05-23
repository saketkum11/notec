import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { noteReducer } from "../../Pages";
import { ACTION_TYPE } from "../../Reducer/service";
import { useAuth } from "../Auth-context/Auth-context";

const NoteContext = createContext();
const useNote = () => useContext(NoteContext);

const NoteProvider = ({ children }) => {
  const { token, isAuth } = useAuth();

  const initalState = {
    notes: [],
    archive: [],
    trash: [],
  };
  const [noteState, noteDispatch] = useReducer(noteReducer, initalState);
  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get("/api/notes", {
          headers: {
            authorization: token,
          },
        });

        noteDispatch({
          type: ACTION_TYPE.GET_NOTES,
          payload: response.data.notes,
        });
      } catch (error) {
        console.error(error);
      }
    };
    getNotes();
  }, []);
  const createNotes = async (note) => {
    try {
      const response = await axios.post(
        "/api/notes",
        { note },
        {
          headers: {
            authorization: token,
          },
        }
      );
      noteDispatch({
        type: ACTION_TYPE.CREATED_NOTES,
        payload: response.data.notes,
      });
      console.log("from createnotes notes-context", response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("from notes context state", noteState);
  return (
    <NoteContext.Provider value={{ createNotes, noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
export { useNote, NoteProvider };
