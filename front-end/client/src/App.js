import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


import home from "./pages/bridge.js";
import Admin from "./components/Admin";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";


function App() {
  return (
    <>
      <Routes>
       
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/bridge" element={<bridge />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
