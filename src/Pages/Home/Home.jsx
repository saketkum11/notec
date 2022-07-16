import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { Card } from "../../Component/Card/Card";
import { useEffect, useState } from "react";
import { useNote } from "../../Context/Note-context/Note-context";
import { ColorPalette } from "../../Component/Colorpalette/ColorPalette";
import { Preference } from "../../Component/Preference/Preference";
import { Tags } from "../../Component/Tag/Tags";
import { ACTION_TYPE } from "../../Reducer/service";

const Home = () => {
  const { noteState, noteDispatch, createNotes, getNotes } = useNote();
  const { notes } = noteState;

  const [flag, setFlag] = useState({
    colorFlag: false,
    preference: false,
    tags: false,
  });

  const [note, setNote] = useState({
    title: "",
    description: "",
    color: "",
    tags: [],
    priority: "",
    date: Date(),
  });

  console.log("Note from home", note);
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <div className="card w-50 mt-5 m-auto">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            createNotes(note);
          }}
          className="card-body"
        >
          <h5 className="card-title">Create Notes</h5>
          <div className="mb-3">
            <label for="title-name" className="col-form-label">
              Title
            </label>
            <input
              onChange={(e) => {
                setNote({ ...note, title: e.target.value });
              }}
              required
              type="text"
              className="form-control"
              id="title-name"
              placeholder="Write Title"
            />
          </div>

          <ReactQuill
            onChange={(event) => {
              setNote({ ...note, description: event });
            }}
            required
            value={note.description}
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
              {flag?.tags && <Tags note={note} setNote={setNote} />}
              {flag?.colorFlag && (
                <ColorPalette note={note} setNote={setNote} />
              )}
              {flag?.preference && <Preference note={note} setNote={setNote} />}
            </div>
          </div>
        </form>
      </div>
      <main className=" container mt-5">
        <section className="d-flex  mt-5 flex-wrap group justify-content-center gap-3">
          {notes?.map((note) => {
            return (
              <>
                <Card key={note._id} note={note} setNote={setNote} />
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
