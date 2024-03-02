import { Routes, Route } from "react-router-dom";
import UserDetails from "../components/UserDetails/UserDetails";
import SocialApp from "../components/SocialApp";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SocialApp />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default CustomRoutes;
