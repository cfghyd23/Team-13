import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

import home from "./pages/bridge.js";
import Admin from "./components/Admin";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";
import EligibilityCriteria from "./components/EligibilityCriteria/EligibilityCriteria"
import Collaboration from "./components/Collaboration";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bridge" element={<bridge />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Eligibility" element={<EligibilityCritera />} />
        <Route path="/Collaboration" element={<Collaboration />} />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
