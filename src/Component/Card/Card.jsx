import { useState } from "react";
import Moment from "react-moment";
import { useNote } from "../../Context/Note-context/Note-context";
import { ColorPalette } from "../Colorpalette/ColorPalette";
import { Preference } from "../Preference/Preference";
import { Tags } from "../Tag/Tags";
import "./Card.css";

const Card = ({ note }) => {
  const [cardFlag, setCardFlag] = useState({
    color: false,
    preference: false,
    tags: false,
  });
  const { tags, color, preference, noteMessage } = note;
  const { deleteNote, indiviualNotes } = useNote();
  return (
    <>
      <div className={`card w-20  text-bg-${color}`}>
        <div className="card-body d-flex flex-column justify-content-end h-100  align-items-start">
          <span className="card-title">{preference}</span>
          <div className="d-flex ">
            {tags.map((label) => {
              return (
                <>
                  <span class="badge text-bg-light me-2">{label}</span>
                </>
              );
            })}
          </div>
          <Moment fromNow></Moment>
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
                onClick={() => {
                  deleteNote(note);
                }}
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
              {cardFlag.color && <ColorPalette note={note} />}
              {cardFlag.tags && <Tags note={note} />}
              {cardFlag.preference && <Preference note={note} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Card };
