import React, { useEffect, useState } from "react";
import { Navbar, Card, Slider, ReqDonor } from components


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


