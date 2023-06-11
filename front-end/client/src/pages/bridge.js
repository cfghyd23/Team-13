import React, { useEffect, useState } from "react";

import Card from "../components/Card.js";
import Navbar from "../components/Navbar.js";
import ReqDonor from "../components/ReqDonor.js";
import Slider from "../components/Slider.js";

export default function home() {
  return (
    <div className="App" style={{ backgroundColor: "#D0F5BE", height: 1000 }}>
      <Navbar />
      <Card></Card>
      <Slider />
      <ReqDonor />
    </div>
  );
}
