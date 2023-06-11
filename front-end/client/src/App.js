import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/Homepage";
<<<<<<< HEAD
import home from "./pages/bridge.js";
=======
import Admin from "./components/Admin";
import "./App.css";

>>>>>>> b08164745ebcf73a6ee25997b5aa40f79415b902
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/bridge" element={<bridge />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
