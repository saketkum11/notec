import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth-context/Auth-context";

const Login = () => {
  const { login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div className="container w-25 p-5 shadow mt-5">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            login(data);
          }}
        >
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              onChange={(event) => {
                setData({ ...data, email: event.target.value });
              }}
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              onChange={(event) => {
                setData({ ...data, password: event.target.value });
              }}
              type="password"
              className="form-control"
              placeholder="eg: Anish@123sd"
            />
          </div>
          <div className=" mt-4 d-flex flex-column justify-content-center">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
            <button
              onClick={() => {
                setData({
                  email: "test123@gmail.com",
                  password: "test123",
                });
              }}
              type="submit"
              className="btn btn-secondary w-100 mt-4"
            >
              Login as guest
            </button>
            <Link
              className="mt-4 link-primary d-flex justify-content-center"
              to="/signup"
            >
              Create Your Account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export { Login };
