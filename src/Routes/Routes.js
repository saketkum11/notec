import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages";

const Routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export { Routes };
