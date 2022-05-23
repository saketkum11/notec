import { useState } from "react";

const Tags = ({ setNoteData, noteData }) => {
  const [label, setLabel] = useState("");
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
            setNoteData({
              ...noteData,
              tags: [...noteData.tags, label],
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
