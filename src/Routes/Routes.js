import { Route, Routes } from "react-router-dom";
import {
  Archive,
  Home,
  Label,
  Login,
  NotFound,
  Profile,
  Signup,
  Trash,
} from "../Pages";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/label" element={<Label />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
export { MyRoutes };
