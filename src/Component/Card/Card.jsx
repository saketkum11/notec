import { useState } from "react";
import { useNote } from "../../Context/Note-context/Note-context";
import { ColorPalette } from "../Colorpalette/ColorPalette";
import { Modal } from "../Modal/Modal";
import { Preference } from "../Preference/Preference";
import { Tags } from "../Tag/Tags";
import { Toast } from "../Toast/Toast";
import "./Card.css";

const Card = ({ note, setNote }) => {
  const [cardFlag, setCardFlag] = useState({
    color: false,
    preference: false,
    tags: false,
    toastFlag: false,
  });
  const { deleteNote } = useNote();
  return (
    <>
      <div className={`card w-20  text-bg-${note?.color}`}>
        <div className="card-body d-flex flex-column justify-content-end h-100  align-items-start">
          <h4>{note?.title}</h4>
          <span className="card-title badge text-bg-light">
            {note?.priority}
          </span>

          <div className="d-flex ">
            {note?.tags?.map((label) => {
              return (
                <>
                  <span className="badge text-bg-light me-2">{label}</span>
                </>
              );
            })}
          </div>
          <div>{note.createdAt}</div>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: note?.description }}
          ></div>

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
                type="button"
                className="btn btn-secondary me-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@fat"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => {
                  deleteNote(note);
                }}
                className="btn btn-secondary me-2"
                title="Trash"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
            <div className="position-absolute top-100 mt-2 z-index-1 ">
              {cardFlag.color && <ColorPalette note={note} />}
              {cardFlag.tags && <Tags note={note} />}
              {cardFlag.preference && <Preference note={note} />}
              {<Modal note={note} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Card };
