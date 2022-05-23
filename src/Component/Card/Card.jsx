import { useState } from "react";
import { ColorPalette } from "../Colorpalette/ColorPalette";
import { Preference } from "../Preference/Preference";
import { Tags } from "../Tag/Tags";
import "./Card.css";
const Card = ({ note, noteData, setNoteData }) => {
  const [cardFlag, setCardFlag] = useState({
    color: false,
    preference: false,
    tags: false,
  });
  const { tags, color, preference, noteMessage } = note;
  return (
    <>
      <div className={`card w-20  text-bg-${color}`}>
        <div className="card-body d-flex flex-column justify-content-start">
          <h5 className="card-title">{preference}</h5>

          {tags.map((label) => {
            return (
              <>
                <span class="badge text-bg-success">{label}</span>
              </>
            );
          })}

          <p className="card-text">{noteMessage}</p>

          <div className="d-flex justify-content-between mt-4 container position-relative">
            <div
              className="btn-group me-2  "
              role="group"
              aria-label="Second group"
            >
              <button
                onClick={() => {
                  setCardFlag({
                    ...cardFlag,
                    tags: !cardFlag.tags,
                  });
                }}
                type="button"
                className="btn btn-secondary"
                title="Tags"
              >
                <i className="fa-solid fa-tag"></i>
              </button>
              <button
                onClick={() => {
                  console.log("clicked");
                  setCardFlag({
                    ...cardFlag,
                    color: !cardFlag.color,
                  });
                }}
                type="button"
                className="btn btn-secondary "
                title="color-palette"
              >
                <i className="fa-solid fa-palette"></i>
              </button>
              <button
                onClick={() => {
                  setCardFlag({
                    ...cardFlag,
                    preference: !cardFlag.preference,
                  });
                }}
                type="button"
                className="btn btn-secondary"
                title="Preference"
              >
                <i className="fa-solid fa-circle-chevron-down"></i>
              </button>
            </div>
            <div className="d-flex justify-content-end container">
              <button
                onClick={() => setToastFlag((flag) => !flag)}
                type="button"
                className="btn btn-secondary me-2"
                title="Edit"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => setToastFlag((flag) => !flag)}
                type="button"
                className="btn btn-secondary me-2"
                title="Trash"
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
              <button type="submit" className="btn btn-light">
                Create note
              </button>
            </div>
            <div className="position-absolute top-100 mt-2 z-index-1 ">
              {cardFlag.color && (
                <ColorPalette noteData={noteData} setNoteData={setNoteData} />
              )}
              {cardFlag.tags && (
                <Tags noteData={noteData} setNoteData={setNoteData} />
              )}
              {cardFlag.preference && (
                <Preference noteData={noteData} setNoteData={setNoteData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Card };
