import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/sign-in" element={<SingIn />}  />
      <Route path="/signup" element={<SignUp />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/profile" element={<Profile />}  />
    </Routes>
  </BrowserRouter>


  );
}
