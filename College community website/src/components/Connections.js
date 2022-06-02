import React  from "react";
import "./Connections.css";
// import Navbar from "./Navbar"
import Navbar from "./Navbar";
import { Route, Routes, NavLink, Link } from "react-router-dom";


function contacts() {
  
  
  return (
    <div className = "connections">
    <div className = "header">
      <Navbar />
    </div>
    <h1>CONNECTIONS</h1>

    <div className = "faculty">
       <h3>FACULTY</h3>
       </div>

    <div className = "alumni">
     <h3>ALUMNI</h3>
    </div>
   


<Link to ="/Students" style={{ textDecoration: "none" }}>
    <div className = "students">
   <h3>STUDENTS</h3>
    </div>
    </Link>
     

    <div className = "staff">
   <h3>STAFF</h3>
    </div>
    </div>
   
  );
}

export default contacts;
