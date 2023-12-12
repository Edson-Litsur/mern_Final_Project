import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SingIn from "./pages/SingIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/signin" element={<SingIn />}  />
        <Route path="/signup" element={<SignUp />}  />
        <Route path="/about" element={<About />}  />
        <Route element={<PrivateRoute />}  >
          <Route path="/profile" element={<Profile />}  />
        </Route>
      </Routes>
  </BrowserRouter>


  );
}
