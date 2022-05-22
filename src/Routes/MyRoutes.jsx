import { Route, Routes } from "react-router-dom";
import {
  Archive,
  Home,
  Label,
  Login,
  Profile,
  RequireAuth,
  Signup,
  Trash,
} from "../Pages";
import Mockman from "mockman-js";
const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route
          to="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          to="/trash"
          element={
            <RequireAuth>
              <Trash />
            </RequireAuth>
          }
        />
        <Route
          to="/label"
          element={
            <RequireAuth>
              <Label />
            </RequireAuth>
          }
        />
        <Route
          to="/archive"
          element={
            <RequireAuth>
              <Archive />
            </RequireAuth>
          }
        />
        <Route
          to="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route to="/login" element={<Login />} />
        <Route to="/signup" element={<Signup />} />
        <Route to="/mock" element={<Mockman />} />
      </Routes>
    </>
  );
};
export { MyRoute };
