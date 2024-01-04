/// Client Routing

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Error from "./pages/error";

import './css/styles.css';

function Router() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/home/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
 
  );
};

export default Router;