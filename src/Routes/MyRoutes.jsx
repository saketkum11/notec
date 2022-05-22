import { Route, Routes } from "react-router-dom";
import { Archive, Home, Label, Login, Profile, Signup, Trash } from "../Pages";

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/trash" element={<Trash />} />
        <Route to="/label" element={<Label />} />
        <Route to="/archive" element={<Archive />} />
        <Route to="/profile" element={<Profile />} />
        <Route to="/login" element={<Login />} />
        <Route to="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
export { MyRoute };
