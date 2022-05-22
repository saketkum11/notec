import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth-context/Auth-context";

const Header = () => {
  const { logout, isAuth } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NoteMarks
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                to="/archive"
                aria-current="page"
              >
                Archieve
              </Link>
              <Link className="nav-link" to="/trash">
                Trash
              </Link>

              <Link className="nav-link " to="/label">
                Label
              </Link>
              {isAuth ? (
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="rounded "
                  type="button"
                >
                  <span>logout</span>
                </button>
              ) : (
                <Link className="nav-link " to="/login">
                  Login
                </Link>
              )}
              <button className="rounded " type="button">
                <span>Create Note</span>
              </button>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export { Header };
