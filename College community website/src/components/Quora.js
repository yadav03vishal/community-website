import React from "react";
import Home from "./Home";
import Capture from "./Capture";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enigmatics from "./Enigmatics";
import Fitme from "./Fitme";
import ImpactClub from "./ImpactClub";
import GDSC from "./GDSC";
import Environment from "./Environment";
import Ecell from "./Ecell";
import Speak from "./Speak";
import Lostandfound from "./Lostandfound";
import Connections from "./Connections";
import News from "./News";
 import Studen from "./Studen";
 import Questionpaper from "./Questionpaper";
 import Projects from "./Projects";
 import Internship from "./Internship";

function Quora() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/capture-el-memento" element={<Capture />}></Route>
        <Route path="/enigmatics-club" element={<Enigmatics />}></Route>
        <Route path="/Fitme-club" element={<Fitme />}></Route>
        <Route path="/GDSC" element={<GDSC />}></Route>
        <Route path="/Impact-Club" element={<ImpactClub />}></Route>
        <Route path="/Environment-club" element={<Environment />}></Route>
        <Route path="/E-cell" element={<Ecell />}></Route>
        <Route path="/Speak-loud" element={<Speak />}></Route>
        <Route path="/Lost-and-Found" element={<Lostandfound />}></Route>
        <Route path="/Connections" element={<Connections />}></Route>
        <Route path="/News" element={<News />}></Route>
         <Route path="/Students" element={<Studen />}></Route> 
         <Route path="/Questionpaper" element={<Questionpaper />}></Route> 
         <Route path="/Internship" element={<Internship />}></Route> 
          <Route path="/Projects" element={<Projects />}></Route> 




      </Routes>
      ;
    </Router>
  );
}

export default Quora;
