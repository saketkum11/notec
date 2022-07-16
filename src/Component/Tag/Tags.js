import { useState } from "react";
import { useNote } from "../../Context/Note-context/Note-context";
import { ACTION_TYPE } from "../../Reducer/service";

const Tags = ({ note, setNote }) => {
  const [label, setLabel] = useState([]);
  const { noteDispatch, singleNotes } = useNote();
  return (
    <>
      <div className="input-group mb-3">
        <input
          onChange={(event) => {
            setLabel(event.target.value);
          }}
          required
          type="text"
          className="form-control"
          placeholder="Add Tags"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={label}
        />
        <button
          onClick={() => {
            setNote({ ...note, tags: [...note.tags, label] });
          }}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Add Tags
        </button>
      </div>
    </>
  );
};
export { Tags };
