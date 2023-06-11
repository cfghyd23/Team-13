import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

// import home from "./pages/bridge.js";
import Admin from "./components/Admin.js";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import LandingPage from "./components/LandingPage/LandingPage";
<<<<<<< HEAD
import AboutUs from "./components/AboutUs/AboutUs";
import EligibilityCriteria from "./components/EligibilityCriteria/EligibilityCriteria"
import Collaboration from "./components/Collaboration";
=======
import Customers from "./pages/Customers";
import AboutUs from "./components/AboutUs/AboutUs.js";
import Form from "./components/Form.js";

>>>>>>> 1699c2774afdde64853a923eb078ed160fca451a
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/bridge" element={<bridge />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Eligibility" element={<EligibilityCritera />} />
        <Route path="/Collaboration" element={<Collaboration />} />
=======
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bridge" element={<bridge />} />
        <Route path="/register" element={<Register />} />
>>>>>>> 1699c2774afdde64853a923eb078ed160fca451a

        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/request" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
