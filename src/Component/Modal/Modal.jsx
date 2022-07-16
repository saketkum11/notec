import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNote } from "../../Context/Note-context/Note-context";
import { ColorPalette } from "../Colorpalette/ColorPalette";
import { Preference } from "../Preference/Preference";
import { Tags } from "../Tag/Tags";

const Modal = ({ note }) => {
  const [updateFlag, setUpdateFlag] = useState({
    tag: false,
    colors: false,
    priority: false,
  });
  const [updateNote, setUpdateNote] = useState({ ...note });
  const { noteState, noteDispatch, updateNotes } = useNote();
  console.log("from modal", updateNote);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <h5 className="modal-title" id="exampleModalLabel">
                  Update note
                </h5>
                <div className="mb-3">
                  <label for="title-name" className="col-form-label">
                    Title
                  </label>
                  <input
                    onChange={(e) => {
                      setUpdateNote({ ...updateNote, title: e.target.value });
                    }}
                    value={updateNote.title}
                    type="text"
                    className="form-control"
                    id="title-name"
                    placeholder="Write Title"
                  />
                </div>

                <div className="mb-3">
                  <ReactQuill
                    onChange={(event) => {
                      setUpdateNote({ ...updateNote, description: event });
                    }}
                    value={updateNote.description}
                    theme="snow"
                    placeholder="write note"
                    className="text-secondary"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div
                className="btn-group me-2  "
                role="group"
                aria-label="Second group"
              >
                <button
                  onClick={() => {
                    setUpdateFlag({
                      ...updateFlag,
                      tag: !updateFlag.tag,
                    });
                  }}
                  className="btn btn-secondary"
                  title="Tags"
                >
                  <i className="fa-solid fa-tag"></i>
                </button>
                {updateFlag.tag && (
                  <Tags note={updateNote} setNote={setUpdateNote} />
                )}
                <button
                  onClick={() => {
                    console.log("clicked");
                    setUpdateFlag({
                      ...updateFlag,
                      colors: !updateFlag.colors,
                    });
                  }}
                  className="btn btn-secondary "
                  title="color-palette"
                >
                  <i className="fa-solid fa-palette"></i>
                </button>
                {updateFlag.colors && (
                  <ColorPalette note={updateNote} setNote={setUpdateNote} />
                )}
                <button
                  onClick={() => {
                    setUpdateFlag({
                      ...updateFlag,
                      priority: !updateFlag.priority,
                    });
                  }}
                  type="button"
                  className="btn btn-secondary"
                  title="Preference"
                >
                  <i className="fa-solid fa-circle-chevron-down"></i>
                </button>
                {updateFlag.priority && (
                  <Preference note={updateNote} setNote={setUpdateNote} />
                )}
              </div>
              <button
                onClick={() => {
                  updateNotes(updateNote);
                }}
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Modal };
