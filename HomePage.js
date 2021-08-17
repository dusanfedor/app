import React, { useState } from "react";
import "../pages.css";
let d = new Date();
if (d.getHours() > 5 && d.getHours() < 18) document.write("Dobrý den");
else document.write("Dobrý večer");

function HomePage() {
  return <div className="calculator"></div>;
}
export default HomePage;
