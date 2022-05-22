import { Link } from "react-router-dom";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { Card } from "../../Component/Card/Card";
const Home = () => {
  return (
    <>
      <div className="card w-50 mt-5 m-auto">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <ReactQuill
            theme="snow"
            placeholder="write note"
            className=""
          ></ReactQuill>
          <Link to="/" className="card-link">
            Card link
          </Link>
          <Link to="/" className="card-link">
            Another link
          </Link>
        </div>
      </div>
      <main className="d-flex justify-content-center">
        <Card />
      </main>
      <footer></footer>
    </>
  );
};
export { Home };
