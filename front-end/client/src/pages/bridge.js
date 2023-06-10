import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ReqDonor from "./components/ReqDonor";
import Slider from "./components/Slider";


export default function home() {
  
  return (
    < div className="App" style={{ backgroundColor: '#D0F5BE', height:1000 }}>
      <Navbar/>
      <Card ></Card>
      <Slider/>
      <ReqDonor/>
    </div>
  )
}


