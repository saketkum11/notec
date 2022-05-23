import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { Card } from "../../Component/Card/Card";
import { useState } from "react";
import { useNote } from "../../Context/Note-context/Note-context";
import { ColorPalette } from "../../Component/Colorpalette/ColorPalette";
import { Preference } from "../../Component/Preference/Preference";
import { Tags } from "../../Component/Tag/Tags";
import { ACTION_TYPE } from "../../Reducer/service";

const Home = () => {
  const { noteState, noteDispatch, createNotes } = useNote();
  const { notes } = noteState;
  const { individualNote } = noteState;

  const [flag, setFlag] = useState({
    colorFlag: false,
    preference: false,
    tags: false,
  });

  return (
    <>
      <div className="card w-50 mt-5 m-auto">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createNotes(individualNote);
          }}
          className="card-body"
        >
          <h5 className="card-title">Create Notes</h5>

          <ReactQuill
            onChange={(event) => {
              noteDispatch({ type: ACTION_TYPE.NOTE_MESSAGE, payload: event });
            }}
            theme="snow"
            placeholder="write note"
          ></ReactQuill>
          <div className="d-flex justify-content-between mt-4 container position-relative">
            <div
              className="btn-group me-2  "
              role="group"
              aria-label="Second group"
            >
              <button
                onClick={() => {
                  setFlag({
                    ...flag,
                    tags: !flag.tags,
                  });
                }}
                type="button"
                className="btn btn-secondary"
              >
                <i className="fa-solid fa-tag"></i>
              </button>
              <button
                onClick={() => {
                  console.log("clicked");
                  setFlag({
                    ...flag,
                    colorFlag: !flag.colorFlag,
                  });
                }}
                type="button"
                className="btn btn-secondary "
              >
                <i className="fa-solid fa-palette"></i>
              </button>
              <button
                onClick={() => {
                  setFlag({
                    ...flag,
                    preference: !flag.preference,
                  });
                }}
                type="button"
                className="btn btn-secondary"
              >
                <i className="fa-solid fa-circle-chevron-down"></i>
              </button>
            </div>
            <div className="d-flex justify-content-end container">
              <button
                onClick={() =>
                  noteDispatch({
                    type: ACTION_TYPE.CLEAR,
                  })
                }
                type="button"
                className="btn btn-secondary me-2"
              >
                Clear
              </button>
              <button type="submit" className="btn btn-primary">
                Create note
              </button>
            </div>
            <div className="position-absolute top-100 mt-2 z-index-1 ">
              {flag.colorFlag && <ColorPalette />}
              {flag.tags && <Tags />}
              {flag.preference && <Preference />}
            </div>
          </div>
        </form>
      </div>
      <main className=" container mt-5">
        <section className="d-flex  mt-5 flex-wrap group justify-content-center gap-3">
          {notes.map((note) => {
            return (
              <>
                <Card key={note._id} note={note} />
              </>
            );
          })}
        </section>
      </main>

      <footer></footer>
    </>
  );
};
export { Home };
