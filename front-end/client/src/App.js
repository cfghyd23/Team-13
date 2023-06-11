import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import home from "./pages/bridge.js";
import Admin from "./components/Admin.js";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Form from "./components/Form.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bridge" element={<bridge />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/request" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
