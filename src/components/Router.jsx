import { Route, Routes } from "react-router-dom";
import Public from "../pages/Public";
import Admin from "../pages/Admin";

const Router = () => {
  return (
    <Routes>
      <Route path="/public" element={<Public />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default Router;
