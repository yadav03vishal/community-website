

import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Route, Routes, NavLink, Link } from "react-router-dom";


function Capture() {
  
    const user = useSelector(selectUser);
  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <p className="text-sonepat" style ={{color : "red"}}>
          Indian Institute of Information Technology, Sonepat
        </p>
      </div>
      <div className="qHeader__icons">
        <Link to = '/'>
        <div className="active qHeader__icon">
          <HomeIcon />
        </div> 
        </Link>
        <Link to = "/News">
         <div className="qHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        </Link>
        <Link to = "/Lost-and-Found">
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        </Link>
        <Link to ="/Connections">
        <div className="qHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        </Link>
        {/* <div className="qHeader__icon">
          <NotificationsOutlinedIcon />
        </div>  */}
      </div>
       {/* <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="search question" />
      </div> */}
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar
            // onClick={() => auth.signOut()}
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://www.pngfind.com/pngs/m/350-3508795_link-to-user-register-transparent-student-logo-png.png"
            }
          />
          {/* <p>Log out</p> */}
        </div>
        </div>
        </div>
  );
}

export default Capture;
