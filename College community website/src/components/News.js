import React from "react";
import "./News.css";
import Navbar from "./Navbar"
import Nav_news from "./Nav_news"
import { Route, Routes, NavLink, Link } from "react-router-dom"




function news() {
  
  
  return (
    <div className = "outside">
    <div className = "header">
      <Navbar />
    </div>
    <div className = "bar">
    <Nav_news />
    </div>
    <div className ="boxes">
 
    <div className = "box1">
      {/* <img
      src = "https://t4.ftcdn.net/jpg/02/21/43/63/240_F_221436387_Mbl5j5jbFwZNui4dF17sr00BgnHo2u7F.jpg"
      alt = ""
      /> */}
      <h1>NEWS</h1>
    </div>


   <a href = "http://www.iiitsonepat.ac.in/examinations/results" target="blank" style={{ textDecoration: "none" }}>
    <div className = "box2">
      {/* <img
      src = "https://t4.ftcdn.net/jpg/02/92/92/15/240_F_292921525_WzhAMt0VVmt4OIqb1V3zTAIepBgFFonb.jpg"
      alt = ""
      /> */}
     <h1>RESULTS</h1>
    </div>
    </a>

<Link to = "/Questionpaper" style={{ textDecoration: "none" }}>
    <div className = "box3">
      {/* <img
      src = "https://t3.ftcdn.net/jpg/03/61/95/14/240_F_361951445_LRXBRvLg62jdDk3n1lubN6mbZCxxfnSr.jpg"
      alt = ""
      /> */}
      <h1>QUESTION PAPERS</h1>
    </div>
    </Link>


    <Link to = "/Projects" style={{ textDecoration: "none" }}>
    <div className = "box4">
      {/* <img
      src = "https://t3.ftcdn.net/jpg/00/87/01/24/240_F_87012410_t4seKCESrRDQqYVDGF1H8Lx8Ev55NqA6.jpg"
      alt = ""
      />
       */}
       <h1>PROJECTS</h1>
    </div>
    </Link>

   <Link to = "/Internship" style={{ textDecoration: "none" }}>
    <div className = "box5">
      {/* <img
      src = "https://t4.ftcdn.net/jpg/01/32/10/01/240_F_132100149_rcEhGZI6dydtT6hU841L1G4boEGiGSvx.jpg"
      alt = ""
      /> */}
      <h1>INTERNSHIPS</h1>
    </div>
    </Link>




    </div>
    {/* <div className = "faculty_n">
       <h3>Update to be dispalyed here</h3>
    </div> */}

    
    </div>

    
    

  );
}

export default news;
