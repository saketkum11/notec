import { useState } from "react";
import { useNote } from "../../Context/Note-context/Note-context";
import { ACTION_TYPE } from "../../Reducer/service";

const Tags = ({ setNoteData, noteData }) => {
  const [label, setLabel] = useState("");
  const { noteState, noteDispatch } = useNote();
  return (
    <>
      <div className="input-group mb-3">
        <input
          onChange={(event) => {
            setLabel(event.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Add Tags"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={label}
        />
        <button
          onClick={() =>
            noteDispatch({
              type: ACTION_TYPE.ADD_TAG,
              payload: label,
            })
          }
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
    </>
  );
};
export { Tags };
